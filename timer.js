function odliczanie()	
{
	var dzisiaj = new Date();
	var dzienTygodnia = dzisiaj.getDay();
	var dzien = dzisiaj.getDate();
	var miesiac = dzisiaj.getMonth()+1;
	var rok = dzisiaj.getFullYear();
		
	var godzina = dzisiaj.getHours();
	if (godzina<10) 
		godzina = "0"+godzina;
		
	var minuta = dzisiaj.getMinutes();
	if (minuta<10) 
		minuta = "0"+minuta;
		
	var sekunda = dzisiaj.getSeconds();
	if (sekunda<10) 
		sekunda = "0"+sekunda;
		
	var milisekunda = (dzisiaj.getMilliseconds())/100;
	milisekunda=Math.ceil(milisekunda);
	if(milisekunda==10)
		milisekunda=0;
		
	switch(dzienTygodnia)
	{
		case 0: dzienTygodnia="Niedziela"; break;
		case 1: dzienTygodnia="Poniedziałek"; break;
		case 2: dzienTygodnia="Wtorek"; break;
		case 3: dzienTygodnia="Środa"; break;
		case 4: dzienTygodnia="Czwatek"; break;
		case 5: dzienTygodnia="Piątek"; break;
		case 6: dzienTygodnia="Sobota"; break;
	}
		
	document.getElementById("javas").innerHTML =dzienTygodnia+", "+
	 dzien+" | "+miesiac+"/"+rok+"  |  "+godzina+":"+minuta+":"+sekunda+":"+milisekunda;
			
	 setTimeout("odliczanie()",100);// 1ms step on clock
}