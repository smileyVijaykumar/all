package arr;

import java.util.Scanner;

public class A2 {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		
		System.out.println("Enter The size Of the array");
		int [] a = new int[sc.nextInt()];
		
		for(int i = 0;i < a.length;i++) {
			System.out.println("Enter The Number");
			a[i]=sc.nextInt();
		}
		
		for(int i = 0;i<a.length;i++) {
			System.out.println("a["+i+"]---->"+a[i]);
		}
	}
}
