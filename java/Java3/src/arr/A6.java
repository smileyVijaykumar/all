package arr;

import java.util.Arrays;

public class A6 {
	
	public static void main(String[] args) {
		
		int arr [] = {1,2,3,4,5,6};
		int [] b = new int [arr.length];
		
		for(int i = arr.length-1,m=0; i >= 0;i--,m++) {
			b[m]=arr[i];
		}
		System.out.println(Arrays.toString(b));
		
	}
}
