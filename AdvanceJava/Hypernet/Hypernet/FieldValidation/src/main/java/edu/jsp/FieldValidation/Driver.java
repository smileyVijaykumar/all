package edu.jsp.FieldValidation;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class Driver {
	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("dev");
		EntityManager entityManager=entityManagerFactory.createEntityManager();
		EntityTransaction entityTransaction=entityManager.getTransaction();
		
		Student s=new Student();
		s.setName("tim david");
		s.setAge(24);
		s.setDob("10/10/2001");
		s.setMarks(789445);
		s.setExamno(12345);
		entityTransaction.begin();
		entityManager.persist(s);
		entityTransaction.commit();
	}
}
