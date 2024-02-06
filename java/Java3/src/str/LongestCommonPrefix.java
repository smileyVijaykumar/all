package str;

public class LongestCommonPrefix {
    public static void main(String[] args) {
        String[] arr = {"geeksforgeeks", "geeks", "geek", "geezer"};
        String commonPrefix = findLongestCommonPrefix(arr);
        System.out.println(commonPrefix);
    }

    public static String findLongestCommonPrefix(String[] arr) {
        if (arr == null || arr.length == 0) {
            return "";
        }
        
        // Take the first string as the initial common prefix
        String prefix = arr[0];

        // Iterate through the remaining strings
        for (int i = 1; i < arr.length; i++) {
            // Compare each character of the current string with the corresponding character of the prefix
            int j = 0;
            while (j < prefix.length() && j < arr[i].length() && prefix.charAt(j) == arr[i].charAt(j)) {
                j++;
            }

            // Update the prefix to be the common part
            prefix = prefix.substring(0, j);

            // If the prefix becomes empty, there is no common prefix
            if (prefix.isEmpty()) {
                break;
            } 
        }

        return prefix;
    }
}

