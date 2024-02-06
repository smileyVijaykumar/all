package composition;

public class Main {
	
	public static void main(String[] args) {
		
		DateOfBirth d=new DateOfBirth(1, 2, 2004);
		
		Person p=new Person("tom", d);
		
		p.personDetails();
	}

}
