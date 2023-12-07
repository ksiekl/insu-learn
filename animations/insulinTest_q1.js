(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.patch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F8A91").s().p("AlZhnIHgjnIDTG1IngDog");
	this.shape.setTransform(34.625,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.3,67);


(lib.rect6622 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoFp/IQLAAQByAABQBEQBQBEAABgIAAMwQAABfhQBEQhQBEhyAAIwLAAQhxAAhRhEQhQhEAAhfIAAswQAAhgBQhEQBRhEBxAAg");
	this.shape.setTransform(81.15,65.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6F8A91").s().p("AoFKAQhxAAhRhEQhQhEAAhfIAAswQAAhgBQhEQBRhEBxAAIQLAAQByAABQBEQBQBEAABgIAAMwQAABfhQBEQhQBEhyAAg");
	this.shape_1.setTransform(81.15,65.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rect6622, new cjs.Rectangle(-8.1,0,178.6,138.9), null);


(lib.path6892 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Agfi8IA/ABIC0F3ImnABg");
	this.shape.setTransform(21.175,18.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path6892, new cjs.Rectangle(0,0,42.4,37.7), null);


(lib.path6784 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhqBmQgsgqAAg8QAAg6AsgrQAsgqA+AAQA+AAAtAqQAsArAAA6QAAA8gsAqQgtAqg+AAQg9AAgtgqg");
	this.shape.setTransform(15.075,14.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path6784, new cjs.Rectangle(0,0,30.2,28.8), null);


(lib.path6730 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ao4HyIC3gKQgjhugSh/Qglj+BVhXQBDhEBrgmQBlgjBzgCQB1gBBmAiQBrAjBDBEQBWBWgmD/QgTCAgkBvIC2AAQAwiUAairQAzlWhyhzQhjhkieg1QiWgzirAAQiqABiWAzQieA3hjBkQhzB1AyFbQAZCuAwCWg");
	this.shape.setTransform(67.6329,51.7498);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6F8A91").s().p("AqBCuQgylbBzh1QBjhkCeg3QCWgzCqgBQCrAACWAzQCeA1BjBkQByBzgzFWQgaCrgwCUIi2AAQAkhvATiAQAmj/hWhWQhDhEhrgjQhmgih1ABQhzABhlAkQhrAmhDBEQhVBWAlD+QASCAAjBuIi3AKQgwiWgZiug");
	this.shape_1.setTransform(67.6329,51.7498);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path6730, new cjs.Rectangle(-6.9,-20.1,143.9,123.69999999999999), null);


(lib.keyHole = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C8C92").s().p("AgqAyQgSgUAAgeQAAgdASgUQASgVAYAAQAZAAARAVQATAUgBAdQABAegTAUQgRAUgZABQgYgBgSgUg");
	this.shape.setTransform(6.05,7.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,14.1);


(lib.path12406 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#806600").ss(3.9,0,0,11.3).p("AAHqFIgNUL");
	this.shape.setTransform(2.675,64.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path12406, new cjs.Rectangle(0,-1.9,5.4,133.20000000000002), null);


(lib.path12350 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#806600").ss(3.9,0,0,11.3).p("AAAiLQBCAAAuApQAuApAAA5QAAA6guApQguAphCAAQhAAAgvgpQgugpAAg6QAAg5AugpQAugpBBAAg");
	this.shape.setTransform(17.75,15.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhvBjQgugpAAg6QAAg5AugpQAvgpBAAAQBBAAAvApQAuApAAA5QAAA6guApQgvAphBAAQhAAAgvgpg");
	this.shape_1.setTransform(17.75,15.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path12350, new cjs.Rectangle(-11.1,0,57.800000000000004,32), null);


(lib.path12295 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#806600").ss(3.9,0,0,11.3).p("AD2sSImVAGIhsDqIC9AHIgFEkQgEA4gEBtQgFCVgBAQIkfAHIAJEWIEBAJIAFB4Ii3ABIACCQICwgCIAHCTQAQgBCCAAQCHgBAfAAIgB0zICtgGg");
	this.shape.setTransform(40.5298,80.6465);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4AA00").s().p("AhwKAIiwACIgCiQIC3gBIgFh4IkBgJIgJkWIEfgHIAGilQAEhtAEg4IAFkkIi9gHIBsjqIGVgGIB/DqIitAGIABUzIimABIiSABg");
	this.shape_1.setTransform(39.925,80.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path12295, new cjs.Rectangle(0,-0.1,81.1,161.4), null);


(lib.path12031 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#806600").ss(3.9,0,0,11.3).p("AAAp6QEPAADAC6QDAC6AAEGQAAEHjAC5QjAC6kPAAQkOAAjAi6QjAi5AAkHQAAkGDAi6QDAi6EOAAg");
	this.shape.setTransform(67.45,65.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4AA00").s().p("AnOHBQjAi6AAkHQAAkGDAi5QC/i7EPAAQEPAADAC7QDAC5AAEGQAAEHjAC6QjAC5kPAAQkPAAi/i5g");
	this.shape_1.setTransform(67.45,65.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path12031, new cjs.Rectangle(0,0.1,134.9,130.8), null);


(lib.glucosesvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// svg5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AESjnQjiAahtBQQicBwgnEG");
	this.shape.setTransform(38.4135,36.968);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("AhGiFQBuhQDigaIoTHfQAnkFCchwg");
	this.shape_1.setTransform(39.275,37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AgOoRQjfAOiYCbQicCeAADhQAAD2BUB8QBfCMDRAAQDiAADFiPQDNiVAujaQAdiLAAhXQgBhxguhGQhtinmUAYg");
	this.shape_2.setTransform(56.5254,55.2238);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AnNGJQhUh8AAj2QAAjhCcieQCYibDfgOQGUgYBtCnQAuBGABBxQAABXgdCLQguDajNCVQjFCPjiAAQjRAAhfiMg");
	this.shape_3.setTransform(56.5254,55.2238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,113.1,116.9);


(lib.path10438 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9955").s().p("Ag6A5QgZgXAAgiQAAghAZgXQAYgYAiAAQAjAAAYAYQAZAYAAAgQAAAigZAXQgYAYgjAAQgiAAgYgYg");
	this.shape.setTransform(8.375,8.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path10438, new cjs.Rectangle(0,0,16.8,16.3), null);


(lib.path10436 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9955").s().p("AhLBLQgfgeAAgtQAAgrAfggQAggfArAAQAtAAAeAfQAgAgAAArQAAAtggAeQgeAggtAAQgrAAggggg");
	this.shape.setTransform(10.65,10.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path10436, new cjs.Rectangle(0,0,21.3,21.3), null);


(lib.path10434 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9955").s().p("AghAgQgOgNgBgTQABgSAOgNQAOgOATAAQAUAAAOAOQAPANAAASQAAATgPANQgOAOgUAAQgTAAgOgOg");
	this.shape.setTransform(4.85,4.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path10434, new cjs.Rectangle(0,0,9.7,9.2), null);


(lib.path10380 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9955").s().p("AhzBzQgxgwAAhDQAAhCAxgwQAwgwBDAAQBEAAAxAwQAwAwAABCQAABDgwAwQgxAwhEgBQhDABgwgwg");
	this.shape.setTransform(16.5,16.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path10380, new cjs.Rectangle(0,0,33,32.5), null);


(lib.path1023858 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE8787").s().p("ACDDnQh7g3hRhhQhfhwgYiXQAJgqAdgDQAWgDAZAUQAZDAB0BiQAnAhA0AZQAcAOAoAQQAEAmgSAPQgOAMgcAAIgGAAg");
	this.shape.setTransform(19.3372,23.0936);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path1023858, new cjs.Rectangle(0,0,38.7,46.2), null);


(lib.path102385 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE8787").s().p("Ak0DKQgxgdAIgqQAHghAigcQD4AnCrh9QA5gqA1hAQAcgiAlgzQAxAJAMAfQAKAbgQAuQh3CXibBPQiMBIiYAAQgpAAgqgGg");
	this.shape.setTransform(35.0612,20.7598);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path102385, new cjs.Rectangle(0,0,70.2,41.5), null);


(lib.path102381 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE8787").s().p("ABjCJQgjiDhfg2QgggTgqgLIg1gNQgGgaAMgNQAKgLAZgCQBgAXBGA6QBRBCAfBnQgDAfgVAFIgKABQgNAAgPgHg");
	this.shape.setTransform(16.125,14.4403);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path102381, new cjs.Rectangle(0,0,32.3,28.9), null);


(lib.path10238 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE8787").s().p("ADBD8QhFjxi5hlQg/gjhQgUQgrgLg9gMQgNgwAYgYQATgVAxgEQC8ArCIBsQCeB6A9C9QgGA5gqAKQgKACgKAAQgYAAgdgOg");
	this.shape.setTransform(31.383,26.6164);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path10238, new cjs.Rectangle(0,0,62.8,53.3), null);


(lib.path102342 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE8787").s().p("AiUC7Qg0AAgbgNQgfgLgBgaQgBgZAZgQQAkgCBTgBQBIgFAkgbIiOi3IA3hAICYDHQAogUAwhIQAYgkAVglQAlgQAWATQAVATgTAoQhdDDixA9Qg/AVg/AAIgDAAg");
	this.shape.setTransform(26.0188,18.7006);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path102342, new cjs.Rectangle(0,0,52.1,37.4), null);


(lib.path10234 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE8787").s().p("AjRFJQgmgJAAg6QgCkYCxiwQA/g/BMgmQA+ggAogBQArgGAQAdQAQAcgVAiQhcAvgvAcQhTAxgbA0IETB9IgcBrIkpiKQgjAvgQBwQgHA5gFA2QgdAhgdAAIgMgBg");
	this.shape.setTransform(24.8489,33.0299);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path10234, new cjs.Rectangle(0,0,49.7,66.1), null);


(lib.path9880 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C83737").s().p("AndHTQjFjBAAkSQAAkRDFjBQDGjBEXgBQEXABDGDBQDGDBAAERQAAERjGDCQjGDBkXABQkXgBjGjBg");
	this.shape.setTransform(67.5,66.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path9880, new cjs.Rectangle(0,0,135,132.1), null);


(lib.path9878 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAAAA").s().p("An2SGQjohfiziuQiziuhijiQhmjqAAj/QAAj/BmjpQBijiCziuQCziuDohfQDwhjEGAAQEHAADwBjQDoBfCzCuQCzCuBiDiQBmDpAAD/QAAD/hmDqQhiDiizCuQizCujoBfQjwBjkHAAQkGAAjwhjg");
	this.shape.setTransform(129.275,125.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path9878, new cjs.Rectangle(0,0,258.6,251.4), null);


(lib.path9772 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8080").s().p("Ap6W2Qkkh4jhjcQjjjbh7keQiAkmAAlDQAAlCCAknQB8kdDijbQDhjcEkh4QEwh9FKAAQFMAAEuB9QElB4DiDcQDhDbB8EdQCAEnAAFCQAAFDiAEmQh8EejhDbQjiDcklB4QkuB9lMAAQlKAAkwh9g");
	this.shape.setTransform(163,158.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path9772, new cjs.Rectangle(0,0,326,317.4), null);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.path6892();
	this.instance.setTransform(-0.6,73.45,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.9102;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(-1.3,43,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.9102;

	this.instance_2 = new lib.path6730();
	this.instance_2.setTransform(-5.15,-73.75,1,1,0,0,0,65,41.7);
	this.instance_2.alpha = 0.9102;

	this.instance_3 = new lib.rect6622();
	this.instance_3.setTransform(0.05,53.05,1,1,0,0,0,81.2,69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-135.5,178.6,258);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.path6892();
	this.instance.setTransform(-0.6,73.45,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.9102;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(-1.3,43,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.9102;

	this.instance_2 = new lib.path6730();
	this.instance_2.setTransform(-5.15,-73.75,1,1,0,0,0,65,41.7);
	this.instance_2.alpha = 0.9102;

	this.instance_3 = new lib.rect6622();
	this.instance_3.setTransform(0.05,53.05,1,1,0,0,0,81.2,69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-135.5,178.6,258);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.path6892();
	this.instance.setTransform(-0.6,23.9,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(-1.3,-6.55,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.rect6622();
	this.instance_2.setTransform(0.05,3.5,1,1,0,0,0,81.2,69.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-65.9,178.6,138.9);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.path6892();
	this.instance.setTransform(-0.6,23.9,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.0781;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(-1.3,-6.55,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.0781;

	this.instance_2 = new lib.rect6622();
	this.instance_2.setTransform(0.05,3.5,1,1,0,0,0,81.2,69.4);
	this.instance_2.alpha = 0.0781;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-65.9,178.6,138.9);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.path6892();
	this.instance.setTransform(-0.6,23.9,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.2109;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(-1.3,-6.55,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.2109;

	this.instance_2 = new lib.rect6622();
	this.instance_2.setTransform(0.05,3.5,1,1,0,0,0,81.2,69.4);
	this.instance_2.alpha = 0.2109;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-65.9,178.6,138.9);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.path6892();
	this.instance.setTransform(-0.6,23.9,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.2695;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(-1.3,-6.55,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.2695;

	this.instance_2 = new lib.rect6622();
	this.instance_2.setTransform(0.05,3.5,1,1,0,0,0,81.2,69.4);
	this.instance_2.alpha = 0.2695;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-65.9,178.6,138.9);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.path6892();
	this.instance.setTransform(-0.6,23.9,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.3281;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(-1.3,-6.55,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.3281;

	this.instance_2 = new lib.rect6622();
	this.instance_2.setTransform(0.05,3.5,1,1,0,0,0,81.2,69.4);
	this.instance_2.alpha = 0.3281;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-65.9,178.6,138.9);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.path6892();
	this.instance.setTransform(-0.6,23.9,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(-1.3,-6.55,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.rect6622();
	this.instance_2.setTransform(0.05,3.5,1,1,0,0,0,81.2,69.4);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-65.9,178.6,138.9);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.path6892();
	this.instance.setTransform(-0.6,23.9,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.6484;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(-1.3,-6.55,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.6484;

	this.instance_2 = new lib.rect6622();
	this.instance_2.setTransform(0.05,3.5,1,1,0,0,0,81.2,69.4);
	this.instance_2.alpha = 0.6484;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-65.9,178.6,138.9);


(lib.keysvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// svg5
	this.instance = new lib.path12406();
	this.instance.setTransform(71.85,207.55,1,1,0,0,0,2.6,64.7);
	this.instance.alpha = 0.9102;

	this.instance_1 = new lib.path12350();
	this.instance_1.setTransform(67.65,37.7,1,1,0,0,0,17.8,16);
	this.instance_1.alpha = 0.9102;

	this.instance_2 = new lib.path12031();
	this.instance_2.setTransform(67.5,65.5,1,1,0,0,0,67.5,65.5);
	this.instance_2.alpha = 0.9102;

	this.instance_3 = new lib.path12295();
	this.instance_3.setTransform(66.65,204.5,1,1,0,0,0,40.5,80.6);
	this.instance_3.alpha = 0.9102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,134.9,285.09999999999997);


(lib.cellsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// svg5
	this.instance = new lib.path10438();
	this.instance.setTransform(273.3,184.5,1,1,0,0,0,8.3,8.1);
	this.instance.alpha = 0.9102;

	this.instance_1 = new lib.path10436();
	this.instance_1.setTransform(250.85,156.15,1,1,0,0,0,10.7,10.7);
	this.instance_1.alpha = 0.9102;

	this.instance_2 = new lib.path10434();
	this.instance_2.setTransform(133.85,255.55,1,1,0,0,0,4.9,4.5);
	this.instance_2.alpha = 0.9102;

	this.instance_3 = new lib.path10380();
	this.instance_3.setTransform(140.85,67.7,1,1,0,0,0,16.5,16.2);
	this.instance_3.alpha = 0.9102;

	this.instance_4 = new lib.path102381();
	this.instance_4.setTransform(216.75,98.8,1,1,0,0,0,16.1,14.5);
	this.instance_4.alpha = 0.9102;

	this.instance_5 = new lib.path1023858();
	this.instance_5.setTransform(98.4,202.9,1,1,0,0,0,19.3,23.1);
	this.instance_5.alpha = 0.9102;

	this.instance_6 = new lib.path102385();
	this.instance_6.setTransform(204.75,244.35,1,1,0,0,0,35.1,20.8);
	this.instance_6.alpha = 0.9102;

	this.instance_7 = new lib.path10238();
	this.instance_7.setTransform(224.1,90.55,1,1,0,0,0,31.4,26.6);
	this.instance_7.alpha = 0.9102;

	this.instance_8 = new lib.path9880();
	this.instance_8.setTransform(160.75,157.45,1,1,0,0,0,67.5,66);
	this.instance_8.alpha = 0.9102;

	this.instance_9 = new lib.path102342();
	this.instance_9.setTransform(200.5,224.3,1,1,0,0,0,26,18.7);
	this.instance_9.alpha = 0.9102;

	this.instance_10 = new lib.path10234();
	this.instance_10.setTransform(80.25,121.6,1,1,0,0,0,24.9,33);
	this.instance_10.alpha = 0.9102;

	this.instance_11 = new lib.path9878();
	this.instance_11.setTransform(160.75,160.2,1,1,0,0,0,129.2,125.7);
	this.instance_11.alpha = 0.9102;

	this.instance_12 = new lib.path9772();
	this.instance_12.setTransform(163,158.7,1,1,0,0,0,163,158.7);
	this.instance_12.alpha = 0.9102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,326,317.4);


// stage content:
(lib.insulinTest_q1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// keyHole
	this.instance = new lib.keyHole("synched",0);
	this.instance.setTransform(129.65,262.9,1,1,0,0,0,6,7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},23).wait(6).to({scaleY:0.8046,y:262.95},0).wait(1).to({scaleY:0.5523},0).wait(1).to({regY:7.2,scaleY:0.2431,y:263},0).wait(1).to({scaleY:0.1108},0).wait(1).to({regY:6.8,scaleY:0.0369,skewX:180,y:262.9},0).wait(1).to({regY:7.3,scaleY:0.0753,skewX:0},0).wait(1).to({scaleY:0.1507},0).wait(1).to({regY:7.4,scaleY:0.2983,y:263},0).wait(1).to({regY:7.5,scaleY:0.4505,y:263.15},0).wait(1).to({regY:7.4,scaleY:0.6197,y:263.2},0).wait(1).to({regY:7.5,scaleY:0.8257,y:263.35},0).wait(1).to({scaleY:1.0196,y:263.4},0).wait(7).to({startPosition:0},0).wait(4).to({y:289.05},0).wait(2).to({y:313.55},0).wait(2).to({y:356.9},0).wait(2).to({y:408.65},0).wait(2).to({y:474.85},0).wait(2).to({y:552.3},0).wait(2).to({y:610.15},0).to({_off:true},7).wait(20));

	// patch
	this.instance_1 = new lib.patch("synched",0);
	this.instance_1.setTransform(235,262,1,1,0,0,0,34.6,33.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},23).wait(28).to({y:288.1,alpha:0.6484},0).to({y:312.6,alpha:0.5},2).to({y:355.95,alpha:0.3281},2).to({y:408.45,alpha:0.2695},2).to({y:473.9,alpha:0.1289},2).to({_off:true},1).wait(30));

	// key
	this.instance_2 = new lib.keysvg("synched",0);
	this.instance_2.setTransform(182.05,263,0.4962,0.4993,-90,0,0,67.4,142.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},23).wait(6).to({scaleX:0.3992},0).wait(1).to({regX:67.2,scaleX:0.274,y:263.05},0).wait(1).to({scaleX:0.1206,y:263},0).wait(1).to({regX:66.5,scaleX:0.0549},0).wait(1).to({regX:68.2,scaleX:0.0183,rotation:0,skewX:-90,skewY:90,y:262.9},0).wait(1).to({regX:66.8,scaleX:0.0374,rotation:-90,skewX:0,skewY:0},0).wait(1).to({scaleX:0.0748},0).wait(1).to({regX:66.5,scaleX:0.148,y:263},0).wait(1).to({scaleX:0.2235,y:263.1},0).wait(1).to({scaleX:0.3075,y:263.2},0).wait(1).to({scaleX:0.4097,y:263.3},0).wait(1).to({regX:66.3,scaleX:0.506,y:263.4},0).wait(7).to({startPosition:0},0).wait(4).to({y:289.05,alpha:0.6484},0).to({y:313.55,alpha:0.5},2).to({y:356.9,alpha:0.3281},2).to({y:408.65,alpha:0.2695},2).to({y:474.85,alpha:0.2109},2).to({y:552.3,alpha:0.0781},2).to({y:610.15,alpha:0},2).to({_off:true},7).wait(20));

	// lock
	this.instance_3 = new lib.Tween20("synched",0);
	this.instance_3.setTransform(197,195);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Tween21("synched",0);
	this.instance_4.setTransform(197,195);

	this.instance_5 = new lib.path6892();
	this.instance_5.setTransform(196.4,268.45,1,1,0,0,0,21.2,18.9);

	this.instance_6 = new lib.path6784();
	this.instance_6.setTransform(195.7,238,1,1,0,0,0,15.1,14.3);

	this.instance_7 = new lib.rect6622();
	this.instance_7.setTransform(197.05,248.05,1,1,0,0,0,81.2,69.4);

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.setTransform(197,270.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween10("synched",0);
	this.instance_9.setTransform(197,294.7);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween11("synched",0);
	this.instance_10.setTransform(197,338.05);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween12("synched",0);
	this.instance_11.setTransform(197,389.8);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween13("synched",0);
	this.instance_12.setTransform(197,456);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.setTransform(197,533.45);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween15("synched",0);
	this.instance_14.setTransform(197,591.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},23).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},24).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},7).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,alpha:1},23).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({_off:false},0).to({_off:true,y:294.7},2).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(51).to({_off:false},2).to({_off:true,y:338.05},2).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(53).to({_off:false},2).to({_off:true,y:389.8},2).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(55).to({_off:false},2).to({_off:true,y:456},2).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(57).to({_off:false},2).to({_off:true,y:533.45},2).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({_off:false},2).to({_off:true,y:591.3},2).wait(27));

	// pad
	this.instance_15 = new lib.path6730();
	this.instance_15.setTransform(144.95,178.05,1,1,-3.9539,0,0,18.1,98.5);
	this.instance_15.alpha = 0.9102;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},0).wait(1).to({regX:18.2,rotation:-9.6788,x:145.05},0).wait(1).to({rotation:-20.1176},0).wait(2).to({y:203.7,alpha:0.6484},0).to({y:228.2,alpha:0.5},2).to({y:271.55,alpha:0.3281},2).to({y:323.3,alpha:0.2695},2).to({y:389.5,alpha:0.2109},2).to({y:466.95,alpha:0.0781},2).to({y:524.8,alpha:0},2).to({_off:true},7).wait(20));

	// glucose
	this.instance_16 = new lib.glucosesvg("synched",0);
	this.instance_16.setTransform(461.1,443.05,0.7857,0.7409,0,0,0,56.6,55.4);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},0).to({regY:55.5,x:406.65,y:397.7},11).to({regY:55.4,x:347.3,y:348.15,alpha:1},12).wait(37).to({startPosition:0},0).to({regY:55.6,scaleX:0.1087,scaleY:0.1096,x:200,y:200.05,alpha:0},20).wait(1));

	// cell
	this.instance_17 = new lib.cellsvg("synched",0);
	this.instance_17.setTransform(200,200,1,1,0,0,0,163,158.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(23).to({startPosition:0},0).wait(24).to({startPosition:0},0).wait(42).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(237,225.9,274,438.4);
// library properties:
lib.properties = {
	id: '466B033C2444134FA536645A434FFF0A',
	width: 400,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['466B033C2444134FA536645A434FFF0A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;