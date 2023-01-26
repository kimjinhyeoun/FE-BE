package com.cos.blog.test;

public class People {
	private int hungryState = 50;
	
	public void eat() {
		hungryState += 10;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		People p = new People();
		p.eat();
	}

}
