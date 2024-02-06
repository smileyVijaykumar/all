package grooming;

public class SwppingUsingSplitmethod {

	public static void main(String[] args) {
		
		String s1="hello";
		String s2="Java";
		
		s1=s1+" "+s2;
		
		String [] res=s1.split(" ");
		
		System.out.println("After Swpping s1:"+res[1]);
		System.out.println("After Swpping s1:"+res[0]);
		
		
	}
}
