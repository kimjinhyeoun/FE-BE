package ch03.sec08;

public class BitLogicExample {

	public static void main(String[] args) {
		System.out.println("45 & 25 = " + (45 & 25)); // 1 0 1 1 0 1(45)  &  0 1 1 0 0 1(25) = 0 0 1 0 0 1 (9) 둘다 1이여야 1
		System.out.println("45 | 25 = " + (45 | 25)); // 1 0 1 1 0 1(45)  |  0 1 1 0 0 1(25) = 1 1 1 1 0 1 (61) 하나라도 1이면 1
		System.out.println("45 ^ 25 = " + (45 ^ 25)); // 1 0 1 1 0 1(45)  ^  0 1 1 0 0 1(25) = 1 1 0 1 0 0 (52) 같으면 0 다르면 1
		System.out.println("~45 = " + (~45)); // 1의 보수 -45 / 2의 보수 -46
		System.out.println("---------------------");
		
		byte receiveData = -128;
		
		//방법1: 비트 논리곱 연산으로 Unsigned 정수 얻기
		int unsignedInt1 = receiveData & 255;
		System.out.println(unsignedInt1);
		
		//방법2: 자바 API를 이용해서 Unsigned 정수 얻기
		int unsignedInt2 = Byte.toUnsignedInt(receiveData);
		System.out.println(unsignedInt2);
		
		int test = 136;
		byte btest = (byte) test;
		System.out.println(btest);

	}

}
