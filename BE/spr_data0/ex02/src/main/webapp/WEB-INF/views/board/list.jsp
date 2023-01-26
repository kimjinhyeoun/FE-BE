<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>    
<%@include file = "../includes/header.jsp" %>

            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Tables</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">Board List Page
                        	<button id='regBtn' type="button" class="btn btn-xs pull-right">Register New Board</button>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>작성일</th>
                                        <th>수정일</th>
                                    </tr>
                                </thead>
                                <c:forEach items ="${list}" var="board">
                                    <tr>
                                        <td><c:out value="${board.bno}" /></td>
                                        <td><a class='move' href='<c:out value="${board.bno}"/>'>
                                        <c:out value="${board.title}"/></a></td>
                                        <td><c:out value="${board.writer}" /></td>
                                        <td><fmt:formatDate pattern="yyyy-MM-dd"  value="${board.regdate}" /></td>
                                        <td><fmt:formatDate pattern="yyyy-MM-dd"  value="${board.updateDate}" /></td>
                                    </tr>
                                </c:forEach>
 	
                            </table> <!-- table 태그의 끝 -->
                            <div class='row'>
                               <div class="col-log-12">
                                  <form	id="searchForm" action="/board/list" method="get">
						             <select name="type">
							            <option value=""   	<c:out value="${pageMaker.cri.type == null ? 'selected' : '' }"/>>--</option>
							            <option value="T"
							              <c:out value="${pageMaker.cri.type eq 'T' ? 'selected' : '' }"/>>제목</option>
							            <option value="C" <c:out value="${pageMaker.cri.type eq 'C' ? 'selected' : '' }"/>>내용</option>
							            <option value="W" <c:out value="${pageMaker.cri.type eq 'W' ? 'selected' : '' }"/>>작성자</option>
							            <option value="TC" <c:out value="${pageMaker.cri.type eq 'TC' ? 'selected' : '' }"/>>제목+내용</option>
							            <option value="TW" <c:out value="${pageMaker.cri.type eq 'TW' ? 'selected' : '' }"/>>제목+작성자</option>
							            <option value="TCW"  <c:out value="${pageMaker.cri.type eq 'TCW' ? 'selected' : '' }"/> >제목+내용+작성자</option>
						             </select>

               						<input type="text" name="keyword"  value="${pageMaker.cri.keyword}">
				            		<input type="hidden" name="pageNum" value="${pageMaker.cri.pageNum}">
						            <input type="hidden" name="amount" value="${pageMaker.cri.amount}">
						            <button class="btn btn-primary">Search</button>
					             </form>	
                               </div>
                            </div>
                            
                    <%--         <h3>${pageMaker}</h3> --%>
                            <div class='pull-right'>
                            	<ul class="pagination">
                            		<c:if test="${pageMaker.prev}">
     	                        		<li class="page-item">
      										<a class="page-link" href="${pageMaker.startPage-1}" tabindex="-1">Previous</a>
    									</li>
                            		</c:if>
                            	
                            		<c:forEach begin="${pageMaker.startPage}"
                            		           end="${pageMaker.endPage}" var="num">
                           		    	<li class="page-item ${pageMaker.cri.pageNum == num?"active" : ""} ">
                           		    	<a class="page-link" href="${num}">${num}</a></li>
                            		</c:forEach>
                            		
                            		<c:if test="${pageMaker.next}">
     	                        		<li class="page-item">
     									    <a class="page-link" href="${pageMaker.endPage+1}" tabindex="-1">Next</a>
   									    </li>
                            		</c:if>
                            	</ul>
                            </div>
                            
                            <form id='actionForm' action="/board/list" method='get'>
                               <input type='hidden' name='pageNum' value='${pageMaker.cri.pageNum}'>
                               <input type='hidden' name='amount' value='${pageMaker.cri.amount}'>
                               <input type='hidden' name='type' value='${pageMaker.cri.type}'>
                               <input type='hidden' name='keyword' value='${pageMaker.cri.keyword}'>
                               
                            </form>
                            
                        </div>
						<!-- /.panel-body -->
						
						<!-- Modal 추가 -->                             
						<div class="modal fade" id="myModal" tabindex="-1" role="dialog" 
						     aria-labelledby="myModalLabel" aria-hidden="true">
						  <div class="modal-dialog">
						    <div class="modal-content">
						      <div class="modal-header">
						        <h4 class="modal-title" id="myModalLabel">처리확인</h4>
						        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div class="modal-body">
						        <p>처리가 완료 되었습니다.</p>
						      </div>
						      <div class="modal-footer">
						        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						      </div>
						    </div>
						  </div>
						</div>
		                <!-- Modal 끝 -->             
                            
                        </div>
                        <!-- end panel-body -->
                    </div>
                    <!-- end panel -->
                </div>
            </div>
            <!-- /.row -->
<script>
	$(document).ready(function(){
	
		let result = '<c:out value="${result}"/>';
		
		checkModal(result);
		
		history.replaceState({},null,null);
		
		function checkModal(result){
				
				if(result === '' || history.state){
					return;
				}
				
				if (parseInt(result) > 0){
					$(".modal-body").html("게시물 " + parseInt(result) + "번이 등록되었습니다.")
				}
				
				$("#myModal").modal("show");
	
			}
		
		$("#regBtn").on("click", function(){
			self.location="/board/register";
		});
		
		let actionForm = $("#actionForm");

		$(".page-link").on("click", function(e){
			
			e.preventDefault();
			
			let targetPage = $(this).attr("href")
			
			console.log(targetPage);
			
			actionForm.find("input[name='pageNum']").val(targetPage);
			actionForm.submit();
		});
		
		$(".move").on("click", function(e){
			
			e.preventDefault();
			actionForm.append("<input type='hidden' name='bno' value='"+$(this).attr("href")+"'>");
			actionForm.attr("action", "/board/get");
			actionForm.submit();
			
		});
		
		
		let searchForm = $("#searchForm");
		
		$("#searchForm button").on("click", function(e){
			
			e.preventDefault();
			
			if(!searchForm.find("option:selected").val()){
				alert("검색종류를 선택하세요.")
				return false;
			}

			if(!searchForm.find("[name='keyword']").val()){
				alert("키워드를 선택하세요.")
				return false;
			}
			
			searchForm.find("input[name='pageNum']").val(1);
			searchForm.submit();
		});
			
	});	
	
</script>
        
<%@include file = "../includes/footer.jsp" %>