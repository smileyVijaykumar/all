package pattern;

public class P8 {
	
	//*****
	//****
	//***
	//**
	//*
	public static void main(String[] args) {
		int num=5;
		
		for(int i=0;i<num;i++) {
			for(int j=0;j<num;j++) {
				if(i+j<=num-1)
				System.out.print("* ");
				
			}
			System.out.println();	
		}
	}
}
