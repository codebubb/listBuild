/* 	
	listBuild.js
	------------
	Utility helpers to build HTML <ul> elements from data sources 
	Works in browser or node
	
	Version: 0.1.0 
	Author: James Bubb */

var isNode = typeof window === 'undefined';

var buildList = function(items, className){
	var li = [];
	var ul = isNode ? '<ul>\n' : document.createElement('ul') ;
	if (className){	
		if(isNode){
			ul = '<ul class="' + className + '">\n';
		} else{
			ul.setAttribute('class', className);
		}
	}
	for(var i=0; i<items.length; i++){
		if(isNode){
			ul += '\t<li>' + items[i] + '</li>\n';
		} else{
			li[i] = document.createElement('li');
			li[i].innerText = items[i];
			ul.appendChild(li[i]);
		}
	} 
	return isNode ? ul + "</ul>" : ul;
}

if (isNode){ exports.build = build; }