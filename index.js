function show()
{
	document.getElementById("javas2").innerHTML="Spotted Lublin";
	const request = require('request');
	const cheerio = require('cheerio');
	
	var zdj = [], art = [], finito = [], help = [];
	var i, j = 0;
	request('http://spottedlublin.pl/', function (error, response, body)
	{
		if (!error && response.statusCode === 200) 
		{
			var $ = cheerio.load(body);
			$('section a').each(function () 
			{
				var img = $(this).attr('href');
				help.push(img);
			});
			for (i = 0; i < help.length; i++)
				if (help[i] != help[i + 1] && help[i + 1] != undefined && help[i] != '') 
				{
					art[j] = help[i];
					j++;
				}

			help.splice(0);
			$('.g1-mosaic img').each(function () 
			{
				img = $(this).attr('src');
				help.push(img);
			});

			for (i = 0; i < help.length; i++)
				if (i % 2 == 0)
					zdj.push(help[i]);

			help.splice(0);
			$('.entry-header').each(function (i) 
			{
				help[i] = $(this).find('.rwd-topX-title').text();

				if (i >= 6)
					finito[i - 6] = 
					{
						Wiadomość_nr: i - 5,
						Tytuł: help[i],
						Artykuł: art[i - 6],
						Zdjecie: zdj[i - 6],

					}

			});

			zdj.splice(0), art.splice(0), help.splice(0);
			//console.log(finito);
			document.getElementById("javas2").innerHTML="Spotted Lublin";	
		}
		else
			throw new Error(error);
	});
	
}

//show();


