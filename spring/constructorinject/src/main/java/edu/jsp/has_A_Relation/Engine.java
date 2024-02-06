package edu.jsp.has_A_Relation;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Engine {
	
	@Value("200cc")
	private String cc;
	@Value("PETROL")
	private String engineType;
	@Value("250")
	private String Bhp;
	
	
	@Override
	public String toString() {
		return "Engine [cc=" + cc + ", engineType=" + engineType + ", Bhp=" + Bhp + "]";
	}
	
	

}
