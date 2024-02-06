package edu.jsp.employee;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class updatetype2 {
	public static void main(String []args) {
	EntityManagerFactory emf=Persistence.createEntityManagerFactory("dev");
	EntityManager em = emf.createEntityManager();
	EntityTransaction et=em.getTransaction();
	
	//already present data
	Employee e=em.find(Employee.class, 3);
	if(e!=null) {
		//modify phone
		e.setPhoneNumber(5678912345l);
		et.begin();
		em.merge(e);
		et.commit();
	}
}
}