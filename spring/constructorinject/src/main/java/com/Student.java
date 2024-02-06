package com;

import java.util.List;

public class Student {
	
	private int id;
	private String scname;
//	private int age;
	
	private List<String> students;
public Student(int id, String scname, List<String> students) {
	super();
	this.id = id;
	this.scname = scname;
	this.students = students;
}
@Override
public String toString() {
	return "Student [id=" + id + ", scname=" + scname + ", students=" + students + "]";
}


	
	
	

}
