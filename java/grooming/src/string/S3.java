package string;

public class S3 {

	public static void main(String[] args) {
		
		String str = "Hello";
		String res=" ";
		char [] ch= str.toCharArray();
		
		for(int i=0;i<ch.length;i++) {
			int count=1;
//			if(ch[i] != ' ') {
//				res+=ch[i]+" : ";
//			}
			for(int j=i+1;j<ch.length;j++) {
				if(ch[i]==ch[j]) {
					count++;
					ch[j]=' ';
				}
			}
			if(ch[i] != ' ') {
				res+=ch[i] +" : "+count+" ,";
			}
		}
		System.out.println(res);
		
		
	}
	
}
