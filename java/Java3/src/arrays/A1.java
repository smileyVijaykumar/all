package arrays;

import java.util.Arrays;
import java.util.Scanner;

public class A1 {
	static Scanner sc=new Scanner(System.in);
	public static void main(String[] args) {
		
		System.out.println("Enter the Size Of The Array");
		int a[]=new int[sc.nextInt()];
		
		for (int i = 0; i < a.length; i++) {
			System.out.println("Enter The element");
			 a[i]=sc.nextInt();
		}
		
		System.out.println(Arrays.toString(a));
		
		
		for(int i=0;i<a.length;i++) {
			System.out.println("a["+i+"]="+a[i]);
		}
		
	}
}
