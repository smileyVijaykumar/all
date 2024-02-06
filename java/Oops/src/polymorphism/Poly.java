package polymorphism;


class Bird{
	public void sing() {
		System.out.println("kukoo kukoo ");
	}
}
class Eagle extends Bird{
	public void sing() {
		System.out.println("ooo ");
	}
}
public class Poly {
	public static void main(String[] args) {
		
		Eagle b=new Eagle();
		
		b.sing();
	}
	

}
