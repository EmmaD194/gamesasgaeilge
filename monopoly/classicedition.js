function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	//document.getElementById("cell1name").textContent = "Mediter-ranean Avenue";
	document.getElementById("cell26name").textContent = "Ionad Siopa-doireachta Northside";
	document.getElementById("cell27name").textContent = "Ionad Siopa-doireachta Omni";
	document.getElementById("cell29name").textContent = "Ionad Siopa-doireachta Pavilions";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/hospital.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/hospital.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/hospital.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/hospital.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	//document.getElementById("enlarge12token").innerHTML += '<img src="images/m1_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	//document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;Má tá "Fóntais" amháin faoi úinéireacht. Tá an cíos ceithre huaire an méid a thaispeántar ar na dísle.<br /><br />Má tá an dá "Fhóntais" faoi úinéireacht. Tá an cíos deich n-uaire an méid a thaispeántar ar na dísle.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Cíos<span style="float: right;">€25.</span><br /> Má tá dhá ospidéal faoi úinéireacht<span style="float: right;">50.</span><br />Má tá trí ospidéal faoi úinéireacht<span style="float: right;">100.</span><br />Má tá ceithre ospidéal faoi úinéireacht<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert("D'íoc " + player[turn].name  + "€ 100 as tuirlingt ar Cháin Só.");
	player[turn].pay(100, 0);

	$("#landed").show().text("Thuirling tú ar Cháin Só. Íoc € 100.");
}

function citytax() {
	addAlert("D'íoc " + player[turn].name  + "€ 200 as tuirlingt ar Cháin Chathrach.");
	player[turn].pay(200, 0);

	$("#landed").show().text("Thuirling tú ar Cháin Chathrach. Íoc € 200.");
}

var square = [];

