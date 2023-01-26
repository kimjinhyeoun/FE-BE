<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!
	String name = "듀크";
	public String getName(){ return name;}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Hello JSP</title>
</head>
<body>
<h1>Hello JSP</h1>
<h1>JSP 실습입니다.</h1>
<h1>안녕하세요 <%=name %>님!</h1>
</body>
</html>