package com;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainUser {
	
	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("user.xml");
		User user=context.getBean(User.class);
		System.out.println(user);
	}

}
