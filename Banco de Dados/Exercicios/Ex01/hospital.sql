-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema hospitaldb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hospitaldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hospitaldb` DEFAULT CHARACTER SET utf8 ;
USE `hospitaldb` ;

-- -----------------------------------------------------
-- Table `hospitaldb`.`especialidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospitaldb`.`especialidade` (
  `idespecialidade` INT NOT NULL,
  `descricao` VARCHAR(45) NULL,
  PRIMARY KEY (`idespecialidade`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hospitaldb`.`Medicos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospitaldb`.`Medicos` (
  `crm` INT NOT NULL,
  `salario` DECIMAL NULL,
  `nome` VARCHAR(45) NULL,
  `especialidade_idespecialidade` INT NOT NULL,
  PRIMARY KEY (`crm`, `especialidade_idespecialidade`),
  INDEX `fk_Medicos_especialidade1_idx` (`especialidade_idespecialidade` ASC),
  CONSTRAINT `fk_Medicos_especialidade1`
    FOREIGN KEY (`especialidade_idespecialidade`)
    REFERENCES `hospitaldb`.`especialidade` (`idespecialidade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hospitaldb`.`quarto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospitaldb`.`quarto` (
  `idquarto` INT NOT NULL,
  `andar` VARCHAR(4) NULL,
  PRIMARY KEY (`idquarto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hospitaldb`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospitaldb`.`pacientes` (
  `cpf` INT NOT NULL,
  `nome` VARCHAR(45) NULL COMMENT '	',
  `endereco` VARCHAR(45) NULL,
  `rg` INT NULL,
  `horario_visita` VARCHAR(20) NULL,
  `tel_1` VARCHAR(45) NULL,
  `tel_2` VARCHAR(45) NULL,
  `tel_3` VARCHAR(45) NULL,
  `Medicos_crm` INT NOT NULL,
  `quarto_idquarto` INT NOT NULL,
  PRIMARY KEY (`cpf`, `Medicos_crm`, `quarto_idquarto`),
  INDEX `fk_pacientes_quarto1_idx` (`quarto_idquarto` ASC),
  CONSTRAINT `fk_pacientes_quarto1`
    FOREIGN KEY (`quarto_idquarto`)
    REFERENCES `hospitaldb`.`quarto` (`idquarto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hospitaldb`.`tratamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospitaldb`.`tratamento` (
  `pacientes_cpf` INT NOT NULL,
  `Medicos_crm` INT NOT NULL,
  `descricao` VARCHAR(45) NULL,
  `idtratamento` INT NOT NULL,
  INDEX `fk_pacientes_has_Medicos_Medicos1_idx` (`Medicos_crm` ASC),
  INDEX `fk_pacientes_has_Medicos_pacientes1_idx` (`pacientes_cpf` ASC),
  PRIMARY KEY (`pacientes_cpf`, `Medicos_crm`, `idtratamento`),
  CONSTRAINT `fk_pacientes_has_Medicos_pacientes1`
    FOREIGN KEY (`pacientes_cpf`)
    REFERENCES `hospitaldb`.`pacientes` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pacientes_has_Medicos_Medicos1`
    FOREIGN KEY (`Medicos_crm`)
    REFERENCES `hospitaldb`.`Medicos` (`crm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
