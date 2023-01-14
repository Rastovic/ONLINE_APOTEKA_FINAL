CREATE DATABASE  IF NOT EXISTS `apoteka_online` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `apoteka_online`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: apoteka_online
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int NOT NULL,
  `town` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  `zip_code` bigint NOT NULL,
  `street_name` varchar(60) NOT NULL,
  `street_number` varchar(20) NOT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Bar','Crna Gora',85000,'Makedonska E15','15'),(2,'Podgorica','Crna Gora',80000,'Bulevar Ivana Crnojevica','143'),(3,'Niksic','Crna Gora',81400,'Novaka Miloseva','19'),(4,'Bijelo Polje','Crna Gora',84202,'Industrijska','1'),(5,'Pljevlja','Crna Gora',84210,'8 Trsova','5'),(6,'Cetinje','Crna Gora',81250,'Vojvode Batrica','9'),(7,'Pluzine','Crna Gora',81435,'Pluzine','bb'),(8,'Budva','Crna Gora',85310,'Stjepana Mitrova Ljubise','1'),(9,'Herceg Novi','Crna Gora',85340,'Njegoseva','64'),(10,'Ulcinj','Crna Gora',85360,'Bulevar Djenderbeg Kastrioti','0'),(11,'Podgorica','Crna Gora',80000,'Moskovska','22'),(12,'Rozaje','Crna Gora',84310,'13. jul','10'),(13,'Herceg Novi','Crna Gora',85340,'Mica Vavica','4'),(14,'Niksic','Crna Gora',81400,'Nikole Tesle','7'),(15,'Bar','Crna Gora',8100,'Iva Novakovica','4'),(16,'Bar','Crna Gora',8100,'JNA','4'),(17,'Bar','Crna Gora',8100,'JNA','7'),(18,'Tivat','Crna Gora',85320,'Zgrada Teuta','1'),(19,'Ulcinj','Crna Gora',85360,'Hafiz Alija','1'),(20,'Niksic','Crna Gora',81400,'Nika Miljanica','10'),(21,'Kotor','Crna Gora',85335,'Put prvoborca','1'),(22,'Budva','Crna Gora',85310,'Zrtava fasizma','1'),(24,'Cetinje','Crna Gora',81250,'Mojkovacka','1'),(25,'Herceg Novi','Crna Gora',85340,'Brace Pedesic','19'),(26,'Rozaje','Crna Gora',84310,'Marsala Tita','1'),(27,'Ulcinj','Crna Gora',85360,'26.novembar','1'),(28,'Pljevlja','Crna Gora',84210,'Milosa Tosica','1'),(29,'Kotor','Crna Gora',85336,'Radanovici','1'),(30,'Bar','Crna Gora',81000,'Bulevar Revolucije','11'),(31,'Podgorica','Crna Gora',85000,'Oktobarske Revolucije','28'),(32,'Podgorica','Crna Gora',85000,'Stari Aerodrom','37'),(33,'Podgorica','Crna Gora',85000,'Bijela','1'),(34,'Podgorica','Crna Gora',85000,'Bulevar Sv. Petra Cetinjskog','62'),(35,'Bijelo Polje','Crna Gora',84202,'Voja Lesnjaka','1'),(36,'Podgorica','Crna Gora',85000,'Oktobarske Revolucije','32'),(37,'Herceg Novi','Crna Gora',85624,'Sveta Bubala','1'),(38,'Budva','Crna Gora',84521,'Stjepan Mitrov Ljubisa','1');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (6,'afasa','afasa','afasa@test.com','234','23'),(16,'afasa','afasa','afasa@test.com','234','23'),(17,'afasa','afasa','afasa@test.com','234','23'),(18,'afasa','afasa','afasa@test.com','234','23'),(19,'Lazar','Mrkic','lazarmrkic99@gmail.com','0541397764','57035 Wild Lily Lane'),(20,'Devin','Trickel','devin.trickel@sunriver-resort.com','ssd','17600 Center Dr, Sunriver, OR 97707'),(21,'jelena','rastovic','jelenarastovic@gmail.com','068554557',''),(22,'jelena','jelelna','ojean','46854','lwieknflkw'),(23,'rgerg','herhe','herhre','herhge','herhe'),(24,'jelena','rastovci','ergbesr','berbdrd','berfbhe'),(25,'jelena','rastovci','ergbesr','berbdrd','berfbhe'),(26,'','','','',''),(27,'jelena','rastovic','jelenarastovic7@gmail.com','84512875412','fghjk'),(28,'jleena','egrberbe','jelenarastovic7@gmail.com','8465325632','fqewgrhtrtyk'),(29,'jleena','egrberbe','jelenarastovic7@gmail.com','8465325632','fqewgrhtrtyk'),(30,'jleena','egrberbe','jelenarastovic7@gmail.com','8465325632','fqewgrhtrtyk'),(31,'jleena','egrberbe','jelenarastovic7@gmail.com','8465325632','fqewgrhtrtyk'),(32,'EHNRTHAT','NHAERTHE4TH','jelenarastovic7@gmail.com','234567890876','afgsdhgfjguyghfdx'),(44,'jelena','rastovic','jelenarastovic7@gmail.com','qwergtrfds','qwergtfde'),(45,'jelena','rastovic','nianbulajic08@gmail.com','qewfrgtrhngbfvd','wergthfbvds'),(46,'Nina','Bulajic','ninabulajic08@gmail.com','069450294','Mila Kilibarde br13'),(47,'Nina','Bulajic','ninabulajic08@gmail.com','069450294','Mila Kilibarde br13');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `unit_price` decimal(19,2) DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_order_id` (`order_id`),
  KEY `FK_product_id` (`product_id`),
  CONSTRAINT `FK_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FK_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_tracking_number` varchar(255) DEFAULT NULL,
  `total_price` decimal(19,2) DEFAULT NULL,
  `total_quantity` int DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  `status` varchar(128) DEFAULT NULL,
  `date_created` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `K_customer_id` (`customer_id`),
  CONSTRAINT `FK_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pharmacy`
