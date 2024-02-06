package string;

public class A {

	public static void main(String[] args) {
		char[] ch= {'a','b','c','d','e','f'};
		String res =converToString(ch);
		System.out.println(res);
	}
	
	public static String converToString(char[]c) {
		String res=""; 
		for (int i = 0; i < c.length; i++) {
			res+=c[i];
		}
		return res;
	}
	
	
	
}
