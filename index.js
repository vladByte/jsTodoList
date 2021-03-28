document.addEventListener('DOMContentLoaded',function(){

	const lbl_title = document.getElementById('title');	
	const lbl_body = document.getElementById('description');	
	const btn_add = document.getElementById('add');
	const table = document.getElementById('table');

	btn_add.onclick = addTodo;

	function addTodo(){
		if (lbl_title.value === "" || lbl_body.value === "") {
			console.error("Title and description are required");
		}else{
			console.log("OK");
		}


	}

});