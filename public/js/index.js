(() => {
  const serverUrl = "http://127.0.0.1:3000";

  // Function to handle all AJAX calls to either fetch or send data to the server
  const Resources = (form, url, type) => {
    let payload;

    if (type === "get") {
      payload = {
        type: type,
        url: `${serverUrl}${url}`,
      };
    } else {
      payload = {
        type: type,
        url: `${serverUrl}${url}`,
        data: form.serialize(),
      };
    }

    return new Promise((resolve, reject) => {
      $.ajax({
        ...payload,
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  };
  // show snackbar and hide
  const showSnackbar = (message) => {
    $(".snackbar").fadeIn();
    $(".message").html(message);
    setTimeout(() => {
      $(".snackbar").fadeOut();
    }, 6000);
  };
  //  show snack bar if message is available
  if ($("#message")) {
    showSnackbar($("#message").val());
  }
  //   function to download pdf
  function downloadPDF(pdf) {
    const element = document.getElementById(pdf);
    html2pdf().from(element).save("downloaded.pdf");
  }
  // =================================================================================================================
  // FETCHING RESOURCES
  // =================================================================================================================
  // get students btn
  const studentBtn = $("#studentsBtn");
  studentBtn.on("click", () => {
    Resources("none", `/students/`, "get")
      .then((data) => {
        console.log(data);
        const display = $("#studentTable_body");
        display.html("");
        const appendStudent = (student) => {
          const template = ` 
                <tr>
                    <td>${student.studentName}</td>
                    <td>${student.stdAdm}</td>
                    <td>${student.course}</td>
                    <td>${student.year}</td>
                    <td>${student.semester}</td>
                </tr>`;
          display.append(template);
        };
        if (Array.isArray(data)) {
          data.forEach(appendStudent);
        } else if (data && typeof data === "object") {
          appendStudent(data);
        } else {
          console.error("Invalid data format");
          display.innerHTML =
            '<tr><td colspan="5">No student data available</td></tr>';
        }
      })
      .catch((error) => {
        console.log(error);
        showSnackbar("Error Fetching Students");
      });
  });
  // get Lecturers btn
  const lecBtn = $("#lecBtn");
  lecBtn.on("click", () => {
    Resources("none", `/lecturers/`, "get")
      .then((data) => {
        console.log(data);
        const display = $("#lec_body");
        display.html("");
        const appendLecturer = (lec) => {
          const template = ` 
               <tr>
                    <td>${lec.lecturerName}</td>
                    <td>${lec.id}</td>
                    <td>${lec.phone}</td>
                    <td>${lec.email}</td>
                </tr>`;
          display.append(template);
        };
        if (Array.isArray(data)) {
          data.forEach(appendLecturer);
        } else if (data && typeof data === "object") {
          appendLecturer(data);
        } else {
          console.error("Invalid data format");
          display.innerHTML =
            '<tr><td colspan="5">No Lecturer data available</td></tr>';
        }
      })
      .catch((error) => {
        console.log(error);
        showSnackbar("Error Fetching Students");
      });
  });
  // =================================================================================================
  // ADDING RESOURCES TO DATABASE
  // ================================================================================================
  // add users
  const addUserForm = $("#addUser");
  addUserForm.on("submit", (e) => {
    e.preventDefault();
    Resources(addUserForm, "/users/", "post")
      .then((data) => {
        console.log("Success:", data);
        showSnackbar("success adding User");
        // Handle success (e.g., show a success message, reset form, etc.)
      })
      .catch((error) => {
        console.error("Error:", error);
        showSnackbar("Error adding User");
        // Handle error (e.g., show an error message)
      });
  });

  const addUserBtn = $(".addUserBtn");
  addUserBtn.on("click", () => {
    addUserForm.submit(); // Trigger the form submit event
  });
  // add results
  const addResultForm = $("#addResultForm");
  addResultForm.on("submit", (e) => {
    e.preventDefault();
    Resources(addResultForm, "/results/", "post")
      .then((data) => {
        console.log("Success:", data);
        showSnackbar("success adding Result");
        // Handle success (e.g., show a success message, reset form, etc.)
      })
      .catch((error) => {
        console.error("Error:", error);
        showSnackbar("Error adding Result");
        // Handle error (e.g., show an error message)
      });
  });

  const addResultBtn = $("#addResultBtn");
  addResultBtn.on("click", () => {
    addResultForm.submit(); // Trigger the form submit event
  });
  // add student
  const addStudentForm = $("#addStudentForm");
  addStudentForm.on("submit", (e) => {
    e.preventDefault();
    Resources(addStudentForm, "/students/", "post")
      .then((data) => {
        console.log("Success:", data);
        showSnackbar("success adding Student");
        // Handle success (e.g., show a success message, reset form, etc.)
      })
      .catch((error) => {
        console.error("Error:", error);
        showSnackbar("Error adding Student");
        // Handle error (e.g., show an error message)
      });
  });

  const addStudentBtn = $("#addStudentBtn");
  addStudentBtn.on("click", () => {
    addStudentForm.submit(); // Trigger the form submit event
  });
  // add lec
  const addLecForm = $("#addLecForm");
  addLecForm.on("submit", (e) => {
    e.preventDefault();
    Resources(addLecForm, "/lecturers/", "post")
      .then((data) => {
        console.log("Success:", data);
        showSnackbar("success adding Lecturer");
        // Handle success (e.g., show a success message, reset form, etc.)
      })
      .catch((error) => {
        console.error("Error:", error);
        showSnackbar("Error adding Lecturer");
        // Handle error (e.g., show an error message)
      });
  });

  const addLecBtn = $("#addLecBtn");
  addLecBtn.on("click", () => {
    addLecForm.submit(); // Trigger the form submit event
  });
  function getGrade(marks) {
    let grade;

    switch (true) {
      case marks >= 80:
        grade = "A";
        break;
      case marks >= 70:
        grade = "B";
        break;
      case marks >= 60:
        grade = "C";
        break;
      case marks >= 50:
        grade = "D";
        break;
      case marks >= 40:
        grade = "E";
        break;
      default:
        grade = "F";
    }

    return grade;
  }
  // ========================================================
  // ADMIN SECTION
  // ========================================================
  function adminAnalytics(data) {
    const passThreshold = 50; // Define pass threshold
    const ctx = document.getElementById("myChart").getContext("2d");
    let chart;
  
    const calculatePassFail = (data, yearFilter) => {
      const filteredData =
        yearFilter === "all"
          ? data
          : data.filter((record) => record.academicYear === yearFilter);
  
      const semesters = [...new Set(filteredData.map((record) => record.semester))];
      const academicYears = yearFilter === "all" 
        ? [...new Set(data.map((record) => record.academicYear))]
        : [yearFilter];
  
      const passFailData = semesters
        .map((semester) => {
          return academicYears.map((year) => {
            const records = filteredData.filter(
              (record) => record.semester === semester && record.academicYear === year
            );
            const passed = records.filter((record) => record.Marks >= passThreshold).length;
            const failed = records.length - passed;
            return {
              academicYear: year,
              semester: semester,
              passed: passed,
              failed: failed,
            };
          });
        })
        .flat();
  
      return { semesters, academicYears, passFailData };
    };
  
    const updatePassFailChart = (data, yearFilter) => {
      const { semesters, academicYears, passFailData } = calculatePassFail(data, yearFilter);
  
      const labels = academicYears;
      const passedData = labels.map((label) => {
        return semesters.map((semester) => {
          const record = passFailData.find(
            (record) => record.academicYear === label && record.semester === semester
          );
          return record ? record.passed : 0;
        });
      }).flat();
  
      const failedData = labels.map((label) => {
        return semesters.map((semester) => {
          const record = passFailData.find(
            (record) => record.academicYear === label && record.semester === semester
          );
          return record ? record.failed : 0;
        });
      }).flat();
  
      if (chart) {
        chart.destroy();
      }
      console.log(failedData, passFailData);
  
      chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Passed",
              data: passedData,
              backgroundColor: "#24e291",
            },
            {
              label: "Failed",
              data: failedData,
              backgroundColor: "#10779e",
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "Academic Year",
              },
            },
            y: {
              title: {
                display: true,
                text: "Number of Subjects",
              },
              beginAtZero: true,
            },
          },
        },
      });
    };
  
    // Function to update chart based on selected year
    const updateChartByYear = (year) => {
      updatePassFailChart(data, year);
    };
  
    // Add event listeners to year buttons
    const yearButtons = document.querySelectorAll(".yearbtnn");
    yearButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedYear = button.dataset.year;
        updateChartByYear(selectedYear);
      });
    });
  
    // Call updatePassFailChart with initial data for all years
    updatePassFailChart(data, "all");
  }
  
  // Fetch data and call adminAnalytics if user is admin
  const user = $('#type').val();
  if (user === 'admin') {
    Resources('none', '/results/', 'get')
      .then((data) => {
        console.log(data);
        adminAnalytics(data);
        setupEventHandlers(data);
      })
      .catch((err) => console.log(err));
      Resources('none', '/students/', 'get')
      .then((data) => {
        console.log(data);
        // adminAnalytics(data);
        let students = data.length
        $('#studentCount').html(students)

      })
      .catch((err) => console.log(err));
      Resources('none', '/lecturers/', 'get')
      .then((data) => {
        console.log(data);
        let lecturers = data.length
        $('#lecCount').html(lecturers)
        // adminAnalytics(data);

      })
      .catch((err) => console.log(err));

      function setupEventHandlers(data) {
        const selectedYear = $('#yearSelect').val();
        const selectedSemester = $('#semesterSelect').val();
        updateResultsTable(data, selectedYear, selectedSemester);
        $('.genBtn').on('click', () => {
          const selectedYear = $('#yearSelect').val();
          const selectedSemester = $('#semesterSelect').val();
          updateResultsTable(data, selectedYear, selectedSemester);
        });
      }
    
      function updateResultsTable(data, yearFilter, semesterFilter) {
        

        const filteredData = data.filter((record) => {
          const matchYear = record.academicYear === yearFilter;
          const matchSemester = record.semester == semesterFilter;
          return matchYear && matchSemester;
        });
        console.log(filteredData)
    
        const units = [...new Set(filteredData.map((record) => record.unitName))];
        const years = ['2022', '2023', '2024'];
        const tableBody = $('#resultsTable tbody');
        tableBody.empty();
        units.forEach((unit) => {
          const row = $('<tr></tr>');
          row.append(`<td>${unit}</td>`);
          years.forEach((year) => {
            const record = filteredData.find((record) => record.unitName === unit && record.academicYear.includes(year));
            const marks = record ? record.Marks : 0;
            row.append(`<td>${marks}</td>`);
          });
          tableBody.append(row);
        });
    
        const totalRow = $('<tr></tr>').append('<td class="bold">Total Average</td>');
        years.forEach((year) => {
          const total = filteredData.filter((record) => record.academicYear.includes(year))
            .reduce((sum, record) => sum + record.Marks / filteredData.length, 0);
          totalRow.append(`<td class="bold">${total.toFixed(2)}</td>`);
        });
        tableBody.append(totalRow);
      }
    
    }
  
  
  
  //   ========================================================
  // STUDNT SECTION
  // ==========================================================
  if(user == 'student'){
  // analytics function
  function getStudentAnalytics(adm) {
    Resources("none", `/results/analytics/${adm}`, "get")
      .then((data) => {
        $("#chartcontainerr").html("");
        $("#chartcontainerr").html(
          '<canvas id="averageMarksChart"></canvas></div>'
        );

        const ctx = document
          .getElementById("averageMarksChart")
          .getContext("2d");
        let chart;

        const calculateAverageMarks = (data, yearFilter) => {
          const filteredData =
            yearFilter === "all"
              ? data
              : data.filter((record) => record.academicYear === yearFilter);
          const semesters = [
            ...new Set(filteredData.map((record) => record.semester)),
          ];
          const academicYears = [
            ...new Set(filteredData.map((record) => record.academicYear)),
          ];

          const averageMarks = semesters
            .map((semester) => {
              return academicYears.map((year) => {
                const records = filteredData.filter(
                  (record) =>
                    record.semester === semester && record.academicYear === year
                );
                const totalMarks = records.reduce(
                  (sum, record) => sum + record.Marks,
                  0
                );
                const average = records.length
                  ? totalMarks / records.length
                  : 0;
                return {
                  academicYear: year,
                  semester: semester,
                  averageMarks: average.toFixed(2),
                };
              });
            })
            .flat();

          return { semesters, academicYears, averageMarks };
        };

        const updateChart = (data, yearFilter) => {
          const { semesters, academicYears, averageMarks } =
            calculateAverageMarks(data, yearFilter);

          const labels = academicYears;
          const datasets = semesters.map((semester) => {
            const data = labels.map((label) => {
              const record = averageMarks.find(
                (record) =>
                  record.academicYear === label && record.semester === semester
              );
              return record ? record.averageMarks : 0;
            });

            return {
              label: `Semester ${semester}`,
              data: data,
              backgroundColor: getRandomColor(), // Function to get a random color
            };
          });

          if (chart) {
            chart.destroy();
          }

          chart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: labels,
              datasets: datasets,
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Academic Year",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Average Marks",
                  },
                  beginAtZero: true,
                },
              },
            },
          });
        };

        document
          .getElementById("yearSelect")
          .addEventListener("change", (event) => {
            const selectedYear = event.target.value;
            updateChart(data, selectedYear);
          });

        const getRandomColor = () => {
          const letters = "0123456789ABCDEF";
          let color = "#";
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };

        // Initial chart render with all data
        updateChart(data, "all");
      })
      .catch((error) => {
        console.log(error);
        showSnackbar("Error Fetching data");
      });
  }

  const phone = $("#Studentphone").val();
  let admission;
  Resources("none", `/students/${phone}`, "get")
    .then((data) => {
      admission = data.stdAdm;
      // Call getStudentAnalytics here if you want to ensure admission is set before calling it
      getStudentAnalytics(admission);
    })
    .catch((error) => {
      console.error("Error fetching student data:", error);
    });

  $("#analyticsBtn").on("click", () => {
    // Check if admission is available before calling getStudentAnalytics
    console.log(admission);
    if (admission) {
      getStudentAnalytics(admission);
    } else {
      console.error("Admission number is not available yet.");
    }
  });
  if (phone) {
    $("#getResults").on("click", () => {
      const academicYear = $("#academicYear").val();
      const semester = $("#semester").val();
      Resources("none", `/students/${phone}`, "get")
        .then((data) => {
          $(".stdName").html(data.studentName);
          $(".stdAdm").html(data.stdAdm);
          Resources(
            "none",
            `/results/myresults/${data.stdAdm}/${academicYear}/${semester}`,
            "get"
          )
            .then((data) => {
              const display = $(".std_myresults");
              display.html("");
              const appendResult = (result) => {
                let grade = getGrade(result.Marks);
                const template = ` 
                         <tr>
                             <td>${result.unitCode}</td>
                             <td>${result.unitName}</td>
                             <td>${result.Marks}</td>
                             <td>${grade}</td>

                         </tr>`;
                display.append(template);
              };
              if (Array.isArray(data)) {
                data.forEach(appendResult);
              } else if (data && typeof data === "object") {
                appendResult(data);
              } else {
                display.html(
                  '<tr><td colspan="5">No student result data available</td></tr>'
                );
              }
            })
            .catch((error) => {
              $(".std_myresults").html(
                '<tr><td colspan="5">No student result data available</td></tr>'
              );
              showSnackbar("Error Fetching data");
            });
        })
        .catch((error) => {
          $(".std_myresults").html(
            '<tr><td colspan="5">No student result data available</td></tr>'
          );

          showSnackbar("Error Fetching data");
        });
    });
  }
  $("#downloadpdf").on("click", () => {
    const pdf = "Report";
    downloadPDF(pdf);
  });
  }
  
  // function to calculate grade


})();
