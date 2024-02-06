package whileLoop;

import java.util.ArrayList;
import java.util.Scanner;

public class WhileLoop {
	
	public static void main(String[] args) {
		int i=0;
		while(i<10) {
			System.out.println(i);
			i++;
		}
		
		
		String str="dog is barking";
		
		Scanner scan=new Scanner(str);
		
		ArrayList<String> words=new ArrayList<String>();
//		System.out.println(words.hasNext());
//		System.out.println(words.next());
		
		while(scan.hasNext()) {
			words.add(scan.next());
		}
		System.out.println(words);
	}
	

}
