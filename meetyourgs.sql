-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2021 at 07:31 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetyourgs`
--

-- --------------------------------------------------------

--
-- Table structure for table `agrimaterial`
--

CREATE TABLE `agrimaterial` (
  `addeddate` date NOT NULL,
  `materialid` int(100) NOT NULL,
  `materialname` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `agrimaterial`
--

INSERT INTO `agrimaterial` (`addeddate`, `materialid`, `materialname`, `description`, `quantity`) VALUES
('2021-08-18', 2, 'Pesticide', '', '100 Bottles'),
('2021-08-22', 3, 'pohara', '', '150 Bags');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appID` int(20) NOT NULL,
  `gsname` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `description` varchar(150) NOT NULL,
  `nic` varchar(12) NOT NULL,
  `name` varchar(50) NOT NULL,
  `home_no` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` int(10) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `des` varchar(50) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'Pending',
  `book_status` varchar(15) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`appID`, `gsname`, `date`, `startTime`, `endTime`, `description`, `nic`, `name`, `home_no`, `address`, `phone`, `email`, `des`, `status`, `book_status`) VALUES
(1, 'Dineshiya', '2021-08-29', '10:00:00', '11:05:00', 'Generic appointments', '912345678V', 'Namal Perera', '159', 'Gampola road, kandy', 712345678, 'namal@gmail.com', 'birth certificate daetails', 'Pending', '1'),
(6, 'Dineshiya', '2021-08-29', '05:01:20', '09:00:00', 'Pensioner details checked', '', '', '', '', NULL, '', '', 'Pending', '0');

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE `complaint` (
  `complaintID` int(10) NOT NULL,
  `topic` varchar(150) NOT NULL,
  `problem` varchar(250) NOT NULL,
  `date` date NOT NULL,
  `time` time(6) NOT NULL,
  `userID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `constsmaterial`
--

