package edu.jsp.demo;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class delete {
	public static void main(String[] args) {
		EntityManagerFactory emf=Persistence.createEntityManagerFactory("dev");
		EntityManager em = emf.createEntityManager();
		EntityTransaction et=em.getTransaction();
		
		team m=em.find(team.class,99);
		if(m!=null) {
			et.begin();
			em.remove(m);
			et.commit();
			
			System.out.println("deleted");
		}else {
			System.out.println("id not found");
		}
	}
}
