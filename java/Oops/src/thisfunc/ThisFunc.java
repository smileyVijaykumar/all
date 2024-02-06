package thisfunc;

public class ThisFunc {
	
//	int a;
//	int b;
	
	String name;
	String address;
	
	
	public  void setData(String name,String address) {
//		this.a=a;
//		this.b=b;
//		ThisFunc t=new ThisFunc();
////		t.address=address;
		this.name=name;
		this.address=address;
	}
	
	public static void main(String[] args) {
	
		
		ThisFunc t=new ThisFunc();
		t.setData("vijay","trl");
		System.out.println(t.name);
		System.out.println(t.address);
		
		
	}

}
