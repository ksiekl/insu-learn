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


(lib.Tween303 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.1368,0.4695,0.0899,0.0763,0,-27.2467,-17.9432);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(-0.1244,0.3913,0.0899,0.0763,0,-27.2467,-17.9432);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(0.2131,-0.1569,0.0903,0.0766,0,-27.2384,-17.9696);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(0.2131,-0.1569,0.0903,0.0766,0,-27.2384,-17.9696);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-6,15.2,11.9);


(lib.Tween302 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.1146,0.9726,0.1579,0.1506,0,-23.5835,-20.9397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(-0.0933,0.8134,0.1579,0.1506,0,-23.5835,-20.9397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(0.364,-0.3342,0.1582,0.1509,0,-23.5813,-20.9383);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(0.364,-0.3342,0.1582,0.1509,0,-23.5813,-20.9383);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-9.9,38.7,26.299999999999997);


(lib.Tween301 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.0897,1.5935,0.2751,0.2508,0,-24.959,-19.7393);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(-0.0522,1.3313,0.2751,0.2508,0,-24.959,-19.7393);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(0.6657,-0.5895,0.2755,0.251,0,-24.959,-19.7429);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(0.6657,-0.5895,0.2755,0.251,0,-24.959,-19.7429);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-27,42.4,52.5);


(lib.Tween300 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.1153,2.2804,0.3684,0.3533,0,-23.4335,-21.0743);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(-0.0655,1.9067,0.3684,0.3533,0,-23.4335,-21.0743);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(0.8404,-0.83,0.3687,0.3535,0,-23.4369,-21.0739);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(0.8404,-0.83,0.3687,0.3535,0,-23.4369,-21.0739);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-26.2,61.4,53.7);


