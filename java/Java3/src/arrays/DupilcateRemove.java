package arrays;

import java.util.Arrays;

public class DupilcateRemove {
	public static void main(String[] args) {
		int arr[]= {1,1,2,3,4,2};
		
		int b[]=new int[arr.length];
		
		int m=0,count=0;
		Arrays.sort(arr);
		
		for (int index = 0; index < arr.length-1; index++) {
			if (arr[index] != arr[index+1]) {
				b[m++]=arr[index];
				count++;
			}
		}
		b[m++]=arr[arr.length-1];
		count++;
		System.out.println(count);
		int c[]=new int[count];
		for (int index = 0; index < c.length; index++) {
			c[index]=b[index];
		}
		System.out.println(Arrays.toString(c));
		
	}

}
