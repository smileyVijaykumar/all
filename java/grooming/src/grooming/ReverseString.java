package grooming;

public class ReverseString {
	
//	public static void main(String[] args) {
//		
//		String str="HELLO";
//		String res="";
//		
//		int i=str.length()-1;
//		while(i>=0) {
//			res=res+str.charAt(i);
//			i--;
//		}
//		System.out.println(res);
//	}
	
//	public static void main(String[] args) {
//		
//		String name="abcdef";
//		
//		String res="";
//		
//		for(int i=0;i<name.length();i++) {
//			res=res+name.charAt(i);
//			System.out.print(res);
//		}
//	}
	
	public static void main(String[] args) {
		
		int num=4;
		
//		for(int i=0;i<num;i++) {
//			for(int j=0;j<num;j++) {
//				if(i+j>num-1 || i>=j) {
//					System.out.print("* ");
//				}else {
//					System.out.println(" ");
//				}
//			}
//		}
		
		
		for(int i=0;i<num;i++) {
			if(i%2==0) {
				System.out.println(" * * ");
			}else {
				System.out.println(" * ");
			}
			
		}
	}

}
