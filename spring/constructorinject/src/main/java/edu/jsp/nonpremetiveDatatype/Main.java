package edu.jsp.nonpremetiveDatatype;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
	public static void main(String[] args) {
		ApplicationContext context=new AnnotationConfigApplicationContext(config.class);
		
		Employee employee=(Employee) context.getBean(Employee.class);
		
		System.out.println(employee.name1);
		System.out.println(employee.name2);
		
	
	}

}
