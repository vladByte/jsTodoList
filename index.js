document.addEventListener('DOMContentLoaded',function(){

	const lbl_title = document.getElementById('title');	
	const lbl_body = document.getElementById('description');	
	const btn_add = document.getElementById('add');
	const table = document.getElementById('table');
	const alert = document.getElementById('alert');


	function addTodo(){
		if (lbl_title.value === "" || lbl_body.value === "") {
			alert.classList.remove('d-none');
			alert.innerText = "Title and description are required";
		return;
		}
		
		alert.classList.add('d-none');
		const row = table.insertRow();
		row.innerHTML = `
			<td>${lbl_title.value}</td>
			<td>${lbl_body.value}</td>
			<td class="text-center">
             <input type="checkbox">
         </td>
           	<td class="text-right">
             	<button class="btn btn-primary mb-1">
               	<i class="fa fa-pencil"></i>
             	</button>
        </td>
		`;

		const btn_rm = document.createElement('button');
		btn_rm.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
		btn_rm.innerHTML = '<i class="fa fa-trash"></i>';
		row.children[3].appendChild(btn_rm);
		btn_rm.onclick = function(){
			console.log("Borrando Fila");
		};

	}

	btn_add.onclick = addTodo;
});