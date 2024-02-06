package edu.jsp.employee;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class fetchByName_Sal {
	public static void main(String[] args) {
		EntityManagerFactory emf=Persistence.createEntityManagerFactory("dev");
		EntityManager em=emf.createEntityManager();
		Query q=em.createQuery("select e.name,e.sal from Employee e");
		List<Object[]>list=q.getResultList();
		for(Object[] o:list) {
			System.out.println("Name:"+o[0]);
			System.out.println("SAL:"+o[1]);
		}

	}
	
}
