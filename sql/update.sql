ALTER TABLE `airburg_v2`.`point_record`
DROP FOREIGN KEY `fk_point_record_point_label1`;
ALTER TABLE `airburg_v2`.`point_record`
CHANGE COLUMN `label_id` `label_id` VARCHAR(20) NULL,
CHANGE COLUMN `record_type` `record_type` TINYINT(1) NOT NULL DEFAULT 0;
ALTER TABLE `airburg_v2`.`point_record`
ADD CONSTRAINT `fk_point_record_point_label1`
FOREIGN KEY (`label_id`)
REFERENCES `airburg_v2`.`point_label` (`label_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `airburg_v2`.`point_record`
CHANGE COLUMN `record_status` `record_status` VARCHAR(45) NOT NULL DEFAULT 0;
