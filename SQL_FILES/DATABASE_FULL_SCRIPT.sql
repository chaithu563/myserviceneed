USE Master
-- if database exists, drop it
if EXISTS(SELECT name FROM sys.databases
     WHERE name = 'myserviceneed')
DROP Database "myserviceneed"
GO
-- create new database 
CREATE DATABASE [myserviceneed]
GO
USE [myserviceneed]
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

--CREATE TABLE [dbo].[__MigrationHistory](
--	[MigrationId] [nvarchar](150) NOT NULL,
--	[ContextKey] [nvarchar](300) NOT NULL,
--	[Model] [varbinary](max) NOT NULL,
--	[ProductVersion] [nvarchar](32) NOT NULL,
-- CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
--(
--	[MigrationId] ASC,
--	[ContextKey] ASC
--)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
--) ON [PRIMARY]

--GO

--CREATE TABLE [dbo].[AspNetRoles](
--	[Id] [nvarchar](128) NOT NULL,
--	[Name] [nvarchar](256) NOT NULL,
-- CONSTRAINT [PK_dbo.AspNetRoles] PRIMARY KEY CLUSTERED 
--(
--	[Id] ASC
--)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
--) ON [PRIMARY]

--GO
--CREATE TABLE [dbo].[AspNetUsers](
--	[Id] [nvarchar](128) NOT NULL,
--	[Email] [nvarchar](256) NULL,
--	[EmailConfirmed] [bit] NOT NULL,
--	[PasswordHash] [nvarchar](max) NULL,
--	[SecurityStamp] [nvarchar](max) NULL,
--	[PhoneNumber] [nvarchar](max) NULL,
--	[PhoneNumberConfirmed] [bit] NOT NULL,
--	[TwoFactorEnabled] [bit] NOT NULL,
--	[LockoutEndDateUtc] [datetime] NULL,
--	[LockoutEnabled] [bit] NOT NULL,
--	[AccessFailedCount] [int] NOT NULL,
--	[UserName] [nvarchar](256) NOT NULL,
-- CONSTRAINT [PK_dbo.AspNetUsers] PRIMARY KEY CLUSTERED 
--(
--	[Id] ASC
--)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
--) ON [PRIMARY]

--GO
--GO

--CREATE TABLE [dbo].[AspNetUserClaims](
--	[Id] [int] IDENTITY(1,1) NOT NULL,
--	[UserId] [nvarchar](128) NOT NULL,
--	[ClaimType] [nvarchar](max) NULL,
--	[ClaimValue] [nvarchar](max) NULL,
-- CONSTRAINT [PK_dbo.AspNetUserClaims] PRIMARY KEY CLUSTERED 
--(
--	[Id] ASC
--)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
--) ON [PRIMARY]

--GO

--ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
--REFERENCES [dbo].[AspNetUsers] ([Id])
--ON DELETE CASCADE
--GO

--ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]
--GO

--GO

--CREATE TABLE [dbo].[AspNetUserLogins](
--	[LoginProvider] [nvarchar](128) NOT NULL,
--	[ProviderKey] [nvarchar](128) NOT NULL,
--	[UserId] [nvarchar](128) NOT NULL,
-- CONSTRAINT [PK_dbo.AspNetUserLogins] PRIMARY KEY CLUSTERED 
--(
--	[LoginProvider] ASC,
--	[ProviderKey] ASC,
--	[UserId] ASC
--)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
--) ON [PRIMARY]

--GO

--ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
--REFERENCES [dbo].[AspNetUsers] ([Id])
--ON DELETE CASCADE
--GO

--ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]
--GO

--CREATE TABLE [dbo].[AspNetUserRoles](
--	[UserId] [nvarchar](128) NOT NULL,
--	[RoleId] [nvarchar](128) NOT NULL,
-- CONSTRAINT [PK_dbo.AspNetUserRoles] PRIMARY KEY CLUSTERED 
--(
--	[UserId] ASC,
--	[RoleId] ASC
--)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
--) ON [PRIMARY]

--GO

--ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId] FOREIGN KEY([RoleId])
--REFERENCES [dbo].[AspNetRoles] ([Id])
--ON DELETE CASCADE
--GO

--ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]
--GO

--ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
--REFERENCES [dbo].[AspNetUsers] ([Id])
--ON DELETE CASCADE
--GO

--ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]
--GO



--CREATE TYPE [dbo].[Email]
--    FROM NVARCHAR (100) NULL;

--    CREATE TYPE [dbo].[Flag]
--    FROM BIT NOT NULL;
    
--    CREATE TYPE [dbo].[Name]
--    FROM NVARCHAR (50) NOT NULL;
    
--    CREATE TYPE [dbo].[Phone]
--    FROM NVARCHAR (25) NULL;
    
