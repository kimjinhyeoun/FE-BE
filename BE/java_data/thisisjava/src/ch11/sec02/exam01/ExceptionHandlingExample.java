package ch11.sec02.exam01;

public class ExceptionHandlingExample {

	public static void main(String[] args) {
		try{
			Class.forName("java.lang.String");
			System.out.println("java.lang.String 클래스가 존재합니다.");
		}catch(ClassNotFoundException e){   //catch는 여러번 사용 가능
			e.printStackTrace();
		}
	
		System.out.println();
	
		try{
			Class.forName("java.lang.String2");
			System.out.println("java.lang.String2 클래스가 존재합니다.");
		}catch(ClassNotFoundException e){   //catch는 여러번 사용 가능
			System.out.println("클래스를 발견하지 못했습니다.");
			e.printStackTrace();
			
		}catch(Exception e){
			System.out.println("오류가 발생했습니다.");
		}
	}
}
