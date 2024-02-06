package edu.jsp.demo;

import org.springframework.stereotype.Component;

@Component
public class Demo {
	
	Demo(){
		System.out.println("demo Constructor Has Been Called");
	}
	public void m1() {
		System.out.println("hi i am m1 method");
	}
}
