package supercall;

public class Main {
	
	public static void main(String[] args) {
//		Dog dog =new Dog("black","more Honest","Chennai");
//		
//		dog.detailsOfDog();
		
		Animal animal=new Dog("black","more Honest","Chennai");
		
		Dog dog=(Dog)animal;
		dog.detailsOfDog();
	
		
		Cat cat=new Cat("White","honest","Trl");
		cat.detailsOfCat();
		
		
		
		
	}

}
