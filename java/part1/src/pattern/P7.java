package pattern;

public class P7 {
	//*
	//**
	//***
	//****
	//*****
	public static void main(String[] args) {
		int num=5;
		
//		for(int i=0;i<num;i++) {
//			for(int j=0;j<num;j++) {
//				if(i>=j) {
//					System.out.print("* ");
//				}
//			}
//			System.out.println();
//		}
		
		for(int i=0;i<num;i++) {
			for (int j=0;i<num;j++) {
				if(i>=j)
				System.out.print("* ");
			}
			System.out.println();
		}
		
		
	}
}