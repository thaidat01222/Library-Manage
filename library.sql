-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2021 at 03:30 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `No` varchar(11) NOT NULL,
  `name_of_book` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `quality` varchar(11) NOT NULL,
  `borrower` varchar(100) NOT NULL,
  `num_phone_of_borrower` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`No`, `name_of_book`, `author`, `quality`, `borrower`, `num_phone_of_borrower`) VALUES
('1', 'The Lord Of The Rings', 'Tolkien', '1', 'Legolas', '32323232'),
('2', 'Kinh Van Hoa', 'Nguyen Nhat Anh', '2', 'Khoa', '099999999'),
('3', 'An Mang Tren Tau Cao Toc', 'Minato Junishio', '1', 'An', '0199999999'),
('4', 'Baka To Test', 'yushii akihisha', '9', 'Nguyen Van Toan', '0123456987'),
('6', 'Holmes', 'Conan', '3', 'Quang', '0765656565');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_name` varchar(44) NOT NULL,
  `password` varchar(44) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_name`, `password`) VALUES
('thaiquangviet', 'quang123'),
('thaidat01222', 'quang123'),
('phanhien203', 'hiendangyeu'),
('ntkhoi', '1234abcd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD UNIQUE KEY `No` (`No`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
