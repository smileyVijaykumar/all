package polymorphism.methodoverriding;

public class Chihuahua extends Dog {
	int avgSize=10;
	public void bark() {
		System.out.println("yip yip!");
	}
	public int size() {
		return avgSize;
	}
}
