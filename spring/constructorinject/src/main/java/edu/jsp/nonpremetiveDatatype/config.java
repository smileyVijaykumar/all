package edu.jsp.nonpremetiveDatatype;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


@Configuration
@ComponentScan
public class config {
	
	@Bean
	//@Primary
	@Qualifier("l1")
	public List<String> m1(){
		List<String> l1=new ArrayList<String>();
		l1.add("A");
		l1.add("B");
		l1.add("C");
		return l1;
	}
	
	@Bean
	@Qualifier("l2")
	public List<String> m2(){
		List<String> l1=new ArrayList<String>();
		l1.add("D");
		l1.add("E");
		l1.add("F");
		return l1;
	}
	

}
