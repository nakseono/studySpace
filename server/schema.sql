DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE `messages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `text` varchar(255),
  `roomname` varchar(255)
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255)
);

CREATE TABLE `user_message` (
  `user_id` int,
  `message_id` int
);

ALTER TABLE `user_message` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_message` ADD FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`);

/*
CREATE TABLE messages (
  //  remove here and create your message table
);
*/
/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/