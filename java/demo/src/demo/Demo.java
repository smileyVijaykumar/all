package demo;

public class Demo {

	public static void main(String[] args) {
		
		int a=0000012345;
		
		int i=0;
		int count=1;
		
		while(a>0) {
			
			count++;
			
			a/=10;
		}
		System.out.println(count);
	}
}
