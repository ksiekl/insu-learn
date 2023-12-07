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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdbIIAAphIANANIAYAcIAWAdIAAIbgAgd7HIA7AAMAAAAh2QgLAEgLAIQgMAKgGAIQgLANgCANQgBAKABANIABAVIgDBiIgBArIAAA5QAAAiACARIACA0QgBAXgCALQgBAIgDAHg");
	mask.setTransform(3.025,173.575);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#784421").ss(3.9,0,0,11.3).p("AgJ7GMAATA2N");
	this.shape.setTransform(3.05,173.575);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.1,0,6,347.2), null);


(lib.booksvg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#784421").ss(3.9,0,0,11.3).p("AgK7GMAAVA2N");
	this.shape.setTransform(320.3,200.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,0,0,11.3).p("Egu5ga7MAAAA13MBdzAAAMAAAg13g");
	this.shape_1.setTransform(326.675,199.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE6D5").s().p("Egu5Aa7MAAAg12MBdzAAAMAAAA12g");
	this.shape_2.setTransform(326.675,199.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AreAeQADADAPALQACAAAJADQgKgDAAAAgAzGA9QAFgPAEgGQAlhLBbhaQAFgDAIgHQAHgGAGgDQAXgLAggBQAdgBAbAIQAXAHASALQACABAkAYIAkAgQAXAWAjAnQAgAiAJAJArBAvQAGACAEAAQAWgBAXgSQAMgKAVgYQANgPARgYQAJgNATgbQAIgKAVggQAWgbAVACQAXACAaAhQADAEAfAuQASAbAoBJQAkBBAaAiQAAABAGAFQAEAEADABQAOAFAVgPQAKgHATgSQAUgSAOgQQAJgKAXgbQAcgiAfgmIAWgdQAXgYAQACQAEAAAGAEQADACAHAEQATAZAAAAQAWAgAWAwQAMAcAXA4QADAFAKAbQALAYAKgCQAGgCAGgHQAEgEAFgIQAkg5ALgXQAMggAGgPQANggAJgTQAQgiARgJQAHgDAQgEQBDgFAyAhQABABABAAIAHAFAHJgRIAFAFQAGAFAGAGQAYAUAnAqQAqAuATASQAVAPAMAGQAUALARgDQABAAAQgFQAGgEANgIQAQgOAOgXQAHgLAQgfIAag2QAUgoAlgdQAKgIAEgDQAFgCALgDQACAAAJABQAHAAAEABQAfAJAiAZQAQAMAoAjQA1A1AdAYQANAIACAAQALABANgLQABgBARgTQAXgbAKgJQATgTASgLIAJgFAHJgRQgIgHgFgEQgMgLgLgHQAOAKAWATg");
	this.shape_3.setTransform(465.0283,315.7117);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AxiCIQATg+ARgoQAOggAGgMQANgaANgQQAGgIALgIQAGgFALgKQAIgCAOgHQAMgFAJgCQAsgHBPATQAvALAzAWQAiAOA8AeQAMAGAeAOQAdALATgDQAdgFAlgnQANgNAogzQAIgHAOgNQAMgJAOgCQARgCAUAGQALADAYAKQAWAKBKAqQAiAPBHAgQA/AXAygFQAUgCARgHQAKgEAYgNQAPgIAXgTQAagUAMgHQAQgKAGgCQAOgFAMACQAIABASAEQAXAHAkAWQApAYAQAHIAVAGQAdAHAngBQACAABCgEQAZABAjAOQAUAIAmAQIATAFQAVABAUgNQAGgEAdgXQAdgXAWgSIAUgNAMfhHIAcgGQABAAAAAAQAVAAAbAKQAPAHAdAOQBDAfAYAIQAeAJAQABQADAAAQgDQAWgGAggXAMfhHQgFACgFACQgHADgJAGQAJgGAGgDQAFgDAGgBg");
	this.shape_4.setTransform(469.514,253.4558);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AuiBlQAghAAogkQAugpBBgOQAVgEAtgBQBcACBrAsQAbALAiARQAFADA3AeQACABALADQAHADAGAAQAWgBAdgWQACgBApgjQAbgXALgKQAFgEAfgZQAhgSAAAAQAQgHAVACQAUABAXALQAMAGAaARQAcASA1AqQACABAkAeQAYAVASADQATACAYgOQANgJAXgTQAJgGAjgcQAagWASgLQATgNAHgCQASgGAPAAQABAAAgAFQAiALAvAWQAaANA0AZQAZALA1ATQAOAEAUAGQAQAEATAAQAiABAmgNQAYgJAqgVQAJgFASgIQAPgJAKgJQAKgIAagf");
	this.shape_5.setTransform(473.9461,181.4747);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("Av0DpIAJgYQAQgjAgg0QAJgPAUgfQAVggALgOQAJgMAUgXQACgBAOgLQAKgIAHgDQAYgJAcADQATABAhAKQAuANA5AaQAQAIBSAqQAcAPA3AeQAyAbAjANQAmAOAPADQAcAFAWgDQACgBAvgKQA3gUAngsQAKgLAMgSQAIgKANgUQACgCADgFQADgFADgBQANgIAfAPQAGADAgAUIBUAzQAJAFAZAPQAXAMAPABQAgADAngeQAMgKAtgsQANgMAgglQAfgfAXgDQAPgCASAGQALAEAVAIQAfANAyAgQA4AlAXAMIAYALQAvANAmgHQAngGAngdQALgIAUgTQBRhcBFiPIAOgj");
	this.shape_6.setTransform(458.3173,127.3552);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AxXBLQADhEA3hTQAUgZADgCQAQgQAQAAQAPgBANAHQAIAEATAKQAyAhBDA4QAmAfBLA/QALAHAVAPQATANAQABQAVADAXgLQAJgEAfgTQAmgdA/g9QAGgGASgRQAQgQALgFQAIgEASgDQAbADABAAQAiAHAsAWQAZANAxAaQAIADAUALQATAJAMgCQASgEAZgVQAOgMAWgWQAjgjANgKQAdgYAegDQAQgBASADIAhAIQAUAFAkAQQAmARASAGQARAFALABQAHABAUACQAbgCAkgOQAUgIAogRQAagJAKgDQADgBAjgHQAsgFA3ANQALADBUAZQAuAOANAEQANAEAuALQApAKAZACQAkAEAegHQATgEAWgKQAKgEAdgOQAQgHACgBQAKgEAKgBQAhgBA5AX");
	this.shape_7.setTransform(477.6744,69.9464);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AydCNQAPg7AAAAQAKgiAPgVQALgRALgIQAQgJANgIQABgBARgHQALgEAIgCQBUgTBwAoQADABApAQQAdAMA8AgQA2AbAngBQAKAAANgCIAWgEQAQgGAfgMIBgg3QA8geA3gTQAJgDAygNQBmgPBmAmQASAHAvAXQAJAFAVAKQASAJAPgDQAVgDAfgSQACgCAtgeQBGgwAngSQAYgLAKgCQAWgEASADQALACAcAJQAlANA3AkQBBAqAZAMQAJAEASAGQAFABAKACQAJACAGgBQAlgCAwgWQA2geAZgOIAogVQALgFAbgMQAXgJARgBQAoAAA2AiQAGAEBNA5QAJAFAZARQAYAOAPgKQALgGAGgUQACgGAEgZQACgSACgY");
	this.shape_8.setTransform(177.9806,327.2156);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("ArbBQQABgIABgtQAAgiAIgPQAJgQAQgLQAUgMALgHQAEgBARgFQANgEAIAAQAQgBAgAFQAxAIAwAdQAaAQA7AsQACABAOANQAJAJAHAFQABAAAAAAIAJAGAkiBNQgfgCgegSQANAHAQAGQAQAGAQABIAKABQAjABAtgRQAGgCBGgdQAJgEAzgYQAlgRAagDQAXgDAcAJQAQAEAhAOQAFACAmAXQAeASAPgBQAKgBATgIQAKgEAQgIQBagpBOgIQAWgCARABQADAAAkABQAQABA6AGQAuAFAcgCQAUgCASgDQALgDAagGIAkgK");
	this.shape_9.setTransform(163.0927,280.8917);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AuhC9QAJhMAbg6QAXg1AdgOQAGgEALgBQAGAAAMgCIAAAAIAVAEQANADAIACQALAEAjAQQA/AgBYBFQAMAKAXAUQAUASAPALQANAJAEACQAMAGAJgCQAFgBAGgFQAGgFAEgCQALgNAtg8QAigtAcgYQAVgSALgFQAMgFAagCQAkAEAEABQAqAJA2AfQAfARA8AkQAKADAOAGQANADAOgEQAPgEAQgNQAGgEAVgSQAZgWAdgdQATgTAKgJQARgQARgEQAVgFAdAIQACAAAsAQQBtAsBXAoQAxAVAJADQAjANAbAAQAKAAAUgEQAygPAwgrQAXgVA3g9QAIgJAfgjQAXgbANgSQAGgKALgVIATgn");
	this.shape_10.setTransform(179.0059,210.4939);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AGGADQgJgDgIgBQgEAAgHgBQAHABAEABQAIAAAJADgAAvARIAmAkQABAAAAAAQACACABABQAAAAAAABQAXAUAHAFQAVARANAEQAGABAJgBQAFAAAJgBQAdgKAngkQArgnAWgLQAIgEASgFQACAAAOABIABAAIAEAAAHNAlIAEACQAhAUBBAtQANAIAcAWQAaARAWgGQAAAAAAAAIALgEQAGgDAIgFQAEgCAFgEQgFAEgFACQgHAFgGADAGzAXQAIADAIAFQAEACAGAEQgGgEgFgCQgIgFgHgDIgtgUAKuB/IAMgIQAAAAABAAQAAAAAAgBQBJg9BigcQADAAAIgBIABAAQADAAADAAQACAAACAAIABAAQAWADAYAQQAGAEAhAbIAlAfAvwBNQAkhxBchAIAzgeQA2gaAngHQA1gJArAWQAZANAWAUQANAMAbAdQAZAdAfAqQABACA0BGQAlA1AQARQACADAWATQAAAAANAFQAIADAFgBQAegBAbgbQARgQAXgjQAMgSAqhLQATgkAOgVQAagnAYACQAQACAWAPQAMAIAUAQIAtAoQAJAIAKAJQALAKAJAJQgJgJgLgJQgKgJgJgJ");
	this.shape_11.setTransform(154.9512,146.9229);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AITAnIAIAAQAJgPAKgYQANgfAFgJQAGgPAEgFQAEgEAJgIIARgDQAVACAkAbQACABAxAqQALAIAcAbQAaAYASAEQAEAAAPgBQASgGADgCQAYgOAgghQATgSAhgkQAJgJAVgVQAUgQASAAQAEAAAHACQASAGASAQQAGAFAXAZAh4A8QADgGAXgpQAFgHAQgcQARgZAPADQAJACASAMQAKAGANAKQAGAFAOAKQgNgJgHgFQgmgcgMgDQgPgDgRAZQgQAdgFAHQgVAmgFAIIgPAYQgHALgIAKQgNAQgFAFQgMALgLABQARgDAYgfQAIgJAHgLACBBPQgEgDgGgDQgIgFgKgIQAKAHAIAGQAFADAFADQAEADAEACQADABACABQAFACAHABQAEAAAIABIAOgEIgOAEQgQgBgIgCQAAgBgFgCAAdABIBIA7ADeA5IAjgoQARgUAWgfQANgSAYgkQAFgFAKgMIAFgEADeA5QgPAQgOAIQgDACgGACAC0BWIAEgBQAGgCADgCQANgIAQgQAGshMIAQARQAGAGAFAGQALALAPAVQASAWAHAIIACABAGshMQgHgHgFgEQgcgagTAAQgIgBgIAFQAIgFAIAAQATABAcAaQAFADAHAIgAITAnQgDgCgKgKQgIgIgCgDQAUAVADACgAn4hEQAQgTAMgLQgDADgDADIgWAYIg0A7QgFAFgEAEQABgBACgCQADgDADgDArZCMIATgJQAAAAAAAAQABAAABgBQABAAAAAAIAcgSQAIgHAIgHQAEgDAFgEQgFAEgEAEQgIAHgIAGAs2BCQAGAHAGAIQAgAkANAKQAEADAGAGQAGAFAFABQAGAAAJgCQgJACgGAAQgFAAgGgFQgGgHgEgCQgOgMgfgjQgGgIgGgHgAqOBbIADgDQAMgLASgSQADgDADgDIAyg1AnchiIAPgMQABgBAAAAIABAAIAAAAQAAgBABAAQAAAAAAAAIAAAAQACgBABAAQAFgCAIACQAFABAIABQADACAEADIACABQAEADAGAEQALAHAGAGQAHAHAIAHQgIgHgHgGQgGgGgLgIQgGgEgEgDAl6hHIAtAzQABABABABQABACABABAkKBFIgHgJQg0hFgEgGQATAYAlAzQAEAEADAFIACADQATAaAEAEQAGAIAPAOQACACACADQAEACAHAEQgJgFgCgBIgEgFAjNCHQAGADAFABIADgBAwIiJQABABACAAQAEABAHACQAcAVAFAEQApAkAyA4QAAABABAAQAAABABAAQABABABABQAAABABAAIBDBNAxBgcIAHgfQAIgcAHgRIAKgTQAIgNAJgBQADgBAFABQgEgBgEABQgJACgIAMAxBgcQgCAHgCAIIAAgBQACgHACgHg");
	this.shape_12.setTransform(167.8108,79.6413);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#784421").ss(3.9,0,0,11.3).p("AgK7GMAAVA2N");
	this.shape_13.setTransform(320.3,199.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4,0,0,11.3).p("Egu5gbFMBdzAAAMAAAA2LMhdzAAAg");
	this.shape_14.setTransform(326.675,199.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE6D5").s().p("Egu5AbGMAAAg2LMBdzAAAMAAAA2Lg");
	this.shape_15.setTransform(326.675,199.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10.7,0,0,11.3).p("AAA/TMAAAA+n");
	this.shape_16.setTransform(295.175,200.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(10.2,0,0,11.3).p("AAA/TMAAAA+n");
	this.shape_17.setTransform(350.275,200.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#784421").s().p("EgwvAfUQgwAAghghQgigiAAgwMAAAg7BQAAgwAigiQAhghAwAAMBheAAAQAwAAAiAhQAiAiAAAwMAAAA7BQAAAwgiAiQgiAhgwAAg");
	this.shape_18.setTransform(323.5,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.2,647,411.3);


// stage content:
(lib.insulinTest_q4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#784421").ss(3.9,0,0,11.3).p("AgK7GMAAVA2N");
	this.shape.setTransform(196.4699,198.9071,0.5603,0.6531);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,0,0,11.3).p("Egu5ga+MAAAA12MA7kAAHQE6gzG5iQQH7imEjirQCslODJpbQDSp0AvlfIAIvtg");
	this.shape_1.setTransform(200.0461,198.548,0.5603,0.6531);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE6D5").s().p("Egu5Aa4MAAAg12MBdzAAAIgIPtQgvFfjSJ0QjJJbisFOQkjCrn7CmQm5CQk6Azg");
	this.shape_2.setTransform(200.0419,198.5479,0.5603,0.6531);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,0,0,11.3).p("Egu5gbFMBdzAAAMAAAA2LMhdzAAAg");
	this.shape_3.setTransform(200.0369,198.6428,0.5603,0.653);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE6D5").s().p("Egu5AbGMAAAg2LMBdzAAAMAAAA2Lg");
	this.shape_4.setTransform(200.0369,198.6428,0.5603,0.653);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,0,0,11.3).p("Egu5ga7MAAAA12MA0xgAHQEAgqJ+kZQJOkEFbjNQCylaERsNQEis8AulXIAIlhg");
	this.shape_5.setTransform(200.6265,198.9462,0.5628,0.654);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE6D5").s().p("Egu5ga7MBdzAAAIgIFhQguFXkiM8QkRMNiyFbQlbDMpOEEQp+EZkAAqMg0xAAHg");
	this.shape_6.setTransform(200.6144,198.9447,0.5628,0.654);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3.9,0,0,11.3).p("AKjzTMgVFAmn");
	this.shape_7.setTransform(331.3521,196.3517,0.5764,0.6602);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,0,0,11.3).p("Egu5ga7MAAAA12MA0xgAHQDWgIEKhFQEehKDMhuQDph/A6iNQBDiji0ijQBFiFD0lIQCPi/FRm5QEomNCbj4QDMlIAWilIAIlhg");
	this.shape_8.setTransform(199.244,198.2466,0.5653,0.6615);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE6D5").s().p("Egu5ga7MBdzAAAIgIFhQgWCljMFIQibD5koGMQlRG5iPC/Qj0FIhFCFQC0CjhDCkQg6CMjpB/QjMBukeBLQkKBEjWAIMg0xAAHg");
	this.shape_9.setTransform(199.2318,198.2451,0.5653,0.6615);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3.6,0,0,11.3).p("AQr3hMghVAvD");
	this.shape_10.setTransform(304.9164,196.5909,0.5322,0.6265);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4,0,0,11.3).p("Egu6ga7MAAAA12MA0wgAHQDHgHCJhsQCDhnAnilQApiphEi3QhKjFi5inQBIiLGElRQBahNLJpMQIMmxD5j1QFflYAWikIgDgNg");
	this.shape_11.setTransform(200.6103,197.184,0.5653,0.6522);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE6D5").s().p("Egu6ga7MBdyAAAIADAOQgWCklfFXQj5D1oMGxQrJJMhaBNQmEFRhICLQC5CnBKDGQBEC2gpCpQgnCliDBoQiJBrjHAHMg0wAAHg");
	this.shape_12.setTransform(200.6017,197.1826,0.5653,0.6522);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(192.95,195,0.5744,0.6404,0,0,0,3.1,173.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3.6,0,0,11.3).p("ANB6PMgaBA0f");
	this.shape_13.setTransform(278.7375,195.955,0.5744,0.656);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4,0,0,11.3).p("EAjZga5MhSIgACMAAAA12MA0xgAHQC+gHgbhLQgWg+i6iGQkCiwiUhoQkSi+idiNQBIiLGylzQBohZMgqMQJSnlEakNQGNl6AWikgEAvEga7IrrAC");
	this.shape_14.setTransform(200.322,197.2108,0.5657,0.6553);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE6D5").s().p("EgpEga7MBSJAACIg5ABQgWCkmNF7QkaEMpSHlQsgKMhoBZQmyF0hHCKQCbCNESC+IGXEYQC6CGAXA+QAaBLi+AHMg0xAAHg");
	this.shape_15.setTransform(179.7733,197.2095,0.5657,0.6553);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3.6,0,0,11.3).p("ALc7nMgW3A3P");
	this.shape_16.setTransform(239.6196,197.6262,0.5742,0.6536);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(4,0,0,11.3).p("ANZ68QABgCAAgDIf4AFI/5AAMg95AAAMAAAA12MAtCAAIQBigEgDgZQgEgYhagtQhqg2nNizQn3jDkGh4QmojDiqiZQBIiMHillQCgh3NPpSQKbnVE3kAQG1lpAcikg");
	this.shape_17.setTransform(206.9259,195.9004,0.563,0.6582);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE6D5").s().p("Egu5Aa6MAAAg12MA95AAAQgbCkm2FpQk2EAqbHVQtQJSigB3QnhFlhICMQCqCZGnDDQEGB4H3DDQHOCzBpA2QBbAtADAYQAEAZhiAEgAPA68IABgFIf5AFgAPA68g");
	this.shape_18.setTransform(201.1042,195.9018,0.563,0.6582);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3.6,0,0,11.3).p("ACt61MgFZA1r");
	this.shape_19.setTransform(207.4078,196.1523,0.5816,0.6487);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(4,0,0,11.3).p("ApF64MglqgAGMAAAA12MAtDAAHQBggDgegIQgZgHiNgQQpehCi3gYQ1gi1kxkUQBEiEEymrQGOomDXksQF+oZDKlEQEJmrAWilgEAvEga+Mg4JAAG");
	this.shape_20.setTransform(201.0089,196.9457,0.5621,0.6476);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE6D5").s().p("A3Fa4MAAAg12MAlpAAFIjwAFQgWClkJGrQjJFEl+IZQjWEsmPImQkyGrhECEQEyEUVeC1QC3AYJeBCQCOAQAZAHQAeAIhhADg");
	this.shape_21.setTransform(115.9252,196.9472,0.5621,0.6476);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3.6,0,0,11.3).p("AAB7EMgABA2J");
	this.shape_22.setTransform(196.5257,200.1201,0.5815,0.6487);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(4,0,0,11.3).p("A6ZawQkmgTjrgiQozhRivieQCakqFLzlQCHoABnnAQBqnJAYizIFAgFIy4gFMAAAA12IUWADIYtAEQk4AgrMgNQkqgGj/gRgEAvEgbJMhK7AAF");
	this.shape_23.setTransform(197.5099,199.7467,0.5814,0.6487);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE6D5").s().p("AGebGQkrgFj+gRIYsAEQjbAXmjAAQixAAjUgFgA2gasMAAAg12IS4AGIlAAEQgYC0hqHJQhoHAiHIAQlLTkiZEqQCvCfIyBRQDsAiElATg");
	this.shape_24.setTransform(107.3575,199.7497,0.5814,0.6487);

	this.instance_1 = new lib.booksvg("synched",0);
	this.instance_1.setTransform(197.1,202.75,0.5643,0.6525,0,0,0,323.6,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4,p:{scaleX:0.5603,scaleY:0.653,x:200.0369,y:198.6428}},{t:this.shape_3,p:{scaleX:0.5603,scaleY:0.653,x:200.0369,y:198.6428}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:0.5603,scaleY:0.6531,x:196.4699,y:198.9071}}]},3).to({state:[{t:this.shape_4,p:{scaleX:0.5628,scaleY:0.654,x:200.6094,y:199.285}},{t:this.shape_3,p:{scaleX:0.5628,scaleY:0.654,x:200.6094,y:199.285}},{t:this.shape_6},{t:this.shape_5},{t:this.shape,p:{scaleX:0.5628,scaleY:0.654,x:197.0263,y:199.5497}}]},3).to({state:[{t:this.shape_4,p:{scaleX:0.5653,scaleY:0.6615,x:199.2269,y:198.5894}},{t:this.shape_3,p:{scaleX:0.5653,scaleY:0.6615,x:199.2269,y:198.5894}},{t:this.shape_9},{t:this.shape_8},{t:this.shape,p:{scaleX:0.5653,scaleY:0.6615,x:195.6278,y:198.857}},{t:this.shape_7}]},3).to({state:[{t:this.shape_4,p:{scaleX:0.5653,scaleY:0.6522,x:200.5119,y:197.5219}},{t:this.shape_3,p:{scaleX:0.5653,scaleY:0.6522,x:200.5119,y:197.5219}},{t:this.shape_12},{t:this.shape_11},{t:this.shape,p:{scaleX:0.5653,scaleY:0.6522,x:196.9131,y:197.7859}},{t:this.shape_10}]},3).to({state:[{t:this.shape_4,p:{scaleX:0.5656,scaleY:0.6553,x:200.8815,y:197.5505}},{t:this.shape_3,p:{scaleX:0.5656,scaleY:0.6553,x:200.8815,y:197.5505}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance}]},3).to({state:[{t:this.shape_4,p:{scaleX:0.5629,scaleY:0.6581,x:201.0992,y:196.162}},{t:this.shape_3,p:{scaleX:0.5629,scaleY:0.6581,x:201.0992,y:196.162}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},3).to({state:[{t:this.shape_4,p:{scaleX:0.5621,scaleY:0.6475,x:201.5651,y:197.0413}},{t:this.shape_3,p:{scaleX:0.5621,scaleY:0.6475,x:201.5651,y:197.0413}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},3).to({state:[{t:this.shape_4,p:{scaleX:0.5814,scaleY:0.6487,x:198.0857,y:199.114}},{t:this.shape_3,p:{scaleX:0.5814,scaleY:0.6487,x:198.0857,y:199.114}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.instance_1}]},3).wait(1));

	// base
	this.instance_2 = new lib.booksvg("synched",0);
	this.instance_2.setTransform(198.2,198.8,0.5643,0.6525,0,0,0,323.6,200.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(214.5,264.8,166.2,71.89999999999998);
// library properties:
lib.properties = {
	id: '966B4446EED3EE4C83EED27A3234FE7C',
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
an.compositions['966B4446EED3EE4C83EED27A3234FE7C'] = {
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