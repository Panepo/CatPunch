# Flower Knight Girl experience calculator - GUI version
# version 2.1
"""
A tiny Python program for FLOWER KNIGHT GIRL
"""

"""
version history
1.0 protype command line version
2.0 Beta gui version
2.1 Beta gui version re-written, cause by accidient
"""

from Tkinter import *
#from PIL import Image, ImageTk
import ttk
import os

class FlowerGUI(Frame):
	def __init__(self, master=None):
		Frame.__init__(self, master)
		self.grid()
		self.createWidgets()
		
		# EXP calculation table
		self.ExpTable = {}
		self.ExpTable[2] = [0, 33, 34, 59, 83, 114, 152, 189, 231, 276, 323, 373, 426, 479, 537, 597, 655, 721, 785, 852, 921, 990, 1065, 1138, 1212, 1291, 1371, 1449, 1533, 1613, 1702, 1786, 1874, 1965, 2054, 2146, 2240, 2335, 2429, 2530, 2625, 2725, 2827, 2929, 3034, 3136, 3244, 3351, 3458, 3568, 3678, 3788, 3903, 4016, 4132, 4217, 4364, 4482, 4602, 4720]
		self.ExpTable[4] = [0, 34, 37, 62, 92, 129, 168, 211, 258, 308, 363, 416, 478, 537, 601, 671, 736, 807, 881, 958, 1034, 1113, 1194, 1279, 1363, 1450, 1539, 1628, 1723, 1815, 1911, 2007, 2109, 2207, 2308, 2415, 2517, 2625, 2731, 2843, 2952, 3064, 3178, 3295, 3409, 3527, 3648, 3768, 3888, 4011, 4135, 4263, 4388, 4516, 4645, 4776, 4907, 5041, 5176, 5308]
		self.ExpTable[5] = [0, 34, 41, 65, 101, 141, 186, 233, 285, 341, 400, 463, 527, 596, 668, 741, 818, 897, 976, 1061, 1149, 1233, 1327, 1418, 1512, 1610, 1709, 1808, 1910, 2017, 2121, 2230, 2339, 2452, 2564, 2679, 2796, 2913, 3036, 3156, 3278, 3404, 3529, 3658, 3788, 3917, 4051, 4184, 4320, 4454, 4594, 4735, 4873, 5017, 5160, 5305, 5451, 5599, 5748, 5897, 6049, 6201, 6357, 6513, 6667, 6825, 6984, 7145, 7307, 7469]
		self.ExpTable[6] = [0, 34, 41, 69, 105, 146, 191, 242, 296, 353, 417, 479, 548, 622, 691, 771, 851, 929, 1018, 1102, 1192, 1284, 1379, 1475, 1572, 1673, 1777, 1880, 1986, 2096, 2205, 2319, 2433, 2549, 2667, 2785, 2907, 3030, 3155, 3282, 3409, 3540, 3671, 3804, 3937, 4074, 4211, 4351, 4491, 4634, 4776, 4992, 5069, 5217, 5365, 5518, 5668, 5822, 5977, 6133, 6290, 6450, 6608, 6772, 6935, 7098, 7263, 7429, 7559, 7767]
		
		# Image path table for title image
		self.ImgPath = {}
		self.ImgPath[2] = ["./img\\2ichgo.jpg", "./img\\2ichgo1.jpg"]
		self.ImgPath[3] = ["./img\\3kikiyo.jpg", "./img\\3kikiyo1.jpg"]
		self.ImgPath[4] = ["./img\\4purple.jpg", "./img\\4purple1.jpg"]
		self.ImgPath[5] = ["./img\\5orange.jpg", "./img\\5orange1.jpg"]
		self.ImgPath[6] = ["./img\\6hanamomo.jpg", "./img\\6hanamomo1.jpg"]

	# create GUI widgets
	def createWidgets(self):
		self.style = ttk.Style()
		
		self.frame = ttk.Frame(self)
		self.frame["relief"] = GROOVE
		self.frame["borderwidth"] = 2
		self.frame.grid()
		
		self.TitleText = Label(self.frame)
		self.TitleText["text"] = "FLOWER KNIGHT GIRL EXP Calculator"
		self.TitleText.grid(row=0, column=0, columnspan=6, pady=5)
		
		#if os.path.exists("./img\\6hanamomo.jpg"):
		#	image = Image.open("./img\\6hanamomo.jpg")
		#	photo = ImageTk.PhotoImage(image)
		#	self.TitleImg = Label(self.frame)
		#	self.TitleImg["image"] = photo
		#	self.TitleImg.image = photo
		#	self.TitleImg.grid(row=0, rowspan=2, column=6, columnspan=2)
		
		self.RarityText = Label(self.frame)
		self.RarityText["text"] = "Rarity:"
		self.RarityText.grid(row=1, column=0, sticky=E, pady=5)
		
		self.RarityVar = IntVar()
		self.RarityVar.set(6)
				
		self.RarityRad2 = Radiobutton(self.frame)
		self.RarityRad2["text"] = "**"
		self.RarityRad2["variable"] = self.RarityVar
		self.RarityRad2["value"] = 2
		self.RarityRad2["indicatoron"] = 0
		self.RarityRad2["width"] = 6
		self.RarityRad2["command"] = self.SimuCal
		self.RarityRad2.grid(row=1, column=1, sticky=W)

		self.RarityRad3 = Radiobutton(self.frame)
		self.RarityRad3["text"] = "***"
		self.RarityRad3["variable"] = self.RarityVar
		self.RarityRad3["value"] = 3
		self.RarityRad3["indicatoron"] = 0
		self.RarityRad3["width"] = 6
		self.RarityRad3["command"] = self.SimuCal
		self.RarityRad3.grid(row=1, column=2, sticky=W)

		self.RarityRad4 = Radiobutton(self.frame)
		self.RarityRad4["text"] = "****"
		self.RarityRad4["variable"] = self.RarityVar
		self.RarityRad4["value"] = 4
		self.RarityRad4["indicatoron"] = 0
		self.RarityRad4["width"] = 6
		self.RarityRad4["command"] = self.SimuCal
		self.RarityRad4.grid(row=1, column=3, sticky=W)
		
		self.RarityRad5 = Radiobutton(self.frame)
		self.RarityRad5["text"] = "*****"
		self.RarityRad5["variable"] = self.RarityVar
		self.RarityRad5["value"] = 5
		self.RarityRad5["indicatoron"] = 0
		self.RarityRad5["width"] = 6
		self.RarityRad5["command"] = self.SimuCal
		self.RarityRad5.grid(row=1, column=4, sticky=W)

		self.RarityRad6 = Radiobutton(self.frame)
		self.RarityRad6["text"] = "******"
		self.RarityRad6["variable"] = self.RarityVar
		self.RarityRad6["value"] = 6
		self.RarityRad6["indicatoron"] = 0
		self.RarityRad6["width"] = 6
		self.RarityRad6["command"] = self.SimuCal
		self.RarityRad6.grid(row=1, column=5, sticky=W)
	
		self.PromText = Label(self.frame)
		self.PromText["text"] = "Promopt:"
		self.PromText.grid(row=2, column=0, sticky=E, pady=5)
		
		self.PromVar = IntVar()
		self.PromVar.set(0)
		
		self.PromRad0 = Radiobutton(self.frame)
		self.PromRad0["text"] = "No"
		self.PromRad0["variable"] = self.PromVar
		self.PromRad0["value"] = 0
		self.PromRad0["indicatoron"] = 0
		self.PromRad0["width"] = 6
		self.PromRad0["command"] = self.SimuCal
		self.PromRad0.grid(row=2, column=1, sticky=W)

		self.PromRad1 = Radiobutton(self.frame)
		self.PromRad1["text"] = "Yes"
		self.PromRad1["variable"] = self.PromVar
		self.PromRad1["value"] = 1
		self.PromRad1["indicatoron"] = 0
		self.PromRad1["width"] = 6
		self.PromRad1["command"] = self.SimuCal
		self.PromRad1.grid(row=2, column=2, sticky=W)
		
		self.LvText = Label(self.frame)
		self.LvText["text"] = "Level:"
		self.LvText.grid(row=2, column=3, sticky=E)
		
		self.LvInput = ttk.Entry(self.frame)
		self.LvInput["width"] = 6
		self.LvInput.insert(0, "1")
		self.LvInput.grid(row=2, column=4, sticky=W)
		self.LvInput.bind_all('<Key>', self.SimuBind)
		
		self.ExpText = Label(self.frame)
		self.ExpText["text"] = "Exp Left:"
		self.ExpText.grid(row=2, column=5, sticky=E)
		
		self.ExpInput = ttk.Entry(self.frame)
		self.ExpInput["width"] = 6
		self.ExpInput.insert(0, "33")
		self.ExpInput.grid(row=2, column=6, sticky=W)
		self.ExpInput.bind_all('<Key>', self.SimuBind)
		
		self.FeedText = Label(self.frame)
		self.FeedText["text"] = "Feed:"
		self.FeedText.grid(row=3, column=0, sticky=E, pady=5)
		
		self.Feed5Text = Label(self.frame)
		self.Feed5Text["text"] = "age 5:"
		self.Feed5Text.grid(row=3, column=1, sticky=E)
		
		self.Feed5Input = ttk.Entry(self.frame)
		self.Feed5Input["width"] = 6
		self.Feed5Input.insert(0, "0")
		self.Feed5Input.grid(row=3, column=2, sticky=W)
		self.Feed5Input.bind_all('<Key>', self.SimuBind)
		
		self.Feed20Text = Label(self.frame)
		self.Feed20Text["text"] = "age 20:"
		self.Feed20Text.grid(row=3, column=3, sticky=E)
		
		self.Feed20Input = ttk.Entry(self.frame)
		self.Feed20Input["width"] = 6
		self.Feed20Input.insert(0, "0")
		self.Feed20Input.grid(row=3, column=4, sticky=W)
		self.Feed20Input.bind_all('<Key>', self.SimuBind)
		
		self.Feed100Text = Label(self.frame)
		self.Feed100Text["text"] = "age 100:"
		self.Feed100Text.grid(row=3, column=5, sticky=E)
		
		self.Feed100Input = ttk.Entry(self.frame)
		self.Feed100Input["width"] = 6
		self.Feed100Input.insert(0, "0")
		self.Feed100Input.grid(row=3, column=6, sticky=W)
		self.Feed100Input.bind_all('<Key>', self.SimuBind)
		
		self.FeedxText = Label(self.frame)
		self.FeedxText["text"] = "Diff Elem"
		self.FeedxText.grid(row=4, column=0, sticky=E, pady=5)
		
		self.Feed5xText = Label(self.frame)
		self.Feed5xText["text"] = "age 5:"
		self.Feed5xText.grid(row=4, column=1, sticky=E)
		
		self.Feed5xInput = ttk.Entry(self.frame)
		self.Feed5xInput["width"] = 6
		self.Feed5xInput.insert(0, "0")
		self.Feed5xInput.grid(row=4, column=2, sticky=W)
		self.Feed5xInput.bind_all('<Key>', self.SimuBind)
		
		self.Feed20xText = Label(self.frame)
		self.Feed20xText["text"] = "age 20:"
		self.Feed20xText.grid(row=4, column=3, sticky=E)
		
		self.Feed20xInput = ttk.Entry(self.frame)
		self.Feed20xInput["width"] = 6
		self.Feed20xInput.insert(0, "0")
		self.Feed20xInput.grid(row=4, column=4, sticky=W)
		self.Feed20xInput.bind_all('<Key>', self.SimuBind)
		
		self.Feed100xText = ttk.Label(self.frame)
		self.Feed100xText["text"] = "age 100:"
		self.Feed100xText.grid(row=4, column=5, sticky=E)
		
		self.Feed100xInput = ttk.Entry(self.frame)
		self.Feed100xInput["width"] = 6
		self.Feed100xInput.insert(0, "0")
		self.Feed100xInput.grid(row=4, column=6, sticky=W)
		self.Feed100xInput.bind_all('<Key>', self.SimuBind)
		
		self.OutList = Listbox(self)
		self.OutList["width"] = 57
		self.OutList["selectmode"] = EXTENDED
		self.OutList["relief"] = SUNKEN
		self.OutList["bd"] = 1
		self.OutList.grid(row=5, rowspan=8, column=0, columnspan=8, sticky=W)
	
	#calculate function for bind
	def SimuBind(self, event):
		self.SimuCal()

	#main calculate function
	def SimuCal(self):
		#get values from gui
		self.InputRarity = self.RarityVar.get()
		self.InputProm = self.PromVar.get()
		self.InputLv = self.LvInput.get()
		self.InputExp = self.ExpInput.get()
		
		self.Input5cnt = self.Feed5Input.get()
		self.Input20cnt = self.Feed20Input.get()
		self.Input100cnt = self.Feed100Input.get()
		
		self.Input5xcnt = self.Feed5xInput.get()
		self.Input20xcnt = self.Feed20xInput.get()
		self.Input100xcnt = self.Feed100xInput.get()
		
		#change title image
		#if os.path.exists(self.ImgPath[self.InputRarity][self.InputProm]):
		#	image = Image.open(self.ImgPath[self.InputRarity][self.InputProm])
		#	photo = ImageTk.PhotoImage(image)
		#	self.TitleImg["image"] = photo
		#	self.TitleImg.image = photo
		
		#clear outlist, initialize
		self.OutList.delete(0, END)
		
		#detect if gui input is wrong
		if self.InputLv.isdigit() == False or len(self.InputLv) == 0:
			self.OutList.insert(END, "Wrong level input" )
		elif self.InputExp.isdigit() == False or len(self.InputExp) == 0:
			self.OutList.insert(END, "Wrong exp input" )
		elif self.Input5cnt.isdigit() == False or len(self.Input5cnt) == 0:
			self.OutList.insert(END, "Wrong feed input" )
			self.Feed5Input.insert(0, "0")
		elif self.Input20cnt.isdigit() == False or len(self.Input20cnt) == 0:
			self.OutList.insert(END, "Wrong feed input" )
			self.Feed20Input.insert(0, "0")
		elif self.Input100cnt.isdigit() == False or len(self.Input100cnt) == 0:
			self.OutList.insert(END, "Wrong feed input" )
			self.Feed100Input.insert(0, "0")
		elif self.Input5xcnt.isdigit() == False or len(self.Input5xcnt) == 0:
			self.OutList.insert(END, "Wrong feed input" )
			self.Feed5xInput.insert(0, "0")
		elif self.Input20xcnt.isdigit() == False or len(self.Input20xcnt) == 0:
			self.OutList.insert(END, "Wrong feed input" )
			self.Feed20xInput.insert(0, "0")
		elif self.Input100xcnt.isdigit() == False or len(self.Input100xcnt) == 0:
			self.OutList.insert(END, "Wrong feed input" )
			self.Feed100xInput.insert(0, "0")
		else:
			self.ExpCal()
		
		# debug message
		#self.OutList.insert(END, self.InputRarity )
		#self.OutList.insert(END, self.InputProm )
		#self.OutList.insert(END, self.InputLv )
		#self.OutList.insert(END, self.InputExp )

	# main function to calculate how much exp left
	def ExpCal(self):
		self.ExpLeft = 0
		
		# initial the default value of LevelMax
		if int(self.InputProm) == 0:
			LevelMax = 0
		elif int(self.InputProm) == 1:
			LevelMax = 10
		
		# calculate LevelMax value and set the table indicator
		TableInd = 2	
		if int(self.InputRarity) == 2 or int(self.InputRarity) == 3:
			LevelMax = LevelMax + 50
		elif int(self.InputRarity) == 4:
			LevelMax = LevelMax + 50
			TableInd = 4
		elif int(self.InputRarity) == 5:
			LevelMax = LevelMax + 60
			TableInd = 5
		elif int(self.InputRarity) == 6:
			LevelMax = LevelMax + 60
			TableInd = 6
		
		# detect if input level is wrong
		if int(self.InputLv) > LevelMax:
			self.OutList.insert(END, "Wrong level input" )
		else:
			# detect if input exp left is wrong
			if int(self.InputExp) > self.ExpTable[TableInd][int(self.InputLv)]:
				self.OutList.insert(END, "Wrong exp input" )
			else:
				# calculate how much exp left
				i = int(self.InputLv)
				while (i < LevelMax):
					self.ExpLeft = self.ExpLeft + self.ExpTable[TableInd][i]
					i = i + 1
			
				self.ExpLeft = self.ExpLeft + int(self.InputExp) - self.ExpTable[TableInd][int(self.InputLv)]
				self.ExpLeft = self.ExpLeft - int(self.Input5cnt)*1080 - int(self.Input20cnt)*2700 - int(self.Input100cnt)*7200
				self.ExpLeft = self.ExpLeft - int(self.Input5xcnt)*720 - int(self.Input20xcnt)*1800 - int(self.Input100xcnt)*4800 
				self.OutList.insert(END,'EXP NEED:%d' % ( self.ExpLeft ) )
				# call feed function
				self.FeedCal()

	# main function to calculate how many items to feed
	def FeedCal(self):
		RepTimes = self.ExpLeft / 7200
		i = 0
		
		# calcuate how many items to feed for several situtaion
		while i <= RepTimes and i < 10:
			cnt100 = self.ExpLeft / 7200
			cnt100 = cnt100 - i
			cnt20 = ( self.ExpLeft - cnt100*7200 ) / 2700
			cnt5 = ( self.ExpLeft - cnt100*7200 - cnt20*2700 ) / 1080 + 1
			
			ExpT = ( cnt100*7200 + cnt20*2700 + cnt5*1080 )			
			overflow = ExpT - self.ExpLeft
			
			if overflow >= 1080:
				cnt5 = cnt5 - 1
				ExpT = ( cnt100*7200 + cnt20*2700 + cnt5*1080 )			
				overflow = ExpT - self.ExpLeft 
				
			if cnt5 == 3 and overflow >= 540:
				cnt20 = cnt20 + 1
				cnt5 = cnt5 - 3
				ExpT = ( cnt100*7200 + cnt20*2700 + cnt5*1080 )			
				overflow = ExpT - self.ExpLeft
			
			cnt = ( cnt100 + cnt20 + cnt5 )
			if cnt <= 10:
				gb = 'good'
			else:
				gb = 'bad'
			
			# print output message
			text = ('100:[%d]  20:[%d]  5:[%d]  total:[%d]  overflow:[%d]  %s' % ( cnt100, cnt20, cnt5, cnt, overflow, gb))
			self.OutList.insert(END, text )
			i = i + 1

if __name__ == '__main__':
	root = Tk()
	root.title("FLOWER KNIGHT GIRL EXP Calculator")
	
	if os.path.exists("./img\\python1.ico"):
		root.iconbitmap("./img\\python1.ico")
	
	root.resizable(0, 0)
	app = FlowerGUI(master=root)
	app.mainloop()
