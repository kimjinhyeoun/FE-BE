package ch02.sec08;

public class LimitVar {
	
	public static void main(String args[]) {
		int a = 1000000;
		int b = 1000000;
		long c = 0;
		
		c = (long)a*b;
		
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
	}
}
