package composition;

public class Person {

	String name;
	DateOfBirth dob;
	
	
	public Person(String name,DateOfBirth dob) {
		this.name=name;
		this.dob=dob;
	}
	
	public void personDetails() {
		System.out.println("Name :"+name);
		dob.dateOfBirthDeatais();
	}
}
