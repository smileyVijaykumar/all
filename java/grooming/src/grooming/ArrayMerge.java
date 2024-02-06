package grooming;

import java.util.Arrays;

public class ArrayMerge {

	public static void main(String[] args) {
		int a[] = {1,2,3,4};
		int b[] = {5,6,7,8};
		
		int []c = new int[a.length+b.length];
		
		for(int i=0,j=0,k=0;i<c.length;i++) {
			if(i<a.length) {
				c[i]=a[j++];
			}else {
				c[i] = b[k++];
			}
		}
		System.out.println(Arrays.toString(c));
	}
}
