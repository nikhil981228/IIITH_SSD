use CUSTOMER_DB;

delimiter $$
create procedure proc_emp()
begin
	declare c_name varchar(40);
    declare c_city varchar(35);
    declare c_country varchar(20);
    declare c_grade decimal(12,2);

	declare v_finished integer default 0;
    declare c1 cursor for select CUST_NAME, CUST_CITY, CUST_COUNTRY, GRADE from customer where AGENT_CODE LIKE "A00%";
	
    declare continue handler for NOT FOUND set v_finished=1;
	open c1;
	get_emp: LOOP
		fetch c1 into c_name, c_city, c_country, c_grade;
		if v_finished=1 then 
			leave get_emp;
		end if;
		select c_name, c_city, c_country, c_grade;
	END LOOP get_emp;
	close c1;
end$$
delimiter ;


CALL proc_emp;

 



