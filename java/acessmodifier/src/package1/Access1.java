package package1;

public class Access1 {
	
//	default
	/*
	 * Default access modifier visiblity with in the pacakage */
	int a=10;
	
	void hours(){
		System.out.println("24 hours");
	}
	
/*
 * Private
 * 
 * private member can be accessed with in the class
 * */
	
	private int minutes=10;
	
	private int getMinutes() {
		return minutes;
	}
	
	
/*public
 * 
 * public members means we can access any where
 * 
 * */	
	
	
	public int sec=49;
	
	
	
	public int seconds() {
		return sec;
	}
	
	
	
	
	
/*protected
 * 
 * 
 * protected can access within the package and sub class
 * */	
	
	protected int n1=90;
	
	
	
	
	
}
