use CUSTOMER_DB;

DELIMITER $$
CREATE PROCEDURE add_2_numbers( in a int, in b int, out answer int )
BEGIN
          set answer=a+b;
END$$
DELIMITER ;

set @answer=0;
CALL add_2_numbers(1,2,@answer);
select @answer;


