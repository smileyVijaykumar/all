package composition;

public class Car {
	
	String name;
	String color;
	
	Engine e;
	
	
	public Car(String name,String color,Engine e) {
		this.name=name;
		this.color=color;
		this.e=e;
	}
	
	
}
