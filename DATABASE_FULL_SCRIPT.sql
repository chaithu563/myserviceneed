USE Master
-- if database exists, drop it
if EXISTS(SELECT name FROM sys.databases
     WHERE name = 'SERVICE_DB_NAME')
DROP Database "SERVICE_DB_NAME"
GO
-- create new database 
CREATE DATABASE [SERVICE_DB_NAME]
GO
USE [SERVICE_DB_NAME]
-- add user mapping to database 
CREATE USER [service_user] FOR LOGIN [service_user]
-- add roles to user
EXEC sp_addrolemember N'db_datareader', N'service_user'
EXEC sp_addrolemember N'db_datawriter', N'service_user'
EXEC sp_addrolemember N'db_ddladmin', N'service_user'
GO
GRANT CONNECT TO [service_user] AS [dbo]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE SOCIALLOGIN ---if no social login means(0), our own registered user
(
ID int IDENTITY(1,1) PRIMARY KEY,
NAME varchar(60),
DESCRIPTION varchar(MAX)
)
CREATE TABLE CITY
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
NAME varchar(60)
)

CREATE TABLE CITYAREA
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
NAME varchar(60),
DESCRIPTION varchar(MAX),
CITYID numeric foreign key references CITY(ID)
)
CREATE TABLE ADMININFO
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
NAME varchar(60),
EMAIL varchar(60),
PHONE varchar(20),
PWD varchar(MAX)
);
CREATE TABLE USERINFO
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
NAME varchar(60),
EMAIL varchar(60),
PHONE varchar(20),
CITYID numeric foreign key references CITY(ID),-- need to think why we need again when we have city id
CITYAREAID numeric foreign key references CITYAREA(ID),
LOGINTYPEID int foreign key references SOCIALLOGIN(ID),
CURRENTLOCATION varchar(max)

);
CREATE TABLE MEMBERSHIP
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
NAME varchar(60),
DESCRIPTION varchar(MAX)
)

CREATE TABLE USERMEMBERSHIP
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
USERID numeric foreign key references USERINFO(ID),
MEMBERSHIPID numeric foreign key references MEMBERSHIP(ID),
STARTDATE datetime,
ENDDATE datetime,
COMMENTS varchar(MAX) --any user level rule breaks/requests made then admin will add comments
)

CREATE TABLE USERFUNDS
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
USERID numeric foreign key references USERINFO(ID),
BALANCE money 
)

CREATE TABLE USERBIDS
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
USERID numeric foreign key references USERINFO(ID),
BIDS int --available bids for user
)

CREATE TABLE SERVICECATEGORY
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
NAME varchar(100),
DESCRIPTION varchar(MAX)
)
CREATE TABLE SERVICESUBCATEGORY
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
NAME varchar(100),
DESCRIPTION varchar(MAX),
SERVICECATEGORYID numeric foreign key references SERVICECATEGORY(ID)
)
CREATE TABLE USERSERVICE --if user provides any service then we will link
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
USERID numeric foreign key references USERINFO(ID),
SERVICECATEGORYID numeric foreign key references SERVICECATEGORY(ID),
SERVICESUBCATEGORYID numeric foreign key references SERVICESUBCATEGORY(ID)
)
CREATE TABLE SERVICETIMETYPE  ---is work is hr/days/weeks/months type
(
ID int IDENTITY(1,1) PRIMARY KEY,
NAME varchar(100),
DESCRIPTION varchar(MAX)
)
CREATE TABLE SERVICESTATE  ---stae of the service like open/closed/pending
(
ID int IDENTITY(1,1) PRIMARY KEY,
NAME varchar(100),
DESCRIPTION varchar(MAX)
)

CREATE TABLE USERSERVICENEED  ---User service request info 
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
USERID numeric foreign key references USERINFO(ID),
SERVICELOCATION varchar(max),
SERVICETITLE varchar(300),
SERVICEDESCRIPTION varchar(MAX),
SERVICECATEGORYID numeric foreign key references SERVICECATEGORY(ID),
SERVICESUBCATEGORYID numeric foreign key references SERVICESUBCATEGORY(ID),
MINBUDGET money,
MAXBUDGET money,
SERVICESTATE int foreign key references SERVICESTATE(ID),
SERVICETIMETYPE int foreign key references SERVICETIMETYPE(ID),
SERVICENEEDEDDATE DATETIME
--ALLOCATEDBIDID numeric foreign key references SERVICEBID(ID)
)
CREATE TABLE SERVICEBID  ---User service BID info 
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
USERID numeric foreign key references USERINFO(ID),
USERSERVICENEEDID numeric foreign key references USERSERVICENEED(ID),
BIDTITLE varchar(300),
BIDDESCRIPTION varchar(MAX),
BIDAMOUNT money
)

ALTER TABLE USERSERVICENEED
ADD ALLOCATEDBIDID numeric foreign key references SERVICEBID(ID)






