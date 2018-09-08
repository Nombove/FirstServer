let axios = require('axios');
let cheerio = require('cheerio'); 
let fs = require('fs'); 

axios.get('http://spottedlublin.pl/')
	.then((response) => {
		if(response.status === 200) {
			var html = response.data;
      let $ = cheerio.load(html); 
      var books = [];
      $('.g1-mosaic').each(function(i, elem) {
        books[i] = {
			Artykuł: $(this).attr('href'),
			Zdjęcie: $(this).attr('src'),	  
			Tytuł: $(this).find('.g1-gamma').text()
					 
        }
      });
    console.log(books)
		}
}, (error) => console.log(error));