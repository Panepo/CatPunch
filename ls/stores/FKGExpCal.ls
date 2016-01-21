FKGExpCal = 
	ExpCal: (CalData) ->
		ExpTable = []
		ExpTable[0] = [0, 33, 34, 59, 83, 114, 152, 189, 231, 276, 323, 373, 426, 479, 537, 597, 655, 721, 785, 852, 921, 990, 1065, 1138, 1212, 1291, 1371, 1449, 1533, 1613, 1702, 1786, 1874, 1965, 2054, 2146, 2240, 2335, 2429, 2530, 2625, 2725, 2827, 2929, 3034, 3136, 3244, 3351, 3458, 3568, 3678, 3788, 3903, 4016, 4132, 4217, 4364, 4482, 4602, 4720];
		ExpTable[1] = [0, 34, 37, 62, 92, 129, 168, 211, 258, 308, 363, 416, 478, 537, 601, 671, 736, 807, 881, 958, 1034, 1113, 1194, 1279, 1363, 1450, 1539, 1628, 1723, 1815, 1911, 2007, 2109, 2207, 2308, 2415, 2517, 2625, 2731, 2843, 2952, 3064, 3178, 3295, 3409, 3527, 3648, 3768, 3888, 4011, 4135, 4263, 4388, 4516, 4645, 4776, 4907, 5041, 5176, 5308];
		ExpTable[2] = [0, 34, 41, 65, 101, 141, 186, 233, 285, 341, 400, 463, 527, 596, 668, 741, 818, 897, 976, 1061, 1149, 1233, 1327, 1418, 1512, 1610, 1709, 1808, 1910, 2017, 2121, 2230, 2339, 2452, 2564, 2679, 2796, 2913, 3036, 3156, 3278, 3404, 3529, 3658, 3788, 3917, 4051, 4184, 4320, 4454, 4594, 4735, 4873, 5017, 5160, 5305, 5451, 5599, 5748, 5897, 6049, 6201, 6357, 6513, 6667, 6825, 6984, 7145, 7307, 7469];
		ExpTable[3] = [0, 34, 41, 69, 105, 146, 191, 242, 296, 353, 417, 479, 548, 622, 691, 771, 851, 929, 1018, 1102, 1192, 1284, 1379, 1475, 1572, 1673, 1777, 1880, 1986, 2096, 2205, 2319, 2433, 2549, 2667, 2785, 2907, 3030, 3155, 3282, 3409, 3540, 3671, 3804, 3937, 4074, 4211, 4351, 4491, 4634, 4776, 4992, 5069, 5217, 5365, 5518, 5668, 5822, 5977, 6133, 6290, 6450, 6608, 6772, 6935, 7098, 7263, 7429, 7559, 7767];
		
		InpLevel = CalData.InpLevel
		InpExp = CalData.InpExp
		InpFeed5 = CalData.InpFeed5
		InpFeed20 = CalData.InpFeed20
		InpFeed100 = CalData.InpFeed100
		InpFeed5x = CalData.InpFeed5x
		InpFeed20x = CalData.InpFeed20x
		InpFeed100x = CalData.InpFeed100x
		InpRarity = CalData.InpRarity
		InpPrompt = CalData.InpPrompt
		
		if InpPrompt is 0
			LevelMax = 0
		else if InpPrompt is 1
			LevelMax = 10

		TableInd = 0
		if InpRarity is 2 or InpRarity is 3
			LevelMax = LevelMax + 50
		else if InpRarity is 4
			LevelMax = LevelMax + 50
			TableInd = 1
		else if InpRarity is 5
			LevelMax = LevelMax + 60
			TableInd = 2
		else if InpRarity is 6
			LevelMax = LevelMax + 60
			TableInd = 3
	
		CalEnable = true
		if InpLevel > LevelMax
			CalEnable = false
			outString = "Lv数値が正しくありません"
		else if InpExp > ExpTable[TableInd][InpLevel]
			CalEnable = false
			outString = "経験値数値が正しくありません"
		else if isNaN(InpLevel) is true or isNaN(InpExp) is true
			CalEnable = false
			outString = "数値が正しくありません"
		else if isNaN(InpFeed5) is true or isNaN(InpFeed20) is true or isNaN(InpFeed100) is true
			CalEnable = false
			outString = "数値が正しくありません"
		else if isNaN(InpFeed5x) is true or isNaN(InpFeed20x) is true or isNaN(InpFeed100x) is true
			CalEnable = false
			outString = "数値が正しくありません"
		
		ExpLeft = 0
		FeedTable = []
		if CalEnable is true
			ExpLeft = 0
			for i from InpLevel to LevelMax
				ExpLeft = ExpLeft + ExpTable[TableInd][i]
			
			ExpLeft += InpExp - ExpTable[TableInd][InpLevel]
			ExpLeft -= InpFeed5*1080 + InpFeed20*2700 + InpFeed100*7200
			ExpLeft -= InpFeed5x*720 + InpFeed20x*1800 + InpFeed100x*4800
			FeedTable = @FeedCal(ExpLeft)
		
		return [outString, ExpLeft, FeedTable]
	FeedCal: (ExpLeft) ->
		FeedTable = []
		RepTimes = Math.floor(ExpLeft / 7200)
		
		FeedTable[0] = []
		for i from 0 to RepTimes and i < 8 
			cnt100 = RepTimes - i
			cnt20 = Math.floor(( ExpLeft - cnt100*7200 ) / 2700)
			cnt5 = Math.floor(( ExpLeft - cnt100*7200 - cnt20*2700 ) / 1080) + 1
			
			ExpT = cnt100*7200 + cnt20*2700 + cnt5*1080
			overflow = ExpT - ExpLeft
			
			if overflow >= 1080
				cnt5 = cnt5 - 1
				ExpT = cnt100*7200 + cnt20*2700 + cnt5*1080
				overflow = ExpT - ExpLeft
			
			if cnt5 == 3 and overflow >= 540
				cnt20 = cnt20 + 1
				cnt5 = cnt5 - 3
				ExpT = cnt100*7200 + cnt20*2700 + cnt5*1080
				overflow = ExpT - ExpLeft
				
			cnt = cnt100 + cnt20 + cnt5
			
			FeedTable[i] = [];
			FeedTable[i] = [cnt100, cnt20, cnt5, cnt, overflow];
		
		return FeedTable

module.exports = FKGExpCal