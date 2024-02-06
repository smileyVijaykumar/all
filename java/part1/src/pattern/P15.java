package pattern;

public class P15 {

	public static void main(String[] args) {
		int num=9;
		
		for(int i=0;i<num;i++) {
			for(int j=0;j<num;j++) {
				if(i+j>=num-1 && i<=j) {
					System.out.print("* ");
				}else {
					System.out.print("  ");
				}
			}
			System.out.println();
		}
	}
}
