package sacnner;

import java.util.Scanner;

public class ScannerClass {

	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		
		System.out.println("Enter Your name?");
		String name=sc.next();
		
		System.out.println("Enter your Ager?");
		int age=sc.nextInt();
		
		System.out.println("Enter Your Senior Quote?");
		String quote=sc.next();
		quote=quote+sc.nextLine();
		
		
		System.err.println("Thank  You "+name+" you are "+age+" years old "+" your blood group is "+quote );
//		System.out.println();
		
		
	}
}
