package array;

import java.util.Arrays;
import java.util.Scanner;

public class RotateArray {

	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		
		int [] a= {1,2,3,4,5}; 
//		System.out.println("Enter The N value");
//		int n=sc.nextInt();
//		
//		for(int i=1;i<=n;i++) {
//			int first=a[0];
//			for(int j=0;j<a.length-1;j++) {
//				a[j]=a[j+1];
//			}
//			a[a.length-1]=first;
//		}
//		System.out.println(Arrays.toString(a));
		
		
		System.out.println("Enter The Number");
		
		int key=sc.nextInt();
		
		String res="Not Present";
		
//		for(int i=0;i<a.length;i++) {
//			if(key == a[i]) {
//				res="present";
//				break;
//			}
//		}
//		System.out.println(res);
		
		int l=0,h=a.length-1,m=(l+h)/2;
		while(l<=h) {
			m=(l+h)/2;
		
				if(key == a[m]) {
					 res="present";
					 break;
				}
				else if(a[m]<key){
					l=m+1;
				}else if(a[m]<key) {
					h=m-1;
				}
			
		}
		System.out.println(res);
		
		
		
		
		
		
		
	}
}
