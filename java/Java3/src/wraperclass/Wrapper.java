package wraperclass;

public class Wrapper {
	
	//valueOf()
	public static void main(String[] args) {
		
		//boxing 
		
		int a = 100;
		
		Integer a1=Integer.valueOf(a);
		
		System.out.println( a1);
		
		//unboxing
		
		Integer b=900;
		
		int a2=a1.intValue();
		System.out.println(a2);
		
		
	}

}
