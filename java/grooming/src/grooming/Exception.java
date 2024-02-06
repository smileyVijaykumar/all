package grooming;

public class Exception {

	public static void main(String[] args) {
		
		try {
			int []a= {1,2,3,4,5};
			for(int i=1;i<a.length;i++) {
				System.out.println(a[i]);
			}
		}catch (ArrayIndexOutOfBoundsException e) {
			// TODO: handle exception
		}finally {
			
		}
	}
}
