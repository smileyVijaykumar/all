package edu.jsp.students;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Student {

	@Value("1")
	private int id;
	@Value("vijay")
	private String name;
	@Value("35")
	private double marks;
	@Value("23")
	private int age;
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", marks=" + marks + ", age=" + age + "]";
	}
	
	
	
}