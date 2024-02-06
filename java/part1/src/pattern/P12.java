package pattern;


public class P12 {
	//0 
	//0 1
	//0 1 2
	//0 1 2 3 
	//0 1 2 3 4
	
	public static void main(String[] args) {
		int num=5;
		for(int i=0;i<num;i++) {
			for(int j=0;j<num;j++) {
				if(i>=j) {
					System.out.print(j+" ");
				}
				else {
					System.out.print("  ");
				}
			}
			System.out.println();
		}
	}
}
