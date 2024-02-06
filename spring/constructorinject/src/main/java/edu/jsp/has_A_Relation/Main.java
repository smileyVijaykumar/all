package edu.jsp.has_A_Relation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import edu.jsp.student.config;



public class Main {
	
	public static void main(String[] args) {
		
		ApplicationContext context=new AnnotationConfigApplicationContext(config.class);
		
		Car car=(Car) context.getBean(Car.class);
		
		System.out.println(car);
	}

}