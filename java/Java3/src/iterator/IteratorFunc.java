package iterator;

import java.util.ArrayList;
import java.util.Iterator;

public class IteratorFunc {

	public static void main(String[] args) {
		
		ArrayList<Integer> nums = new ArrayList<Integer>();
		
		nums.add(100);
		nums.add(101);
		nums.add(99);
		nums.add(78);
		
		Iterator<Integer> i=nums.iterator();
		
		while(i.hasNext()) {
			int it=i.next();
			
			if(it>100) {
				i.remove();
			}
		}
		
		
	}
}
