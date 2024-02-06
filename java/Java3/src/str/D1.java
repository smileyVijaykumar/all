package str;

public class D1 {
	public static void main(String[] args) {
		
		String str="aekAMbfCzd"; String ans="";
		
		char [] ch=str.toCharArray();
		
		String upc="",lwc="";
		
		for(int index=0;index<ch.length;index++) {
			if(ch[index]>='A' && ch[index]<'z') {
				upc+=ch[index];
			}else if(ch[index]>='a' && ch[index]<='z') {
				lwc+=ch[index];
			}
		}
		
		
		for(int i =0,m=0,n=0;i <str.length(); i++) {
			if(str.charAt(i)>='A' && str.charAt(i)<='Z') {
				
			}
		}
		System.out.println(ans);
	}
}
