package array;

import java.util.Arrays;

public class A1 {

	public static void main(String[] args) {
		
		//!Dynamic way of array declaration
		
		//datatype [] array_name=new datatype[size];
		
		int [] arr1;
		arr1= new int[5];
		arr1[0]=1;
		arr1[1]=2;
		arr1[2]=2;
		arr1[3]=3;
		arr1[4]=5;
		System.out.println(arr1[0]);
		System.out.println(arr1[1]);
		System.out.println(arr1[2]);
		System.out.println(arr1[3]);
		System.out.println(arr1[4]);
//		System.out.println(arr1[5]);
		
		int le=arr1.length;
		System.out.println(le);
		int [] arr= {1,2,3,4,5};
		System.out.println(Arrays.toString(arr));
		
		String name="hi i\"am vijay kumar";
		
	}
}
