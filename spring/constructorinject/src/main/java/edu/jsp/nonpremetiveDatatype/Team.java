package edu.jsp.nonpremetiveDatatype;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Team {
	@Autowired
	Map<Integer, String> players;
}
