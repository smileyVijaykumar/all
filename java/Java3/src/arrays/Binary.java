package arrays;

import java.util.Scanner;

public class Binary {
	static Scanner sc=new Scanner(System.in);
	
	public static void main(String[] args) {
		int arr[]= {1,2,3,4,5,6,7,8,9,10};
		
		int lowindex=0, highindex=arr.length-1,mid;
		int target=3;
		String res="Not present";
		
		
		while(lowindex<=highindex) {
			mid=(lowindex+highindex)/2;
			int midvalue=arr[mid];
			System.out.println(midvalue);
			if (target==midvalue) {
				res="present";
				break;
			}	
//			else if(target<midvalue) {
//				highindex=mid-1;
//			}else if (target>midvalue) {
//				lowindex=mid+1;
//			}
			else if(midvalue>target) {
				highindex=mid-1;
			}else if (midvalue<target) {
				lowindex=mid+1;
			}
		}
		System.out.println(res);
	}


}
