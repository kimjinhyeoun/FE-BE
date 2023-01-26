package homework.oneday;

public class Nine5 {

	public static void main(String[] args) {
		String[] unit = {"   일번","   이번","   삼번","   사번","   오번"};
		int[][]score={ 
                {96,85,30},
                {40,95,65},
                {70,50,30},
                {60,79,50},
                {90,20,40}
        };
        double[] avg = new double[score.length]; //평균
        int[][] data = new int[score.length][4]; //0총점1최대2최소3등수
                            
        System.out.println("순번 이름\t국어\t영어\t수학\t총점\t평균\t등수");
        for(int i=0;i<score.length;i++){
            for(int j=0;j<score[i].length;j++){
                data[i][0]+=score[i][j];
            }
            avg[i] = data[i][0]/(double)score[i].length;
            data[i][3] = 1; // 등수 초기화 
        }
        //등수부여
        for (int k = 0; k < data.length; k++) {
            for (int i = 0; i < data.length; i++) {
                if (data[k][0] < data[i][0]) {
                    data[k][3]++;
                }
            }
        }
        for(int i=0;i<score.length;i++){
        	for(int k = 0; i< unit.length; i++) {
            System.out.print(i+1+unit[i]+"\t"); //순번
            
            for(int j=0;j<score[i].length;j++){
                System.out.print(score[i][j]+"\t"); //과목
            }
            System.out.print(data[i][0]+"\t"); // 총점
            System.out.printf("%.1f\t",avg[i]); // 평균
            System.out.print(data[i][3]+"\t"); // 등수
            System.out.println();
           }
        }
	}
}