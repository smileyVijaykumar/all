package edu.jsp.demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		
		ApplicationContext context=new ClassPathXmlApplicationContext("Demo.xml");
		
		Demo d=(Demo) context.getBean("demo");
		d.m1();
	}
}



