package classs;

public class Bicycle {

	int candance;
	int speed;
	int gear;
	//getters
	public int getCandance() {
		return candance;
	}
	public int getSpeed() {
		return speed;
	}
	public int getGear() {
		return gear;
	}
	
	//setters
	
	public void setCandance(int candance) {
		this.candance=candance;
	}
	public void setSpeed(int speed) {
		this.speed=speed;
	}
	
	public void setGear(int gear) {
		this.gear=gear;
	}
	
	public void allDeatils() {
		System.out.println("candance :"+candance +" "+ "speed :" +speed +" "+"gear : "+gear );
	}
}	
