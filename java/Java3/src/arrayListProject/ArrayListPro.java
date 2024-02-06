package arrayListProject;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListPro {
	public static void main(String[] args) {
		
		String [] fruits=new String[4];
		fruits[0] = "Apple";
		fruits[1] = "Mango";
		fruits[2] = "Stawbery";
		fruits[3] = "WaterMelon";
		
		System.out.println(Arrays.toString(fruits));
		
		ArrayList fruitList=new ArrayList();
		
		fruitList.add("Apple");
		fruitList.add("Mango");
		fruitList.add("Stawbery");
		fruitList.add("WaterMelon");
		
		fruitList.remove("WaterMelon");
//		fruitList.clear();
		
		System.out.println(fruitList.contains("Apple"));
		
		System.out.println(fruitList);
	}

}
