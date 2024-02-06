package string;

import java.util.Arrays;

public class SplitArray {
	public static void main(String[] args) {
		String s= "hi how are you";
		
		String[]res1=s.split(" ");
		String [] res2=s.split("");
		System.out.println(Arrays.toString(res1) );
		System.out.println(Arrays.toString(res2));
	}
}
