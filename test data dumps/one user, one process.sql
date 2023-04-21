CREATE DATABASE  IF NOT EXISTS `promod` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `promod`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: promod
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `bpmnfile`
--

DROP TABLE IF EXISTS `bpmnfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bpmnfile` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `bpmn_content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bpmnfile`
--

LOCK TABLES `bpmnfile` WRITE;
/*!40000 ALTER TABLE `bpmnfile` DISABLE KEYS */;
INSERT INTO `bpmnfile` VALUES (1,'<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><bpmn:definitions xmlns:bpmn=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:dc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:di=\"http://www.omg.org/spec/DD/20100524/DI\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"Definitions_1\" targetNamespace=\"http://bpmn.io/schema/bpmn\"><bpmn:process id=\"Process_1\" isExecutable=\"false\"><bpmn:startEvent id=\"StartEvent_1\"><bpmn:outgoing>Flow_01q7ouq</bpmn:outgoing></bpmn:startEvent><bpmn:task id=\"Element_4_Element_19_Activity_1jbocpn\" name=\"Process order\"><bpmn:incoming>Flow_01q7ouq</bpmn:incoming><bpmn:outgoing>Flow_194io7d</bpmn:outgoing><bpmn:property id=\"Property_1pgn2u8\" name=\"__targetRef_placeholder\"/><bpmn:dataInputAssociation id=\"DataInputAssociation_03sk2ee\"><bpmn:sourceRef>WorkItem_2_WorkItem_17_DataObjectReference_035j01h</bpmn:sourceRef><bpmn:targetRef>Property_1pgn2u8</bpmn:targetRef></bpmn:dataInputAssociation></bpmn:task><bpmn:sequenceFlow id=\"Flow_01q7ouq\" sourceRef=\"StartEvent_1\" targetRef=\"Element_4_Element_19_Activity_1jbocpn\"/><bpmn:dataObjectReference dataObjectRef=\"DataObject_0c9ykmh\" id=\"WorkItem_2_WorkItem_17_DataObjectReference_035j01h\" name=\"Order\"/><bpmn:dataObject id=\"DataObject_0c9ykmh\"/><bpmn:exclusiveGateway id=\"Gateway_08nbdsp\" name=\"Everything in stock\"><bpmn:incoming>Flow_194io7d</bpmn:incoming><bpmn:outgoing>Flow_191dgpc</bpmn:outgoing><bpmn:outgoing>Flow_0y6oe2h</bpmn:outgoing></bpmn:exclusiveGateway><bpmn:sequenceFlow id=\"Flow_194io7d\" sourceRef=\"Element_4_Element_19_Activity_1jbocpn\" targetRef=\"Gateway_08nbdsp\"/><bpmn:task id=\"Element_5_Element_20_Activity_1gl1ytw\" name=\"Pack order\"><bpmn:incoming>Flow_191dgpc</bpmn:incoming><bpmn:incoming>Flow_0ej0v4q</bpmn:incoming><bpmn:outgoing>Flow_0q0qfwy</bpmn:outgoing><bpmn:dataOutputAssociation id=\"DataOutputAssociation_01oj0in\"><bpmn:targetRef>WorkItem_3_WorkItem_18_DataObjectReference_01xj9q6</bpmn:targetRef></bpmn:dataOutputAssociation></bpmn:task><bpmn:sequenceFlow id=\"Flow_191dgpc\" name=\"Yes\" sourceRef=\"Gateway_08nbdsp\" targetRef=\"Element_5_Element_20_Activity_1gl1ytw\"/><bpmn:task id=\"Element_6_Element_21_Activity_0wgkjl1\" name=\"Get items from warehouse\"><bpmn:incoming>Flow_0y6oe2h</bpmn:incoming><bpmn:outgoing>Flow_0ej0v4q</bpmn:outgoing></bpmn:task><bpmn:sequenceFlow id=\"Flow_0y6oe2h\" name=\"No\" sourceRef=\"Gateway_08nbdsp\" targetRef=\"Element_6_Element_21_Activity_0wgkjl1\"/><bpmn:endEvent id=\"Event_1m157gf\"><bpmn:incoming>Flow_0q0qfwy</bpmn:incoming></bpmn:endEvent><bpmn:sequenceFlow id=\"Flow_0q0qfwy\" sourceRef=\"Element_5_Element_20_Activity_1gl1ytw\" targetRef=\"Event_1m157gf\"/><bpmn:sequenceFlow id=\"Flow_0ej0v4q\" sourceRef=\"Element_6_Element_21_Activity_0wgkjl1\" targetRef=\"Element_5_Element_20_Activity_1gl1ytw\"/><bpmn:dataObjectReference dataObjectRef=\"DataObject_0a83evg\" id=\"WorkItem_3_WorkItem_18_DataObjectReference_01xj9q6\" name=\"Package\"/><bpmn:dataObject id=\"DataObject_0a83evg\"/></bpmn:process><bpmndi:BPMNDiagram id=\"BPMNDiagram_1\"><bpmndi:BPMNPlane bpmnElement=\"Process_1\" id=\"BPMNPlane_1\"><bpmndi:BPMNShape bpmnElement=\"StartEvent_1\" id=\"_BPMNShape_StartEvent_2\"><dc:Bounds height=\"36\" width=\"36\" x=\"173\" y=\"102\"/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"Element_4_Element_19_Activity_1jbocpn\" id=\"Activity_1jbocpn_di\"><dc:Bounds height=\"80\" width=\"100\" x=\"260\" y=\"80\"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"WorkItem_2_WorkItem_17_DataObjectReference_035j01h\" id=\"DataObjectReference_035j01h_di\"><dc:Bounds height=\"50\" width=\"36\" x=\"292\" y=\"225\"/><bpmndi:BPMNLabel><dc:Bounds height=\"14\" width=\"29\" x=\"296\" y=\"282\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"Gateway_08nbdsp\" id=\"Gateway_08nbdsp_di\" isMarkerVisible=\"true\"><dc:Bounds height=\"50\" width=\"50\" x=\"415\" y=\"95\"/><bpmndi:BPMNLabel><dc:Bounds height=\"27\" width=\"64\" x=\"408\" y=\"65\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"Element_5_Element_20_Activity_1gl1ytw\" id=\"Activity_1gl1ytw_di\"><dc:Bounds height=\"80\" width=\"100\" x=\"560\" y=\"80\"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"Element_6_Element_21_Activity_0wgkjl1\" id=\"Activity_0wgkjl1_di\"><dc:Bounds height=\"80\" width=\"100\" x=\"560\" y=\"190\"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"Event_1m157gf\" id=\"Event_1m157gf_di\"><dc:Bounds height=\"36\" width=\"36\" x=\"762\" y=\"102\"/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"WorkItem_3_WorkItem_18_DataObjectReference_01xj9q6\" id=\"DataObjectReference_01xj9q6_di\"><dc:Bounds height=\"50\" width=\"36\" x=\"592\" y=\"-15\"/><bpmndi:BPMNLabel><dc:Bounds height=\"14\" width=\"43\" x=\"589\" y=\"-45\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement=\"DataInputAssociation_03sk2ee\" id=\"DataInputAssociation_03sk2ee_di\"><di:waypoint x=\"310\" y=\"225\"/><di:waypoint x=\"310\" y=\"160\"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_01q7ouq\" id=\"Flow_01q7ouq_di\"><di:waypoint x=\"209\" y=\"120\"/><di:waypoint x=\"260\" y=\"120\"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_194io7d\" id=\"Flow_194io7d_di\"><di:waypoint x=\"360\" y=\"120\"/><di:waypoint x=\"415\" y=\"120\"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"DataOutputAssociation_01oj0in\" id=\"DataOutputAssociation_01oj0in_di\"><di:waypoint x=\"609\" y=\"80\"/><di:waypoint x=\"608\" y=\"35\"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_191dgpc\" id=\"Flow_191dgpc_di\"><di:waypoint x=\"465\" y=\"120\"/><di:waypoint x=\"560\" y=\"120\"/><bpmndi:BPMNLabel><dc:Bounds height=\"14\" width=\"19\" x=\"490\" y=\"93\"/></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_0y6oe2h\" id=\"Flow_0y6oe2h_di\"><di:waypoint x=\"440\" y=\"145\"/><di:waypoint x=\"440\" y=\"230\"/><di:waypoint x=\"560\" y=\"230\"/><bpmndi:BPMNLabel><dc:Bounds height=\"14\" width=\"15\" x=\"448\" y=\"185\"/></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_0q0qfwy\" id=\"Flow_0q0qfwy_di\"><di:waypoint x=\"660\" y=\"120\"/><di:waypoint x=\"762\" y=\"120\"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_0ej0v4q\" id=\"Flow_0ej0v4q_di\"><di:waypoint x=\"610\" y=\"190\"/><di:waypoint x=\"610\" y=\"160\"/></bpmndi:BPMNEdge></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>');
/*!40000 ALTER TABLE `bpmnfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `element_process`
--

DROP TABLE IF EXISTS `element_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `element_process` (
  `element_id` bigint NOT NULL,
  `process_id` bigint NOT NULL,
  KEY `FKgkhsdg345nf9f5skkd8gt2x12` (`process_id`),
  KEY `FKo5uh1sl7mw95eand9vd7k1j7x` (`element_id`),
  CONSTRAINT `FKgkhsdg345nf9f5skkd8gt2x12` FOREIGN KEY (`process_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FKo5uh1sl7mw95eand9vd7k1j7x` FOREIGN KEY (`element_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `element_process`
--

LOCK TABLES `element_process` WRITE;
/*!40000 ALTER TABLE `element_process` DISABLE KEYS */;
INSERT INTO `element_process` VALUES (4,1),(5,1),(6,1);
/*!40000 ALTER TABLE `element_process` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `element_process_usage`
--

DROP TABLE IF EXISTS `element_process_usage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `element_process_usage` (
  `element_id` bigint NOT NULL,
  `process_id` bigint NOT NULL,
  KEY `FKkbif1gobvormhka7o7cjhn6up` (`process_id`),
  KEY `FKhei207p4whdvx83hdgy5imsij` (`element_id`),
  CONSTRAINT `FKhei207p4whdvx83hdgy5imsij` FOREIGN KEY (`element_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FKkbif1gobvormhka7o7cjhn6up` FOREIGN KEY (`process_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `element_process_usage`
--

LOCK TABLES `element_process_usage` WRITE;
/*!40000 ALTER TABLE `element_process_usage` DISABLE KEYS */;
INSERT INTO `element_process_usage` VALUES (4,1),(5,1),(6,1);
/*!40000 ALTER TABLE `element_process_usage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_user`
--

DROP TABLE IF EXISTS `group_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_user` (
  `group_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  KEY `FKfasiu5nvq4dviihhnsxrjxmov` (`user_id`),
  KEY `FK384xkk78xmp5id9af2t4xy5vt` (`group_id`),
  CONSTRAINT `FK384xkk78xmp5id9af2t4xy5vt` FOREIGN KEY (`group_id`) REFERENCES `user_type` (`id`),
  CONSTRAINT `FKfasiu5nvq4dviihhnsxrjxmov` FOREIGN KEY (`user_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_user`
--

LOCK TABLES `group_user` WRITE;
/*!40000 ALTER TABLE `group_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `group_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `item_type` varchar(31) NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `brief_description` longtext,
  `change_date` date DEFAULT NULL,
  `change_description` longtext,
  `is_template` bit(1) NOT NULL,
  `main_description` longtext,
  `name` varchar(255) DEFAULT NULL,
  `version` varchar(255) DEFAULT NULL,
  `alternatives` longtext,
  `elements_order` varchar(255) DEFAULT NULL,
  `how_to_staff` longtext,
  `key_considerations` longtext,
  `purpose` longtext,
  `scope` longtext,
  `usage_notes` longtext,
  `assignment_approaches` longtext,
  `skills` longtext,
  `task_type` varchar(255) DEFAULT NULL,
  `brief_outline` longtext,
  `impact_of_not_having` longtext,
  `notation` longtext,
  `reason_for_not_needing` longtext,
  `template_text` longtext,
  `url_address` longtext,
  `work_item_type` varchar(255) DEFAULT NULL,
  `created_from_id` bigint DEFAULT NULL,
  `owner_id` bigint DEFAULT NULL,
  `project_id` bigint DEFAULT NULL,
  `bpmn_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKa6asmw4mn61f0coj79lia966d` (`created_from_id`),
  KEY `FK9fetlnr3l4b6c4x2w8ihx6ixf` (`owner_id`),
  KEY `FKf60hnjyqgladtp0jw5o0n4e9u` (`project_id`),
  KEY `FK9fwhr8epg64uhcgebrnv4fn45` (`bpmn_id`),
  CONSTRAINT `FK9fetlnr3l4b6c4x2w8ihx6ixf` FOREIGN KEY (`owner_id`) REFERENCES `user_type` (`id`),
  CONSTRAINT `FK9fwhr8epg64uhcgebrnv4fn45` FOREIGN KEY (`bpmn_id`) REFERENCES `bpmnfile` (`id`),
  CONSTRAINT `FKa6asmw4mn61f0coj79lia966d` FOREIGN KEY (`created_from_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FKf60hnjyqgladtp0jw5o0n4e9u` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES ('process',1,'Simple process describing order','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',_binary '\0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Simple order','1.0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','4;5;6','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,1),('WorkItem',2,'Order from customer','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',_binary '\0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Order','1.0',NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,'Electronic document',NULL,1,NULL,NULL),('WorkItem',3,'Package with goods for customer','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',_binary '\0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Package','1.0',NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p><br></p>','<p><br></p>','<p><br></p>',NULL,'Physical item',NULL,1,NULL,NULL),('task',4,'Processing incoming order ','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',_binary '\0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Process order','1.0',NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,NULL,NULL,'task',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL),('task',5,'Packing order to customer','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',_binary '\0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Pack order','1.0',NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,NULL,NULL,'task',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL),('task',6,'Getting required items from external warehouse','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',_binary '\0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. In rutrum. Praesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea&nbsp;</p><p><br></p><p>commodi</p><p>&nbsp;consequatur?&nbsp;</p><p>Donec iaculis&nbsp;</p><p><br></p><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>','Get items from warehouse','1.0',NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,NULL,NULL,'task',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL),('Role',7,'Customer template','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',_binary '','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Customer','1.0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL),('WorkItem',8,'Basic template for order work item','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',_binary '','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Order template','1.1',NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,'Electronic document',2,1,NULL,NULL),('Role',9,'Worker in logistics','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',_binary '\0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Logistics','1.0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL),('Role',10,'Sales department','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',_binary '\0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Sales','1.0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_user_access`
--

DROP TABLE IF EXISTS `item_user_access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_user_access` (
  `element_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  KEY `FK4dnsf159badtqwmhbop1jdrr1` (`user_id`),
  KEY `FKm9j879dns9hlsnvyqtgdxu713` (`element_id`),
  CONSTRAINT `FK4dnsf159badtqwmhbop1jdrr1` FOREIGN KEY (`user_id`) REFERENCES `user_type` (`id`),
  CONSTRAINT `FKm9j879dns9hlsnvyqtgdxu713` FOREIGN KEY (`element_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_user_access`
--

LOCK TABLES `item_user_access` WRITE;
/*!40000 ALTER TABLE `item_user_access` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_user_access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_user_edit`
--

DROP TABLE IF EXISTS `item_user_edit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_user_edit` (
  `element_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  KEY `FK41tc3waay8mrrbdsq55xh15al` (`user_id`),
  KEY `FKfdt9v9vs4dr1rpid4yihnvekb` (`element_id`),
  CONSTRAINT `FK41tc3waay8mrrbdsq55xh15al` FOREIGN KEY (`user_id`) REFERENCES `user_type` (`id`),
  CONSTRAINT `FKfdt9v9vs4dr1rpid4yihnvekb` FOREIGN KEY (`element_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_user_edit`
--

LOCK TABLES `item_user_edit` WRITE;
/*!40000 ALTER TABLE `item_user_edit` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_user_edit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `process_metric`
--

DROP TABLE IF EXISTS `process_metric`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `process_metric` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` longtext,
  `name` varchar(255) DEFAULT NULL,
  `process_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKb8t1qb8y6m9qrmfudsr1iomp3` (`process_id`),
  CONSTRAINT `FKb8t1qb8y6m9qrmfudsr1iomp3` FOREIGN KEY (`process_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `process_metric`
--

LOCK TABLES `process_metric` WRITE;
/*!40000 ALTER TABLE `process_metric` DISABLE KEYS */;
INSERT INTO `process_metric` VALUES (1,'Loremi ispum','Metric A',1),(2,'Lorem ipsum','Metric B',1);
/*!40000 ALTER TABLE `process_metric` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `brief_description` longtext,
  `name` varchar(255) DEFAULT NULL,
  `project_owner_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcfmwwpp9k5bcjps7kepd2j855` (`project_owner_id`),
  CONSTRAINT `FKcfmwwpp9k5bcjps7kepd2j855` FOREIGN KEY (`project_owner_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_user_access`
--

DROP TABLE IF EXISTS `project_user_access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_user_access` (
  `project_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  KEY `FKqrxhydvk3iesmlfvdehxn0j7n` (`user_id`),
  KEY `FK1xumutp842h1bnxmm0vktcmw1` (`project_id`),
  CONSTRAINT `FK1xumutp842h1bnxmm0vktcmw1` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`),
  CONSTRAINT `FKqrxhydvk3iesmlfvdehxn0j7n` FOREIGN KEY (`user_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_user_access`
--

LOCK TABLES `project_user_access` WRITE;
/*!40000 ALTER TABLE `project_user_access` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_user_access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_user_edit`
--

DROP TABLE IF EXISTS `project_user_edit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_user_edit` (
  `project_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  KEY `FKalv4wjishu8a5lbtkf2rxqkgq` (`user_id`),
  KEY `FK1oluyj11y0wit0qc1o5i856ug` (`project_id`),
  CONSTRAINT `FK1oluyj11y0wit0qc1o5i856ug` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`),
  CONSTRAINT `FKalv4wjishu8a5lbtkf2rxqkgq` FOREIGN KEY (`user_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_user_edit`
--

LOCK TABLES `project_user_edit` WRITE;
/*!40000 ALTER TABLE `project_user_edit` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_user_edit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rasci`
--

DROP TABLE IF EXISTS `rasci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rasci` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `type` char(1) NOT NULL,
  `role_id` bigint DEFAULT NULL,
  `task_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK807s3nbuh84079eayk4u1saf2` (`role_id`),
  KEY `FK1f2kyqd63k6garivshbvettua` (`task_id`),
  CONSTRAINT `FK1f2kyqd63k6garivshbvettua` FOREIGN KEY (`task_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FK807s3nbuh84079eayk4u1saf2` FOREIGN KEY (`role_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rasci`
--

LOCK TABLES `rasci` WRITE;
/*!40000 ALTER TABLE `rasci` DISABLE KEYS */;
INSERT INTO `rasci` VALUES (2,'R',10,4),(4,'I',7,5),(5,'R',9,6),(6,'S',10,6),(8,'C',7,4),(9,'A',9,5);
/*!40000 ALTER TABLE `rasci` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_task_usage`
--

DROP TABLE IF EXISTS `role_task_usage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_task_usage` (
  `role_id` bigint NOT NULL,
  `task_id` bigint NOT NULL,
  KEY `FK4ga8kstlc4nnw0ecxc9rdhsgx` (`task_id`),
  KEY `FKsuoc8hd51br2d2bq4j2kw409q` (`role_id`),
  CONSTRAINT `FK4ga8kstlc4nnw0ecxc9rdhsgx` FOREIGN KEY (`task_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FKsuoc8hd51br2d2bq4j2kw409q` FOREIGN KEY (`role_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_task_usage`
--

LOCK TABLES `role_task_usage` WRITE;
/*!40000 ALTER TABLE `role_task_usage` DISABLE KEYS */;
INSERT INTO `role_task_usage` VALUES (9,6),(9,5),(10,4),(10,6);
/*!40000 ALTER TABLE `role_task_usage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshot_element`
--

DROP TABLE IF EXISTS `snapshot_element`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshot_element` (
  `snapshot_element_type` varchar(31) NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `brief_description` longtext,
  `change_date` date DEFAULT NULL,
  `change_description` longtext,
  `main_description` longtext,
  `name` varchar(255) DEFAULT NULL,
  `original_id` bigint DEFAULT NULL,
  `snapshot_date` date DEFAULT NULL,
  `snapshot_description` longtext,
  `snapshot_name` varchar(255) DEFAULT NULL,
  `version` varchar(255) DEFAULT NULL,
  `alternatives` longtext,
  `elements_order` varchar(255) DEFAULT NULL,
  `how_to_staff` longtext,
  `key_considerations` longtext,
  `purpose` longtext,
  `scope` longtext,
  `usage_notes` longtext,
  `task_type` varchar(255) DEFAULT NULL,
  `original_element_id` bigint DEFAULT NULL,
  `snapshot_bpmn_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5ieovmh6x21pkvtvjx15nvbbf` (`original_element_id`),
  KEY `FK73v8a93k58c9bheo3b2qixqwe` (`snapshot_bpmn_id`),
  CONSTRAINT `FK5ieovmh6x21pkvtvjx15nvbbf` FOREIGN KEY (`original_element_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FK73v8a93k58c9bheo3b2qixqwe` FOREIGN KEY (`snapshot_bpmn_id`) REFERENCES `snapshotbpmn` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshot_element`
--

LOCK TABLES `snapshot_element` WRITE;
/*!40000 ALTER TABLE `snapshot_element` DISABLE KEYS */;
INSERT INTO `snapshot_element` VALUES ('SnapshotProcess',1,'Simple process describing order','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Simple order',1,'2023-04-21','Version without subprocess','Order process v 1.0','1.0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','2;3;4','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,1,1),('SnapshotTask',2,'Processing incoming order ','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Process order',4,'2023-04-21','Version without subprocess','Order process v 1.0','1.0',NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,'task',4,NULL),('SnapshotTask',3,'Packing order to customer','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Pack order',5,'2023-04-21','Version without subprocess','Order process v 1.0','1.0',NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea </p><ul><li>commodi</li><li> consequatur? </li><li>Donec iaculis </li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,'task',5,NULL),('SnapshotTask',4,'Getting required items from external warehouse','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. In rutrum. Praesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea&nbsp;</p><p><br></p><p>commodi</p><p>&nbsp;consequatur?&nbsp;</p><p>Donec iaculis&nbsp;</p><p><br></p><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>','Get items from warehouse',6,'2023-04-21','Version without subprocess','Order process v 1.0','1.0',NULL,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,NULL,'task',6,NULL);
/*!40000 ALTER TABLE `snapshot_element` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshot_element_snapshot_process`
--

DROP TABLE IF EXISTS `snapshot_element_snapshot_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshot_element_snapshot_process` (
  `snapshot_element_id` bigint NOT NULL,
  `snapshot_process_id` bigint NOT NULL,
  KEY `FK59q6obvtj2fpvak21sdnk75j0` (`snapshot_process_id`),
  KEY `FKlcp6nnogcauaii6fljkhfsnyu` (`snapshot_element_id`),
  CONSTRAINT `FK59q6obvtj2fpvak21sdnk75j0` FOREIGN KEY (`snapshot_process_id`) REFERENCES `snapshot_element` (`id`),
  CONSTRAINT `FKlcp6nnogcauaii6fljkhfsnyu` FOREIGN KEY (`snapshot_element_id`) REFERENCES `snapshot_element` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshot_element_snapshot_process`
--

LOCK TABLES `snapshot_element_snapshot_process` WRITE;
/*!40000 ALTER TABLE `snapshot_element_snapshot_process` DISABLE KEYS */;
INSERT INTO `snapshot_element_snapshot_process` VALUES (2,1),(3,1),(4,1);
/*!40000 ALTER TABLE `snapshot_element_snapshot_process` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshot_process_metric`
--

DROP TABLE IF EXISTS `snapshot_process_metric`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshot_process_metric` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` longtext,
  `name` varchar(255) DEFAULT NULL,
  `process_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKanq78qxb927lnbq4ahknq5qv5` (`process_id`),
  CONSTRAINT `FKanq78qxb927lnbq4ahknq5qv5` FOREIGN KEY (`process_id`) REFERENCES `snapshot_element` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshot_process_metric`
--

LOCK TABLES `snapshot_process_metric` WRITE;
/*!40000 ALTER TABLE `snapshot_process_metric` DISABLE KEYS */;
INSERT INTO `snapshot_process_metric` VALUES (1,'Loremi ispum','Metric A',1),(2,'Lorem ipsum','Metric B',1);
/*!40000 ALTER TABLE `snapshot_process_metric` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshot_rasci`
--

DROP TABLE IF EXISTS `snapshot_rasci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshot_rasci` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `type` char(1) NOT NULL,
  `role_id` bigint DEFAULT NULL,
  `task_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn7klrondnuwrrow0yhj8bx4b4` (`role_id`),
  KEY `FKkw1uyl5vp0niban7pdkqqkd1r` (`task_id`),
  CONSTRAINT `FKkw1uyl5vp0niban7pdkqqkd1r` FOREIGN KEY (`task_id`) REFERENCES `snapshot_element` (`id`),
  CONSTRAINT `FKn7klrondnuwrrow0yhj8bx4b4` FOREIGN KEY (`role_id`) REFERENCES `snapshot_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshot_rasci`
--

LOCK TABLES `snapshot_rasci` WRITE;
/*!40000 ALTER TABLE `snapshot_rasci` DISABLE KEYS */;
INSERT INTO `snapshot_rasci` VALUES (1,'R',1,2),(2,'C',2,2),(3,'I',2,3),(4,'A',3,3),(5,'R',3,4),(6,'S',1,4);
/*!40000 ALTER TABLE `snapshot_rasci` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshot_role`
--

DROP TABLE IF EXISTS `snapshot_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshot_role` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `brief_description` longtext,
  `change_date` date DEFAULT NULL,
  `change_description` longtext,
  `main_description` longtext,
  `name` varchar(255) DEFAULT NULL,
  `original_id` bigint DEFAULT NULL,
  `snapshot_date` date DEFAULT NULL,
  `snapshot_description` longtext,
  `snapshot_name` varchar(255) DEFAULT NULL,
  `version` varchar(255) DEFAULT NULL,
  `assignment_approaches` longtext,
  `skills` longtext,
  `original_role_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKh77wlflg28b5v26wl9i2d59na` (`original_role_id`),
  CONSTRAINT `FKh77wlflg28b5v26wl9i2d59na` FOREIGN KEY (`original_role_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshot_role`
--

LOCK TABLES `snapshot_role` WRITE;
/*!40000 ALTER TABLE `snapshot_role` DISABLE KEYS */;
INSERT INTO `snapshot_role` VALUES (1,'Sales department','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Sales',10,'2023-04-21','Version without subprocess','Order process v 1.0','1.0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',10),(2,'Customer template','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Customer',7,'2023-04-21','Version without subprocess','Order process v 1.0','1.0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',7),(3,'Worker in logistics','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Logistics',9,'2023-04-21','Version without subprocess','Order process v 1.0','1.0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',9);
/*!40000 ALTER TABLE `snapshot_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshot_state`
--

DROP TABLE IF EXISTS `snapshot_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshot_state` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `state_description` longtext,
  `state_name` varchar(255) DEFAULT NULL,
  `work_item_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsyq37e8qugvjogie0eeqqdw3h` (`work_item_id`),
  CONSTRAINT `FKsyq37e8qugvjogie0eeqqdw3h` FOREIGN KEY (`work_item_id`) REFERENCES `snapshot_work_item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshot_state`
--

LOCK TABLES `snapshot_state` WRITE;
/*!40000 ALTER TABLE `snapshot_state` DISABLE KEYS */;
INSERT INTO `snapshot_state` VALUES (1,'Not all goods are inside package','Partly completed',1),(2,'Lorem ipsum','Sent',1),(3,'Lorem ipsum','Prepared',1),(4,'Not all goods are inside package','Partly completed',3),(5,'Lorem ipsum','Sent',3),(6,'Lorem ipsum','Prepared',3);
/*!40000 ALTER TABLE `snapshot_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshot_task_step`
--

DROP TABLE IF EXISTS `snapshot_task_step`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshot_task_step` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` longtext,
  `name` varchar(255) DEFAULT NULL,
  `task_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1n87spmmcp4ea5h67w3vdu9vn` (`task_id`),
  CONSTRAINT `FK1n87spmmcp4ea5h67w3vdu9vn` FOREIGN KEY (`task_id`) REFERENCES `snapshot_element` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshot_task_step`
--

LOCK TABLES `snapshot_task_step` WRITE;
/*!40000 ALTER TABLE `snapshot_task_step` DISABLE KEYS */;
INSERT INTO `snapshot_task_step` VALUES (1,'Lroem ispum','Check payment',2),(2,'Lorem ipsum','Check supplies',2);
/*!40000 ALTER TABLE `snapshot_task_step` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshot_work_item`
--

DROP TABLE IF EXISTS `snapshot_work_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshot_work_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `brief_description` longtext,
  `change_date` date DEFAULT NULL,
  `change_description` longtext,
  `main_description` longtext,
  `name` varchar(255) DEFAULT NULL,
  `original_id` bigint DEFAULT NULL,
  `snapshot_date` date DEFAULT NULL,
  `snapshot_description` longtext,
  `snapshot_name` varchar(255) DEFAULT NULL,
  `version` varchar(255) DEFAULT NULL,
  `brief_outline` longtext,
  `impact_of_not_having` longtext,
  `key_considerations` longtext,
  `notation` longtext,
  `purpose` longtext,
  `reason_for_not_needing` longtext,
  `template_text` longtext,
  `url_address` longtext,
  `work_item_type` varchar(255) DEFAULT NULL,
  `original_work_item_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKs2apk9509w5b5gsnkgpb76gl3` (`original_work_item_id`),
  CONSTRAINT `FKs2apk9509w5b5gsnkgpb76gl3` FOREIGN KEY (`original_work_item_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshot_work_item`
--

LOCK TABLES `snapshot_work_item` WRITE;
/*!40000 ALTER TABLE `snapshot_work_item` DISABLE KEYS */;
INSERT INTO `snapshot_work_item` VALUES (1,'Package with goods','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Package',3,'2023-04-21','Only package snaphot','First package version','1.0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p><br></p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p><br></p>','<p><br></p>',NULL,'Physical item',3),(2,'Order from customer','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Order',2,'2023-04-21','Version without subprocess','Order process v 1.0','1.0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>',NULL,'Electronic document',2),(3,'Package with goods for customer','2023-04-21','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','Package',3,'2023-04-21','Version without subprocess','Order process v 1.0','1.0','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p><br></p>','<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Maecenas libero.</strong> Sed elit dui, pellentesque a, faucibus vel, interdum nec,<u> diam. In rutrum. P</u>raesent id justo in neque elementum ultrices. Integer lacinia. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <a href=\"http://localhost:3001/user/1/processes/google.com\" rel=\"noopener noreferrer\" target=\"_blank\">nisi ut aliquid</a> ex ea</p><p><br></p><p><br></p><ul><li>commodi</li><li>consequatur?</li><li>Donec iaculis</li></ul><p><br></p><p>gravida nulla. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque sapien.<em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </em>mollit anim id est laborum.</p>','<p><br></p>','<p><br></p>',NULL,'Physical item',3);
/*!40000 ALTER TABLE `snapshot_work_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshot_work_item_snapshot_task_input`
--

DROP TABLE IF EXISTS `snapshot_work_item_snapshot_task_input`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshot_work_item_snapshot_task_input` (
  `snapshot_work_item_id` bigint NOT NULL,
  `snapshot_element_id` bigint NOT NULL,
  KEY `FKrr7hd98t77eyc50h1jnex4fda` (`snapshot_element_id`),
  KEY `FK7xklgv1qoffx7j6t586gfq1n1` (`snapshot_work_item_id`),
  CONSTRAINT `FK7xklgv1qoffx7j6t586gfq1n1` FOREIGN KEY (`snapshot_work_item_id`) REFERENCES `snapshot_work_item` (`id`),
  CONSTRAINT `FKrr7hd98t77eyc50h1jnex4fda` FOREIGN KEY (`snapshot_element_id`) REFERENCES `snapshot_element` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshot_work_item_snapshot_task_input`
--

LOCK TABLES `snapshot_work_item_snapshot_task_input` WRITE;
/*!40000 ALTER TABLE `snapshot_work_item_snapshot_task_input` DISABLE KEYS */;
INSERT INTO `snapshot_work_item_snapshot_task_input` VALUES (2,2);
/*!40000 ALTER TABLE `snapshot_work_item_snapshot_task_input` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshot_work_item_snapshot_task_output`
--

DROP TABLE IF EXISTS `snapshot_work_item_snapshot_task_output`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshot_work_item_snapshot_task_output` (
  `snapshot_work_item_id` bigint NOT NULL,
  `snapshot_element_id` bigint NOT NULL,
  KEY `FKnh4o7qe1bwd2lqvgtgh5pw50y` (`snapshot_element_id`),
  KEY `FK6rrh2u8r14utv5c4ph2mr2cd6` (`snapshot_work_item_id`),
  CONSTRAINT `FK6rrh2u8r14utv5c4ph2mr2cd6` FOREIGN KEY (`snapshot_work_item_id`) REFERENCES `snapshot_work_item` (`id`),
  CONSTRAINT `FKnh4o7qe1bwd2lqvgtgh5pw50y` FOREIGN KEY (`snapshot_element_id`) REFERENCES `snapshot_element` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshot_work_item_snapshot_task_output`
--

LOCK TABLES `snapshot_work_item_snapshot_task_output` WRITE;
/*!40000 ALTER TABLE `snapshot_work_item_snapshot_task_output` DISABLE KEYS */;
INSERT INTO `snapshot_work_item_snapshot_task_output` VALUES (3,3);
/*!40000 ALTER TABLE `snapshot_work_item_snapshot_task_output` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snapshotbpmn`
--

DROP TABLE IF EXISTS `snapshotbpmn`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snapshotbpmn` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `bpmn_content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snapshotbpmn`
--

LOCK TABLES `snapshotbpmn` WRITE;
/*!40000 ALTER TABLE `snapshotbpmn` DISABLE KEYS */;
INSERT INTO `snapshotbpmn` VALUES (1,'<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><bpmn:definitions xmlns:bpmn=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:dc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:di=\"http://www.omg.org/spec/DD/20100524/DI\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"Definitions_1\" targetNamespace=\"http://bpmn.io/schema/bpmn\"><bpmn:process id=\"Process_1\" isExecutable=\"false\"><bpmn:startEvent id=\"StartEvent_1\"><bpmn:outgoing>Flow_01q7ouq</bpmn:outgoing></bpmn:startEvent><bpmn:task id=\"Element_4_Element_19_Activity_1jbocpn\" name=\"Process order\"><bpmn:incoming>Flow_01q7ouq</bpmn:incoming><bpmn:outgoing>Flow_194io7d</bpmn:outgoing><bpmn:property id=\"Property_1pgn2u8\" name=\"__targetRef_placeholder\"/><bpmn:dataInputAssociation id=\"DataInputAssociation_03sk2ee\"><bpmn:sourceRef>WorkItem_2_WorkItem_17_DataObjectReference_035j01h</bpmn:sourceRef><bpmn:targetRef>Property_1pgn2u8</bpmn:targetRef></bpmn:dataInputAssociation></bpmn:task><bpmn:sequenceFlow id=\"Flow_01q7ouq\" sourceRef=\"StartEvent_1\" targetRef=\"Element_4_Element_19_Activity_1jbocpn\"/><bpmn:dataObjectReference dataObjectRef=\"DataObject_0c9ykmh\" id=\"WorkItem_2_WorkItem_17_DataObjectReference_035j01h\" name=\"Order\"/><bpmn:dataObject id=\"DataObject_0c9ykmh\"/><bpmn:exclusiveGateway id=\"Gateway_08nbdsp\" name=\"Everything in stock\"><bpmn:incoming>Flow_194io7d</bpmn:incoming><bpmn:outgoing>Flow_191dgpc</bpmn:outgoing><bpmn:outgoing>Flow_0y6oe2h</bpmn:outgoing></bpmn:exclusiveGateway><bpmn:sequenceFlow id=\"Flow_194io7d\" sourceRef=\"Element_4_Element_19_Activity_1jbocpn\" targetRef=\"Gateway_08nbdsp\"/><bpmn:task id=\"Element_5_Element_20_Activity_1gl1ytw\" name=\"Pack order\"><bpmn:incoming>Flow_191dgpc</bpmn:incoming><bpmn:incoming>Flow_0ej0v4q</bpmn:incoming><bpmn:outgoing>Flow_0q0qfwy</bpmn:outgoing><bpmn:dataOutputAssociation id=\"DataOutputAssociation_01oj0in\"><bpmn:targetRef>WorkItem_3_WorkItem_18_DataObjectReference_01xj9q6</bpmn:targetRef></bpmn:dataOutputAssociation></bpmn:task><bpmn:sequenceFlow id=\"Flow_191dgpc\" name=\"Yes\" sourceRef=\"Gateway_08nbdsp\" targetRef=\"Element_5_Element_20_Activity_1gl1ytw\"/><bpmn:task id=\"Element_6_Element_21_Activity_0wgkjl1\" name=\"Get items from warehouse\"><bpmn:incoming>Flow_0y6oe2h</bpmn:incoming><bpmn:outgoing>Flow_0ej0v4q</bpmn:outgoing></bpmn:task><bpmn:sequenceFlow id=\"Flow_0y6oe2h\" name=\"No\" sourceRef=\"Gateway_08nbdsp\" targetRef=\"Element_6_Element_21_Activity_0wgkjl1\"/><bpmn:endEvent id=\"Event_1m157gf\"><bpmn:incoming>Flow_0q0qfwy</bpmn:incoming></bpmn:endEvent><bpmn:sequenceFlow id=\"Flow_0q0qfwy\" sourceRef=\"Element_5_Element_20_Activity_1gl1ytw\" targetRef=\"Event_1m157gf\"/><bpmn:sequenceFlow id=\"Flow_0ej0v4q\" sourceRef=\"Element_6_Element_21_Activity_0wgkjl1\" targetRef=\"Element_5_Element_20_Activity_1gl1ytw\"/><bpmn:dataObjectReference dataObjectRef=\"DataObject_0a83evg\" id=\"WorkItem_3_WorkItem_18_DataObjectReference_01xj9q6\" name=\"Package\"/><bpmn:dataObject id=\"DataObject_0a83evg\"/></bpmn:process><bpmndi:BPMNDiagram id=\"BPMNDiagram_1\"><bpmndi:BPMNPlane bpmnElement=\"Process_1\" id=\"BPMNPlane_1\"><bpmndi:BPMNShape bpmnElement=\"StartEvent_1\" id=\"_BPMNShape_StartEvent_2\"><dc:Bounds height=\"36\" width=\"36\" x=\"173\" y=\"102\"/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"Element_4_Element_19_Activity_1jbocpn\" id=\"Activity_1jbocpn_di\"><dc:Bounds height=\"80\" width=\"100\" x=\"260\" y=\"80\"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"WorkItem_2_WorkItem_17_DataObjectReference_035j01h\" id=\"DataObjectReference_035j01h_di\"><dc:Bounds height=\"50\" width=\"36\" x=\"292\" y=\"225\"/><bpmndi:BPMNLabel><dc:Bounds height=\"14\" width=\"29\" x=\"296\" y=\"282\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"Gateway_08nbdsp\" id=\"Gateway_08nbdsp_di\" isMarkerVisible=\"true\"><dc:Bounds height=\"50\" width=\"50\" x=\"415\" y=\"95\"/><bpmndi:BPMNLabel><dc:Bounds height=\"27\" width=\"64\" x=\"408\" y=\"65\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"Element_5_Element_20_Activity_1gl1ytw\" id=\"Activity_1gl1ytw_di\"><dc:Bounds height=\"80\" width=\"100\" x=\"560\" y=\"80\"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"Element_6_Element_21_Activity_0wgkjl1\" id=\"Activity_0wgkjl1_di\"><dc:Bounds height=\"80\" width=\"100\" x=\"560\" y=\"190\"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"Event_1m157gf\" id=\"Event_1m157gf_di\"><dc:Bounds height=\"36\" width=\"36\" x=\"762\" y=\"102\"/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"WorkItem_3_WorkItem_18_DataObjectReference_01xj9q6\" id=\"DataObjectReference_01xj9q6_di\"><dc:Bounds height=\"50\" width=\"36\" x=\"592\" y=\"-15\"/><bpmndi:BPMNLabel><dc:Bounds height=\"14\" width=\"43\" x=\"589\" y=\"-45\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement=\"DataInputAssociation_03sk2ee\" id=\"DataInputAssociation_03sk2ee_di\"><di:waypoint x=\"310\" y=\"225\"/><di:waypoint x=\"310\" y=\"160\"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_01q7ouq\" id=\"Flow_01q7ouq_di\"><di:waypoint x=\"209\" y=\"120\"/><di:waypoint x=\"260\" y=\"120\"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_194io7d\" id=\"Flow_194io7d_di\"><di:waypoint x=\"360\" y=\"120\"/><di:waypoint x=\"415\" y=\"120\"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"DataOutputAssociation_01oj0in\" id=\"DataOutputAssociation_01oj0in_di\"><di:waypoint x=\"609\" y=\"80\"/><di:waypoint x=\"608\" y=\"35\"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_191dgpc\" id=\"Flow_191dgpc_di\"><di:waypoint x=\"465\" y=\"120\"/><di:waypoint x=\"560\" y=\"120\"/><bpmndi:BPMNLabel><dc:Bounds height=\"14\" width=\"19\" x=\"490\" y=\"93\"/></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_0y6oe2h\" id=\"Flow_0y6oe2h_di\"><di:waypoint x=\"440\" y=\"145\"/><di:waypoint x=\"440\" y=\"230\"/><di:waypoint x=\"560\" y=\"230\"/><bpmndi:BPMNLabel><dc:Bounds height=\"14\" width=\"15\" x=\"448\" y=\"185\"/></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_0q0qfwy\" id=\"Flow_0q0qfwy_di\"><di:waypoint x=\"660\" y=\"120\"/><di:waypoint x=\"762\" y=\"120\"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement=\"Flow_0ej0v4q\" id=\"Flow_0ej0v4q_di\"><di:waypoint x=\"610\" y=\"190\"/><di:waypoint x=\"610\" y=\"160\"/></bpmndi:BPMNEdge></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>');
/*!40000 ALTER TABLE `snapshotbpmn` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `state_description` longtext,
  `state_name` varchar(255) DEFAULT NULL,
  `work_item_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKev0w1kmclq6bh4dvsu9t6868g` (`work_item_id`),
  CONSTRAINT `FKev0w1kmclq6bh4dvsu9t6868g` FOREIGN KEY (`work_item_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'Not all goods are inside package','Partly completed',3),(2,'Lorem ipsum','Sent',3),(3,'Lorem ipsum','Prepared',3);
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_step`
--

DROP TABLE IF EXISTS `task_step`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_step` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` longtext,
  `name` varchar(255) DEFAULT NULL,
  `task_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq5x21v027r0uafqpt5g8uhkp7` (`task_id`),
  CONSTRAINT `FKq5x21v027r0uafqpt5g8uhkp7` FOREIGN KEY (`task_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_step`
--

LOCK TABLES `task_step` WRITE;
/*!40000 ALTER TABLE `task_step` DISABLE KEYS */;
INSERT INTO `task_step` VALUES (1,'Lroem ispum','Check payment',4),(2,'Lorem ipsum','Check supplies',4);
/*!40000 ALTER TABLE `task_step` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_type` (
  `user_type` varchar(31) NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `group_name` varchar(255) DEFAULT NULL,
  `creator_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjiqeajboasuyuv0tmqxp5wr1k` (`creator_id`),
  CONSTRAINT `FKjiqeajboasuyuv0tmqxp5wr1k` FOREIGN KEY (`creator_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` VALUES ('user',1,'$2a$10$ic25MBXc5mokuZErJc/7TOdc3Dv4aPeG/qQ2GiMGiU4eUmoufEkeq','test1',NULL,NULL);
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_item_activity_guidance`
--

DROP TABLE IF EXISTS `work_item_activity_guidance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_item_activity_guidance` (
  `work_item_id` bigint NOT NULL,
  `element_id` bigint NOT NULL,
  KEY `FKig9adpm1ejjyir66far90swh7` (`element_id`),
  KEY `FK6o1eqlif8crihynkl0bhql6tu` (`work_item_id`),
  CONSTRAINT `FK6o1eqlif8crihynkl0bhql6tu` FOREIGN KEY (`work_item_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FKig9adpm1ejjyir66far90swh7` FOREIGN KEY (`element_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_item_activity_guidance`
--

LOCK TABLES `work_item_activity_guidance` WRITE;
/*!40000 ALTER TABLE `work_item_activity_guidance` DISABLE KEYS */;
/*!40000 ALTER TABLE `work_item_activity_guidance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_item_process_usage`
--

DROP TABLE IF EXISTS `work_item_process_usage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_item_process_usage` (
  `work_item_id` bigint NOT NULL,
  `process_id` bigint NOT NULL,
  KEY `FK5ro5q980vpl6rjym33os3pcwp` (`process_id`),
  KEY `FKhirpdf2500gjv23ydvb4pcv4n` (`work_item_id`),
  CONSTRAINT `FK5ro5q980vpl6rjym33os3pcwp` FOREIGN KEY (`process_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FKhirpdf2500gjv23ydvb4pcv4n` FOREIGN KEY (`work_item_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_item_process_usage`
--

LOCK TABLES `work_item_process_usage` WRITE;
/*!40000 ALTER TABLE `work_item_process_usage` DISABLE KEYS */;
INSERT INTO `work_item_process_usage` VALUES (2,1),(3,1);
/*!40000 ALTER TABLE `work_item_process_usage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_item_task_mandatory_input`
--

DROP TABLE IF EXISTS `work_item_task_mandatory_input`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_item_task_mandatory_input` (
  `work_item_id` bigint NOT NULL,
  `element_id` bigint NOT NULL,
  KEY `FKi8am810g3w5rflx58f7ah6ppg` (`element_id`),
  KEY `FKbb5io8xoxq19q1joo29jsqbv9` (`work_item_id`),
  CONSTRAINT `FKbb5io8xoxq19q1joo29jsqbv9` FOREIGN KEY (`work_item_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FKi8am810g3w5rflx58f7ah6ppg` FOREIGN KEY (`element_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_item_task_mandatory_input`
--

LOCK TABLES `work_item_task_mandatory_input` WRITE;
/*!40000 ALTER TABLE `work_item_task_mandatory_input` DISABLE KEYS */;
INSERT INTO `work_item_task_mandatory_input` VALUES (2,4);
/*!40000 ALTER TABLE `work_item_task_mandatory_input` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_item_task_output`
--

DROP TABLE IF EXISTS `work_item_task_output`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_item_task_output` (
  `work_item_id` bigint NOT NULL,
  `element_id` bigint NOT NULL,
  KEY `FKh3680fq57ls1x21b0yp484mu9` (`element_id`),
  KEY `FK2ag4a5b1u8okvlhs92t8xlrrh` (`work_item_id`),
  CONSTRAINT `FK2ag4a5b1u8okvlhs92t8xlrrh` FOREIGN KEY (`work_item_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FKh3680fq57ls1x21b0yp484mu9` FOREIGN KEY (`element_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_item_task_output`
--

LOCK TABLES `work_item_task_output` WRITE;
/*!40000 ALTER TABLE `work_item_task_output` DISABLE KEYS */;
INSERT INTO `work_item_task_output` VALUES (3,5);
/*!40000 ALTER TABLE `work_item_task_output` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_item_task_usage`
--

DROP TABLE IF EXISTS `work_item_task_usage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_item_task_usage` (
  `work_item_id` bigint NOT NULL,
  `task_id` bigint NOT NULL,
  KEY `FKk66q40k2m8xt0hys4mau1n12y` (`task_id`),
  KEY `FKrmf3ag6cub45ayuyrcj9s9b6l` (`work_item_id`),
  CONSTRAINT `FKk66q40k2m8xt0hys4mau1n12y` FOREIGN KEY (`task_id`) REFERENCES `item` (`id`),
  CONSTRAINT `FKrmf3ag6cub45ayuyrcj9s9b6l` FOREIGN KEY (`work_item_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_item_task_usage`
--

LOCK TABLES `work_item_task_usage` WRITE;
/*!40000 ALTER TABLE `work_item_task_usage` DISABLE KEYS */;
INSERT INTO `work_item_task_usage` VALUES (2,4),(3,5);
/*!40000 ALTER TABLE `work_item_task_usage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-21 14:06:30
