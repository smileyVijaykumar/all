package staticky;

public class StatickyMethod {
	
	public static void main(String[] args) {
		
		//static method = class itself
		sayHi();
		
		OtherClass.cat();
		
		//non static method = instance of class
		StatickyMethod sm=new StatickyMethod();
		
		OtherClass ot=new OtherClass();
		ot.catDrink();
		
		sm.panCake();
		
		
	
	}
	
	public static void sayHi() {
		System.out.println("hi!");
	}
	
	public void panCake() {
		System.out.println("pancake!");
	}

}
