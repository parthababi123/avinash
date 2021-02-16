-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2021 at 02:43 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectmaster`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_member`
--

CREATE TABLE `tbl_member` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(255) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_member`
--

INSERT INTO `tbl_member` (`id`, `firstname`, `lastname`, `username`, `password`, `email`, `create_at`) VALUES
(1, 'Partha', 'Banerjee', 'parthababi123', '@Anamika1234', 'partha.pb123@gmail.com', '2020-12-10 15:02:19');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `username`, `hash`, `createdAt`, `updatedAt`) VALUES
(1, 'Partha', 'Banerjee', 'parthababi123', '$2a$10$8Hc4YaGgu2t2EGQQc7ni9uOJS2yWePyy1EpWJ1/JUMO0pLhw5M.qy', '2020-12-10 16:30:33', '2020-12-10 16:30:33'),
(2, 'Rooplekha', 'Banerjee', 'roop123', '$2a$10$1PXeuB30z2wknNMPemW3k.hsx8kUs2XexP5dT0Fjl8lMLEWXcesBm', '2020-12-11 14:57:24', '2020-12-11 14:57:24'),
(3, 'Timir', 'Banerjee', 'timir123', '$2a$10$wkGPCX8Bwa91mhxAQ06SoOmsnkG.9aPbHOLMElwU7uczvjeym3J.K', '2020-12-12 05:22:53', '2020-12-12 05:22:53'),
(4, 'Papia', 'Banerjee', 'papia123', '$2a$10$PDhLVnA2d5YkgYS6CdTwnuYY.eN0/W8SBncgofvhIJLtYtFkevO82', '2020-12-15 06:29:58', '2020-12-15 06:29:58'),
(5, 'Subramanium', 'Das', 'subbu123', '$2a$10$O4/s973tblFfjkV2SW9oyuBS19mBL2BHn7Y7F/6On3.H3Mr/SvVNm', '2020-12-18 08:41:25', '2020-12-18 08:41:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_member`
--
ALTER TABLE `tbl_member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_member`
--
ALTER TABLE `tbl_member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
