package edu.jsp.cascading;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class Delete {
	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("dev");
		EntityManager entityManager=entityManagerFactory.createEntityManager();
		EntityTransaction entityTransaction=entityManager.getTransaction();
		
		Person p=entityManager.find(Person.class,1);
		
		if(p!=null) {
			entityTransaction.begin();
			entityManager.remove(p);
			entityTransaction.commit();
			System.out.println("Data Remove");
		}else {
			System.out.println("Your Id not found");
		}
	}
}