square[0] = new Square("GABH", "", "#FFFFFF");
square[1] = new Square("An Chúlóg", "€60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Cliabh Pobail", "LEAN NA TREORACHA AR AN gCÁRTA", "#FFFFFF");
square[3] = new Square("Sord", "€60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Cháin Chathrach", "Íoc €200", "#FFFFFF");
square[5] = new Square("Ospidéal Beaumont", "€200", "#FFFFFF", 200, 1);
square[6] = new Square("Bóthar Chill Bharróg", "€100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Deis", "LEAN NA TREORACHA AR AN gCÁRTA", "#FFFFFF");
square[8] = new Square("Bóthar Thóin le Gaoith", "€100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Bóthar Oscair Mhic Thréinir", "€120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Díreach ar cuairt", "", "#FFFFFF");
square[11] = new Square("Páirc Sheantraibh", "€140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("M1", "€150", "#FFFFFF", 150, 2);
square[13] = new Square("Páirc Fhionnradhairc", "€140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Páirc Naomh Áine", "€160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Ospidéal an Mater", "€200", "#FFFFFF", 200, 1);
square[16] = new Square("Ascaill Uí Choileáin", "€180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Cliabh Pobail", "LEAN NA TREORACHA AR AN gCÁRTA", "#FFFFFF");
square[18] = new Square("Ascaill Uí Ghríofa", "€180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Ascaill Bhaile Philib", "€200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Páirceáil Saor in Aisce", "", "#FFFFFF");
square[21] = new Square("Trá Chnocán Doirinne", "€220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Deis", "LEAN NA TREORACHA AR AN gCÁRTA", "#FFFFFF");
square[23] = new Square("Trá Phort Mearnóg", "€220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Trá Dhomhach Bat", "€240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Ospidéal Uí Chonghaile", "€200", "#FFFFFF", 200, 1);
square[26] = new Square("Ionad Siopadóireachta Northside", "€260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Ionad Siopadóireachta Omni", "€260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Port Tunnel", "€150", "#FFFFFF", 150, 2);
square[29] = new Square("Ionad Siopadóireachta Pavilions", "€280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Téigh go dtí an príosún", "", "#FFFFFF");
square[31] = new Square("Bóthar Shoird", "€300", "#008000", 300, 9, 26, 130, 390, 900, 110, 1275);
square[32] = new Square("Bóthar Bhinn Éadair", "€300", "#008000", 300, 9, 26, 130, 390, 900, 110, 1275);
square[33] = new Square("Cliabh Pobail", "LEAN NA TREORACHA AR AN gCÁRTA", "#FFFFFF");
square[34] = new Square("Bóthar Mhullach Íde", "€320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Ospidéal Shráid Temple", "€200", "#FFFFFF", 200, 1);
square[36] = new Square("Deis", "LEAN NA TREORACHA AR AN gCÁRTA", "#FFFFFF");
square[37] = new Square("Cluain Tarbh", "€350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Cháin Só", "Íoc €100", "#FFFFFF");
square[39] = new Square("Binn Éadair", "€400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("SCAOILEADH SAOR ÓN bPRÍOSÚN, SAOR IN AISCE. Féadfar an cárta seo a choinneáil go dtí go mbeidh sé ag teastáil nó díolta.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Bhuaigh tú an dara duais i gcomórtas áilleachta. Bailigh € 10.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("Dhíol tú rud éigin ar DoneDeal, faigheann tú € 50.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Bhuaigh tú scríobchárta. Bailigh € 100.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Aisíoc cánach. Bailigh €20.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Aibíonn an ciste coigiltis. Faigh € 100.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("Faigheann tú € 100 mar oidhreacht.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Aimsíonn tú € 20 ar an talamh", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Táillí ospidéil de € 100 a íoc.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Earráid bhainc i do dtús báire. Bailigh € 200.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Íoc táillí scoile de € 50", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("Táille an dochtúra. Íoc € 50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("Is é do lá breithe é. Bailigh € 10 ó gach imreoir.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Dul ar aghaidh go \"GABH\" (Bailigh €200).", function() { advance(0);});
communityChestCards[14] = new Card("Déantar do mheasúnú ar dheisiúcháin sráide. € 40 an teach. € 115 in aghaidh an óstáin.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Téigh go dtí an príosún. Téigh go díreach chuig an bpríosún. Ná téigh thart ar \"GABH \". Ná bailigh € 200.", function() { goToJail();});


chanceCards[0] = new Card("SCAOILEADH SAOR ÓN bPRÍOSÚN, SAOR IN AISCE. Féadfar an cárta seo a choinneáil go dtí go mbeidh sé ag teastáil nó díolta.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Déan deisiúcháin ghinearálta ar do chuid maoine go léir. Íoc € 25 as gach teach. Do gach óstán € 100.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Fíneáil luais € 15.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("Toghadh tú ar an gcomhairle. Íoc € 50 le gach imreoir.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Téigh ar ais trí spás.", function() { gobackthreespaces();});
chanceCards[5] = new Card("TÉIGH GO DTÍ AN FÓNTAIS IS GAIRE (M1 nó Port Tunnel). MÁ TÁ SÉ AR FÁIL, is féidir leat é a cheannach. MÁ TÁ SÉ FAOI ÚINÉIREACHT IMREOIR, caith dísle agus íoc úinéir deich n-uaire an méid a chaitear.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Fuair ​​tú € 50 i do phóca cóta.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("TÉIGH GO DTÍ AN t-OSPIDÉAL IS GAIRE. MÁ TÁ SÉ AR FÁIL, is féidir leat é a cheannach. MÁ TÁ SÉ FAOI ÚINÉIREACHT IMREOIR, íoc an cíos faoi dhó leis an úinéir.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Cuireann tú airgead ar do Chárta LEAP, ÍOC €15.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Tabhair turas go Trá Dhomhach Bat. Má théann tú thart ar \"GABH\" bailigh €200.", function() { advance(24);});
chanceCards[10] = new Card("Téigh go Binn Éadair.", function() { advance(39);});
chanceCards[11] = new Card("Téigh chuig Ospidéal Beaumont. Má théann tú thart ar \"GABH\" bailigh €200.", function() { advance(5);});
chanceCards[12] = new Card("Fuair ​​tú aisíocaíocht ó ordú ar líne a d’fhill tú ar ais. Bailigh €150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("TÉIGH GO DTÍ AN t-OSPIDÉAL IS GAIRE. MÁ TÁ SÉ AR FÁIL, is féidir leat é a cheannach. MÁ TÁ SÉ FAOI ÚINÉIREACHT IMREOIR, íoc an cíos faoi dhó leis an úinéir.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("Téigh go dtí Páirc Sheantraibh. Má théann tú thart ar \"GABH\" bailigh €200.", function() { advance(11);});
chanceCards[15] = new Card("Téigh go dtí an príosún. Téigh go díreach chuig an bpríosún. Ná téigh thart ar \"GABH \". Ná bailigh € 200.", function() { goToJail();});
