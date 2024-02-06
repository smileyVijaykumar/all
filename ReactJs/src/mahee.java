class p1
{ 
	public static void main(String[]arges) {
	int n=9;
	for (int i=0;i<9;i++) {
		for (int j=0;j<9;j++) {
				if(i==0||i==n/2||i==n-1||j==0&&i<=n/2||j==n-1&&i>=n/2)
					System.out.print("* ");
				else 
					System.out.print(" ");
		}
		}
	}
}