-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2024 at 07:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uniscore`
--

-- --------------------------------------------------------

--
-- Table structure for table `lecturers`
--

CREATE TABLE `lecturers` (
  `id` int(11) NOT NULL,
  `lecturerName` varchar(60) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(60) NOT NULL,
  `lecID` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lecturers`
--

INSERT INTO `lecturers` (`id`, `lecturerName`, `phone`, `email`, `lecID`) VALUES
(1, 'welangai eric mmasi', '0729698881', 'welangaieric@gmail.com', 'lec502');

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `studentAdm` varchar(60) NOT NULL,
  `unitName` varchar(60) NOT NULL,
  `unitCode` varchar(15) NOT NULL,
  `Marks` int(3) NOT NULL,
  `semester` int(2) NOT NULL,
  `academicYear` varchar(10) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `studentAdm`, `unitName`, `unitCode`, `Marks`, `semester`, `academicYear`) VALUES
(4, 'bse230', 'Circuit Theory', 'EE101', 85, 1, '2021-2022'),
(5, 'bse230', 'Electromagnetic Fields', 'EE102', 90, 1, '2021-2022'),
(6, 'bse230', 'Digital Electronics', 'EE103', 75, 1, '2021-2022'),
(7, 'bse230', 'Power Systems', 'EE104', 88, 1, '2021-2022'),
(8, 'bse230', 'Control Systems', 'EE105', 92, 1, '2021-2022'),
(9, 'bse230', 'Microprocessors', 'EE106', 78, 2, '2021-2022'),
(10, 'bse230', 'Signals and Systems', 'EE107', 82, 2, '2021-2022'),
(11, 'bse230', 'Electric Drives', 'EE108', 69, 2, '2021-2022'),
(12, 'bse230', 'Renewable Energy Systems', 'EE109', 91, 2, '2021-2022'),
(13, 'bse230', 'Communication Systems', 'EE110', 87, 2, '2021-2022'),
(14, 'bse230', 'Power Electronics', 'EE111', 80, 3, '2021-2022'),
(15, 'bse230', 'Electric Machines', 'EE112', 85, 3, '2021-2022'),
(16, 'bse230', 'High Voltage Engineering', 'EE113', 78, 3, '2021-2022'),
(17, 'bse230', 'Renewable Energy Technologies', 'EE114', 88, 3, '2021-2022'),
(18, 'bse230', 'Electric Vehicle Technology', 'EE115', 91, 3, '2021-2022'),
(19, 'bse230', 'Analog Electronics', 'EE201', 82, 1, '2022-2023'),
(20, 'bse230', 'Electrical Measurements', 'EE202', 88, 1, '2022-2023'),
(21, 'bse230', 'Power System Analysis', 'EE203', 75, 1, '2022-2023'),
(22, 'bse230', 'Renewable Energy Integration', 'EE204', 90, 1, '2022-2023'),
(23, 'bse230', 'Digital Signal Processing', 'EE205', 85, 1, '2022-2023'),
(24, 'bse230', 'Electric Power Utilization', 'EE206', 79, 2, '2022-2023'),
(25, 'bse230', 'Smart Grids', 'EE207', 86, 2, '2022-2023'),
(26, 'bse230', 'Embedded Systems', 'EE208', 73, 2, '2022-2023'),
(27, 'bse230', 'High Voltage Direct Current', 'EE209', 88, 2, '2022-2023'),
(28, 'bse230', 'Wireless Communication Systems', 'EE210', 84, 2, '2022-2023'),
(29, 'bse230', 'Power System Protection', 'EE211', 85, 3, '2022-2023'),
(30, 'bse230', 'Renewable Energy Policy', 'EE212', 82, 3, '2022-2023'),
(31, 'bse230', 'Industrial Automation', 'EE213', 79, 3, '2022-2023'),
(32, 'bse230', 'Electric Vehicle Charging Systems', 'EE214', 88, 3, '2022-2023'),
(33, 'bse230', 'Optical Communication Systems', 'EE215', 90, 3, '2022-2023'),
(34, 'bse230', 'Renewable Energy Economics', 'EE301', 90, 1, '2023-2024'),
(35, 'bse230', 'Power System Dynamics', 'EE302', 85, 1, '2023-2024'),
(36, 'bse230', 'Electric Grid Operation', 'EE303', 78, 1, '2023-2024'),
(37, 'bse230', 'Advanced Control Systems', 'EE304', 92, 1, '2023-2024'),
(38, 'bse230', 'Machine Learning for Electrical Engineering', 'EE305', 87, 1, '2023-2024'),
(39, 'bse204', 'Fundamentals of Electrical Engineering', 'EE101', 45, 1, '2021-2022'),
(40, 'bse204', 'Digital Logic Design', 'EE102', 40, 1, '2021-2022'),
(41, 'bse204', 'Introduction to Programming', 'CS101', 35, 1, '2021-2022'),
(42, 'bse204', 'Calculus I', 'MA101', 48, 1, '2021-2022'),
(43, 'bse204', 'Physics I', 'PH101', 38, 1, '2021-2022'),
(44, 'bse204', 'Electric Circuits', 'EE103', 42, 2, '2021-2022'),
(45, 'bse204', 'Electromagnetics', 'EE104', 30, 2, '2021-2022'),
(46, 'bse204', 'Object Oriented Programming', 'CS102', 37, 2, '2021-2022'),
(47, 'bse204', 'Calculus II', 'MA102', 39, 2, '2021-2022'),
(48, 'bse204', 'Physics II', 'PH102', 41, 2, '2021-2022'),
(49, 'bse204', 'Signal Processing', 'EE105', 36, 3, '2021-2022'),
(50, 'bse204', 'Data Structures', 'CS103', 44, 3, '2021-2022'),
(51, 'bse204', 'Discrete Mathematics', 'MA103', 33, 3, '2021-2022'),
(52, 'bse204', 'Thermodynamics', 'ME101', 32, 3, '2021-2022'),
(53, 'bse204', 'Introduction to Electronics', 'EE106', 45, 3, '2021-2022'),
(54, 'bse204', 'Analog Electronics', 'EE201', 48, 1, '2022-2023'),
(55, 'bse204', 'Electrical Measurements', 'EE202', 42, 1, '2022-2023'),
(56, 'bse204', 'Signals and Systems', 'EE203', 30, 1, '2022-2023'),
(57, 'bse204', 'Digital Signal Processing', 'EE204', 33, 1, '2022-2023'),
(58, 'bse204', 'Control Systems', 'EE205', 35, 1, '2022-2023'),
(59, 'bse204', 'Microprocessors', 'EE206', 39, 2, '2022-2023'),
(60, 'bse204', 'Communication Systems', 'EE207', 31, 2, '2022-2023'),
(61, 'bse204', 'Power Electronics', 'EE208', 44, 2, '2022-2023'),
(62, 'bse204', 'Embedded Systems', 'EE209', 38, 2, '2022-2023'),
(63, 'bse204', 'VLSI Design', 'EE210', 36, 2, '2022-2023'),
(64, 'bse204', 'Renewable Energy Systems', 'EE211', 40, 3, '2022-2023'),
(65, 'bse204', 'Wireless Communication', 'EE212', 37, 3, '2022-2023'),
(66, 'bse204', 'Robotics', 'EE213', 32, 3, '2022-2023'),
(67, 'bse204', 'Network Analysis', 'EE214', 41, 3, '2022-2023'),
(68, 'bse204', 'Electric Drives', 'EE215', 45, 3, '2022-2023'),
(69, 'bse204', 'Power Systems', 'EE301', 49, 1, '2023-2024'),
(70, 'bse204', 'Control Systems II', 'EE302', 37, 1, '2023-2024'),
(71, 'bse204', 'Electric Machines', 'EE303', 32, 1, '2023-2024'),
(72, 'bse204', 'Power System Protection', 'EE304', 30, 1, '2023-2024'),
(73, 'bse204', 'High Voltage Engineering', 'EE305', 35, 1, '2023-2024'),
(74, 'bse204', 'Power System Operation', 'EE306', 39, 2, '2023-2024'),
(75, 'bse204', 'Advanced Electronics', 'EE307', 31, 2, '2023-2024'),
(76, 'bse204', 'Smart Grid Technology', 'EE308', 44, 2, '2023-2024'),
(77, 'bse204', 'Energy Management', 'EE309', 38, 2, '2023-2024'),
(78, 'bse204', 'Electric Vehicles', 'EE310', 36, 2, '2023-2024'),
(79, 'bse204', 'Distributed Generation', 'EE311', 40, 3, '2023-2024'),
(80, 'bse204', 'Power Quality', 'EE312', 37, 3, '2023-2024'),
(81, 'bse204', 'Electric Power Utilization', 'EE313', 32, 3, '2023-2024'),
(82, 'bse204', 'Energy Systems', 'EE314', 41, 3, '2023-2024'),
(83, 'bse204', 'Smart Grid Communication', 'EE315', 45, 3, '2023-2024');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `studentName` varchar(30) NOT NULL,
  `course` varchar(60) NOT NULL,
  `year` year(4) NOT NULL,
  `semester` int(2) NOT NULL,
  `stdAdm` varchar(10) NOT NULL,
  `phone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `studentName`, `course`, `year`, `semester`, `stdAdm`, `phone`) VALUES
(1, 'Welangai Eric', 'software', '2021', 1, 'bse230', '0110517055'),
(5, 'Tom', 'software', '2003', 2, 'bse204', '0110517058');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `lecturerName` varchar(60) NOT NULL,
  `unitName` varchar(15) NOT NULL,
  `unitCode` varchar(7) NOT NULL,
  `lecID` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `lecturerName`, `unitName`, `unitCode`, `lecID`) VALUES
(4, 'welangai eric mmasi', 'Circuit Theory', 'EE101', 'lec502'),
(5, 'welangai eric mmasi', 'Electromagnetic', 'EE102', 'lec502'),
(6, 'welangai eric mmasi', 'Digital Electro', 'EE103', 'lec502'),
(7, 'welangai eric mmasi', 'Power Systems', 'EE104', 'lec502'),
(8, 'welangai eric mmasi', 'Control Systems', 'EE105', 'lec502');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `phone`, `email`, `password`, `date_created`, `role`) VALUES
(39, 'Welangai', 'Eric', '0110517057', 'ericwelangai@gmail.com', '$2b$10$0M.8h29W18J/cWWPFJX65eAmXoKGGs.lLFgvrwYyGDxNzZFXF/OI6', '2024-06-16 23:59:04', 'admin'),
(40, 'Eric', 'Welangai', '0110517055', 'welangaieric@gmail.com', '$2b$10$5FHKuRRITlmRiuiDQDFLpez6SBScg4K5xxD48YYpwPmVKMM/cv5FC', '2024-06-17 00:40:48', 'student'),
(41, 'Eric', 'Welangai', '0729698881', 'keinkalto2@gmail.com', '$2b$10$ZLG/31k6.DPBT83Iql4Ye.kAeiGNdIEDutNzLDs4aT7M3yE6xp.MS', '2024-06-17 08:36:42', 'lecturer'),
(42, 'Tom', 'Henricks', '0110517058', 'welangai@konnektsmartlife.com', '$2b$10$u2z4V7sfr.g.N6B.fTVMMOk14tLXQwNdOeWBQnxdx8jtSLdda5COu', '2024-06-18 11:15:57', 'student'),
(43, 'John', 'Doe', '0799333639', 'uniscorepro@gmail.com', '$2b$10$zmdnOlTTu37mPaNIJ9PHi.MkI5i/KTl1qt9rFOq9ThTtR8xoCaf/e', '2024-06-19 08:22:46', 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lecturers`
--
ALTER TABLE `lecturers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lecID` (`lecID`),
  ADD KEY `phone` (`phone`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id`),
  ADD KEY `studentAdm` (`studentAdm`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stdAdm` (`stdAdm`),
  ADD KEY `stdAdm_2` (`stdAdm`),
  ADD KEY `phone` (`phone`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`),
  ADD KEY `unitCode` (`unitCode`),
  ADD KEY `lecID` (`lecID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `phone_2` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lecturers`
--
ALTER TABLE `lecturers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lecturers`
--
ALTER TABLE `lecturers`
  ADD CONSTRAINT `lecturers_ibfk_1` FOREIGN KEY (`phone`) REFERENCES `users` (`phone`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `result`
--
ALTER TABLE `result`
  ADD CONSTRAINT `result_ibfk_1` FOREIGN KEY (`studentAdm`) REFERENCES `students` (`stdAdm`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`phone`) REFERENCES `users` (`phone`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `units`
--
ALTER TABLE `units`
  ADD CONSTRAINT `units_ibfk_1` FOREIGN KEY (`lecID`) REFERENCES `lecturers` (`lecID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
