package interview;

import java.util.Iterator;

public class ReverseTheString {
	public static void main(String[] args) {
		String str="hello";
		char res;
		char [] ch=str.toCharArray();
		
		
//		System.out.println(ch[ch.length-1]);
		
		for(int i=str.length()-1;i>=0;i--) {
	
			res=str.charAt(i);
			System.out.print(res);
		}
	
		
		
		
		
		
	}

}
