package str;

public class Demo {
	
	public static void main(String[] args) {
		String str="i.like.program.very.much";
		
//		System.out.println(reversedString(str));
		
		String ans=reversedString(str);
		System.out.println(ans);
		
		
	}
	
	public static String reversedString(String s) {
		
		String[] words=s.split("\\.");
		
		String res=" ";
		
		for(int i=words.length-1;i>=0;i--) {
			res=res+words[i]+".";
		}
		return res;
	}
	
}