--    CREATE TABLE [dbo].[User]
--(
--    [UserID]               INT IDENTITY (1000, 1) NOT NULL,
--    [UserName]             [dbo].[Name]           NOT NULL,
--    [Email]                [dbo].[Email]          NULL,
--    [EmailConfirmed]       [dbo].[Flag]           NOT NULL,
--    [PasswordHash]         NVARCHAR (100)         NULL,
--    [SecurityStamp]        NVARCHAR (100)         NULL,
--    [PhoneNumber]          [dbo].[Phone]          NULL,
--    [PhoneNumberConfirmed] [dbo].[Flag]           NOT NULL,
--    [TwoFactorEnabled]     [dbo].[Flag]           NOT NULL,
--    [LockoutEndDateUtc]    DATETIME               NULL,
--    [LockoutEnabled]       [dbo].[Flag]           NOT NULL,
--    [AccessFailedCount]    INT                    NOT NULL,

--    CONSTRAINT [PK_User_UserID] PRIMARY KEY CLUSTERED ([UserID] ASC),
--    CONSTRAINT [UK_User_UserName] UNIQUE NONCLUSTERED ([UserName] ASC)
--);


--CREATE TABLE [dbo].[UserClaim]
--(
--    [UserID]     INT                   NOT NULL,
--    [ClaimID]    INT IDENTITY (1000,1) NOT NULL,
--    [ClaimType]  NVARCHAR (MAX)        NULL,
--    [ClaimValue] NVARCHAR (MAX)        NULL,

--    CONSTRAINT [PK_UserClaim_ClaimID] PRIMARY KEY CLUSTERED ([ClaimID] ASC),
--    CONSTRAINT [FK_UserClaim_User] FOREIGN KEY ([UserID]) REFERENCES [dbo].[User] ([UserID]) ON DELETE CASCADE
--);

--GO
--CREATE NONCLUSTERED INDEX [IX_UserClaim_UserID]
--    ON [dbo].[UserClaim] ([UserID] ASC);
    
--    CREATE TABLE [dbo].[UserLogin]
--(
--    [UserID]        INT            NOT NULL,
--    [LoginProvider] NVARCHAR (128) NOT NULL,
--    [ProviderKey]   NVARCHAR (128) NOT NULL,

--    CONSTRAINT [PK_UserLogin_UserID_LoginProvider_ProviderKey] PRIMARY KEY CLUSTERED ([UserID] ASC, [LoginProvider] ASC, [ProviderKey] ASC),
--    CONSTRAINT [FK_UserLogin_User] FOREIGN KEY ([UserID]) REFERENCES [dbo].[User] ([UserID]) ON DELETE CASCADE
--);

--GO
--CREATE NONCLUSTERED INDEX [IX_UserLogin_UserID]
--    ON [dbo].[UserLogin] ([UserID] ASC);
   
    
--    CREATE TABLE [dbo].[UserRole]
--(
--    [RoleID] INT          NOT NULL,
--    [Name]   [dbo].[Name] NOT NULL,

--    CONSTRAINT [PK_UserRole_RoleID] PRIMARY KEY CLUSTERED ([RoleID] ASC),
--    CONSTRAINT [UK_UserRole_Name] UNIQUE NONCLUSTERED ([Name] ASC)
--);

--CREATE TABLE [dbo].[UserUserRole]
--(
--    [UserID] INT NOT NULL,
--    [RoleID] INT NOT NULL,

--    CONSTRAINT [PK_UserUserRole_UserID_RoleID] PRIMARY KEY CLUSTERED ([UserID] ASC, [RoleID] ASC),
--    CONSTRAINT [FK_UserUserRole_User] FOREIGN KEY ([UserID]) REFERENCES [dbo].[User] ([UserID]) ON DELETE CASCADE,
--    CONSTRAINT [FK_UserUserRole_UserRole] FOREIGN KEY ([RoleID]) REFERENCES [dbo].[UserRole] ([RoleID]) ON DELETE CASCADE
--);

--GO
--CREATE NONCLUSTERED INDEX [IX_UserUserRole_UserID]
--    ON [dbo].[UserUserRole] ([UserID] ASC);

--GO
--CREATE NONCLUSTERED INDEX [IX_UserUserRole_RoleID]
--    ON [dbo].[UserUserRole] ([RoleID] ASC);

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
UserName varchar(60),
Password varchar(MAX),
EMAIL varchar(60),
GENDER BIT,
PHONE varchar(20),
CITYID numeric foreign key references CITY(ID),-- need to think why we need again when we have city id
CITYAREAID numeric foreign key references CITYAREA(ID),
LOGINTYPEID int foreign key references SOCIALLOGIN(ID),
CURRENTLOCATION varchar(max),
USERLOCATIONLATITUDE float  NULL, 
USERLOCATIONLONGITUDE float  NULL

);

