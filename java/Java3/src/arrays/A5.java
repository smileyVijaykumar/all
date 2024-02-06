package arrays;

import java.util.Arrays;

public class A5 {
	public static void main(String[] args) {
		int []a= {2,4,6,8,10};
		int []b=new int[a.length];
		
		System.out.println(a.length-1);
		
		for (int i = 0,m=a.length-1; i < a.length; i++,m--) {
			b[i]=a[m];
		}
		System.out.println(Arrays.toString(b));
	}
}
