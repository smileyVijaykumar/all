package com;


public class Employee {
	
	private String name;
	private int age;
	private String company;
	
	
	public Employee(String name,int age,String company) {
		this.name=name;
		this.age=age;
		this.company=company;
		
	}


	@Override
	public String toString() {
		return "Employee [name=" + name + ", age=" + age + ", company=" + company + "]";
	}
	
	

}