CREATE TABLE `constsmaterial` (
  `addeddate` date NOT NULL,
  `materialid` int(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `constsmaterial`
--

INSERT INTO `constsmaterial` (`addeddate`, `materialid`, `description`, `quantity`) VALUES
('2021-08-18', 1, 'Railway Project', '150 Rods'),
('2021-08-19', 3, 'House Renovation', '120 Sheets'),
('2021-08-21', 5, 'Lake Renovation ', '140');

-- --------------------------------------------------------

--
-- Table structure for table `donation`
--

CREATE TABLE `donation` (
  `donorID` int(11) NOT NULL,
  `donorName` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `amount` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `donation`
--

INSERT INTO `donation` (`donorID`, `donorName`, `address`, `phone`, `email`, `date`, `amount`) VALUES
(1, 'Salman', 'Gampola Road, Hapugastalawa, Nawalapitiya', 2147483647, 'mohamedsalmandeen@gmail.com', '2021-08-24', 25000),
(2, 'Dineshiya', 'Silwa Mawatta, Colombo 06', 711655166, 'smadonadini@gmail.com', '2021-08-24', 25001);

-- --------------------------------------------------------

--
-- Table structure for table `finance`
--

CREATE TABLE `finance` (
  `date` date NOT NULL,
  `receiptno` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `income` int(100) DEFAULT NULL,
  `expense` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `finance`
--

INSERT INTO `finance` (`date`, `receiptno`, `description`, `income`, `expense`) VALUES
('0000-00-00', '', '', 0, NULL),
('2021-08-21', '1550', 'Reimbursement from Government', 54500, NULL),
('2021-08-21', '156474', 'Lunch', NULL, 1401),
('2021-08-21', '15649', 'Lunchh', NULL, 2500),
('2021-08-24', '156501', 'hg', 95217523, NULL),
('2021-08-22', '1765G', 'Reimbursement from Government', 25000, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `formtemplate`
--

CREATE TABLE `formtemplate` (
  `formTemplateID` int(20) NOT NULL,
  `formTopic` varchar(50) NOT NULL,
  `formTemplate` text NOT NULL,
  `expDate` date NOT NULL,
  `description` varchar(200) NOT NULL,
  `activeStatus` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `forumpost`
--

CREATE TABLE `forumpost` (
  `postID` int(20) NOT NULL,
  `postText` varchar(250) NOT NULL,
  `topic` varchar(150) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `emailID` varchar(50) NOT NULL,
  `comments` varchar(150) NOT NULL,
  `rate` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fund`
--

CREATE TABLE `fund` (
  `date` date NOT NULL,
  `fundID` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `debit` int(100) DEFAULT NULL,
  `credit` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fund`
--

INSERT INTO `fund` (`date`, `fundID`, `description`, `debit`, `credit`) VALUES
('2021-08-21', '250S', 'Railway Project', NULL, 15000),
('2021-08-21', '251S', 'Railway Project', NULL, 15000),
('2021-08-22', '252S', 'Railway Project', NULL, 15000),
('2021-08-20', '2540G', 'Railway Project', 2000000, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `newconstmaterial`
--

CREATE TABLE `newconstmaterial` (
  `materialid` int(100) NOT NULL,
  `materialname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `newconstmaterial`
--

INSERT INTO `newconstmaterial` (`materialid`, `materialname`) VALUES
(1, 'Rainforcements'),
(2, 'Bar'),
(3, 'Roofing Sheets 12 feet'),
(4, 'Malabar'),
(5, 'Bricks');

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `noticeID` int(11) NOT NULL,
  `topic` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL,
  `uploadDate` date NOT NULL,
  `expDate` date NOT NULL,
  `active_status` varchar(10) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notice`
--

INSERT INTO `notice` (`noticeID`, `topic`, `description`, `uploadDate`, `expDate`, `active_status`) VALUES
(1, 'Company Meeting ', 'This is for those above 60 years', '2021-08-28', '2021-08-30', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `othermaterial`
--

CREATE TABLE `othermaterial` (
  `addeddate` datetime NOT NULL,
  `materialid` int(100) NOT NULL,
  `materialname` varchar(100) NOT NULL,
  `description` varchar(110) NOT NULL,
  `quantity` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `othermaterial`
--

INSERT INTO `othermaterial` (`addeddate`, `materialid`, `materialname`, `description`, `quantity`) VALUES
('2021-08-19 00:00:00', 1, 'Dry Rations', '', '150 Packages'),
('2021-08-24 00:00:00', 2, 'Dry Rations', '', '150 Packages');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `project_id` int(10) NOT NULL,
  `projectname` varchar(100) NOT NULL,
  `location` varchar(150) NOT NULL,
  `contractorName` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `image` text NOT NULL,
  `intro` varchar(150) NOT NULL,
  `read_more` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `query`
--

CREATE TABLE `query` (
  `queryID` int(20) NOT NULL,
  `queryMessage` varchar(250) NOT NULL,
  `response` varchar(200) NOT NULL,
  `genmessage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(100) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` int(10) NOT NULL,
  `userType` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(12) NOT NULL,
  `status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agrimaterial`
--
ALTER TABLE `agrimaterial`
  ADD PRIMARY KEY (`materialid`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appID`);

--
-- Indexes for table `complaint`
--
ALTER TABLE `complaint`
  ADD PRIMARY KEY (`complaintID`);

--
-- Indexes for table `constsmaterial`
--
ALTER TABLE `constsmaterial`
  ADD KEY `matid` (`materialid`);

--
-- Indexes for table `donation`
--
ALTER TABLE `donation`
  ADD PRIMARY KEY (`donorID`);

--
-- Indexes for table `finance`
--
ALTER TABLE `finance`
  ADD PRIMARY KEY (`receiptno`) USING BTREE;

--
-- Indexes for table `formtemplate`
--
ALTER TABLE `formtemplate`
  ADD PRIMARY KEY (`formTemplateID`);

--
-- Indexes for table `forumpost`
--
ALTER TABLE `forumpost`
  ADD PRIMARY KEY (`postID`);

--
-- Indexes for table `fund`
--
ALTER TABLE `fund`
  ADD PRIMARY KEY (`fundID`);

--
-- Indexes for table `newconstmaterial`
--
ALTER TABLE `newconstmaterial`
  ADD PRIMARY KEY (`materialid`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`noticeID`);

--
-- Indexes for table `othermaterial`
--
ALTER TABLE `othermaterial`
  ADD PRIMARY KEY (`materialid`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `query`
--
ALTER TABLE `query`
  ADD PRIMARY KEY (`queryID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agrimaterial`
--
ALTER TABLE `agrimaterial`
  MODIFY `materialid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `complaint`
--
ALTER TABLE `complaint`
  MODIFY `complaintID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `donation`
--
ALTER TABLE `donation`
  MODIFY `donorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `formtemplate`
--
ALTER TABLE `formtemplate`
  MODIFY `formTemplateID` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `forumpost`
--
ALTER TABLE `forumpost`
  MODIFY `postID` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newconstmaterial`
--
ALTER TABLE `newconstmaterial`
  MODIFY `materialid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `noticeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `othermaterial`
--
ALTER TABLE `othermaterial`
  MODIFY `materialid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `project_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `query`
--
ALTER TABLE `query`
  MODIFY `queryID` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(100) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `constsmaterial`
--
ALTER TABLE `constsmaterial`
  ADD CONSTRAINT `matid` FOREIGN KEY (`materialid`) REFERENCES `newconstmaterial` (`materialid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
