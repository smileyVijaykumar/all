package string;

public class CountTheNumbers {
	public static void main(String[] args) {
		 String str="Hi How Are You?";
		 
		 char []ch=str.toCharArray();
		 int w_count=0,u_count=0,l_count=0,s_count=0;
		 
		 for (int i = 0; i < ch.length; i++) {
			if(ch[i] == ' ') {
				w_count++;
			}else if (ch[i]>='A' && ch[i]<='Z') {
				u_count++;
			}else if (ch[i]>='a'&& ch[i]<='z') {
				l_count++;
			}else {
				s_count++;
			}
			
		}
		 
		 System.out.println(w_count+1);
		 System.out.println(u_count);
		 System.out.println(l_count);
		 System.out.println(s_count);
	}
}
