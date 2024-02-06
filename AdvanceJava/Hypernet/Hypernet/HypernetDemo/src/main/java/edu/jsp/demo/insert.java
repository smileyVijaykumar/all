package edu.jsp.demo;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class insert {
	public static void main(String[] args)throws Exception {
		EntityManagerFactory emf=Persistence.createEntityManagerFactory("dev");
		EntityManager em=emf.createEntityManager();
		EntityTransaction et=em.getTransaction();
		
		team m=new team();
		m.setName("Ganguly");
		m.setJersey(99);
		m.setTeam("KKR");
		
		et.begin();
		em.persist(m);
		et.commit();
		
	}
}
