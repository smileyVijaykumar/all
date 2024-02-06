package polymorphism.staticvariableshadowing;

class A1{
	int a=10;
	int b=20;
}
class B1 extends A1{
	int a=10;
	int b=20;
}

public class Test {
	
	public static void main(String[] args) {
		A1 a=new B1();
		System.out.println(a.a);
		
		B1 ref=(B1)a;
		
		System.out.println(ref.a);
		
	}

}
