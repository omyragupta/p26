function setup() {
  createCanvas(1000,1600);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  text ("RED VELVET CAKE RECIPIE",10,50) ;
  textSize(32);
  text ("Ingredients",15,90);
  textSize(25);
  text("1 (18.25 ounce) package yellow cake mix",20,120);
  text ("1 (3.5 ounce) package instant vanilla pudding mix",30,180);
  text("4 eggs",30,210);
  text("1 ounce red food coloring",30,240);
  text("½ cup vegetable oil",30,270);
  text("1 cup water",30,300);
  text("1 tablespoon distilled white vinegar",30,330);
  text("1 tablespoon unsweetened cocoa powder",30,360);
  text("1 cup cold milk",30,390);
  text("1 (8 ounce) package cream cheese",30,420);
  text("1 (3.5 ounce) package instant vanilla pudding mix",30,450);
  text("1 (8 ounce) container frozen whipped topping, thawed",30,480);
  textSize(24)
  text("Directions",30,530)
  textSize(30)
  text("Step 1: Preheat oven to 350 degrees F (175 degrees C). Grease and flour one 9 x 13 inch pan.",30,560);
  text ("Step 2 : Mix together cake mix, 1 box pudding mix, eggs, oil, food coloring, water, vinegar, and cocoa. Pour into prepared pan.",30,590);
  text("Step 3 : Bake at 350 degrees F (175 degrees C) for 35 to 40 minutes. Cool.",30,620);
  text ("Step 4 :Beat together milk and cream cheese. Mix in 1 box pudding mix. Fold in whipped topping. Spread on cooled cake. Refrigerate.",30,650);
  textSize(24)
  drawSprites();
}