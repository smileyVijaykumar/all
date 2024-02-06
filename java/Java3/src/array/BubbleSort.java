package array;

import java.util.Arrays;

public class BubbleSort {
	 public static void main(String[] args) {
		
//		 int [] a = {11,2,13,4,5,12,12,13,11,2};
		 int [] a = {11,11,12,1,2,4,7};
		 int temp=0;
		 
//		 for(int i=0;i<a.length-1;i++) {
		 int i=0;
		 while(i<a.length-1) {
			 for(int j=0;j<a.length-1;j++) {
				 if(a[j]>a[j+1]) {
					 temp=a[j];
					 a[j]=a[j+1];
					 a[j+1]=temp;
				 }
			 }
			 i++;
		 }
//		 System.out.println(Arrays.toString(a));
		 int [] b=new int [a.length];
		 int m=0;
		 
		 for(int index=0;index<a.length-1;index++) {
			 if(a[index] != a[index+1]){
				 b[m++]=a[index];
				 
			 }
		 }
		 System.out.println(Arrays.toString(b));
		 
		 
		 
		 
	}
}
