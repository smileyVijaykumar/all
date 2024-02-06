package edu.jsp.student;

import java.io.ObjectInputFilter.Config;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		
		ApplicationContext context=new AnnotationConfigApplicationContext(config.class);
		
		Student s=(Student) context.getBean("student");
		
		System.out.println(s);
	}
}
