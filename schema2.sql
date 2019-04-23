-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Student` (
  `idStudent` INT NOT NULL AUTO_INCREMENT,
  `Studentemail` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idStudent`),
  UNIQUE INDEX `Studentemail_UNIQUE` (`Studentemail` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Couselor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Couselor` (
  `idCouselor` INT NOT NULL,
  `Couseloremail` VARCHAR(45) NULL,
  PRIMARY KEY (`idCouselor`),
  UNIQUE INDEX `Couseloremail_UNIQUE` (`Couseloremail` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Date`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Date` (
  `idDate` INT NOT NULL AUTO_INCREMENT,
  `DateValue` DATE NULL,
  `Couselor_idCouselor` INT NOT NULL,
  PRIMARY KEY (`idDate`),
  INDEX `fk_Date_Couselor1_idx` (`Couselor_idCouselor` ASC),
  CONSTRAINT `fk_Date_Couselor1`
    FOREIGN KEY (`Couselor_idCouselor`)
    REFERENCES `mydb`.`Couselor` (`idCouselor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Slot`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Slot` (
  `idSlot` INT NOT NULL AUTO_INCREMENT,
  `SlotValue` VARCHAR(45) NULL,
  `Date_idDate` INT NOT NULL,
  PRIMARY KEY (`idSlot`),
  INDEX `fk_Slot_Date1_idx` (`Date_idDate` ASC),
  CONSTRAINT `fk_Slot_Date1`
    FOREIGN KEY (`Date_idDate`)
    REFERENCES `mydb`.`Date` (`idDate`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Student_Slot_Request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Student_Slot_Request` (
  `Student_idStudent` INT NOT NULL,
  `Slot_idSlot` INT NOT NULL,
  `idRequest` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idRequest`),
  INDEX `fk_Student_has_Slot_Slot1_idx` (`Slot_idSlot` ASC),
  INDEX `fk_Student_has_Slot_Student1_idx` (`Student_idStudent` ASC),
  CONSTRAINT `fk_Student_has_Slot_Student1`
    FOREIGN KEY (`Student_idStudent`)
    REFERENCES `mydb`.`Student` (`idStudent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_has_Slot_Slot1`
    FOREIGN KEY (`Slot_idSlot`)
    REFERENCES `mydb`.`Slot` (`idSlot`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`StudentBookingHistory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`StudentBookingHistory` (
  `Student_idStudent` INT NOT NULL,
  `Slot_idSlot` INT NOT NULL,
  `idhistory` INT NOT NULL AUTO_INCREMENT,
  INDEX `fk_Student_has_Slot_Slot2_idx` (`Slot_idSlot` ASC),
  INDEX `fk_Student_has_Slot_Student2_idx` (`Student_idStudent` ASC),
  PRIMARY KEY (`idhistory`),
  CONSTRAINT `fk_Student_has_Slot_Student2`
    FOREIGN KEY (`Student_idStudent`)
    REFERENCES `mydb`.`Student` (`idStudent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_has_Slot_Slot2`
    FOREIGN KEY (`Slot_idSlot`)
    REFERENCES `mydb`.`Slot` (`idSlot`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
