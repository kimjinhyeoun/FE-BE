package hmm;

import java.util.Scanner;

import java.util.Scanner;

public class Hotel {

  private int floor;//층
  private int room;//호
  private String[][] name = new String[3][5];
  private String title;
  Scanner sc = new Scanner(System.in);

  public Hotel() {}
  public Hotel(String name, int year) {}

  public static void main(String[] args) {

    Hotel h = new Hotel();
    h.process();
  }

  public void process() {

    map();

    int sel = 0;

    while(true) {

      try {

        sel = menu();

        if(sel == 9) {
          System.out.println("시스템 종료합니다.");
          System.exit(0);
          break;
        }

        switch(sel) {
          case 1: checkIn(); break;
          case 2: checkOut(); break;
          case 3: map(); break;
          case 4: list(); break;
          default : 
            System.out.println("1 ~ 4 사이의 번호를 입력하세요.");

        }

      }catch (Exception e) { }
    }
  }
  public int menu() {
    System.out.println("*** 호텔 예약 시스템 ***");
    System.out.print("1. 투숙 / 2. 퇴실 / 3. 사용자 투숙상태 / 4. 관리자모드 투숙상태 list / 9. 종료 >>  ");
    int sel = Integer.parseInt(sc.nextLine());
    return sel;
  }

  public void map() {

    System.out.println("\n\t[ " + title + "님의 투숙상태 ]");
    for(int i=0; i<3; i++) {
      for(int j=0; j<5; j++) {
        System.out.print((i+1) + "0" + (j+1) + "\t");
      }
      System.out.println();

      for(int k=0; k<5; k++) {
        if(name[i][k] == null) {
          System.out.print("\t");
          continue;
        }
        System.out.println(name[i][k] + "\t");
      }
      System.out.println("\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ"); // \n꼭넣으세요 
    }
  }

  public void checkIn() {
    System.out.print("몇 층에 투숙 ? >> ");
    floor = Integer.parseInt(sc.nextLine());
    System.out.print("몇 호에 투숙 ? >> ");
    room = Integer.parseInt(sc.nextLine());


    if(name[floor-1][room-1] != null) {
      System.out.println("이미 사용중 입니다.");
    }
    System.out.print("투숙객 이름? >> ");
    title = sc.nextLine();
    name[floor-1][room-1] = title;
    System.out.println("#성공적으로 checkIn 되었습니다!");
  }

  public void checkOut() {
    System.out.print("몇 층에 투숙 ? >> ");
    floor = Integer.parseInt(sc.nextLine());
    System.out.print("몇 호에 투숙 ? >> ");
    room = Integer.parseInt(sc.nextLine());

    if(name[floor-1][room-1] == null) {
      System.out.println("비어있는 방입니다.");
    }
    name[floor-1][room-1] = null;
    System.out.println("#성공적으로 checkOut되었습니다.");
  }

  public void list() {
    System.out.println("\n\t[list]");

    for(int i=0; i<name.length; i++) {
      for(int j=0; j<name[i].length; j++) {
        if(name[i][j] == null) {
          System.out.print(" " + (i+1) + "0" + (j+1) + "호" + "□\t"+"\t");
        }else {
          System.out.print( " " + (i+1) + "0" + (j+1) + "호" +  "■\t" + name[i][j] + '\t');
        }
      }
      System.out.println();

    }
  }

} //class end
