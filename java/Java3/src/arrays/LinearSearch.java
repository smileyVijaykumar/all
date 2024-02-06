package arrays;

public class LinearSearch {
	public static void main(String[] args) {
		int arr[]= {1,2,3,4,5};
		
		int target=3;
		String res ="Not present";
		
		
		for(int i=0;i<arr.length;i++) {
			if (target==arr[i]) {
				res ="present";
				break;
			}
			
		}
		System.out.println(res);
	}

}
