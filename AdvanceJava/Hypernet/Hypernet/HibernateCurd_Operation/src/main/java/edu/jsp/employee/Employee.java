package edu.jsp.employee;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity  //use to say that create table using this class
public class Employee {
	@Id //to make id as primary key
	private int id;
	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", sal=" + sal + ", phoneNumber=" + phoneNumber + "]";
	}
	private String name;
	private double sal;
	private long phoneNumber;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getSal() {
		return sal;
	}
	public void setSal(double sal) {
		this.sal = sal;
	}
	public long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	
}
