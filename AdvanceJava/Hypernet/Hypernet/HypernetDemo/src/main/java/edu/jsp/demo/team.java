package edu.jsp.demo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class team {

	private String name;
	@Id
	private int jersey;
	private String team;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getJersey() {
		return jersey;
	}

	public void setJersey(int jersey) {
		this.jersey = jersey;
	}

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

}
