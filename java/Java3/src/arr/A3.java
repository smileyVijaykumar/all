package arr;

import arrays.A;

public class A3 {

	public static void main(String[] args) {
		
		int [] arr = {1,2,3,4,5};
		
		for(int i = 0;i<arr.length;i++){
			if(i%2==1) {
				System.out.println("even index value : "+arr[i]);
			}
		}
	
		for(int i = 0;i<arr.length;i++) {
			if(i%2==0) {
				System.out.println("even index value : "+arr[i]);
			}
		}
		
		for (int i = 0;i<arr.length;i++) {
			if(arr[i] %2 ==1)
				System.out.println("The odd value is : "+ arr[i]);
		}
		
		for(int i = 0; i<arr.length;i++) {
			if(arr[i] % 2==0) {
				System.out.println("The Even value is : "+arr[i]);
			}
		}
		
	}
}
