package polymorphism.methodshadowing;

public class Main {
	public static void main(String[] args) {
		Bird.sing();
		System.out.println("******************");
		Eagle.sing();
		
		Bird b=new Eagle();
		
		Eagle e=(Eagle)b;
		System.out.println("******************");
		b.sing();
		System.out.println("******************");

		e.sing();
		
	}
}
