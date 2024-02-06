package edu.jsp.cascading;

import java.util.ArrayList;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class Driver {
	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("dev");
		EntityManager entityManager=entityManagerFactory.createEntityManager();
		EntityTransaction entityTransaction=entityManager.getTransaction();
		
		Account account1 =new Account();
		account1.setAccNo(12345);
		account1.setIfscCode("wer5432");
		
		Account account2 =new Account();
		account2.setAccNo(67890);
		account2.setIfscCode("ret5432");
		
		Account account3 =new Account();
		account3.setAccNo(67854);
		account3.setIfscCode("POIU5432");
		
		Person person=new Person();
		person.setName("Harish");
		person.setEmail("harish@gmail.com");
		person.setPhone(987654321l);
		ArrayList<Account>accounts=new ArrayList();
		accounts.add(account1);
		accounts.add(account2);
		accounts.add(account3);
		person.setAccount(accounts);
		
		entityTransaction.begin();
		entityManager.persist(person);
		entityTransaction.commit();
		
	}
}
