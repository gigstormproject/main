-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 09. Mai 2019 um 18:51
-- Server-Version: 10.1.38-MariaDB
-- PHP-Version: 7.3.2

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
  `uname` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `upassword` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `band`
--

INSERT INTO `band` (`uname`, `email`, `genre`, `upassword`) VALUES
('Muse', 'muse@muse.com', 'Rock', '$2y$10$HlkkFM2LY.2JCZRN3HKUNu4a0Zy/i6ak2HXn6biC4Bh9keXx4EOrq'),
('The Dresden Dolls', 'tdd@dolls.com', 'Alternative', '$2y$10$PIH2mVWrFwqioJLC3eTeRudPMgn4xfAGGVYlnFqqetdFXEzr/EPC.'),
('Rammstein', 'ramm@stein.de', 'Other', '$2y$10$Z9tNBlDw4uK/KQuF4jEAp.D1Z.Yz6.axwAe9djz/GiZFM0jGmPe5q');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `bar`
--

CREATE TABLE `bar` (
  `fullname` varchar(50) DEFAULT NULL,
  `barname` varchar(50) DEFAULT NULL,
  `uname` varchar(50) DEFAULT NULL,
  `upassword` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `bar`
--

INSERT INTO `bar` (`fullname`, `barname`, `uname`, `upassword`, `email`) VALUES
('Thomas Gottschalk', 'Nudelbar', 'TGott', '$2y$10$iNxfE2E1UuJ.oyaESu06ceR6AxLXQyqISrTj1zuvc104FYFCnAAVS', 't.gottschalk@aol.de'),
('Hans Gruber', 'Sprengbar', 'HGichT', '$2y$10$EDTsZPX64ZIs/Dq3jZpub.QldK7f2FNGTUiUf8X765GRwb.L.NMxO', 'hg69@gmail.com'),
('Bilbo Beutlin', 'Auenland', 'BB', '$2y$10$hlmdf1MfbT3jODCyUM5F0OrCp1crdMb0EKY8Q8AqQ6ZJvsjNgHz0.', 'bilbo@lotr.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
