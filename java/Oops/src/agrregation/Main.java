package agrregation;

public class Main {

	public static void main(String[] args) {
		
		School sh=new School(1, "Govt Schhol");
		
		System.out.println(sh.sc_id);
		System.out.println(sh.sc_name);
		
		System.out.println("*******************************");
		
		
		
		sh.getStudent("vijay", 23, "o+ve");
		System.out.println(sh.s.name);
		System.out.println(sh.s.age);
		System.out.println(sh.s.bloodGroup);
	}
}
