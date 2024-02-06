package finalfun;

public class FinalVariable {

//	final static int MAX=10;
	final static  int MAX;
	
	static {
		MAX=10;
	}
	
	
	public static void main(String[] args) {
		FinalVariable fv=new FinalVariable();
		
		System.out.println(fv.MAX);
	}
}
