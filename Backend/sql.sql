-- Database Name
create database studentdata


-- Create Table
create table student(rollno int primary key auto_increment,name varchar(30), email varchar(30), phonenumber varchar(10), address varchar(40))

-- Insert Data

insert into student(name,email,phonenumber,address) values ('Ashish','ashish@hotmail.com','9427036284','Ahemdabad'), ('Aditya','aditya@yopmail.com','9991919199','Jaipur')