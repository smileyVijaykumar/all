package grooming;

public class CountNumberOfArray {

	public static void main(String[] args) {
		
		int [] a = {1,3,2,2,3,4,3};
		int count;
		
		for(int i=0;i<a.length;i++) {
			count=1;
			for(int j=i+1;j<a.length;j++) {
				if(a[i] == a[j]) {
					count++;
					a[j]=' ';
				}
				
			}
			if (a[i] !=' ' && count >1) {
				System.out.println(a[i] +"--"+count);
			}
		}
	}
}
