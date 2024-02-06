package string;

import java.util.Arrays;

public class Anagram {
	public static void main(String[] args) {
		
		String s1="Earth";
		String s2="heart";
		
		s1=s1.toLowerCase();
		s2=s2.toLowerCase();
		
		char[] ch1 = s1.toCharArray();
		char[] ch2 = s2.toCharArray();
		
		Arrays.sort(ch1);
		Arrays.sort(ch2);
		
		String res="Anagram";
		if(ch1.length != ch2.length) {
			res="Not An Anagram";
		}
		
		for(int i=0;i<ch1.length;i++) {
			if(ch1[i] != ch2[i]) {
				res="Not An Anagram";
				break;
			}
			
		}
		System.out.println(res);
		
		
		
	}
}
