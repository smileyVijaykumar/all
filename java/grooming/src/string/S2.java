package string;

public class S2 {

	public static void main(String[] args) {
	
		String str="I Love My India?";
		  
		char [] ch = str.toCharArray();
		
		int count_w=0,count_u=0,count_l=0,count_s=0;
		
		for(int i=0;i<ch.length;i++) {
			if(ch[i] == ' ') {
				count_w++;
			}
			else if(ch[i]>='A' && ch[i]<='Z') {
				count_u++;
			}
			else if(ch[i]>='a' && ch[i]<='z') {
				count_l++;
			}else {
				count_s++;
			}
		}
		System.out.println("Count of Words              : "+count_w);
		System.out.println("Count of UpperCase          : "+count_u);
		System.out.println("Count of LowerCase          : "+count_l);
		System.out.println("Count of specialCharacter   : "+count_s);
		
		
		
	}
}
