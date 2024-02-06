package edu.jsp.students;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		
		ApplicationContext context=new AnnotationConfigApplicationContext(config.class);
		Student student= context.getBean(Student.class);
		System.out.println(student);
	}

}
