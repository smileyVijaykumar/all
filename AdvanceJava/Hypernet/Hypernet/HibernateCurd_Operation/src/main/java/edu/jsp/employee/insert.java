package edu.jsp.employee;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class insert {
	public static void main(String[] args) {
		EntityManagerFactory emf=Persistence.createEntityManagerFactory("dev");
		EntityManager em = emf.createEntityManager();
		EntityTransaction et=em.getTransaction();
		
		Employee e=new Employee();
		e.setId(2);
		e.setName("vinoth");
		e.setPhoneNumber(987654321);
		e.setSal(150000);
		
		et.begin();
		em.persist(e);
		et.commit();
	}
}
