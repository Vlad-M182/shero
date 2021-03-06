let projectsCatItems = document.querySelectorAll('.projects__cat-item');
let projectsCatArrow = document.querySelector('.projects__cat-arrow');
let projectsCat = document.querySelector('.projects__cat');
let projectsItem = document.querySelectorAll('.projects__item');

projectsCatArrow.addEventListener('click',function() {
	projectsCat.classList.toggle('active');
})

const addOrderToElement = (el) => {
	el.forEach((elItem, index) => {
		elItem.style = `order: ${index+2};`;
	})
}

const addOrRemoveDisplayBlock = (arr,clicked) => {
	arr.forEach((item) => {
		if(item.hasAttribute('category') && clicked.hasAttribute('category')) {
			if(clicked.getAttribute('category') == item.getAttribute('category')){
				item.style = "display: block;";
			} else if(clicked.getAttribute('category') == 'all'){
				item.style = "display: block;";
			} else {
				item.style = "display: none;";
			}
		}
	})
}

const disableElement = (arr,clicked) => {
	arr.forEach((item,index) => {
		if(item.hasAttribute('category') && clicked.hasAttribute('category')) {
			if(clicked.getAttribute('category') == item.getAttribute('category')){
				item.style = "opacity: 1;";
				item.classList.remove('disabled');
			} else if(clicked.getAttribute('category') == 'all'){
				item.style = "opacity: 1;";
				item.classList.remove('disabled');
			} else {
				item.style = "opacity: 0.2;";
				item.classList.add('disabled');
			}
		}
	})
}

const removeClassFromArrElem = (arr) => {
	arr.forEach((el) => {
		el.classList.remove('active');
	})
}

projectsCatItems.forEach((catItem, index) => {
	catItem.addEventListener('click',(e) => {
		let target = e.target;
		if(document.documentElement.clientWidth <= 767) {
			addOrderToElement(projectsCatItems);
			target.parentElement.setAttribute('style', 'order: 1;');
			projectsCat.classList.remove('active');
			addOrRemoveDisplayBlock(projectsItem,target);
		}
		else {
			removeClassFromArrElem(projectsCatItems);
			target.parentElement.classList.add('active');
			disableElement(projectsItem,target);
		}
	})
})