--

DROP TABLE IF EXISTS `pharmacy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pharmacy` (
  `pharmacy_id` int NOT NULL,
  `pharmacy_name` varchar(50) NOT NULL,
  `working_hours` varchar(10) NOT NULL,
  `address_id` int NOT NULL,
  `image_url` varchar(60) NOT NULL,
  `mapa` longtext NOT NULL,
  PRIMARY KEY (`pharmacy_id`),
  KEY `Ph_Ad` (`address_id`),
  CONSTRAINT `Ph_Ad` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pharmacy`
--

LOCK TABLES `pharmacy` WRITE;
/*!40000 ALTER TABLE `pharmacy` DISABLE KEYS */;
INSERT INTO `pharmacy` VALUES (1,'BELLADONNA','07-22',1,'assets/images/pharmacies/belladonna.png','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.376620514367!2d19.09893725029748!3d42.09940415941408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134e7406907a687f%3A0xfa9603f57a7fd756!2sApoteka%20Belladonna%20Bar!5e0!3m2!1sen!2s!4v1673704082386!5m2!1sen!2s'),(2,'MEDICA','07-22',2,'assets/images/pharmacies/teaMedica.png','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23555.81722537409!2d19.245816250514046!3d42.43886278280709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb0616ba16c9%3A0x13038e4bd35cc14c!2sTea%20Medica!5e0!3m2!1sen!2s!4v1673704149377!5m2!1sen!2s'),(3,'MEDICA','07-22',3,'assets/images/pharmacies/teaMedica.png','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11777.304421788864!2d19.247310098345686!3d42.44207713380322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb447533f4af%3A0x80ae940f0e368e79!2sTea%20Medica!5e0!3m2!1sen!2s!4v1673525780121!5m2!1sen!2s'),(4,'BENU','07-22',4,'assets/images/pharmacies/benu.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750422.7498467142!2d18.9420284392708!3d42.717717886417844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352bb80be6a3395%3A0x4307ebf54a90e7c6!2sApoteka%20BENU%20Bijelo%20Polje%20HDL!5e0!3m2!1sen!2s!4v1673705257138!5m2!1sen!2s'),(5,'HERBORA','07-22',5,'assets/images/pharmacies/herbora.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.3005390602125!2d18.937914184320032!3d42.208020896097025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deae8833ed4c1%3A0x8d8c985067f8c668!2sApoteka%20Herbora%202%20Petrovac!5e0!3m2!1sen!2s!4v1673705354569!5m2!1sen!2s'),(6,'PRIMA','07-22',6,'assets/images/pharmacies/prima.jpg','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11777.304421788864!2d19.247310098345686!3d42.44207713380322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb447533f4af%3A0x80ae940f0e368e79!2sTea%20Medica!5e0!3m2!1sen!2s!4v1673525780121!5m2!1sen!2s'),(7,'BIOFARM','07-22',7,'assets/images/pharmacies/biofarm.png','https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d375295.23228979507!2d18.86946331135418!3d42.703847765467636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d42.4419636!2d19.2474703!4m5!1s0x134d1360e0366a65%3A0x89631a00aa01f914!2spluzine%20apoteka!3m2!1d42.9573634!2d19.0944772!5e0!3m2!1sen!2s!4v1673706486098!5m2!1sen!2s'),(8,'VITAMIN PLUS','07-22',30,'assets/images/pharmacies/vitaminplus.jpg','https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d94728.44957007068!2d19.026061020377632!3d42.10181540478215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x134e74017ec10b47%3A0x297d38a1070ea4d0!2sBulevar%20Revolucije%20G11%2C%20Bar!3m2!1d42.1018367!2d19.0961009!5e0!3m2!1sen!2s!4v1673706400146!5m2!1sen!2s'),(9,'GALENIKA','07-22',31,'assets/images/pharmacies/galenika.png','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749191.1589770879!2d18.631869843633705!3d42.819460145460944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb47327c39b3%3A0x9517787a5835f9ae!2sGalenika%20Crna%20Gora!5e0!3m2!1sen!2s!4v1673706569268!5m2!1sen!2s'),(10,'HOLOS','07-22',32,'assets/images/pharmacies/holos.png','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.6383170797794!2d19.274284950310506!3d42.435432938230115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb5a24aa4889%3A0x6592ed5860bd1d50!2sApoteka%20Holos%20Stari%20Aerodrom!5e0!3m2!1sen!2s!4v1673706703231!5m2!1sen!2s'),(11,'MILJA','07-22',33,'assets/images/pharmacies/milja.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.9359516567174!2d18.645277050310998!3d42.45037883728463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c31e2c45d349b%3A0xeb7c056c227a1b0d!2sPharmacy%2FApoteka%20MILJA!5e0!3m2!1sen!2s!4v1673706904442!5m2!1sen!2s'),(12,'HELP','07-22',34,'assets/images/pharmacies/help.jpg','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47117.98038932261!2d19.2396125!3d42.4304216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb6ca9cf902b%3A0x86adc53c4abf0fd!2sAPOTEKA%20HELP%20BULEVAR%20SV.%20PETRA%20CETINJSKOG%20%2F%20Podgorica!5e0!3m2!1sen!2s!4v1673706957536!5m2!1sen!2s'),(13,'MEDICA','07-22',35,'assets/images/pharmacies/teaMedica.png','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746560.6252416198!2d18.696197100000006!3d43.0361198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352a39f20dc5c5f%3A0x8684c3dacc046f9b!2sTea%20Medica!5e0!3m2!1sen!2s!4v1673707138524!5m2!1sen!2s'),(14,'MAXIMA','07-22',18,'assets/images/pharmacies/maxima.jpg','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11777.304421788864!2d19.247310098345686!3d42.44207713380322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb447533f4af%3A0x80ae940f0e368e79!2sTea%20Medica!5e0!3m2!1sen!2s!4v1673525780121!5m2!1sen!2s'),(15,'BENU','07-22',36,'assets/images/pharmacies/benu.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750422.7498467142!2d18.9420284392708!3d42.717717886417844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352bb80be6a3395%3A0x4307ebf54a90e7c6!2sApoteka%20BENU%20Bijelo%20Polje%20HDL!5e0!3m2!1sen!2s!4v1673705257138!5m2!1sen!2s'),(16,'BENU','07-22',14,'assets/images/pharmacies/benu.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.5831549969907!2d18.951032150323524!3d42.77602031662251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134da8526c30f7dd%3A0x67dbfe45c6d6df3f!2sNikole%20Tesle%2C%20Nik%C5%A1i%C4%87%2C%20Montenegro!5e0!3m2!1sen!2s!4v1673709877843!5m2!1sen!2s'),(17,'MAXIMA','07-22',20,'assets/images/pharmacies/maxima.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.493147587753!2d18.943809250323618!3d42.77792351650138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134da9b273e93fc9%3A0x2ae7314843ef30f5!2zRHIgTmlrYSBNaWxqYW5pxIdhLCBOaWvFoWnEhywgTW9udGVuZWdybw!5e0!3m2!1sen!2s!4v1673709817356!5m2!1sen!2s'),(18,'MAXIMA','07-22',37,'assets/images/pharmacies/maxima.jpg','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d752691.729823992!2d18.3523177!3d42.5297621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c3b7c3e63dd3d%3A0xa71976ad29e8347e!2sHunguest!5e0!3m2!1sen!2s!4v1673709743887!5m2!1sen!2s'),(19,'BENU','07-21',9,'assets/images/pharmacies/benu.jpg','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d94202.35898306035!2d18.4627326!3d42.4527667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c3b3b1a6e36c7%3A0x1f89a70a4806b4fe!2sApoteka%20BENU%20H.Novi%20Njego%C5%A1eva!5e0!3m2!1sen!2s!4v1673709977555!5m2!1sen!2s'),(20,'MEDICA','07-22',22,'assets/images/pharmacies/teaMedica.png','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11805.1259971448!2d18.83632313959975!3d42.293858532362165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd37deff51ecb%3A0xc854671ae0f02457!2sTea%20Medica!5e0!3m2!1sen!2s!4v1673710136247!5m2!1sen!2s'),(21,'BENU','07-22',38,'assets/images/pharmacies/benu.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.5831549969907!2d18.951032150323524!3d42.77602031662251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134da8526c30f7dd%3A0x67dbfe45c6d6df3f!2sNikole%20Tesle%2C%20Nik%C5%A1i%C4%87%2C%20Montenegro!5e0!3m2!1sen!2s!4v1673709877843!5m2!1sen!2s'),(22,'MEDICA','07-22',27,'assets/images/pharmacies/teaMedica.png','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d94984.88053685267!2d19.1466828!3d41.9298877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134e1301aba2a7bd%3A0xdefea0c3db42de99!2sTea%20Medica!5e0!3m2!1sen!2s!4v1673710446374!5m2!1sen!2s'),(23,'MEDICA','07-22',26,'assets/images/pharmacies/teaMedica.png','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.435386871915!2d20.163265350326117!3d42.84253911238652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352e647c219c945%3A0xc869e079084f0ecd!2sApoteka%20Tea%20Medica!5e0!3m2!1sen!2s!4v1673710585830!5m2!1sen!2s'),(24,'MEDICA','07-22',29,'assets/images/pharmacies/teaMedica.png','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94984.56357772832!2d19.14633926447603!3d41.930100563869196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134e13f8323d66a7%3A0xcf51fd6b4b94e9d3!2sTeamedica!5e0!3m2!1sen!2s!4v1673710688759!5m2!1sen!2s');
/*!40000 ALTER TABLE `pharmacy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pharmacy_product`
--

DROP TABLE IF EXISTS `pharmacy_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pharmacy_product` (
  `product_id` int NOT NULL,
  `pharmacy_id` int NOT NULL,
  PRIMARY KEY (`product_id`,`pharmacy_id`),
  KEY `PP_Ph` (`pharmacy_id`),
  CONSTRAINT `PP_Ph` FOREIGN KEY (`pharmacy_id`) REFERENCES `pharmacy` (`pharmacy_id`),
  CONSTRAINT `PP_pr` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pharmacy_product`
--

LOCK TABLES `pharmacy_product` WRITE;
/*!40000 ALTER TABLE `pharmacy_product` DISABLE KEYS */;
INSERT INTO `pharmacy_product` VALUES (1,1),(2,1),(3,1),(6,1),(9,1),(11,1),(2,2),(3,2),(6,2),(7,2),(8,2),(11,2),(14,2),(16,2),(3,3),(4,3),(5,3),(6,3),(10,3),(13,3),(1,4),(5,4),(6,4),(7,4),(8,4),(9,4),(10,4),(16,4),(17,4),(4,5),(5,5),(6,5),(8,5),(11,5),(13,5),(14,5),(15,5),(17,5),(3,6),(5,6),(7,6),(8,6),(12,6),(16,6),(17,6),(2,7),(6,7),(8,7),(9,7),(10,7),(11,7),(13,7),(14,7),(15,7),(3,8),(5,8),(7,8),(8,8),(2,9),(3,9),(4,9),(7,9),(11,9),(2,10),(3,10),(4,10),(7,10),(8,10),(9,10),(10,10),(11,10),(12,10),(17,10),(11,11),(12,11),(13,11),(14,11),(15,11),(16,11),(2,12),(3,12),(4,12),(7,12),(8,12),(10,12),(11,12),(17,12);
/*!40000 ALTER TABLE `pharmacy_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_description` longtext NOT NULL,
  `price` float NOT NULL,
  `prescription` tinyint NOT NULL,
  `image_url` varchar(45) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Alven','Action\n\nHeparin, as the main agent of the preparation and also found in human body, manifests anticoagulant and antithrombotic effect. Futhermore, heparin counteracts the action of some endogenous transmitters (histamin, serotonin, acetylcholin), thus, exhibiting antiinflamamatory, antiedematous, moderate spasmolytic and antiallergic properties. Combination of dexpanthenol and allantoin enables high level of heparin absorption.\n\nIndications\n\n–Prophylaxis and treatment of disorders of venous origin, such as: superficial thrombophlebitis and phlebothrombosis (inflammation of the veins), phlebitis after paravenous injection, post-thrombotic syndrome, varicose veins, skin ulceration of the leg (ulcus cruris), dull ache in the leg, or oedema resulting from venous insufficiency.\n\n\n\n\n',5,1,'assets/images/product/alven.png'),(2,'Becutan','The mild formulation of Becutan shampoo with oat extract and D-panthenol is the right answer to the long-standing question about the daily use of cosmetic products for children. The combination of carefully selected active ingredients thoroughly cleanses the hair and scalp, at the same time nourishing and protecting the head skin. In addition to the oat extract, the new shampoo contains D-panthenol, an ingredient with distinct hydrating effect and the property to regulate hair and skin moisture.\n\nThe struggle with scalp dryness and damage - a frequent occurrence in babies, supported by the trends that Becutan has been applying for decades, has now gained added value. Moreover, Becutan shampoo with oat extract and D-panthenol will put an end to the marathon chase to untangle the hair, which has now got additional softness and natural shine.\n\nWhy oat extract?\n\nOat extract is a rich source of natural substances belonging to the group of compounds particular for their properties to eliminate free radicals and for their anti-inflammatory effect, which contributes to protecting the skin from irritation.\n\nOat extract is a rich source of natural substances belonging to the group of compounds particular for their properties to eliminate free radicals and for their anti-inflammatory effect, which contributes to protecting the skin from irritation.\n\nIt is recommended for daily use in adults with sensitive skin susceptible to irritation.',4,0,'assets/images/product/becutan.png'),(3,'Kafetin Menstural','Caffetin Menstrual is a non-selective inhibitor of cyclooxygenase, an enzyme invovled in prostaglandin synthesis via the arachidonic acid pathway. Its pharmacological effects are believed to be due to inhibition cylooxygenase-2 (COX-2) which decreases the synthesis of prostaglandins involved in mediating inflammation, pain, fever and swelling\n\n\n20 mg per kg body weight daily in divided doses. In children weighing less than 30 kg the total daily dosage should not exceed 500 mg. If gastrointestinal disturbances occur Caffetin Menstrual should be given with food or milk.\n1-2 years: 1/2 tea spoonful (2.5 ml) 3-4 times daily;\n3-7 years: 1 tea spoonful (5 ml) 3-4 times daily;\n8-12 years: 2 tea spoonful (10 ml) 3-4 times daily. Caffetin Menstrual is not recommended for children under 1 year.\nFor adult:\n\nFor arthritic pain: The dosage range is from 0.9 to 2.4 g per day. The usual dose is 400 mg, 3-4 times per day, preferably after food. The dose may be raised to a maximum of 2.4 g daily depending on the severity of symptom at the time of initiating drug therapy or as patients fail to respond. After a satisfactory response has been achieved the patients dose should be reviewed and adjusted as required and tapered gradually.\nFor mild to moderate pain: 400 mg 6 hourly or as demanded by the condition.\nFor dysmenorrhoea: 400 mg every 4 hours or as demanded by the condition.\n',7,1,'assets/images/product/kafetin.png'),(4,'Katefin','Composition:\n\nParacetamol 250 mg\n\nPropyphenazone 210 mg\n\nCaffeine 50 mg\n\nCodeine phosphate sesquihydrate 10 mg\n\n\n\nAction:\n\nCaffetin is a combined analgesic drug.\n\nThe analgesic effect has been proven for paracetamol, propyphenazone and codeine, while caffeine ameliorates their effect.\n\nIndications:\n\nCaffetin is indicated for relief of different type of pain such as headache, toothache, migraine, neuralgia, ishialgia, muscular pain, postoperative, posttraumatic and menstrual pain.\n\n\n\n',3,0,'assets/images/product/kafetin1.png'),(5,'Magnezijum','MULTI ESSENCE Magnesium 400+B complex microgranules for direct use supply the required daily intake of magnesium and B vitamins to meet the increased requirement of the body.\n\nMagnesium contributes to the normal functioning of the nervous system and normal muscle function, helps reduce tiredness and fatigue and maintain normal electrolyte balance, and supports the normal synthesis of proteins and the normal psychological function. Magnesium plays a role in the process of cell division.\n\nVitamin B1 contributes to the normal functioning of the nervous system, normal psychological function and the normal functioning of the heart.\n\nVitamin B2 contributes to normal metabolism, production of energy, normal functioning of the nervous system and to protecting the cells from oxidation.\n\nVitamin B6 contributes to normal metabolism, energy production, normal functioning of the nervous and immune systems, normal psychological function, normal metabolism of proteins and glycogen and it helps reduce tiredness and fatigue.\n\nVitamin B12 contributes to the normal psychological function and reduction of tiredness and fatigue. Vitamin B12 plays a role in the cell division process.\n',5.5,1,'assets/images/product/magnezijum.png'),(6,'Proculin','Action: Proculin Soft Lens solution contains sodium hyaluronic that enhances the moistening of lenses and increases the tolerability of lens-wear due to its viscous-elastic properties. The solution hydrates lenses due to its ‘water lock’ not only after insertion but also throughout the day. It thereby aid the wearing comfort of the lens and diminishes eye irritation and dryness. Recommended for sensitive eyes.\n\nUsage:\n\nMultipurpose solution intended for cleaning, removal of protein deposits, disinfecting, rinsing, storing, inserting and moistening. For soft contact lenses.\n\nPacking:\n\nBox with 360 ml solution bottle, lens case and patient instruction leaflet.\n',6,1,'assets/images/product/proculin.png'),(7,'Acerola','Effect\n\nAcerola Alkaloid is a food supplement in the daily diet. Vitamin C is an essential vitamin that is soluble in water.\n\nVitamin C helps to maintain normal immune function during intense exercising and afterwards. It also contributes to normal production of collagen, thus ensuring normal functioning of blood vessels, skin, bones, cartilage, teeth and gums. It contributes to the normal energy – yielding metabolism, normal functioning of the nervous system and normal psychological functioning.\n\nVitamin C contributes to reduction of tiredness and fatigue.\n\nVitamin C helps to protect cells from oxidative stress.\n\nVitamin C increases the absorption of iron.\n\nUse\n\nAcerola Alkaloid tablets are used in conditions where there is increased need for vitamin C.\n\nAdults and Children over 14 years: 1 tablet per day',3,0,'assets/images/product/acerola.png'),(8,'Kardiopirin','Action:\n\nCardiopyrine contains acetylsalicylic acid, which has an antithrombotic effect and reduces the occurrence of blood clots. The pharmaceutical form of a gastro-resistant tablet reduces the possibility of side effects in the gastrointestinal tract. \n\nIndications:\n\nCardiopyrin gastro-resistant tablets are used for: \n\nreduction of the risk of cardiovascular disorders, ie disorders of the heart or blood vessels (eg angina pectoris or myocardial infarction), \nreduction of the risk of further clogging of blood vessels in patients who have had a myocardial infarction, \ntherapy of myocardial infarction, \nprevention of clogging of blood vessels after surgery, e.g. coronary bypass surgery, \nreducing the risk of recurrent transient ischemic attack and stroke, \nmigraine prophylaxis. \nPackaging:\n\n30 film-coated gastro-resistant packed in blister, in a cardboard box with PIL inside. \n',4.5,1,'assets/images/product/kardiopirin.png'),(9,'Alkavit','Action:\n\nALKAVIT® folic acid is essential for synthesis of nucleoproteins and for hematopoesa. Following resorption, folic acid is rapidly reduced to positions 5, 6, 7 and 8 in its active metabolite – tetrahydrophle acid (folinic acid) Tetrahydrophole acid is a coenzyme for various metabolic processes, such as: synthesis of purine and pyrimidine nucleotides, i.e. synthesis of DNA, coversion of certain amino acids (conversion of homocystein into metionyn, conversion of serin into glycine) and synthesis of tymidiale.\n\nIndications:\n\nFolic acid is indicated for prevention of occurrence of defects in the neural tube, including spina bifida in the fetus.\n\nPackaging:\n\n30 tablets\n\n\n',5,1,'assets/images/product/alkavit.png'),(10,'Paracetamol','Action:\n\nParacetamol acts predominantly by inhibiting prostaglandin synthesis in the central nervous system (CNS) and, to a lesser extent, through a peripheral action by blocking pain impulse generation. Paracetamol produces antipyresis by acting centrally on the hypothalamic heat regulating centre to produce peripheral vaso-dilation resulting in increased blood flow through the skin, sweating and heat loss.\n\nIndications:\n\nParacetamol Alkaloid is used for fast pain relief of headaches, including migraine and tension headaches, toothaches, backache, rheumatic and muscle pains, and menstrual pain. It also relieves sore throat and the fever, aches and pains of colds and flu.\n\nPackaging:\n\n500 tablets\n\n',5,1,'assets/images/product/paracetamol.png'),(11,'Vitamin C','Action:\n\nAscorbic acid is a hydrosoluble vitamin, which, together with its active metabolite, dihydroascorbic acid, takes part in the oxidoreductive reactions. It is essential for creation of collagen, present in the formation of bones, teeth, skin, connective tissue, tendons and blood vessels. Collagen is indispensable for biosynthesis of catheholamines and quarnitine; it takes part in the metabolism of some amino acids, the folic acid and iron. As a potent reductor, it neutralizes the harmful oxidants and free radicals.\n\nIndications:\n\nPrevention and treatment of vitamin C deficiency – scurvy;\n\nConditions demanding increased vitamin C intake (hemodyalisis, GI diseases, tuberculosis, neoplasma, gastric ulcer, hyperthyroidism, elevated body temperature, stress, contagious diseases, burns, smoking, alcoholism, cold climate stay, following surgical interventions, heavy physical work, pregnancy, lactation, period of growth and use of some medicines (barbiturates, prymidone, slaicilates)\n\nPackaging:\n\nBox with 250 tablets (25 strips x 10 tablets)\n',4,0,'assets/images/product/vitaminC.png'),(12,'Vitamin D3','Action: Vitamin D helps regulate the normal concentration of calcium in blood and keeps teeth healthy. It also contributes to the normal function of the immune system.\n\nVitamin D is essential for normal growth and development of bones in children.\n\nVitamin D acquires hormonal activity when cholecalciferol (Vitamin D3) is converted into 1.25 dihydroxyvitamin D3 (calcitriol) in the liver and the kidneys. Vitamin D3 is the only vitamin in the body which can be produced by exposing the skin to sunlight (UVB). Yet, the modern lifestyle – spending long hours indoors along with the widespread use of sun-protection products result in deficiency in 1.25 dihydroxyvitamin D3, essential for bone building and immune system boosting.\n\nUse:\n\nAlkaloid’s Vitamin A+D3 capsules are used as dietary supplements for children and adults with increased need for these vitamins.\n\n\n',4,1,'assets/images/product/vitaminD3.png'),(13,'Analgin','Action:\n\nMetamizole is a pyrazolonic derivative belonging to the group of non-narcotic analgesics. It has an analgesic, antipyretic, anti-inflammatory and spasmolytic action. Effects of metamizole are results of the central and the peripheral action of the drug. The central action is a result of its depression of the pain sensation in the central nervous system and also by inhibition of the brain cyclooxygenase. In the periphery, metamizole inhibits the synthesis of prostaglandins which stimulate the nociceptors and induce pain.\n\nIndications:\n\nAcute severe posttraumatic and postoperative; abdominal pain in a form of colic (spasms); pain in malignant diseases; febrile conditions, especially unresponsive to other measures. Analgin relieves pain and reduces fever.\n\nPackaging:\n\n500 tablets\n\n\n',4.5,1,'assets/images/product/analgin.png'),(14,'MultiVitamin','Action:\n\nThe multilayer tablets MULTI ESSENCE Vitamins and minerals for adults, provide the necessary amount of vitamins and minerals in order to satisfy the increased needs of the organism.\n\nVitamin C, vitamin B1, vitamin B2, vitamin B6, vitamin B12, niacin, pantothenic acid, biotin, calcium, magnesium, iron, manganese, copper and iodine contribute to normal energy-yielding metabolism.\nVitamin C, vitamin B2, vitamin B6, vitamin B12, niacin, pantothenic acid, folic acid, magnesium and iron contribute to the reduction of tiredness and fatigue.\nVitamin C, vitamin B1, vitamin B2, vitamin B6, vitamin B12, niacin, biotin, magnesium, copper and iodine contribute to normal functioning of the nervous system.\nVitamin C, vitamin B1, vitamin B6, vitamin B12, niacin, folic acid, biotin and magnesium contribute to normal psychological function.\nIron, iodine and zinc contribute to normal cognitive function.\nVitamin C, vitamin A, vitamin D, vitamin B6, vitamin B12, folic acid, iron, zinc, copper, and selenium contribute to normal function of the immune system.\nVitamin C, vitamin E, vitamin B2, zinc, manganese, copper and selenium contribute to the protection of cells from oxidative stress.\n\nUse:\n\nThe multilayer tablets MULTI ESSENCE Vitamins and minerals for adults, as a food supplement, satisfy the increased needs of vitamins and minerals in adults.\n\n\n\n\n',3,0,'assets/images/product/multi.png'),(15,'Nazopas','Action:\n\nNazopas contains oxymetazoline hydrochloride, which is used as a nasal decongestant. By narrowing the arterioles, it reduces swelling of the nasal mucosa and nasal secretions. In this way, breathing through the nose is facilitated and the accompanying signs of the common cold are alleviated. Oxymetazoline has both anti-inflammatory and antioxidant effects, as well as antiviral activity against certain viruses, which mainly cause respiratory diseases. \n\nIndications:\n\nNazopass nasal drops, intended for children and adults are used for: \n\nAcute sneezing \nAllergic sneezing  \nRhinosinusitis \nMiddle ear infection (otitis media) – for improving the Eustachian tube function \nPackaging:\n\nBox with 10 ml solution bottle and patient instruction leaflet. \n\n\n\n\n',10,1,'assets/images/product/nazopas.png'),(16,'Diastop','DIASTOP Direct is used for prevention and additional treatment of diarrhea, bloating and other stomach disorders caused by imbalance of the intestinal microflora. Such conditions are:\n\nBacterial and viral gastric and intestinal infections affecting children and adults (eg. rotavirus infections, travelling diarrhea, as well as Helicobacter pylori infection);\nTreatment with broad-spectrum antibiotics and chemotherapeutic drugs.\nUse of lactic acid bacteria in combination with vitamin D3 effectively reduces the frequency and severity of mild to moderate digestive symptoms (mainly diarrhea) that occur due to disruption of normal intestinal microflora and maintains normal intestinal peristalsis.\n\nAdults: 1 - 2 sachets per day\nChildren over three years: 1 sachet per day\nDIASTOP Direct is intended for oral use only. The content of the sachet is for direct use only, mixing with water or other liquids is not recommended.\n\nDIASTOP Direct does not contain sugar.\n',12,1,'assets/images/product/diastop.png'),(17,'Plantagin','\nAction:\n\nThe composition of St Johns wort comprises various biologically active compounds with a number of pharmacological properties - anti-inflammatory, antibacterial, antiviral and adstringent. These properties allow St Johns wort to reduce tissue inflammation and increase the regenerative quality of the tissue, which leads to its speedy re-epithelization and resumed suppleness.\n\nIndications:\n\nTreatment of itching, leucorea and other signs of inflammation in gynecological practice. It has a beneficial effect in the following conditions:\nvaginal inflammations with increased vaginal secret; changes of cervical mucous membrane accompanied with inflammation;\ndegenerative changes of cervical and vaginal mucous membrane following radiotherapy;\nchanges of vaginal mucous membrane in conditions of vaginal dryness of various etiology, due to hormonal disbalance or menaopause.\n',7,0,'assets/images/product/plantagin.png');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-14 17:30:09
