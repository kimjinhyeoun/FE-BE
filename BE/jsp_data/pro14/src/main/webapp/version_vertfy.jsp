<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Info jsp</title>
<style>
h1 {
    font-size: 16pt;
    background: #AAFFAA;
    padding: 5px;
}
</style>
</head>
<body>
    <h1>Sample jsp page</h1>
    <p>이 페이지는 샘플입니다.</p>
    <p>서버 정보 :<%=application.getServerInfo()%></p>
    <p>서블릿 정보 : <%=application.getMajorVersion()%>.<%=application.getMinorVersion()%></p>
    <p>JSP 정보 : <%=JspFactory.getDefaultFactory().getEngineInfo().getSpecificationVersion()%></p>
</body>
</html>