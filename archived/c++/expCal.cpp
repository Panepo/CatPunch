#include "expCal.h"
using namespace std;

const int expTable[4][80] = {
{0, 33, 34, 59, 83, 114, 152, 189, 231, 276, 323, 373, 426, 479, 537, 597, 655, 721, 785, 852, 921, 990, 1065, 1138, 1212, 1291, 1371, 1449, 1533, 1613, 1702, 1786, 1874, 1965, 2054, 2146, 2240, 2335, 2429, 2530, 2625, 2725, 2827, 2929, 3034, 3136, 3244, 3351, 3458, 3568, 3678, 3788, 3903, 4016, 4132, 4217, 4364, 4482, 4602, 4720, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 34, 37, 62, 92, 129, 168, 211, 258, 308, 363, 416, 478, 537, 601, 671, 736, 807, 881, 958, 1034, 1113, 1194, 1279, 1363, 1450, 1539, 1628, 1723, 1815, 1911, 2007, 2109, 2207, 2308, 2415, 2517, 2625, 2731, 2843, 2952, 3064, 3178, 3295, 3409, 3527, 3648, 3768, 3888, 4011, 4135, 4263, 4388, 4516, 4645, 4776, 4907, 5041, 5176, 5308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 34, 41, 65, 101, 141, 186, 233, 285, 341, 400, 463, 527, 596, 668, 741, 818, 897, 976, 1061, 1149, 1233, 1327, 1418, 1512, 1610, 1709, 1808, 1910, 2017, 2121, 2230, 2339, 2452, 2564, 2679, 2796, 2913, 3036, 3156, 3278, 3404, 3529, 3658, 3788, 3917, 4051, 4184, 4320, 4454, 4594, 4735, 4873, 5017, 5160, 5305, 5451, 5599, 5748, 5897, 6049, 6201, 6357, 6513, 6667, 6825, 6984, 7145, 7307, 7469, 7710, 7887, 8065, 8245, 8428, 8611, 8797, 8985, 9174, 9365},
{0, 34, 41, 69, 105, 146, 191, 242, 296, 353, 417, 479, 548, 622, 691, 771, 851, 929, 1018, 1102, 1192, 1284, 1379, 1475, 1572, 1673, 1777, 1880, 1986, 2096, 2205, 2319, 2433, 2549, 2667, 2785, 2907, 3030, 3155, 3282, 3409, 3540, 3671, 3804, 3937, 4074, 4211, 4351, 4491, 4634, 4776, 4992, 5069, 5217, 5365, 5518, 5668, 5822, 5977, 6133, 6290, 6450, 6608, 6772, 6935, 7098, 7263, 7429, 7559, 7767, 8018, 8202, 8387, 8575, 8764, 8955, 9148, 9343, 9540, 9739},
};

expCal::expCal(int lv, int exp, int pro, int rar) {
	if (lv) {
		setInput(INP_LEVEL, lv);
	} else {
		inpLevel = 1;
	}
	if (exp) {
		setInput(INP_EXP, exp);
	} else {
		inpExp = 33;
	}
	if (pro) {
		setInput(INP_PROMPT, pro);
	} else {
		inpPrompt = PROMPT_NO;
	}
	if (rar) {
		setInput(INP_RARITY, rar);
	} else {
		inpRarity = 2;
	}
	
	inpFeed5 = 0;
	inpFeed20 = 0;
	inpFeed100 = 0;
	inpFeed5x = 0;
	inpFeed20x = 0;
	inpFeed100x = 0;
}

expCal &expCal::setInput(int id, int value) {	
	switch (id) {
		case INP_LEVEL:
			inpLevel = value;
			break;
		case INP_EXP:
			inpExp = value;
			break;
		case INP_PROMPT:
			inpPrompt = value;
			break;
		case INP_RARITY:
			inpRarity = value;
			break;
		case INP_FEED5:
			inpFeed5 = value;
			break;
		case INP_FEED20:
			inpFeed20 = value;
			break;
		case INP_FEED100:
			inpFeed100 = value;
			break;
		case INP_FEED5X:
			inpFeed5x = value;
			break;
		case INP_FEED20X:
			inpFeed20x = value;
			break;
		case INP_FEED100X:
			inpFeed100x = value;
			break;
	}
	
	return *this;
};

