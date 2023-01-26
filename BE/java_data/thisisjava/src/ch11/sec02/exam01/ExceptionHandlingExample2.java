package ch11.sec02.exam01;

public class ExceptionHandlingExample2 {

	public static void printLength(String data) {
			try{
			
				int result = data.length();
				System.out.println("문자 수 : "+ result);
			
			}catch(Exception e){   //catch는 여러번 사용 가능
				System.out.println(e.getMessage());
//				System.out.println(e.toString()); //이렇게 총 세가지 가능
//				e.printStackTrace();
			}finally {
				System.out.println("[마무리 실행]\n");
			}
	}
	
	public static void main(String[] args) {
		System.out.println("[프로그램시작]\n");
		printLength("ThisIsJava");
		printLength(null);
		System.out.println("[프로그램종료]");
	}
}
