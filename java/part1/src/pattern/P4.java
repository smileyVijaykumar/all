package pattern;

public class P4 {

	// A B C D E
	// 0 1 2 3 4 
	// A B C D E
	// 0 1 2 3 4 
	// A B C D E
	
	public static void main(String[] args) {
		int num=5;
		for(int i=0;i<num;i++) {
			char ch='A';
			for(int j=0;j<num;j++) {
				if(i%2==0) {
					System.out.print(ch++ +" ");
				}else {
					System.out.print(j +" ");
				}
				
			}
			System.out.println();
		}
	}
}
