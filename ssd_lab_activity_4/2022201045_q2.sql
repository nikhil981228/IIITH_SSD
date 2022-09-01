use CUSTOMER_DB;

DELIMITER $$
CREATE PROCEDURE stor_procedure_func1( city varchar(500) )
BEGIN
	#SELECT city;
	select CUST_NAME from customer WHERE WORKING_AREA=city;
END$$
DELIMITER ;

call stor_procedure_func1('Bangalore');

