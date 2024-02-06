package array;

import java.util.Arrays;

public class Sum {

	public static void main(String[] args) {
		int a[]= {1,2,3,45,5};
		
//		int sum=0;
//		for(int i=0;i<a.length;i++) {
//			sum=sum+a[i];
//		}
//		System.out.println(sum);
		
		//odd index present element in an array
		
//		for(int i=0;i<a.length;i++) {
//			if(i%2==0) {
//				System.out.println(a[i]);
//			}
//		}
		
		//even index
		
//		for(int i=0;i<a.length;i++) {
//			if(i%2==1) {
//				System.out.println(a[i]);
//			}
//		}
		
		//odd value
//		for(int i=0;i<a.length;i++) {
//			if(a[i]%2==1) {
//				System.out.println(a[i]);
//			}
//		}
		
		char [] ch= {'A','B','Z'};
		
//		for(int i=0;i<ch.length;i++)
//			System.out.println((int)ch[i]);
//		
//		for(int i=ch.length-1;i>=0;i--)
//			System.out.println(ch[i]);
		
//		int [] b=new int[a.length];
//		
//		for(int i=0,m=a.length-1;i<a.length;i++,m--) {
//			b[i]=a[m];
//		}
//		System.out.println(Arrays.toString(b));
		
		
		int [] b = {1,2,3,4,5};
		int [] c = {6,7,8,9,10};
		
		int [] d = new int[a.length+b.length];
		
//		System.out.println(Arrays.toString(d));
		
//		for(int i=0,m=0,n=0;i<d.length;i++) {
//			if(m<a.length) {
//				d[i]=b[m++];
//			}else 
//				d[i]=c[n++];
//		}
//		System.out.println(Arrays.toString(d));
		
		
//		for(int i=0,m=0,n=0;i<d.length;i++) {
//			if(a.length>m)
//				d[i]=b[m++];
//			else {
//				d[i]=c[n++];
//			}
//						
//		} 
//		System.out.println(Arrays.toString(d));
		
		for(int i=0,m=0,n=0;i<d.length;i++) {
			if(i%2==0) {
				d[i]=b[m++];
			}else {
				d[i]=c[n++];
			}
		}
		System.out.println(Arrays.toString(d));
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
}
