package ewaweasd;

public class Input extends HotelOpen{
	public void input() { //�Խǿ���
        System.out.print("ȣ�� �����ȣ �Է� >> ");
        num = Integer.parseInt(sc.nextLine());
        if(num < 1 || num > 5) { //num 1~5 ���̰� �ƴ� ��
            System.out.println(num + "��ȣ�� ����� �� �����ϴ�.");
        }else if(room[num-1] == true){ // �Է¹��� ���� �̹� true ���̸� (boolean = 0 : false , 1 : true)
            System.out.println("room [" + num + "] ����Ǿ��ִ� �����Դϴ�.");
        }else{// �Է¹��� ���� false ���̸� ���� ����
            System.out.println("room[" + num + "] ���� ���� ����");
            room[num-1] = true;
        }
        return;
    }
}
