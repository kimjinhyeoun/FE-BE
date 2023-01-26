package homework.oneday;

import java.util.Scanner;

public class Six3 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        
        int a, b, c;
        
        System.out.print("숫자 : ");
        a = sc.nextInt();
        System.out.printf("왼쪽 이동 횟수 : ");
        b = sc.nextInt();
        System.out.printf("오른쪽 이동 횟수 : ");
        c = sc.nextInt();
        
        String num = Integer.toBinaryString(a);
        String rNum = Integer.toBinaryString(a>>b);
        String lNum = Integer.toBinaryString(a<<c);

        System.out.println("값 : " + num);
        System.out.println("오른쪽 :" + rNum);
        System.out.println("왼쪽 : " + lNum);
    }
}
