-- MySQL dump 10.13  Distrib 5.7.20, for macos10.12 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `project_pages`
--

DROP TABLE IF EXISTS `project_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pageInfo` text,
  `pageId` int(11) NOT NULL,
  `createdAt` varchar(100) NOT NULL,
  `updatedAt` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_pages`
--

LOCK TABLES `project_pages` WRITE;
/*!40000 ALTER TABLE `project_pages` DISABLE KEYS */;
INSERT INTO `project_pages` VALUES (1,'[{\"com\":{\"component_name\":\"sidebar\",\"component_path\":\"components/js/sidebar/index\",\"component_desc\":\"侧边栏\",\"component_meta\":{\"url\":{\"name\":\"获取数据\",\"type\":\"string\"},\"content\":{\"name\":\"路由信息\",\"type\":\"jsoneditor\",\"value\":{\"日志监控\":\"http://localhost:4040/preview/pc/2\",\"流量转化\":\"http://localhost:4040/preview/pc/3\",\"盈利分布\":\"http://localhost:4040/preview/pc/4\",\"用户画像\":{\"用户分布\":\"http://localhost:4040/preview/pc/5\"}}}},\"component_type\":\"layout\",\"component_id\":1}}]',1,'2018-02-11 02:44:44','2018-04-02 02:55:47'),(2,'[{\"com\":{\"component_name\":\"text\",\"component_path\":\"components/js/text/index\",\"component_desc\":\"文本\",\"component_meta\":{\"label\":{\"name\":\"文本组件\",\"type\":\"string\"},\"content\":{\"name\":\"文本内容\",\"type\":\"string\",\"value\":\"流量页面\"},\"style\":{\"name\":\"样式\",\"type\":\"radio\",\"def\":\"style\",\"options\":{\"center\":\"居中\",\"left\":\"居左\",\"right\":\"居右\"}}},\"component_id\":0}},{\"com\":{\"component_name\":\"lineChart\",\"component_path\":\"components/js/line/index\",\"component_desc\":\"折线图\",\"component_meta\":{\"url\":{\"name\":\"获取数据\",\"type\":\"string\",\"value\":\"https://www.easy-mock.com/mock/5aadcefad923ab62b0bb4f4b/project/line\"},\"content\":{\"name\":\"文本内容\",\"type\":\"string\"}},\"component_type\":\"chart\",\"component_id\":1}},{\"com\":{\"component_name\":\"text\",\"component_path\":\"components/js/text/index\",\"component_desc\":\"文本\",\"component_meta\":{\"label\":{\"name\":\"文本组件\",\"type\":\"string\"},\"content\":{\"name\":\"文本内容\",\"type\":\"string\",\"value\":\"将顶焦度计\"},\"style\":{\"name\":\"样式\",\"type\":\"radio\",\"def\":\"style\",\"options\":{\"center\":\"居中\",\"left\":\"居左\",\"right\":\"居右\"},\"value\":\"center\"}},\"component_type\":\"chart\",\"component_id\":2}}]',2,'2018-03-15 02:25:28','2018-03-19 07:28:12'),(3,'[{\"com\":{\"component_name\":\"text\",\"component_path\":\"components/js/text/index\",\"component_desc\":\"文本\",\"component_meta\":{\"label\":{\"name\":\"文本组件\",\"type\":\"string\"},\"content\":{\"name\":\"文本内容\",\"type\":\"string\",\"value\":\"流量转化\"},\"style\":{\"name\":\"样式\",\"type\":\"radio\",\"def\":\"style\",\"options\":{\"center\":\"居中\",\"left\":\"居左\",\"right\":\"居右\"}}},\"component_id\":0}},{\"com\":{\"component_name\":\"mapChart\",\"component_path\":\"components/js/map/index\",\"component_desc\":\"热力图\",\"component_meta\":{\"url\":{\"name\":\"获取数据\",\"type\":\"string\"},\"content\":{\"name\":\"文本内容\",\"type\":\"string\"}},\"component_id\":1}}]',3,'2018-03-15 03:21:33','2018-03-15 03:21:33'),(4,'[{\"com\":{\"component_name\":\"layout\",\"component_path\":\"components/js/layout/index\",\"component_desc\":\"自定义布局\",\"component_meta\":{\"url\":{\"name\":\"获取数据\",\"type\":\"string\"},\"content\":{\"name\":\"定义布局\",\"type\":\"jsoneditor\",\"value\":{\"key\":1,\"div\":2}}},\"component_type\":\"layout\",\"component_id\":0,\"component_child\":{\"0\":[{\"com\":{\"component_name\":\"text\",\"component_path\":\"components/js/text/index\",\"component_desc\":\"文本\",\"component_meta\":{\"label\":{\"name\":\"文本组件\",\"type\":\"string\",\"value\":\"ff\"},\"content\":{\"name\":\"文本内容\",\"type\":\"string\",\"value\":\"ttiiiff\"},\"style\":{\"name\":\"样式\",\"type\":\"radio\",\"def\":\"style\",\"options\":{\"center\":\"居中\",\"left\":\"居左\",\"right\":\"居右\"}}},\"component_type\":\"chart\"}}],\"1\":[{\"com\":{\"component_name\":\"pieChart\",\"component_path\":\"components/js/pie/index\",\"component_desc\":\"饼状图\",\"component_meta\":{\"url\":{\"name\":\"获取数据\",\"type\":\"string\",\"value\":\"https://www.easy-mock.com/mock/5aadcefad923ab62b0bb4f4b/project/piechart\"},\"content\":{\"name\":\"文本内容\",\"type\":\"string\"}},\"component_type\":\"chart\"}}]}}}]',4,'2018-03-18 03:05:07','2018-03-26 01:41:00'),(5,'[{\"com\":{\"component_name\":\"nav\",\"component_path\":\"components/js/nav/index\",\"component_desc\":\"顶部栏\",\"component_meta\":{\"content\":{\"name\":\"文本内容\",\"type\":\"string\",\"value\":\"用户画像\"}},\"component_type\":\"layout\",\"component_id\":0}},{\"com\":{\"component_name\":\"layout\",\"component_path\":\"components/js/layout/index\",\"component_desc\":\"自定义布局\",\"component_meta\":{\"url\":{\"name\":\"获取数据\",\"type\":\"string\"},\"content\":{\"name\":\"定义布局\",\"type\":\"jsoneditor\"}},\"component_type\":\"layout\",\"component_id\":1,\"component_child\":{\"0\":[{\"com\":{\"component_name\":\"table\",\"component_path\":\"components/js/table/index\",\"component_desc\":\"表格\",\"component_meta\":{\"url\":{\"name\":\"获取数据\",\"type\":\"string\",\"value\":\"https://www.easy-mock.com/mock/5aadcefad923ab62b0bb4f4b/project/table\"},\"options\":{\"name\":\"表头自定义\",\"type\":\"jsoneditor\",\"value\":{\"name\":\"名字\",\"age\":\"年龄\",\"phone\":\"电话\",\"date\":\"出生日期\",\"email\":\"邮箱\",\"address\":\"出生地\"}}},\"component_type\":\"chart\"}},{\"com\":{\"component_name\":\"searchInput\",\"component_path\":\"components/js/searchInput/index\",\"component_desc\":\"输入搜索框\",\"component_meta\":{\"url\":{\"name\":\"获取数据\",\"type\":\"string\"},\"content\":{\"name\":\"文本内容\",\"type\":\"string\"}},\"component_type\":\"filter\"}}]}}}]',5,'2018-03-25 02:17:09','2018-04-07 02:04:35');
/*!40000 ALTER TABLE `project_pages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-16 17:08:38
