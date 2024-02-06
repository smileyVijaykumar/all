package edu.jsp.employee;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class delete {
	public static void main(String[] args) {
		EntityManagerFactory emf=Persistence.createEntityManagerFactory("dev");
		EntityManager em = emf.createEntityManager();
		EntityTransaction et=em.getTransaction();
		
		Employee e=em.find(Employee.class,3);
		if(e!=null) {
			et.begin();
			em.remove(e);
			et.commit();
			
			System.out.println("deleted");
		}else {
			System.out.println("id not found");
		}
	}
}