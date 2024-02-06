package construction;

public class Main {
	
	public static void main(String[] args) {
		Shirt s=new Shirt("White",'M');
		
//		s.setColor("Red");
//		s.setSize('M');
		
		System.out.println(s.color);
		System.out.println(s.size);
		s.putOn();
	}
}
