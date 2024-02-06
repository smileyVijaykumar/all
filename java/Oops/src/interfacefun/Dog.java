package interfacefun;

public interface Dog {
	
	String color="black";
	
	public static void bark() {
		System.out.println("bark bark!");
	}
	
	
	public void poop();
}

class chihuahua implements Dog{
	
	public void poop() {
		System.out.println("pooped!");
	}
}
