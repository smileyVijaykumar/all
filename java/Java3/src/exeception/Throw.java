package exeception;

import java.io.FileNotFoundException;

public class Throw {

	public static void main(String[] args) {
		
//		throw new FileNotFoundException();
		m1(7);
	}
	
	
	public static void m1(int i) {
		 
		int [] a = new int [5];
		if(i>5) {
		throw new ArrayIndexOutOfBoundsException("hey don't use high range of value");
		}
	}
}
