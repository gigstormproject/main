-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 14. Apr 2019 um 19:04
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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
