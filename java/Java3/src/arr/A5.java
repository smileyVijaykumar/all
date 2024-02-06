package arr;

import java.util.Arrays;

public class A5 {

	public static void main(String[] args) {
		
		int [] arr = {1,2,3,4,5};
		
		int [] b =new int[arr.length];
		
		for(int i=0;i<b.length;i++) {
			b[i] = arr[i];
		}
		System.out.println(Arrays.toString(arr));
		System.out.println(Arrays.toString(b));
	}
	
}
