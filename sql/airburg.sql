-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema airburg_v2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema airburg_v2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `airburg_v2` DEFAULT CHARACTER SET utf8 ;
USE `airburg_v2` ;

-- -----------------------------------------------------
-- Table `airburg_v2`.`goods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airburg_v2`.`goods` (
  `goods_id` VARCHAR(20) NOT NULL,
  `goods_name` VARCHAR(45) NOT NULL,
  `goods_type` TINYINT(1) NOT NULL DEFAULT 0,
  `goods_price` DOUBLE NOT NULL DEFAULT 0,
  `delivery_method` TINYINT(1) NOT NULL,
  `block_flag` TINYINT(1) NOT NULL DEFAULT 0,
  `create_time` DATETIME NOT NULL,
  PRIMARY KEY (`goods_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airburg_v2`.`customer_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airburg_v2`.`customer_order` (
  `order_id` VARCHAR(20) NOT NULL,
  `goods_id` VARCHAR(20) NOT NULL,
  `customer_id` VARCHAR(20) NOT NULL,
  `goods_quantity` INT NOT NULL DEFAULT 0,
  `order_price` DOUBLE NOT NULL DEFAULT 0,
  `order_status` TINYINT(1) NOT NULL DEFAULT 0,
  `block_flag` TINYINT(1) NOT NULL DEFAULT 0,
  `create_time` DATETIME NOT NULL,
  PRIMARY KEY (`order_id`),
  INDEX `fk_customer_order_goods_idx` (`goods_id` ASC),
  CONSTRAINT `fk_customer_order_goods`
    FOREIGN KEY (`goods_id`)
    REFERENCES `airburg_v2`.`goods` (`goods_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airburg_v2`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airburg_v2`.`customer` (
  `customer_id` VARCHAR(20) NOT NULL,
  `upper_customer_id` VARCHAR(20) NULL,
  `customer_name` VARCHAR(45) NOT NULL,
  `customer_phone` VARCHAR(45) NULL,
  `customer_wechat` VARCHAR(45) NULL,
  `customer_address` VARCHAR(100) NULL,
  `block_flag` TINYINT(1) NOT NULL,
  `create_time` DATETIME NOT NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airburg_v2`.`customer_point`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airburg_v2`.`customer_point` (
  `point_id` VARCHAR(20) NOT NULL,
  `customer_id` VARCHAR(20) NOT NULL,
  `point_value` INT NOT NULL DEFAULT 0,
  `update_time` DATETIME NOT NULL,
  `block_flag` TINYINT(1) NOT NULL DEFAULT 0,
  `create_time` DATETIME NOT NULL,
  PRIMARY KEY (`point_id`),
  INDEX `fk_customer_point_customer1_idx` (`customer_id` ASC),
  CONSTRAINT `fk_customer_point_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `airburg_v2`.`customer` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airburg_v2`.`customer_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airburg_v2`.`customer_address` (
  `address_id` VARCHAR(20) NOT NULL,
  `customer_id` VARCHAR(20) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `block_flag` TINYINT(1) NOT NULL DEFAULT 0,
  `create_time` DATETIME NOT NULL,
  PRIMARY KEY (`address_id`),
  INDEX `fk_customer_address_customer1_idx` (`customer_id` ASC),
  CONSTRAINT `fk_customer_address_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `airburg_v2`.`customer` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airburg_v2`.`point_label`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airburg_v2`.`point_label` (
  `label_id` VARCHAR(20) NOT NULL,
  `label_name` VARCHAR(45) NOT NULL,
  `label_description` VARCHAR(45) NOT NULL,
  `block_flag` TINYINT(1) NOT NULL DEFAULT 0,
  `create_time` DATETIME NOT NULL,
  PRIMARY KEY (`label_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airburg_v2`.`point_record`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airburg_v2`.`point_record` (
  `record_id` VARCHAR(20) NOT NULL,
  `label_id` VARCHAR(20) NOT NULL,
  `customer_id` VARCHAR(20) NOT NULL,
  `record_value` VARCHAR(45) NOT NULL DEFAULT 0,
  `record_description` VARCHAR(100) NOT NULL,
  `record_status` VARCHAR(45) NOT NULL,
  `record_type` TINYINT(1) NOT NULL,
  `block_flag` TINYINT(1) NOT NULL,
  `create_time` DATETIME NOT NULL,
  PRIMARY KEY (`record_id`, `record_description`),
  INDEX `fk_point_record_point_label1_idx` (`label_id` ASC),
  INDEX `fk_point_record_customer1_idx` (`customer_id` ASC),
  CONSTRAINT `fk_point_record_point_label1`
    FOREIGN KEY (`label_id`)
    REFERENCES `airburg_v2`.`point_label` (`label_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_point_record_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `airburg_v2`.`customer` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
