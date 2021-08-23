var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3decf8d7-8a89-400f-9e70-bbe83c52c36f","670e90f8-d002-4e53-a11a-83d1cbf03aeb","6677b2d5-b32b-4c02-92f2-c88b24e1e275","2150839f-0072-4800-8c4a-e64757c03e86","133e6ede-5fae-46a3-bc45-67a5e561a72e","06f64be6-2d24-46c4-94ab-0075c26c535c"],"propsByKey":{"3decf8d7-8a89-400f-9e70-bbe83c52c36f":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/At9X2LiZq9X6dQUW0NBluC3Te8fbAPEx/category_backgrounds/background_desert.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"At9X2LiZq9X6dQUW0NBluC3Te8fbAPEx","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/At9X2LiZq9X6dQUW0NBluC3Te8fbAPEx/category_backgrounds/background_desert.png"},"670e90f8-d002-4e53-a11a-83d1cbf03aeb":{"name":"e3","sourceUrl":"assets/api/v1/animation-library/gamelab/Jg7eSCK4Sw8y4_lP9B96_mxmmTfjt.Rd/category_faces/gameplayfaces_08.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Jg7eSCK4Sw8y4_lP9B96_mxmmTfjt.Rd","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Jg7eSCK4Sw8y4_lP9B96_mxmmTfjt.Rd/category_faces/gameplayfaces_08.png"},"6677b2d5-b32b-4c02-92f2-c88b24e1e275":{"name":"e2","sourceUrl":"assets/api/v1/animation-library/gamelab/06wPXKdEQcswfpqQZSlfk0f9AlqkYNH./category_faces/gameplayfaces_07.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"06wPXKdEQcswfpqQZSlfk0f9AlqkYNH.","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/06wPXKdEQcswfpqQZSlfk0f9AlqkYNH./category_faces/gameplayfaces_07.png"},"2150839f-0072-4800-8c4a-e64757c03e86":{"name":"e1","sourceUrl":"assets/api/v1/animation-library/gamelab/uqj19TeyStK4uCLX36xRtjFAZpeseHv0/category_faces/gameplayfaces_09.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"uqj19TeyStK4uCLX36xRtjFAZpeseHv0","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uqj19TeyStK4uCLX36xRtjFAZpeseHv0/category_faces/gameplayfaces_09.png"},"133e6ede-5fae-46a3-bc45-67a5e561a72e":{"name":"hero","sourceUrl":"assets/api/v1/animation-library/gamelab/03EvfUX9qjzBAO2yxqRQ5KQWDGnKJXMy/category_faces/kidportrait_05.png","frameSize":{"x":314,"y":363},"frameCount":1,"looping":true,"frameDelay":2,"version":"03EvfUX9qjzBAO2yxqRQ5KQWDGnKJXMy","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":314,"y":363},"rootRelativePath":"assets/api/v1/animation-library/gamelab/03EvfUX9qjzBAO2yxqRQ5KQWDGnKJXMy/category_faces/kidportrait_05.png"},"06f64be6-2d24-46c4-94ab-0075c26c535c":{"name":"goal","sourceUrl":"assets/api/v1/animation-library/gamelab/Rz2WTMNLuG_yiAT27cdGhExV1mdYwHAe/category_buildings/building_17.png","frameSize":{"x":398,"y":341},"frameCount":1,"looping":true,"frameDelay":2,"version":"Rz2WTMNLuG_yiAT27cdGhExV1mdYwHAe","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":341},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Rz2WTMNLuG_yiAT27cdGhExV1mdYwHAe/category_buildings/building_17.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b");

var hero=createSprite(200,345,20,20);
hero.shapeColor="red";

var  enemy1=createSprite(200,250,30,30);
enemy1.shapeColor="cyan";

var enemy2 = createSprite(200,150,30,30);
enemy2.shapeColor="cyan";

var enemy3 = createSprite(200,60,30,30);
enemy3.shapeColor="cyan";

var net = createSprite(200,5,197,20);
net.shapeColor="yellow";

var goal=0;
var death=0;

hero.setAnimation("hero");
hero.scale=0.2;
enemy1.setAnimation("e1");
enemy1.scale=0.1;
enemy2.setAnimation("e2");
enemy2.scale=0.1;
enemy3.setAnimation("e3");
enemy3.scale=0.1;
net.setAnimation("goal");
net.scale=0.2;

enemy1.velocityX=6;
enemy2.velocityX=-6;
enemy3.velocityX=6;

function draw() {
 
drawSprites();
 
createEdgeSprites();

enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

 
if(keyDown(UP_ARROW)){
hero.y=hero.y-3;
}

if(keyDown(DOWN_ARROW)){
 hero.y=hero.y+3;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3;
}
 
if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1;
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}
 
}
 background("blue");
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
