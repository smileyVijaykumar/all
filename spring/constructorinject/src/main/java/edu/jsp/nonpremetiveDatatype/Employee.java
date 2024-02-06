package edu.jsp.nonpremetiveDatatype;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Employee {
	@Autowired
	@Qualifier("l1")
	List<String> name1;
	
	@Autowired
	@Qualifier("l2")
	List<String> name2;
}
