package str;

import java.util.Arrays;

public class ReverseWordsWithDots {
    public static void main(String[] args) {
        String s = "i.like.this.program.very.much";
        String reversed = reverseWordsWithDots(s);
        System.out.println(reversed);
    }

    public static String reverseWordsWithDots(String original) {
        String[] words = original.split("\\.");
        System.out.println(Arrays.toString(words));
        StringBuilder reversedString = new StringBuilder();
//        String reversedString=" ";

        for (int i = words.length - 1; i >= 0; i--) {
//            reversedString.append(words[i]).append(".");
        	
        	reversedString.append(words[i]).append(".");
        }

        return reversedString.toString().trim();
    }
}

