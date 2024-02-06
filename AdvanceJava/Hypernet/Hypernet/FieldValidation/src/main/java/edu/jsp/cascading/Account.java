package edu.jsp.cascading;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Account {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private long accNo;
private String ifscCode;


public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public long getAccNo() {
	return accNo;
}
public void setAccNo(long accNo) {
	this.accNo = accNo;
}
public String getIfscCode() {
	return ifscCode;
}
public void setIfscCode(String ifscCode) {
	this.ifscCode = ifscCode;
}
}
