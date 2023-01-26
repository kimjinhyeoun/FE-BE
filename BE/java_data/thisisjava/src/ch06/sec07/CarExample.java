package ch06.sec07;

public class CarExample {

	public static void main(String[] args) {
		Car car1 = new Car();   //생성자 호출1
		System.out.println("car1.copany : " + car1.company);
		System.out.println();
		
		Car car2 = new Car("자가용");   //생성자 호출2
		System.out.println("car2.copany : " + car2.company);
		System.out.println("car2.model : " + car2.model);
		System.out.println();
		
		Car car3 = new Car("자가용", "빨강");   //생성자 호출3
		System.out.println("car3.copany : " + car3.company);
		System.out.println("car3.model : " + car3.model);
		System.out.println("car3.color : " + car3.color);
		System.out.println();
		
		Car car4 = new Car("택시", "검정",200);   //생성자 호출4
		System.out.println("car3.copany : " + car4.company);
		System.out.println("car3.model : " + car4.model);
		System.out.println("car3.color : " + car4.color);
		System.out.println("car3.color : " + car4.maxSpeed);
	}
}
