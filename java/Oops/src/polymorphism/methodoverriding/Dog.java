package polymorphism.methodoverriding;

public class Dog {

	int avgSize=20;
	
	
	public void bark() {
		System.out.println("bark bark!");
	}
	
	public int size() {
		return avgSize;
	}
}

