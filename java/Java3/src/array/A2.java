package array;

import java.util.Arrays;
import java.util.Scanner;

public class A2 {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		
		System.out.println("Enter The Size of The Array");
		
		int []a=new int[sc.nextInt()];
		
	
		for(int i=0;i<a.length;i++) {
			System.out.println("Eneter The value");
			a[i]=sc.nextInt();
		}
		
		for(int i=0;i<a.length;i++) {
			System.out.println("a["+i+"]-"+a[i] );
		}

		
	}
}
