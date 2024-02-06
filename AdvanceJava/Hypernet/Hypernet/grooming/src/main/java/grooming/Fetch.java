package grooming;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Fetch {
	public static void main(String[] args) {
		EntityManagerFactory emf=Persistence.createEntityManagerFactory("dev");
		EntityManager em=emf.createEntityManager();
		
		Person p=em.find(Person.class,1);
		
		System.out.println(p.getAadhar().getAid());
		System.out.println(p.getAadhar().getAddress());
		System.out.println(p.getAadhar().getPhone());
	}
}
