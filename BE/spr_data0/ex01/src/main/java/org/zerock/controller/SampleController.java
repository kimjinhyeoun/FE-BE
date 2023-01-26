package org.zerock.controller;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.zerock.domain.SampleDTO;

import lombok.extern.log4j.Log4j;

@Controller
@RequestMapping("/sample/*")
@Log4j
public class SampleController {
	@RequestMapping(value = "/basic", method= {RequestMethod.GET,
			RequestMethod.POST})
	public void basicGet() {
		log.info("basic get....................");
	}
	
	
	@GetMapping("/basicOnlyGet")
	public void basicGet2() {
		log.info("basic get only get....................");
	}
	
	
	@GetMapping("/ex01")
	public String ex01(SampleDTO dto) {
		log.info("" + dto);
		return "ex01";
	}
	
	
	@GetMapping("/ex02")
	public String ex02(@RequestParam("name") String name,
			@RequestParam("age") int age) {
		log.info("name : " + name);
		log.info("age : " + age);
		return "ex02";
	}
	
	
	@GetMapping("/ex02List")
	public String ex02List(@RequestParam("ids") ArrayList<String> ids){
		log.info("ids : " + ids);
		return "ex02List";
	}
	
	
	@GetMapping("/ex02Array")
	public String ex02Array(@RequestParam("ids") String[] ids){
		
		log.info("array ids : " + Arrays.toString(ids));
		return "ex02Array";
	}
	
	@GetMapping("/ex04")
	public String ex04(SampleDTO dto,@ModelAttribute("page") int page) {
		log.info("dto:" + dto);
		log.info("page:" + dto);
		return "/sample/ex04";
	}
	
	@GetMapping("/re1")
	public String re1() {
		log.info("re1..............");
		return "redirect:/sample/re2";
	}
	
	@GetMapping("/re2")
	public void re2() {
		log.info("re2..............");
		
	}
	
	@GetMapping("/ex06")
	public @ResponseBody SampleDTO ex06() {
		log.info("/ex06.........");
		SampleDTO dto = new SampleDTO();
		dto.setAge(29);
		dto.setName("홍길동");
		return dto;
	}
	@GetMapping("/exUpload")
	public void exUpload() {
		log.info("/exUpload............");
	}
	
	@PostMapping("/exUploadPost")
	public void exUploadPost(ArrayList<MultipartFile> files) {
		files.forEach(file -> {
			log.info("................................");
			log.info("name : " + file.getOriginalFilename());
			log.info("size : " + file.getSize());
		});
	}
}
