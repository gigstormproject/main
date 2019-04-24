-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 24. Apr 2019 um 02:25
-- Server-Version: 10.1.38-MariaDB
-- PHP-Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `db_gigstorm`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `band`
--

CREATE TABLE `band` (
  `Name` varchar(50) DEFAULT NULL,
  `Genre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `band`
--

INSERT INTO `band` (`Name`, `Genre`) VALUES
('HGich.T', 'Indie'),
('Voodoo Jürgens', 'Austropop'),
('Amüsgöl', 'Klassik'),
('Muse', 'Prog Rock');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `bar`
--

CREATE TABLE `bar` (
  `Name` varchar(50) DEFAULT NULL,
  `PLZ` int(11) DEFAULT NULL,
  `Genre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `bar`
--

INSERT INTO `bar` (`Name`, `PLZ`, `Genre`) VALUES
('Chelsea', 1080, 'Hardstep'),
('Viper Room', 1030, 'Heavy Metal'),
('Louisiana Blues Pub', 1040, 'Jazz'),
('Davis LiveMusic Club', 1210, 'Rock');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `uname` varchar(255) DEFAULT NULL,
  `upassword` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`fname`, `lname`, `uname`, `upassword`, `email`) VALUES
('Michael', 'Prammer', 'mprammer', '$2y$10$ErjFh3FhHyz/KrNi4TLoB.qTwx4TTWxDniVCOmPhyGAs4r.OVDC2u', NULL),
('test', 'test', 'test', '$2y$10$2Cylqx01z5E2m2MrmidxEeelm2/Cn0pO9UPVW7i5EZhfebFjs2Hda', NULL),
('test2', 'test2', 'test2', '$2y$10$hmaQbUilzEGxcbmXW5R5.O6mrHcy2SusTvRoTR.S8HzVcT2nZiZBa', 'test2@example.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
