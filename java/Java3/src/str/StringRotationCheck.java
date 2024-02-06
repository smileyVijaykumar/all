package str;
public class StringRotationCheck {
    public static void main(String[] args) {
        // Test cases
        System.out.println(areRotations("abc", "bca"));        // Output: true
        System.out.println(areRotations("abc", "abccba"));     // Output: true
        System.out.println(areRotations("abcd", "abcbacbc"));  // Output: false
    }

    public static boolean areRotations(String s1, String s2) {
        // Check if both strings have the same length and are not empty
        if (s1.length() != s2.length() || s1.length() == 0) {
            return false;
        }

        // Concatenate the first string with itself
        String concatenated = s1 + s1;

        // Check if the second string is a substring of the concatenated string
        return concatenated.contains(s2);
    }
}
