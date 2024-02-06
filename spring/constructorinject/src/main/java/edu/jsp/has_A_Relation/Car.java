package edu.jsp.has_A_Relation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Car {
	
	@Value("BMW")
	private String name;
	@Value("BLACK")
	private String color;
	@Value("M5")
	private String model;
	@Value("8000000")
	private double prize;
	
	@Autowired
	private Engine engine;

	@Override
	public String toString() {
		return "Car [name=" + name + ", color=" + color + ", model=" + model + ", prize=" + prize + ", engine=" + engine
				+ "]";
	}
	
	

}
