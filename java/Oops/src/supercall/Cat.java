package supercall;

public class Cat extends Animal {
	
String color,loyality,loc;
	
	public Cat() {
		// TODO Auto-generated constructor stub
	}
	
	Cat(String color,String loyality,String loc){
		super("meow meow","face","tom");
		this.color=color;
		this.loyality=loyality;
		this.loc=loc;
	}
	public void detailsOfCat() {
		System.out.println("name :"+name);
		System.out.println("breed :"+breed);
		System.out.println("sound :"+sound);
		System.out.println("Color :"+color);
		System.out.println("loyality :"+loyality);
		System.out.println("location :"+loc);
		
		
	}

}
