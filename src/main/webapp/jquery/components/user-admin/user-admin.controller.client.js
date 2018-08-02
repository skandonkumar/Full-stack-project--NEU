//IIFE - Immediately invoked function expression 
(function (){
	
	jQuery(main);
	
	function main(){
		var h1 = jQuery('h1');
		h1.css('color','red');
		h1.html('User Administration!')
		
		var users = [
			{username: 'Bob'},
			{username: 'Charlie'}
		];
		var tr = $('.template');
		var tbody = $('tbody');
		
		for(var i=0; i<users.length; i++){
			var user = users[i];
			var tr1 = tr.clone();
			tr1.find('.username').html(user.username);
			tbody.append(tr1);
		}
		
		var tr1 = tr.clone();
		tbody.append(tr1);
	}	
})();
