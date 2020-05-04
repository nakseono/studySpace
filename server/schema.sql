DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE `messages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `text` text,
  `date` datetime DEFAULT NOW(),
  `roomname` varchar(255)
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255) UNIQUE,
);

ALTER TABLE `messages` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

/*
CREATE TABLE messages (
  //  remove here and create your message table
);
*/
/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/