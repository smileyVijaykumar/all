package edu.jsp.nonpremetiveDatatype;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
public class studentConfig {
	

	@Bean
	@Qualifier("l3")
	public Set<String> name(){
		Set<String> l3=new HashSet<String>();
		
		l3.add("1");
		l3.add("2");
		l3.add("3");
		return l3;
	}

}
