package com.cos.blog.dto;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.cos.blog.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResponseDto<T> {
	HttpStatus status;
	T data;
	@PostMapping("/api/user")
	public ResponseDto<Integer>save(@RequestBody User user) {
		System.out.println("UserApiController:save호출됨");
		return new ResponseDto<Integer>(HttpStatus.OK,1);		
	}
}
