package string;


public class S1 {
	public static void main(String[] args) {
		
		//i/p:hi how are you
		//o/p:uyo era woh ih
		
		String s="hi how are you?";
		
		String [] res=s.split(" ");
		
		
		String ans=" ";
		
		for(int i=res.length-1;i>=0;i--) {
			ans= ans+ rev(res[i]);
		}
		
		System.out.println(ans);
		
		
		
		
		
		
	}
	
	public static String rev(String s) {
		
		String rev=" ";
		
		for(int i=s.length()-1;i>=0;i--) {
			rev+=s.charAt(i);
		}
		return rev;
	}
}
