package polymorphism.staticvariableshadowing;

class A{
	static int a=10;
	static int b=20;
}


public class Demo {
	static int a=40;
	static int b=30;
	public static void main(String[] args) {
		System.out.println(a);
		System.out.println(b);
		System.out.println(Demo.a);
		System.out.println(Demo.b);
		System.out.println("*****************");
		
		A a=new A();
		
		System.out.println(a.a);
		System.out.println(a.b);
		}

}
