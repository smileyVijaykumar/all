package nestedForLoop;

public class NestedForLoop {
	
	public static void main(String[] args) {
		
		for(int i=0;i<5;i++) {
			System.out.println("Outside Very cooling");
		}
		System.out.println("*************");
		for(int i=0;i<5;i++) {
			System.out.println(i);
		}
		System.out.println("*************");
		String [] arr= {"red","green","blue"};
		
		String res1=arr[0];
		String res2=arr[1];
		String res3=arr[2];
		
		System.out.println(res1);
		System.out.println(res2);
		System.out.println(res3);
		System.out.println("*************");
		for(int i=0;i<arr.length;i++) {
			System.out.println(arr[i]);
	}
		System.out.println("*************");
		
//2d array
		
		String [][] famousColor= {{"red","green","blue","purple"},
									{"yellow","orange","pink","sandle"}
		};
		
		
		for(int i=0;i<2;i++) {
			for(int j=0;j<4;j++) {
				System.out.println(famousColor[i][j]);
			}
		}
		
		System.out.println("*************");
		
		for(int i=0;i<5;i++) {
			for(int j=0;j<10;j++) {
				System.out.println("i :"+i +" j : "+ j);
			}
		}
		
		
		
		
		
		
		
		
		
		
	}

}
