package abstraction;

 abstract class Dog {
	 int a;
	Dog(int a){
		this.a=a;		
	}
	static {
		
	}
	{
		
	}
	public static void bark() {
		System.out.println("bark bark!");
	}
	
	public  abstract void poop() ;
}
 
 class chihuahua extends Dog{
	
	 
	 chihuahua() {
		super(10);
		// TODO Auto-generated constructor stub
	}

	public  void poop() {
		 System.out.println("dog is pooped!");
	 }
 }
 


