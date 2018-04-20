#ifndef EXPCAL_H
#define EXPCAL_H

#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

#define INP_LEVEL			1
#define	INP_EXP				2
#define	INP_PROMPT		3
#define	INP_RARITY		4
#define	INP_FEED5			5
#define	INP_FEED20		6
#define	INP_FEED100		7
#define INP_FEED5X		8
#define	INP_FEED20X		9
#define	INP_FEED100X	10

#define PROMPT_NO			0
#define PROMPT_YES		1
#define PROMPT_FLOWER	2

struct feedOutput {
	int cntTotal;
	int cntFeed5;
	int cntFeed20;
	int cntFeed100;
	int overflow;
};

struct calOutput {
	string outString;
	int expLeft;
	vector<feedOutput> feedTable;
};

class expCal {
public:
	expCal( int = 1, int = 33, int = PROMPT_NO, int = 2 );
	expCal &setInput(int, int value);
	void genOutput();
	
	calOutput output;
	
private:
	vector<feedOutput> genFeed(int expLeft);

	int inpLevel;
	int inpExp;
	int inpPrompt;
	int inpRarity;
	int inpFeed5;
	int inpFeed20;
	int inpFeed100;
	int inpFeed5x;
	int inpFeed20x;
	int inpFeed100x;
};





#endif // EXPCAL_H