(lib.Tween299 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.1054,3.1185,0.4584,0.468,0,-21.6484,-22.8176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(-0.0442,2.617,0.4584,0.468,0,-21.6484,-22.8176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(1.0467,-1.0785,0.4586,0.4683,0,-21.6502,-22.8209);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(1.0467,-1.0785,0.4586,0.4683,0,-21.6502,-22.8209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-27,67.3,62.2);


(lib.Tween298 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.0941,4.2575,0.6715,0.6498,0,-23.1679,-21.3195);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(-0.0036,3.5687,0.6715,0.6498,0,-23.1679,-21.3195);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(1.5908,-1.4944,0.6718,0.6502,0,-23.1691,-21.3217);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(1.5908,-1.4944,0.6718,0.6502,0,-23.1691,-21.3217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-41.6,93.6,80.7);


(lib.Tween297 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.0858,4.7439,0.7679,0.7327,0,-23.5882,-20.9354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(0.0179,3.9697,0.7679,0.7327,0,-23.5882,-20.9354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(1.8492,-1.7267,0.7683,0.7331,0,-23.5882,-20.9376);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(1.8492,-1.7267,0.7683,0.7331,0,-23.5882,-20.9376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-41.7,112.5,82.5);


(lib.Tween296 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.0814,6.5321,0.9992,0.9992,-22.2321);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(0.0525,5.4656,0.9992,0.9992,-22.2321);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(2.3649,-2.3757,0.9996,0.9996,-22.232);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(2.3649,-2.3757,0.9996,0.9996,-22.232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.8,-59.3,128.4,117.6);


(lib.Tween295 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.0841,6.5483,0.9994,0.9994,-22.2319);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(0.0498,5.4818,0.9994,0.9994,-22.2319);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(2.3359,-2.374,0.9997,0.9997,-22.2326);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(2.3359,-2.374,0.9997,0.9997,-22.2326);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-58.5,131.6,113.9);


(lib.Tween294 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.0525,6.5744,0.9995,0.9995,-22.2296);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(0.0814,5.5077,0.9995,0.9995,-22.2296);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(2.3451,-2.3668,0.9997,0.9997,-22.2319);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(2.3451,-2.3668,0.9997,0.9997,-22.2319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-58.5,131.6,114.1);


(lib.Tween282 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.0525,6.5744,0.9995,0.9995,-22.2296);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(0.0814,5.5077,0.9995,0.9995,-22.2296);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(2.3451,-2.3668,0.9997,0.9997,-22.2319);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(2.3451,-2.3668,0.9997,0.9997,-22.2319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-58.5,131.6,114.1);


(lib.Tween280 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape.setTransform(-0.0024,6.5779,0.9996,0.9996,-22.2313);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_1.setTransform(0.1316,5.5111,0.9996,0.9996,-22.2313);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_2.setTransform(2.3671,-2.3569,0.9998,0.9998,-22.2314);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_3.setTransform(2.3671,-2.3569,0.9998,0.9998,-22.2314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.6,-58.5,131.6,116.8);


(lib.Tween273 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#7C949A").ss(2.5,0,0,11.3).p("AiyDwIH3kLQjXgPgthrIjZhnIjHCYIgFAEAlkhuIAFAKICtFUAi7D1IAJgFIALAW");
	this.shape.setTransform(1.6308,-0.4367);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C8A90").s().p("Ag2gMIBUgeIAZBVg");
	this.shape_1.setTransform(3.225,-20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C949A").s().p("AlRhdIDHiZIDZBnQAsBsDXAOIn3EMg");
	this.shape_2.setTransform(0.2625,-1.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.3,-27.1,73.69999999999999,54.1);


(lib.Tween272 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#7C949A").ss(2.5,0,0,11.3).p("AiyDwIH3kLQjXgPgthrIjZhnIjHCYIgFAEAlkhuIAFAKICtFUAi7D1IAJgFIALAW");
	this.shape.setTransform(1.6308,-0.4367);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C8A90").s().p("Ag2gMIBUgeIAZBVg");
	this.shape_1.setTransform(3.225,-20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C949A").s().p("AlRhdIDHiZIDZBnQAsBsDXAOIn3EMg");
	this.shape_2.setTransform(0.2625,-1.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.3,-27.1,73.69999999999999,54.1);


(lib.Tween265 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AAijYIjwFtIChBDID7mig");
	this.shape.setTransform(2.5009,-5.118);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("Ah7C0QhIgcgBgCQgBAAB4iyQBOh3AWggQAUgcADAAICNAMIAIACIj1GQQgBABhIgcg");
	this.shape_1.setTransform(1.4996,-5.1983);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5599FF").s().p("Ah5C0QhIgcgCgCQgBAAB4iyIBliXQATgcAEAAICNAMIAHACIj0GQIgBABQgDAAhFgcg");
	this.shape_2.setTransform(1.3496,-5.1983);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQggAQghgMg");
	this.shape_3.setTransform(-14.6197,19.7786);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE6D5").s().p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQgSAJgTAAQgOAAgOgFg");
	this.shape_4.setTransform(-14.6197,19.7786);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AAShCQAiAIATAaQATAagHAbQgHAbgeAOQgdAOgigJQgigIgTgaQgTgaAHgbQAIgcAdgNQAdgOAiAJg");
	this.shape_5.setTransform(-14.6131,19.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-27.8,48.2,57.6);


(lib.Tween264 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AAijYIjwFtIChBDID7mig");
	this.shape.setTransform(2.5009,-5.118);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("Ah7C0QhIgcgBgCQgBAAB4iyQBOh3AWggQAUgcADAAICNAMIAIACIj1GQQgBABhIgcg");
	this.shape_1.setTransform(1.4996,-5.1983);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5599FF").s().p("Ah5C0QhIgcgCgCQgBAAB4iyIBliXQATgcAEAAICNAMIAHACIj0GQIgBABQgDAAhFgcg");
	this.shape_2.setTransform(1.3496,-5.1983);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQggAQghgMg");
	this.shape_3.setTransform(-14.6197,19.7786);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE6D5").s().p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQgSAJgTAAQgOAAgOgFg");
	this.shape_4.setTransform(-14.6197,19.7786);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AAShCQAiAIATAaQATAagHAbQgHAbgeAOQgdAOgigJQgigIgTgaQgTgaAHgbQAIgcAdgNQAdgOAiAJg");
	this.shape_5.setTransform(-14.6131,19.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-27.8,48.2,57.6);


(lib.Tween255 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape.setTransform(-176.8,-110.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_1.setTransform(-176.8,-110.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_2.setTransform(176.2,-120.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_3.setTransform(176.2,-120.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_4.setTransform(337.9,-23.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_5.setTransform(337.9,-23.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_6.setTransform(303.125,-120.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_7.setTransform(303.125,-120.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_8.setTransform(219.55,25.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_9.setTransform(219.55,25.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_10.setTransform(90,118.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_11.setTransform(90,118.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_12.setTransform(0.275,5.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_13.setTransform(0.275,5.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_14.setTransform(-55.75,-129.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_15.setTransform(-55.75,-129.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_16.setTransform(-188.85,-18.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_17.setTransform(-188.85,-18.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_18.setTransform(-221.35,112.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_19.setTransform(-221.35,112.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_20.setTransform(-315.1,69.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_21.setTransform(-315.1,69.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_22.setTransform(0.7,174.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_23.setTransform(0.3,-174.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFF6D5").s().p("Eg9/AbjQgXAAgRgQQgRgSAAgYMAAAg1SQAAgXARgRQARgRAXAAMB7+AAAQAYAAARARQARARAAAXMAAAA1SQAAAYgRASQgRAQgYAAg");
	this.shape_24.setTransform(-0.375,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.8,-176.9,808.6,353.70000000000005);


(lib.Tween254 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape.setTransform(-176.8,-110.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_1.setTransform(-176.8,-110.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_2.setTransform(176.2,-120.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_3.setTransform(176.2,-120.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_4.setTransform(337.9,-23.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_5.setTransform(337.9,-23.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_6.setTransform(303.125,-120.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_7.setTransform(303.125,-120.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_8.setTransform(219.55,25.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_9.setTransform(219.55,25.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_10.setTransform(90,118.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_11.setTransform(90,118.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_12.setTransform(0.275,5.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_13.setTransform(0.275,5.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_14.setTransform(-55.75,-129.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_15.setTransform(-55.75,-129.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_16.setTransform(-188.85,-18.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_17.setTransform(-188.85,-18.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_18.setTransform(-221.35,112.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_19.setTransform(-221.35,112.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_20.setTransform(-315.1,69.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_21.setTransform(-315.1,69.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_22.setTransform(0.7,174.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_23.setTransform(0.3,-174.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFF6D5").s().p("Eg9/AbjQgXAAgRgQQgRgSAAgYMAAAg1SQAAgXARgRQARgRAXAAMB7+AAAQAYAAARARQARARAAAXMAAAA1SQAAAYgRASQgRAQgYAAg");
	this.shape_24.setTransform(-0.375,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.8,-176.9,808.6,353.70000000000005);


(lib.Tween248 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AKbAAQAAFHjEDmQjDDnkUAAQkTAAjDjnQjDjmAAlHQAAlFDDjnQDDjnETAAQEUAADDDnQDEDnAAFFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnWItQjEjnAAlGQAAlFDEjnQDDjnETAAQEUAADDDnQDDDnAAFFQAAFGjDDnQjDDnkUAAQkTAAjDjng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.6,-80.7,137.2,161.5);


(lib.Tween247 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AESjnQjiAbhtBPQicBwgnEG");
	this.shape.setTransform(-311.5468,-88.7587,0.9997,0.9997,14.9984);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("AhFiFQBthPDigbIoTHfQAokFCchwg");
	this.shape_1.setTransform(-310.9318,-87.7347,0.9997,0.9997,14.9984);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AgNoRQjfAOiZCbQicCeAADhQAAD2BUB8QBfCMDRAAQDiAADFiPQDOiUAtjbQAdiLAAhXQgBhxguhGQhtinmTAYg");
	this.shape_2.setTransform(-298.7758,-66.4026,0.9998,0.9998,14.9978);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AnNGJQhUh8AAj2QAAjhCcieQCZibDfgOQGTgYBtCnQAuBGABBxQAABXgdCLQgtDbjOCUQjFCPjiAAQjRAAhfiMg");
	this.shape_3.setTransform(-298.7758,-66.4026,0.9998,0.9998,14.9978);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AodAXQgvF9DCB4QBUA0B4gGQBygGCAg3QDQhaBwhkQBwhkAtiKQAnh1ggiFQgeh/hVhnQhXhohzgrQh9guh+AqQh/Amg3ATQhdAhg3AtQiKBxgpFFgAmHiUQhADZBFCeQBBCSCRAjQCVAlCXhlQCqhxBuj4");
	this.shape_4.setTransform(309.0239,77.5284,0.9997,0.9997,-14.9984);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#800000").s().p("AmKIMQjCh4Avl9QAplFCKhxQA3gtBdghQA3gTB/gmQB+gqB9AuQBzArBXBoQBVBnAeB/QAgCFgnB1QgtCKhwBkQhwBkjQBaQiAA3hyAGIgYABQhpAAhLgvg");
	this.shape_5.setTransform(309.0239,77.5284,0.9997,0.9997,-14.9984);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ag9oYQkuAbh5C8QhwCuBUDnQCOGGE4A+QBoAVB4gxQBygtBfhdQBhheAthvQAxh4gahqQgiiPgRgzQgjhlg1g8QiFiVlJAdgAi4kcQhUAWgEB2QgDBoA3CMQA2CHBLBcQBRBjA8gL");
	this.shape_6.setTransform(119.5356,-50.3031,0.9997,0.9997,14.9984);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#800000").s().p("Ag6IYQk4g+iOmGQhUjnBwiuQB5i8EugbQFJgdCFCVQA1A8AjBlQARAzAiCPQAaBqgxB4QgtBvhhBeQhfBdhyAtQhUAihMAAQggAAgggGg");
	this.shape_7.setTransform(119.5356,-50.3031,0.9997,0.9997,14.9984);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape_8.setTransform(-93.1932,57.2363,0.9997,0.9997,-14.9984);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_9.setTransform(-92.926,56.1947,0.9997,0.9997,-14.9984);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_10.setTransform(-89.7342,48.6674,0.9998,0.9998,-14.9978);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_11.setTransform(-89.7342,48.6674,0.9998,0.9998,-14.9978);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_12.setTransform(-173.8,-108.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_13.setTransform(-173.8,-108.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_14.setTransform(202.5,-118.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_15.setTransform(202.5,-118.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_16.setTransform(336.35,-8.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_17.setTransform(336.35,-8.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_18.setTransform(319.375,-108.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_19.setTransform(319.375,-108.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_20.setTransform(192.45,32.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_21.setTransform(192.45,32.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_22.setTransform(76.85,105.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_23.setTransform(76.85,105.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_24.setTransform(-5.525,-8.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_25.setTransform(-5.525,-8.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_26.setTransform(-58.45,-127.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_27.setTransform(-58.45,-127.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_28.setTransform(-201.1,-17.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_29.setTransform(-201.1,-17.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_30.setTransform(-222.65,126.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_31.setTransform(-222.65,126.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_32.setTransform(-309.25,48.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_33.setTransform(-309.25,48.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_34.setTransform(0.7,174.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_35.setTransform(0.3,-174.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFF6D5").s().p("Eg9/AbjQgXAAgRgQQgRgSAAgYMAAAg1SQAAgXARgRQARgRAXAAMB7+AAAQAYAAARARQARARAAAXMAAAA1SQAAAYgRASQgRAQgYAAg");
	this.shape_36.setTransform(-0.375,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.8,-176.9,808.6,353.70000000000005);


(lib.Tween246 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AESjnQjiAbhtBPQicBwgnEG");
	this.shape.setTransform(-309.1843,-75.9302);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("AhFiFQBthPDigbIoTHfQAokFCchwg");
	this.shape_1.setTransform(-308.325,-75.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AgNoRQjfAOiZCbQicCeAADhQAAD2BUB8QBfCMDRAAQDiAADFiPQDOiUAtjbQAdiLAAhXQgBhxguhGQhtinmTAYg");
	this.shape_2.setTransform(-291.0746,-57.6512);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AnNGJQhUh8AAj2QAAjhCcieQCZibDfgOQGTgYBtCnQAuBGABBxQAABXgdCLQgtDbjOCUQjFCPjiAAQjRAAhfiMg");
	this.shape_3.setTransform(-291.0746,-57.6512);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AodAXQgvF9DCB4QBUA0B4gGQBygGCAg3QDQhaBwhkQBwhkAtiKQAnh1ggiFQgeh/hVhnQhXhohzgrQh9guh+AqQh/Amg3ATQhdAhg3AtQiKBxgpFFgAmHiUQhADZBFCeQBBCSCRAjQCVAlCXhlQCqhxBuj4");
	this.shape_4.setTransform(320.4628,97.7038);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#800000").s().p("AmKIMQjCh4Avl9QAplFCKhxQA3gtBdghQA3gTB/gmQB+gqB9AuQBzArBXBoQBVBnAeB/QAgCFgnB1QgtCKhwBkQhwBkjQBaQiAA3hyAGIgYABQhpAAhLgvg");
	this.shape_5.setTransform(320.4628,97.7038);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ag9oYQkuAbh5C8QhwCuBUDnQCOGGE4A+QBoAVB4gxQBygtBfhdQBhheAthvQAxh4gahqQgiiPgRgzQgjhlg1g8QiFiVlJAdgAi4kcQhUAWgEB2QgDBoA3CMQA2CHBLBcQBRBjA8gL");
	this.shape_6.setTransform(112.1364,-41.0008);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#800000").s().p("Ag6IYQk4g+iOmGQhUjnBwiuQB5i8EugbQFJgdCFCVQA1A8AjBlQARAzAiCPQAaBqgxB4QgtBvhhBeQhfBdhyAtQhUAihMAAQggAAgggGg");
	this.shape_7.setTransform(112.1364,-41.0008);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape_8.setTransform(-107.3473,78.5755);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_9.setTransform(-106.8194,77.6382);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_10.setTransform(-101.8313,71.1516);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_11.setTransform(-101.8313,71.1516);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_12.setTransform(-176.65,-127.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_13.setTransform(-176.65,-127.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_14.setTransform(199.75,-127.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_15.setTransform(199.75,-127.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_16.setTransform(336.8,-15.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_17.setTransform(336.8,-15.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_18.setTransform(301.125,-105.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_19.setTransform(301.125,-105.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_20.setTransform(191,41.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_21.setTransform(191,41.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_22.setTransform(85.25,114.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_23.setTransform(85.25,114.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_24.setTransform(5.725,0.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_25.setTransform(5.725,0.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_26.setTransform(-53.6,-131.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_27.setTransform(-53.6,-131.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_28.setTransform(-195.45,-31.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_29.setTransform(-195.45,-31.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_30.setTransform(-212.85,126.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_31.setTransform(-212.85,126.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_32.setTransform(-320.3,39.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_33.setTransform(-320.3,39.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_34.setTransform(0.7,174.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_35.setTransform(0.3,-174.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFF6D5").s().p("Eg9/AbjQgXAAgRgQQgRgSAAgYMAAAg1SQAAgXARgRQARgRAXAAMB7+AAAQAYAAARARQARARAAAXMAAAA1SQAAAYgRASQgRAQgYAAg");
	this.shape_36.setTransform(-0.375,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.8,-176.9,808.6,353.70000000000005);


(lib.Tween233 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AgmjSID2FqIiYA6IkGmVg");
	this.shape.setTransform(-2.6057,-5.4265);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("AhGAJIh+jFQAAgCAxgEIBjgJIAHAAIB2CvQB4CtAAACIiQA5QgBABh6jEg");
	this.shape_1.setTransform(-1.8753,-5.1747);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5599FF").s().p("AhGAJIh+jFQAAgCAxgEIBjgJIAHAAIB2CvQB4CtAAACIiQA5IAAAAQgBAAh6jDg");
	this.shape_2.setTransform(-1.8753,-5.1747);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgpA1QgQgIgJgNQgNgUAKgXQAJgYAagOQAagNAYADQAZADATARQAKAKACAFQACAFAAAOQAAALgCAGQgCAHgHAIQgSAYgfAHQgeAIgZgNg");
	this.shape_3.setTransform(14.7744,19.492);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE6D5").s().p("AgpA1QgQgIgJgNQgNgUAKgXQAJgYAagOQAagNAYADQAZADATARQAKAKACAFQACAFAAAOQAAALgCAGQgCAHgHAIQgSAYgfAHQgMADgJAAQgSAAgQgIg");
	this.shape_4.setTransform(14.7744,19.492);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AASBDQAigIATgaQATgagHgbQgHgbgegOQgdgOgiAJQgiAJgTAZQgTAaAHAaQAHAcAeAOQAdANAigIg");
	this.shape_5.setTransform(14.8369,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-27.5,51.5,56.9);


(lib.Tween217 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AkYFMQiBBwjUCeQijCDhFB8QhRhohAi6QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSALalYQiJg9hJgl");
	this.shape.setTransform(0.0243,0.4856);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#502D16").s().p("AvmI8QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuQgbhhhMhEQg6gzhyg2QiJg9hJglQh/A/hkBeQhFBBhfB6Qh5CZgvA2QhuB8iDBjQiBBwjUCeQijCDhFB8QhRhohAi6g");
	this.shape_1.setTransform(0.0243,-0.0101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.3,-88.2,223.1,176.60000000000002);


(lib.Tween215 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJj7ICKHiICPjPIHjAEICTCqQApigBbkk");
	this.shape.setTransform(0.0207,1.2294);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3DBDB").s().p("AmHDxQgGgCg1jrQg2jqACgCQPpgJAEACQACAAgiCwQghCvgvBjIgrhGIhfhyIhtgDQhpgDiSAAIiPAAIACABQiIDbgHAAIAAAAg");
	this.shape_1.setTransform(0.126,0.1335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,-25.5,106.69999999999999,52.6);


(lib.Tween211 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("ADwFKQgEkSgPg5QgQg5hUhgQhUhgkdhC");
	this.shape.setTransform(0.4995,-0.6047);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-33.5,51.3,67.1);


(lib.Tween209 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("Ap3DiQGjgYDshqQDshoBSg8QBSg7BdgmQBdglAKgX");
	this.shape.setTransform(0.6032,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.7,-23.7,127.5,47.5);


(lib.Tween207 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjcQBLAAA0BBQA1BAAABbQAABcg1BBQg0BAhLAAQhJAAg1hAQg0hBAAhcQAAhbA0hAQA1hBBJAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah+CdQg1hBAAhcQAAhbA1hAQA0hBBKAAQBKAAA1BBQA1BAgBBbQABBcg1BBQg1BAhKAAQhKAAg0hAg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,-27,44.6,50.4);


(lib.Tween205 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#004455").s().p("AhSBbQgiglAAg2QAAg0AigmQAigmAwAAQAxAAAiAmQAiAmAAA0QAAA1giAmQgiAmgxAAQgvAAgjgmg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-12.8,23.5,25.700000000000003);


(lib.Tween203 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgnAvQgRgUAAgbQAAgaARgTQARgUAWAAQAYAAAQAUQARATAAAaQAAAbgRAUQgQATgYAAQgWAAgRgTg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-6.5,11.3,13.1);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape.setTransform(-176.8,-110.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_1.setTransform(-176.8,-110.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_2.setTransform(176.2,-120.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_3.setTransform(176.2,-120.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_4.setTransform(337.9,-23.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_5.setTransform(337.9,-23.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_6.setTransform(303.125,-120.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_7.setTransform(303.125,-120.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_8.setTransform(219.55,25.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_9.setTransform(219.55,25.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_10.setTransform(90,118.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_11.setTransform(90,118.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_12.setTransform(0.275,5.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_13.setTransform(0.275,5.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_14.setTransform(-55.75,-129.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_15.setTransform(-55.75,-129.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_16.setTransform(-188.85,-18.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_17.setTransform(-188.85,-18.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_18.setTransform(-221.35,112.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_19.setTransform(-221.35,112.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_20.setTransform(-315.1,69.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_21.setTransform(-315.1,69.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_22.setTransform(0.7,174.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_23.setTransform(0.3,-174.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFF6D5").s().p("Eg9/AbjQgXAAgRgQQgRgSAAgXMAAAg1TQAAgXARgRQARgRAXAAMB7+AAAQAYAAARARQARARAAAXMAAAA1TQAAAXgRASQgRAQgYAAg");
	this.shape_24.setTransform(-0.375,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-403.8,-176.9,808.6,353.70000000000005), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AESjnQjiAbhtBPQicBwgnEG");
	this.shape.setTransform(29.86,50.2505,0.9996,0.9996,-23.9564);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("AhFiFQBthPDigbIoTHfQAokFCchwg");
	this.shape_1.setTransform(30.9819,50.6601,0.9996,0.9996,-23.9564);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AgNoRQjfAOiZCbQicCeAADhQAAD2BUB8QBfCMDRAAQDiAADFiPQDOiUAtjbQAdiLAAhXQgBhxguhGQhtinmTAYg");
	this.shape_2.setTransform(53.8483,59.6085,0.9998,0.9998,-23.9565);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AnNGJQhUh8AAj2QAAjhCcieQCZibDfgOQGTgYBtCnQAuBGABBxQAABXgdCLQgtDbjOCUQjFCPjiAAQjRAAhfiMg");
	this.shape_3.setTransform(53.8483,59.6085,0.9998,0.9998,-23.9565);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AodAXQgvF9DCB4QBUA0B4gGQBygGCAg3QDQhaBwhkQBwhkAtiKQAnh1ggiFQgeh/hVhnQhXhohzgrQh9guh+AqQh/Amg3ATQhdAhg3AtQiKBxgpFFgAmHiUQhADZBFCeQBBCSCRAjQCVAlCXhlQCqhxBuj4");
	this.shape_4.setTransform(661.5383,228.7777,0.9995,0.9995,-14.9975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#800000").s().p("AmKIMQjCh4Avl9QAplFCKhxQA3gtBdghQA3gTB/gmQB+gqB9AuQBzArBXBoQBVBnAeB/QAgCFgnB1QgtCKhwBkQhwBkjQBaQiAA3hyAGIgYABQhpAAhLgvg");
	this.shape_5.setTransform(661.5383,228.7777,0.9995,0.9995,-14.9975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ag9oYQkuAbh5C8QhwCuBUDnQCOGGE4A+QBoAVB4gxQBygtBfhdQBhheAthvQAxh4gahqQgiiPgRgzQgjhlg1g8QiFiVlJAdgAi4kcQhUAWgEB2QgDBoA3CMQA2CHBLBcQBRBjA8gL");
	this.shape_6.setTransform(459.0287,101.6473);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#800000").s().p("Ag6IYQk4g+iOmGQhUjnBwiuQB5i8EugbQFJgdCFCVQA1A8AjBlQARAzAiCPQAaBqgxB4QgtBvhhBeQhfBdhyAtQhUAihMAAQggAAgggGg");
	this.shape_7.setTransform(459.0287,101.6473);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape_8.setTransform(261.2851,215.8785,0.9997,0.9997,-22.2329);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_9.setTransform(261.419,214.8116,0.9997,0.9997,-22.2329);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_10.setTransform(263.6417,206.9401,0.9998,0.9998,-22.2328);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_11.setTransform(263.6417,206.9401,0.9998,0.9998,-22.2328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-5.9,-9.5,727,302.3), null);


(lib.pointersvg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.6,0,0,11.3).p("AgBiqIAAgEQAehXA3ARQAWAHARAYQAQAYAEAeIgCAaIACgTQAUhYA4AKQAXAEAQAVQARAVAAAcIgFBVIAEg0QgBgWANgPQALgOASgBQArgFAKA6IgXErIiOFKIlxgCIi8n4QgfhqAvgPQATgFAWAOQAXAOANAcIB/DvIAKpfQADgiAVgTQASgRAaABQAZABASARQATAUACAfIgJELIgNFFACNiFIgVEYAEOhHIgPDi");
	this.shape.setTransform(38.4433,52.5282);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AimH5Ii8n4QgfhqAvgPQATgFAWAOQAXAOANAcIB/DvIAKpfQADgiAVgTQASgRAaABQAZABASARQATAUACAfIgJELIgNFFIANlFIAAgEQAehXA3ARQAWAHARAYQAQAYAEAeIgCAaIACgTQAUhYA4AKQAXAEAQAVQARAVAAAcIgFBVIAEg0QgBgWANgPQALgOASgBQArgFAKA6IgXErIiOFKgAD/CbIAPjigAB4CTIAVkYg");
	this.shape_1.setTransform(38.4379,52.5243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.5,81.1,116.5);


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


(lib.glucose2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AESjnQjiAbhtBPQicBwgnEG");
	this.shape.setTransform(91.292,87.5123,0.9995,0.9995,14.9967);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800000").s().p("AhFiFQBthPDigbIoTHfQAokFCchwg");
	this.shape_1.setTransform(91.9069,88.536,0.9995,0.9995,14.9967);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AgNoRQjfAOiZCbQicCeAADhQAAD2BUB8QBfCMDRAAQDiAADFiPQDOiUAtjbQAdiLAAhXQgBhxguhGQhtinmTAYg");
	this.shape_2.setTransform(104.0648,109.8808,0.9997,0.9997,14.9979);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#800000").s().p("AnNGJQhUh8AAj2QAAjhCcieQCZibDfgOQGTgYBtCnQAuBGABBxQAABXgdCLQgtDbjOCUQjFCPjiAAQjRAAhfiMg");
	this.shape_3.setTransform(104.0648,109.8808,0.9997,0.9997,14.9979);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AodAXQgvF9DCB4QBUA0B4gGQBygGCAg3QDQhaBwhkQBwhkAtiKQAnh1ggiFQgeh/hVhnQhXhohzgrQh9guh+AqQh/Amg3ATQhdAhg3AtQiKBxgpFFgAmHiUQhADZBFCeQBBCSCRAjQCVAlCXhlQCqhxBuj4");
	this.shape_4.setTransform(711.6868,253.8334,0.9995,0.9995,-14.9967);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#800000").s().p("AmKIMQjCh4Avl9QAplFCKhxQA3gtBdghQA3gTB/gmQB+gqB9AuQBzArBXBoQBVBnAeB/QAgCFgnB1QgtCKhwBkQhwBkjQBaQiAA3hyAGIgYABQhpAAhLgvg");
	this.shape_5.setTransform(711.6868,253.8334,0.9995,0.9995,-14.9967);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ag9oYQkuAbh5C8QhwCuBUDnQCOGGE4A+QBoAVB4gxQBygtBfhdQBhheAthvQAxh4gahqQgiiPgRgzQgjhlg1g8QiFiVlJAdgAi4kcQhUAWgEB2QgDBoA3CMQA2CHBLBcQBRBjA8gL");
	this.shape_6.setTransform(522.281,125.9221,0.9995,0.9995,14.9967);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#800000").s().p("Ag6IYQk4g+iOmGQhUjnBwiuQB5i8EugbQFJgdCFCVQA1A8AjBlQARAzAiCPQAaBqgxB4QgtBvhhBeQhfBdhyAtQhUAihMAAQggAAgggGg");
	this.shape_7.setTransform(522.281,125.9221,0.9995,0.9995,14.9967);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape_8.setTransform(309.5668,233.5075,0.9995,0.9995,-14.9967);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_9.setTransform(309.834,232.4662,0.9995,0.9995,-14.9967);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_10.setTransform(313.0718,224.9477,0.9997,0.9997,-14.9979);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_11.setTransform(313.0718,224.9477,0.9997,0.9997,-14.9979);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_12.setTransform(229.05,67.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_13.setTransform(229.05,67.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_14.setTransform(605.35,58.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_15.setTransform(605.35,58.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_16.setTransform(739.2,167.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_17.setTransform(739.2,167.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_18.setTransform(722.225,67.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_19.setTransform(722.225,67.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_20.setTransform(595.3,208.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_21.setTransform(595.3,208.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_22.setTransform(479.7,282.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_23.setTransform(479.7,282.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_24.setTransform(397.325,167.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_25.setTransform(397.325,167.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_26.setTransform(344.4,48.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_27.setTransform(344.4,48.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_28.setTransform(201.75,158.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_29.setTransform(201.75,158.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_30.setTransform(180.2,302.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_31.setTransform(180.2,302.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_32.setTransform(93.6,224.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_33.setTransform(93.6,224.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_34.setTransform(403.55,351.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_35.setTransform(403.15,1.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFF6D5").s().p("Eg9/AbjQgXAAgRgRQgRgQAAgYMAAAg1SQAAgYARgRQARgRAXAAMB7+AAAQAYAAARARQARARAAAYMAAAA1SQAAAYgRAQQgRARgYAAg");
	this.shape_36.setTransform(402.475,176.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.6,808.6,353.70000000000005);


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


(lib.Tween271 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(12.85,90.3,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.9102;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(12.15,59.85,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.9102;

	this.instance_2 = new lib.path6730();
	this.instance_2.setTransform(-34,8.8,1,1,-21.8969,0,0,22.7,107.4);
	this.instance_2.alpha = 0.9102;

	this.instance_3 = new lib.rect6622();
	this.instance_3.setTransform(13.5,69.9,1,1,0,0,0,81.2,69.4);
	this.instance_3.alpha = 0.9102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-152.1,211.8,291.5);


(lib.Tween270 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(12.85,90.3,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.9102;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(12.15,59.85,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.9102;

	this.instance_2 = new lib.path6730();
	this.instance_2.setTransform(-34,8.8,1,1,-21.8969,0,0,22.7,107.4);
	this.instance_2.alpha = 0.9102;

	this.instance_3 = new lib.rect6622();
	this.instance_3.setTransform(13.5,69.9,1,1,0,0,0,81.2,69.4);
	this.instance_3.alpha = 0.9102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-152.1,211.8,291.5);


(lib.Tween253 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween248("synched",0);
	this.instance.setTransform(325.75,83.1,0.1185,0.0977);

	this.instance_1 = new lib.Tween248("synched",0);
	this.instance_1.setTransform(261.25,91.45,0.1185,0.0977);

	this.instance_2 = new lib.Tween248("synched",0);
	this.instance_2.setTransform(115.45,17.55,0.1185,0.0977);

	this.instance_3 = new lib.Tween248("synched",0);
	this.instance_3.setTransform(92.15,-53.95,0.1185,0.0977);

	this.instance_4 = new lib.Tween248("synched",0);
	this.instance_4.setTransform(-58.2,95.8,0.1185,0.0977);

	this.instance_5 = new lib.Tween248("synched",0);
	this.instance_5.setTransform(-132.05,67.7,0.1185,0.0977);

	this.instance_6 = new lib.Tween248("synched",0);
	this.instance_6.setTransform(-301.1,-95.8,0.1185,0.0977);

	this.instance_7 = new lib.Tween248("synched",0);
	this.instance_7.setTransform(-325.75,-24.5,0.1185,0.0977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334.6,-104.5,669.3,209);


(lib.Tween252 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween248("synched",0);
	this.instance.setTransform(325.75,83.1,0.1185,0.0977);

	this.instance_1 = new lib.Tween248("synched",0);
	this.instance_1.setTransform(261.25,91.45,0.1185,0.0977);

	this.instance_2 = new lib.Tween248("synched",0);
	this.instance_2.setTransform(115.45,17.55,0.1185,0.0977);

	this.instance_3 = new lib.Tween248("synched",0);
	this.instance_3.setTransform(92.15,-53.95,0.1185,0.0977);

	this.instance_4 = new lib.Tween248("synched",0);
	this.instance_4.setTransform(-58.2,95.8,0.1185,0.0977);

	this.instance_5 = new lib.Tween248("synched",0);
	this.instance_5.setTransform(-132.05,67.7,0.1185,0.0977);

	this.instance_6 = new lib.Tween248("synched",0);
	this.instance_6.setTransform(-301.1,-95.8,0.1185,0.0977);

	this.instance_7 = new lib.Tween248("synched",0);
	this.instance_7.setTransform(-325.75,-24.5,0.1185,0.0977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334.6,-104.5,669.3,209);


(lib.locksvg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.path6892();
	this.instance.setTransform(80.55,188.9,1,1,0,0,0,21.2,18.9);
	this.instance.alpha = 0.9102;

	this.instance_1 = new lib.path6784();
	this.instance_1.setTransform(79.85,158.45,1,1,0,0,0,15.1,14.3);
	this.instance_1.alpha = 0.9102;

	this.instance_2 = new lib.path6730();
	this.instance_2.setTransform(76,41.7,1,1,0,0,0,65,41.7);
	this.instance_2.alpha = 0.9102;

	this.instance_3 = new lib.rect6622();
	this.instance_3.setTransform(81.2,168.5,1,1,0,0,0,81.2,69.4);
	this.instance_3.alpha = 0.9102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-20.1,178.6,258.1);


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


(lib.fessglukoza = function(mode,startPosition,loop,reversed) {
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
	this.blood = new lib.Symbol1();
	this.blood.name = "blood";
	this.blood.setTransform(355.5,141.6,1,1,0,0,0,355.5,141.6);

	this.timeline.addTween(cjs.Tween.get(this.blood).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-9.5,727,302.3);


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


(lib.Tween275 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.keysvg("synched",0);
	this.instance.setTransform(0.1,-0.15,0.5724,0.5196,-109.8445,0,0,67.7,142.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-38,144.7,91.1);


(lib.Tween274 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.keysvg("synched",0);
	this.instance.setTransform(0.1,-0.15,0.5724,0.5196,-109.8445,0,0,67.7,142.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-38,144.7,91.1);


(lib.glucose = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fessglukoza("synched",0);
	this.instance.setTransform(0.15,-3.8,1,1,0,0,0,357.6,141.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glucose, new cjs.Rectangle(-363.4,-155,727.0999999999999,302.4), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.glucose = new lib.glucose("synched",0);
	this.glucose.name = "glucose";
	this.glucose.setTransform(0.1,-3.8,1,1,0,0,0,0.1,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.glucose).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-363.4,-155,727.0999999999999,302.4), null);


// stage content:
(lib.opening = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [321];
	// timeline functions:
	this.frame_321 = function() {
		var _this = this;
		
		this.stage.enableMouseOver(3);
		
		_this.glucose.on('mouseover', function(){
		_this.cursor = "pointer";
		_this.glucose.scaleX = 1.15;
		_this.glucose.scaleY = 1.15;
		_this.eyesInstance.scaleX = 1.15;
		_this.eyesInstance.scaleY = 1.15;
		});
		
		_this.glucose.on('mouseout', function(){
		
		_this.glucose.scaleX =1;
		_this.glucose.scaleY = 1;
		_this.eyesInstance.scaleX = 1;
		_this.eyesInstance.scaleY = 1;
		});
		var _this = this;
		/*
		Double click on the specified symbol instance executes a function.
		*/
		_this.bloodstream.on('dblclick', function(){
		
		/*
		Rotates the symbol inst,ance by updating its rotation property by the specified number of degrees.
		To rotate the symbol instance counter clock-wise input a negative number.
		*/
		_this.bloodstream.rotation+=30;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(321).call(this.frame_321).wait(843));

	// eyes
	this.eyesInstance = new lib.Tween252();
	this.eyesInstance.name = "eyesInstance";
	this.eyesInstance.setTransform(1116.05,194.6);
	this.eyesInstance.alpha = 0;
	this.eyesInstance._off = true;

	this.instance = new lib.Tween253("synched",0);
	this.instance.setTransform(1116.05,194.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eyesInstance).wait(346).to({_off:false},0).to({alpha:1},34).to({_off:true},109).wait(675));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(489).to({_off:false},0).to({alpha:0},5).wait(204).to({startPosition:0},0).to({_off:true},1).wait(465));

	// glucose
	this.instance_1 = new lib.Tween280("synched",0);
	this.instance_1.setTransform(1125.8,706);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween282("synched",0);
	this.instance_2.setTransform(1125.8,409.35);

	this.instance_3 = new lib.Tween294("synched",0);
	this.instance_3.setTransform(1148.6,371.75);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween295("synched",0);
	this.instance_4.setTransform(1179.55,335.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween296("synched",0);
	this.instance_5.setTransform(1213.7,298.45);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween297("synched",0);
	this.instance_6.setTransform(1229.3,264.8);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween298("synched",0);
	this.instance_7.setTransform(1242.6,243.4);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween299("synched",0);
	this.instance_8.setTransform(1253.75,224.9);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween300("synched",0);
	this.instance_9.setTransform(1258.85,215.45);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween301("synched",0);
	this.instance_10.setTransform(1258.75,215.45);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween302("synched",0);
	this.instance_11.setTransform(1258.75,215.4);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween303("synched",0);
	this.instance_12.setTransform(1258.75,215.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},845).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[]},1).wait(276));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(845).to({_off:false},0).to({_off:true,y:409.35},14).wait(305));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(860).to({_off:false},0).to({_off:true,x:1179.55,y:335.9},3).wait(301));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(860).to({_off:false},3).to({_off:true,x:1213.7,y:298.45},3).wait(298));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(863).to({_off:false},3).to({_off:true,x:1229.3,y:264.8},3).wait(295));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(866).to({_off:false},3).to({_off:true,x:1242.6,y:243.4},3).wait(292));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(869).to({_off:false},3).to({_off:true,x:1253.75,y:224.9},3).wait(289));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(872).to({_off:false},3).to({_off:true,x:1258.85,y:215.45},3).wait(286));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(875).to({_off:false},3).to({_off:true,x:1258.75},3).wait(283));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(878).to({_off:false},3).to({_off:true,y:215.4},3).wait(280));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(881).to({_off:false},3).to({_off:true},3).wait(277));

	// pointer
	this.instance_13 = new lib.pointersvg("synched",0);
	this.instance_13.setTransform(1470.95,386.2,1,1,-29.9992,0,0,40.5,46.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2.5,0,0,11.3).p("AAjiBIAAChADbhTIhTCDAjkB2ICjAAAiZgjIB6BY");
	this.shape.setTransform(1421.3926,329.2375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},321).to({state:[{t:this.instance_13}]},11).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.shape},{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},8).wait(807));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(321).to({_off:false},0).to({alpha:1},11).wait(2).to({regX:40.6,regY:46.9,scaleX:0.7925,scaleY:0.7685,rotation:-29.999,x:1464.95,y:381.15},0).wait(1).to({x:1460.05,y:377.25},0).wait(1).to({scaleX:0.7125,scaleY:0.6662,x:1455.15,y:373.65},0).wait(1).to({x:1451.25,y:368.3},0).wait(1).to({regY:47,scaleX:0.6226,scaleY:0.574,rotation:-29.9982,x:1446.4,y:362.55},0).wait(1).to({regY:47.1,scaleX:0.5525,scaleY:0.549,rotation:-29.9983,x:1439.35,y:355.9},0).wait(6).to({scaleX:0.6101,scaleY:0.5695,rotation:-29.9975,x:1439.3,y:358.15},0).wait(2).to({regY:47.2,scaleX:0.641,scaleY:0.6137,rotation:-29.9979,x:1443.25,y:360.75},0).wait(1).to({regX:40.7,scaleX:0.6782,scaleY:0.6651,rotation:-29.9971,x:1446.9,y:363.75},0).wait(1).to({regX:40.8,regY:47.3,scaleX:0.7313,scaleY:0.7185,rotation:-29.9963,x:1455.8,y:371.7},0).to({regX:40.9,regY:47.4,scaleX:1.1589,scaleY:1.1535,rotation:-29.9964,x:1473.5,y:394.5,alpha:0},8).wait(807));

	// blood
	this.glucose = new lib.Symbol2();
	this.glucose.name = "glucose";
	this.glucose.setTransform(1107.65,219.8,1,1,0,0,0,0.1,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AESjnQjiAbhtBPQicBwgnEG");
	this.shape_1.setTransform(779.9278,128.4358,0.9993,0.9993,-23.9569);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#800000").s().p("AhFiFQBthPDigbIoTHfQAokFCchwg");
	this.shape_2.setTransform(781.0495,128.8453,0.9993,0.9993,-23.9569);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AgNoRQjfAOiZCbQicCeAADhQAAD2BUB8QBfCMDRAAQDiAADFiPQDOiUAtjbQAdiLAAhXQgBhxguhGQhtinmTAYg");
	this.shape_3.setTransform(803.9321,137.8015,0.9997,0.9997,-23.9566);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#800000").s().p("AnNGJQhUh8AAj2QAAjhCcieQCZibDfgOQGTgYBtCnQAuBGABBxQAABXgdCLQgtDbjOCUQjFCPjiAAQjRAAhfiMg");
	this.shape_4.setTransform(803.9321,137.8015,0.9997,0.9997,-23.9566);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AodAXQgvF9DCB4QBUA0B4gGQBygGCAg3QDQhaBwhkQBwhkAtiKQAnh1ggiFQgeh/hVhnQhXhohzgrQh9guh+AqQh/Amg3ATQhdAhg3AtQiKBxgpFFgAmHiUQhADZBFCeQBBCSCRAjQCVAlCXhlQCqhxBuj4");
	this.shape_5.setTransform(1411.39,306.9477,0.9992,0.9992,-14.998);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#800000").s().p("AmKIMQjCh4Avl9QAplFCKhxQA3gtBdghQA3gTB/gmQB+gqB9AuQBzArBXBoQBVBnAeB/QAgCFgnB1QgtCKhwBkQhwBkjQBaQiAA3hyAGIgYABQhpAAhLgvg");
	this.shape_6.setTransform(1411.39,306.9477,0.9992,0.9992,-14.998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ag9oYQkuAbh5C8QhwCuBUDnQCOGGE4A+QBoAVB4gxQBygtBfhdQBhheAthvQAxh4gahqQgiiPgRgzQgjhlg1g8QiFiVlJAdgAi4kcQhUAWgEB2QgDBoA3CMQA2CHBLBcQBRBjA8gL");
	this.shape_7.setTransform(1209.1287,179.8473);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#800000").s().p("Ag6IYQk4g+iOmGQhUjnBwiuQB5i8EugbQFJgdCFCVQA1A8AjBlQARAzAiCPQAaBqgxB4QgtBvhhBeQhfBdhyAtQhUAihMAAQggAAgggGg");
	this.shape_8.setTransform(1209.1287,179.8473);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape_9.setTransform(1011.2975,294.0744,0.9995,0.9995,-22.2296);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_10.setTransform(1011.4314,293.0077,0.9995,0.9995,-22.2296);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_11.setTransform(1013.6951,285.1332,0.9997,0.9997,-22.2319);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_12.setTransform(1013.6951,285.1332,0.9997,0.9997,-22.2319);

	this.blood = new lib.Symbol1();
	this.blood.name = "blood";
	this.blood.setTransform(1105.6,219.8,1,1,0,0,0,355.5,141.6);
	this.blood._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.glucose}]},321).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},156).to({state:[{t:this.blood}]},4).to({state:[{t:this.blood}]},5).to({state:[]},23).wait(655));
	this.timeline.addTween(cjs.Tween.get(this.blood).wait(481).to({_off:false},0).to({alpha:0},5).to({_off:true},23).wait(655));

	// bloodstream
	this.instance_14 = new lib.Tween246("synched",0);
	this.instance_14.setTransform(1102.75,214.3);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween247("synched",0);
	this.instance_15.setTransform(1102.75,214.3);

	this.glucose_1 = new lib.glucose2("synched",0);
	this.glucose_1.name = "glucose_1";
	this.glucose_1.setTransform(1103.3,214.2,1,1,0,0,0,403.4,176.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AESjnQjiAbhtBPQicBwgnEG");
	this.shape_13.setTransform(781.6746,124.8371,0.9993,0.9993,-14.9965);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#800000").s().p("AhFiFQBthPDigbIoTHfQAokFCchwg");
	this.shape_14.setTransform(782.7188,125.4162,0.9993,0.9993,-14.9965);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AgNoRQjfAOiZCbQicCeAADhQAAD2BUB8QBfCMDRAAQDiAADFiPQDOiUAtjbQAdiLAAhXQgBhxguhGQhtinmTAYg");
	this.shape_15.setTransform(803.9317,137.8243,0.9997,0.9997,-14.998);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#800000").s().p("AnNGJQhUh8AAj2QAAjhCcieQCZibDfgOQGTgYBtCnQAuBGABBxQAABXgdCLQgtDbjOCUQjFCPjiAAQjRAAhfiMg");
	this.shape_16.setTransform(803.9317,137.8243,0.9997,0.9997,-14.998);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AodAXQgvF9DCB4QBUA0B4gGQBygGCAg3QDQhaBwhkQBwhkAtiKQAnh1ggiFQgeh/hVhnQhXhohzgrQh9guh+AqQh/Amg3ATQhdAhg3AtQiKBxgpFFgAmHiUQhADZBFCeQBBCSCRAjQCVAlCXhlQCqhxBuj4");
	this.shape_17.setTransform(1403.4161,301.2258,0.9993,0.9993,-14.9965);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#800000").s().p("AmKIMQjCh4Avl9QAplFCKhxQA3gtBdghQA3gTB/gmQB+gqB9AuQBzArBXBoQBVBnAeB/QAgCFgnB1QgtCKhwBkQhwBkjQBaQiAA3hyAGIgYABQhpAAhLgvg");
	this.shape_18.setTransform(1403.4161,301.2258,0.9993,0.9993,-14.9965);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ag9oYQkuAbh5C8QhwCuBUDnQCOGGE4A+QBoAVB4gxQBygtBfhdQBhheAthvQAxh4gahqQgiiPgRgzQgjhlg1g8QiFiVlJAdgAi4kcQhUAWgEB2QgDBoA3CMQA2CHBLBcQBRBjA8gL");
	this.shape_19.setTransform(1206.4864,161.4492);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#800000").s().p("Ag6IYQk4g+iOmGQhUjnBwiuQB5i8EugbQFJgdCFCVQA1A8AjBlQARAzAiCPQAaBqgxB4QgtBvhhBeQhfBdhyAtQhUAihMAAQggAAgggGg");
	this.shape_20.setTransform(1206.4864,161.4492);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Ak8lYQgPGCCTCvQCsDMFViw");
	this.shape_21.setTransform(1006.4527,271.4755);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#800000").s().p("Ai9DiQiTivAPmCIKFJNQifBSh6AAQiMAAhchug");
	this.shape_22.setTransform(1006.9806,270.5382);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AoGBcQBMEpC1BnQCqBiDfhdQCIg4A5gcQBdgvA0gvQB6hwgpjDQgvjdi1ijQi8iqjeAAQiPABhUASQhsAXg7A8QiJCMBkGIg");
	this.shape_23.setTransform(1011.9687,264.0516);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#800000").s().p("AkFHsQi1hnhMkpQhkmICJiMQA7g8BsgXQBUgSCPgBQDeAAC8CqQC1CjAvDdQApDDh6BwQg0AvhdAvQg5AciIA4QhtAuhfAAQhlAAhYgzg");
	this.shape_24.setTransform(1011.9687,264.0516);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_25.setTransform(929.05,107.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_26.setTransform(929.05,107.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_27.setTransform(1293.75,93.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_28.setTransform(1293.75,93.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_29.setTransform(1450.3,205.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_30.setTransform(1450.3,205.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_31.setTransform(1410.075,96.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_32.setTransform(1410.075,96.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_33.setTransform(1305.25,246.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_34.setTransform(1305.25,246.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_35.setTransform(1180.3,334.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_36.setTransform(1180.3,334.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_37.setTransform(1108.475,202.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_38.setTransform(1108.475,202.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_39.setTransform(1052.45,86.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_40.setTransform(1052.45,86.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_41.setTransform(911.7,194.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_42.setTransform(911.7,194.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_43.setTransform(863.6,340.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_44.setTransform(863.6,340.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AAAkeQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUQhShUAAh3QAAh2BShUQBShUBzAAg");
	this.shape_45.setTransform(807.6,262.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3771C8").s().p("AjFDLQhShUAAh3QAAh2BShUQBShUBzAAQB0AABSBUQBSBUAAB2QAAB3hSBUQhSBUh0AAQhzAAhShUg");
	this.shape_46.setTransform(807.6,262.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_47.setTransform(1103.45,389.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Eg+1AAAMB9rAAA");
	this.shape_48.setTransform(1103.05,39.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFF6D5").s().p("Eg9/AbjQgXAAgRgQQgRgSAAgYMAAAg1SQAAgXARgRQARgRAXAAMB7+AAAQAYAAARARQARARAAAXMAAAA1SQAAAYgRASQgRAQgYAAg");
	this.shape_49.setTransform(1102.375,214.3);

	this.bloodstream = new lib.Symbol3();
	this.bloodstream.name = "bloodstream";
	this.bloodstream.setTransform(1101.65,214.2,1,1,0,0,0,0.5,-0.1);

	this.instance_16 = new lib.Tween254("synched",0);
	this.instance_16.setTransform(1102.75,214.3);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween255("synched",0);
	this.instance_17.setTransform(1102.75,214.3);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},225).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.glucose_1}]},3).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:807.6,y:262.775}},{t:this.shape_45,p:{x:807.6,y:262.775}},{t:this.shape_44,p:{x:863.6,y:340.325}},{t:this.shape_43,p:{x:863.6,y:340.325}},{t:this.shape_42,p:{x:911.7,y:194.275}},{t:this.shape_41,p:{x:911.7,y:194.275}},{t:this.shape_40,p:{x:1052.45,y:86.675}},{t:this.shape_39,p:{x:1052.45,y:86.675}},{t:this.shape_38,p:{x:1108.475,y:202.475}},{t:this.shape_37,p:{x:1108.475,y:202.475}},{t:this.shape_36,p:{x:1180.3,y:334.575}},{t:this.shape_35,p:{x:1180.3,y:334.575}},{t:this.shape_34,p:{x:1305.25,y:246.975}},{t:this.shape_33,p:{x:1305.25,y:246.975}},{t:this.shape_32,p:{x:1410.075,y:96.175}},{t:this.shape_31,p:{x:1410.075,y:96.175}},{t:this.shape_30,p:{y:205.325,x:1450.3}},{t:this.shape_29,p:{y:205.325,x:1450.3}},{t:this.shape_28,p:{x:1293.75,y:93.325}},{t:this.shape_27,p:{x:1293.75,y:93.325}},{t:this.shape_26,p:{x:929.05,y:107.375}},{t:this.shape_25,p:{x:929.05,y:107.375}},{t:this.shape_24,p:{x:1011.9687,y:264.0516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1011.9687,y:264.0516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:1006.9806,y:270.5382,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:1006.4527,y:271.4755,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:1,scaleY:1,rotation:0,x:1206.4864,y:161.4492}},{t:this.shape_19,p:{scaleX:1,scaleY:1,rotation:0,x:1206.4864,y:161.4492}},{t:this.shape_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1403.4161,y:301.2258}},{t:this.shape_17,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1403.4161,y:301.2258}},{t:this.shape_16,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.998,x:803.9317,y:137.8243}},{t:this.shape_15,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.998,x:803.9317,y:137.8243}},{t:this.shape_14,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:782.7188,y:125.4162}},{t:this.shape_13,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:781.6746,y:124.8371}}]},4).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:798.55,y:262.775}},{t:this.shape_45,p:{x:798.55,y:262.775}},{t:this.shape_44,p:{x:873.05,y:340.325}},{t:this.shape_43,p:{x:873.05,y:340.325}},{t:this.shape_42,p:{x:901.65,y:205.325}},{t:this.shape_41,p:{x:901.65,y:205.325}},{t:this.shape_40,p:{x:1055.35,y:74.625}},{t:this.shape_39,p:{x:1055.35,y:74.625}},{t:this.shape_38,p:{x:1111.375,y:210.475}},{t:this.shape_37,p:{x:1111.375,y:210.475}},{t:this.shape_36,p:{x:1186.3,y:332.375}},{t:this.shape_35,p:{x:1186.3,y:332.375}},{t:this.shape_34,p:{x:1313.3,y:248.575}},{t:this.shape_33,p:{x:1313.3,y:248.575}},{t:this.shape_32,p:{x:1402.025,y:107.225}},{t:this.shape_31,p:{x:1402.025,y:107.225}},{t:this.shape_30,p:{y:191.125,x:1450.3}},{t:this.shape_29,p:{y:191.125,x:1450.3}},{t:this.shape_28,p:{x:1292,y:102.325}},{t:this.shape_27,p:{x:1292,y:102.325}},{t:this.shape_26,p:{x:918.9,y:93.325}},{t:this.shape_25,p:{x:918.9,y:93.325}},{t:this.shape_24,p:{x:1000.9187,y:274.1016,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1000.9187,y:274.1016,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:995.9306,y:280.5882,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:995.4027,y:281.5255,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1209.0615,y:166.5484}},{t:this.shape_19,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1209.0615,y:166.5484}},{t:this.shape_18,p:{scaleX:1,scaleY:1,rotation:0,x:1412.0128,y:300.5538}},{t:this.shape_17,p:{scaleX:1,scaleY:1,rotation:0,x:1412.0128,y:300.5538}},{t:this.shape_16,p:{scaleX:1,scaleY:1,rotation:0,x:803.9754,y:137.8988}},{t:this.shape_15,p:{scaleX:1,scaleY:1,rotation:0,x:803.9754,y:137.8988}},{t:this.shape_14,p:{scaleX:1,scaleY:1,rotation:0,x:786.725,y:120.45}},{t:this.shape_13,p:{scaleX:1,scaleY:1,rotation:0,x:785.8657,y:119.6198}}]},4).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:787.65,y:283.325}},{t:this.shape_45,p:{x:787.65,y:283.325}},{t:this.shape_44,p:{x:881.4,y:326.825}},{t:this.shape_43,p:{x:881.4,y:326.825}},{t:this.shape_42,p:{x:913.9,y:195.675}},{t:this.shape_41,p:{x:913.9,y:195.675}},{t:this.shape_40,p:{x:1047,y:84.875}},{t:this.shape_39,p:{x:1047,y:84.875}},{t:this.shape_38,p:{x:1103.025,y:219.625}},{t:this.shape_37,p:{x:1103.025,y:219.625}},{t:this.shape_36,p:{x:1192.75,y:332.375}},{t:this.shape_35,p:{x:1192.75,y:332.375}},{t:this.shape_34,p:{x:1322.3,y:240.225}},{t:this.shape_33,p:{x:1322.3,y:240.225}},{t:this.shape_32,p:{x:1405.875,y:93.325}},{t:this.shape_31,p:{x:1405.875,y:93.325}},{t:this.shape_30,p:{y:191.125,x:1440.65}},{t:this.shape_29,p:{y:191.125,x:1440.65}},{t:this.shape_28,p:{x:1278.95,y:93.325}},{t:this.shape_27,p:{x:1278.95,y:93.325}},{t:this.shape_26,p:{x:925.95,y:104.225}},{t:this.shape_25,p:{x:925.95,y:104.225}},{t:this.shape_24,p:{x:1013.7299,y:285.1457,scaleX:0.9998,scaleY:0.9998,rotation:-22.2315}},{t:this.shape_23,p:{x:1013.7299,y:285.1457,scaleX:0.9998,scaleY:0.9998,rotation:-22.2315}},{t:this.shape_22,p:{x:1011.5026,y:293.0132,scaleX:0.9996,scaleY:0.9996,rotation:-22.232}},{t:this.shape_21,p:{x:1011.3686,y:294.0801,scaleX:0.9996,scaleY:0.9996,rotation:-22.232}},{t:this.shape_20,p:{scaleX:1,scaleY:1,rotation:0,x:1209.1287,y:179.8473}},{t:this.shape_19,p:{scaleX:1,scaleY:1,rotation:0,x:1209.1287,y:179.8473}},{t:this.shape_18,p:{scaleX:0.9995,scaleY:0.9995,rotation:-14.9967,x:1411.5868,y:306.9833}},{t:this.shape_17,p:{scaleX:0.9995,scaleY:0.9995,rotation:-14.9967,x:1411.5868,y:306.9833}},{t:this.shape_16,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.9569,x:803.9467,y:137.8068}},{t:this.shape_15,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.9569,x:803.9467,y:137.8068}},{t:this.shape_14,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.9548,x:781.075,y:128.8613}},{t:this.shape_13,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.9548,x:779.9531,y:128.4517}}]},4).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:782.45,y:254.175}},{t:this.shape_45,p:{x:782.45,y:254.175}},{t:this.shape_44,p:{x:889.9,y:340.325}},{t:this.shape_43,p:{x:889.9,y:340.325}},{t:this.shape_42,p:{x:907.3,y:183.275}},{t:this.shape_41,p:{x:907.3,y:183.275}},{t:this.shape_40,p:{x:1049.15,y:82.325}},{t:this.shape_39,p:{x:1049.15,y:82.325}},{t:this.shape_38,p:{x:1108.475,y:214.775}},{t:this.shape_37,p:{x:1108.475,y:214.775}},{t:this.shape_36,p:{x:1188,y:328.875}},{t:this.shape_35,p:{x:1188,y:328.875}},{t:this.shape_34,p:{x:1293.75,y:256.225}},{t:this.shape_33,p:{x:1293.75,y:256.225}},{t:this.shape_32,p:{x:1403.875,y:108.475}},{t:this.shape_31,p:{x:1403.875,y:108.475}},{t:this.shape_30,p:{y:198.775,x:1439.55}},{t:this.shape_29,p:{y:198.775,x:1439.55}},{t:this.shape_28,p:{x:1302.5,y:87.125}},{t:this.shape_27,p:{x:1302.5,y:87.125}},{t:this.shape_26,p:{x:926.1,y:87.125}},{t:this.shape_25,p:{x:926.1,y:87.125}},{t:this.shape_24,p:{x:1000.9187,y:285.4516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1000.9187,y:285.4516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:995.9306,y:291.9382,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:995.4027,y:292.8755,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:1,scaleY:1,rotation:0,x:1214.8864,y:173.2992}},{t:this.shape_19,p:{scaleX:1,scaleY:1,rotation:0,x:1214.8864,y:173.2992}},{t:this.shape_18,p:{scaleX:1,scaleY:1,rotation:0,x:1423.2128,y:312.0038}},{t:this.shape_17,p:{scaleX:1,scaleY:1,rotation:0,x:1423.2128,y:312.0038}},{t:this.shape_16,p:{scaleX:1,scaleY:1,rotation:0,x:811.6754,y:156.6488}},{t:this.shape_15,p:{scaleX:1,scaleY:1,rotation:0,x:811.6754,y:156.6488}},{t:this.shape_14,p:{scaleX:1,scaleY:1,rotation:0,x:794.425,y:139.2}},{t:this.shape_13,p:{scaleX:1,scaleY:1,rotation:0,x:793.5657,y:138.3698}}]},4).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:793.5,y:262.775}},{t:this.shape_45,p:{x:793.5,y:262.775}},{t:this.shape_44,p:{x:880.1,y:340.325}},{t:this.shape_43,p:{x:880.1,y:340.325}},{t:this.shape_42,p:{x:901.65,y:196.975}},{t:this.shape_41,p:{x:901.65,y:196.975}},{t:this.shape_40,p:{x:1044.3,y:86.675}},{t:this.shape_39,p:{x:1044.3,y:86.675}},{t:this.shape_38,p:{x:1097.225,y:205.325}},{t:this.shape_37,p:{x:1097.225,y:205.325}},{t:this.shape_36,p:{x:1179.6,y:320.225}},{t:this.shape_35,p:{x:1179.6,y:320.225}},{t:this.shape_34,p:{x:1295.2,y:246.575}},{t:this.shape_33,p:{x:1295.2,y:246.575}},{t:this.shape_32,p:{x:1422.125,y:105.375}},{t:this.shape_31,p:{x:1422.125,y:105.375}},{t:this.shape_30,p:{y:205.325,x:1439.1}},{t:this.shape_29,p:{y:205.325,x:1439.1}},{t:this.shape_28,p:{x:1305.25,y:96.175}},{t:this.shape_27,p:{x:1305.25,y:96.175}},{t:this.shape_26,p:{x:928.95,y:105.375}},{t:this.shape_25,p:{x:928.95,y:105.375}},{t:this.shape_24,p:{x:1012.9498,y:262.9378,scaleX:0.9997,scaleY:0.9997,rotation:-14.998}},{t:this.shape_23,p:{x:1012.9498,y:262.9378,scaleX:0.9997,scaleY:0.9997,rotation:-14.998}},{t:this.shape_22,p:{x:1009.6777,y:270.4426,scaleX:0.9993,scaleY:0.9993,rotation:-14.9965}},{t:this.shape_21,p:{x:1009.4105,y:271.4838,scaleX:0.9993,scaleY:0.9993,rotation:-14.9965}},{t:this.shape_20,p:{scaleX:0.9993,scaleY:0.9993,rotation:14.9965,x:1222.1094,y:163.88}},{t:this.shape_19,p:{scaleX:0.9993,scaleY:0.9993,rotation:14.9965,x:1222.1094,y:163.88}},{t:this.shape_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1411.4661,y:291.8258}},{t:this.shape_17,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1411.4661,y:291.8258}},{t:this.shape_16,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.998,x:803.9602,y:147.8725}},{t:this.shape_15,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.998,x:803.9602,y:147.8725}},{t:this.shape_14,p:{scaleX:0.9993,scaleY:0.9993,rotation:14.9965,x:791.7979,y:126.5179}},{t:this.shape_13,p:{scaleX:0.9993,scaleY:0.9993,rotation:14.9965,x:791.1831,y:125.4943}}]},4).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:807.6,y:262.775}},{t:this.shape_45,p:{x:807.6,y:262.775}},{t:this.shape_44,p:{x:863.6,y:340.325}},{t:this.shape_43,p:{x:863.6,y:340.325}},{t:this.shape_42,p:{x:911.7,y:194.275}},{t:this.shape_41,p:{x:911.7,y:194.275}},{t:this.shape_40,p:{x:1052.45,y:86.675}},{t:this.shape_39,p:{x:1052.45,y:86.675}},{t:this.shape_38,p:{x:1108.475,y:202.475}},{t:this.shape_37,p:{x:1108.475,y:202.475}},{t:this.shape_36,p:{x:1180.3,y:334.575}},{t:this.shape_35,p:{x:1180.3,y:334.575}},{t:this.shape_34,p:{x:1305.25,y:246.975}},{t:this.shape_33,p:{x:1305.25,y:246.975}},{t:this.shape_32,p:{x:1410.075,y:96.175}},{t:this.shape_31,p:{x:1410.075,y:96.175}},{t:this.shape_30,p:{y:205.325,x:1450.3}},{t:this.shape_29,p:{y:205.325,x:1450.3}},{t:this.shape_28,p:{x:1293.75,y:93.325}},{t:this.shape_27,p:{x:1293.75,y:93.325}},{t:this.shape_26,p:{x:929.05,y:107.375}},{t:this.shape_25,p:{x:929.05,y:107.375}},{t:this.shape_24,p:{x:1011.9687,y:264.0516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1011.9687,y:264.0516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:1006.9806,y:270.5382,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:1006.4527,y:271.4755,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:1,scaleY:1,rotation:0,x:1206.4864,y:161.4492}},{t:this.shape_19,p:{scaleX:1,scaleY:1,rotation:0,x:1206.4864,y:161.4492}},{t:this.shape_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1403.4161,y:301.2258}},{t:this.shape_17,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1403.4161,y:301.2258}},{t:this.shape_16,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.998,x:803.9317,y:137.8243}},{t:this.shape_15,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.998,x:803.9317,y:137.8243}},{t:this.shape_14,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:782.7188,y:125.4162}},{t:this.shape_13,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:781.6746,y:124.8371}}]},4).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:798.55,y:262.775}},{t:this.shape_45,p:{x:798.55,y:262.775}},{t:this.shape_44,p:{x:873.05,y:340.325}},{t:this.shape_43,p:{x:873.05,y:340.325}},{t:this.shape_42,p:{x:901.65,y:205.325}},{t:this.shape_41,p:{x:901.65,y:205.325}},{t:this.shape_40,p:{x:1055.35,y:74.625}},{t:this.shape_39,p:{x:1055.35,y:74.625}},{t:this.shape_38,p:{x:1111.375,y:210.475}},{t:this.shape_37,p:{x:1111.375,y:210.475}},{t:this.shape_36,p:{x:1186.3,y:332.375}},{t:this.shape_35,p:{x:1186.3,y:332.375}},{t:this.shape_34,p:{x:1313.3,y:248.575}},{t:this.shape_33,p:{x:1313.3,y:248.575}},{t:this.shape_32,p:{x:1402.025,y:107.225}},{t:this.shape_31,p:{x:1402.025,y:107.225}},{t:this.shape_30,p:{y:191.125,x:1450.3}},{t:this.shape_29,p:{y:191.125,x:1450.3}},{t:this.shape_28,p:{x:1292,y:102.325}},{t:this.shape_27,p:{x:1292,y:102.325}},{t:this.shape_26,p:{x:918.9,y:93.325}},{t:this.shape_25,p:{x:918.9,y:93.325}},{t:this.shape_24,p:{x:1000.9187,y:274.1016,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1000.9187,y:274.1016,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:995.9306,y:280.5882,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:995.4027,y:281.5255,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1209.0615,y:166.5484}},{t:this.shape_19,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1209.0615,y:166.5484}},{t:this.shape_18,p:{scaleX:1,scaleY:1,rotation:0,x:1412.0128,y:300.5538}},{t:this.shape_17,p:{scaleX:1,scaleY:1,rotation:0,x:1412.0128,y:300.5538}},{t:this.shape_16,p:{scaleX:1,scaleY:1,rotation:0,x:803.9754,y:137.8988}},{t:this.shape_15,p:{scaleX:1,scaleY:1,rotation:0,x:803.9754,y:137.8988}},{t:this.shape_14,p:{scaleX:1,scaleY:1,rotation:0,x:786.725,y:120.45}},{t:this.shape_13,p:{scaleX:1,scaleY:1,rotation:0,x:785.8657,y:119.6198}}]},4).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_15}]},5).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:807.6,y:262.775}},{t:this.shape_45,p:{x:807.6,y:262.775}},{t:this.shape_44,p:{x:863.6,y:340.325}},{t:this.shape_43,p:{x:863.6,y:340.325}},{t:this.shape_42,p:{x:911.7,y:194.275}},{t:this.shape_41,p:{x:911.7,y:194.275}},{t:this.shape_40,p:{x:1052.45,y:86.675}},{t:this.shape_39,p:{x:1052.45,y:86.675}},{t:this.shape_38,p:{x:1108.475,y:202.475}},{t:this.shape_37,p:{x:1108.475,y:202.475}},{t:this.shape_36,p:{x:1180.3,y:334.575}},{t:this.shape_35,p:{x:1180.3,y:334.575}},{t:this.shape_34,p:{x:1305.25,y:246.975}},{t:this.shape_33,p:{x:1305.25,y:246.975}},{t:this.shape_32,p:{x:1410.075,y:96.175}},{t:this.shape_31,p:{x:1410.075,y:96.175}},{t:this.shape_30,p:{y:205.325,x:1450.3}},{t:this.shape_29,p:{y:205.325,x:1450.3}},{t:this.shape_28,p:{x:1293.75,y:93.325}},{t:this.shape_27,p:{x:1293.75,y:93.325}},{t:this.shape_26,p:{x:929.05,y:107.375}},{t:this.shape_25,p:{x:929.05,y:107.375}},{t:this.shape_24,p:{x:1011.9687,y:264.0516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1011.9687,y:264.0516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:1006.9806,y:270.5382,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:1006.4527,y:271.4755,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:1,scaleY:1,rotation:0,x:1206.4864,y:161.4492}},{t:this.shape_19,p:{scaleX:1,scaleY:1,rotation:0,x:1206.4864,y:161.4492}},{t:this.shape_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1403.4161,y:301.2258}},{t:this.shape_17,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1403.4161,y:301.2258}},{t:this.shape_16,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.998,x:803.9317,y:137.8243}},{t:this.shape_15,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.998,x:803.9317,y:137.8243}},{t:this.shape_14,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:782.7188,y:125.4162}},{t:this.shape_13,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:781.6746,y:124.8371}}]},5).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:798.55,y:262.775}},{t:this.shape_45,p:{x:798.55,y:262.775}},{t:this.shape_44,p:{x:873.05,y:340.325}},{t:this.shape_43,p:{x:873.05,y:340.325}},{t:this.shape_42,p:{x:901.65,y:205.325}},{t:this.shape_41,p:{x:901.65,y:205.325}},{t:this.shape_40,p:{x:1055.35,y:74.625}},{t:this.shape_39,p:{x:1055.35,y:74.625}},{t:this.shape_38,p:{x:1111.375,y:210.475}},{t:this.shape_37,p:{x:1111.375,y:210.475}},{t:this.shape_36,p:{x:1186.3,y:332.375}},{t:this.shape_35,p:{x:1186.3,y:332.375}},{t:this.shape_34,p:{x:1313.3,y:248.575}},{t:this.shape_33,p:{x:1313.3,y:248.575}},{t:this.shape_32,p:{x:1402.025,y:107.225}},{t:this.shape_31,p:{x:1402.025,y:107.225}},{t:this.shape_30,p:{y:191.125,x:1450.3}},{t:this.shape_29,p:{y:191.125,x:1450.3}},{t:this.shape_28,p:{x:1292,y:102.325}},{t:this.shape_27,p:{x:1292,y:102.325}},{t:this.shape_26,p:{x:918.9,y:93.325}},{t:this.shape_25,p:{x:918.9,y:93.325}},{t:this.shape_24,p:{x:1000.9187,y:274.1016,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1000.9187,y:274.1016,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:995.9306,y:280.5882,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:995.4027,y:281.5255,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1209.0615,y:166.5484}},{t:this.shape_19,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1209.0615,y:166.5484}},{t:this.shape_18,p:{scaleX:1,scaleY:1,rotation:0,x:1412.0128,y:300.5538}},{t:this.shape_17,p:{scaleX:1,scaleY:1,rotation:0,x:1412.0128,y:300.5538}},{t:this.shape_16,p:{scaleX:1,scaleY:1,rotation:0,x:803.9754,y:137.8988}},{t:this.shape_15,p:{scaleX:1,scaleY:1,rotation:0,x:803.9754,y:137.8988}},{t:this.shape_14,p:{scaleX:1,scaleY:1,rotation:0,x:786.725,y:120.45}},{t:this.shape_13,p:{scaleX:1,scaleY:1,rotation:0,x:785.8657,y:119.6198}}]},4).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:787.65,y:283.325}},{t:this.shape_45,p:{x:787.65,y:283.325}},{t:this.shape_44,p:{x:881.4,y:326.825}},{t:this.shape_43,p:{x:881.4,y:326.825}},{t:this.shape_42,p:{x:913.9,y:195.675}},{t:this.shape_41,p:{x:913.9,y:195.675}},{t:this.shape_40,p:{x:1047,y:84.875}},{t:this.shape_39,p:{x:1047,y:84.875}},{t:this.shape_38,p:{x:1103.025,y:219.625}},{t:this.shape_37,p:{x:1103.025,y:219.625}},{t:this.shape_36,p:{x:1192.75,y:332.375}},{t:this.shape_35,p:{x:1192.75,y:332.375}},{t:this.shape_34,p:{x:1322.3,y:240.225}},{t:this.shape_33,p:{x:1322.3,y:240.225}},{t:this.shape_32,p:{x:1405.875,y:93.325}},{t:this.shape_31,p:{x:1405.875,y:93.325}},{t:this.shape_30,p:{y:191.125,x:1440.65}},{t:this.shape_29,p:{y:191.125,x:1440.65}},{t:this.shape_28,p:{x:1278.95,y:93.325}},{t:this.shape_27,p:{x:1278.95,y:93.325}},{t:this.shape_26,p:{x:925.95,y:104.225}},{t:this.shape_25,p:{x:925.95,y:104.225}},{t:this.shape_24,p:{x:1013.7171,y:285.1431,scaleX:0.9998,scaleY:0.9998,rotation:-22.2314}},{t:this.shape_23,p:{x:1013.7171,y:285.1431,scaleX:0.9998,scaleY:0.9998,rotation:-22.2314}},{t:this.shape_22,p:{x:1011.4816,y:293.0111,scaleX:0.9996,scaleY:0.9996,rotation:-22.2313}},{t:this.shape_21,p:{x:1011.3476,y:294.0779,scaleX:0.9996,scaleY:0.9996,rotation:-22.2313}},{t:this.shape_20,p:{scaleX:1,scaleY:1,rotation:0,x:1209.1287,y:179.8473}},{t:this.shape_19,p:{scaleX:1,scaleY:1,rotation:0,x:1209.1287,y:179.8473}},{t:this.shape_18,p:{scaleX:0.9994,scaleY:0.9994,rotation:-14.9962,x:1411.5244,y:306.985}},{t:this.shape_17,p:{scaleX:0.9994,scaleY:0.9994,rotation:-14.9962,x:1411.5244,y:306.985}},{t:this.shape_16,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.9576,x:803.9435,y:137.8035}},{t:this.shape_15,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.9576,x:803.9435,y:137.8035}},{t:this.shape_14,p:{scaleX:0.9995,scaleY:0.9995,rotation:-23.9538,x:781.0655,y:128.8596}},{t:this.shape_13,p:{scaleX:0.9995,scaleY:0.9995,rotation:-23.9538,x:779.9437,y:128.45}}]},5).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:782.45,y:254.175}},{t:this.shape_45,p:{x:782.45,y:254.175}},{t:this.shape_44,p:{x:889.9,y:340.325}},{t:this.shape_43,p:{x:889.9,y:340.325}},{t:this.shape_42,p:{x:907.3,y:183.275}},{t:this.shape_41,p:{x:907.3,y:183.275}},{t:this.shape_40,p:{x:1049.15,y:82.325}},{t:this.shape_39,p:{x:1049.15,y:82.325}},{t:this.shape_38,p:{x:1108.475,y:214.775}},{t:this.shape_37,p:{x:1108.475,y:214.775}},{t:this.shape_36,p:{x:1188,y:328.875}},{t:this.shape_35,p:{x:1188,y:328.875}},{t:this.shape_34,p:{x:1293.75,y:256.225}},{t:this.shape_33,p:{x:1293.75,y:256.225}},{t:this.shape_32,p:{x:1403.875,y:108.475}},{t:this.shape_31,p:{x:1403.875,y:108.475}},{t:this.shape_30,p:{y:198.775,x:1439.55}},{t:this.shape_29,p:{y:198.775,x:1439.55}},{t:this.shape_28,p:{x:1302.5,y:87.125}},{t:this.shape_27,p:{x:1302.5,y:87.125}},{t:this.shape_26,p:{x:926.1,y:87.125}},{t:this.shape_25,p:{x:926.1,y:87.125}},{t:this.shape_24,p:{x:1000.9187,y:285.4516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1000.9187,y:285.4516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:995.9306,y:291.9382,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:995.4027,y:292.8755,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:1,scaleY:1,rotation:0,x:1214.8864,y:173.2992}},{t:this.shape_19,p:{scaleX:1,scaleY:1,rotation:0,x:1214.8864,y:173.2992}},{t:this.shape_18,p:{scaleX:1,scaleY:1,rotation:0,x:1423.2128,y:312.0038}},{t:this.shape_17,p:{scaleX:1,scaleY:1,rotation:0,x:1423.2128,y:312.0038}},{t:this.shape_16,p:{scaleX:1,scaleY:1,rotation:0,x:811.6754,y:156.6488}},{t:this.shape_15,p:{scaleX:1,scaleY:1,rotation:0,x:811.6754,y:156.6488}},{t:this.shape_14,p:{scaleX:1,scaleY:1,rotation:0,x:794.425,y:139.2}},{t:this.shape_13,p:{scaleX:1,scaleY:1,rotation:0,x:793.5657,y:138.3698}}]},4).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:793.5,y:262.775}},{t:this.shape_45,p:{x:793.5,y:262.775}},{t:this.shape_44,p:{x:880.1,y:340.325}},{t:this.shape_43,p:{x:880.1,y:340.325}},{t:this.shape_42,p:{x:901.65,y:196.975}},{t:this.shape_41,p:{x:901.65,y:196.975}},{t:this.shape_40,p:{x:1044.3,y:86.675}},{t:this.shape_39,p:{x:1044.3,y:86.675}},{t:this.shape_38,p:{x:1097.225,y:205.325}},{t:this.shape_37,p:{x:1097.225,y:205.325}},{t:this.shape_36,p:{x:1179.6,y:320.225}},{t:this.shape_35,p:{x:1179.6,y:320.225}},{t:this.shape_34,p:{x:1295.2,y:246.575}},{t:this.shape_33,p:{x:1295.2,y:246.575}},{t:this.shape_32,p:{x:1422.125,y:105.375}},{t:this.shape_31,p:{x:1422.125,y:105.375}},{t:this.shape_30,p:{y:205.325,x:1439.1}},{t:this.shape_29,p:{y:205.325,x:1439.1}},{t:this.shape_28,p:{x:1305.25,y:96.175}},{t:this.shape_27,p:{x:1305.25,y:96.175}},{t:this.shape_26,p:{x:928.95,y:105.375}},{t:this.shape_25,p:{x:928.95,y:105.375}},{t:this.shape_24,p:{x:1012.9406,y:262.9306,scaleX:0.9996,scaleY:0.9996,rotation:-14.9985}},{t:this.shape_23,p:{x:1012.9406,y:262.9306,scaleX:0.9996,scaleY:0.9996,rotation:-14.9985}},{t:this.shape_22,p:{x:1009.6641,y:270.4315,scaleX:0.9992,scaleY:0.9992,rotation:-14.9971}},{t:this.shape_21,p:{x:1009.397,y:271.4726,scaleX:0.9992,scaleY:0.9992,rotation:-14.9971}},{t:this.shape_20,p:{scaleX:0.9992,scaleY:0.9992,rotation:14.9971,x:1222.0862,y:163.8743}},{t:this.shape_19,p:{scaleX:0.9992,scaleY:0.9992,rotation:14.9971,x:1222.0862,y:163.8743}},{t:this.shape_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-14.9971,x:1411.4335,y:291.8137}},{t:this.shape_17,p:{scaleX:0.9992,scaleY:0.9992,rotation:-14.9971,x:1411.4335,y:291.8137}},{t:this.shape_16,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.9985,x:803.957,y:147.8691}},{t:this.shape_15,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.9985,x:803.957,y:147.8691}},{t:this.shape_14,p:{scaleX:0.9992,scaleY:0.9992,rotation:14.9971,x:791.7939,y:126.5136}},{t:this.shape_13,p:{scaleX:0.9992,scaleY:0.9992,rotation:14.9971,x:791.1791,y:125.4901}}]},4).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:807.6,y:262.775}},{t:this.shape_45,p:{x:807.6,y:262.775}},{t:this.shape_44,p:{x:863.6,y:340.325}},{t:this.shape_43,p:{x:863.6,y:340.325}},{t:this.shape_42,p:{x:911.7,y:194.275}},{t:this.shape_41,p:{x:911.7,y:194.275}},{t:this.shape_40,p:{x:1052.45,y:86.675}},{t:this.shape_39,p:{x:1052.45,y:86.675}},{t:this.shape_38,p:{x:1108.475,y:202.475}},{t:this.shape_37,p:{x:1108.475,y:202.475}},{t:this.shape_36,p:{x:1180.3,y:334.575}},{t:this.shape_35,p:{x:1180.3,y:334.575}},{t:this.shape_34,p:{x:1305.25,y:246.975}},{t:this.shape_33,p:{x:1305.25,y:246.975}},{t:this.shape_32,p:{x:1410.075,y:96.175}},{t:this.shape_31,p:{x:1410.075,y:96.175}},{t:this.shape_30,p:{y:205.325,x:1450.3}},{t:this.shape_29,p:{y:205.325,x:1450.3}},{t:this.shape_28,p:{x:1293.75,y:93.325}},{t:this.shape_27,p:{x:1293.75,y:93.325}},{t:this.shape_26,p:{x:929.05,y:107.375}},{t:this.shape_25,p:{x:929.05,y:107.375}},{t:this.shape_24,p:{x:1011.9687,y:264.0516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1011.9687,y:264.0516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:1006.9806,y:270.5382,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:1006.4527,y:271.4755,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:1,scaleY:1,rotation:0,x:1206.4864,y:161.4492}},{t:this.shape_19,p:{scaleX:1,scaleY:1,rotation:0,x:1206.4864,y:161.4492}},{t:this.shape_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-14.9971,x:1403.3835,y:301.2137}},{t:this.shape_17,p:{scaleX:0.9992,scaleY:0.9992,rotation:-14.9971,x:1403.3835,y:301.2137}},{t:this.shape_16,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.9985,x:803.9285,y:137.821}},{t:this.shape_15,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.9985,x:803.9285,y:137.821}},{t:this.shape_14,p:{scaleX:0.9992,scaleY:0.9992,rotation:-14.9971,x:782.7148,y:125.412}},{t:this.shape_13,p:{scaleX:0.9992,scaleY:0.9992,rotation:-14.9971,x:781.6707,y:124.8329}}]},4).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:798.55,y:262.775}},{t:this.shape_45,p:{x:798.55,y:262.775}},{t:this.shape_44,p:{x:873.05,y:340.325}},{t:this.shape_43,p:{x:873.05,y:340.325}},{t:this.shape_42,p:{x:901.65,y:205.325}},{t:this.shape_41,p:{x:901.65,y:205.325}},{t:this.shape_40,p:{x:1055.35,y:74.625}},{t:this.shape_39,p:{x:1055.35,y:74.625}},{t:this.shape_38,p:{x:1111.375,y:210.475}},{t:this.shape_37,p:{x:1111.375,y:210.475}},{t:this.shape_36,p:{x:1186.3,y:332.375}},{t:this.shape_35,p:{x:1186.3,y:332.375}},{t:this.shape_34,p:{x:1313.3,y:248.575}},{t:this.shape_33,p:{x:1313.3,y:248.575}},{t:this.shape_32,p:{x:1402.025,y:107.225}},{t:this.shape_31,p:{x:1402.025,y:107.225}},{t:this.shape_30,p:{y:191.125,x:1450.3}},{t:this.shape_29,p:{y:191.125,x:1450.3}},{t:this.shape_28,p:{x:1292,y:102.325}},{t:this.shape_27,p:{x:1292,y:102.325}},{t:this.shape_26,p:{x:918.9,y:93.325}},{t:this.shape_25,p:{x:918.9,y:93.325}},{t:this.shape_24,p:{x:1000.9187,y:274.1016,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1000.9187,y:274.1016,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:995.9306,y:280.5882,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:995.4027,y:281.5255,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:0.9992,scaleY:0.9992,rotation:-14.9971,x:1209.0383,y:166.5427}},{t:this.shape_19,p:{scaleX:0.9992,scaleY:0.9992,rotation:-14.9971,x:1209.0383,y:166.5427}},{t:this.shape_18,p:{scaleX:1,scaleY:1,rotation:0,x:1412.0128,y:300.5538}},{t:this.shape_17,p:{scaleX:1,scaleY:1,rotation:0,x:1412.0128,y:300.5538}},{t:this.shape_16,p:{scaleX:1,scaleY:1,rotation:0,x:803.9754,y:137.8988}},{t:this.shape_15,p:{scaleX:1,scaleY:1,rotation:0,x:803.9754,y:137.8988}},{t:this.shape_14,p:{scaleX:1,scaleY:1,rotation:0,x:786.725,y:120.45}},{t:this.shape_13,p:{scaleX:1,scaleY:1,rotation:0,x:785.8657,y:119.6198}}]},4).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_15}]},5).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:807.6,y:262.775}},{t:this.shape_45,p:{x:807.6,y:262.775}},{t:this.shape_44,p:{x:863.6,y:340.325}},{t:this.shape_43,p:{x:863.6,y:340.325}},{t:this.shape_42,p:{x:911.7,y:194.275}},{t:this.shape_41,p:{x:911.7,y:194.275}},{t:this.shape_40,p:{x:1052.45,y:86.675}},{t:this.shape_39,p:{x:1052.45,y:86.675}},{t:this.shape_38,p:{x:1108.475,y:202.475}},{t:this.shape_37,p:{x:1108.475,y:202.475}},{t:this.shape_36,p:{x:1180.3,y:334.575}},{t:this.shape_35,p:{x:1180.3,y:334.575}},{t:this.shape_34,p:{x:1305.25,y:246.975}},{t:this.shape_33,p:{x:1305.25,y:246.975}},{t:this.shape_32,p:{x:1410.075,y:96.175}},{t:this.shape_31,p:{x:1410.075,y:96.175}},{t:this.shape_30,p:{y:205.325,x:1450.3}},{t:this.shape_29,p:{y:205.325,x:1450.3}},{t:this.shape_28,p:{x:1293.75,y:93.325}},{t:this.shape_27,p:{x:1293.75,y:93.325}},{t:this.shape_26,p:{x:929.05,y:107.375}},{t:this.shape_25,p:{x:929.05,y:107.375}},{t:this.shape_24,p:{x:1011.9687,y:264.0516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_23,p:{x:1011.9687,y:264.0516,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_22,p:{x:1006.9806,y:270.5382,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_21,p:{x:1006.4527,y:271.4755,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_20,p:{scaleX:1,scaleY:1,rotation:0,x:1206.4864,y:161.4492}},{t:this.shape_19,p:{scaleX:1,scaleY:1,rotation:0,x:1206.4864,y:161.4492}},{t:this.shape_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1403.4161,y:301.2258}},{t:this.shape_17,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:1403.4161,y:301.2258}},{t:this.shape_16,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.998,x:803.9317,y:137.8243}},{t:this.shape_15,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.998,x:803.9317,y:137.8243}},{t:this.shape_14,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:782.7188,y:125.4162}},{t:this.shape_13,p:{scaleX:0.9993,scaleY:0.9993,rotation:-14.9965,x:781.6746,y:124.8371}}]},5).to({state:[{t:this.bloodstream}]},6).to({state:[{t:this.instance_16}]},159).to({state:[{t:this.instance_17}]},5).to({state:[]},24).wait(655));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(225).to({_off:false},0).to({_off:true,alpha:1},4).wait(36).to({_off:false},0).to({_off:true},5).wait(35).to({_off:false},0).to({_off:true},5).wait(854));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(480).to({_off:false},0).to({_off:true,alpha:0},5).wait(679));

	// lockBarrier
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#7C949A").ss(2.5,0,0,11.3).p("AlghrIAGALIgGAEAiuDzIH3kLQkTg1jJisQgsB3ibAiICsFTIALAWAi3D4IAJgF");
	this.shape_50.setTransform(1175.5248,378.0415);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7C949A").s().p("AlRhdQCbgiAsh3QDJCsETA1In3EMg");
	this.shape_51.setTransform(1174.6125,377.7125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#7C949A").ss(2.5,0,0,11.3).p("AlfhsIAFAKIgFAEAitDyIH3kLQkPhEjNidQg/BsiJAsICtFUIALAWAi2D3IAJgF");
	this.shape_52.setTransform(1175.4401,378.1683);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7C949A").s().p("AlRhdQCIgtA/hsQDNCeEPBDIn3EMg");
	this.shape_53.setTransform(1174.6125,377.7125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#7C949A").ss(2.5,0,0,11.3).p("AiyDwIH3kLQjXgPgthrIjZhnIjHCYIgFAEAlkhuIAFAKICtFUAi7D1IAJgFIALAW");
	this.shape_54.setTransform(1175.9808,378.3633);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7C8A90").s().p("Ag2gMIBUgeIAZBVg");
	this.shape_55.setTransform(1177.575,358.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7C949A").s().p("AlRhdIDHiZIDZBnQAsBsDXAOIn3EMg");
	this.shape_56.setTransform(1174.6125,377.7125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#7C949A").ss(2.5,0,0,11.3).p("AlkhuIAFAKIgFAEAiyDwIH3kLQjXgPgthrIjZhnIjHCYICtFUIALAWAi7D1IAJgF");
	this.shape_57.setTransform(1175.9808,378.3633);

	this.instance_18 = new lib.Tween272("synched",0);
	this.instance_18.setTransform(1174.35,378.8);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween273("synched",0);
	this.instance_19.setTransform(1174.35,847.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51},{t:this.shape_50}]},710).to({state:[{t:this.shape_53},{t:this.shape_52}]},2).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_57}]},40).to({state:[{t:this.instance_18}]},46).to({state:[{t:this.instance_19}]},17).to({state:[{t:this.instance_19}]},77).to({state:[]},1).wait(270));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(799).to({_off:false},0).to({_off:true,y:847.3},17).wait(348));

	// barette
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("AxYBFQAIgDBCgSQBBgRAbgGQBjgWB7gSQB7gTBugLQCOgOBygFQBzgFCiAAQC3AACMAGQCPAGFyAXQDjAOAIAAQAMABkMAZQjkAWg9AEQg9ADkyAGItvATQloAIgkABQgoABACgBg");
	this.shape_58.setTransform(414.1539,366.5941,0.9996,0.9996,1.4686);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D35F5F").s().p("AxYBFQAIgDBCgSQBBgRAbgGQBjgWB7gSQB7gTBugLQCOgOBygFQBzgFCiAAQC3AACMAGQCPAGFyAXIDrAOQAMABkMAZQjkAWg9AEQg9ADkyAGItvATImMAJIgeABIgIgBg");
	this.shape_59.setTransform(414.1539,366.5941,0.9996,0.9996,1.4686);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("Aw9EJQgDgRgRgZQgRgZgqgwQgsgygRgaQgSgZgDgSQgCgRAZgUQBXhKEGhFQEHhFE/giQBtgLB1gHQA3gDChAAQCkgBAuAEQEWATDFA1QDrA/CTBrQAXARAEAIQAFAHgDAPQgFAdgjA1QgkA2gzA4IgPAQIhWgFQgrgDjJgMQkpgTiTgHQiXgHiegCQpDgHnTBjQgxAKgEABQgFAAgCgKg");
	this.shape_60.setTransform(423.8197,340.8171,0.9996,0.9996,1.4686);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D35F5F").s().p("Aw9EJQgDgRgRgZQgRgZgqgwQgsgygRgaQgSgZgDgSQgCgRAZgUQBXhKEGhFQEHhFE/giQBtgLB1gHQA3gDChAAQCkgBAuAEQEWATDFA1QDrA/CTBrQAXARAEAIQAFAHgDAPQgFAdgjA1QgkA2gzA4IgPAQIhWgFIj0gPQkpgTiTgHQiXgHiegCQpDgHnTBjIg1ALQgFAAgCgKg");
	this.shape_61.setTransform(423.8197,340.8171,0.9996,0.9996,1.4686);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#D35F5F").ss(0.3,0,0,4).p("AglAVQgdgPAOgQQAOgRAnAAQAVAAAQAIQARAIACALQAEARgmAIQglAIgXgMg");
	this.shape_62.setTransform(424.6719,308.5155,0.9996,0.9996,1.4686);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D35F5F").s().p("AglAVQgdgPAOgQQAOgRAnAAQAVAAAQAIQARAIACALQAEARgmAIQgPADgMAAQgTAAgOgHg");
	this.shape_63.setTransform(424.6719,308.5155,0.9996,0.9996,1.4686);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.4,0,0,4).p("AAAgoQAdAAAVAMQAVAMAAAQQAAARgVAMQgVAMgdAAQgcAAgVgMQgVgMAAgRQAAgQAVgMQAVgMAcAAg");
	this.shape_64.setTransform(424.6246,308.4923,0.9996,0.9996,1.4686);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgxAdQgVgMAAgRQAAgQAVgMQAVgMAcAAQAdAAAVAMQAVAMAAAQQAAARgVAMQgVAMgdAAQgcAAgVgMg");
	this.shape_65.setTransform(424.6246,308.4923,0.9996,0.9996,1.4686);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(0.4,0,0,4).p("AxLA2QH6hyJsAHQDcADE/ATQCyALFlAV");
	this.shape_66.setTransform(423.2251,364.2485,0.9992,0.9992,1.4684);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAag1QDcADFAATIIWAgMgiXAA1QH6hyJrAHg");
	this.shape_67.setTransform(423.2651,364.2558,0.9992,0.9992,1.4684);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(0.4,0,0,4).p("AvWgFIjGA1IbrgmIJig6");
	this.shape_68.setTransform(412.5682,369.824,0.9992,0.9992,1.4684);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AvggFMAiHgAqIpiA5I7rAng");
	this.shape_69.setTransform(413.5518,369.8269,0.9992,0.9992,1.4684);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(0.4,0,0,4).p("ARMDyIBghyQBZh4gogfQjbiumfg9Qljg1m4AjQmEAfk8BVQkzBSg3BSQgQAWAcAsQAQAaAzA6QAyA4AOAYQAYAngUAS");
	this.shape_70.setTransform(423.8005,341.1533,0.9992,0.9992,1.4684);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AxTDqQgOgYgyg4Qgzg6gQgaQgcgrAQgYQA3hQEzhSQE8hWGEgeQG4gkFjA1QGfA+DbCtQAoAfhZB4IhgByMgibAAxQAUgRgYgog");
	this.shape_71.setTransform(423.8005,341.1533,0.9992,0.9992,1.4684);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_71,p:{x:423.8005,y:341.1533,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_70,p:{x:423.8005,y:341.1533,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_69,p:{x:413.5518,y:369.8269,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_68,p:{x:412.5682,y:369.824,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_67,p:{x:423.2651,y:364.2558,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_66,p:{x:423.2251,y:364.2485,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_65,p:{x:424.6246,y:308.4923,rotation:1.4686}},{t:this.shape_64,p:{x:424.6246,y:308.4923,rotation:1.4686}},{t:this.shape_63,p:{x:424.6719,rotation:1.4686,y:308.5155}},{t:this.shape_62,p:{x:424.6719,rotation:1.4686,y:308.5155}},{t:this.shape_61,p:{x:423.8197,y:340.8171,rotation:1.4686}},{t:this.shape_60,p:{x:423.8197,y:340.8171,rotation:1.4686}},{t:this.shape_59,p:{x:414.1539,y:366.5941,rotation:1.4686}},{t:this.shape_58,p:{x:414.1539,y:366.5941,rotation:1.4686}}]},1055).to({state:[{t:this.shape_71,p:{x:423.7966,y:341.1522,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_70,p:{x:423.7966,y:341.1522,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_69,p:{x:413.5482,y:369.8249,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_68,p:{x:412.5646,y:369.822,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_67,p:{x:423.2612,y:364.254,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_66,p:{x:423.2212,y:364.2467,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_65,p:{x:424.6226,y:308.4922,rotation:1.4686}},{t:this.shape_64,p:{x:424.6226,y:308.4922,rotation:1.4686}},{t:this.shape_63,p:{x:424.67,rotation:1.4686,y:308.5155}},{t:this.shape_62,p:{x:424.67,rotation:1.4686,y:308.5155}},{t:this.shape_61,p:{x:423.8177,y:340.8165,rotation:1.4686}},{t:this.shape_60,p:{x:423.8177,y:340.8165,rotation:1.4686}},{t:this.shape_59,p:{x:414.152,y:366.5932,rotation:1.4686}},{t:this.shape_58,p:{x:414.152,y:366.5932,rotation:1.4686}}]},39).to({state:[{t:this.shape_71,p:{x:423.7927,y:341.1511,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_70,p:{x:423.7927,y:341.1511,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_69,p:{x:413.5446,y:369.8229,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_68,p:{x:412.561,y:369.82,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_67,p:{x:423.2573,y:364.2521,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_66,p:{x:423.2173,y:364.2448,scaleX:0.9992,scaleY:0.9992,rotation:1.4684}},{t:this.shape_65,p:{x:424.6187,y:308.4921,rotation:1.4687}},{t:this.shape_64,p:{x:424.6187,y:308.4921,rotation:1.4687}},{t:this.shape_63,p:{x:424.666,rotation:1.4687,y:308.5153}},{t:this.shape_62,p:{x:424.666,rotation:1.4687,y:308.5153}},{t:this.shape_61,p:{x:423.8138,y:340.8154,rotation:1.4687}},{t:this.shape_60,p:{x:423.8138,y:340.8154,rotation:1.4687}},{t:this.shape_59,p:{x:414.1484,y:366.5913,rotation:1.4687}},{t:this.shape_58,p:{x:414.1484,y:366.5913,rotation:1.4687}}]},33).to({state:[{t:this.shape_71,p:{x:423.7888,y:341.1499,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_70,p:{x:423.7888,y:341.1499,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_69,p:{x:413.5409,y:369.8209,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_68,p:{x:412.5574,y:369.818,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_67,p:{x:423.2533,y:364.2503,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_66,p:{x:423.2134,y:364.243,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_65,p:{x:424.6167,y:308.492,rotation:1.4687}},{t:this.shape_64,p:{x:424.6167,y:308.492,rotation:1.4687}},{t:this.shape_63,p:{x:424.6641,rotation:1.4687,y:308.5153}},{t:this.shape_62,p:{x:424.6641,rotation:1.4687,y:308.5153}},{t:this.shape_61,p:{x:423.8118,y:340.8148,rotation:1.4687}},{t:this.shape_60,p:{x:423.8118,y:340.8148,rotation:1.4687}},{t:this.shape_59,p:{x:414.1466,y:366.5903,rotation:1.4687}},{t:this.shape_58,p:{x:414.1466,y:366.5903,rotation:1.4687}}]},24).to({state:[{t:this.shape_71,p:{x:423.7848,y:341.1488,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_70,p:{x:423.7848,y:341.1488,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_69,p:{x:413.5373,y:369.8189,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_68,p:{x:412.5538,y:369.8159,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_67,p:{x:423.2494,y:364.2484,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_66,p:{x:423.2094,y:364.2412,scaleX:0.9991,scaleY:0.9991,rotation:1.4685}},{t:this.shape_65,p:{x:424.6147,y:308.492,rotation:1.4687}},{t:this.shape_64,p:{x:424.6147,y:308.492,rotation:1.4687}},{t:this.shape_63,p:{x:424.6621,rotation:1.4687,y:308.5152}},{t:this.shape_62,p:{x:424.6621,rotation:1.4687,y:308.5152}},{t:this.shape_61,p:{x:423.8099,y:340.8143,rotation:1.4687}},{t:this.shape_60,p:{x:423.8099,y:340.8143,rotation:1.4687}},{t:this.shape_59,p:{x:414.1447,y:366.5894,rotation:1.4687}},{t:this.shape_58,p:{x:414.1447,y:366.5894,rotation:1.4687}}]},12).wait(1));

	// hairLine
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AJwjOQi8BahdAtQioBQh6AvQlVCGlUAQ");
	this.shape_72.setTransform(399.011,403.3356);
	this.shape_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(1055).to({_off:false},0).wait(109));

	// hair
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#502D16").s().p("AN8IeQgPhVAAh1IAEjHQACjohJhsQhmiYkngoIkaCHQinBRh5AvQlWCFlVAQQgZFrgPBrQgjD6hNCEQhPhrg7i7Qg8i/gRjPQgTjfAmi1QApjLBsh0QDkj2F4hTQFDhIF7A3QFPAvEKB9QEAB4ApB2QA9CxgPHLQgPHZhUEaQiziOgpjlg");
	this.shape_73.setTransform(420.1554,421.8091);
	this.shape_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(1055).to({_off:false},0).wait(109));

	// rEyelid
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFE6D5").s().p("ADrIOQhFgogVg5QgWg6gEh0QgEhzDygEQDxgEAGB4QAGB4gOA3QgNA2grAqQgsAqhgAAQhhAAhEgngAmyIFQhFgogVg5QgWg6gEh0QgEhzDygEQDxgEAGB4QAGB4gOA3QgNA2grAqQgsAqhgAAQhhAAhEgngAnhmiQh8hDAAgXQAAgWBagRQBagPB/AAQB/AABaAPQAWAEAQAFQATgFAYgFQBagQB/AAQB/AABaAQQBaAQAAAXIgCBPQgDA6i0AKQi0AKh8hDIgdgRIgBAIQgCA5izAKIguABQiXAAhsg6g");
	this.shape_74.setTransform(421.1046,452.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFE6D5").s().p("ADqHLQhEgogWg5QgVg6gEh0QgEhzDxgEQDygEAGB4QAFB4gNA3QgOA2grAqQgrAqhhAAQhgAAhFgngAmzHCQhEgogWg5QgVg6gEh0QgEhzDxgEQDygEAGB4QAFB4gNA3QgOA2grAqQgrAqhhAAQhgAAhFgngAnglfQh8hEAAgWQAAgXBagQQBagQB/AAQB/AABaAQQAWAEAQAFQATgGAYgEQBagQB/AAQB/AABaAQQBaAQAAAWIgCBQQgDA5i0AKQi0AKh8hDIgdgQIgBAIQgCA5izAKIguABQiXAAhsg6g");
	this.shape_75.setTransform(421.1796,450.125);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFE6D5").s().p("ADqF3QhEgogWg5QgVg6gEh0QgEhyDxgDQDygEAGB3QAFB4gNA2QgOA3grApQgrArhhAAQhgAAhFgogAmzFuQhEgogWg5QgVg6gEh0QgEhyDxgEQDygDAGB3QAFB4gNA2QgOA3grApQgrArhhAAQhgAAhFgogAngkLQh8hEAAgWQAAgXBagQQBagQB/AAQB/AABaAQQAWAEAQAEQATgFAYgFQBagPB/AAQB/AABaAPQBaARAAAWIgCBQQgDA5i0AKQi0AKh8hDIgdgQIgBAIQgCA4izAKIguACQiXAAhsg6g");
	this.shape_76.setTransform(421.1796,450.55);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFE6D5").s().p("ADqEkQhEgogpg5Qgog4gDh0QgChyEDgFQEDgFAGB3QAFB4gNA3QgOA2grAqQgrAqhhAAQhgAAhFgngAmzEbQhEgogWg5QgVg6gEh0QgEhyDxgEQDygEAGB3QAFB4gNA3QgOA2grAqQgrAqhhAAQhgAAhFgngAngi4Qh8hEAAgWQAAgXBagQQBagQB/AAQB/AABaAQQAWAEAQAFQATgGAYgEQBagQB/AAQB/AABaAQQBaAQAAAWIgCBQQgDA5i0AKQi0AKh8hDIgdgQIgBAIQgCA5izAKIguABQiXAAhsg6g");
	this.shape_77.setTransform(421.1796,449.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("ABrAsQD5jADIDAAosA3QD5jADIDA");
	this.shape_78.setTransform(422.9751,439.6596);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFE6D5").s().p("ADnEKQhEgogpg4Qgog5gdiWQgThgAqgGQgWgJgVgMIgdgQIgBAIQgBAegzARQAgAPgQBLQgeCGgNA3QgOA2grAqQgrAqhhAAQhgAAhFgnQhEgogWg5QgVg6ABicQAAgeAFgVQAPg5A0AHIgHgDQh8hEAAgWQAAgXBagQQBagQB/AAQB/AABaAQQAWAEAQAFQATgGAZgEQBZgQB/AAQB/AABaAQQBaAQAAAWIgCBQIgCAKQBbglgBCFQgBCwgOA3QgOA2grAqQgrAqhhAAQhgAAhFgngAhcgIQjIjBj5DBQB8hgBxAAQBwAABkBggAI7gTQjIjBj5DBQB9hgBwAAQBwAABkBgg");
	this.shape_79.setTransform(421.4507,446.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_74}]},1151).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).wait(9));

	// head
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF8080").s().p("AgyAkQgVgPAAgVQAAgUAVgPQAVgPAdAAQAeAAAVAPQAVAPAAAUQAAAVgVAPQgVAPgeAAQgdAAgVgPg");
	this.shape_80.setTransform(421.025,467.925);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgnAuQgQgTAAgbQAAgaAQgTQAQgTAXAAQAXAAARATQAQATAAAaQAAAbgQATQgRATgXAAQgXAAgQgTg");
	this.shape_81.setTransform(450.6,438.425);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#004455").s().p("AhSBbQgiglAAg2QAAg1AiglQAigmAwAAQAwAAAjAmQAiAlAAA1QAAA2giAlQgjAmgwAAQgwAAgigmg");
	this.shape_82.setTransform(450.575,440.45);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjcQBLAAA0BBQA1BAAABbQAABcg1BBQg1BBhKAAQhJAAg1hBQg0hBAAhcQAAhbA0hAQA1hBBJAAg");
	this.shape_83.setTransform(450.6,439.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ah+CcQg0hAgBhcQABhbA0hAQA0hCBKAAQBKAAA1BCQA1BAgBBbQABBcg1BAQg1BChKAAQhJAAg1hCg");
	this.shape_84.setTransform(450.6,439.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgnAuQgRgSAAgcQAAgaARgTQARgTAWAAQAXAAARATQARATAAAaQAAAcgRASQgRATgXAAQgXAAgQgTg");
	this.shape_85.setTransform(392.775,438.75);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#004455").s().p("AhSBbQgiglAAg2QAAg0AigmQAjgmAvAAQAxAAAiAmQAiAmAAA0QAAA1giAmQgiAmgxAAQgvAAgjgmg");
	this.shape_86.setTransform(392.725,441.275);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjcQBKAAA1BBQA0BAAABbQAABcg0BBQg1BAhKAAQhJAAg1hAQg0hBAAhcQAAhbA0hAQA1hBBJAAg");
	this.shape_87.setTransform(392.275,439.625);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("Ah+CdQg0hBAAhcQAAhbA0hAQA1hBBJAAQBKAAA1BBQA0BAAABbQAABcg0BBQg1BAhKAAQhJAAg1hAg");
	this.shape_88.setTransform(392.275,439.625);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("AtdnEIgHBuQgHCHABB1QAEF2BYBAQB0BVIkALQDlAFDYgNQDdgOB6gbQCXgiApjBQANg8AAhFIgCg4");
	this.shape_89.setTransform(420.0188,470.5674);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("AxYBFQAIgDBCgSQBBgRAbgGQBjgWB7gSQB7gTBugLQCOgOBygFQBzgFCiAAQC3AACMAGQCPAGFyAXQDjAOAIAAQAMABkMAZQjkAWg9AEQg9ADkyAGItvATQloAIgkABQgoABACgBg");
	this.shape_90.setTransform(410.3435,366.1229);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D35F5F").s().p("AxYBFQAIgDBCgSQBBgRAbgGQBjgWB7gSQB7gTBugLQCOgOBygFQBzgFCiAAQC3AACMAGQCPAGFyAXIDrAOQAMABkMAZQjkAWg9AEQg9ADkyAGItvATImMAJIgeABIgIgBg");
	this.shape_91.setTransform(410.3435,366.1229);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("Aw9EJQgDgRgRgZQgRgZgqgwQgsgygRgaQgSgZgDgSQgCgRAZgUQBXhKEGhFQEHhFE/giQBtgLB1gHQA3gDChAAQCkgBAuAEQEWATDFA1QDrA/CTBrQAXARAEAIQAFAHgDAPQgFAdgjA1QgkA2gzA4IgPAQIhWgFQgrgDjJgMQkpgTiTgHQiXgHiegCQpDgHnTBjQgxAKgEABQgFAAgCgKg");
	this.shape_92.setTransform(419.3488,340.0969);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D35F5F").s().p("Aw9EJQgDgRgRgZQgRgZgqgwQgsgygRgaQgSgZgDgSQgCgRAZgUQBXhKEGhFQEHhFE/giQBtgLB1gHQA3gDChAAQCkgBAuAEQEWATDFA1QDrA/CTBrQAXARAEAIQAFAHgDAPQgFAdgjA1QgkA2gzA4IgPAQIhWgFIj0gPQkpgTiTgHQiXgHiegCQpDgHnTBjIg1ALQgFAAgCgKg");
	this.shape_93.setTransform(419.3488,340.0969);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#D35F5F").ss(0.3,0,0,4).p("AglAVQgdgPAOgQQAOgRAnAAQAVAAAQAIQARAIACALQAEARgmAIQglAIgXgMg");
	this.shape_94.setTransform(419.373,307.772);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D35F5F").s().p("AglAVQgdgPAOgQQAOgRAnAAQAVAAAQAIQARAIACALQAEARgmAIQgPADgMAAQgTAAgOgHg");
	this.shape_95.setTransform(419.373,307.772);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(0.4,0,0,4).p("AAAgoQAdAAAVAMQAVAMAAAQQAAARgVAMQgVAMgdAAQgcAAgVgMQgVgMAAgRQAAgQAVgMQAVgMAcAAg");
	this.shape_96.setTransform(419.325,307.75);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgxAdQgVgMAAgRQAAgQAVgMQAVgMAcAAQAdAAAVAMQAVAMAAAQQAAARgVAMQgVAMgdAAQgcAAgVgMg");
	this.shape_97.setTransform(419.325,307.75);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(0.4,0,0,4).p("AxLA2QH6hyJsAHQDcADE/ATQCyALFlAV");
	this.shape_98.setTransform(419.4098,363.5709);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAag1QDcADFAATIIWAgMgiXAA1QH6hyJrAHg");
	this.shape_99.setTransform(419.45,363.5771);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(0.4,0,0,4).p("AvWgFIjGA1IbrgmIJig6");
	this.shape_100.setTransform(408.8908,369.4223);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AvggFMAiHgAqIpiA5I7rAng");
	this.shape_101.setTransform(409.875,369.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(0.4,0,0,4).p("ARMDyIBghyQBZh4gogfQjbiumfg9Qljg1m4AjQmEAfk8BVQkzBSg3BSQgQAWAcAsQAQAaAzA6QAyA4AOAYQAYAngUAS");
	this.shape_102.setTransform(419.3932,340.45);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AxTDqQgOgYgyg4Qgzg6gQgaQgcgrAQgYQA3hQEzhSQE8hWGEgeQG4gkFjA1QGfA+DbCtQAoAfhZB4IhgByMgibAAxQAUgRgYgog");
	this.shape_103.setTransform(419.3932,340.45);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFE6D5").s().p("AjsKOQjhgKiPgaQiPgagmglQgbgcgThGQgShFgIhnQgKiGAGhcQADgqAFh9QAGhmABgBQABgBAygGQCNgQB/geQCBggCHgyQBcgjBmgwQBlgwC3heICohWIAjAFQCjAYBoBCQAUAMAfAgQAiAhAUAlQAUAlAOA0QAMAwAEA0QAFA1ACCQQADCCACAxQADA0AHAsQADAYgBAxQgCAxgGAhQgMBEgdA4QgVApgkAfQglAegrAMQg6AQh6ANQh7ANicAHQhIADicAAQigAAhDgEg");
	this.shape_104.setTransform(420.0217,448.15);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AGSmPQi6BfhcAvQilBVh4AzQlTCNlUAZQgQFrgMBsQgdD7hKCFQhRhohAi6QhAi9gXjOQgZjfAhi2QAljMBoh3QDej7F2heQFBhQF8AtQFQAnENB2QEEBxArB1QBCCwgDHLQgDHahNEbQi3iJgujkQgShUgDh2QAAiGgBhAQgEjohLhqQhriWknggg");
	this.shape_105.setTransform(417.8096,420.9346);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#502D16").s().p("AxcJnQhAi9gXjOQgZjfAhi2QAljMBoh3QDej7F2heQFBhQF8AtQFQAnENB2QEEBxArB1QBCCwgDHLQgDHahNEbQi3iJgujkQgShUgDh2IgBjGQgEjohLhqQhriWknggIkWCOQilBVh4AzQlTCNlUAZQgQFrgMBsQgdD7hKCFQhRhohAi6g");
	this.shape_106.setTransform(417.8096,420.44);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AtIARQgZFrgPBrQgjD6hNCEQhPhrg7i7Qg8i/gRjPQgTjfAmi1QApjLBsh0QDkj2F4hTQFDhIF7A3QFPAvEKB9QEAB4ApB2QA9CxgPHLQgPHZhUEaQiziOgpjlQgPhVAAh1QADiHABhAQACjohJhsQhmiYkngo");
	this.shape_107.setTransform(420.1554,422.2362);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFE6D5").s().p("AgVKLQiggEhDgFQjggQiPgeQiOgeglgmQgagcgRhGQgRhHgFhnQgGiGAIhcQAEgpAIh9QAJhmABgBQABgCAygEQCNgMCAgcQCBgbCJgwQBdghBngsQBmguC6hZICqhSIAjAGQCiAcBmBEQAUAOAeAgQAhAjATAlQATAlANA1QALAwADA0QADA2gBCPQgBCCABAxQABA0AGAsQADAZgDAxQgDAwgGAiQgPBEgdA2QgXApglAeQglAdgrALQg7AOh7AKQh6ALidACIggABQhHAAh9gEg");
	this.shape_108.setTransform(421.2714,449.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_106,p:{rotation:0,x:417.8096,y:420.44}},{t:this.shape_105,p:{rotation:0,x:417.8096,y:420.9346}},{t:this.shape_104,p:{rotation:0,x:420.0217,y:448.15}},{t:this.shape_103,p:{scaleX:1,scaleY:1,rotation:0,x:419.3932,y:340.45}},{t:this.shape_102,p:{scaleX:1,scaleY:1,rotation:0,x:419.3932,y:340.45}},{t:this.shape_101,p:{scaleX:1,scaleY:1,rotation:0,x:409.875,y:369.4}},{t:this.shape_100,p:{scaleX:1,scaleY:1,rotation:0,x:408.8908,y:369.4223}},{t:this.shape_99,p:{scaleX:1,scaleY:1,rotation:0,x:419.45,y:363.5771}},{t:this.shape_98,p:{scaleX:1,scaleY:1,rotation:0,x:419.4098,y:363.5709}},{t:this.shape_97,p:{scaleX:1,scaleY:1,rotation:0,x:419.325,y:307.75}},{t:this.shape_96,p:{scaleX:1,scaleY:1,rotation:0,x:419.325,y:307.75}},{t:this.shape_95,p:{scaleX:1,scaleY:1,rotation:0,x:419.373,y:307.772}},{t:this.shape_94,p:{scaleX:1,scaleY:1,rotation:0,x:419.373,y:307.772}},{t:this.shape_93,p:{scaleX:1,scaleY:1,rotation:0,x:419.3488,y:340.0969}},{t:this.shape_92,p:{scaleX:1,scaleY:1,rotation:0,x:419.3488,y:340.0969}},{t:this.shape_91,p:{scaleX:1,scaleY:1,rotation:0,x:410.3435,y:366.1229}},{t:this.shape_90,p:{scaleX:1,scaleY:1,rotation:0,x:410.3435,y:366.1229}},{t:this.shape_89,p:{rotation:0,x:420.0188,y:470.5674}},{t:this.shape_88,p:{scaleX:1,scaleY:1,rotation:0,x:392.275,y:439.625}},{t:this.shape_87,p:{scaleX:1,scaleY:1,rotation:0,x:392.275,y:439.625}},{t:this.shape_86,p:{scaleX:1,scaleY:1,rotation:0,x:392.725,y:441.275}},{t:this.shape_85,p:{scaleX:1,scaleY:1,rotation:0,x:392.775,y:438.75}},{t:this.shape_84,p:{scaleX:1,scaleY:1,rotation:0,x:450.6,y:439.3}},{t:this.shape_83,p:{scaleX:1,scaleY:1,rotation:0,x:450.6,y:439.3}},{t:this.shape_82,p:{scaleX:1,scaleY:1,rotation:0,x:450.575,y:440.45}},{t:this.shape_81,p:{scaleX:1,scaleY:1,rotation:0,x:450.6,y:438.425}},{t:this.shape_80,p:{rotation:0,x:421.025,y:467.925}}]},782).to({state:[{t:this.shape_106,p:{rotation:0,x:417.8096,y:420.44}},{t:this.shape_105,p:{rotation:0,x:417.8096,y:420.9346}},{t:this.shape_104,p:{rotation:0,x:420.0217,y:448.15}},{t:this.shape_103,p:{scaleX:1,scaleY:1,rotation:0,x:419.3932,y:340.45}},{t:this.shape_102,p:{scaleX:1,scaleY:1,rotation:0,x:419.3932,y:340.45}},{t:this.shape_101,p:{scaleX:1,scaleY:1,rotation:0,x:409.875,y:369.4}},{t:this.shape_100,p:{scaleX:1,scaleY:1,rotation:0,x:408.8908,y:369.4223}},{t:this.shape_99,p:{scaleX:1,scaleY:1,rotation:0,x:419.45,y:363.5771}},{t:this.shape_98,p:{scaleX:1,scaleY:1,rotation:0,x:419.4098,y:363.5709}},{t:this.shape_97,p:{scaleX:1,scaleY:1,rotation:0,x:419.325,y:307.75}},{t:this.shape_96,p:{scaleX:1,scaleY:1,rotation:0,x:419.325,y:307.75}},{t:this.shape_95,p:{scaleX:1,scaleY:1,rotation:0,x:419.373,y:307.772}},{t:this.shape_94,p:{scaleX:1,scaleY:1,rotation:0,x:419.373,y:307.772}},{t:this.shape_93,p:{scaleX:1,scaleY:1,rotation:0,x:419.3488,y:340.0969}},{t:this.shape_92,p:{scaleX:1,scaleY:1,rotation:0,x:419.3488,y:340.0969}},{t:this.shape_91,p:{scaleX:1,scaleY:1,rotation:0,x:410.3435,y:366.1229}},{t:this.shape_90,p:{scaleX:1,scaleY:1,rotation:0,x:410.3435,y:366.1229}},{t:this.shape_89,p:{rotation:0,x:420.0188,y:470.5674}},{t:this.shape_88,p:{scaleX:1,scaleY:1,rotation:0,x:392.275,y:439.625}},{t:this.shape_87,p:{scaleX:1,scaleY:1,rotation:0,x:392.275,y:439.625}},{t:this.shape_86,p:{scaleX:1,scaleY:1,rotation:0,x:392.725,y:441.275}},{t:this.shape_85,p:{scaleX:1,scaleY:1,rotation:0,x:392.775,y:438.75}},{t:this.shape_84,p:{scaleX:1,scaleY:1,rotation:0,x:450.6,y:439.3}},{t:this.shape_83,p:{scaleX:1,scaleY:1,rotation:0,x:450.6,y:439.3}},{t:this.shape_82,p:{scaleX:1,scaleY:1,rotation:0,x:450.575,y:440.45}},{t:this.shape_81,p:{scaleX:1,scaleY:1,rotation:0,x:450.6,y:438.425}},{t:this.shape_80,p:{rotation:0,x:421.025,y:467.925}}]},63).to({state:[{t:this.shape_106,p:{rotation:1.4838,x:420.2375,y:420.3421}},{t:this.shape_105,p:{rotation:1.4838,x:420.2247,y:420.8365}},{t:this.shape_104,p:{rotation:1.4838,x:421.7314,y:448.1001}},{t:this.shape_103,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4824,x:423.8597,y:340.4065}},{t:this.shape_102,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4824,x:423.8597,y:340.4065}},{t:this.shape_101,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4824,x:413.5984,y:369.0931}},{t:this.shape_100,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4824,x:412.6142,y:369.0899}},{t:this.shape_99,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4824,x:423.3183,y:363.5213}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4824,x:423.2783,y:363.514}},{t:this.shape_97,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:424.647,y:307.7264}},{t:this.shape_96,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:424.647,y:307.7264}},{t:this.shape_95,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:424.6944,y:307.7497}},{t:this.shape_94,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:424.6944,y:307.7497}},{t:this.shape_93,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:423.8337,y:340.0572}},{t:this.shape_92,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:423.8337,y:340.0572}},{t:this.shape_91,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:414.1595,y:365.8366}},{t:this.shape_90,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:414.1595,y:365.8366}},{t:this.shape_89,p:{rotation:1.4838,x:421.148,y:470.5099}},{t:this.shape_88,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:394.1982,y:438.833}},{t:this.shape_87,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:394.1982,y:438.833}},{t:this.shape_86,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:394.6053,y:440.4938}},{t:this.shape_85,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:394.7206,y:437.9714}},{t:this.shape_84,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:452.5014,y:440.0176}},{t:this.shape_83,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:452.5014,y:440.0176}},{t:this.shape_82,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:452.4466,y:441.1663}},{t:this.shape_81,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4832,x:452.524,y:439.143}},{t:this.shape_80,p:{rotation:1.4838,x:422.2223,y:467.8944}}]},16).to({state:[{t:this.shape_106,p:{rotation:2.952,x:422.6641,y:420.3788}},{t:this.shape_105,p:{rotation:2.952,x:422.6386,y:420.8727}},{t:this.shape_104,p:{rotation:2.952,x:423.4462,y:448.1656}},{t:this.shape_103,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.9511,x:428.3268,y:340.5626}},{t:this.shape_102,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.9511,x:428.3268,y:340.5626}},{t:this.shape_101,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.9511,x:417.3343,y:368.975}},{t:this.shape_100,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.9511,x:416.3506,y:368.9466}},{t:this.shape_99,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.9511,x:427.1932,y:363.6545}},{t:this.shape_98,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.9511,x:427.1534,y:363.6462}},{t:this.shape_97,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:429.9593,y:307.9155}},{t:this.shape_96,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:429.9593,y:307.9155}},{t:this.shape_95,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:430.0061,y:307.94}},{t:this.shape_94,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:430.0061,y:307.94}},{t:this.shape_93,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:428.3178,y:340.2148}},{t:this.shape_92,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:428.3178,y:340.2148}},{t:this.shape_91,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:417.9862,y:365.7379}},{t:this.shape_90,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:417.9862,y:365.7379}},{t:this.shape_89,p:{rotation:2.952,x:422.2889,y:470.5527}},{t:this.shape_88,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:396.1608,y:438.1987}},{t:this.shape_87,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:396.1608,y:438.1987}},{t:this.shape_86,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:396.5252,y:439.8694}},{t:this.shape_85,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:396.7051,y:437.3508}},{t:this.shape_84,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:454.4145,y:440.8769}},{t:this.shape_83,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:454.4145,y:440.8769}},{t:this.shape_82,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:454.3303,y:442.0239}},{t:this.shape_81,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9516,x:454.4595,y:440.0033}},{t:this.shape_80,p:{rotation:2.952,x:423.4298,y:467.9657}}]},1).to({state:[{t:this.shape_106,p:{rotation:5.202,x:426.3787,y:420.8328}},{t:this.shape_105,p:{rotation:5.202,x:426.3338,y:421.3253}},{t:this.shape_104,p:{rotation:5.202,x:426.0693,y:448.6292}},{t:this.shape_103,p:{scaleX:0.9997,scaleY:0.9997,rotation:5.2011,x:435.1688,y:341.2981}},{t:this.shape_102,p:{scaleX:0.9997,scaleY:0.9997,rotation:5.2011,x:435.1688,y:341.2981}},{t:this.shape_101,p:{scaleX:0.9997,scaleY:0.9997,rotation:5.2011,x:423.0693,y:369.257}},{t:this.shape_100,p:{scaleX:0.9997,scaleY:0.9997,rotation:5.2011,x:422.0875,y:369.19}},{t:this.shape_99,p:{scaleX:0.9997,scaleY:0.9997,rotation:5.2011,x:433.1295,y:364.3277}},{t:this.shape_98,p:{scaleX:0.9997,scaleY:0.9997,rotation:5.2011,x:433.09,y:364.3179}},{t:this.shape_97,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:438.0798,y:308.7396}},{t:this.shape_96,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:438.0798,y:308.7396}},{t:this.shape_95,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:438.1256,y:308.7659}},{t:this.shape_94,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:438.1256,y:308.7659}},{t:this.shape_93,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:435.1717,y:340.949}},{t:this.shape_92,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:435.1717,y:340.949}},{t:this.shape_91,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:423.8463,y:366.0464}},{t:this.shape_90,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:423.8463,y:366.0464}},{t:this.shape_89,p:{rotation:5.202,x:424.0339,y:470.954}},{t:this.shape_88,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:399.1939,y:437.5934}},{t:this.shape_87,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:399.1939,y:437.5934}},{t:this.shape_86,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:399.4924,y:439.2771}},{t:this.shape_85,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:399.771,y:436.7675}},{t:this.shape_84,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:457.2964,y:442.5563}},{t:this.shape_83,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:457.2964,y:442.5563}},{t:this.shape_82,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:457.1673,y:443.699}},{t:this.shape_81,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2013,x:457.3758,y:441.685}},{t:this.shape_80,p:{rotation:5.202,x:425.2755,y:468.4137}}]},1).to({state:[{t:this.shape_106,p:{rotation:5.202,x:426.3787,y:420.8328}},{t:this.shape_105,p:{rotation:5.202,x:426.3338,y:421.3253}},{t:this.shape_104,p:{rotation:5.202,x:426.0693,y:448.6292}},{t:this.shape_103,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.2015,x:435.1589,y:341.2953}},{t:this.shape_102,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.2015,x:435.1589,y:341.2953}},{t:this.shape_101,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.2015,x:423.0602,y:369.252}},{t:this.shape_100,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.2015,x:422.0785,y:369.185}},{t:this.shape_99,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.2015,x:433.1196,y:364.3231}},{t:this.shape_98,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.2015,x:433.0802,y:364.3133}},{t:this.shape_97,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:438.0739,y:308.7394}},{t:this.shape_96,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:438.0739,y:308.7394}},{t:this.shape_95,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:438.1197,y:308.7657}},{t:this.shape_94,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:438.1197,y:308.7657}},{t:this.shape_93,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:435.1658,y:340.9473}},{t:this.shape_92,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:435.1658,y:340.9473}},{t:this.shape_91,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:423.8409,y:366.0436}},{t:this.shape_90,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:423.8409,y:366.0436}},{t:this.shape_89,p:{rotation:5.202,x:424.0339,y:470.954}},{t:this.shape_88,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:399.1892,y:437.5872}},{t:this.shape_87,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:399.1892,y:437.5872}},{t:this.shape_86,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:399.4877,y:439.2708}},{t:this.shape_85,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:399.7663,y:436.7613}},{t:this.shape_84,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:457.2891,y:442.55}},{t:this.shape_83,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:457.2891,y:442.55}},{t:this.shape_82,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:457.16,y:443.6928}},{t:this.shape_81,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.2016,x:457.3684,y:441.6789}},{t:this.shape_80,p:{rotation:5.202,x:425.2755,y:468.4137}}]},30).to({state:[{t:this.shape_106,p:{rotation:3.2505,x:423.1204,y:420.8081}},{t:this.shape_105,p:{rotation:3.2505,x:423.0924,y:421.3019}},{t:this.shape_104,p:{rotation:3.2505,x:423.7578,y:448.5987}},{t:this.shape_103,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.2502,x:429.1832,y:341.0175}},{t:this.shape_102,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.2502,x:429.1832,y:341.0175}},{t:this.shape_101,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.2502,x:418.0439,y:369.3689}},{t:this.shape_100,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.2502,x:417.0604,y:369.3354}},{t:this.shape_99,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.2502,x:427.9293,y:364.1006}},{t:this.shape_98,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.2502,x:427.8895,y:364.0921}},{t:this.shape_97,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:430.9918,y:308.3833}},{t:this.shape_96,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:430.9918,y:308.3833}},{t:this.shape_95,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:431.0384,y:308.408}},{t:this.shape_94,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:431.0384,y:308.408}},{t:this.shape_93,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:429.182,y:340.6713}},{t:this.shape_92,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:429.182,y:340.6713}},{t:this.shape_91,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:418.7181,y:366.1384}},{t:this.shape_90,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:418.7181,y:366.1384}},{t:this.shape_89,p:{rotation:3.2505,x:422.4838,y:470.9797}},{t:this.shape_88,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:396.5166,y:438.4794}},{t:this.shape_87,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:396.5166,y:438.4794}},{t:this.shape_86,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:396.8723,y:440.1519}},{t:this.shape_85,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:397.0653,y:437.6344}},{t:this.shape_84,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:454.7515,y:441.4613}},{t:this.shape_83,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:454.7515,y:441.4613}},{t:this.shape_82,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:454.6613,y:442.6077}},{t:this.shape_81,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.2505,x:454.8011,y:440.5879}},{t:this.shape_80,p:{rotation:3.2505,x:423.6382,y:468.3986}}]},1).to({state:[{t:this.shape_106,p:{rotation:1.7348,x:420.6578,y:420.7327}},{t:this.shape_105,p:{rotation:1.7348,x:420.6428,y:421.227}},{t:this.shape_104,p:{rotation:1.7348,x:422.0299,y:448.4966}},{t:this.shape_103,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.7339,x:424.6025,y:340.8071}},{t:this.shape_102,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.7339,x:424.6025,y:340.8071}},{t:this.shape_101,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.7339,x:414.2177,y:369.4418}},{t:this.shape_100,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.7339,x:413.2338,y:369.4343}},{t:this.shape_99,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.7339,x:423.9598,y:363.914}},{t:this.shape_98,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.7339,x:423.9198,y:363.9066}},{t:this.shape_97,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:425.5487,y:308.1387}},{t:this.shape_96,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:425.5487,y:308.1387}},{t:this.shape_95,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:425.596,y:308.1622}},{t:this.shape_94,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:425.596,y:308.1622}},{t:this.shape_93,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:424.5938,y:340.4622}},{t:this.shape_92,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:424.5938,y:340.4622}},{t:this.shape_91,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:414.8077,y:366.1963}},{t:this.shape_90,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:414.8077,y:366.1963}},{t:this.shape_89,p:{rotation:1.7348,x:421.3484,y:470.9033}},{t:this.shape_88,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:394.5286,y:439.0967}},{t:this.shape_87,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:394.5286,y:439.0967}},{t:this.shape_86,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:394.9284,y:440.759}},{t:this.shape_85,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:395.0547,y:438.2374}},{t:this.shape_84,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:452.8199,y:440.5367}},{t:this.shape_83,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:452.8199,y:440.5367}},{t:this.shape_82,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:452.7601,y:441.6851}},{t:this.shape_81,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7344,x:452.8463,y:439.6624}},{t:this.shape_80,p:{rotation:1.7348,x:422.4341,y:468.2926}}]},1).to({state:[{t:this.shape_106,p:{rotation:1.4689,x:420.2679,y:421.1092}},{t:this.shape_105,p:{rotation:1.4689,x:420.2552,y:421.6035}},{t:this.shape_104,p:{rotation:1.4689,x:421.7689,y:448.8666}},{t:this.shape_103,p:{scaleX:0.9994,scaleY:0.9994,rotation:1.4681,x:423.8221,y:341.1595}},{t:this.shape_102,p:{scaleX:0.9994,scaleY:0.9994,rotation:1.4681,x:423.8221,y:341.1595}},{t:this.shape_101,p:{scaleX:0.9994,scaleY:0.9994,rotation:1.4681,x:413.5718,y:369.838}},{t:this.shape_100,p:{scaleX:0.9994,scaleY:0.9994,rotation:1.4681,x:412.588,y:369.8351}},{t:this.shape_99,p:{scaleX:0.9994,scaleY:0.9994,rotation:1.4681,x:423.2867,y:364.2659}},{t:this.shape_98,p:{scaleX:0.9994,scaleY:0.9994,rotation:1.4681,x:423.2467,y:364.2586}},{t:this.shape_97,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:424.6344,y:308.4926}},{t:this.shape_96,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:424.6344,y:308.4926}},{t:this.shape_95,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:424.6817,y:308.5159}},{t:this.shape_94,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:424.6817,y:308.5159}},{t:this.shape_93,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:423.8295,y:340.8199}},{t:this.shape_92,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:423.8295,y:340.8199}},{t:this.shape_91,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:414.163,y:366.5989}},{t:this.shape_90,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:414.163,y:366.5989}},{t:this.shape_89,p:{rotation:1.4689,x:421.1914,y:471.2764}},{t:this.shape_88,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:394.2227,y:439.5921}},{t:this.shape_87,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:394.2227,y:439.5921}},{t:this.shape_86,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:394.6302,y:441.2526}},{t:this.shape_85,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:394.7448,y:438.7305}},{t:this.shape_84,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:452.5196,y:440.7616}},{t:this.shape_83,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:452.5196,y:440.7616}},{t:this.shape_82,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:452.4651,y:441.9102}},{t:this.shape_81,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:452.542,y:439.8871}},{t:this.shape_80,p:{rotation:1.4689,x:422.265,y:468.6606}}]},1).to({state:[{t:this.shape_106,p:{rotation:1.4689,x:420.2679,y:421.1092}},{t:this.shape_105,p:{rotation:1.4689,x:420.2552,y:421.6035}},{t:this.shape_104,p:{rotation:1.4689,x:421.7689,y:448.8666}},{t:this.shape_103,p:{scaleX:0.9993,scaleY:0.9993,rotation:1.4683,x:423.8084,y:341.1556}},{t:this.shape_102,p:{scaleX:0.9993,scaleY:0.9993,rotation:1.4683,x:423.8084,y:341.1556}},{t:this.shape_101,p:{scaleX:0.9993,scaleY:0.9993,rotation:1.4683,x:413.5591,y:369.8309}},{t:this.shape_100,p:{scaleX:0.9993,scaleY:0.9993,rotation:1.4683,x:412.5754,y:369.828}},{t:this.shape_99,p:{scaleX:0.9993,scaleY:0.9993,rotation:1.4683,x:423.273,y:364.2595}},{t:this.shape_98,p:{scaleX:0.9993,scaleY:0.9993,rotation:1.4683,x:423.233,y:364.2522}},{t:this.shape_97,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:424.6304,y:308.4925}},{t:this.shape_96,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:424.6304,y:308.4925}},{t:this.shape_95,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:424.6778,y:308.5157}},{t:this.shape_94,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:424.6778,y:308.5157}},{t:this.shape_93,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:423.8256,y:340.8187}},{t:this.shape_92,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:423.8256,y:340.8187}},{t:this.shape_91,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:414.1593,y:366.597}},{t:this.shape_90,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:414.1593,y:366.597}},{t:this.shape_89,p:{rotation:1.4689,x:421.1914,y:471.2764}},{t:this.shape_88,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:394.2196,y:439.588}},{t:this.shape_87,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:394.2196,y:439.588}},{t:this.shape_86,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:394.6271,y:441.2484}},{t:this.shape_85,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:394.7417,y:438.7263}},{t:this.shape_84,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:452.5147,y:440.7574}},{t:this.shape_83,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:452.5147,y:440.7574}},{t:this.shape_82,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:452.4602,y:441.906}},{t:this.shape_81,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.4685,x:452.5371,y:439.883}},{t:this.shape_80,p:{rotation:1.4689,x:422.265,y:468.6606}}]},59).to({state:[{t:this.shape_106,p:{rotation:1.4689,x:420.2679,y:421.1092}},{t:this.shape_105,p:{rotation:1.4689,x:420.2552,y:421.6035}},{t:this.shape_104,p:{rotation:1.4689,x:421.7689,y:448.8666}},{t:this.shape_103,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.8005,y:341.1533}},{t:this.shape_102,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.8005,y:341.1533}},{t:this.shape_101,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:413.5518,y:369.8269}},{t:this.shape_100,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:412.5682,y:369.824}},{t:this.shape_99,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.2651,y:364.2558}},{t:this.shape_98,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.2251,y:364.2485}},{t:this.shape_97,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:424.6246,y:308.4923}},{t:this.shape_96,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:424.6246,y:308.4923}},{t:this.shape_95,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:424.6719,y:308.5155}},{t:this.shape_94,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:424.6719,y:308.5155}},{t:this.shape_93,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:423.8197,y:340.8171}},{t:this.shape_92,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:423.8197,y:340.8171}},{t:this.shape_91,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:414.1539,y:366.5941}},{t:this.shape_90,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:414.1539,y:366.5941}},{t:this.shape_89,p:{rotation:1.4689,x:421.1914,y:471.2764}},{t:this.shape_88,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:394.215,y:439.5817}},{t:this.shape_87,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:394.215,y:439.5817}},{t:this.shape_86,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:394.6224,y:441.2421}},{t:this.shape_85,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:394.737,y:438.7201}},{t:this.shape_84,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:452.5074,y:440.7512}},{t:this.shape_83,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:452.5074,y:440.7512}},{t:this.shape_82,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:452.4529,y:441.8998}},{t:this.shape_81,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:452.5298,y:439.8768}},{t:this.shape_80,p:{rotation:1.4689,x:422.265,y:468.6606}}]},52).to({state:[{t:this.shape_106,p:{rotation:1.4689,x:420.2679,y:421.1092}},{t:this.shape_105,p:{rotation:1.4689,x:420.2552,y:421.6035}},{t:this.shape_104,p:{rotation:1.4689,x:421.7689,y:448.8666}},{t:this.shape_103,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.8005,y:341.1533}},{t:this.shape_102,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.8005,y:341.1533}},{t:this.shape_101,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:413.5518,y:369.8269}},{t:this.shape_100,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:412.5682,y:369.824}},{t:this.shape_99,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.2651,y:364.2558}},{t:this.shape_98,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.2251,y:364.2485}},{t:this.shape_97,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:424.6246,y:308.4923}},{t:this.shape_96,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:424.6246,y:308.4923}},{t:this.shape_95,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:424.6719,y:308.5155}},{t:this.shape_94,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:424.6719,y:308.5155}},{t:this.shape_93,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:423.8197,y:340.8171}},{t:this.shape_92,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:423.8197,y:340.8171}},{t:this.shape_91,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:414.1539,y:366.5941}},{t:this.shape_90,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:414.1539,y:366.5941}},{t:this.shape_89,p:{rotation:1.4689,x:421.1914,y:471.2764}},{t:this.shape_88,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:394.215,y:439.5817}},{t:this.shape_87,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:394.215,y:439.5817}},{t:this.shape_86,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:394.6224,y:441.2421}},{t:this.shape_85,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:394.737,y:438.7201}},{t:this.shape_84,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:452.5074,y:440.7512}},{t:this.shape_83,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:452.5074,y:440.7512}},{t:this.shape_82,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:452.4529,y:441.8998}},{t:this.shape_81,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4686,x:452.5298,y:439.8768}},{t:this.shape_80,p:{rotation:1.4689,x:422.265,y:468.6606}}]},12).to({state:[{t:this.shape_106,p:{rotation:1.4689,x:420.2679,y:421.1092}},{t:this.shape_105,p:{rotation:1.4689,x:420.2552,y:421.6035}},{t:this.shape_104,p:{rotation:1.4689,x:421.7689,y:448.8666}},{t:this.shape_103,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.7927,y:341.1511}},{t:this.shape_102,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.7927,y:341.1511}},{t:this.shape_101,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:413.5446,y:369.8229}},{t:this.shape_100,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:412.561,y:369.82}},{t:this.shape_99,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.2573,y:364.2521}},{t:this.shape_98,p:{scaleX:0.9992,scaleY:0.9992,rotation:1.4684,x:423.2173,y:364.2448}},{t:this.shape_97,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:424.6187,y:308.4921}},{t:this.shape_96,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:424.6187,y:308.4921}},{t:this.shape_95,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:424.666,y:308.5153}},{t:this.shape_94,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:424.666,y:308.5153}},{t:this.shape_93,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:423.8138,y:340.8154}},{t:this.shape_92,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:423.8138,y:340.8154}},{t:this.shape_91,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:414.1484,y:366.5913}},{t:this.shape_90,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:414.1484,y:366.5913}},{t:this.shape_89,p:{rotation:1.4689,x:421.1914,y:471.2764}},{t:this.shape_88,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.2103,y:439.5755}},{t:this.shape_87,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.2103,y:439.5755}},{t:this.shape_86,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.6177,y:441.2358}},{t:this.shape_85,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.7324,y:438.7139}},{t:this.shape_84,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.5,y:440.745}},{t:this.shape_83,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.5,y:440.745}},{t:this.shape_82,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.4456,y:441.8935}},{t:this.shape_81,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.5225,y:439.8706}},{t:this.shape_80,p:{rotation:1.4689,x:422.265,y:468.6606}}]},71).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_89,p:{rotation:1.4689,x:421.1914,y:471.2764}},{t:this.shape_88,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.2103,y:439.5755}},{t:this.shape_87,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.2103,y:439.5755}},{t:this.shape_86,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.6177,y:441.2358}},{t:this.shape_85,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.7324,y:438.7139}},{t:this.shape_84,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.5,y:440.745}},{t:this.shape_83,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.5,y:440.745}},{t:this.shape_82,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.4456,y:441.8935}},{t:this.shape_81,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.5225,y:439.8706}},{t:this.shape_80,p:{rotation:1.4689,x:422.265,y:468.6606}}]},37).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_89,p:{rotation:1.4689,x:421.1914,y:471.2764}},{t:this.shape_88,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.2088,y:439.5734}},{t:this.shape_87,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.2088,y:439.5734}},{t:this.shape_86,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.6162,y:441.2337}},{t:this.shape_85,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.7308,y:438.7119}},{t:this.shape_84,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.4976,y:440.7429}},{t:this.shape_83,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.4976,y:440.7429}},{t:this.shape_82,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.4432,y:441.8914}},{t:this.shape_81,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.52,y:439.8686}},{t:this.shape_80,p:{rotation:1.4689,x:422.265,y:468.6606}}]},24).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_89,p:{rotation:1.4689,x:421.1914,y:471.2764}},{t:this.shape_88,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.2072,y:439.5713}},{t:this.shape_87,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.2072,y:439.5713}},{t:this.shape_86,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.6146,y:441.2316}},{t:this.shape_85,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:394.7292,y:438.7098}},{t:this.shape_84,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.4952,y:440.7408}},{t:this.shape_83,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.4952,y:440.7408}},{t:this.shape_82,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.4407,y:441.8893}},{t:this.shape_81,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4687,x:452.5176,y:439.8665}},{t:this.shape_80,p:{rotation:1.4689,x:422.265,y:468.6606}}]},12).wait(1));

	// Larm
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AAijYIjwFtIChBDID7mig");
	this.shape_109.setTransform(368.6509,534.682);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("Ah7C0QhIgcgBgCQgBAAB4iyQBOh3AWggQAUgcADAAICNAMIAIACIj1GQQgBABhIgcg");
	this.shape_110.setTransform(367.6496,534.6017);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#5599FF").s().p("Ah5C0QhIgcgCgCQgBAAB4iyIBliXQATgcAEAAICNAMIAHACIj0GQIgBABQgDAAhFgcg");
	this.shape_111.setTransform(367.4996,534.6017);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQggAQghgMg");
	this.shape_112.setTransform(351.5303,559.5786);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFE6D5").s().p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQgSAJgTAAQgOAAgOgFg");
	this.shape_113.setTransform(351.5303,559.5786);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AAShCQAiAIATAaQATAagHAbQgHAbgeAOQgdAOgigJQgigIgTgaQgTgaAHgbQAIgcAdgNQAdgOAiAJg");
	this.shape_114.setTransform(351.5369,559.575);

	this.instance_20 = new lib.Tween264("synched",0);
	this.instance_20.setTransform(386.75,514.2,1,1,0,0,0,20.6,-25.6);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween265("synched",0);
	this.instance_21.setTransform(389.1,516.9,1,1,-107.2925,0,0,22.9,-22.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},622).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},67).to({state:[{t:this.instance_20}]},11).to({state:[{t:this.instance_21}]},5).to({state:[{t:this.instance_21}]},48).to({state:[{t:this.instance_21}]},29).to({state:[{t:this.instance_21}]},63).to({state:[{t:this.instance_21}]},7).to({state:[{t:this.instance_21}]},41).to({state:[{t:this.instance_21}]},62).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_21}]},48).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_21}]},6).to({state:[{t:this.instance_21}]},71).to({state:[{t:this.instance_21}]},37).to({state:[{t:this.instance_21}]},24).to({state:[{t:this.instance_21}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(700).to({_off:false},0).to({_off:true,regX:22.9,regY:-22.9,rotation:-107.2925,x:389.1,y:516.9},5).wait(459));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(700).to({_off:false},5).wait(48).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(63).to({startPosition:0},0).to({rotation:0.5237,y:516.95},7).wait(41).to({rotation:0.5237},0).wait(62).to({startPosition:0},0).to({regX:23,rotation:15.5229,x:389.25},4).wait(48).to({regX:22.9,rotation:0.5237,x:389.1},0).wait(2).to({regX:23,rotation:15.5229,x:389.25},0).to({regY:-22.8,scaleX:0.9999,scaleY:0.9999,rotation:0.5237,x:389.2,y:517},4).wait(6).to({regX:22.9,regY:-22.9,scaleX:1,scaleY:1,rotation:0.5237,x:389.1,y:516.95},0).wait(71).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,rotation:45.5237,x:389.15,y:516.9},37).wait(24).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(1));

	// move5
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AAijYIjwFtIChBDID7mig");
	this.shape_115.setTransform(368.6509,534.682);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("AxYBFQAIgDBCgSQBBgRAbgGQBjgWB7gSQB7gTBugLQCOgOBygFQBzgFCiAAQC3AACMAGQCPAGFyAXQDjAOAIAAQAMABkMAZQjkAWg9AEQg9ADkyAGItvATQloAIgkABQgoABACgBg");
	this.shape_116.setTransform(410.3435,366.1229);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D35F5F").s().p("AxYBFQAIgDBCgSQBBgRAbgGQBjgWB7gSQB7gTBugLQCOgOBygFQBzgFCiAAQC3AACMAGQCPAGFyAXIDrAOQAMABkMAZQjkAWg9AEQg9ADkyAGItvATImMAJIgeABIgIgBg");
	this.shape_117.setTransform(410.3435,366.1229);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("Aw9EJQgDgRgRgZQgRgZgqgwQgsgygRgaQgSgZgDgSQgCgRAZgUQBXhKEGhFQEHhFE/giQBtgLB1gHQA3gDChAAQCkgBAuAEQEWATDFA1QDrA/CTBrQAXARAEAIQAFAHgDAPQgFAdgjA1QgkA2gzA4IgPAQIhWgFQgrgDjJgMQkpgTiTgHQiXgHiegCQpDgHnTBjQgxAKgEABQgFAAgCgKg");
	this.shape_118.setTransform(419.3488,340.0969);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D35F5F").s().p("Aw9EJQgDgRgRgZQgRgZgqgwQgsgygRgaQgSgZgDgSQgCgRAZgUQBXhKEGhFQEHhFE/giQBtgLB1gHQA3gDChAAQCkgBAuAEQEWATDFA1QDrA/CTBrQAXARAEAIQAFAHgDAPQgFAdgjA1QgkA2gzA4IgPAQIhWgFIj0gPQkpgTiTgHQiXgHiegCQpDgHnTBjIg1ALQgFAAgCgKg");
	this.shape_119.setTransform(419.3488,340.0969);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#D35F5F").ss(0.3,0,0,4).p("AglAVQgdgPAOgQQAOgRAnAAQAVAAAQAIQARAIACALQAEARgmAIQglAIgXgMg");
	this.shape_120.setTransform(419.373,307.772);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D35F5F").s().p("AglAVQgdgPAOgQQAOgRAnAAQAVAAAQAIQARAIACALQAEARgmAIQgPADgMAAQgTAAgOgHg");
	this.shape_121.setTransform(419.373,307.772);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(0.4,0,0,4).p("AAAgoQAdAAAVAMQAVAMAAAQQAAARgVAMQgVAMgdAAQgcAAgVgMQgVgMAAgRQAAgQAVgMQAVgMAcAAg");
	this.shape_122.setTransform(419.325,307.75);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgxAdQgVgMAAgRQAAgQAVgMQAVgMAcAAQAdAAAVAMQAVAMAAAQQAAARgVAMQgVAMgdAAQgcAAgVgMg");
	this.shape_123.setTransform(419.325,307.75);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(0.4,0,0,4).p("AxLA2QH6hyJsAHQDcADE/ATQCyALFlAV");
	this.shape_124.setTransform(419.4098,363.5709);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAag1QDcADFAATIIWAgMgiXAA1QH6hyJrAHg");
	this.shape_125.setTransform(419.45,363.5771);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(0.4,0,0,4).p("AvWgFIjGA1IbrgmIJig6");
	this.shape_126.setTransform(408.8908,369.4223);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AvggFMAiHgAqIpiA5I7rAng");
	this.shape_127.setTransform(409.875,369.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(0.4,0,0,4).p("ARMDyIBghyQBZh4gogfQjbiumfg9Qljg1m4AjQmEAfk8BVQkzBSg3BSQgQAWAcAsQAQAaAzA6QAyA4AOAYQAYAngUAS");
	this.shape_128.setTransform(419.3932,340.45);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AxTDqQgOgYgyg4Qgzg6gQgaQgcgrAQgYQA3hQEzhSQE8hWGEgeQG4gkFjA1QGfA+DbCtQAoAfhZB4IhgByMgibAAxQAUgRgYgog");
	this.shape_129.setTransform(419.3932,340.45);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF8080").s().p("AgyAkQgVgPAAgVQAAgUAVgPQAVgPAdAAQAeAAAVAPQAVAPAAAUQAAAVgVAPQgVAPgeAAQgdAAgVgPg");
	this.shape_130.setTransform(421.025,467.925);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgnAuQgQgTAAgbQAAgaAQgTQAQgTAXAAQAXAAARATQAQATAAAaQAAAbgQATQgRATgXAAQgXAAgQgTg");
	this.shape_131.setTransform(450.6,438.425);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#004455").s().p("AhSBbQgiglAAg2QAAg1AiglQAigmAwAAQAwAAAjAmQAiAlAAA1QAAA2giAlQgjAmgwAAQgwAAgigmg");
	this.shape_132.setTransform(450.575,440.45);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjcQBLAAA0BBQA1BAAABbQAABcg1BBQg1BBhKAAQhJAAg1hBQg0hBAAhcQAAhbA0hAQA1hBBJAAg");
	this.shape_133.setTransform(450.6,439.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("Ah+CcQg0hAgBhcQABhbA0hAQA0hCBKAAQBKAAA1BCQA1BAgBBbQABBcg1BAQg1BChKAAQhJAAg1hCg");
	this.shape_134.setTransform(450.6,439.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgnAuQgRgSAAgcQAAgaARgTQARgTAWAAQAXAAARATQARATAAAaQAAAcgRASQgRATgXAAQgXAAgQgTg");
	this.shape_135.setTransform(392.775,438.75);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#004455").s().p("AhSBbQgiglAAg2QAAg0AigmQAjgmAvAAQAxAAAiAmQAiAmAAA0QAAA1giAmQgiAmgxAAQgvAAgjgmg");
	this.shape_136.setTransform(392.725,441.275);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjcQBKAAA1BBQA0BAAABbQAABcg0BBQg1BAhKAAQhJAAg1hAQg0hBAAhcQAAhbA0hAQA1hBBJAAg");
	this.shape_137.setTransform(392.275,439.625);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("Ah+CdQg0hBAAhcQAAhbA0hAQA1hBBJAAQBKAAA1BBQA0BAAABbQAABcg0BBQg1BAhKAAQhJAAg1hAg");
	this.shape_138.setTransform(392.275,439.625);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFE6D5").s().p("AjsKOQjhgKiPgaQiPgagmglQgbgcgThGQgShFgIhnQgKiGAGhcQADgqAFh9QAGhmABgBQABgBAygGQCNgQB/geQCBggCHgyQBcgjBmgwQBlgwC3heICohWIAjAFQCjAYBoBCQAUAMAfAgQAiAhAUAlQAUAlAOA0QAMAwAEA0QAFA1ACCQQADCCACAxQADA0AHAsQADAYgBAxQgCAxgGAhQgMBEgdA4QgVApgkAfQglAegrAMQg6AQh6ANQh7ANicAHQhIADicAAQigAAhDgEg");
	this.shape_139.setTransform(420.0217,448.15);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E3DBDB").s().p("AFJCHIhMh0IhtgDQhpgEiSAAIiPAAIhJB1QhIB1gCgCQgCgDg1jwQg0jwACgBQPogKAFACQABABgwD3QgwD3gCACIAAAAQgDAAhKhyg");
	this.shape_140.setTransform(421.6224,603.5593);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("Ah7C0QhIgcgBgCQgBAAB4iyQBOh3AWggQAUgcADAAICNAMIAIACIj1GQQgBABhIgcg");
	this.shape_141.setTransform(367.6496,534.6017);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#5599FF").s().p("Ah5C0QhIgcgCgCQgBAAB4iyIBliXQATgcAEAAICNAMIAHACIj0GQIgBABQgDAAhFgcg");
	this.shape_142.setTransform(367.4996,534.6017);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQggAQghgMg");
	this.shape_143.setTransform(351.5303,559.5786);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFE6D5").s().p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQgSAJgTAAQgOAAgOgFg");
	this.shape_144.setTransform(351.5303,559.5786);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("AtdnEIgHBuQgHCHABB1QAEF2BYBAQB0BVIkALQDlAFDYgNQDdgOB6gbQCXgiApjBQANg8AAhFIgCg4");
	this.shape_145.setTransform(420.0188,470.5674);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AGSmPQi6BfhcAvQilBVh4AzQlTCNlUAZQgQFrgMBsQgdD7hKCFQhRhohAi6QhAi9gXjOQgZjfAhi2QAljMBoh3QDej7F2heQFBhQF8AtQFQAnENB2QEEBxArB1QBCCwgDHLQgDHahNEbQi3iJgujkQgShUgDh2QAAiGgBhAQgEjohLhqQhriWknggg");
	this.shape_146.setTransform(417.8096,420.9346);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#502D16").s().p("AxcJnQhAi9gXjOQgZjfAhi2QAljMBoh3QDej7F2heQFBhQF8AtQFQAnENB2QEEBxArB1QBCCwgDHLQgDHahNEbQi3iJgujkQgShUgDh2IgBjGQgEjohLhqQhriWknggIkWCOQilBVh4AzQlTCNlUAZQgQFrgMBsQgdD7hKCFQhRhohAi6g");
	this.shape_147.setTransform(417.8096,420.44);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AAShCQAiAIATAaQATAagHAbQgHAbgeAOQgdAOgigJQgigIgTgaQgTgaAHgbQAIgcAdgNQAdgOAiAJg");
	this.shape_148.setTransform(351.5369,559.575);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJkcIB2IaICjkGIHiAEICuEHIBqoi");
	this.shape_149.setTransform(421.503,607.1279);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("AlOlDImJKDIWvgKImPp3");
	this.shape_150.setTransform(422.4828,546.3526);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#5599FF").s().p("AlOlBIKXADIGPJ3I2vAJg");
	this.shape_151.setTransform(422.475,546.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},120).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},95).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},49).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},80).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},159).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},5).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},11).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},32).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},71).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},67).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},64).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_140}]},29).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_140}]},63).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_140}]},48).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_140}]},62).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_140}]},52).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_140}]},12).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_140}]},71).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_140}]},37).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_140}]},24).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_140}]},12).wait(1));

	// Rarm
	this.instance_22 = new lib.Tween233("synched",0);
	this.instance_22.setTransform(463.1,526.9,1,1,0,0,0,-15.4,-12.2);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(120).to({_off:false},0).wait(95).to({startPosition:0},0).to({rotation:-54.9568,x:463.05,y:526.85},8).wait(41).to({startPosition:0},0).wait(80).to({startPosition:0},0).wait(159).to({startPosition:0},0).to({regY:-12.1,rotation:-0.7449,x:463.15,y:526.9},5).wait(43).to({rotation:-0.7449},0).wait(71).to({startPosition:0},0).wait(67).to({regX:-15.3,rotation:8.2108,x:463.25},0).wait(1).to({rotation:14.2536,x:463.2},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:22.1909,x:463.15},0).wait(1).to({regX:-15.4,regY:-12.2,scaleX:1,scaleY:1,rotation:29.2534,y:526.85},0).wait(1).to({regX:-15.3,regY:-12.1,scaleX:0.9999,scaleY:0.9999,rotation:44.2531,x:463.25,y:527.05},0).wait(1).to({scaleX:1,scaleY:1,rotation:14.2536,x:463.2,y:526.9},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.7449},0).wait(1).to({rotation:-5.7198},0).wait(1).to({regY:-12,rotation:-9.4241,y:527},0).wait(2).to({scaleX:0.9857,scaleY:1.0854,rotation:-9.4239,x:463.1,y:526.95},0).wait(1).to({regX:-15.2,regY:-11.9,scaleX:0.9946,scaleY:1.0248,rotation:-9.4231,x:463.2},0).wait(1).to({scaleX:0.9945,scaleY:1.0249,rotation:-15.1403,y:527.05},0).wait(1).to({scaleY:1.0248,rotation:-21.336},0).wait(1).to({rotation:-36.3355,y:527.1},0).wait(1).to({startPosition:0},0).wait(49).to({regX:-13.2,regY:-10.3,rotation:-51.3349,x:465.8,y:527.15},0).wait(29).to({startPosition:0},0).wait(63).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({regY:-10.2,rotation:-0.1135,y:527.35},7).wait(2).to({rotation:-0.1135},0).to({scaleX:0.9944,scaleY:1.0247,rotation:-23.6068,y:527.3},7).wait(30).to({startPosition:0},0).to({regY:-10.1,rotation:-0.1357,x:465.9,y:527.4},10).wait(52).to({rotation:-0.1357},0).to({regY:-10,rotation:-23.0853,x:465.95,y:527.45},4).wait(7).to({startPosition:0},0).wait(62).to({startPosition:0},0).to({regX:-13.1,regY:-9.9,rotation:-0.3908,x:466,y:527.55},12).wait(50).to({regX:-19.2,regY:-21.5,rotation:-0.3908,x:459.85,y:515.7},0).to({scaleY:1.0246,rotation:-41.8357},38).wait(11).to({regX:-18.6,scaleX:0.9943,rotation:-45.3898,x:460.45,y:515.75},0).wait(25));

	// key
	this.instance_23 = new lib.keysvg("synched",0);
	this.instance_23.setTransform(418.6,515.1,0.5725,0.5197,139.8029,0,0,67.5,142.8);
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween274("synched",0);
	this.instance_24.setTransform(1113.95,391.15);
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween275("synched",0);
	this.instance_25.setTransform(1113.95,859.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},691).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},15).to({state:[{t:this.instance_23}]},38).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_23}]},4).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},17).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},17).to({state:[{t:this.instance_25}]},77).to({state:[]},1).wait(270));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(691).to({_off:false},0).wait(1).to({rotation:109.8039,x:431.1,y:565.1},0).wait(1).to({regY:142.7,rotation:79.8053,x:447.8,y:602.35},0).wait(1).to({regX:67.7,rotation:49.8067,x:465.15,y:621.5},0).wait(1).to({regX:67.8,regY:142.8,scaleX:0.5724,rotation:8.0666,x:492.1,y:633.05},0).wait(1).to({rotation:-12.1573,x:520.85,y:632.9},0).wait(1).to({scaleY:0.5196,rotation:-42.1578,x:545.55,y:617.35},0).wait(1).to({rotation:-72.1557,x:566.1,y:589.5},0).wait(1).to({rotation:-87.1554,x:577.25,y:567.4},0).wait(1).to({regX:67.7,rotation:-109.8445,x:567.4,y:536.25},0).wait(15).to({startPosition:0},0).wait(38).to({x:589.05,y:501.7},0).wait(1).to({x:599.5,y:477.05},0).wait(1).to({x:620.75,y:441.65},0).wait(1).to({x:656.25,y:412.75},0).to({x:825.55,y:345},3).to({x:1040.05,y:401.2},4).wait(1).to({x:1073.9},0).wait(1).to({x:1084.2},0).wait(1).to({x:1097.55,y:396.2},0).wait(1).to({x:1114.05,y:391},0).wait(17).to({regX:67.6,scaleX:0.511,x:1114},0).wait(1).to({regX:67.5,scaleX:0.4417,x:1114.05},0).wait(1).to({regX:67.4,scaleX:0.2738},0).wait(1).to({regX:67.2,regY:142.9,scaleX:0.129},0).wait(1).to({regX:66.6,scaleX:0.0462},0).wait(1).to({regX:65.8,regY:143,scaleX:0.0059,rotation:0,skewX:-109.8445,skewY:70.2067,x:1114.1,y:390.95},0).wait(1).to({regX:68.7,scaleX:0.0337,skewY:-109.7881,x:1114,y:390.85},0).wait(1).to({regX:68.5,scaleX:0.0966,skewY:-109.7853},0).wait(1).to({regX:67.9,scaleX:0.193,skewY:-109.7861,y:390.95},0).wait(1).to({regX:67.7,regY:143.1,scaleX:0.2648,skewY:-109.7817,x:1114.05},0).wait(1).to({regX:67.4,scaleX:0.4139,skewY:-109.7804,y:391},0).wait(1).to({regX:67.3,regY:143.2,scaleX:0.4555,skewY:-109.7806,x:1114.1},0).to({_off:true},1).wait(368));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(796).to({_off:false},0).wait(3).to({startPosition:0},0).to({_off:true,y:859.65},17).wait(348));

	// lock
	this.instance_26 = new lib.locksvg("synched",0);
	this.instance_26.setTransform(1136.25,305.15,1,1,0,0,0,81.2,108.9);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.instance_27 = new lib.path6892();
	this.instance_27.setTransform(1135.6,385.15,1,1,0,0,0,21.2,18.9);
	this.instance_27.alpha = 0.9102;

	this.instance_28 = new lib.path6784();
	this.instance_28.setTransform(1134.9,354.7,1,1,0,0,0,15.1,14.3);
	this.instance_28.alpha = 0.9102;

	this.instance_29 = new lib.path6730();
	this.instance_29.setTransform(1088.75,303.65,1,1,-4.6957,0,0,22.7,107.4);
	this.instance_29.alpha = 0.9102;

	this.instance_30 = new lib.rect6622();
	this.instance_30.setTransform(1136.25,364.75,1,1,0,0,0,81.2,69.4);
	this.instance_30.alpha = 0.9102;

	this.instance_31 = new lib.Tween270("synched",0);
	this.instance_31.setTransform(1122.75,294.85);
	this.instance_31._off = true;

	this.instance_32 = new lib.Tween271("synched",0);
	this.instance_32.setTransform(1122.75,763.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},609).to({state:[{t:this.instance_26}]},13).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},130).to({state:[{t:this.instance_26}]},32).to({state:[{t:this.instance_26}]},11).to({state:[{t:this.instance_30},{t:this.instance_29,p:{rotation:-4.6957}},{t:this.instance_28},{t:this.instance_27}]},1).to({state:[{t:this.instance_30},{t:this.instance_29,p:{rotation:-11.6628}},{t:this.instance_28},{t:this.instance_27}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},17).to({state:[{t:this.instance_32}]},77).to({state:[]},1).wait(270));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(609).to({_off:false},0).to({alpha:1},13).wait(1).to({startPosition:0},0).wait(130).to({startPosition:0},0).wait(32).to({startPosition:0},0).wait(11).to({startPosition:0},0).to({_off:true},1).wait(367));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(799).to({_off:false},0).to({_off:true,y:763.35},17).wait(348));

	// cell
	this.instance_33 = new lib.cellsvg("synched",0);
	this.instance_33.setTransform(1842.35,223.65,1,1,0,0,0,163,158.7);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(519).to({_off:false},0).to({x:1260},32).wait(71).to({startPosition:0},0).wait(131).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(90).to({startPosition:0},0).to({alpha:0},21).to({_off:true},1).wait(270));

	// move4
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("AxYBFQAIgDBCgSQBBgRAbgGQBjgWB7gSQB7gTBugLQCOgOBygFQBzgFCiAAQC3AACMAGQCPAGFyAXQDjAOAIAAQAPAAkPAaQjkAWg9AEQg9ADkyAGIz7AcQgqACAEgCg");
	this.shape_152.setTransform(409.297,367.8571);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D35F5F").s().p("AxYBFQAIgDBCgSQBBgRAbgGQBjgWB7gSQB7gTBugLQCOgOBygFQBzgFCiAAQC3AACMAGQCPAGFyAXIDrAOQAPAAkPAaQjkAWg9AEQg9ADkyAGIz7AcIghABQgHAAACgBg");
	this.shape_153.setTransform(409.297,367.8571);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("Aw9EKQgDgSgRgYQgRgagqgwQgsgygRgZQgSgagDgSQgCgRAZgVQBXhJEGhFQEHhFE/giQBagKCIgIQA2gECiAAQCjAAAvAEQEWATDFA1QDrA/CTBrQAXASAEAHQAFAHgDAPQgFAdgjA1QgkA2gzA5IgPAPIlKgUQkpgTiTgGQiXgHiegCQpBgInVBjQgwAKgFAAQgFAAgCgIg");
	this.shape_154.setTransform(418.2988,341.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D35F5F").s().p("Aw9EJQgDgRgRgYQgRgagqgxQgsgxgRgaQgSgZgDgSQgCgRAZgUQBXhKEGhFQEHhFE/ghQBagKCIgJQA2gDCigBQCjABAvADQEWAUDFA0QDrA/CTBsQAXAQAEAIQAFAGgDAQQgFAdgjA1QgkA2gzA4IgPAQIlKgUQkpgTiTgGQiXgIiegBQpBgInVBjQgwAKgFAAQgFABgCgKg");
	this.shape_155.setTransform(418.2988,341.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#D35F5F").ss(0.3,0,0,4).p("AglAVQgdgPAOgQQAOgRAnAAQAVgBAQAJQARAIACALQAEARgmAIQglAIgXgMg");
	this.shape_156.setTransform(418.323,309.5206);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D35F5F").s().p("AglAVQgdgPAOgQQAOgRAnAAQAVgBAQAJQARAIACALQAEARgmAIQgPADgMAAQgTAAgOgHg");
	this.shape_157.setTransform(418.323,309.5206);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(0.4,0,0,4).p("AAAgoQAdAAAVAMQAVAMAAAQQAAARgVAMQgVAMgdAAQgcAAgVgMQgVgMAAgRQAAgQAVgMQAUgMAdAAg");
	this.shape_158.setTransform(418.275,309.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgxAdQgVgMAAgRQAAgQAVgMQAUgMAdAAQAdAAAVAMQAVAMAAAQQAAARgVAMQgVAMgdAAQgcAAgVgMg");
	this.shape_159.setTransform(418.275,309.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(0.4,0,0,4).p("AxLA2QH7hyJrAHQDcADE/ATQCyALFlAV");
	this.shape_160.setTransform(418.3604,365.2737);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAag1QDdADE/ATIIWAgMgiXAA1QH6hyJrAHg");
	this.shape_161.setTransform(418.4,365.2799);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(0.4,0,0,4).p("AvWgGIjGA2IbrgmIJig6");
	this.shape_162.setTransform(407.841,371.1723);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AvggGMAiHgAqIpiA6I7rAmg");
	this.shape_163.setTransform(408.825,371.15);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(0.4,0,0,4).p("ARMDyIBghyQBZh4gogeQjbiumfg+Qljg1m4AkQmEAfk8BUQkzBTg3BRQgQAXAcArQAQAbAzA5QAyA4AOAYQAYAogUAR");
	this.shape_164.setTransform(418.3432,342.188);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AxTDqQgOgYgyg4Qgzg5gQgbQgcgrAQgXQA3hREzhTQE8hUGEgfQG4gkFjA1QGfA+DbCuQAoAehZB4IhgByMgibAAxQAUgRgYgog");
	this.shape_165.setTransform(418.3432,342.188);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AGqm6QoIEFjCBLQj3BfkjAgQgMCAgPE2QgXEQhGB+QhRhohAi6QhBi9gXjOQgYjfAgi2QAljMBph3QDcj5F1gxQE3gqF1BmQCfAsCYBBQCMA8BnAiQBoAhAkgcQAjgdB1CvQB2CvgaGbQgaGchLDvQiihjg/oQQg+oPl0hVg");
	this.shape_166.setTransform(415.3838,425.2201);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#502D16").s().p("AxDI8QhBi9gXjOQgYjfAgi2QAljMBph3QDcj5F1gxQE3gqF1BmQCfAsCYBBQCMA8BnAiQBoAhAkgcQAjgdB1CvQB2CvgaGbQgaGchLDvQiihjg/oQQg+oPl0hVQoIEFjCBLQj3BfkjAgQgMCAgPE2QgXEQhGB+QhRhohAi6g");
	this.shape_167.setTransform(415.3838,424.7249);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgnAuQgRgTAAgbQAAgaARgTQARgTAWAAQAXAAARATQARATAAAaQAAAbgRATQgRATgXAAQgWAAgRgTg");
	this.shape_168.setTransform(461.175,438.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#004455").s().p("AhSBbQgigmAAg1QAAg0AigmQAigmAwAAQAwAAAjAmQAiAlAAA1QAAA1giAmQgiAmgxAAQgwAAgigmg");
	this.shape_169.setTransform(460.425,438.475);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjcQBKAAA1BBQA0BBAABaQAABcg0BBQg1BBhKAAQhJAAg1hBQg0hBAAhcQAAhaA0hBQA1hBBJAAg");
	this.shape_170.setTransform(459.475,439.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("Ah+CdQg0hBAAhcQAAhaA0hBQA1hBBJAAQBKAAA1BBQA0BBAABaQAABcg0BBQg1BAhKABQhJgBg1hAg");
	this.shape_171.setTransform(459.475,439.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgnAuQgRgTAAgbQAAgaARgTQAQgTAXAAQAXAAARATQARATAAAaQAAAbgRATQgRATgXAAQgXAAgQgTg");
	this.shape_172.setTransform(402.475,438.075);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#004455").s().p("AhSBbQgigmAAg1QAAg1AiglQAigmAwAAQAwAAAjAmQAiAlAAA1QAAA1giAmQgjAmgwAAQgwAAgigmg");
	this.shape_173.setTransform(401.725,438.45);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjcQBKAAA1BBQA0BAAABbQAABcg0BAQg1BBhKAAQhJAAg1hBQg0hAAAhcQAAhbA0hAQA1hBBJAAg");
	this.shape_174.setTransform(400.775,439.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("Ah+CdQg0hBAAhcQAAhbA0hAQA1hCBJABQBKgBA1BCQA0BAAABbQAABcg0BBQg1BBhKgBQhJABg1hBg");
	this.shape_175.setTransform(400.775,439.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AgmjSID2FqIiYA6IkGmVg");
	this.shape_176.setTransform(475.9195,533.6734);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AAijYIjwFtICiBDID6mig");
	this.shape_177.setTransform(368.6754,534.682);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF8080").s().p("AgyAkQgVgPAAgVQAAgUAVgPQAVgPAdAAQAeAAAVAPQAVAPAAAUQAAAVgVAPQgVAPgeAAQgdAAgVgPg");
	this.shape_178.setTransform(431.475,468.525);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFE6D5").s().p("AjtKPQjggLiQgaQiPgaglglQgbgbgThGQgThGgHhnQgKiAAGhiIAIinQAFhlACgCQAAgBAzgGQCNgQB/geQCBggCGgzQBdgjBmgvQBmgxC2hdICohWIAjAFQCiAXBpBCQAWAQAdAcQAhAjAUAkQAUAkAOA1QANAvAEA1QAEAzADCSQACB/ADA0QADAyAHAuQAEAYgCAxQgCAxgGAhQgLBBgeA7QgWAqgkAeQgkAegrAMQg6AQh6ANQh7AOidAGQhHADicAAQigAAhEgDg");
	this.shape_179.setTransform(420.0708,448.15);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E3DBDB").s().p("AFJCHIhMh0IhtgDQhqgEiRAAIiPAAIhIB1QhJB1gCgCQgCgDg0jwQg1jwACgBQPpgKAEACQACABgwD3QgxD3gBACIAAAAQgEAAhKhyg");
	this.shape_180.setTransform(421.6252,603.5593);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("Ah7C0QhIgcgBgCIB3iyQBRh7ATgcQAUgcADAAICOAMIAHACIj0GQQgBABhJgcg");
	this.shape_181.setTransform(367.6037,534.6004);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5599FF").s().p("Ah6C0QhIgcgBgCIB3iyIBkiXQAUgcADAAICOAMIAHACIj0GQIAAABIhKgcg");
	this.shape_182.setTransform(367.525,534.6004);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("AhHAJIh9jFQgBgCAygEIBjgJIAGAAIB3CvQB4CtAAACQAAABhIAcIhIAcQgBABh7jEg");
	this.shape_183.setTransform(476.6728,533.9253);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#5599FF").s().p("AhHAJIh9jFQgBgCAygEIBjgJIAGAAIB3CvQB4CtAAACQAAABhIAcIhIAcIAAAAQgBAAh7jDg");
	this.shape_184.setTransform(476.6728,533.9253);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgpA1QgQgIgJgNQgNgUAKgXQAKgYAagOQAZgNAYADQAZADATARQAKAKADAFQACAFAAAOQAAALgCAGQgCAHgHAIQgTAYgfAHQgeAIgZgNg");
	this.shape_185.setTransform(493.2994,558.592);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFE6D5").s().p("AgpA1QgQgIgJgNQgNgUAKgXQAKgYAagOQAZgNAYADQAZADATARQAKAKADAFQACAFAAAOQAAALgCAGQgCAHgHAIQgTAYgfAHQgLADgKAAQgSAAgQgIg");
	this.shape_186.setTransform(493.2994,558.592);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgXA4QgggMgNgaQgOgaAQgXQAagoA5AQQA6AQAAAuQAAAdggAQQghAQghgMg");
	this.shape_187.setTransform(351.5608,559.5786);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFE6D5").s().p("AgXA4QgggMgNgaQgOgaAQgXQAagoA5AQQA6AQAAAuQAAAdggAQQgTAJgTAAQgNAAgPgFg");
	this.shape_188.setTransform(351.5608,559.5786);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("Atdl1IgHBuQgHCGABB2QAEF2BYBAQB0BVIkALQDlAFDYgNQDdgOB6gbQBTgTAzhIQAqg6ARhYQAMg8AAhLQAAgBgGgwQgHg0gCgkIgIjMQgCgpABhCQABhCgBgZIgFhe");
	this.shape_189.setTransform(420.0688,462.6756);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AARBDQAjgIATgaQATgZgHgbQgIgcgdgOQgegNghAIQgiAJgTAZQgTAaAHAbQAHAcAeANQAdAOAhgJg");
	this.shape_190.setTransform(493.3631,558.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AARhCQAjAIATAaQATAagHAbQgIAbgdAOQgeAOghgJQgigIgTgaQgTgaAHgbQAHgcAegNQAdgOAhAJg");
	this.shape_191.setTransform(351.5631,559.575);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJkcIB2IaICjkGIHjAEICtEHIBqoi");
	this.shape_192.setTransform(421.528,607.1307);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("AlPlDImIKDIWvgKImQp3");
	this.shape_193.setTransform(422.5338,546.3528);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#5599FF").s().p("AlPlBIKXACIGQJ4I2vAJg");
	this.shape_194.setTransform(422.525,546.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152}]},117).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152}]},2).to({state:[]},1).wait(1044));

	// move3
	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("AQlhbQjFgbkRgGQiNgCh0AEQhxADilANQi0APiNARQiLARlxA1IkiAmQgLABB7BaQAEADCRgOQBJgGBHgIQACgBHkgYIKXgnQDDgLBggIQAUgBA0gFQA4gFANgDQANgOBRglQA/gcgTgPg");
	this.shape_195.setTransform(408.3488,379.1042);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D35F5F").s().p("Au3B9Qh7haALgBIEigmQFxg1CLgRQCNgRC0gPQClgNBxgDQB0gECNACQERAGDFAbQATAPg/AcQhRAlgNAOQgNADg4AFIhIAGQhgAIjDALIqXAnQnkAYgCABIiQAOQh3AMgYAAIgGgBg");
	this.shape_196.setTransform(408.3488,379.1042);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(0.4,0,0,4).p("ARChvIirBrI9fB0Ih5he");
	this.shape_197.setTransform(409.2547,381.1437);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AxBASMAiDgCBIirBrI9fB0g");
	this.shape_198.setTransform(409.275,381.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("AROCgQACgRAPgaQAPgbAmgzQAng0AQgbQAPgbACgSQABgRgbgUQhchCkLgwQkLgwlBgJQhcgCiHACQg0ABijANQiiAMgvAHQiRAWhvAaQhxAahkAkQjjBPiLB3QgWATgEAIQgEAIAEAQQAHAcAoAyQAnAyA4A1IAQAPIFIgvQEggpCYgTQCTgSChgPQI/g2HbA/QAxAGAFAAQAFAAAAgKg");
	this.shape_199.setTransform(407.7598,351.7199);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D35F5F").s().p("AxLEYQg4g1gngyQgogygHgcQgEgQAEgIQAEgIAWgTQCLh3DjhPQBkgkBxgaQBvgaCRgWQAvgHCigMQCjgNA0gBQCHgCBcACQFBAJELAwQELAwBcBCQAbAUgBARQgCASgPAbQgQAbgnA0QgmAzgPAbQgPAagCARQAAAKgFAAQgFAAgxgGQnbg/o/A2QihAPiTASQiYATkgApIlIAvg");
	this.shape_200.setTransform(407.7598,351.7056);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#D35F5F").ss(0.3,0,0,4).p("AAoASQAbgRgPgPQgPgQgnADQgVACgQAKQgQAJgBALQgCARAmAFQAlAFAXgOg");
	this.shape_201.setTransform(405.0848,317.6289);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D35F5F").s().p("AgUAbQgmgFACgRQABgLAQgJQAQgKAVgCQAngDAPAQQAPAPgbARQgRAKgXAAIgUgBg");
	this.shape_202.setTransform(405.0848,317.6289);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(0.4,0,0,4).p("AgCgoQgeADgTANQgUAOABAQQACARAVAKQAWAKAcgCQAegCATgOQAUgOgBgQQgCgRgVgKQgWgKgcACg");
	this.shape_203.setTransform(405.125,317.626);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgvAhQgVgKgCgRQgBgQAUgOQATgNAegDQAcgCAWAKQAVAKACARQABAQgUAOQgTAOgeACIgKAAQgWAAgSgIg");
	this.shape_204.setTransform(405.125,317.626);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(0.4,0,0,4).p("ARLgmQoChLppA4QjbAUk8AsQliAzixAY");
	this.shape_205.setTransform(409.6033,373.8759);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("Ao3AHQE8gsDbgUQJpg4ICBLMgiVAB4QCygYFhgzg");
	this.shape_206.setTransform(409.6,373.8781);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(0.4,0,0,4).p("Aw1E2Qg4gygxg4QhihxAlgjQDNi9GZheQFdhRG5ABQGGAAFCA7QE5A6A9BNQARAWgYAuQgOAcguA8QguA8gMAZQgVApAWAP");
	this.shape_207.setTransform(407.7204,352.0872);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AyeDLQhihxAlgjQDNi9GZheQFdhRG5ABQGGAAFCA8QE5A6A9BNQARAVgYAuQgOAcguA8QguA8gMAZQgVAqAWAPMgiYAB9Qg4gxgxg5g");
	this.shape_208.setTransform(407.7204,352.1498);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AIFm6QgNAGkUCIQkUCHheAoQheAohaAYQhbAZk5BzQgCBZAABHQgBBHgQBjQgRBkgcCdQgZB+gkBBQhShog/i6QhBi9gXjOQgZjfAhi2QAljMBoh3QDdj5F1gxQChgWC3ASQClARCvAvQCfAsCYBBQCLA8ByBGQBoBBAqAyQAnAuACA4QALEGgCBOQgJElhJCRQg5lZiGjeQh3jHi+h0g");
	this.shape_209.setTransform(405.7022,425.2347);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#502D16").s().p("AvoI8QhBi9gXjOQgZjfAhi2QAljMBoh3QDdj5F1gxQChgWC3ASQClARCvAvQCfAsCYBBQCLA8ByBGQBoBBAqAyQAnAuACA4QALEGgCBOQgJElhJCRQg5lZiGjeQh3jHi+h0IkhCOQkUCHheAoQheAohaAYQhbAZk5BzIgCCgQgBBHgQBjIgtEBQgZB+gkBBQhShog/i6g");
	this.shape_210.setTransform(405.7022,424.7399);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgnAuQgRgTAAgbQAAgaARgTQARgTAWAAQAYAAAQATQAQATABAaQgBAbgQATQgQATgYAAQgWAAgRgTg");
	this.shape_211.setTransform(479.5,435.375);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#004455").s().p("AhSBbQgiglAAg2QAAg1AiglQAjgmAvAAQAwAAAjAmQAiAlAAA1QAAA2giAlQgjAmgwAAQgvAAgjgmg");
	this.shape_212.setTransform(478.75,435.75);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjdQBLAAA0BBQA1BBAABbQAABcg1BAQg0BBhLAAQhJAAg1hBQg0hAAAhcQAAhbA0hBQA1hBBJAAg");
	this.shape_213.setTransform(477.8,436.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("Ah+CdQg1hBAAhcQAAhbA1hAQA0hBBKAAQBKAAA1BBQA0BAAABbQAABcg0BBQg1BAhKABQhKgBg0hAg");
	this.shape_214.setTransform(477.8,436.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgnAuQgQgTgBgbQABgaAQgTQAQgTAXAAQAXAAARATQAQATABAaQgBAbgQATQgRATgXAAQgXAAgQgTg");
	this.shape_215.setTransform(417.8,435.375);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#004455").s().p("AhSBbQgigmAAg1QAAg1AiglQAjgmAvAAQAxAAAiAmQAiAlAAA1QAAA1giAmQgiAmgxAAQgvAAgjgmg");
	this.shape_216.setTransform(417.025,435.75);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjcQBLAAA0BBQA0BAAABbQAABcg0BBQg1BBhKAAQhJAAg1hBQg0hBAAhcQAAhbA0hAQA1hBBJAAg");
	this.shape_217.setTransform(416.075,436.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("Ah+CdQg0hBAAhcQAAhbA0hAQA1hCBJABQBLgBA0BCQA0BAAABbQAABcg0BBQg1BBhKgBQhJABg1hBg");
	this.shape_218.setTransform(416.075,436.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AgmjSID2FqIiYA6IkGmVg");
	this.shape_219.setTransform(475.345,533.6734);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AAijYIjwFtIChBDID7mig");
	this.shape_220.setTransform(368.1009,534.682);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF8080").s().p("AgyAkQgVgPAAgVQAAgUAVgPQAVgPAdAAQAeAAAVAPQAVAPAAAUQAAAVgVAPQgVAPgeAAQgdAAgVgPg");
	this.shape_221.setTransform(455.425,463.825);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFE6D5").s().p("AjsKPQjhgLiPgaQiQgaglglQgbgbgThGQgShGgIhnQgKiAAGhiIAIinQAFhlACgCQABgBAygGQCNgQB/gfQCBgfCHgzQBdgiBlgwQBmgxC2hdICohWIAjAFQCjAXBoBCQAWAPAdAdQAiAjAUAkQAUAlAOA0QAMAwAEA0QAFA2ACCPQACCAADAzQADAzAHAtQADAYgBAxQgCAxgGAiQgMBBgdA6QgWAqgkAeQgkAegrAMQg6AQh6ANQh7AOicAGQhIADicAAQigAAhDgDg");
	this.shape_222.setTransform(419.46,448.15);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#E3DBDB").s().p("AFJCHIhMh0IhtgDQhpgEiSAAIiPAAIhIB1QhIB0gDgBQgCgDg0jwQg1jwACgBQPpgKAEACQACABgwD3QgwD3gCACIAAAAQgEAAhKhyg");
	this.shape_223.setTransform(421.0252,603.5593);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("Ah7C0IhJgeQgBAAB3iyQBPh3AWggQAUgcADAAICNAMIAIACIj1GQQAAABhJgcg");
	this.shape_224.setTransform(367.0996,534.6004);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#5599FF").s().p("Ah6C0IhJgeQgBAAB4iyIBliXQATgcADAAICOAMIAHACIj0GQIgBABIhJgcg");
	this.shape_225.setTransform(366.9496,534.6004);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("AhHAJIh9jFQgBgCAygEIBjgJIAGAAIB3CvQB4CuAAABIiQA5QAAABh8jEg");
	this.shape_226.setTransform(476.074,533.9251);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#5599FF").s().p("AhHAJIh9jFQgBgCAygEIBjgJIAGAAIB3CvQB4CuAAABIiQA5IAAAAIh8jDg");
	this.shape_227.setTransform(476.074,533.9251);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgpA1QgQgIgJgNQgNgUAJgXQAKgYAagOQAagNAYADQAYADATARQALAKACAFQACAFAAAOQAAALgCAGQgCAHgHAIQgSAYgfAHQgeAIgZgNg");
	this.shape_228.setTransform(492.7038,558.592);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFE6D5").s().p("AgpA1QgQgIgJgNQgNgUAJgXQAKgYAagOQAagNAYADQAYADATARQALAKACAFQACAFAAAOQAAALgCAGQgCAHgHAIQgSAYgfAHQgLADgKAAQgSAAgQgIg");
	this.shape_229.setTransform(492.7038,558.592);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQggAQghgMg");
	this.shape_230.setTransform(350.9803,559.5786);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFE6D5").s().p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQgSAJgTAAQgOAAgOgFg");
	this.shape_231.setTransform(350.9803,559.5786);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("Atdl1IgHBuQgHCHABB1QAEF2BYBAQB0BVIkALQDlAFDYgNQDdgOB6gbQBUgTAzhIQApg6ARhYQANg/AAhIQgEgYgDgZQgHg0gCgkQgEh/gEhNQgCgoABhDQABhAgBgbIgFhe");
	this.shape_232.setTransform(419.4938,462.6756);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AASBDQAigIATgaQATgZgHgbQgIgdgdgNQgdgNgiAIQgiAIgTAaQgTAaAHAaQAHAdAeANQAdANAigIg");
	this.shape_233.setTransform(492.7631,558.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AAShCQAiAIATAaQATAagHAbQgHAbgeAOQgdAOgigJQgigIgTgaQgTgaAHgbQAHgcAegNQAdgOAiAJg");
	this.shape_234.setTransform(350.975,559.575);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJkcIB2IaICjkGIHjAEICtEHIBqoi");
	this.shape_235.setTransform(420.928,607.1307);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("AlOlDImJKDIWvgKImPp3");
	this.shape_236.setTransform(421.9328,546.3526);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#5599FF").s().p("AlOlBIKXACIGPJ4I2vAJg");
	this.shape_237.setTransform(421.925,546.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214,p:{x:477.8}},{t:this.shape_213,p:{x:477.8}},{t:this.shape_212,p:{x:478.75}},{t:this.shape_211,p:{x:479.5}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195}]},114).to({state:[{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214,p:{x:478.2}},{t:this.shape_213,p:{x:478.2}},{t:this.shape_212,p:{x:479.15}},{t:this.shape_211,p:{x:479.9}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195}]},2).to({state:[]},1).wait(1047));

	// move2
	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgnAvQgQgUgBgbQABgaAQgTQAQgUAXAAQAXAAARAUQAQATAAAaQAAAbgQAUQgRASgXABQgXgBgQgSg");
	this.shape_238.setTransform(455.75,422.75);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#004455").s().p("AhSBbQgjglAAg2QAAg0AjgmQAigmAwAAQAxAAAiAmQAjAmgBA0QABA2gjAlQgjAmgwAAQgwAAgigmg");
	this.shape_239.setTransform(455,423.125);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjcQBKAAA1BBQA0BAAABbQAABcg0BBQg1BAhKAAQhJAAg1hAQg0hBAAhcQAAhbA0hAQA1hBBJAAg");
	this.shape_240.setTransform(452.025,423.975);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("Ah+CdQg0hBAAhcQAAhbA0hAQA1hBBJAAQBKAAA1BBQA0BAAABbQAABcg0BBQg1BAhKAAQhJAAg1hAg");
	this.shape_241.setTransform(452.025,423.975);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AgmjSID2FqIiYA6IkGmVg");
	this.shape_242.setTransform(473.695,530.7234);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AAijYIjwFtIChBDID7mig");
	this.shape_243.setTransform(366.4509,531.732);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("APwhCQjFgbkSgGQiNgChzAEQhyADikANQi0APiNARQiMARlxA0IjpAgIAXAEQAzAIBXARQAbAGCSANQACgBOthCQBegFGcgaQB2gGA6gGQAdgCASgCQAFAAA6AAQAwABAMgDQgegXgJgIQgHgHgPgMg");
	this.shape_244.setTransform(412.027,373.6564);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#D35F5F").s().p("AuIBRQhWgRgzgIIgXgEIDpggQFxg0CMgRQCMgRC1gPQCkgNBxgDQB0gECNACQESAGDEAbIAXATIAnAfQgMADgxgBIg+AAIgvAEQg7AGh2AGIn6AfQusBCgDABQiRgNgcgGg");
	this.shape_245.setTransform(412.45,373.6519);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(0.4,0,0,4).p("AQqhYIAoA+I8bBxImQgu");
	this.shape_246.setTransform(410.0377,375.8654);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AxVAqMAiDgCBIAoA+I8bBxg");
	this.shape_247.setTransform(409.625,375.75);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("AROCgQACgRAPgaQAPgbAmgzQAng0AQgbQAPgbACgSQABgRgbgUQhchCkLgwQkLgwlBgJQhcgCiHACQg0ABijANQiiAMgvAHQiRAWhvAaQhxAahkAkQjjBPiLB3QgWATgEAIQgEAIAEAQQAHAcAoAyQAnAyA4A1IAQAPIFIgvQEggpCYgTQCTgSChgPQI/g2HbA/QAxAGAFAAQAFAAAAgKg");
	this.shape_248.setTransform(406.1098,348.7699);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#D35F5F").s().p("AxLEYQg4g1gngyQgogygHgcQgEgQAEgIQAEgIAWgTQCLh3DjhPQBkgkBxgaQBvgaCRgWQAvgHCigMQCjgNA0gBQCHgCBcACQFBAJELAwQELAwBcBCQAbAUgBARQgCASgPAbQgQAbgnA0QgmAzgPAbQgPAagCARQAAAKgFAAQgFAAgxgGQnbg/o/A2QihAPiTASQiYATkgApIlIAvg");
	this.shape_249.setTransform(406.1098,348.7556);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#D35F5F").ss(0.3,0,0,4).p("AAoASQAbgRgPgPQgPgQgnADQgVACgQAKQgQAJgBALQgCARAmAFQAlAFAXgOg");
	this.shape_250.setTransform(403.4348,314.6789);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D35F5F").s().p("AgUAbQgmgFACgRQABgLAQgJQAQgKAVgCQAngDAPAQQAPAPgbARQgRAKgXAAIgUgBg");
	this.shape_251.setTransform(403.4348,314.6789);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(0.4,0,0,4).p("AgCgoQgeADgTANQgUAOABAQQACARAVAKQAWAKAcgCQAegCATgOQAUgOgBgQQgCgRgVgKQgWgKgcACg");
	this.shape_252.setTransform(403.475,314.676);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgvAhQgVgKgCgRQgBgQAUgOQATgNAegDQAcgCAWAKQAVAKACARQABAQgUAOQgTAOgeACIgKAAQgWAAgSgIg");
	this.shape_253.setTransform(403.475,314.676);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(0.4,0,0,4).p("ARLgmQoChLppA4QjbAUk8AsQliAzixAY");
	this.shape_254.setTransform(407.9533,370.9259);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("Ao3AHQE8gsDbgUQJpg4ICBLMgiVAB4QCygYFhgzg");
	this.shape_255.setTransform(407.95,370.9281);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(0.4,0,0,4).p("Aw1E2Qg4gygxg4QhihxAlgjQDNi9GZheQFdhRG5ABQGGAAFCA7QE5A6A9BNQARAWgYAuQgOAcguA8QguA8gMAZQgVApAWAP");
	this.shape_256.setTransform(406.0704,349.1372);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AyeDLQhihxAlgjQDNi9GZheQFdhRG5ABQGGAAFCA8QE5A6A9BNQARAVgYAuQgOAcguA8QguA8gMAZQgVAqAWAPMgiYAB9Qg4gxgxg5g");
	this.shape_257.setTransform(406.0704,349.1998);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AIHm4QmQDLjZCDQjaCCmRA2QAIHCgKB2QgKB1h8BhQhShpg/i6QhBi9gXjOQgZjeAhi2QAljNBoh2QDdj6F1gxQChgVC2ASQCmAQCvAwQCfArCYBBQCLA9ByBGQBoBBAqAxQAnAvACA3QAIDHgDBEQgMDYhKCRQg1lFiFinQg4hGhUg+Qgyglh0hHg");
	this.shape_258.setTransform(403.8895,422.0347);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#502D16").s().p("AvmI8QhBi9gXjOQgZjfAhi2QAljMBoh3QDdj5F1gxQChgWC2ASQCmARCvAvQCfAsCYBBQCLA8ByBGQBoBBAqAyQAnAuACA4QAIDGgDBEQgMDZhKCRQg1lFiFinQg4hHhUg9Qgygmh0hGQmQDKjZCDQjaCCmRA2QAIHDgKB1QgKB2h8BgQhShog/i6g");
	this.shape_259.setTransform(403.8895,421.7899);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FF8080").s().p("AgyAkQgVgPAAgVQAAgUAVgPQAVgPAdAAQAeAAAVAPQAVAPAAAUQAAAVgVAPQgVAPgeAAQgdAAgVgPg");
	this.shape_260.setTransform(495.525,448.525);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFE6D5").s().p("AjsKPQjhgLiPgaQiQgaglglQgbgbgThGQgShGgIhnQgKiAAGhiIAIinQAFhlACgCQABgBAygGQCNgQB/gfQCBgfCHgzQBdgiBlgwQBmgxC2hdICohWIAjAFQCjAXBoBCQAWAPAdAdQAiAjAUAkQAUAlAOA0QAMAwAEA0QAFA2ACCPQACCAADAzQADAzAHAtQADAYgBAxQgCAxgGAiQgMBBgdA6QgWAqgkAeQgkAegrAMQg6AQh6ANQh7AOicAGQhIADicAAQigAAhDgDg");
	this.shape_261.setTransform(417.81,445.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#E3DBDB").s().p("AFJCHIhMh0IhtgDQhpgEiSAAIiPAAIhIB1QhIB0gDgBQgCgDg0jwQg1jwACgBQPpgKAEACQACABgwD3QgwD3gCACIAAAAQgEAAhKhyg");
	this.shape_262.setTransform(419.3752,600.6093);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("Ah7C0IhJgeQgBAAB3iyQBPh3AWggQAUgcADAAICNAMIAIACIj1GQQAAABhJgcg");
	this.shape_263.setTransform(365.4496,531.6504);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#5599FF").s().p("Ah6C0IhJgeQgBAAB4iyIBliXQATgcADAAICOAMIAHACIj0GQIgBABIhJgcg");
	this.shape_264.setTransform(365.2996,531.6504);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("AhHAJIh9jFQgBgCAygEIBjgJIAGAAIB3CvQB4CuAAABIiQA5QAAABh8jEg");
	this.shape_265.setTransform(474.424,530.9751);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#5599FF").s().p("AhHAJIh9jFQgBgCAygEIBjgJIAGAAIB3CvQB4CuAAABIiQA5IAAAAIh8jDg");
	this.shape_266.setTransform(474.424,530.9751);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgpA1QgQgIgJgNQgNgUAJgXQAKgYAagOQAagNAYADQAYADATARQALAKACAFQACAFAAAOQAAALgCAGQgCAHgHAIQgSAYgfAHQgeAIgZgNg");
	this.shape_267.setTransform(491.0538,555.642);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFE6D5").s().p("AgpA1QgQgIgJgNQgNgUAJgXQAKgYAagOQAagNAYADQAYADATARQALAKACAFQACAFAAAOQAAALgCAGQgCAHgHAIQgSAYgfAHQgLADgKAAQgSAAgQgIg");
	this.shape_268.setTransform(491.0538,555.642);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQggAQghgMg");
	this.shape_269.setTransform(349.3303,556.6286);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFE6D5").s().p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQgSAJgTAAQgOAAgOgFg");
	this.shape_270.setTransform(349.3303,556.6286);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("Atdl1IgHBuQgHCHABB1QAEF2BYBAQB0BVIkALQDlAFDYgNQDdgOB6gbQBUgTAzhIQApg6ARhYQANg/AAhIQgEgYgDgZQgHg0gCgkQgEh/gEhNQgCgoABhDQABhAgBgbIgFhe");
	this.shape_271.setTransform(417.8438,459.7256);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AASBDQAigIATgaQATgZgHgbQgIgdgdgNQgdgNgiAIQgiAIgTAaQgTAaAHAaQAHAdAeANQAdANAigIg");
	this.shape_272.setTransform(491.1131,555.65);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AAShCQAiAIATAaQATAagHAbQgHAbgeAOQgdAOgigJQgigIgTgaQgTgaAHgbQAHgcAegNQAdgOAiAJg");
	this.shape_273.setTransform(349.325,556.625);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJkcIB2IaICjkGIHjAEICtEHIBqoi");
	this.shape_274.setTransform(419.278,604.1807);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("AlOlDImJKDIWvgKImPp3");
	this.shape_275.setTransform(420.2828,543.4026);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#5599FF").s().p("AlOlBIKXACIGPJ4I2vAJg");
	this.shape_276.setTransform(420.275,543.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238}]},111).to({state:[{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238}]},2).to({state:[]},1).wait(1050));

	// hairline
	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("Ap3DiQGjgYDshpQDshpBSg7QBSg8BdgmQBdglAKgX");
	this.shape_277.setTransform(-143.0468,402.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("Ap3DiQGjgYDshpQDshpBSg7QBSg8BdglQBdgmAKgW");
	this.shape_278.setTransform(-121.3468,403.15);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("Ap3DhQGjgXDshqQDshpBSg7QBSg7BdgmQBdglAKgX");
	this.shape_279.setTransform(-103.7468,402.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("Ap3DiQGjgYDshpQDshpBSg7QA4gpA9geQAUgKAUgJQAJgEAJgEQBdglAKgX");
	this.shape_280.setTransform(-62.5968,404.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("Ap3DhQF2gVDkhWQAVgHASgIQAHgDAHgEQDshpBSg7QBSg7BdgmQBdglAKgX");
	this.shape_281.setTransform(-13.6969,403.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("Ap3DiQC0gKCSgZQAUgEAUgEQCpggB4g3QDshoBSg8QBSg7BdgmQBdglAKgX");
	this.shape_282.setTransform(13.9534,402.55);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("ApxDiQAVgCAVgBQAUgBAUgCQFpgdDUhfQDshoBSg8QBSg7BdgmQBdglAKgX");
	this.shape_283.setTransform(41.725,408.75);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("Ap3DiQGjgYDshqQDshoBSg8QBSg7BdgmQBdglAKgX");
	this.shape_284.setTransform(75.7532,408.75);
	this.shape_284._off = true;

	this.instance_34 = new lib.Tween209("synched",0);
	this.instance_34.setTransform(386.4,403.85,0.9999,0.9999,-3.9537,0,0,0.5,0.8);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_277,p:{x:-143.0468,y:402.7}}]},23).to({state:[{t:this.shape_278,p:{x:-121.3468,y:403.15}}]},6).to({state:[{t:this.shape_279,p:{x:-103.7468,y:402.6}}]},3).to({state:[{t:this.shape_278,p:{x:-80.5968,y:402.65}}]},4).to({state:[{t:this.shape_280}]},3).to({state:[{t:this.shape_281}]},2).to({state:[{t:this.shape_282}]},3).to({state:[{t:this.shape_283}]},2).to({state:[{t:this.shape_284}]},2).to({state:[{t:this.shape_277,p:{x:84.1532,y:404.2}}]},1).to({state:[{t:this.shape_279,p:{x:121.5032,y:403.1}}]},2).to({state:[{t:this.shape_284}]},3).to({state:[{t:this.shape_284}]},2).to({state:[{t:this.shape_284}]},2).to({state:[{t:this.shape_284}]},2).to({state:[{t:this.shape_278,p:{x:250.6532,y:401.4}}]},2).to({state:[{t:this.shape_284}]},2).to({state:[{t:this.shape_277,p:{x:295.9532,y:404.2}}]},2).to({state:[{t:this.shape_279,p:{x:331.5032,y:403.1}}]},2).to({state:[{t:this.shape_284}]},2).to({state:[{t:this.shape_278,p:{x:374.3032,y:401.4}}]},2).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},32).to({state:[{t:this.instance_34}]},1).to({state:[]},1).wait(1053));
	this.timeline.addTween(cjs.Tween.get(this.shape_284).wait(48).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:161.5032,y:402.55},0).wait(2).to({x:191.8032,y:408.75},0).wait(2).to({x:211.8032},0).wait(2).to({x:228.0032,y:402.55},0).to({_off:true},2).wait(2).to({_off:false,x:280.6032,y:408.75},0).to({_off:true},2).wait(4).to({_off:false,x:348.4532,y:402.55},0).to({_off:true},2).wait(1092));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(74).to({_off:false},0).wait(1).to({regX:0.8,regY:1,scaleX:0.9998,scaleY:0.9998,rotation:-6.9222,x:385.7,y:404.45},0).wait(1).to({regX:0.6,regY:0.7,rotation:-10.3908,x:379.55,y:411.45},0).wait(1).to({regX:0.3,regY:0.6,scaleX:0.9997,scaleY:0.9997,rotation:-16.5857,x:368.45,y:421.35},0).wait(32).to({startPosition:0},0).wait(1).to({regX:0.8,regY:1,scaleX:0.9998,scaleY:0.9998,rotation:-1.5856,x:395,y:406.1},0).to({_off:true},1).wait(1053));

	// hairline2
	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("ADwFKQgEkSgPg5QgQg5hUhgQhUhgkdhC");
	this.shape_285.setTransform(-57.1505,412.6453);
	this.shape_285._off = true;

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("ADwFKQgDjIgJhVQgDgfgEgPQgIgcgZgnQgZgmgqgwQhUhgkdhC");
	this.shape_286.setTransform(-35.4505,413.0953);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("ADwFKQgEkSgPg5QgQg5hUhgQgZgdgsgaQgSgLgWgLQhggvikgm");
	this.shape_287.setTransform(-17.8512,412.5453);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("ADwFKQgEkSgPg5QgQg5hUhgQhKhUjhg9QgUgFgUgFQgPgEgPgD");
	this.shape_288.setTransform(5.2983,412.5953);

	this.instance_35 = new lib.Tween211("synched",0);
	this.instance_35.setTransform(472.7,408.2,0.9997,0.9997,-3.9533,0,0,0.7,1.1);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_285}]},23).to({state:[{t:this.shape_286}]},6).to({state:[{t:this.shape_287}]},3).to({state:[{t:this.shape_288}]},4).to({state:[{t:this.shape_285}]},3).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},3).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},3).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.shape_285}]},2).to({state:[{t:this.instance_35}]},2).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},32).to({state:[{t:this.instance_35}]},1).to({state:[]},1).wait(1053));
	this.timeline.addTween(cjs.Tween.get(this.shape_285).wait(23).to({_off:false},0).to({_off:true},6).wait(10).to({_off:false,x:23.2995,y:414.1453},0).wait(2).to({x:72.1995,y:413.0453},0).wait(3).to({x:99.8495,y:412.4953},0).wait(2).to({x:128.1995,y:418.6953},0).wait(2).to({x:161.6495},0).wait(1).to({x:170.0495,y:414.1453},0).wait(2).to({x:207.3995,y:413.0453},0).wait(3).to({x:247.3995,y:412.4953},0).wait(2).to({x:277.6995,y:418.6953},0).wait(2).to({x:297.6995},0).wait(2).to({x:313.8995,y:412.4953},0).wait(2).to({x:336.5495,y:411.3453},0).wait(2).to({x:366.4995,y:418.6953},0).wait(2).to({x:381.8495,y:414.1453},0).wait(2).to({x:417.3995,y:413.0453},0).wait(2).to({x:434.3495,y:412.4953},0).wait(2).to({x:460.1995,y:411.3453},0).to({_off:true},2).wait(1090));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(74).to({_off:false},0).wait(1).to({regX:0.8,regY:1,rotation:-6.9215,x:471.5,y:404.1},0).wait(1).to({regX:1,regY:1.1,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905,x:465.65,y:406.3},0).wait(1).to({regY:0.9,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852,x:454.05,y:406.95},0).wait(32).to({startPosition:0},0).wait(1).to({regX:1.4,regY:0.5,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849,x:481.35,y:413.55},0).to({_off:true},1).wait(1053));

	// blackHole
	this.instance_36 = new lib.Tween203("synched",0);
	this.instance_36.setTransform(484.65,420.05,0.9997,0.9997,-3.9533,0,0,1.2,1.2);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(74).to({_off:false},0).wait(1).to({regX:0.8,regY:0.8,rotation:-6.9215,x:483.75,y:412.45},0).wait(1).to({regX:0.7,regY:1.1,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905,x:477.85,y:412.05},0).wait(1).to({regX:1.2,regY:1.2,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852,x:463.05,y:406.4},0).wait(32).to({startPosition:0},0).wait(1).to({regX:1.4,regY:1,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849,x:490.35,y:415.65},0).to({_off:true},1).wait(1053));

	// iris
	this.instance_37 = new lib.Tween205("synched",0);
	this.instance_37.setTransform(479.75,420.9,0.9997,0.9997,-3.9533,0,0,0.9,1.4);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(74).to({_off:false},0).wait(1).to({regX:0.8,regY:1.1,rotation:-6.9215,x:478.95,y:414.95},0).wait(1).to({regX:0.7,regY:0.9,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905,x:473,y:413.8},0).wait(1).to({regX:1.2,regY:1.1,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852,x:459.2,y:411.9},0).wait(32).to({startPosition:0},0).wait(1).to({regX:1.5,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849,x:485.3,y:420},0).to({_off:true},1).wait(1053));

	// eye
	this.instance_38 = new lib.Tween207("synched",0);
	this.instance_38.setTransform(475.3,421.45,0.9997,0.9997,-3.9533,0,0,1.2,0.7);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(74).to({_off:false},0).wait(1).to({regX:1.1,rotation:-6.9215,x:474.75,y:417.2},0).wait(1).to({regX:1,regY:1.3,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905,x:469.45,y:419.65},0).wait(1).to({regX:0.8,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852,x:459.1,y:420.1},0).wait(32).to({startPosition:0},0).wait(1).to({regX:1.2,regY:0.9,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849,x:483.05,y:427.55},0).to({_off:true},1).wait(1053));

	// Layer_1
	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AgmjSID2FqIiYA6IkGmVg");
	this.shape_289.setTransform(-64.155,533.6734);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(1.1,0,0,11.3).p("AAijYIjwFtIChBDID7mig");
	this.shape_290.setTransform(-171.3991,534.682);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("ARagNQgIgDhDgNQhDgMgcgEQjUgdj2gFQiNgDh0AEQhxAEikANQi1AOiNASQiLARlxAzIjpAhQgUABEVAFQDjAEA/gBQA6gCE1gRIT5hJQAngCgBAAg");
	this.shape_291.setTransform(-120.6646,374.6707);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#D35F5F").s().p("AtWBOQkVgFAUgBIDpghQFxgzCLgRQCNgSC1gOQCkgNBxgEQB0gECNADQD2AFDUAdIBfAQQBDANAIADIgmACIz5BJQk1ARg6ACIgqAAQhOAAiqgDg");
	this.shape_292.setTransform(-120.6646,374.6707);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("AROCgQACgRAPgaQAPgbAmgzQAng0AQgbQAPgbACgSQABgRgbgUQhchCkLgwQkLgwlBgJQhcgCiHACQg0ABijANQiiAMgvAHQiRAWhvAaQhxAahkAkQjjBPiLB3QgWATgEAIQgEAIAEAQQAHAcAoAyQAnAyA4A1IAQAPIFIgvQEggpCYgTQCTgSChgPQI/g2HbA/QAxAGAFAAQAFAAAAgKg");
	this.shape_293.setTransform(-131.7402,351.7199);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#D35F5F").s().p("AxLEYQg4g1gngyQgogygHgcQgEgQAEgIQAEgIAWgTQCLh3DjhPQBkgkBxgaQBvgaCRgWQAvgHCigMQCjgNA0gBQCHgCBcACQFBAJELAwQELAwBcBCQAbAUgBARQgCASgPAbQgQAbgnA0QgmAzgPAbQgPAagCARQAAAKgFAAQgFAAgxgGQnbg/o/A2QihAPiTASQiYATkgApIlIAvg");
	this.shape_294.setTransform(-131.7402,351.7056);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#D35F5F").ss(0.3,0,0,4).p("AAoASQAbgRgPgPQgPgQgnADQgVACgQAKQgQAJgBALQgCARAmAFQAlAFAXgOg");
	this.shape_295.setTransform(-134.4152,317.6289);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#D35F5F").s().p("AgUAbQgmgFACgRQABgLAQgJQAQgKAVgCQAngDAPAQQAPAPgbARQgRAKgXAAIgUgBg");
	this.shape_296.setTransform(-134.4152,317.6289);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(0.4,0,0,4).p("AgCgoQgeADgTANQgUAOABAQQACARAVAKQAWAKAcgCQAegCATgOQAUgOgBgQQgCgRgVgKQgWgKgcACg");
	this.shape_297.setTransform(-134.375,317.626);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgvAhQgVgKgCgRQgBgQAUgOQATgNAegDQAcgCAWAKQAVAKACARQABAQgUAOQgTAOgeACIgKAAQgWAAgSgIg");
	this.shape_298.setTransform(-134.375,317.626);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(0.4,0,0,4).p("ARLgmQoChLppA4QjbAUk8AsQliAzixAY");
	this.shape_299.setTransform(-129.8967,373.8759);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("Ao3AHQE8gsDbgUQJpg4ICBLMgiVAB4QCygYFhgzg");
	this.shape_300.setTransform(-129.9,373.8781);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(0.4,0,0,4).p("APThFIDKAnI7oBkIpmgK");
	this.shape_301.setTransform(-119.098,376.9296);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AynA8MAiEgCBIDLAnI7pBkg");
	this.shape_302.setTransform(-120.1,376.925);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(0.4,0,0,4).p("Aw1E2Qg4gygxg4QhihxAlgjQDNi9GZheQFdhRG5ABQGGAAFCA7QE5A6A9BNQARAWgYAuQgOAcguA8QguA8gMAZQgVApAWAP");
	this.shape_303.setTransform(-131.7796,352.0872);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AyeDLQhihxAlgjQDNi9GZheQFdhRG5ABQGGAAFCA7QE5A7A9BMQARAWgYAuQgOAcguA8QguA8gMAZQgVApAWAQMgiYAB9Qg4gygxg4g");
	this.shape_304.setTransform(-131.7796,352.1498);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FF8080").s().p("AgyAkQgVgPAAgVQAAgUAVgPQAVgPAdAAQAeAAAVAPQAVAPAAAUQAAAVgVAPQgVAPgeAAQgdAAgVgPg");
	this.shape_305.setTransform(-36.575,451.475);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgnAvQgRgUAAgbQAAgaARgTQARgUAWAAQAYAAAQAUQARATAAAaQAAAbgRAUQgQATgYAAQgWAAgRgTg");
	this.shape_306.setTransform(-46.925,425.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#004455").s().p("AhSBbQgiglAAg2QAAg0AigmQAigmAwAAQAxAAAiAmQAiAmAAA0QAAA1giAmQgiAmgxAAQgvAAgjgmg");
	this.shape_307.setTransform(-51.625,426.075);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AAAjcQBLAAA0BBQA1BAAABbQAABcg1BBQg0BAhLAAQhJAAg1hAQg0hBAAhcQAAhbA0hAQA1hBBJAAg");
	this.shape_308.setTransform(-56.4,426.925);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("Ah+CdQg1hBAAhcQAAhbA1hAQA0hBBKAAQBKAAA1BBQA1BAgBBbQABBcg1BBQg1BAhKAAQhKAAg0hAg");
	this.shape_309.setTransform(-56.4,426.925);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFE6D5").s().p("AjsKPQjhgKiPgbQiQgaglgmQgbgbgThFQgShGgIhnQgKiBAGhhIAIinQAFhlACgCQABgCAygFQCNgQB/gfQCBgeCHg0QBdgiBlgwQBmgwC2heICohWIAjAFQCjAYBoBBQAWAPAdAdQAiAjAUAkQAUAkAOA1QAMAwAEA0QAFA2ACCPQACCAADAzQADAzAHAtQADAYgBAxQgCAxgGAiQgMBBgdA5QgWArgkAeQgkAegrAMQg6AQh6ANQh7AOicAGQhIADicAAQigAAhDgDg");
	this.shape_310.setTransform(-120.04,448.15);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("Ah7C0IhJgeQgBAAB3iyQBPh3AWggQAUgcADAAICNAMIAIACIj1GQQAAABhJgcg");
	this.shape_311.setTransform(-172.4004,534.6004);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#5599FF").s().p("Ah6C0IhJgeQgBAAB4iyIBliXQATgcADAAICOAMIAHACIj0GQIgBABIhJgcg");
	this.shape_312.setTransform(-172.5504,534.6004);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#5599FF").ss(0.4,0,0,11.3).p("AhHAJIh9jFQgBgCAygEIBjgJIAGAAIB3CvQB4CuAAABIiQA5QAAABh8jEg");
	this.shape_313.setTransform(-63.426,533.9251);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#5599FF").s().p("AhHAJIh9jFQgBgCAygEIBjgJIAGAAIB3CvQB4CuAAABIiQA5IAAAAIh8jDg");
	this.shape_314.setTransform(-63.426,533.9251);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgpA1QgQgIgJgNQgNgUAJgXQAKgYAagOQAagNAYADQAYADATARQALAKACAFQACAFAAAOQAAALgCAGQgCAHgHAIQgSAYgfAHQgeAIgZgNg");
	this.shape_315.setTransform(-46.7962,558.592);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFE6D5").s().p("AgpA1QgQgIgJgNQgNgUAJgXQAKgYAagOQAagNAYADQAYADATARQALAKACAFQACAFAAAOQAAALgCAGQgCAHgHAIQgSAYgfAHQgLADgKAAQgSAAgQgIg");
	this.shape_316.setTransform(-46.7962,558.592);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#FFE6D5").ss(0.7,0,0,11.3).p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQggAQghgMg");
	this.shape_317.setTransform(-188.5197,559.5786);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFE6D5").s().p("AgWA4QgggLgOgbQgNgaAPgXQAagoA5AQQA6AQAAAuQAAAdggAQQgSAJgTAAQgOAAgOgFg");
	this.shape_318.setTransform(-188.5197,559.5786);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("Atdl1IgHBuQgHCHABB1QAEF2BYBAQB0BVIkALQDlAFDYgNQDdgOB6gbQBUgTAzhIQApg6ARhYQANg/AAhIQgEgYgDgZQgHg0gCgkQgEh/gEhNQgCgoABhDQABhAgBgbIgFhe");
	this.shape_319.setTransform(-120.0062,462.6756);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AASBDQAigIATgaQATgZgHgcQgIgcgdgNQgdgOgiAJQgiAIgTAaQgTAaAHAaQAHAcAeAOQAdANAigIg");
	this.shape_320.setTransform(-46.7369,558.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(1.4,0,0,11.3).p("AAShCQAiAIATAaQATAagHAbQgHAbgeAOQgdAOgigJQgigIgTgaQgTgaAHgbQAHgcAegNQAdgOAiAJg");
	this.shape_321.setTransform(-188.525,559.575);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(1.7,0,0,11.3).p("AlOlDImJKDIWvgKImPp3");
	this.shape_322.setTransform(-117.5672,546.3526);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#5599FF").s().p("AlOlBIKXACIGPJ3I2vAKg");
	this.shape_323.setTransform(-117.575,546.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_323,p:{x:-117.575,y:546.15}},{t:this.shape_322,p:{x:-117.5672,y:546.3526}},{t:this.shape_321,p:{x:-188.525,y:559.575}},{t:this.shape_320,p:{x:-46.7369,y:558.6}},{t:this.shape_319,p:{x:-120.0062,y:462.6756,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:-188.5197,y:559.5786}},{t:this.shape_317,p:{x:-188.5197,y:559.5786}},{t:this.shape_316,p:{x:-46.7962,y:558.592}},{t:this.shape_315,p:{x:-46.7962,y:558.592}},{t:this.shape_314,p:{x:-63.426,y:533.9251}},{t:this.shape_313,p:{x:-63.426,y:533.9251}},{t:this.shape_312,p:{x:-172.5504,y:534.6004}},{t:this.shape_311,p:{x:-172.4004,y:534.6004}},{t:this.shape_310,p:{x:-120.04,y:448.15,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:-56.4,y:426.925}},{t:this.shape_308,p:{x:-56.4,y:426.925}},{t:this.shape_307,p:{x:-51.625,y:426.075}},{t:this.shape_306,p:{x:-46.925,y:425.7}},{t:this.shape_305,p:{x:-36.575,y:451.475,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:-131.7796,y:352.1498,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:-131.7796,y:352.0872,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:-120.1,y:376.925,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:-119.098,y:376.9296,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:-129.9,y:373.8781,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:-129.8967,y:373.8759,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:-134.375,y:317.626,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:-134.375,y:317.626,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:-134.4152,y:317.6289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:-134.4152,y:317.6289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:-131.7402,y:351.7056,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:-131.7402,y:351.7199,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:-120.6646,y:374.6707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:-120.6646,y:374.6707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:-171.3991,y:534.682}},{t:this.shape_289,p:{x:-64.155,y:533.6734}}]},23).to({state:[{t:this.shape_323,p:{x:-95.875,y:546.6}},{t:this.shape_322,p:{x:-95.8672,y:546.8026}},{t:this.shape_321,p:{x:-166.825,y:560.025}},{t:this.shape_320,p:{x:-25.0369,y:559.05}},{t:this.shape_319,p:{x:-98.3062,y:463.1256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:-166.8197,y:560.0286}},{t:this.shape_317,p:{x:-166.8197,y:560.0286}},{t:this.shape_316,p:{x:-25.0962,y:559.042}},{t:this.shape_315,p:{x:-25.0962,y:559.042}},{t:this.shape_314,p:{x:-41.726,y:534.3751}},{t:this.shape_313,p:{x:-41.726,y:534.3751}},{t:this.shape_312,p:{x:-150.8504,y:535.0504}},{t:this.shape_311,p:{x:-150.7004,y:535.0504}},{t:this.shape_310,p:{x:-98.34,y:448.6,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:-34.7,y:427.375}},{t:this.shape_308,p:{x:-34.7,y:427.375}},{t:this.shape_307,p:{x:-29.925,y:426.525}},{t:this.shape_306,p:{x:-25.225,y:426.15}},{t:this.shape_305,p:{x:-14.875,y:451.925,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:-110.0796,y:352.5998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:-110.0796,y:352.5372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:-98.4,y:377.375,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:-97.398,y:377.3796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:-108.2,y:374.3281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:-108.1967,y:374.3259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:-112.675,y:318.076,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:-112.675,y:318.076,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:-112.7152,y:318.0789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:-112.7152,y:318.0789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:-110.0402,y:352.1556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:-110.0402,y:352.1699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:-98.9646,y:375.1207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:-98.9646,y:375.1207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:-149.6991,y:535.132}},{t:this.shape_289,p:{x:-42.455,y:534.1234}}]},6).to({state:[{t:this.shape_323,p:{x:-78.275,y:546.05}},{t:this.shape_322,p:{x:-78.2672,y:546.2526}},{t:this.shape_321,p:{x:-149.225,y:559.475}},{t:this.shape_320,p:{x:-7.4369,y:558.5}},{t:this.shape_319,p:{x:-80.7062,y:462.5756,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:-149.2197,y:559.4786}},{t:this.shape_317,p:{x:-149.2197,y:559.4786}},{t:this.shape_316,p:{x:-7.4962,y:558.492}},{t:this.shape_315,p:{x:-7.4962,y:558.492}},{t:this.shape_314,p:{x:-24.126,y:533.8251}},{t:this.shape_313,p:{x:-24.126,y:533.8251}},{t:this.shape_312,p:{x:-133.2504,y:534.5004}},{t:this.shape_311,p:{x:-133.1004,y:534.5004}},{t:this.shape_310,p:{x:-80.74,y:448.05,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:-17.1,y:426.825}},{t:this.shape_308,p:{x:-17.1,y:426.825}},{t:this.shape_307,p:{x:-12.325,y:425.975}},{t:this.shape_306,p:{x:-7.625,y:425.6}},{t:this.shape_305,p:{x:2.725,y:451.375,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:-92.4796,y:352.0498,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:-92.4796,y:351.9872,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:-80.8,y:376.825,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:-79.798,y:376.8296,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:-90.6,y:373.7781,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:-90.5967,y:373.7759,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:-95.075,y:317.526,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:-95.075,y:317.526,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:-95.1152,y:317.5289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:-95.1152,y:317.5289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:-92.4402,y:351.6056,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:-92.4402,y:351.6199,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:-81.3646,y:374.5707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:-81.3646,y:374.5707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:-132.0991,y:534.582}},{t:this.shape_289,p:{x:-24.855,y:533.5734}}]},3).to({state:[{t:this.shape_323,p:{x:-55.125,y:546.1}},{t:this.shape_322,p:{x:-55.1172,y:546.3026}},{t:this.shape_321,p:{x:-126.075,y:559.525}},{t:this.shape_320,p:{x:15.7131,y:558.55}},{t:this.shape_319,p:{x:-57.5562,y:462.6256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:-126.0697,y:559.5286}},{t:this.shape_317,p:{x:-126.0697,y:559.5286}},{t:this.shape_316,p:{x:15.6538,y:558.542}},{t:this.shape_315,p:{x:15.6538,y:558.542}},{t:this.shape_314,p:{x:-0.976,y:533.8751}},{t:this.shape_313,p:{x:-0.976,y:533.8751}},{t:this.shape_312,p:{x:-110.1004,y:534.5504}},{t:this.shape_311,p:{x:-109.9504,y:534.5504}},{t:this.shape_310,p:{x:-57.59,y:448.1,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:6.05,y:426.875}},{t:this.shape_308,p:{x:6.05,y:426.875}},{t:this.shape_307,p:{x:10.825,y:426.025}},{t:this.shape_306,p:{x:15.525,y:425.65}},{t:this.shape_305,p:{x:25.875,y:451.425,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:-69.3296,y:352.0998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:-69.3296,y:352.0372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:-57.65,y:376.875,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:-56.648,y:376.8796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:-67.45,y:373.8281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:-67.4467,y:373.8259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:-71.925,y:317.576,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:-71.925,y:317.576,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:-71.9652,y:317.5789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:-71.9652,y:317.5789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:-69.2902,y:351.6556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:-69.2902,y:351.6699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:-58.2146,y:374.6207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:-58.2146,y:374.6207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:-108.9491,y:534.632}},{t:this.shape_289,p:{x:-1.705,y:533.6234}}]},4).to({state:[{t:this.shape_323,p:{x:-37.125,y:547.65}},{t:this.shape_322,p:{x:-37.1172,y:547.8526}},{t:this.shape_321,p:{x:-108.075,y:561.075}},{t:this.shape_320,p:{x:33.7131,y:560.1}},{t:this.shape_319,p:{x:-39.5562,y:464.1756,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:-108.0697,y:561.0786}},{t:this.shape_317,p:{x:-108.0697,y:561.0786}},{t:this.shape_316,p:{x:33.6538,y:560.092}},{t:this.shape_315,p:{x:33.6538,y:560.092}},{t:this.shape_314,p:{x:17.024,y:535.4251}},{t:this.shape_313,p:{x:17.024,y:535.4251}},{t:this.shape_312,p:{x:-92.1004,y:536.1004}},{t:this.shape_311,p:{x:-91.9504,y:536.1004}},{t:this.shape_310,p:{x:-39.59,y:449.65,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:24.05,y:428.425}},{t:this.shape_308,p:{x:24.05,y:428.425}},{t:this.shape_307,p:{x:28.825,y:427.575}},{t:this.shape_306,p:{x:33.525,y:427.2}},{t:this.shape_305,p:{x:43.875,y:452.975,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:-51.3296,y:353.6498,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:-51.3296,y:353.5872,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:-39.65,y:378.425,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:-38.648,y:378.4296,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:-49.45,y:375.3781,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:-49.4467,y:375.3759,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:-53.925,y:319.126,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:-53.925,y:319.126,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:-53.9652,y:319.1289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:-53.9652,y:319.1289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:-51.2902,y:353.2056,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:-51.2902,y:353.2199,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:-40.2146,y:376.1707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:-40.2146,y:376.1707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:-90.9491,y:536.182}},{t:this.shape_289,p:{x:16.295,y:535.1734}}]},3).to({state:[{t:this.shape_323,p:{x:11.775,y:546.55}},{t:this.shape_322,p:{x:11.7828,y:546.7526}},{t:this.shape_321,p:{x:-59.175,y:559.975}},{t:this.shape_320,p:{x:82.6131,y:559}},{t:this.shape_319,p:{x:9.3438,y:463.0756,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:-59.1697,y:559.9786}},{t:this.shape_317,p:{x:-59.1697,y:559.9786}},{t:this.shape_316,p:{x:82.5538,y:558.992}},{t:this.shape_315,p:{x:82.5538,y:558.992}},{t:this.shape_314,p:{x:65.924,y:534.3251}},{t:this.shape_313,p:{x:65.924,y:534.3251}},{t:this.shape_312,p:{x:-43.2004,y:535.0004}},{t:this.shape_311,p:{x:-43.0504,y:535.0004}},{t:this.shape_310,p:{x:9.31,y:448.55,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:72.95,y:427.325}},{t:this.shape_308,p:{x:72.95,y:427.325}},{t:this.shape_307,p:{x:77.725,y:426.475}},{t:this.shape_306,p:{x:82.425,y:426.1}},{t:this.shape_305,p:{x:92.775,y:451.875,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:-2.4296,y:352.5498,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:-2.4296,y:352.4872,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:9.25,y:377.325,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:10.252,y:377.3296,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:-0.55,y:374.2781,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:-0.5467,y:374.2759,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:-5.025,y:318.026,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:-5.025,y:318.026,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:-5.0652,y:318.0289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:-5.0652,y:318.0289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:-2.3902,y:352.1056,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:-2.3902,y:352.1199,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:8.6854,y:375.0707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:8.6854,y:375.0707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:-42.0491,y:535.082}},{t:this.shape_289,p:{x:65.195,y:534.0734}}]},2).to({state:[{t:this.shape_323,p:{x:39.425,y:546}},{t:this.shape_322,p:{x:39.4328,y:546.2026}},{t:this.shape_321,p:{x:-31.525,y:559.425}},{t:this.shape_320,p:{x:110.2631,y:558.45}},{t:this.shape_319,p:{x:36.9938,y:462.5256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:-31.5197,y:559.4286}},{t:this.shape_317,p:{x:-31.5197,y:559.4286}},{t:this.shape_316,p:{x:110.2038,y:558.442}},{t:this.shape_315,p:{x:110.2038,y:558.442}},{t:this.shape_314,p:{x:93.574,y:533.7751}},{t:this.shape_313,p:{x:93.574,y:533.7751}},{t:this.shape_312,p:{x:-15.5504,y:534.4504}},{t:this.shape_311,p:{x:-15.4004,y:534.4504}},{t:this.shape_310,p:{x:36.96,y:448,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:100.6,y:426.775}},{t:this.shape_308,p:{x:100.6,y:426.775}},{t:this.shape_307,p:{x:105.375,y:425.925}},{t:this.shape_306,p:{x:110.075,y:425.55}},{t:this.shape_305,p:{x:120.425,y:451.325,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:25.2204,y:351.9998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:25.2204,y:351.9372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:36.9,y:376.775,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:37.902,y:376.7796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:27.1,y:373.7281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:27.1033,y:373.7259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:22.625,y:317.476,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:22.625,y:317.476,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:22.5848,y:317.4789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:22.5848,y:317.4789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:25.2598,y:351.5556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:25.2598,y:351.5699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:36.3354,y:374.5207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:36.3354,y:374.5207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:-14.3991,y:534.532}},{t:this.shape_289,p:{x:92.845,y:533.5234}}]},3).to({state:[{t:this.shape_323,p:{x:67.775,y:552.2}},{t:this.shape_322,p:{x:67.7828,y:552.4026}},{t:this.shape_321,p:{x:-3.175,y:565.625}},{t:this.shape_320,p:{x:138.6131,y:564.65}},{t:this.shape_319,p:{x:65.3438,y:468.7256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:-3.1697,y:565.6286}},{t:this.shape_317,p:{x:-3.1697,y:565.6286}},{t:this.shape_316,p:{x:138.5538,y:564.642}},{t:this.shape_315,p:{x:138.5538,y:564.642}},{t:this.shape_314,p:{x:121.924,y:539.9751}},{t:this.shape_313,p:{x:121.924,y:539.9751}},{t:this.shape_312,p:{x:12.7996,y:540.6504}},{t:this.shape_311,p:{x:12.9496,y:540.6504}},{t:this.shape_310,p:{x:65.31,y:454.2,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:128.95,y:432.975}},{t:this.shape_308,p:{x:128.95,y:432.975}},{t:this.shape_307,p:{x:133.725,y:432.125}},{t:this.shape_306,p:{x:138.425,y:431.75}},{t:this.shape_305,p:{x:148.775,y:457.525,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:53.5704,y:358.1998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:53.5704,y:358.1372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:65.25,y:382.975,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:66.252,y:382.9796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:55.45,y:379.9281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:55.4533,y:379.9259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:50.975,y:323.676,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:50.975,y:323.676,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:50.9348,y:323.6789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:50.9348,y:323.6789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:53.6098,y:357.7556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:53.6098,y:357.7699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:64.6854,y:380.7207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:64.6854,y:380.7207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:13.9509,y:540.732}},{t:this.shape_289,p:{x:121.195,y:539.7234}}]},2).to({state:[{t:this.shape_323,p:{x:101.225,y:552.2}},{t:this.shape_322,p:{x:101.2328,y:552.4026}},{t:this.shape_321,p:{x:30.275,y:565.625}},{t:this.shape_320,p:{x:172.0631,y:564.65}},{t:this.shape_319,p:{x:98.7938,y:468.7256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:30.2803,y:565.6286}},{t:this.shape_317,p:{x:30.2803,y:565.6286}},{t:this.shape_316,p:{x:172.0038,y:564.642}},{t:this.shape_315,p:{x:172.0038,y:564.642}},{t:this.shape_314,p:{x:155.374,y:539.9751}},{t:this.shape_313,p:{x:155.374,y:539.9751}},{t:this.shape_312,p:{x:46.2496,y:540.6504}},{t:this.shape_311,p:{x:46.3996,y:540.6504}},{t:this.shape_310,p:{x:98.76,y:454.2,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:162.4,y:432.975}},{t:this.shape_308,p:{x:162.4,y:432.975}},{t:this.shape_307,p:{x:167.175,y:432.125}},{t:this.shape_306,p:{x:171.875,y:431.75}},{t:this.shape_305,p:{x:182.225,y:457.525,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:87.0204,y:358.1998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:87.0204,y:358.1372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:98.7,y:382.975,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:99.702,y:382.9796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:88.9,y:379.9281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:88.9033,y:379.9259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:84.425,y:323.676,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:84.425,y:323.676,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:84.3848,y:323.6789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:84.3848,y:323.6789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:87.0598,y:357.7556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:87.0598,y:357.7699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:98.1354,y:380.7207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:98.1354,y:380.7207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:47.4009,y:540.732}},{t:this.shape_289,p:{x:154.645,y:539.7234}}]},2).to({state:[{t:this.shape_323,p:{x:109.625,y:547.65}},{t:this.shape_322,p:{x:109.6328,y:547.8526}},{t:this.shape_321,p:{x:38.675,y:561.075}},{t:this.shape_320,p:{x:180.4631,y:560.1}},{t:this.shape_319,p:{x:107.1938,y:464.1756,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:38.6803,y:561.0786}},{t:this.shape_317,p:{x:38.6803,y:561.0786}},{t:this.shape_316,p:{x:180.4038,y:560.092}},{t:this.shape_315,p:{x:180.4038,y:560.092}},{t:this.shape_314,p:{x:163.774,y:535.4251}},{t:this.shape_313,p:{x:163.774,y:535.4251}},{t:this.shape_312,p:{x:54.6496,y:536.1004}},{t:this.shape_311,p:{x:54.7996,y:536.1004}},{t:this.shape_310,p:{x:107.16,y:449.65,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:170.8,y:428.425}},{t:this.shape_308,p:{x:170.8,y:428.425}},{t:this.shape_307,p:{x:175.575,y:427.575}},{t:this.shape_306,p:{x:180.275,y:427.2}},{t:this.shape_305,p:{x:190.625,y:452.975,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:95.4204,y:353.6498,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:95.4204,y:353.5872,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:107.1,y:378.425,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:108.102,y:378.4296,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:97.3,y:375.3781,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:97.3033,y:375.3759,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:92.825,y:319.126,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:92.825,y:319.126,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:92.7848,y:319.1289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:92.7848,y:319.1289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:95.4598,y:353.2056,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:95.4598,y:353.2199,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:106.5354,y:376.1707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:106.5354,y:376.1707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:55.8009,y:536.182}},{t:this.shape_289,p:{x:163.045,y:535.1734}}]},1).to({state:[{t:this.shape_323,p:{x:146.975,y:546.55}},{t:this.shape_322,p:{x:146.9828,y:546.7526}},{t:this.shape_321,p:{x:76.025,y:559.975}},{t:this.shape_320,p:{x:217.8131,y:559}},{t:this.shape_319,p:{x:144.5438,y:463.0756,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:76.0303,y:559.9786}},{t:this.shape_317,p:{x:76.0303,y:559.9786}},{t:this.shape_316,p:{x:217.7538,y:558.992}},{t:this.shape_315,p:{x:217.7538,y:558.992}},{t:this.shape_314,p:{x:201.124,y:534.3251}},{t:this.shape_313,p:{x:201.124,y:534.3251}},{t:this.shape_312,p:{x:91.9996,y:535.0004}},{t:this.shape_311,p:{x:92.1496,y:535.0004}},{t:this.shape_310,p:{x:144.51,y:448.55,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:208.15,y:427.325}},{t:this.shape_308,p:{x:208.15,y:427.325}},{t:this.shape_307,p:{x:212.925,y:426.475}},{t:this.shape_306,p:{x:217.625,y:426.1}},{t:this.shape_305,p:{x:227.975,y:451.875,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:132.7704,y:352.5498,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:132.7704,y:352.4872,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:144.45,y:377.325,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:145.452,y:377.3296,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:134.65,y:374.2781,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:134.6533,y:374.2759,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:130.175,y:318.026,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:130.175,y:318.026,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:130.1348,y:318.0289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:130.1348,y:318.0289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:132.8098,y:352.1056,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:132.8098,y:352.1199,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:143.8854,y:375.0707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:143.8854,y:375.0707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:93.1509,y:535.082}},{t:this.shape_289,p:{x:200.395,y:534.0734}}]},2).to({state:[{t:this.shape_323,p:{x:186.975,y:546}},{t:this.shape_322,p:{x:186.9828,y:546.2026}},{t:this.shape_321,p:{x:116.025,y:559.425}},{t:this.shape_320,p:{x:257.8131,y:558.45}},{t:this.shape_319,p:{x:184.5438,y:462.5256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:116.0303,y:559.4286}},{t:this.shape_317,p:{x:116.0303,y:559.4286}},{t:this.shape_316,p:{x:257.7538,y:558.442}},{t:this.shape_315,p:{x:257.7538,y:558.442}},{t:this.shape_314,p:{x:241.124,y:533.7751}},{t:this.shape_313,p:{x:241.124,y:533.7751}},{t:this.shape_312,p:{x:131.9996,y:534.4504}},{t:this.shape_311,p:{x:132.1496,y:534.4504}},{t:this.shape_310,p:{x:184.51,y:448,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:248.15,y:426.775}},{t:this.shape_308,p:{x:248.15,y:426.775}},{t:this.shape_307,p:{x:252.925,y:425.925}},{t:this.shape_306,p:{x:257.625,y:425.55}},{t:this.shape_305,p:{x:267.975,y:451.325,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:172.7704,y:351.9998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:172.7704,y:351.9372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:184.45,y:376.775,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:185.452,y:376.7796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:174.65,y:373.7281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:174.6533,y:373.7259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:170.175,y:317.476,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:170.175,y:317.476,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:170.1348,y:317.4789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:170.1348,y:317.4789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:172.8098,y:351.5556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:172.8098,y:351.5699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:183.8854,y:374.5207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:183.8854,y:374.5207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:133.1509,y:534.532}},{t:this.shape_289,p:{x:240.395,y:533.5234}}]},3).to({state:[{t:this.shape_323,p:{x:217.275,y:552.2}},{t:this.shape_322,p:{x:217.2828,y:552.4026}},{t:this.shape_321,p:{x:146.325,y:565.625}},{t:this.shape_320,p:{x:288.1131,y:564.65}},{t:this.shape_319,p:{x:214.8438,y:468.7256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:146.3303,y:565.6286}},{t:this.shape_317,p:{x:146.3303,y:565.6286}},{t:this.shape_316,p:{x:288.0538,y:564.642}},{t:this.shape_315,p:{x:288.0538,y:564.642}},{t:this.shape_314,p:{x:271.424,y:539.9751}},{t:this.shape_313,p:{x:271.424,y:539.9751}},{t:this.shape_312,p:{x:162.2996,y:540.6504}},{t:this.shape_311,p:{x:162.4496,y:540.6504}},{t:this.shape_310,p:{x:214.81,y:454.2,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:278.45,y:432.975}},{t:this.shape_308,p:{x:278.45,y:432.975}},{t:this.shape_307,p:{x:283.225,y:432.125}},{t:this.shape_306,p:{x:287.925,y:431.75}},{t:this.shape_305,p:{x:298.275,y:457.525,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:203.0704,y:358.1998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:203.0704,y:358.1372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:214.75,y:382.975,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:215.752,y:382.9796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:204.95,y:379.9281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:204.9533,y:379.9259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:200.475,y:323.676,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:200.475,y:323.676,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:200.4348,y:323.6789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:200.4348,y:323.6789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:203.1098,y:357.7556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:203.1098,y:357.7699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:214.1854,y:380.7207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:214.1854,y:380.7207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:163.4509,y:540.732}},{t:this.shape_289,p:{x:270.695,y:539.7234}}]},2).to({state:[{t:this.shape_323,p:{x:237.275,y:552.2}},{t:this.shape_322,p:{x:237.2828,y:552.4026}},{t:this.shape_321,p:{x:166.325,y:565.625}},{t:this.shape_320,p:{x:308.1131,y:564.65}},{t:this.shape_319,p:{x:234.8438,y:468.7256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:166.3303,y:565.6286}},{t:this.shape_317,p:{x:166.3303,y:565.6286}},{t:this.shape_316,p:{x:308.0538,y:564.642}},{t:this.shape_315,p:{x:308.0538,y:564.642}},{t:this.shape_314,p:{x:291.424,y:539.9751}},{t:this.shape_313,p:{x:291.424,y:539.9751}},{t:this.shape_312,p:{x:182.2996,y:540.6504}},{t:this.shape_311,p:{x:182.4496,y:540.6504}},{t:this.shape_310,p:{x:234.81,y:454.2,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:298.45,y:432.975}},{t:this.shape_308,p:{x:298.45,y:432.975}},{t:this.shape_307,p:{x:303.225,y:432.125}},{t:this.shape_306,p:{x:307.925,y:431.75}},{t:this.shape_305,p:{x:318.275,y:457.525,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:223.0704,y:358.1998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:223.0704,y:358.1372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:234.75,y:382.975,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:235.752,y:382.9796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:224.95,y:379.9281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:224.9533,y:379.9259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:220.475,y:323.676,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:220.475,y:323.676,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:220.4348,y:323.6789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:220.4348,y:323.6789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:223.1098,y:357.7556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:223.1098,y:357.7699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:234.1854,y:380.7207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:234.1854,y:380.7207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:183.4509,y:540.732}},{t:this.shape_289,p:{x:290.695,y:539.7234}}]},2).to({state:[{t:this.shape_323,p:{x:253.475,y:546}},{t:this.shape_322,p:{x:253.4828,y:546.2026}},{t:this.shape_321,p:{x:182.525,y:559.425}},{t:this.shape_320,p:{x:324.3131,y:558.45}},{t:this.shape_319,p:{x:251.0438,y:462.5256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:182.5303,y:559.4286}},{t:this.shape_317,p:{x:182.5303,y:559.4286}},{t:this.shape_316,p:{x:324.2538,y:558.442}},{t:this.shape_315,p:{x:324.2538,y:558.442}},{t:this.shape_314,p:{x:307.624,y:533.7751}},{t:this.shape_313,p:{x:307.624,y:533.7751}},{t:this.shape_312,p:{x:198.4996,y:534.4504}},{t:this.shape_311,p:{x:198.6496,y:534.4504}},{t:this.shape_310,p:{x:251.01,y:448,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:314.65,y:426.775}},{t:this.shape_308,p:{x:314.65,y:426.775}},{t:this.shape_307,p:{x:319.425,y:425.925}},{t:this.shape_306,p:{x:324.125,y:425.55}},{t:this.shape_305,p:{x:334.475,y:451.325,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:239.2704,y:351.9998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:239.2704,y:351.9372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:250.95,y:376.775,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:251.952,y:376.7796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:241.15,y:373.7281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:241.1533,y:373.7259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:236.675,y:317.476,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:236.675,y:317.476,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:236.6348,y:317.4789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:236.6348,y:317.4789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:239.3098,y:351.5556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:239.3098,y:351.5699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:250.3854,y:374.5207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:250.3854,y:374.5207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:199.6509,y:534.532}},{t:this.shape_289,p:{x:306.895,y:533.5234}}]},2).to({state:[{t:this.shape_323,p:{x:276.125,y:544.85}},{t:this.shape_322,p:{x:276.1328,y:545.0526}},{t:this.shape_321,p:{x:205.175,y:558.275}},{t:this.shape_320,p:{x:346.9631,y:557.3}},{t:this.shape_319,p:{x:273.6938,y:461.3756,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:205.1803,y:558.2786}},{t:this.shape_317,p:{x:205.1803,y:558.2786}},{t:this.shape_316,p:{x:346.9038,y:557.292}},{t:this.shape_315,p:{x:346.9038,y:557.292}},{t:this.shape_314,p:{x:330.274,y:532.6251}},{t:this.shape_313,p:{x:330.274,y:532.6251}},{t:this.shape_312,p:{x:221.1496,y:533.3004}},{t:this.shape_311,p:{x:221.2996,y:533.3004}},{t:this.shape_310,p:{x:273.66,y:446.85,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:337.3,y:425.625}},{t:this.shape_308,p:{x:337.3,y:425.625}},{t:this.shape_307,p:{x:342.075,y:424.775}},{t:this.shape_306,p:{x:346.775,y:424.4}},{t:this.shape_305,p:{x:357.125,y:450.175,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:261.9204,y:350.8498,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:261.9204,y:350.7872,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:273.6,y:375.625,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:274.602,y:375.6296,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:263.8,y:372.5781,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:263.8033,y:372.5759,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:259.325,y:316.326,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:259.325,y:316.326,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:259.2848,y:316.3289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:259.2848,y:316.3289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:261.9598,y:350.4056,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:261.9598,y:350.4199,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:273.0354,y:373.3707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:273.0354,y:373.3707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:222.3009,y:533.382}},{t:this.shape_289,p:{x:329.545,y:532.3734}}]},2).to({state:[{t:this.shape_323,p:{x:306.075,y:552.2}},{t:this.shape_322,p:{x:306.0828,y:552.4026}},{t:this.shape_321,p:{x:235.125,y:565.625}},{t:this.shape_320,p:{x:376.9131,y:564.65}},{t:this.shape_319,p:{x:303.6438,y:468.7256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:235.1303,y:565.6286}},{t:this.shape_317,p:{x:235.1303,y:565.6286}},{t:this.shape_316,p:{x:376.8538,y:564.642}},{t:this.shape_315,p:{x:376.8538,y:564.642}},{t:this.shape_314,p:{x:360.224,y:539.9751}},{t:this.shape_313,p:{x:360.224,y:539.9751}},{t:this.shape_312,p:{x:251.0996,y:540.6504}},{t:this.shape_311,p:{x:251.2496,y:540.6504}},{t:this.shape_310,p:{x:303.61,y:454.2,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:367.25,y:432.975}},{t:this.shape_308,p:{x:367.25,y:432.975}},{t:this.shape_307,p:{x:372.025,y:432.125}},{t:this.shape_306,p:{x:376.725,y:431.75}},{t:this.shape_305,p:{x:387.075,y:457.525,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:291.8704,y:358.1998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:291.8704,y:358.1372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:303.55,y:382.975,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:304.552,y:382.9796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:293.75,y:379.9281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:293.7533,y:379.9259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:289.275,y:323.676,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:289.275,y:323.676,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:289.2348,y:323.6789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:289.2348,y:323.6789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:291.9098,y:357.7556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:291.9098,y:357.7699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:302.9854,y:380.7207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:302.9854,y:380.7207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:252.2509,y:540.732}},{t:this.shape_289,p:{x:359.495,y:539.7234}}]},2).to({state:[{t:this.shape_323,p:{x:321.425,y:547.65}},{t:this.shape_322,p:{x:321.4328,y:547.8526}},{t:this.shape_321,p:{x:250.475,y:561.075}},{t:this.shape_320,p:{x:392.2631,y:560.1}},{t:this.shape_319,p:{x:318.9938,y:464.1756,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:250.4803,y:561.0786}},{t:this.shape_317,p:{x:250.4803,y:561.0786}},{t:this.shape_316,p:{x:392.2038,y:560.092}},{t:this.shape_315,p:{x:392.2038,y:560.092}},{t:this.shape_314,p:{x:375.574,y:535.4251}},{t:this.shape_313,p:{x:375.574,y:535.4251}},{t:this.shape_312,p:{x:266.4496,y:536.1004}},{t:this.shape_311,p:{x:266.5996,y:536.1004}},{t:this.shape_310,p:{x:318.96,y:449.65,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:382.6,y:428.425}},{t:this.shape_308,p:{x:382.6,y:428.425}},{t:this.shape_307,p:{x:387.375,y:427.575}},{t:this.shape_306,p:{x:392.075,y:427.2}},{t:this.shape_305,p:{x:402.425,y:452.975,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:307.2204,y:353.6498,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:307.2204,y:353.5872,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:318.9,y:378.425,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:319.902,y:378.4296,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:309.1,y:375.3781,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:309.1033,y:375.3759,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:304.625,y:319.126,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:304.625,y:319.126,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:304.5848,y:319.1289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:304.5848,y:319.1289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:307.2598,y:353.2056,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:307.2598,y:353.2199,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:318.3354,y:376.1707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:318.3354,y:376.1707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:267.6009,y:536.182}},{t:this.shape_289,p:{x:374.845,y:535.1734}}]},2).to({state:[{t:this.shape_323,p:{x:356.975,y:546.55}},{t:this.shape_322,p:{x:356.9828,y:546.7526}},{t:this.shape_321,p:{x:286.025,y:559.975}},{t:this.shape_320,p:{x:427.8131,y:559}},{t:this.shape_319,p:{x:354.5438,y:463.0756,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:286.0303,y:559.9786}},{t:this.shape_317,p:{x:286.0303,y:559.9786}},{t:this.shape_316,p:{x:427.7538,y:558.992}},{t:this.shape_315,p:{x:427.7538,y:558.992}},{t:this.shape_314,p:{x:411.124,y:534.3251}},{t:this.shape_313,p:{x:411.124,y:534.3251}},{t:this.shape_312,p:{x:301.9996,y:535.0004}},{t:this.shape_311,p:{x:302.1496,y:535.0004}},{t:this.shape_310,p:{x:354.51,y:448.55,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:418.15,y:427.325}},{t:this.shape_308,p:{x:418.15,y:427.325}},{t:this.shape_307,p:{x:422.925,y:426.475}},{t:this.shape_306,p:{x:427.625,y:426.1}},{t:this.shape_305,p:{x:437.975,y:451.875,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:342.7704,y:352.5498,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:342.7704,y:352.4872,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:354.45,y:377.325,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:355.452,y:377.3296,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:344.65,y:374.2781,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:344.6533,y:374.2759,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:340.175,y:318.026,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:340.175,y:318.026,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:340.1348,y:318.0289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:340.1348,y:318.0289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:342.8098,y:352.1056,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:342.8098,y:352.1199,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:353.8854,y:375.0707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:353.8854,y:375.0707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:303.1509,y:535.082}},{t:this.shape_289,p:{x:410.395,y:534.0734}}]},2).to({state:[{t:this.shape_323,p:{x:373.925,y:546}},{t:this.shape_322,p:{x:373.9328,y:546.2026}},{t:this.shape_321,p:{x:302.975,y:559.425}},{t:this.shape_320,p:{x:444.7631,y:558.45}},{t:this.shape_319,p:{x:371.4938,y:462.5256,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:302.9803,y:559.4286}},{t:this.shape_317,p:{x:302.9803,y:559.4286}},{t:this.shape_316,p:{x:444.7038,y:558.442}},{t:this.shape_315,p:{x:444.7038,y:558.442}},{t:this.shape_314,p:{x:428.074,y:533.7751}},{t:this.shape_313,p:{x:428.074,y:533.7751}},{t:this.shape_312,p:{x:318.9496,y:534.4504}},{t:this.shape_311,p:{x:319.0996,y:534.4504}},{t:this.shape_310,p:{x:371.46,y:448,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:435.1,y:426.775}},{t:this.shape_308,p:{x:435.1,y:426.775}},{t:this.shape_307,p:{x:439.875,y:425.925}},{t:this.shape_306,p:{x:444.575,y:425.55}},{t:this.shape_305,p:{x:454.925,y:451.325,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:359.7204,y:351.9998,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:359.7204,y:351.9372,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:371.4,y:376.775,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:372.402,y:376.7796,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:361.6,y:373.7281,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:361.6033,y:373.7259,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:357.125,y:317.476,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:357.125,y:317.476,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:357.0848,y:317.4789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:357.0848,y:317.4789,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:359.7598,y:351.5556,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:359.7598,y:351.5699,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:370.8354,y:374.5207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:370.8354,y:374.5207,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:320.1009,y:534.532}},{t:this.shape_289,p:{x:427.345,y:533.5234}}]},2).to({state:[{t:this.shape_323,p:{x:399.775,y:544.85}},{t:this.shape_322,p:{x:399.7828,y:545.0526}},{t:this.shape_321,p:{x:328.825,y:558.275}},{t:this.shape_320,p:{x:470.6131,y:557.3}},{t:this.shape_319,p:{x:397.3438,y:461.3756,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_318,p:{x:328.8303,y:558.2786}},{t:this.shape_317,p:{x:328.8303,y:558.2786}},{t:this.shape_316,p:{x:470.5538,y:557.292}},{t:this.shape_315,p:{x:470.5538,y:557.292}},{t:this.shape_314,p:{x:453.924,y:532.6251}},{t:this.shape_313,p:{x:453.924,y:532.6251}},{t:this.shape_312,p:{x:344.7996,y:533.3004}},{t:this.shape_311,p:{x:344.9496,y:533.3004}},{t:this.shape_310,p:{x:397.31,y:446.85,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_309,p:{x:460.95,y:425.625}},{t:this.shape_308,p:{x:460.95,y:425.625}},{t:this.shape_307,p:{x:465.725,y:424.775}},{t:this.shape_306,p:{x:470.425,y:424.4}},{t:this.shape_305,p:{x:480.775,y:450.175,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_304,p:{x:385.5704,y:350.8498,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_303,p:{x:385.5704,y:350.7872,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_302,p:{x:397.25,y:375.625,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_301,p:{x:398.252,y:375.6296,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_300,p:{x:387.45,y:372.5781,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_299,p:{x:387.4533,y:372.5759,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_298,p:{x:382.975,y:316.326,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_297,p:{x:382.975,y:316.326,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_296,p:{x:382.9348,y:316.3289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_295,p:{x:382.9348,y:316.3289,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_294,p:{x:385.6098,y:350.4056,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_293,p:{x:385.6098,y:350.4199,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_292,p:{x:396.6854,y:373.3707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_291,p:{x:396.6854,y:373.3707,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_290,p:{x:345.9509,y:533.382}},{t:this.shape_289,p:{x:453.195,y:532.3734}}]},2).to({state:[{t:this.shape_323,p:{x:419.975,y:543.25}},{t:this.shape_322,p:{x:419.9828,y:543.4526}},{t:this.shape_321,p:{x:349.025,y:556.675}},{t:this.shape_320,p:{x:490.8131,y:555.7}},{t:this.shape_318,p:{x:349.0303,y:556.6786}},{t:this.shape_317,p:{x:349.0303,y:556.6786}},{t:this.shape_316,p:{x:490.7538,y:555.692}},{t:this.shape_315,p:{x:490.7538,y:555.692}},{t:this.shape_314,p:{x:474.124,y:531.0251}},{t:this.shape_313,p:{x:474.124,y:531.0251}},{t:this.shape_312,p:{x:364.9996,y:531.7004}},{t:this.shape_311,p:{x:365.1496,y:531.7004}},{t:this.shape_290,p:{x:366.1509,y:531.782}},{t:this.shape_289,p:{x:473.395,y:530.7734}},{t:this.shape_319,p:{x:413.5416,y:461.2766,scaleX:0.9999,scaleY:0.9999,rotation:-3.9537}},{t:this.shape_310,p:{x:412.5066,y:446.7903,scaleX:0.9999,scaleY:0.9999,rotation:-3.9537}},{t:this.shape_305,p:{x:495.9881,y:444.3528,scaleX:0.9999,scaleY:0.9999,rotation:-3.9537}},{t:this.shape_304,p:{x:394.1309,y:351.8356,scaleX:0.9995,scaleY:0.9995,rotation:-3.9526}},{t:this.shape_303,p:{x:394.1266,y:351.7731,scaleX:0.9995,scaleY:0.9995,rotation:-3.9526}},{t:this.shape_302,p:{x:407.4833,y:375.7339,scaleX:0.9995,scaleY:0.9995,rotation:-3.9526}},{t:this.shape_301,p:{x:408.4827,y:375.6695,scaleX:0.9995,scaleY:0.9995,rotation:-3.9526}},{t:this.shape_300,p:{x:397.502,y:373.371,scaleX:0.9995,scaleY:0.9995,rotation:-3.9526}},{t:this.shape_299,p:{x:397.5051,y:373.3687,scaleX:0.9995,scaleY:0.9995,rotation:-3.9526}},{t:this.shape_298,p:{x:389.1967,y:317.5886,scaleX:0.9997,scaleY:0.9997,rotation:-3.9533}},{t:this.shape_297,p:{x:389.1967,y:317.5886,scaleX:0.9997,scaleY:0.9997,rotation:-3.9533}},{t:this.shape_296,p:{x:389.1567,y:317.5942,scaleX:0.9997,scaleY:0.9997,rotation:-3.9533}},{t:this.shape_295,p:{x:389.1567,y:317.5942,scaleX:0.9997,scaleY:0.9997,rotation:-3.9533}},{t:this.shape_294,p:{x:394.1734,y:351.3961,scaleX:0.9997,scaleY:0.9997,rotation:-3.9533}},{t:this.shape_293,p:{x:394.1744,y:351.4103,scaleX:0.9997,scaleY:0.9997,rotation:-3.9533}},{t:this.shape_292,p:{x:406.8024,y:373.5368,scaleX:0.9997,scaleY:0.9997,rotation:-3.9533}},{t:this.shape_291,p:{x:406.8024,y:373.5368,scaleX:0.9997,scaleY:0.9997,rotation:-3.9533}}]},2).to({state:[{t:this.shape_323,p:{x:419.975,y:543.25}},{t:this.shape_322,p:{x:419.9828,y:543.4526}},{t:this.shape_321,p:{x:349.025,y:556.675}},{t:this.shape_320,p:{x:490.8131,y:555.7}},{t:this.shape_318,p:{x:349.0303,y:556.6786}},{t:this.shape_317,p:{x:349.0303,y:556.6786}},{t:this.shape_316,p:{x:490.7538,y:555.692}},{t:this.shape_315,p:{x:490.7538,y:555.692}},{t:this.shape_314,p:{x:474.124,y:531.0251}},{t:this.shape_313,p:{x:474.124,y:531.0251}},{t:this.shape_312,p:{x:364.9996,y:531.7004}},{t:this.shape_311,p:{x:365.1496,y:531.7004}},{t:this.shape_290,p:{x:366.1509,y:531.782}},{t:this.shape_289,p:{x:473.395,y:530.7734}},{t:this.shape_319,p:{x:415.5164,y:460.259,scaleX:0.9998,scaleY:0.9998,rotation:-6.9222}},{t:this.shape_310,p:{x:413.7326,y:445.8461,scaleX:0.9998,scaleY:0.9998,rotation:-6.9222}},{t:this.shape_305,p:{x:496.9742,y:439.0888,scaleX:0.9998,scaleY:0.9998,rotation:-6.9222}},{t:this.shape_304,p:{x:390.4665,y:351.9723,scaleX:0.9995,scaleY:0.9995,rotation:-6.9211}},{t:this.shape_303,p:{x:390.4589,y:351.9101,scaleX:0.9995,scaleY:0.9995,rotation:-6.9211}},{t:this.shape_302,p:{x:405.0385,y:375.1469,scaleX:0.9995,scaleY:0.9995,rotation:-6.9211}},{t:this.shape_301,p:{x:406.0332,y:375.0308,scaleX:0.9995,scaleY:0.9995,rotation:-6.9211}},{t:this.shape_300,p:{x:394.9482,y:373.3041,scaleX:0.9995,scaleY:0.9995,rotation:-6.9211}},{t:this.shape_299,p:{x:394.9512,y:373.3015,scaleX:0.9995,scaleY:0.9995,rotation:-6.9211}},{t:this.shape_298,p:{x:383.7579,y:318.0284,scaleX:0.9997,scaleY:0.9997,rotation:-6.9215}},{t:this.shape_297,p:{x:383.7579,y:318.0284,scaleX:0.9997,scaleY:0.9997,rotation:-6.9215}},{t:this.shape_296,p:{x:383.7183,y:318.0361,scaleX:0.9997,scaleY:0.9997,rotation:-6.9215}},{t:this.shape_295,p:{x:383.7183,y:318.0361,scaleX:0.9997,scaleY:0.9997,rotation:-6.9215}},{t:this.shape_294,p:{x:390.4781,y:351.5306,scaleX:0.9997,scaleY:0.9997,rotation:-6.9215}},{t:this.shape_293,p:{x:390.4799,y:351.5448,scaleX:0.9997,scaleY:0.9997,rotation:-6.9215}},{t:this.shape_292,p:{x:404.2358,y:372.9862,scaleX:0.9997,scaleY:0.9997,rotation:-6.9215}},{t:this.shape_291,p:{x:404.2358,y:372.9862,scaleX:0.9997,scaleY:0.9997,rotation:-6.9215}}]},1).to({state:[{t:this.shape_323,p:{x:419.975,y:543.25}},{t:this.shape_322,p:{x:419.9828,y:543.4526}},{t:this.shape_321,p:{x:349.025,y:556.675}},{t:this.shape_320,p:{x:490.8131,y:555.7}},{t:this.shape_318,p:{x:349.0303,y:556.6786}},{t:this.shape_317,p:{x:349.0303,y:556.6786}},{t:this.shape_316,p:{x:490.7538,y:555.692}},{t:this.shape_315,p:{x:490.7538,y:555.692}},{t:this.shape_314,p:{x:474.124,y:531.0251}},{t:this.shape_313,p:{x:474.124,y:531.0251}},{t:this.shape_312,p:{x:364.9996,y:531.7004}},{t:this.shape_311,p:{x:365.1496,y:531.7004}},{t:this.shape_290,p:{x:366.1509,y:531.782}},{t:this.shape_289,p:{x:473.395,y:530.7734}},{t:this.shape_319,p:{x:412.8396,y:465.6218,scaleX:0.9998,scaleY:0.9998,rotation:-10.3908}},{t:this.shape_310,p:{x:410.1873,y:451.3443,scaleX:0.9998,scaleY:0.9998,rotation:-10.3908}},{t:this.shape_305,p:{x:492.8611,y:439.564,scaleX:0.9998,scaleY:0.9998,rotation:-10.3908}},{t:this.shape_304,p:{x:381.2633,y:359.0557,scaleX:0.9992,scaleY:0.9992,rotation:-10.3893}},{t:this.shape_303,p:{x:381.252,y:358.9941,scaleX:0.9992,scaleY:0.9992,rotation:-10.3893}},{t:this.shape_302,p:{x:397.2065,y:381.3006,scaleX:0.9992,scaleY:0.9992,rotation:-10.3893}},{t:this.shape_301,p:{x:398.1921,y:381.1246,scaleX:0.9992,scaleY:0.9992,rotation:-10.3893}},{t:this.shape_300,p:{x:387.0259,y:380.0719,scaleX:0.9992,scaleY:0.9992,rotation:-10.3893}},{t:this.shape_299,p:{x:387.0287,y:380.0692,scaleX:0.9992,scaleY:0.9992,rotation:-10.3893}},{t:this.shape_298,p:{x:372.5182,y:325.5861,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905}},{t:this.shape_297,p:{x:372.5182,y:325.5861,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905}},{t:this.shape_296,p:{x:372.4791,y:325.5962,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905}},{t:this.shape_295,p:{x:372.4791,y:325.5962,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905}},{t:this.shape_294,p:{x:381.2512,y:358.6125,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905}},{t:this.shape_293,p:{x:381.2538,y:358.6265,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905}},{t:this.shape_292,p:{x:396.2783,y:379.1915,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905}},{t:this.shape_291,p:{x:396.2783,y:379.1915,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905}}]},1).to({state:[{t:this.shape_323,p:{x:419.975,y:543.25}},{t:this.shape_322,p:{x:419.9828,y:543.4526}},{t:this.shape_321,p:{x:349.025,y:556.675}},{t:this.shape_320,p:{x:490.8131,y:555.7}},{t:this.shape_318,p:{x:349.0303,y:556.6786}},{t:this.shape_317,p:{x:349.0303,y:556.6786}},{t:this.shape_316,p:{x:490.7538,y:555.692}},{t:this.shape_315,p:{x:490.7538,y:555.692}},{t:this.shape_314,p:{x:474.124,y:531.0251}},{t:this.shape_313,p:{x:474.124,y:531.0251}},{t:this.shape_312,p:{x:364.9996,y:531.7004}},{t:this.shape_311,p:{x:365.1496,y:531.7004}},{t:this.shape_290,p:{x:366.1509,y:531.782}},{t:this.shape_289,p:{x:473.395,y:530.7734}},{t:this.shape_319,p:{x:407.7705,y:471.7275,scaleX:0.9997,scaleY:0.9997,rotation:-16.5857}},{t:this.shape_310,p:{x:403.5929,y:457.8197,scaleX:0.9997,scaleY:0.9997,rotation:-16.5857}},{t:this.shape_305,p:{x:484.5121,y:437.1871,scaleX:0.9997,scaleY:0.9997,rotation:-16.5857}},{t:this.shape_304,p:{x:364.8821,y:369.1894,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_303,p:{x:364.8642,y:369.1293,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_302,p:{x:383.1333,y:389.5839,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_301,p:{x:384.0941,y:389.3025,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_300,p:{x:372.8793,y:389.4611,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_299,p:{x:372.8819,y:389.4581,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_298,p:{x:352.582,y:336.8599,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_297,p:{x:352.582,y:336.8599,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_296,p:{x:352.5443,y:336.8741,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_295,p:{x:352.5443,y:336.8741,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_294,p:{x:364.8286,y:368.753,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_293,p:{x:364.8327,y:368.7667,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_292,p:{x:381.9897,y:387.5916,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_291,p:{x:381.9897,y:387.5916,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}}]},1).to({state:[{t:this.shape_323,p:{x:419.975,y:543.25}},{t:this.shape_322,p:{x:419.9828,y:543.4526}},{t:this.shape_321,p:{x:349.025,y:556.675}},{t:this.shape_320,p:{x:490.8131,y:555.7}},{t:this.shape_318,p:{x:349.0303,y:556.6786}},{t:this.shape_317,p:{x:349.0303,y:556.6786}},{t:this.shape_316,p:{x:490.7538,y:555.692}},{t:this.shape_315,p:{x:490.7538,y:555.692}},{t:this.shape_314,p:{x:474.124,y:531.0251}},{t:this.shape_313,p:{x:474.124,y:531.0251}},{t:this.shape_312,p:{x:364.9996,y:531.7004}},{t:this.shape_311,p:{x:365.1496,y:531.7004}},{t:this.shape_290,p:{x:366.1509,y:531.782}},{t:this.shape_289,p:{x:473.395,y:530.7734}},{t:this.shape_319,p:{x:407.7705,y:471.7275,scaleX:0.9997,scaleY:0.9997,rotation:-16.5857}},{t:this.shape_310,p:{x:403.5929,y:457.8197,scaleX:0.9997,scaleY:0.9997,rotation:-16.5857}},{t:this.shape_305,p:{x:484.5121,y:437.1871,scaleX:0.9997,scaleY:0.9997,rotation:-16.5857}},{t:this.shape_304,p:{x:364.8821,y:369.1894,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_303,p:{x:364.8642,y:369.1293,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_302,p:{x:383.1333,y:389.5839,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_301,p:{x:384.0941,y:389.3025,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_300,p:{x:372.8793,y:389.4611,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_299,p:{x:372.8819,y:389.4581,scaleX:0.9992,scaleY:0.9992,rotation:-16.5853}},{t:this.shape_298,p:{x:352.582,y:336.8599,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_297,p:{x:352.582,y:336.8599,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_296,p:{x:352.5443,y:336.8741,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_295,p:{x:352.5443,y:336.8741,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_294,p:{x:364.8286,y:368.753,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_293,p:{x:364.8327,y:368.7667,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_292,p:{x:381.9897,y:387.5916,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}},{t:this.shape_291,p:{x:381.9897,y:387.5916,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852}}]},32).to({state:[{t:this.shape_323,p:{x:419.975,y:543.25}},{t:this.shape_322,p:{x:419.9828,y:543.4526}},{t:this.shape_321,p:{x:349.025,y:556.675}},{t:this.shape_320,p:{x:490.8131,y:555.7}},{t:this.shape_318,p:{x:349.0303,y:556.6786}},{t:this.shape_317,p:{x:349.0303,y:556.6786}},{t:this.shape_316,p:{x:490.7538,y:555.692}},{t:this.shape_315,p:{x:490.7538,y:555.692}},{t:this.shape_314,p:{x:474.124,y:531.0251}},{t:this.shape_313,p:{x:474.124,y:531.0251}},{t:this.shape_312,p:{x:364.9996,y:531.7004}},{t:this.shape_311,p:{x:365.1496,y:531.7004}},{t:this.shape_290,p:{x:366.1509,y:531.782}},{t:this.shape_289,p:{x:473.395,y:530.7734}},{t:this.shape_319,p:{x:419.8944,y:464.6872,scaleX:0.9998,scaleY:0.9998,rotation:-1.5856}},{t:this.shape_310,p:{x:419.4588,y:450.1712,scaleX:0.9998,scaleY:0.9998,rotation:-1.5856}},{t:this.shape_305,p:{x:502.9661,y:451.1852,scaleX:0.9998,scaleY:0.9998,rotation:-1.5856}},{t:this.shape_304,p:{x:405.0244,y:354.5387,scaleX:0.9994,scaleY:0.9994,rotation:-1.5862}},{t:this.shape_303,p:{x:405.0227,y:354.4761,scaleX:0.9994,scaleY:0.9994,rotation:-1.5862}},{t:this.shape_302,p:{x:417.3782,y:378.9669,scaleX:0.9994,scaleY:0.9994,rotation:-1.5862}},{t:this.shape_301,p:{x:418.3793,y:378.9438,scaleX:0.9994,scaleY:0.9994,rotation:-1.5862}},{t:this.shape_300,p:{x:407.5033,y:376.194,scaleX:0.9994,scaleY:0.9994,rotation:-1.5862}},{t:this.shape_299,p:{x:407.5065,y:376.1918,scaleX:0.9994,scaleY:0.9994,rotation:-1.5862}},{t:this.shape_298,p:{x:401.5083,y:320.1228,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849}},{t:this.shape_297,p:{x:401.5083,y:320.1228,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849}},{t:this.shape_296,p:{x:401.4682,y:320.1268,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849}},{t:this.shape_295,p:{x:401.4682,y:320.1268,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849}},{t:this.shape_294,p:{x:405.0835,y:354.1056,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849}},{t:this.shape_293,p:{x:405.0839,y:354.1199,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849}},{t:this.shape_292,p:{x:416.7863,y:376.7484,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849}},{t:this.shape_291,p:{x:416.7863,y:376.7484,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849}}]},1).to({state:[]},1).wait(1053));

	// legs
	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJkcIB2IaICjkGIHjAEICtEHIBqoi");
	this.shape_324.setTransform(-118.572,607.1307);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#E3DBDB").s().p("AFJCHIhMh0IhtgDQhpgEiSAAIiPAAIhIB1QhIB0gDgBQgCgDg0jwQg1jwACgBQPpgKAEACQACABgwD3QgwD3gCACIAAAAQgEAAhKhyg");
	this.shape_325.setTransform(-118.4748,603.5593);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJkUIDxIGIAojyIHiADICwD4IBnoS");
	this.shape_326.setTransform(-126.4793,606.3925);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#E3DBDB").s().p("AFJCHIhMh0IhtgDQhpgEiSAAIiPAAIgKBjQgNCBgDgCQgCgChxjtQhxjuACgBQPpgKAEACQACABgwD3QgwD3gCACIAAAAQgEAAhKhyg");
	this.shape_327.setTransform(-126.4237,603.6093);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJkZIARH6IEIjmIHjAEIDwECIAnod");
	this.shape_328.setTransform(-96.8762,607.284);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#E3DBDB").s().p("AFJB4IhMh0IhtgDQhpgCiSAAIiPAAIACABQj2DqgDgCQgCgCgCjxQgDjyACgCQPpgJAEACQACAAgNEFQgNEEAEAFg");
	this.shape_329.setTransform(-96.7972,605.4701);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJkfIDKH+IBPjpIHiADIAEEIQC4j/Bbkk");
	this.shape_330.setTransform(-79.232,607.2775);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#E3DBDB").s().p("ADxB/QgIhJAUgpIhtgDQhpgEiSAAIiPAAIACABQhCDogFgCQgGgChZjvQhajxACgBQPpgKAEACQACABhWDmQhWDmhSAwg");
	this.shape_331.setTransform(-79.1751,604.0576);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJj7ICKHiICPjPIHjAEIDlC8QgpiyBbkk");
	this.shape_332.setTransform(-79.2793,603.7794);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#E3DBDB").s().p("AmHDxQgGgCg1jrQg2jqACgCQPpgJAEACQACAAgiCwQghCvAJBbIhjg+IhfhyIhtgDQhpgDiSAAIiPAAIACABQiIDbgHAAIAAAAg");
	this.shape_333.setTransform(-79.174,602.6835);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AoJj7ICKHiICPjPIHjAEICTCqQApigBbkk");
	this.shape_334.setTransform(101.0207,609.9294);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#E3DBDB").s().p("AmHDxQgGgCg1jrQg2jqACgCQPpgJAEACQACAAgiCwQghCvgvBjIgrhGIhfhyIhtgDQhpgDiSAAIiPAAIACABQiIDbgHAAIAAAAg");
	this.shape_335.setTransform(101.126,608.8335);

	this.instance_39 = new lib.Tween215("synched",0);
	this.instance_39.setTransform(423.65,599.75);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_325,p:{x:-118.4748}},{t:this.shape_324,p:{x:-118.572}}]},23).to({state:[{t:this.shape_327,p:{x:-126.4237,y:603.6093}},{t:this.shape_326,p:{x:-126.4793,y:606.3925}}]},3).to({state:[{t:this.shape_329,p:{x:-96.7972}},{t:this.shape_328,p:{x:-96.8762}}]},3).to({state:[{t:this.shape_331,p:{x:-79.1751}},{t:this.shape_330,p:{x:-79.232}}]},3).to({state:[{t:this.shape_333,p:{x:-79.174,y:602.6835}},{t:this.shape_332,p:{x:-79.2793,y:603.7794}}]},2).to({state:[{t:this.shape_325,p:{x:-51.2248}},{t:this.shape_324,p:{x:-51.322}}]},2).to({state:[{t:this.shape_327,p:{x:-37.2737,y:605.1093}},{t:this.shape_326,p:{x:-37.3293,y:607.8925}}]},3).to({state:[{t:this.shape_329,p:{x:10.5028}},{t:this.shape_328,p:{x:10.4238}}]},2).to({state:[{t:this.shape_331,p:{x:39.9749}},{t:this.shape_330,p:{x:39.918}}]},3).to({state:[{t:this.shape_333,p:{x:70.876,y:608.8335}},{t:this.shape_332,p:{x:70.7707,y:609.9294}}]},2).to({state:[{t:this.shape_335,p:{x:101.126}},{t:this.shape_334,p:{x:101.0207}}]},2).to({state:[{t:this.shape_327,p:{x:107.7763,y:605.1093}},{t:this.shape_326,p:{x:107.7207,y:607.8925}}]},1).to({state:[{t:this.shape_329,p:{x:147.1528}},{t:this.shape_328,p:{x:147.0738}}]},2).to({state:[{t:this.shape_331,p:{x:186.2249}},{t:this.shape_330,p:{x:186.168}}]},3).to({state:[{t:this.shape_333,p:{x:215.876,y:608.8335}},{t:this.shape_332,p:{x:215.7707,y:609.9294}}]},2).to({state:[{t:this.shape_335,p:{x:238.626}},{t:this.shape_334,p:{x:238.5207}}]},2).to({state:[{t:this.shape_331,p:{x:254.1749}},{t:this.shape_330,p:{x:254.118}}]},2).to({state:[{t:this.shape_333,p:{x:278.276,y:601.4835}},{t:this.shape_332,p:{x:278.1707,y:602.5794}}]},2).to({state:[{t:this.shape_335,p:{x:306.476}},{t:this.shape_334,p:{x:306.3707}}]},2).to({state:[{t:this.shape_327,p:{x:324.0263,y:605.1093}},{t:this.shape_326,p:{x:323.9707,y:607.8925}}]},2).to({state:[{t:this.shape_329,p:{x:362.3028}},{t:this.shape_328,p:{x:362.2238}}]},2).to({state:[{t:this.shape_331,p:{x:374.6749}},{t:this.shape_330,p:{x:374.618}}]},2).to({state:[{t:this.shape_333,p:{x:400.176,y:601.4835}},{t:this.shape_332,p:{x:400.0707,y:602.5794}}]},2).to({state:[{t:this.instance_39}]},2).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},32).to({state:[]},2).wait(1053));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(74).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(32).to({startPosition:0},0).to({_off:true},2).wait(1053));

	// hair
	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AkYFMQiBBwjUCeQijCDhFB8QhRhohAi6QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSALalYQiJg9hJgl");
	this.shape_336.setTransform(-134.0257,425.2356);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#502D16").s().p("AvmI8QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuQgbhhhMhEQg6gzhyg2QiJg9hJglQh/A/hkBeQhFBBhfB6Qh5CZgvA2QhuB8iDBjQiBBwjUCeQijCDhFB8QhRhohAi6g");
	this.shape_337.setTransform(-134.0257,424.7399);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AkYFMQiBBwjUCeQijCDhFB8QhRhohAi6QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQAcASAYAQQAWAPASAOQAjAcAUAYQAmAuADA4QAHCogFA3QgNCthKCSALalYQiJg9hJgl");
	this.shape_338.setTransform(-112.3257,425.6856);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#502D16").s().p("AvmI8QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQAcASAYAQIAoAdQAjAcAUAYQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuIgIgZQgPgrgZgjQgXgigggcQg6gzhyg2QiJg9hJglQh/A/hkBeQhFBBhfB6Qh5CZgvA2QhuB8iDBjQiBBwjUCeQijCDhFB8QhRhohAi6g");
	this.shape_339.setTransform(-112.3257,425.1899);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AkYFMQiBBwjUCeQijCDhFB8QhRhohAi6QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQBEAdA9AfQAUALAUAKQAsAYAoAZQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSALalYQiJg9hJgl");
	this.shape_340.setTransform(-94.7257,425.1356);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#502D16").s().p("AvmI8QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQBEAdA9AfIAoAVQAsAYAoAZQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuQgbhhhMhEQgggcgxgdIgogWIgzgaQiJg9hJglQh/A/hkBeQhFBBhfB6Qh5CZgvA2QhuB8iDBjQiBBwjUCeQijCDhFB8QhRhohAi6g");
	this.shape_341.setTransform(-94.7257,424.6399);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AkYFMQiBBwjUCeQijCDhFB8QhRhohAi6QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQBpAdBmAnQAUAHAUAIQAgAMAfAOQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSALalYQhSgkg7gcQgVgKgTgJQgQgIgNgH");
	this.shape_342.setTransform(-71.5757,425.1856);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#502D16").s().p("AvmI8QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQBpAdBmAnIAoAPIA/AaQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuQgbhhhMhEQg6gzhyg2QhSgkg7gcIgogTIgdgPQh/A/hkBeQhFBBhfB6Qh5CZgvA2QhuB8iDBjQiBBwjUCeQijCDhFB8QhRhohAi6g");
	this.shape_343.setTransform(-71.5757,424.6899);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AkYFMQiBBwjUCeQijCDhFB8QhRhohAi6QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvQAOAEANAEQAUAGAUAGQB8AlB3A0QCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSALalYQiJg9hJgl");
	this.shape_344.setTransform(-53.5757,426.7356);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#502D16").s().p("AvmI8QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQCigWC2ASQCmARCvAvIAbAIIAoAMQB8AlB3A0QCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuQgbhhhMhEQg6gzhyg2QiJg9hJglQg6Adg1AjIgoAdQgoAegkAiQhFBBhfB6Qh5CZgvA2QhuB8iDBjQiBBwjUCeQijCDhFB8QhRhohAi6g");
	this.shape_345.setTransform(-53.5757,426.2399);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("ALalYQiJg9hJglAkYFMQiBBwjUCeQijCDhFB8QhRhohAi6QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQBsgPB0AEQAUAAAUABQAoACAoAEQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCS");
	this.shape_346.setTransform(-4.6757,425.6367);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#502D16").s().p("AvmI8QhBi9gWjOQgZjfAhi2QAkjMBph3QDcj5F1gxQBsgPB0AEIAoABQAoACAoAEQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuQgbhhhMhEQg6gzhyg2QiJg9hJglQh/A/hkBeQhFBBhfB6Qh5CZgvA2IgoArIgoApQhMBLhVBAQiBBwjUCeQijCDhFB8QhRhohAi6g");
	this.shape_347.setTransform(-4.6757,425.141);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AkYFMQgiAegpAiQgUAQgUAQQhiBOiABgQijCDhFB8QhRhohAi6QhBi9gWjOQgZjfAhi2QAkjMBph3QDNjnFQg7QAUgEAUgDQAGgBAGAAQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSALalYQiJg9hJgl");
	this.shape_348.setTransform(22.9743,425.0856);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#502D16").s().p("AvmI8QhBi9gWjOQgZjfAhi2QAkjMBph3QDNjnFQg7IAogHIAMgBQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuQgbhhhMhEQg6gzhyg2QiJg9hJglQh/A/hkBeQhFBBhfB6Qh5CZgvA2QhuB8iDBjQgiAegpAiIgoAgQhiBOiABgQijCDhFB8QhRhohAi6g");
	this.shape_349.setTransform(22.9743,424.5899);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AkYFMQiBBwjUCeQgJAHgJAHQgUARgUASQh2Bqg4BkQhRhohAi6QhBi9gWjOQgZjfAhi2QAkjMBph3QBuh8CThKQAUgKAUgJQCGg8CigVQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSALalYQiJg9hJgl");
	this.shape_350.setTransform(51.3243,431.2857);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#502D16").s().p("AvmI8QhBi9gWjOQgZjfAhi2QAkjMBph3QBuh8CThKIAogTQCGg8CigVQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuQgbhhhMhEQg6gzhyg2QiJg9hJglQh/A/hkBeQhFBBhfB6Qh5CZgvA2QhuB8iDBjQiBBwjUCeIgSAOIgoAjQh2Bqg4BkQhRhohAi6g");
	this.shape_351.setTransform(51.3243,430.7899);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AkYFMQiBBwjUCeQijCDhFB8QhChVg2iKQgNgggMgjQgIgYgHgXQg1iogTi0QgZjfAhi2QAVh1ArhYQASgmAWggQARgaAUgWQDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSALalYQiJg9hJgl");
	this.shape_352.setTransform(84.7743,431.2856);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#502D16").s().p("AvNJ/QgNgggMgjIgPgvQg1iogTi0QgZjfAhi2QAVh1ArhYQASgmAWggQARgaAUgWQDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuQgbhhhMhEQg6gzhyg2QiJg9hJglQh/A/hkBeQhFBBhfB6Qh5CZgvA2QhuB8iDBjQiBBwjUCeQijCDhFB8QhChVg2iKg");
	this.shape_353.setTransform(84.7743,430.7899);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(2.5,0,0,11.3).p("AkYFMQiBBwjUCeQijCDhFB8QhRhohAi6QgkhqgXhwQgShXgKhaQgZjfAhi2QAIguAMgqQAoiPBRhcQDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSALalYQiJg9hJgl");
	this.shape_354.setTransform(93.1743,426.7356);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#502D16").s().p("AvmI8QgkhqgXhwQgShXgKhaQgZjfAhi2QAIguAMgqQAoiPBRhcQDcj5F1gxQCigWC2ASQCmARCvAvQCeAsCYBBQCMA8BxBGQBpBBAqAyQAmAuADA4QAHCogFA3QgNCthKCSQAbiogehuQgbhhhMhEQg6gzhyg2QiJg9hJglQh/A/hkBeQhFBBhfB6Qh5CZgvA2QhuB8iDBjQiBBwjUCeQijCDhFB8QhRhohAi6g");
	this.shape_355.setTransform(93.1743,426.2399);

	this.instance_40 = new lib.Tween217("synched",0);
	this.instance_40.setTransform(397.5,425.5,0.9997,0.9997,-3.9533,0,0,0.9,1.5);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_337,p:{x:-134.0257,y:424.7399}},{t:this.shape_336,p:{x:-134.0257,y:425.2356}}]},23).to({state:[{t:this.shape_339},{t:this.shape_338}]},6).to({state:[{t:this.shape_341},{t:this.shape_340}]},3).to({state:[{t:this.shape_343},{t:this.shape_342}]},4).to({state:[{t:this.shape_345},{t:this.shape_344}]},3).to({state:[{t:this.shape_347},{t:this.shape_346}]},2).to({state:[{t:this.shape_349},{t:this.shape_348}]},3).to({state:[{t:this.shape_351},{t:this.shape_350}]},2).to({state:[{t:this.shape_353},{t:this.shape_352}]},2).to({state:[{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_337,p:{x:130.5243,y:425.1399}},{t:this.shape_336,p:{x:130.5243,y:425.6356}}]},2).to({state:[{t:this.shape_337,p:{x:170.5243,y:424.5899}},{t:this.shape_336,p:{x:170.5243,y:425.0856}}]},3).to({state:[{t:this.shape_337,p:{x:200.8243,y:430.7899}},{t:this.shape_336,p:{x:200.8243,y:431.2856}}]},2).to({state:[{t:this.shape_337,p:{x:220.8243,y:430.7899}},{t:this.shape_336,p:{x:220.8243,y:431.2856}}]},2).to({state:[{t:this.shape_337,p:{x:237.0243,y:424.5899}},{t:this.shape_336,p:{x:237.0243,y:425.0856}}]},2).to({state:[{t:this.shape_337,p:{x:259.6743,y:423.4399}},{t:this.shape_336,p:{x:259.6743,y:423.9356}}]},2).to({state:[{t:this.shape_337,p:{x:289.6243,y:430.7899}},{t:this.shape_336,p:{x:289.6243,y:431.2856}}]},2).to({state:[{t:this.shape_337,p:{x:304.9743,y:426.2399}},{t:this.shape_336,p:{x:304.9743,y:426.7356}}]},2).to({state:[{t:this.shape_337,p:{x:340.5243,y:425.1399}},{t:this.shape_336,p:{x:340.5243,y:425.6356}}]},2).to({state:[{t:this.shape_337,p:{x:357.4743,y:424.5899}},{t:this.shape_336,p:{x:357.4743,y:425.0856}}]},2).to({state:[{t:this.shape_337,p:{x:383.3243,y:423.4399}},{t:this.shape_336,p:{x:383.3243,y:423.9356}}]},2).to({state:[{t:this.instance_40}]},2).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},32).to({state:[{t:this.instance_40}]},1).to({state:[]},1).wait(1053));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(74).to({_off:false},0).wait(1).to({regX:0.5,regY:0.7,rotation:-6.9215,x:396.9,y:424.65},0).wait(1).to({regX:1.2,regY:1.1,scaleX:0.9994,scaleY:0.9994,rotation:-10.3905,x:392.85,y:431.5},0).wait(1).to({regX:0.8,scaleX:0.9995,scaleY:0.9995,rotation:-16.5852,x:384.05,y:440},0).wait(32).to({startPosition:0},0).wait(1).to({regX:1.1,regY:0.8,scaleX:0.9997,scaleY:0.9997,rotation:-1.5849,x:405.25,y:427.55},0).to({_off:true},1).wait(1053));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2005.4,912.9);
// library properties:
lib.properties = {
	id: 'EA2A12F0A6089945B131A15FEA0F6E33',
	width: 1920,
	height: 633,
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
an.compositions['EA2A12F0A6089945B131A15FEA0F6E33'] = {
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