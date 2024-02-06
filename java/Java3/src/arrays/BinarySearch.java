package arrays;

public class BinarySearch {
	
	public static void main(String[] args) {
		int arr[]= {11,22,33,44,55,66,77};
		
		int lower_index=0,higher_index=arr.length-1,mid;
		
		
		int target=33;
		String result="Not Present";
		
	
		
		 while(lower_index<=higher_index) {
			 mid=(lower_index+higher_index)/2;
			 if (arr[mid]==target) {
				result ="present";
				break;
			}
			 else if(arr[mid]<target) {
				 lower_index=mid-1;
				
			}
			 else if(arr[mid]>target) {
				higher_index=mid+1;
			}
		 }
		 System.out.println(result);
		
		
	}
	
	
	
	
	
	

}
