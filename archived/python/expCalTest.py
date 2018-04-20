import os

from expCal import expCal

def main():
	app = expCal()
	app.genOutput()
	
	print('output string:' + app.outString)
	print('exp left:' + str(app.expLeft))

	for data in app.feedTable:
		print(str(data.cnt100) + '\t' + str(data.cnt20) + '\t' + str(data.cnt5) + '\t' + str(data.cntTotal) + '\t' + str(data.overflow))

if __name__ == '__main__':
	main()