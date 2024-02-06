package construction;

public class Shirt {
	
	public String color;
	public char size;
	
	public Shirt() {}
	public Shirt(String color,char size) {
		this.color=color;
		this.size=size;
	}
	
	public void putOn() {
		System.out.println("Shirt  is On");
	}
	public  void takeOff() {
		System.out.println("Shirt is Off ");
	}
	
	public void setColor(String color) {
		this.color=color;
	}
	public void setSize(char size) {
		this.size=size;
	}
}
