package package2;

import package1.Access1;

public class Access3 extends Access1 {

	public static void main(String[] args) {
		
		Access1 a2=new Access1();
		
		System.out.println(a2.sec);
		
		
		Access1 a3=new Access3();
	
		System.out.println(a3.sec);
	}
}
