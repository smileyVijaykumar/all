package polymorphismMethodoverloading;

import java.util.Random;

public class Test {

	
	public static void main(String[] args) {
		int res1=addNumbers(2, 3);
		
		double res2=addNumbers(1.5, 2.5);
		int res3=addNumbers(2, 3,5);
	
		System.out.println(res1);
		System.out.println(res2);
		System.out.println(res3);
		addNumbers();
		
	}
	
	public static int addNumbers( int a,int b) {
		return a+b;
	}
	public static double addNumbers(double a,double b) {
		return a+b;
	}
	public static int addNumbers( int a,int b,int c) {
		return a+b+c;
	}
	public static void addNumbers() {
		Random r=new Random();
		System.out.println(r.nextDouble(6)+r.nextDouble(6));
	}
}
