/*
CREATE DATABASE IF NOT EXISTS `users` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `users`;

#Users table
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

SELECT * FROM accounts

ALTER USER root@localhost IDENTIFIED WITH mysql_native_password BY '123456'

#Orders table
USE `users`;
CREATE TABLE `orders`(
	`orderID` int(11) NOT NULL,
    `description` TEXT,
    `id` int(11) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_userID FOREIGN KEY (`id`) REFERENCES accounts(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

ALTER TABLE `orders` RENAME COLUMN `decription` TO `description`;
ALTER TABLE `orders` ADD PRIMARY KEY (`orderID`);
ALTER TABLE `orders` MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

SET GLOBAL sql_mode=''
DESCRIBE `accounts`
SELECT * FROM `orders`
*/