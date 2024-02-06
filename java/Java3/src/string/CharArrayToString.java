package string;

public class CharArrayToString {
	public static void main(String[] args) {
		char ch[]= {'j','a','v','a'};
		
		String s=new String(ch);
		System.out.println(s);
		char[]ch1=s.toCharArray();
		System.out.println(ch1);
	}
}
