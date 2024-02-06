package staticky;

public class Staticky {
	
	static int a=10;
	
	int c=87;
	
	public static void main(String[] args) {
		int b=90;
		
		b=95;
		
		System.out.println(b);
		System.out.println(a);
		
		Staticky s=new Staticky();
		System.out.println(s.c);
	}

}
