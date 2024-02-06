package grooming;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class save {
	public static void main(String[] args) {
		EntityManagerFactory emf=Persistence.createEntityManagerFactory("dev");
		EntityManager em=emf.createEntityManager();
		EntityTransaction et=em.getTransaction();
		
		Aadhar a=new Aadhar();
		a.setAddress("chennai");
		a.setPhone(23456789l);
		
		Person p=new Person();
		p.setGender("Male");
		p.setAge(22);
		p.setAadhar(a);
		
		et.begin();
		em.persist(a);
		em.persist(p);		
		et.commit();
	}
}
