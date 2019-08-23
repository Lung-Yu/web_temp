function getCurrentPageName(){
	var page_name = document.location.pathname.match(/[^\/]+$/);

	if (page_name == null){
		
		page_name = 'index.html';
	}else{
		page_name = page_name[0];
	}
	return page_name;
}

function tag_activity_item(){
	var items = $('.toggle-menu li')
	var items2 = items.children()
	for( var i=0;i<items2.length;i++){
		page = items2[i].href.match(/[^\/]+$/)[0]
		if(page == getCurrentPageName()){
			items2[i].setAttribute("class", "active");
		}
	}

}