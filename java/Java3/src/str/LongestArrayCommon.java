package str;

public class LongestArrayCommon {

	public static void main(String[] args) {
		String [] arr = {"apple","app","api"};
		
		String ans=LongestStringCommon(arr);
		System.out.println(ans);
		
	}
	
	public static String LongestStringCommon(String[] s) {
		
//		if(s.length == 0 && s==null)
//			return "";
		 String first=s[0];
		
		for(int i=0;i<s.length;i++) {
//			for(int j=0;j<first.length() && j<s[i].length() && first.charAt(j) && s[i].charAt(j);j++) {
//				
//			}
			
			int j=0;
			while(j<first.length() && j<s[i].length() && first.charAt(j)== s[i].charAt(j)) {
				j++;
			}
			
			first=first.substring(0,j);
			
			if(first.isEmpty()) {
				break;
			}
		}
		return first;
	}
}
