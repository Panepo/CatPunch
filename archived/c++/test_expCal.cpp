#include <iostream>
#include "expCal.h"

int main( ) {
	expCal app(1, 10, 1, 2);
	calOutput output;

	//app.setInput(INP_LEVEL, 2);
	//app.setInput(INP_EXP, 20);
	app.setInput(INP_LEVEL, 2).setInput(INP_EXP, 20);
	app.genOutput();

	cout << "outstring:\t" << app.output.outString << endl;
	cout << "expleft:\t"   << app.output.expLeft << endl;
	cout << "feedtable:\t" << endl;

	for ( int i=0; i<app.output.feedTable.size(); i++ ) {
		cout << app.output.feedTable[i].cntFeed100 << "\t";
		cout << app.output.feedTable[i].cntFeed20 << "\t";
		cout << app.output.feedTable[i].cntFeed5 << "\t";
		cout << app.output.feedTable[i].cntTotal << "\t";
		cout << app.output.feedTable[i].overflow << "\t";
		cout << endl;
	}

	return 0;
}
