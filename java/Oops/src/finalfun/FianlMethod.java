package finalfun;

 class Demo {

	public static final void m1() {
		System.out.println("hi!");
	}
}

class Myclass extends Demo{
	
//	public static final void m1() {
//		System.out.println("hi!");
//	}
	
	/*
	 * fianl method can be inherited 
	 * final method can't be over rided
	 * */
}

public class FianlMethod{
	public static void main(String[] args) {
		Demo d=new Myclass();
		
		d.m1();
	}
}
