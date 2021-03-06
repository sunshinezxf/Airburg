package model.utils;

import java.util.Random;

/**
 * Created by sunshine on 4/18/16.
 */
public class IDGenerator {
    private static final Random seed = new Random();
    private static final char[] code = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".toCharArray();

    private static int num(int min, int max) {
        return min + seed.nextInt(max - min);
    }

    public static char gen() {
        return code[num(0, code.length)];
    }

    public static String generate(String prefix) {
        char[] temp = new char[6];
        for (int i = 0; i < temp.length; i++) {
            temp[i] = gen();
        }
        StringBuffer result = new StringBuffer();
        Random random = new Random();
        result.append(prefix.toUpperCase());
        result.append(new String(temp));
        result.append(random.nextInt(99));
        return result.toString();
    }

    public static String generate() {
        char[] temp = new char[8];
        for (int i = 0; i < temp.length; i++) {
            temp[i] = gen();
        }
        StringBuffer result = new StringBuffer();
        Random random = new Random();
        result.append(new String(temp));
        result.append(random.nextInt(99));
        return result.toString();
    }
}
