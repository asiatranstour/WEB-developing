function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);

	productsPage.render();	
}

spinnerPage.render();


let CATALOG = [];

// server/catalog.json
// https://myjsons.com/v/2dac790

fetch('server/catalog.json')
	.then(res => res.json())
	.then(body => {
		CATALOG = body;
		setTimeout(() => {
			spinnerPage.handleClear();
			render();
		}, 1000);
	})
	.catch(error => {
		spinnerPage.handleClear();
		errorPage.render();		
	});

