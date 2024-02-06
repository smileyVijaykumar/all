package composition;

public class MainCar {
	
	public static void main(String[] args) {
		
		Car c=new Car("BMW","Black",new Engine("2993", "1000"));
		
		System.out.println(c.name);
		System.out.println(c.color);
		
		System.out.println("********************************");
		
		System.out.println(c.e.cc);
		System.out.println(c.e.hp);
		
	}

}
