package edu.jsp.nonpremetiveDatatype;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Student {
	
	@Autowired
	@Qualifier("l3")
	Set<String> s;
}
