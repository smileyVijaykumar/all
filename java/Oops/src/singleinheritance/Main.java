package singleinheritance;

public class Main {
	public static void main(String[] args) {
		
		Child child =new Child();
		
		System.out.println(child.a);
		System.out.println(child.b);
		System.out.println(child.c);
		System.out.println(child.d);
		
		child.parrent();
		child.m1();
	}
}
