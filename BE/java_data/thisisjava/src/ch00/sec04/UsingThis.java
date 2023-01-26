package ch00.sec04;

public class UsingThis {
	public int outterField = 10;
	
	class Inner{
		int innerFiled = 20;
		
		void method() {
			//람다식
			MyFunctionInterface fi = () ->{
				//클래스명 this를 사용
				System.out.println("outterFiled : " + outterField);
				System.out.println("outterFiled : " + UsingThis.this.outterField+"\n");
				
				//람다식 내부에서 this는 inner 객체를 참조
				System.out.println("innerFiled : " + innerFiled);
				System.out.println("innerFiled : " + this.innerFiled+"\n"); 
			};
			fi.method();
		}
	}
}
