import math

class expCal:
	def __init__(self):
		self.level = 1
		self.exp = 33
		self.prompt = 0;
		self.rarity = 2;
		self.feed5 = 0;
		self.feed20 = 0;
		self.feed100 = 0;
		self.feed5x = 0;
		self.feed20x = 0;
		self.feed100x = 0;
		self.expLeft = 0
		self.outString = ''
		self.tableInd = 0
		self.levelMax = 0
		self.calEnable = 0
		self.feedTable = []
		
		self.expTable = []
		self.expTable.append([0, 33, 34, 59, 83, 114, 152, 189, 231, 276, 323, 373, 426, 479, 537, 597, 655, 721, 785, 852, 921, 990, 1065, 1138, 1212, 1291, 1371, 1449, 1533, 1613, 1702, 1786, 1874, 1965, 2054, 2146, 2240, 2335, 2429, 2530, 2625, 2725, 2827, 2929, 3034, 3136, 3244, 3351, 3458, 3568, 3678, 3788, 3903, 4016, 4132, 4217, 4364, 4482, 4602, 4720, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
		self.expTable.append([0, 34, 37, 62, 92, 129, 168, 211, 258, 308, 363, 416, 478, 537, 601, 671, 736, 807, 881, 958, 1034, 1113, 1194, 1279, 1363, 1450, 1539, 1628, 1723, 1815, 1911, 2007, 2109, 2207, 2308, 2415, 2517, 2625, 2731, 2843, 2952, 3064, 3178, 3295, 3409, 3527, 3648, 3768, 3888, 4011, 4135, 4263, 4388, 4516, 4645, 4776, 4907, 5041, 5176, 5308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
		self.expTable.append([0, 34, 41, 65, 101, 141, 186, 233, 285, 341, 400, 463, 527, 596, 668, 741, 818, 897, 976, 1061, 1149, 1233, 1327, 1418, 1512, 1610, 1709, 1808, 1910, 2017, 2121, 2230, 2339, 2452, 2564, 2679, 2796, 2913, 3036, 3156, 3278, 3404, 3529, 3658, 3788, 3917, 4051, 4184, 4320, 4454, 4594, 4735, 4873, 5017, 5160, 5305, 5451, 5599, 5748, 5897, 6049, 6201, 6357, 6513, 6667, 6825, 6984, 7145, 7307, 7469, 7710, 7887, 8065, 8245, 8428, 8611, 8797, 8985, 9174, 9365])
		self.expTable.append([0, 34, 41, 69, 105, 146, 191, 242, 296, 353, 417, 479, 548, 622, 691, 771, 851, 929, 1018, 1102, 1192, 1284, 1379, 1475, 1572, 1673, 1777, 1880, 1986, 2096, 2205, 2319, 2433, 2549, 2667, 2785, 2907, 3030, 3155, 3282, 3409, 3540, 3671, 3804, 3937, 4074, 4211, 4351, 4491, 4634, 4776, 4992, 5069, 5217, 5365, 5518, 5668, 5822, 5977, 6133, 6290, 6450, 6608, 6772, 6935, 7098, 7263, 7429, 7559, 7767, 8018, 8202, 8387, 8575, 8764, 8955, 9148, 9343, 9540, 9739])

	def setInput(self, id, value):
		if id == 'LEVEL':
			self.level = value
		elif id == 'EXP':
			self.exp = value
		elif id == 'PROMPT':
			self.prompt = value
		elif id == 'RARITY':
			self.rarity = value
		elif id == 'FEED5':
			self.feed5 = value
		elif id == 'FEED20':
			self.feed20 = value
		elif id == 'FEED100':
			self.feed100 = value
		elif id == 'FEED5X':
			self.feed5x = value
		elif id == 'FEED20X':
			self.feed20x = value
		elif id == 'FEED100X':
			self.feed100x = value
		else:
			self.outString = 'input id is incorrect.'

	def checkPrompt(self):
		if self.prompt == 0:
			self.levelMax = 0
		elif self.prompt == 1:
			self.levelMax = 10
		elif self.prompt == 2:
			self.levelMax = 20
		else:
			self.prompt = 0
			self.outString = 'input prompt value is incorrect.'
			self.calEnable = 0
	
	def checkRarity(self):
		if self.rarity == 2 or self.rarity == 3:
			self.levelMax = self.levelMax + 50
		elif self.rarity == 4:
			self.levelMax = self.levelMax + 50
			self.tableInd = 1
		elif self.rarity == 5:
			self.levelMax = self.levelMax + 60
			self.tableInd = 2
		elif self.rarity == 6:
			self.levelMax = self.levelMax + 60
			self.tableInd = 3
		else:
			self.rarity = 2
			self.levelMax = self.levelMax + 50
			self.outString = 'input rarity value is incorrect.'
			self.calEnable = 0

	def checkInput(self):
		if self.level > self.levelMax or self.level < 0:
			self.calEnable = 0
			self.outString = 'input level is incorrect.'
		elif self.exp > self.expTable[self.tableInd][self.level] or self.exp < 0:
			self.calEnable = 0
			self.outString = 'input exp is incorrect.'
		elif self.feed5 < 0 or self.feed20 < 0 or self.feed100 < 0:
			self.calEnable = 0
			self.outString = 'input is incorrect.'
		elif self.feed5x < 0 or self.feed20x < 0 or self.feed100x < 0:
			self.calEnable = 0
			self.outString = 'input is incorrect.'
	
	def genExpLeft(self):
		for i in range(self.level, self.levelMax):
			self.expLeft += self.expTable[self.tableInd][i]

		self.expLeft += self.exp - self.expTable[self.tableInd][self.level]
		self.expLeft -= self.feed5 * 1080 + self.feed20 * 2700 + self.feed100 * 7200
		self.expLeft -= self.feed5x * 720 + self.feed20x * 1800 + self.feed100x * 4800
	
	class tableData:
		def __init__(self):
			self.cnt5 = 0
			self.cnt20 = 0
			self.cnt100 = 0
			self.cntTotal = 0
			self.overflow = 0
	
	def genFeedTable(self):
		repTimes = int(math.floor(self.expLeft / 7200))

		for i in range(0, repTimes):
			tempData = self.tableData()
			tempData.cnt100 = repTimes - i
			tempData.cnt20 = int(math.floor((self.expLeft - tempData.cnt100 * 7200 ) / 2700))
			tempData.cnt5 = int(math.floor((self.expLeft - tempData.cnt100 * 7200 - tempData.cnt20 * 2700 ) / 1080) + 1)

			expT = tempData.cnt100 * 7200 + tempData.cnt20 * 2700 + tempData.cnt5 * 1080
			tempData.overflow = expT - self.expLeft

			if tempData.overflow >= 1080:
				tempData.cnt5 -= 1
				expT -= 1080
				tempData.overflow -= 1080
			
			if tempData.cnt5 == 3 and tempData.overflow >= 540:
				tempData.cnt5 -= 3
				tempData.cnt20 += 1
				expT += 2700 - 1080 * 3
				tempData.overflow += 2700 - 1080 * 3
			
			tempData.cntTotal = tempData.cnt5 + tempData.cnt20 + tempData.cnt100
			self.feedTable.append(tempData)


	def genOutput(self):
		self.expLeft = 0
		self.outString = ''
		self.tableInd = 0
		self.levelMax = 0
		self.calEnable = 1
		self.feedTable = []
		
		self.checkPrompt()
		self.checkRarity()
		self.checkInput()
		
		if self.calEnable:
			self.genExpLeft()
			self.genFeedTable()
