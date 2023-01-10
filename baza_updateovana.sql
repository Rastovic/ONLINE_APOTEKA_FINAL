CREATE DATABASE  IF NOT EXISTS `apoteka_online` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `apoteka_online`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: apoteka_online
-- ------------------------------------------------------
-- Server version	8.0.29

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
  `image_url` varchar(60) NOT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'bar','cg',545445,'bjelisi','5','');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (6,'afasa','afasa','afasa@test.com','234','23'),(16,'afasa','afasa','afasa@test.com','234','23'),(17,'afasa','afasa','afasa@test.com','234','23'),(18,'afasa','afasa','afasa@test.com','234','23'),(19,'Lazar','Mrkic','lazarmrkic99@gmail.com','0541397764','57035 Wild Lily Lane'),(20,'Devin','Trickel','devin.trickel@sunriver-resort.com','ssd','17600 Center Dr, Sunriver, OR 97707');
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (3,'assets/images/products/mousepads/mousepad-luv2code-1000.png',1,3.00,6,1),(4,'assets/images/products/coffeemugs/coffeemug-luv2code-1000.png',1,3.00,6,2),(5,'assets/images/products/coffeemugs/coffeemug-luv2code-1000.png',1,3.00,6,3),(6,'assets/images/products/coffeemugs/coffeemug-luv2code-1000.png',1,3.00,6,4),(7,'assets/images/products/coffeemugs/coffeemug-luv2code-1000.png',1,3.00,6,5),(8,'assets/images/products/coffeemugs/coffeemug-luv2code-1000.png',1,3.00,6,6),(9,'assets/images/products/coffeemugs/coffeemug-luv2code-1000.png',1,3.00,6,7),(21,'assets/images/products/mousepads/mousepad-luv2code-1000.png',1,NULL,18,NULL),(22,'assets/images/products/coffeemugs/coffeemug-luv2code-1000.png',1,NULL,18,NULL),(23,'assets/images/product/brufen-retard.jpg',1,5.00,19,NULL),(24,'assets/images/product/brufen-retard.jpg',1,5.00,20,NULL),(25,'assets/images/product/brufen-retard.jpg',1,4.00,20,NULL),(26,'assets/images/product/brufen-retard.jpg',1,3.00,20,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (6,'29fec1eb-7637-4db3-abab-bb951dbe9c51',36.98,0,6,NULL,'2023-01-10 17:51:22.268000'),(16,'ca4d1cdf-6338-43a1-b808-6c2d588c6fcf',36.98,0,16,NULL,'2023-01-10 18:30:04.054000'),(17,'909105d3-5168-43c2-807f-40d398ca35b5',36.98,0,17,NULL,'2023-01-10 18:30:53.648000'),(18,'94b95760-6419-419f-93d7-b32c83eb4df3',36.98,0,18,NULL,'2023-01-10 20:22:43.395000'),(19,'ec59f610-ad28-486b-90ab-4dbe0f637ffc',0.00,0,19,NULL,'2023-01-10 20:42:06.158000'),(20,'fd2c469e-3619-456d-89b2-ccbd31132016',0.00,0,20,NULL,'2023-01-10 20:45:17.138000');
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
  `user_name` varchar(30) NOT NULL,
  `user_password` varchar(30) NOT NULL,
  `address_id` int NOT NULL,
  `role_id` int NOT NULL,
  `image_url` varchar(60) NOT NULL,
  PRIMARY KEY (`pharmacy_id`),
  KEY `Ph_Ad` (`address_id`),
  KEY `Ph_Ro` (`role_id`) /*!80000 INVISIBLE */,
  CONSTRAINT `Ph_Ad` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pharmacy`
--

LOCK TABLES `pharmacy` WRITE;
/*!40000 ALTER TABLE `pharmacy` DISABLE KEYS */;
INSERT INTO `pharmacy` VALUES (1,'BELLADONNA','23','jelena','jelena',1,0,'assets/images/logoapoteke.png'),(2,'MEDICA','15','jelena','jelena',1,1,'assets/images/logoapoteke.png'),(3,'MAXIMA','13-23','jelena','jelena',1,1,'assets/images/logoapoteke.png'),(4,'BENU','12','jelena','jelena',1,1,'assets/images/logoapoteke.png'),(5,'HERBORA','13','jelena','jelena',1,1,'assets/images/logoapoteke.png'),(6,'PRIMA','14','jelena','jelena',1,1,'assets/images/logoapoteke.png'),(7,'BIOFARM','15','jelena','jelena',1,1,'assets/images/logoapoteke.png'),(8,'VITAMIN PLUS','16','jelena','jelena',1,1,'assets/images/logoapoteke.png');
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
INSERT INTO `pharmacy_product` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(1,2),(2,2),(3,2),(4,2),(5,2),(6,2),(1,3),(1,4),(1,5),(6,6);
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
  `product_description` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `expiration_date` date NOT NULL,
  `availability` tinyint NOT NULL,
  `prescription` tinyint NOT NULL,
  `supplier_id` int NOT NULL,
  `image_url` varchar(45) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `Pr_Sp` (`supplier_id`),
  CONSTRAINT `Pr_Sp` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'brufen','retard',5,'2012-12-20',1,1,1,'assets/images/product/brufen-retard.jpg'),(2,'spedifen','4040mg',4,'2012-12-20',1,1,1,'assets/images/product/brufen-retard.jpg'),(3,'magnezijum','4040mg',3,'2012-12-20',1,1,1,'assets/images/product/brufen-retard.jpg'),(4,'c vitamin','4040mg',4,'2012-12-20',1,1,1,'assets/images/product/brufen-retard.jpg'),(5,'rapidol','4040mg',5,'2012-12-20',1,1,1,'assets/images/product/brufen-retard.jpg'),(6,'ginko','lep',62,'2012-12-20',1,1,1,'assets/images/product/brufen-retard.jpg'),(7,'pantenol','4040mg',3,'2012-12-20',1,1,1,'assets/images/product/brufen-retard.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` int NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `supplier_id` int NOT NULL,
  `supplier_name` varchar(50) NOT NULL,
  `address_id` int NOT NULL,
  PRIMARY KEY (`supplier_id`),
  KEY `Sp_Ad` (`address_id`),
  CONSTRAINT `Sp_Ad` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (1,'okle',1);
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `phone_number` int NOT NULL,
  `e_mail` varchar(50) NOT NULL,
  `birthDate` date NOT NULL,
  `user_name` varchar(40) NOT NULL,
  `user_password` varchar(30) NOT NULL,
  `address_id` int NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `Us_Ad` (`address_id`),
  KEY `Us_Ro` (`role_id`),
  CONSTRAINT `Us_Ad` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`),
  CONSTRAINT `Us_Ro` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-10 21:57:40
