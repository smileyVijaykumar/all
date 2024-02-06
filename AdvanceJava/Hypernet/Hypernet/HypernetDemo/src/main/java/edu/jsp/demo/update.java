package edu.jsp.demo;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class update {
	public static void main(String[] args) {
		EntityManagerFactory emf=Persistence.createEntityManagerFactory("dev");
		EntityManager em = emf.createEntityManager();
		EntityTransaction et=em.getTransaction();
		
		//already present data
		team m=em.find(team.class, 7);
		if(m!=null) {
			//modify phone
			m.setTeam("CSK");
			et.begin();
			em.merge(m);
			et.commit();}
	}
}
