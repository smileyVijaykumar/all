package interfacefun;

 interface WaterBotle{
//	WaterBotle(){
//		
//	}
	 /*
	  * interface cant have constructor
	  * */
	 static int a=10;//public static final
	 
	 void fill();
	 
	 public static void m1() {
		 System.out.println("hi i am m1 method");
	 }
}

public class Interface implements WaterBotle {
	
	@Override
	public void fill() {
		System.out.println("it is filled!");
		
	}

	
}
