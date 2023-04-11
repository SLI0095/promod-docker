SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema promod
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema promod
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `promod` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;

USE `promod` ;

-- -----------------------------------------------------
-- Table `promod`.`bpmnfile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`bpmnfile` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `bpmn_content` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`user_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`user_type` (
  `user_type` VARCHAR(31) NOT NULL,
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  `group_name` VARCHAR(255) NULL DEFAULT NULL,
  `creator_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKjiqeajboasuyuv0tmqxp5wr1k` (`creator_id` ASC) VISIBLE,
  CONSTRAINT `FKjiqeajboasuyuv0tmqxp5wr1k`
    FOREIGN KEY (`creator_id`)
    REFERENCES `promod`.`user_type` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`project` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `brief_description` LONGTEXT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `project_owner_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKcfmwwpp9k5bcjps7kepd2j855` (`project_owner_id` ASC) VISIBLE,
  CONSTRAINT `FKcfmwwpp9k5bcjps7kepd2j855`
    FOREIGN KEY (`project_owner_id`)
    REFERENCES `promod`.`user_type` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`item` (
  `item_type` VARCHAR(31) NOT NULL,
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `brief_description` LONGTEXT NULL DEFAULT NULL,
  `change_date` DATE NULL DEFAULT NULL,
  `change_description` LONGTEXT NULL DEFAULT NULL,
  `is_template` BIT(1) NOT NULL,
  `main_description` LONGTEXT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `version` VARCHAR(255) NULL DEFAULT NULL,
  `alternatives` LONGTEXT NULL DEFAULT NULL,
  `elements_order` VARCHAR(255) NULL DEFAULT NULL,
  `how_to_staff` LONGTEXT NULL DEFAULT NULL,
  `key_considerations` LONGTEXT NULL DEFAULT NULL,
  `purpose` LONGTEXT NULL DEFAULT NULL,
  `scope` LONGTEXT NULL DEFAULT NULL,
  `usage_notes` LONGTEXT NULL DEFAULT NULL,
  `assignment_approaches` LONGTEXT NULL DEFAULT NULL,
  `skills` LONGTEXT NULL DEFAULT NULL,
  `task_type` VARCHAR(255) NULL DEFAULT NULL,
  `brief_outline` LONGTEXT NULL DEFAULT NULL,
  `impact_of_not_having` LONGTEXT NULL DEFAULT NULL,
  `notation` LONGTEXT NULL DEFAULT NULL,
  `reason_for_not_needing` LONGTEXT NULL DEFAULT NULL,
  `template_text` LONGTEXT NULL DEFAULT NULL,
  `url_address` LONGTEXT NULL DEFAULT NULL,
  `work_item_type` VARCHAR(255) NULL DEFAULT NULL,
  `created_from_id` BIGINT NULL DEFAULT NULL,
  `owner_id` BIGINT NULL DEFAULT NULL,
  `project_id` BIGINT NULL DEFAULT NULL,
  `bpmn_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKa6asmw4mn61f0coj79lia966d` (`created_from_id` ASC) VISIBLE,
  INDEX `FK9fetlnr3l4b6c4x2w8ihx6ixf` (`owner_id` ASC) VISIBLE,
  INDEX `FKf60hnjyqgladtp0jw5o0n4e9u` (`project_id` ASC) VISIBLE,
  INDEX `FK9fwhr8epg64uhcgebrnv4fn45` (`bpmn_id` ASC) VISIBLE,
  CONSTRAINT `FK9fetlnr3l4b6c4x2w8ihx6ixf`
    FOREIGN KEY (`owner_id`)
    REFERENCES `promod`.`user_type` (`id`),
  CONSTRAINT `FK9fwhr8epg64uhcgebrnv4fn45`
    FOREIGN KEY (`bpmn_id`)
    REFERENCES `promod`.`bpmnfile` (`id`),
  CONSTRAINT `FKa6asmw4mn61f0coj79lia966d`
    FOREIGN KEY (`created_from_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FKf60hnjyqgladtp0jw5o0n4e9u`
    FOREIGN KEY (`project_id`)
    REFERENCES `promod`.`project` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`element_process`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`element_process` (
  `element_id` BIGINT NOT NULL,
  `process_id` BIGINT NOT NULL,
  INDEX `FKgkhsdg345nf9f5skkd8gt2x12` (`process_id` ASC) VISIBLE,
  INDEX `FKo5uh1sl7mw95eand9vd7k1j7x` (`element_id` ASC) VISIBLE,
  CONSTRAINT `FKgkhsdg345nf9f5skkd8gt2x12`
    FOREIGN KEY (`process_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FKo5uh1sl7mw95eand9vd7k1j7x`
    FOREIGN KEY (`element_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`element_process_usage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`element_process_usage` (
  `element_id` BIGINT NOT NULL,
  `process_id` BIGINT NOT NULL,
  INDEX `FKkbif1gobvormhka7o7cjhn6up` (`process_id` ASC) VISIBLE,
  INDEX `FKhei207p4whdvx83hdgy5imsij` (`element_id` ASC) VISIBLE,
  CONSTRAINT `FKhei207p4whdvx83hdgy5imsij`
    FOREIGN KEY (`element_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FKkbif1gobvormhka7o7cjhn6up`
    FOREIGN KEY (`process_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`group_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`group_user` (
  `group_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  INDEX `FKfasiu5nvq4dviihhnsxrjxmov` (`user_id` ASC) VISIBLE,
  INDEX `FK384xkk78xmp5id9af2t4xy5vt` (`group_id` ASC) VISIBLE,
  CONSTRAINT `FK384xkk78xmp5id9af2t4xy5vt`
    FOREIGN KEY (`group_id`)
    REFERENCES `promod`.`user_type` (`id`),
  CONSTRAINT `FKfasiu5nvq4dviihhnsxrjxmov`
    FOREIGN KEY (`user_id`)
    REFERENCES `promod`.`user_type` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`item_user_access`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`item_user_access` (
  `element_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  INDEX `FK4dnsf159badtqwmhbop1jdrr1` (`user_id` ASC) VISIBLE,
  INDEX `FKm9j879dns9hlsnvyqtgdxu713` (`element_id` ASC) VISIBLE,
  CONSTRAINT `FK4dnsf159badtqwmhbop1jdrr1`
    FOREIGN KEY (`user_id`)
    REFERENCES `promod`.`user_type` (`id`),
  CONSTRAINT `FKm9j879dns9hlsnvyqtgdxu713`
    FOREIGN KEY (`element_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`item_user_edit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`item_user_edit` (
  `element_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  INDEX `FK41tc3waay8mrrbdsq55xh15al` (`user_id` ASC) VISIBLE,
  INDEX `FKfdt9v9vs4dr1rpid4yihnvekb` (`element_id` ASC) VISIBLE,
  CONSTRAINT `FK41tc3waay8mrrbdsq55xh15al`
    FOREIGN KEY (`user_id`)
    REFERENCES `promod`.`user_type` (`id`),
  CONSTRAINT `FKfdt9v9vs4dr1rpid4yihnvekb`
    FOREIGN KEY (`element_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`process_metric`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`process_metric` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `description` LONGTEXT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `process_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKb8t1qb8y6m9qrmfudsr1iomp3` (`process_id` ASC) VISIBLE,
  CONSTRAINT `FKb8t1qb8y6m9qrmfudsr1iomp3`
    FOREIGN KEY (`process_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`project_user_access`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`project_user_access` (
  `project_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  INDEX `FKqrxhydvk3iesmlfvdehxn0j7n` (`user_id` ASC) VISIBLE,
  INDEX `FK1xumutp842h1bnxmm0vktcmw1` (`project_id` ASC) VISIBLE,
  CONSTRAINT `FK1xumutp842h1bnxmm0vktcmw1`
    FOREIGN KEY (`project_id`)
    REFERENCES `promod`.`project` (`id`),
  CONSTRAINT `FKqrxhydvk3iesmlfvdehxn0j7n`
    FOREIGN KEY (`user_id`)
    REFERENCES `promod`.`user_type` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`project_user_edit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`project_user_edit` (
  `project_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  INDEX `FKalv4wjishu8a5lbtkf2rxqkgq` (`user_id` ASC) VISIBLE,
  INDEX `FK1oluyj11y0wit0qc1o5i856ug` (`project_id` ASC) VISIBLE,
  CONSTRAINT `FK1oluyj11y0wit0qc1o5i856ug`
    FOREIGN KEY (`project_id`)
    REFERENCES `promod`.`project` (`id`),
  CONSTRAINT `FKalv4wjishu8a5lbtkf2rxqkgq`
    FOREIGN KEY (`user_id`)
    REFERENCES `promod`.`user_type` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`rasci`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`rasci` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `type` CHAR(1) NOT NULL,
  `role_id` BIGINT NULL DEFAULT NULL,
  `task_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK807s3nbuh84079eayk4u1saf2` (`role_id` ASC) VISIBLE,
  INDEX `FK1f2kyqd63k6garivshbvettua` (`task_id` ASC) VISIBLE,
  CONSTRAINT `FK1f2kyqd63k6garivshbvettua`
    FOREIGN KEY (`task_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FK807s3nbuh84079eayk4u1saf2`
    FOREIGN KEY (`role_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`role_task_usage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`role_task_usage` (
  `role_id` BIGINT NOT NULL,
  `task_id` BIGINT NOT NULL,
  INDEX `FK4ga8kstlc4nnw0ecxc9rdhsgx` (`task_id` ASC) VISIBLE,
  INDEX `FKsuoc8hd51br2d2bq4j2kw409q` (`role_id` ASC) VISIBLE,
  CONSTRAINT `FK4ga8kstlc4nnw0ecxc9rdhsgx`
    FOREIGN KEY (`task_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FKsuoc8hd51br2d2bq4j2kw409q`
    FOREIGN KEY (`role_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshotbpmn`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshotbpmn` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `bpmn_content` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshot_element`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshot_element` (
  `snapshot_element_type` VARCHAR(31) NOT NULL,
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `brief_description` LONGTEXT NULL DEFAULT NULL,
  `change_date` DATE NULL DEFAULT NULL,
  `change_description` LONGTEXT NULL DEFAULT NULL,
  `main_description` LONGTEXT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `original_id` BIGINT NULL DEFAULT NULL,
  `snapshot_date` DATE NULL DEFAULT NULL,
  `snapshot_description` LONGTEXT NULL DEFAULT NULL,
  `version` VARCHAR(255) NULL DEFAULT NULL,
  `alternatives` LONGTEXT NULL DEFAULT NULL,
  `elements_order` VARCHAR(255) NULL DEFAULT NULL,
  `how_to_staff` LONGTEXT NULL DEFAULT NULL,
  `key_considerations` LONGTEXT NULL DEFAULT NULL,
  `purpose` LONGTEXT NULL DEFAULT NULL,
  `scope` LONGTEXT NULL DEFAULT NULL,
  `usage_notes` LONGTEXT NULL DEFAULT NULL,
  `task_type` VARCHAR(255) NULL DEFAULT NULL,
  `original_element_id` BIGINT NULL DEFAULT NULL,
  `snapshot_bpmn_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK5ieovmh6x21pkvtvjx15nvbbf` (`original_element_id` ASC) VISIBLE,
  INDEX `FK73v8a93k58c9bheo3b2qixqwe` (`snapshot_bpmn_id` ASC) VISIBLE,
  CONSTRAINT `FK5ieovmh6x21pkvtvjx15nvbbf`
    FOREIGN KEY (`original_element_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FK73v8a93k58c9bheo3b2qixqwe`
    FOREIGN KEY (`snapshot_bpmn_id`)
    REFERENCES `promod`.`snapshotbpmn` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshot_element_snapshot_process`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshot_element_snapshot_process` (
  `snapshot_element_id` BIGINT NOT NULL,
  `snapshot_process_id` BIGINT NOT NULL,
  INDEX `FK59q6obvtj2fpvak21sdnk75j0` (`snapshot_process_id` ASC) VISIBLE,
  INDEX `FKlcp6nnogcauaii6fljkhfsnyu` (`snapshot_element_id` ASC) VISIBLE,
  CONSTRAINT `FK59q6obvtj2fpvak21sdnk75j0`
    FOREIGN KEY (`snapshot_process_id`)
    REFERENCES `promod`.`snapshot_element` (`id`),
  CONSTRAINT `FKlcp6nnogcauaii6fljkhfsnyu`
    FOREIGN KEY (`snapshot_element_id`)
    REFERENCES `promod`.`snapshot_element` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshot_process_metric`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshot_process_metric` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `description` LONGTEXT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `process_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKanq78qxb927lnbq4ahknq5qv5` (`process_id` ASC) VISIBLE,
  CONSTRAINT `FKanq78qxb927lnbq4ahknq5qv5`
    FOREIGN KEY (`process_id`)
    REFERENCES `promod`.`snapshot_element` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshot_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshot_role` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `brief_description` LONGTEXT NULL DEFAULT NULL,
  `change_date` DATE NULL DEFAULT NULL,
  `change_description` LONGTEXT NULL DEFAULT NULL,
  `main_description` LONGTEXT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `original_id` BIGINT NULL DEFAULT NULL,
  `snapshot_date` DATE NULL DEFAULT NULL,
  `snapshot_description` LONGTEXT NULL DEFAULT NULL,
  `version` VARCHAR(255) NULL DEFAULT NULL,
  `assignment_approaches` LONGTEXT NULL DEFAULT NULL,
  `skills` LONGTEXT NULL DEFAULT NULL,
  `original_role_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKh77wlflg28b5v26wl9i2d59na` (`original_role_id` ASC) VISIBLE,
  CONSTRAINT `FKh77wlflg28b5v26wl9i2d59na`
    FOREIGN KEY (`original_role_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshot_rasci`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshot_rasci` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `type` CHAR(1) NOT NULL,
  `role_id` BIGINT NULL DEFAULT NULL,
  `task_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKn7klrondnuwrrow0yhj8bx4b4` (`role_id` ASC) VISIBLE,
  INDEX `FKkw1uyl5vp0niban7pdkqqkd1r` (`task_id` ASC) VISIBLE,
  CONSTRAINT `FKkw1uyl5vp0niban7pdkqqkd1r`
    FOREIGN KEY (`task_id`)
    REFERENCES `promod`.`snapshot_element` (`id`),
  CONSTRAINT `FKn7klrondnuwrrow0yhj8bx4b4`
    FOREIGN KEY (`role_id`)
    REFERENCES `promod`.`snapshot_role` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshot_work_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshot_work_item` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `brief_description` LONGTEXT NULL DEFAULT NULL,
  `change_date` DATE NULL DEFAULT NULL,
  `change_description` LONGTEXT NULL DEFAULT NULL,
  `main_description` LONGTEXT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `original_id` BIGINT NULL DEFAULT NULL,
  `snapshot_date` DATE NULL DEFAULT NULL,
  `snapshot_description` LONGTEXT NULL DEFAULT NULL,
  `version` VARCHAR(255) NULL DEFAULT NULL,
  `brief_outline` LONGTEXT NULL DEFAULT NULL,
  `impact_of_not_having` LONGTEXT NULL DEFAULT NULL,
  `key_considerations` LONGTEXT NULL DEFAULT NULL,
  `notation` LONGTEXT NULL DEFAULT NULL,
  `purpose` LONGTEXT NULL DEFAULT NULL,
  `reason_for_not_needing` LONGTEXT NULL DEFAULT NULL,
  `template_text` LONGTEXT NULL DEFAULT NULL,
  `url_address` LONGTEXT NULL DEFAULT NULL,
  `work_item_type` VARCHAR(255) NULL DEFAULT NULL,
  `original_work_item_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKs2apk9509w5b5gsnkgpb76gl3` (`original_work_item_id` ASC) VISIBLE,
  CONSTRAINT `FKs2apk9509w5b5gsnkgpb76gl3`
    FOREIGN KEY (`original_work_item_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshot_state`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshot_state` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `state_description` LONGTEXT NULL DEFAULT NULL,
  `state_name` VARCHAR(255) NULL DEFAULT NULL,
  `work_item_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKsyq37e8qugvjogie0eeqqdw3h` (`work_item_id` ASC) VISIBLE,
  CONSTRAINT `FKsyq37e8qugvjogie0eeqqdw3h`
    FOREIGN KEY (`work_item_id`)
    REFERENCES `promod`.`snapshot_work_item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshot_task_step`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshot_task_step` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `description` LONGTEXT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `task_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK1n87spmmcp4ea5h67w3vdu9vn` (`task_id` ASC) VISIBLE,
  CONSTRAINT `FK1n87spmmcp4ea5h67w3vdu9vn`
    FOREIGN KEY (`task_id`)
    REFERENCES `promod`.`snapshot_element` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshot_work_item_snapshot_task_input`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshot_work_item_snapshot_task_input` (
  `snapshot_work_item_id` BIGINT NOT NULL,
  `snapshot_element_id` BIGINT NOT NULL,
  INDEX `FKrr7hd98t77eyc50h1jnex4fda` (`snapshot_element_id` ASC) VISIBLE,
  INDEX `FK7xklgv1qoffx7j6t586gfq1n1` (`snapshot_work_item_id` ASC) VISIBLE,
  CONSTRAINT `FK7xklgv1qoffx7j6t586gfq1n1`
    FOREIGN KEY (`snapshot_work_item_id`)
    REFERENCES `promod`.`snapshot_work_item` (`id`),
  CONSTRAINT `FKrr7hd98t77eyc50h1jnex4fda`
    FOREIGN KEY (`snapshot_element_id`)
    REFERENCES `promod`.`snapshot_element` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`snapshot_work_item_snapshot_task_output`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`snapshot_work_item_snapshot_task_output` (
  `snapshot_work_item_id` BIGINT NOT NULL,
  `snapshot_element_id` BIGINT NOT NULL,
  INDEX `FKnh4o7qe1bwd2lqvgtgh5pw50y` (`snapshot_element_id` ASC) VISIBLE,
  INDEX `FK6rrh2u8r14utv5c4ph2mr2cd6` (`snapshot_work_item_id` ASC) VISIBLE,
  CONSTRAINT `FK6rrh2u8r14utv5c4ph2mr2cd6`
    FOREIGN KEY (`snapshot_work_item_id`)
    REFERENCES `promod`.`snapshot_work_item` (`id`),
  CONSTRAINT `FKnh4o7qe1bwd2lqvgtgh5pw50y`
    FOREIGN KEY (`snapshot_element_id`)
    REFERENCES `promod`.`snapshot_element` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`state`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`state` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `state_description` LONGTEXT NULL DEFAULT NULL,
  `state_name` VARCHAR(255) NULL DEFAULT NULL,
  `work_item_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKev0w1kmclq6bh4dvsu9t6868g` (`work_item_id` ASC) VISIBLE,
  CONSTRAINT `FKev0w1kmclq6bh4dvsu9t6868g`
    FOREIGN KEY (`work_item_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`task_step`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`task_step` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `description` LONGTEXT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `task_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKq5x21v027r0uafqpt5g8uhkp7` (`task_id` ASC) VISIBLE,
  CONSTRAINT `FKq5x21v027r0uafqpt5g8uhkp7`
    FOREIGN KEY (`task_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`work_item_activity_guidance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`work_item_activity_guidance` (
  `work_item_id` BIGINT NOT NULL,
  `element_id` BIGINT NOT NULL,
  INDEX `FKig9adpm1ejjyir66far90swh7` (`element_id` ASC) VISIBLE,
  INDEX `FK6o1eqlif8crihynkl0bhql6tu` (`work_item_id` ASC) VISIBLE,
  CONSTRAINT `FK6o1eqlif8crihynkl0bhql6tu`
    FOREIGN KEY (`work_item_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FKig9adpm1ejjyir66far90swh7`
    FOREIGN KEY (`element_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`work_item_process_usage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`work_item_process_usage` (
  `work_item_id` BIGINT NOT NULL,
  `process_id` BIGINT NOT NULL,
  INDEX `FK5ro5q980vpl6rjym33os3pcwp` (`process_id` ASC) VISIBLE,
  INDEX `FKhirpdf2500gjv23ydvb4pcv4n` (`work_item_id` ASC) VISIBLE,
  CONSTRAINT `FK5ro5q980vpl6rjym33os3pcwp`
    FOREIGN KEY (`process_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FKhirpdf2500gjv23ydvb4pcv4n`
    FOREIGN KEY (`work_item_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`work_item_task_mandatory_input`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`work_item_task_mandatory_input` (
  `work_item_id` BIGINT NOT NULL,
  `element_id` BIGINT NOT NULL,
  INDEX `FKi8am810g3w5rflx58f7ah6ppg` (`element_id` ASC) VISIBLE,
  INDEX `FKbb5io8xoxq19q1joo29jsqbv9` (`work_item_id` ASC) VISIBLE,
  CONSTRAINT `FKbb5io8xoxq19q1joo29jsqbv9`
    FOREIGN KEY (`work_item_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FKi8am810g3w5rflx58f7ah6ppg`
    FOREIGN KEY (`element_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`work_item_task_output`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`work_item_task_output` (
  `work_item_id` BIGINT NOT NULL,
  `element_id` BIGINT NOT NULL,
  INDEX `FKh3680fq57ls1x21b0yp484mu9` (`element_id` ASC) VISIBLE,
  INDEX `FK2ag4a5b1u8okvlhs92t8xlrrh` (`work_item_id` ASC) VISIBLE,
  CONSTRAINT `FK2ag4a5b1u8okvlhs92t8xlrrh`
    FOREIGN KEY (`work_item_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FKh3680fq57ls1x21b0yp484mu9`
    FOREIGN KEY (`element_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `promod`.`work_item_task_usage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `promod`.`work_item_task_usage` (
  `work_item_id` BIGINT NOT NULL,
  `task_id` BIGINT NOT NULL,
  INDEX `FKk66q40k2m8xt0hys4mau1n12y` (`task_id` ASC) VISIBLE,
  INDEX `FKrmf3ag6cub45ayuyrcj9s9b6l` (`work_item_id` ASC) VISIBLE,
  CONSTRAINT `FKk66q40k2m8xt0hys4mau1n12y`
    FOREIGN KEY (`task_id`)
    REFERENCES `promod`.`item` (`id`),
  CONSTRAINT `FKrmf3ag6cub45ayuyrcj9s9b6l`
    FOREIGN KEY (`work_item_id`)
    REFERENCES `promod`.`item` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
