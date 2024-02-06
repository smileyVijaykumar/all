package polymorphismConstructoroverloading;

public class Demo {

	Demo(){
		System.out.println("default const");
	}
	Demo(int a){
		System.out.println(a);
	}
	Demo(double b){
		System.out.println(b);
	}
	
	public static void main(String[] args) {
		
		Demo demo=new Demo();
		Demo demo2=new Demo(10);
		Demo demo3 =new Demo(1.76);
	}
}
