package string;

public class Demo {
	public static void main(String[] args) {
		String s="hello" ,res=" ";
		
		char ch[]=s.toCharArray();
		int count=1;
		
		for(int i=0; i<ch.length;i++) {
			count=1;
			if (ch[i] != ' ') {
				res+=ch[i]+" :";
			
			}
			for (int j = i+1; j < ch.length; j++) {
				if (ch[i]==ch[j]) {
					count++;
					ch[j] =' ';
					
//					System.out.println(ch[i]);
					
				}	
			}
			if (ch[i] != ' ') {
				res+=count +", ";
			}
		}
		System.out.println(res);
		
	}
}
