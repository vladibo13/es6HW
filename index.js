$(function() {
	console.log(countries);
	clearDOM();
	draw();
	drawCountriesSelect();
	$('#find_all_btn').on('click', () => {
		const searchTerm = $('#country_search').val();
		$('#main').html('');
		countries.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((c) =>
			$('#main').append(`
                <div class='col-3 mb-3'>
                    <h4>${c.name}</h4>
                    <img class='img-fluid' src=${c.flag} />
                </div>    
            `)
		);
		$('#country_search').val('');
	});

	$('#find_one_btn').on('click', () => {
		const searchTerm = $('#country_search').val();
		clearDOM();
		const country = countries.find((c) => c.name.toLowerCase() === searchTerm.toLowerCase());
		$('#main').append(`
        <div class='col-3 mb-3'>
            <h4>${country.name}</h4>
            <img class='img-fluid' src=${country.flag} />
        </div>    
        `);
		$('#country_search').val('');
	});

	$('#find_capital_btn').on('click', () => {
		const searchTerm = $('#country_search').val();
		$('#main').html('');
		countries.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((c) =>
			$('#main').append(`
                <div class='col-3 mb-3'>
                    <h4>${c.name}</h4>
                    <h6>${c.capital}</h6>
                    <img class='img-fluid' src=${c.flag} />
                </div>    
            `)
		);
		$('#country_search').val('');
	});

	$('#countries_dropdown').on('change', () => {
		// alert('changed...');
		// alert($('#countries_dropdown option:selected').text());
		// alert($('#countries_dropdown option:selected').val());
		const selectedCountry = $('#countries_dropdown option:selected').val();
		const foundCountry = countries.find((c) => c.name === selectedCountry);
		$('#countries_currency').html('');
		if (!foundCountry) return drawCountriesSelect();
		$('#countries_currency').append(
			$('<option>', {
				value: foundCountry.currencies[0].name,
				text: foundCountry.currencies[0].name
			})
		);
	});

	$('#reset_btn').on('click', () => {
		clearDOM();
		draw();
	});
});

function drawCountriesSelect() {
	countries.map((c) =>
		$('#countries_dropdown').append(
			$('<option>', {
				value: c.name,
				text: c.name
			})
		)
	);

	countries.map((c) =>
		$('#countries_currency').append(
			$('<option>', {
				value: c.currencies[0].name,
				text: c.currencies[0].name
			})
		)
	);
}

function draw() {
	return countries.map((c) =>
		$('#main').append(`
    <div class='col-3 mb-3'>
        <h4>${c.name}</h4>
        <img class='img-fluid' src=${c.flag} />
    </div>    
`)
	);
}

function clearDOM() {
	$('#main').html('');
}
