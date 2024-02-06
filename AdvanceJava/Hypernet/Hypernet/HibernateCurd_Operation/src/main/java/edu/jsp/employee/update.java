package edu.jsp.employee;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class update {
public static void main(String[] args) {
	EntityManagerFactory emf=Persistence.createEntityManagerFactory("dev");
	EntityManager em = emf.createEntityManager();
	EntityTransaction et=em.getTransaction();
	Employee e=new Employee();
	e.setId(3);
	e.setName("Dinga");
	e.setPhoneNumber(123456789);
	e.setSal(13000);
	
	et.begin();
	em.merge(e);
	et.commit();
}
}
