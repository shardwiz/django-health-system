-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2018 at 12:26 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `getmeliv_healthcare`
--

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `available` varchar(1) NOT NULL,
  `name` varchar(100) NOT NULL,
  `speciality` varchar(500) NOT NULL,
  `currentlocation` int(11) NOT NULL,
  `password` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `equipments`
--

CREATE TABLE `equipments` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `equipmentsavailable`
--

CREATE TABLE `equipmentsavailable` (
  `id` int(11) NOT NULL,
  `equipment` int(11) NOT NULL,
  `hospital` int(11) NOT NULL,
  `available` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hospitals`
--

CREATE TABLE `hospitals` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `name` varchar(500) NOT NULL,
  `location` varchar(500) NOT NULL,
  `address` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `medicinestocks`
--

CREATE TABLE `medicinestocks` (
  `id` int(11) NOT NULL,
  `medicine` int(11) NOT NULL,
  `pharmacy` int(11) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patientrecords`
--

CREATE TABLE `patientrecords` (
  `id` int(11) NOT NULL,
  `patient` varchar(12) NOT NULL,
  `symptoms` varchar(500) NOT NULL,
  `diagnosis` varchar(500) NOT NULL,
  `addedby` int(11) NOT NULL,
  `attatchmentlink` varchar(500) NOT NULL,
  `createdat` varchar(500) NOT NULL,
  `createdon` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `aadhaarid` varchar(12) NOT NULL,
  `name` varchar(100) NOT NULL,
  `dob` varchar(20) NOT NULL,
  `address` varchar(500) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `contact` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`aadhaarid`, `name`, `dob`, `address`, `gender`, `contact`) VALUES
('395634320005', 'Jitendra Sunil Sachwani', '07/02/1997', 'Vile Parle', 'M', '9969718822');

-- --------------------------------------------------------

--
-- Table structure for table `pharmacies`
--

CREATE TABLE `pharmacies` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `address` varchar(500) NOT NULL,
  `name` int(11) NOT NULL,
  `timing` varchar(100) NOT NULL,
  `location` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `videorecords`
--

CREATE TABLE `videorecords` (
  `id` int(11) NOT NULL,
  `patient` varchar(12) NOT NULL,
  `doctor` int(11) DEFAULT NULL,
  `createdat` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `equipments`
--
ALTER TABLE `equipments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `equipmentsavailable`
--
ALTER TABLE `equipmentsavailable`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hospital` (`hospital`),
  ADD KEY `equipment` (`equipment`);

--
-- Indexes for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicinestocks`
--
ALTER TABLE `medicinestocks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `medicine` (`medicine`),
  ADD KEY `pharmacy` (`pharmacy`);

--
-- Indexes for table `patientrecords`
--
ALTER TABLE `patientrecords`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient` (`patient`),
  ADD KEY `addedby` (`addedby`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`aadhaarid`);

--
-- Indexes for table `pharmacies`
--
ALTER TABLE `pharmacies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videorecords`
--
ALTER TABLE `videorecords`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctor` (`doctor`),
  ADD KEY `patient` (`patient`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `equipments`
--
ALTER TABLE `equipments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `equipmentsavailable`
--
ALTER TABLE `equipmentsavailable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hospitals`
--
ALTER TABLE `hospitals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medicinestocks`
--
ALTER TABLE `medicinestocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patientrecords`
--
ALTER TABLE `patientrecords`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pharmacies`
--
ALTER TABLE `pharmacies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `videorecords`
--
ALTER TABLE `videorecords`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `equipmentsavailable`
--
ALTER TABLE `equipmentsavailable`
  ADD CONSTRAINT `equipmentsavailable_ibfk_1` FOREIGN KEY (`hospital`) REFERENCES `hospitals` (`id`),
  ADD CONSTRAINT `equipmentsavailable_ibfk_2` FOREIGN KEY (`equipment`) REFERENCES `equipments` (`id`);

--
-- Constraints for table `medicinestocks`
--
ALTER TABLE `medicinestocks`
  ADD CONSTRAINT `medicinestocks_ibfk_1` FOREIGN KEY (`medicine`) REFERENCES `medicines` (`id`),
  ADD CONSTRAINT `medicinestocks_ibfk_2` FOREIGN KEY (`pharmacy`) REFERENCES `pharmacies` (`id`);

--
-- Constraints for table `patientrecords`
--
ALTER TABLE `patientrecords`
  ADD CONSTRAINT `patientrecords_ibfk_1` FOREIGN KEY (`patient`) REFERENCES `patients` (`aadhaarid`),
  ADD CONSTRAINT `patientrecords_ibfk_2` FOREIGN KEY (`addedby`) REFERENCES `doctors` (`id`);

--
-- Constraints for table `videorecords`
--
ALTER TABLE `videorecords`
  ADD CONSTRAINT `videorecords_ibfk_1` FOREIGN KEY (`doctor`) REFERENCES `doctors` (`id`),
  ADD CONSTRAINT `videorecords_ibfk_2` FOREIGN KEY (`patient`) REFERENCES `patients` (`aadhaarid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
