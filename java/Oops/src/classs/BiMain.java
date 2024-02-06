package classs;

public class BiMain {
	
	public static void main(String[] args) {
		Bicycle bi=new Bicycle();
		Bicycle bi1 = new Bicycle();
		
		bi.setCandance(50);
		bi.setSpeed(100);
		bi.setGear(4);
		
		
		System.out.println("Candance     : "+	bi.getCandance());
		System.out.println("Gear         :  "+bi.getGear());
		System.out.println("speed        : "+bi.getSpeed());
	
		
	
		
		bi.allDeatils();
		
		
		System.out.println("*****************************");
		
		
		bi1.setCandance(40);
		bi1.setGear(4);
		bi1.setSpeed(55);
		
		System.out.println(	"Candance       : "+bi1.getCandance());
		System.out.println( "Gear           :  "+bi1.getGear());
		System.out.println( "speed          : "+bi1.getSpeed());
		
		
		bi1.allDeatils();
		
		
	}

}
