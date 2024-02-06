package string;

import java.util.Arrays;

public class Anagram {
	
	public static void main(String[] args) {
		
		String s1="Heart";
		String s2="Earth";
		
		s1=s1.toUpperCase();
		s2=s2.toUpperCase();
		
		char [] ch1=s1.toCharArray();
		char [] ch2=s2.toCharArray();
		
		Arrays.sort(ch1);
		Arrays.sort(ch2);
		
		String res="Anagram";
		
		if (ch1.length != ch2.length) {
			res="Not anagram";
		}else {
			for (int i= 0;  i< ch2.length; i++) {
				if (ch1[i] != ch2[i]) {
					res="Not an Anaagram";
					break;
				}
			}
		}
		System.out.println(res);
	}
	
	
	

}
