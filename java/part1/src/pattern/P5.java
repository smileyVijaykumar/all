package pattern;

public class P5 {
	//0 A 0 A 0
	//1 B 1 B 1
	//2 C 2 C 2
	//3 D 3 D 3
	//4 E 4 E 4
	
	
	public static void main(String[] args) {
		
		int num=5;
		char ch='A';
		for(int i=0;i<num;i++) {
			for(int j=0;j<num;j++){
				if(j%2==0) {
					System.out.print(i + " ");
				}
				else {
					System.out.print(ch+" ");
				}
			}
			ch++;
			System.out.println();
		}
	}
}
