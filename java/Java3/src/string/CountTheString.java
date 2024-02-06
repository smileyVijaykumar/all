package string;

public class CountTheString {
	
	public static void main(String[] args) {
		String str ="aaabbaacc";
		char ch[]=str.toCharArray();
		
		int count=1;
		for (int i = 0; i < ch.length-1; i++) {
			if (ch[i]==ch[i+1]) {
				count++;
			}else {
				System.out.println(ch[i] + " : "+count);
				count=1;
			}
		}
		System.out.println(ch[ch.length-1] +" : "+count );
		
	}

}
