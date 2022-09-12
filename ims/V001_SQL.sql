CREATE TABLE `Lyte`.`address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address_1` varchar(45) DEFAULT NULL,
  `address_2` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `customer` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Lyte`.`customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `phone_1` varchar(45) DEFAULT NULL,
  `email_1` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Lyte`.`order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_number` varchar(45) DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `order_type_id` int DEFAULT NULL,
  `order_status_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Lyte`.`order_line_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Lyte`.`order_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `date_created` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Lyte`.`order_type_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `order_type_id` int DEFAULT NULL,
  `order_step` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Lyte`.`return` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `employee_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `item_id` int DEFAULT NULL,
  `returned_serial_number` varchar(45) DEFAULT NULL,
  `date_returned` datetime DEFAULT NULL,
  `return_type_id` int DEFAULT NULL,
  `process_procedure_id` int DEFAULT NULL,
  `customer_notes` mediumtext,
  `employee_notes` mediumtext,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Lyte`.`return_process_procedure` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` mediumtext,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_deleted` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Lyte`.`return_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` mediumtext,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_deleted` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Lyte`.`item` (
	`id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(45) NOT NULL,
    `description_1` varchar(255) DEFAULT NULL,
    `description_2` varchar(255) DEFAULT NULL,
    `item_value` DECIMAL(11 , 4) DEFAULT NULL,
    `supplier_1_id` int DEFAULT NULL,
    `supplier_2_id` int DEFAULT NULL,
    `item_type_id` int DEFAULT NULL,
    `model_line_id` int DEFAULT NULL,
    `version` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Lyte`.`item_details` (
	`id` int NOT NULL AUTO_INCREMENT,
    `item_id` int NOT NULL,
    `serial_number` varchar(255) DEFAULT NULL,
    `supplier_id` int DEFAULT NULL,
    `po_id` int DEFAULT NULL,
    `date_received` DATETIME DEFAULT NULL,
    `order_id` int DEFAULT NULL,
    `date_shipped` DATETIME DEFAULT NULL,
    `carrier_id` int DEFAULT NULL,
    `date_delivered` DATETIME DEFAULT NULL,
    `expiration` DATETIME DEFAULT NULL,
    `barcode_1` varchar(255) DEFAULT NULL,
    `barcode_2` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`) 
);

CREATE TABLE `Lyte`.`item_type` (
	`id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` varchar(255) DEFAULT NULL,
    `date_created` DATETIME DEFAULT current_timestamp,
    `date_deleted` DATETIME DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Lyte`.`supplier` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `poc_1_id` int DEFAULT NULL,
    `poc_2_id` int DEFAULT NULL,
    `business_address_id` int DEFAULT NULL,
    `date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `date_deleted` DATETIME DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Lyte`.`purchase_order` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `po_number` varchar(255) NOT NULL,
    `date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `employee_id` INT NOT NULL,
    `supplier_id` INT NOT NULL,
    `shipping_address` varchar(255) NOT NULL,
    `receiving_address` varchar(255) NOT NULL,
    `date_expected` DATETIME DEFAULT NULL,
    `date_delivered` DATETIME DEFAULT NULL,
    `date_received` DATETIME DEFAULT NULL,
    `receiver_id` int DEFAULT NULL,
    `number_items` int DEFAULT NULL,
    `item_value` DECIMAL(11,4) DEFAULT 0.0,
    `shipping_cost` DECIMAL(11,4) DEFAULT 0.0,
    `taxes` DECIMAL(11,4) DEFAULT 0.0,
    `total_value` DECIMAL(11,4) DEFAULT 0.0,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Lyte`.`receiver` (
	`id` int NOT NULL AUTO_INCREMENT,
    `employee_id` int NOT NULL,
    `isActive` TINYINT NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Lyte`.`purchase_order_line_item` (
	`id` int NOT NULL AUTO_INCREMENT,
    `item_id` int NOT NULL,
    `serial_number` varchar(255) DEFAULT NULL,
    `date_shipped` DATETIME DEFAULT NULL,
    `date_expected` DATETIME DEFAULT NULL,
    `date_received` DATETIME DEFAULT NULL,
    `item_condition` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `Lyte`.`item` 
ADD COLUMN `height` DECIMAL(11,4) NULL AFTER `version`,
ADD COLUMN `weight` DECIMAL(11,4) NULL AFTER `height`,
ADD COLUMN `length` DECIMAL(11,4) NULL AFTER `weight`,
ADD COLUMN `depth` DECIMAL(11,4) NULL AFTER `length`;
