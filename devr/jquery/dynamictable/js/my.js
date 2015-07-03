$(document).ready(function(){
	var i=1;
	$("#showCategory").change(function(){
		if(this.checked) {
			$("#categoryItem").show();
		} else {
			$("#categoryItem").hide();
		}
	});
	deleteItem = function() {
		alert("delte tr ");
		return false;
	};
	
	$.fn.deleteItem = function(id) {
	  /* return this.each(function(){
		 alert(msg);
	   }) */
	   <!-- alert("delte tr " + id); -->
	   $('table#tab_logic tr#addr' + id).remove();
		return false;
	 };
		
	$("#btnAdd").click(function(){
		// get div count and add the content
		var idPlus = i + 1; 
		var category = $("#category0").val();
		var email = $("#email0").val();
		
		$('#addr'+i).html(
			"<td>"+ (i) +"</td><td>"+category+"</td><td style='width: 45%;'>"+email+"</td><td><input type=\"button\" id=\"delete"+i+"\" onclick=\"$(this).deleteItem("+i+");\" value=\"delete\" /></td>");
		$('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
		i++;
		
	});
	$("#categoryItem").hide();
});