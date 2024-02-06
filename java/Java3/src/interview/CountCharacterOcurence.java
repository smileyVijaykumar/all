package interview;

import java.util.Arrays;

public class CountCharacterOcurence {

	public static void main(String[] args) {
		String str="i am a java developer";
		
		String []s=str.split("");
//		char[]ch=str.toCharArray();
	
		for (int i = 0; i < s.length; i++) {
			int count=1;
			for (int j = i+1; j < s.length; j++) {
				if (s[i].equals(s[j])) {
					count++;
					s[j]=" " ;
				}
			}
			if (!s[i].equals(" ")) {
				System.out.println(s[i]+" :"+ count);
				
			}
			
		}
		
	}
	
	
}
