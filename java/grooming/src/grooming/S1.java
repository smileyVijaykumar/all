package grooming;

import java.util.Arrays;
import java.util.HashSet;

public class S1 {

	public static void main(String[] args) {
		
		String s1="abcd";
		
		String s2="bcaab";
		
		 char ch1[]=s1.toCharArray();
		 char ch2[]= s2.toCharArray();
		
		 Arrays.sort(ch1);
		 Arrays.sort(ch2);
		
		
//		for(int i=0;i<ch1.length;i++) {
//			if(ch1[i] == ch2[i]) {
//				System.out.println("True");
//				break;
//			}else {
//				System.out.println("False");
//			}
//		}
		
		
		HashSet h=new HashSet();
		
		for(int i=0;i<ch1.length;i++) {
			if(ch1[i] == ch2[i]) {
				System.out.println("true");
				break;
			}else {
				System.out.println("False");
			}
		}
		
	}
}
