var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./sprites/kingHippo2.png");









ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	var kingHippo = new KingHippo(gameEngine);

	gameEngine.init(ctx);
	gameEngine.addEntity(kingHippo);
	gameEngine.start();
});
