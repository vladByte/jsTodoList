class View(){

	constructor(){
		this.model = null;
		this.table = document.getElementById('table');
	}

	setModel(model){
		this.model = model;
	}

	addTodo(title, description){
		console.log(title, description);
	}


}