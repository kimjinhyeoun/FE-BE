package homework.oneday;

import java.util.Scanner;

public class Nine2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int a, b, c, d;
        
        System.out.print("a 숫자 : ");
        a = sc.nextInt();
        System.out.printf("b 숫자 : ");
        b = sc.nextInt();
        System.out.printf("c 숫자 : ");
        c = sc.nextInt();
        System.out.printf("d 숫자 : ");
        d = sc.nextInt();
        
        if(a+b > c+d) {
        	System.out.println("True");
        }else {
        	System.out.println("False");
        }
	}

}