void expCal::genOutput() {
	output.expLeft = 0;
	int tableInd = 0;
	int levelMax = 0;
	bool calEnable = true;
	
	switch (inpPrompt) {
		case PROMPT_NO:
			levelMax = 0;
			break;
		case PROMPT_YES:
			levelMax = 10;
			break;
		case PROMPT_FLOWER:
			levelMax = 20;
			break;
	}
	
	switch (inpRarity) {
		case 2:
		case 3:
			levelMax = levelMax + 50;
			break;
		case 4:
			levelMax = levelMax + 50;
			tableInd = 1;
			break;
		case 5:
			levelMax = levelMax + 60;
			tableInd = 2;
			break;
		case 6:
			levelMax = levelMax + 60;
			tableInd = 3;
			break;
	}
	
	if ( inpLevel > levelMax || isnan(inpLevel) ) {
		calEnable = false;
		output.outString = "input level is incorrect.";
	} else if ( inpExp > expTable[tableInd][inpLevel] || isnan(inpExp) ) {
		calEnable = false;
		output.outString = "input exp is incorrect.";
	} else if ( isnan(inpFeed5) || isnan(inpFeed20) || isnan(inpFeed100) ) {
		calEnable = false;
		output.outString = "input is incorrect.";
	} else if ( isnan(inpFeed5x) || isnan(inpFeed20x) || isnan(inpFeed100x) ) {
		calEnable = false;
		output.outString = "input is incorrect.";
	}
	
	if ( calEnable == true ) {
		for ( int i=inpLevel; i<levelMax; i++ ) {
			output.expLeft += expTable[tableInd][i];
		}
		output.expLeft += inpExp - expTable[tableInd][inpLevel];
		output.expLeft -= inpFeed5*1080 + inpFeed20*2700 + inpFeed100*7200;
		output.expLeft -= inpFeed5x*720 + inpFeed20x*1800 + inpFeed100x*4800;
		output.feedTable = genFeed(output.expLeft);
	}
};

vector<feedOutput> expCal::genFeed(int expLeft) {
	vector<feedOutput> output;
	feedOutput outTemp;
	int repTimes = expLeft / 7200;
	
	for ( int i=0; i<repTimes; i++ ) {
		outTemp.cntFeed100 = repTimes - i;
		outTemp.cntFeed20 = ( expLeft - outTemp.cntFeed100*7200 ) / 2700;
		outTemp.cntFeed5 = (( expLeft - outTemp.cntFeed100*7200 - outTemp.cntFeed20*2700 ) / 1080) + 1;
		
		int expT = outTemp.cntFeed100*7200 + outTemp.cntFeed20*2700 + outTemp.cntFeed5*1080;
		outTemp.overflow = expT - expLeft;
		
		if ( outTemp.overflow >= 1080 ) {
			outTemp.cntFeed5 -= 1;
			expT = outTemp.cntFeed100*7200 + outTemp.cntFeed20*2700 + outTemp.cntFeed5*1080;
			outTemp.overflow = expT - expLeft;
		}
		
		if ( outTemp.cntFeed5 == 3 && outTemp.overflow >= 540 ) {
			outTemp.cntFeed20 += 1;
			outTemp.cntFeed5 -= 3;
			expT = outTemp.cntFeed100*7200 + outTemp.cntFeed20*2700 + outTemp.cntFeed5*1080;
			outTemp.overflow = expT - expLeft;
		}
		
		outTemp.cntTotal = outTemp.cntFeed100 + outTemp.cntFeed20 + outTemp.cntFeed5;
		output.push_back(outTemp);
	}
	
	return output;
};
