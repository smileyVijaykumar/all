package com;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class BookMain {
	
	public static void main(String[] args) {
		ApplicationContext context= new ClassPathXmlApplicationContext("book.xml");
		Books book=context.getBean(Books.class);
		System.out.println(book);
	}

}
