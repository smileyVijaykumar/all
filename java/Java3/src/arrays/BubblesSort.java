package arrays;

import java.util.Arrays;
import java.util.Iterator;

public class BubblesSort {
	
	public static void main(String[] args) {
		int arr[]= {7,5,3,0,9};
		int temp=0;
		
		for(int i=0;i<arr.length;i++) {
			for(int j=1;j<arr.length;j++) {
				if (arr[j-1]>arr[j]) {
				temp=arr[j-1]	;
				arr[j-1]=arr[j];
				arr[j]=temp;
				}
			}
		}
		System.out.println(Arrays.toString(arr));
	}

}
