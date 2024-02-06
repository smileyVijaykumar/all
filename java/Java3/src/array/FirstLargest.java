package array;

import java.util.Arrays;

import arrays.A;

public class FirstLargest {

	public static void main(String[] args) {
		
		int []a= {45,76,98,109,305};
		
		int largest=a[0];
		
		for(int i=0;i<a.length;i++) {
			if(a[i]>largest)
				largest = a[i];
		}
		System.out.println(largest);
		
		int smallest=a[0];
		
		for(int i=0;i<a.length;i++) {
			if(a[i]<smallest) {
				smallest=a[i];
			}
		}
		System.out.println(smallest);
	}
}
