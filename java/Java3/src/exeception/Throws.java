package exeception;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

;

public class Throws {
	public static void main(String[] args)  {
//		try {
//		FileReader f=new FileReader("file.txt");
//		}catch (FileNotFoundException e) {
//			System.out.println("Exception handled");
//		}
		
//		int [] a=new int[5];
//		
//		a[6]=10;
		
		
	}
	
	public static void m1() throws IOException {
		FileWriter fileWriter=new FileWriter("txt.file");
	}
}
