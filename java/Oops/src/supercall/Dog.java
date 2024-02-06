package supercall;

public class Dog extends Animal {
	
	String color,loyality,loc;
	
	public Dog() {
		// TODO Auto-generated constructor stub
	}
	
	Dog(String color,String loyality,String loc){
		super("wow wow", "German", "Tomy");
		this.color=color;
		this.loyality=loyality;
		this.loc=loc;
	}
	
	public void detailsOfDog() {
		System.out.println("name :"+name);
		System.out.println("breed :"+breed);
		System.out.println("sound :"+sound);
		System.out.println("Color :"+color);
		System.out.println("loyality :"+loyality);
		System.out.println("location :"+loc);
		
		
	}
	

}
