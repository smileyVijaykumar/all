package com.vijay.springBoot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

	@RequestMapping(method = RequestMethod.GET, value = "m1")
	public String m1() {
		return "Hello World";
	}

	@RequestMapping(method = RequestMethod.GET, value = "m2")
	public Student m2() {

		Student s = new Student();
		s.setId(1);
		s.setName("Vijay");
		s.setAge(23);
		s.setMarks(35);

		return s;

	}

	@RequestMapping(method = RequestMethod.GET, value = "m3")

	public List<Student> m3() {

		Student s1 = new Student();
		s1.setId(1);
		s1.setName("Vijay");
		s1.setAge(23);
		s1.setMarks(35);

		Student s2 = new Student();
		s2.setId(2);
		s2.setName("Kavin");
		s2.setAge(22);
		s2.setMarks(99);

		ArrayList<Student> al = new ArrayList<Student>();
		al.add(s1);
		al.add(s2);

		return al;
	}

	@RequestMapping(method = RequestMethod.POST, value = "m4")
	public String[] m4() {

		String s[] = { "Vijay", "Kavin" };
		return s;
	}

}
