package polymorphism.methodoverriding;

public class Main {

	public static void main(String[] args) {
		Dog d=new Chihuahua();
		d.bark();
		int a=d.size();
		System.out.println(a);
	}
}
