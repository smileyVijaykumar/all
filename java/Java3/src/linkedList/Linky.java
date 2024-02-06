package linkedList;

import java.util.LinkedList;

public class Linky {

	public static void main(String[] args) {
		
		LinkedList<Number> num = new LinkedList<Number>();
		
		num.add(1);
		num.add(2);
		num.add(3);
		num.add(null);
		
//		System.out.println(num);
		
		num.add(1, 4);
		
		System.out.println(num);
		
		LinkedList<Number> num2 = new LinkedList<Number>();
		
		num2.add(1);
		num2.add(2);
		num2.add(3);
		
// 	 Boolean b=num.addAll(num2);
// 	 System.out.println(b);
		
//		num2.clear();
		
		System.out.println(num2.addAll(num));
		
		System.out.println(num2);
		
		
 	 
 	 
	}
}
