package arrays;

import java.util.Arrays;
import java.util.Iterator;


public class MergeArray {
	public static void main(String[] args) {
		
		int []a= {1,2,3,4,5};
		int []b= {6,7,8,9,10};
		
		int []c=new int [a.length+b.length];
		
		int i=0,j=0,k=0;
		while(i<c.length) {
			if (j<a.length) {
				c[i]=a[j++];
			}else {
				c[i]=b[k++];
			}
			i++;
		}
		System.out.println(Arrays.toString(c));
		
		
		
		
	}
}
	
	
	
	
	


