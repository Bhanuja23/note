var light,L;
var thumbnail,kira_ryuzaki,rules,headquaters,jist;
var button,timer=600;
var light_kira, L_detect;
var gs=0
function preload(){
	
	investigationArea=loadImage("headquaters.jpeg")
   	deathNoteRules=loadImage("death note rules.jpeg")
	ryukPlay=loadImage("thumbnail.jpeg")
	kiraVsRyuzaki=loadImage("vs.jpeg")
    	storyline=loadImage("jist.jpeg")
	light=loadImage("li - Copy.png")
	L=loadImage("ryu.png")
	l1=loadImage("1.jpeg")
	light1=loadImage("2.jpeg")
	l2=loadImage("3.jpeg")
	light2= loadImage("4.jpeg")
	l3=loadImage("5.jpeg")
	light3=loadImage("6.jpeg")
	l4=loadImage("7.jpeg")
	light4=loadImage("8.jpeg")
	l5=loadImage("9.jpeg")

	l6=loadImage("11.jpeg")

	l7=loadImage("13.jpeg")

	l8=loadImage("15.jpeg")

	l9=loadImage("18.jpeg")

	l10=loadImage("20.jpeg")

	l11=loadImage("22.jpeg")

	l12=loadImage("24.jpeg")

	l13=loadImage("26.jpeg")

	l14=loadImage("28.jpeg")

	lightA=loadImage("A.jpeg")
	L_music=loadSound("l's soundtrack.mp3")
	light_music=loadSound("light soundtrack.mp3")
	light_laugh=loadSound("light's laugh soundtrack.mp3")
	bg_music=loadSound("thumbnail soundtrack (1).mp3")
}

function setup(){
	createCanvas(windowWidth,windowHeight)
	background1=createSprite(width/2,height/2,width,height)
	background1.addImage("1",ryukPlay)
	button=createButton("next")
	button.position(width/2+200,height-50)
	background1.scale=0.9
	bg_music.loop()
	button.mousePressed(()=>{
		background1.addImage("2",kiraVsRyuzaki)
		background1.changeImage("2")
		button.hide()
	   	jist=createSprite(width/2,height/2+10)
		jist.addImage(storyline)
		console.log(timer)
		jist.scale=0.5

		
		button1=createButton("next")
		button1.position(width/2+200,height-50)
		button1.mousePressed(()=>{
			background1.addImage("3",deathNoteRules)
			background1.changeImage("3")
			button1.hide()
			button2=createButton("next")
			button2.position(width/2+200,height-50)
			button2.mousePressed(()=>{
				background1.addImage("4",investigationArea)
				background1.changeImage("4")
				background1.scale=3
				button2.hide()
				//Instead of sprites PLEASE CHANGE IT ALL TO BUTTONS then it will work
				//now once you click on L1 BUTTON It will move to next step
				//mousepressedover is not working as we have hided many images in the background and 
				//not able to detect the mouse press hence change it to buttons instead of images, conversation can be in terms of buttons
    				L1=createButton("L-ahh Light!!");
				L1.position(450,400)
    				light_kira=createSprite(1200,700,10 ,10);
				light_kira.addImage(light);
				light_kira.scale=0.8;
				L_detect=createSprite(400,700,10,10);
				L_detect.addImage(L);
				L_detect.scale=3;
				L1.mousePressed(()=>{
					kira1=createSprite(1050,450,10,10)
					kiraA=createSprite(1450,450,10,10)
					kira1.scale=0.5
					kiraA.scale=0.5
					kira1.addImage(light1)
					kiraA.addImage(lightA)
					L1.remove()
				})

				
				bg_music.stop()
			})	
		})
	})
}

function draw(){
	background("black")
	timer=timer-1
	if(timer<=0){
		jist.destroy()
		timer=0
	}
	
	drawSprites()
	text(mouseX+","+mouseY,mouseX,mouseY)
}

