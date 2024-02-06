package pattern;

public class P11 {

	public static void main(String[] args) {
		int num=5;
		
		for(int i=0;i<num;i++) {
			int n=0;
			for(int j=0;j<num;j++) {
				if(i>=j) {
					
					System.out.print(i +" ");
				}else {
					System.out.print("  ");
				}
			}
			System.out.println();
		}
		
	}
}
