package polymorphism.methodshadowing;

 class Bird {
	
	 static void sing() {
		System.out.println("Singing");
	}
}
 class Eagle extends Bird{
	 public static void sing() {
		System.out.println("twic twic");
	}
 }
 
 


