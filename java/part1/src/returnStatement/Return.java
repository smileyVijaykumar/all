package returnStatement;



public class Return {
	
	
	public static void main(String[] args) {
		
		textAMessage();
		int res=add(2,9);
		System.out.println(res);
		String str=shouting("my mom is Shouting punnished me");
		System.out.println(str);
	}
	
	public static void textAMessage() {
		System.out.println("He is tyyping a message");
	}
	
	public static int add(int a,int b) {
		
		return a+b;
	}
	
	public static String shouting(String s) {
		return s.toUpperCase();
	}
	
	

}
