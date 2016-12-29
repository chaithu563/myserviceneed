-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<chaitanya edara>
-- Create date: <Create Date,,>
-- Description:	<GET Service based on service needs>
-- =============================================
CREATE PROCEDURE SERVICENEEDSBYLOCATION 
	-- Add the parameters for the stored procedure here
	@Lat DECIMAL(20, 13),
	@Long DECIMAL(20, 13),
	@Radius DECIMAL(7, 2)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

   DECLARE
   -- @Lat DECIMAL(20, 13) = 35.7862
   --,@Long DECIMAL(20, 13) = -80.3095
  -- @Radius DECIMAL(7, 2) = 5
   @Distance DECIMAL(10, 2)
   ,@Earth_Radius INT = 6371000;

SET @Distance = @Radius * 1609.344;

DECLARE @NorthLat DECIMAL(20, 13) = @Lat + DEGREES(@distance / @Earth_Radius)
   ,@SouthLat DECIMAL(20, 13) = @Lat - DEGREES(@distance / @Earth_Radius)
   ,@EastLong DECIMAL(20, 13) = @Long + DEGREES(@distance / @Earth_Radius / COS(RADIANS(@Lat)))
   ,@WestLong DECIMAL(20, 13) = @Long - DEGREES(@distance / @Earth_Radius / COS(RADIANS(@Lat)));

SELECT *
    FROM dbo.USERSERVICENEED AS services
    WHERE (
            services.LOCATIONLATITUDE >= @SouthLat
            AND services.LOCATIONLATITUDE <= @NorthLat )
        AND (
              services.LOCATIONLONGITUDE >= @WestLong
              AND services.LOCATIONLONGITUDE <= @EastLong )
              
              
END
GO
