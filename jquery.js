$(document).ready(function(){

	let counter = 0;
	$('#amount').text(counter);

	$(document).on('click','.todo-list-item', function(){
		$('#done-list').append($('<li class="done-list-item">'+$(this).text()+'</li>'));
		$(this).remove();
		$('#amount').text(--counter);
	});

	$('#add-items-button').on('click', function(){
		let value = $('#add-items').val();
		if(value == ''){
			$('#danger').show(0).delay(2000).hide(0);
		}
		else{
			$('#todo-list').append(`<li class='todo-list-item'>${value}</li>`);	
			$('#amount').text(++counter);
			$('#add-items').val('');
		}	
	});

	$(document).on('click','.done-list-item', function(){
		$('#todo-list').append($('<li class="todo-list-item">'+$(this).text()+'</li>'));
		$(this).remove();
		$('#amount').text(++counter);
	});
});
