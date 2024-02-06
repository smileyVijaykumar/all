package com;

import java.util.Map;

public class User {
	Map<String, Integer> users;
	
	User(Map<String,Integer> users){
		this.users=users;
	}

	@Override
	public String toString() {
		return "User [users=" + users + "]";
	}
	
}
