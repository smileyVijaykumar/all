package arrayListProject;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;

public class IteratorFunc {

	public static void main(String[] args) {
		
		ArrayList<String> food=new ArrayList<String>();
		
		food.add("Biriyani");
		food.add("Pizza");
		food.add("Burger");
		
		Iterator<String> f1=food.iterator();
		
//		System.out.println(f1.next());	
//		System.out.println(f1.next());	
//		System.out.println(f1.next());	
//		System.out.println(f1.hasNext());
		
		 while(f1.hasNext()) {
			 System.out.println(f1.next());
		 }
		 
		 
		 
		 HashSet<Number> num = new HashSet<Number>();
		 
		 num.add(1);
		 num.add(2);
		 num.add(3);
		 
//		 System.out.println(num);
		 
		 Iterator<Number> i=num.iterator();
		 
		 while (i.hasNext()) {
			System.out.println(i.next());
			
		}
		 
		 
		 
	}
	
}
