package pattern;

public class P6 {
	// A B C D E
	// 1 2 3 4 5
	// E D C B A
	// 6 7 8 9 10
	// A B C D E
	
	public static void main(String[] args) {
		int num=5;
		boolean b=false;
		
		int n=1;
		int i=0;
		while(i<num) {
			char ch='A';
			char ch1='E';
			for(int j=0;j<num;j++) {
				if (i%2==0) {
					System.out.print(ch++ +" ");
				}
				else {
					System.out.print(n++ +" ");
			}
			
			}
			System.out.println();
			i++;
		}
		
	}
	}