CREATE TABLE Client
(
 [id] INTEGER PRIMARY KEY IDENTITY NOT NULL, 
    [key] nvarchar(MAX)  NOT NULL, 
Secret varchar(MAX),
Name varchar(MAX),
ApplicationType numeric,
Active BIT,
AllowedOrigin varchar(100),
RefreshTokenLifeTime numeric ,
CITYAREAID numeric foreign key references CITYAREA(ID),
LOGINTYPEID int foreign key references SOCIALLOGIN(ID),
CURRENTLOCATION varchar(max),
USERLOCATIONLATITUDE float  NULL, 
USERLOCATIONLONGITUDE float  NULL

);

CREATE TABLE RefreshToken
(
 [id] INTEGER PRIMARY KEY IDENTITY NOT NULL, 
    [key] nvarchar(MAX)  NOT NULL, 
Subject varchar(MAX),
ClientId  nvarchar(MAX),
IssuedUtc datetime,
ExpiresUtc datetime,
ProtectedTicket varchar(MAX)

);

--CREATE TABLE USERPWD
--(
--ID numeric IDENTITY(1,1) PRIMARY KEY,
--USERID numeric foreign key references USERINFO(ID),
--PWD varchar(MAX)
--)

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
IMAGEPUBLICKEY varchar(50),
ICONPUBLICKEY varchar(50),
SERVICECATEGORYID numeric foreign key references SERVICECATEGORY(ID)
)
CREATE TABLE USERSERVICE --if user provides any service then we will link
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
USERID numeric foreign key references USERINFO(ID),
SERVICECATEGORYID numeric foreign key references SERVICECATEGORY(ID),
SERVICESUBCATEGORYID numeric foreign key references SERVICESUBCATEGORY(ID)
)

CREATE TABLE USERSERVICEFILES  ---User service request info 
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
USERSERVICEID numeric foreign key references USERSERVICE(ID),
FILEPUBLICKKEY varchar(50)  -- clodinary public key
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
CREATE TABLE USERSERVICETIMERECORD  ---User service request info 
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
--SERVICETIMETYPE int foreign key references SERVICETIMETYPE(ID),
SERVICEBOOKEDDATE DATE,  --
SERVICESTARTDATE DATE,  --if it is multi day work start date
SERVICEENDDATE DATE,  -- if it is multi day work end date
SERVICESTARTTIME TIME,  --if any specific start time of day
SERVICEENDTIME TIME  --if any specific end time of day

--ALLOCATEDBIDID numeric foreign key references SERVICEBID(ID)
)

CREATE TABLE USERSERVICENEED  ---User service request info 
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
USERID numeric foreign key references USERINFO(ID),
SERVICELOCATIONADDRESS varchar(max),
SERVICETITLE varchar(300),
SERVICEDESCRIPTION varchar(MAX),
SERVICECATEGORYID numeric foreign key references SERVICECATEGORY(ID),
SERVICESUBCATEGORYID numeric foreign key references SERVICESUBCATEGORY(ID),
MINBUDGET money,
MAXBUDGET money,
SERVICESTATE int foreign key references SERVICESTATE(ID),
SERVICETIMETYPE int foreign key references SERVICETIMETYPE(ID),
LOCATIONLATITUDE float  NULL, 
LOCATIONLONGITUDE float  NULL,
SERVICECITYID numeric foreign key references CITY(ID),-- need to think why we need again when we have city id
SERVICECITYAREAID numeric foreign key references CITYAREA(ID),
USERSERVICETIMERECORDID numeric foreign key references USERSERVICETIMERECORD(ID),

--SERVICENEEDEDDATE DATE,
--SERVICESTARTDATETIME DATETIME,
--SERVICEENDDATETIME DATETIME
--ALLOCATEDBIDID numeric foreign key references SERVICEBID(ID)
)


CREATE TABLE USERSERVICENEEDFILES  ---User service request info 
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
SERVICEID numeric foreign key references USERSERVICENEED(ID),
FILEPUBLICKKEY varchar(50)  -- clodinary public key
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
CREATE TABLE SERVICEBIDNEEDFILES  ---User service request info 
(
ID numeric IDENTITY(1,1) PRIMARY KEY,
BIDID numeric foreign key references SERVICEBID(ID),
FILEPUBLICKKEY varchar(50)  -- clodinary public key
)

ALTER TABLE USERSERVICENEED
ADD ALLOCATEDBIDID numeric foreign key references SERVICEBID(ID)

INSERT INTO [myserviceneed].[dbo].[SOCIALLOGIN]
VALUES ('facebook','for facebook social logins')

INSERT INTO [myserviceneed].[dbo].[SOCIALLOGIN]
VALUES ('google','for google social logins')

INSERT INTO [myserviceneed].[dbo].[SOCIALLOGIN]
VALUES ('myserviceneed','for myserviceneed logins')




