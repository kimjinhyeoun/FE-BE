package com.cos.blog.model;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
//ORM -> Java(다른언어) Object -> 테이블 매핑해주는 기술
 @Entity     //User 클래스가 MySQL에 테이블이 생성된다.
//@DynamicInsert  //insert시에 null인 필드를 제외시켜 준다.
public class User {

	@Id //Primary Key
	@GeneratedValue(strategy=GenerationType.IDENTITY) //프로젝트에서 연결된 DB의 넘버링 전략을 따라감.
	private int id; //시퀀스, auto_increment      //SEQUENCE, TABLE, AUTO 등이 있음 
	
	@Column(nullable=false, length=30, unique=true) // nullable=false - 빈칸허용안함 /unique=true - 중복하면 안된다 /
	private String username; //아이디
	
	@Column(nullable=false, length=100) //123456=>해시(비밀번호 암호화)
	private String password;
	
	@Column(nullable=false, length=50)
	private String email; //myEMail, my_email
	
	//DB는 RoleType이라는 것이 없다.
	@Enumerated(EnumType.STRING)
    private RoleType role; //Enum을 쓰는게 좋다.(model.RoleType) // ADMIN, USER
	
	
	//내가 직접 시간을 넣으려면 Timestamp.valueOf(LocalDateTime.now())
	@CreationTimestamp //시간이 자동 입력
	private Timestamp createDate;
}
