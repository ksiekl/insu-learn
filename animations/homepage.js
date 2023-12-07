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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,0,0,4).p("AiTrVIOdThIo6DJIvX11g");
	this.shape.setTransform(76.5989,79.1682,0.3527,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,0,0,4).p("ACBroIuFTrIJdDlIOr2fg");
	this.shape_1.setTransform(-65.0415,80.4048,0.3527,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("EhBEADvQAegMD2g8QD3g9BjgUQFxhLHNhBQHMhBGbglQIPgwGugSQGrgRJnAAQKqAAIPAVQIUAUVqBQQMtAwBCABQAWAAkZAbQkiAcmXAjQtWBNjlALQjkAMx5AWI0oAaQzYAZrbAOQ0zAaiYAEQiYAFAKgEg");
	this.shape_2.setTransform(-10.0345,-123.9363,0.3526,0.3522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D35F5F").s().p("EhBEADvQAegMD2g8QD3g9BjgUQFxhLHNhBQHMhBGbglQIPgwGugSQGrgRJnAAQKqAAIPAVQIUAUVqBQQMtAwBCABQAWAAkZAbQkiAcmXAjQtWBNjlALQjkAMx5AWI0oAaI+zAnQ0zAaiYAEIh0ACQgfAAAFgBg");
	this.shape_3.setTransform(-10.0345,-123.9363,0.3526,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("Eg/gAORQgKg7hAhWQhAhVifioQiiirhChYQhBhYgLg9QgFgfAUgfQAUgfAygnQFEj8PXjvQPXjuSphzQClgQDvgSQDwgSDLgLQDHgLJiAAQJhgBCxAMQIhAjGpA7QGpA7GBBeQGvBqFrCVQFrCVEOC3QBWA6ASAbQASAZgLA2QgTBiiFC4QiFC4jBDDIg1A2IlCgRQkhgQpzgkQxHhBo2gYQosgXpYgIQwxgMvbBPQvcBQtmCqQi0AjgTAAQgQABgEgIQgCgOgCgKg");
	this.shape_4.setTransform(1.8819,-155.5003,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D35F5F").s().p("Eg/cAOpIgEgYQgKg7hAhWQhAhVifioQiiirhChYQhBhYgLg9QgFgfAUgfQAUgfAygnQFEj8PXjvQPXjuSphzQClgQDvgSQDwgSDLgLQDHgLJiAAQJhgBCxAMQIhAjGpA7QGpA7GBBeQGvBqFrCVQFrCVEOC3QBWA6ASAbQASAZgLA2QgTBiiFC4QiFC4jBDDIg1A2IlCgRQkhgQpzgkQxHhBo2gYQosgXpYgIQwxgMvbBPQvcBQtmCqQi0AjgTAAIgCAAQgOAAgEgHg");
	this.shape_5.setTransform(1.8819,-155.5003,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D35F5F").ss(0.3,0,0,4).p("AiOBJQg0gZgPgfQgNgbAXgbQAzg6CXgBQBOgBA+AdQA+AdAJAoQAGAbgnAYQgjAWg8AMQiMAchYgpg");
	this.shape_6.setTransform(1.9402,-194.6607,0.3526,0.3522);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D35F5F").s().p("AiOBJQg0gZgPgfQgNgbAXgbQAzg6CXgBQBOgBA+AdQA+AdAJAoQAGAbgnAYQgjAWg8AMQg5ALgvAAQhHAAg1gYg");
	this.shape_7.setTransform(1.9402,-194.6607,0.3526,0.3522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.4,0,0,4).p("AAAiMQBtAABPApQBNApAAA6QAAA7hNApQhPAphtAAQhtAAhOgpQhNgpAAg7QAAg6BNgpQBOgpBtAAg");
	this.shape_8.setTransform(1.8424,-194.6831,0.3526,0.3522);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ai6BkQhOgpAAg7QAAg6BOgpQBNgpBtAAQBuAABNApQBOApAAA6QAAA7hOApQhNAphuAAQhtAAhNgpg");
	this.shape_9.setTransform(1.8424,-194.6831,0.3526,0.3522);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.4,0,0,4).p("EhAVAC7QQPjZRZhZQO+hNRTAMQM3AJSpBCQCnAJNCAxQJmAkGEAS");
	this.shape_10.setTransform(1.9826,-127.0604,0.3526,0.3522);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("A+uh3QO+hNRTAMQM4AJSoBCIPpA6QJmAkGEASMiArAC4QQPjZRYhZg");
	this.shape_11.setTransform(1.9964,-127.0585,0.3526,0.3522);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.4,0,0,4).p("Eg55gAVIrnC8MBnmgCEMAjugDJ");
	this.shape_12.setTransform(-10.9848,-119.9526,0.3526,0.3522);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Eg6CgAVMB/sgCRMgjuADJMhnmACEg");
	this.shape_13.setTransform(-10.6366,-119.9598,0.3526,0.3522);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.4,0,0,4).p("EBATANCIB2h3QCMiQBniBQFMmdiWhsQs0pW4RjVQ0wi15vB5Q2tBrygEjQohCGlgCSQloCVhjCHQg6BPBnCXQA+BbC+DFQC6DCA2BSQBaCIhNA6");
	this.shape_14.setTransform(1.9235,-155.0759,0.3526,0.3522);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("EhAyAMmQg2hSi6jCQi+jGg+haQhniXA6hPQBjiIFoiVQFgiRIhiGQSgkkWthrQZvh4UwC1QYRDUM0JWQCWBslMGeQhnCBiMCQIh2B2MiA4ACnQBNg6haiIg");
	this.shape_15.setTransform(1.9235,-155.0582,0.3526,0.3522);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF8080").s().p("Ai9B7QhOgzgBhIQABhIBOgzQBOgzBvAAQBvAABPAzQBOAzABBIQgBBIhOAzQhPA0hvAAQhvAAhOg0g");
	this.shape_16.setTransform(4.1223,-0.4743,0.3527,0.3522);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3,0,0,4).p("AAAjgQBYAAA+BCQA+BCAABcQAABdg+BCQg+BChYAAQhWAAg/hCQg+hCAAhdQAAhcA+hCQA/hCBWAAg");
	this.shape_17.setTransform(43.1565,-36.2437,0.3527,0.3522);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AiVCfQg+hCAAhdQAAhcA+hCQA/hCBWAAQBYAAA+BCQA+BCAABcQAABdg+BCQg+BChYAAQhWAAg/hCg");
	this.shape_18.setTransform(43.1565,-36.2437,0.3527,0.3522);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3,0,0,4).p("AAAm6QC2AACACCQCBCCAAC2QAAC4iBCBQiACCi2AAQi1AAiAiCQiBiBAAi4QAAi2CBiCQCAiCC1AAg");
	this.shape_19.setTransform(43.1212,-33.7957,0.3527,0.3522);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004455").s().p("Ak1E5QiBiBAAi4QAAi2CBiCQCAiCC1AAQC2AACACCQCBCCAAC2QAAC4iBCBQiACCi2AAQi1AAiAiCg");
	this.shape_20.setTransform(43.1212,-33.7957,0.3527,0.3522);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3,0,0,4).p("AAAr5QCIAAB9A8QB5A5BdBqQDEDgAAE6QAAE7jEDgQhdBqh5A5Qh9A8iIAAQiHAAh9g8Qh4g5hehqQjEjgAAk7QAAk6DEjgQBehqB4g5QB9g8CHAAg");
	this.shape_21.setTransform(43.1653,-35.1958,0.3527,0.3522);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkEK+Qh4g5hehqQjEjgAAk7QAAk6DEjgQBehpB4g6QB8g8CIAAQCIAAB9A8QB4A6BeBpQDEDgAAE6QAAE7jEDgQheBqh4A5Qh9A8iIAAQiIAAh8g8g");
	this.shape_22.setTransform(43.1653,-35.1958,0.3527,0.3522);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3,0,0,4).p("AAAjgQBYAAA+BCQA+BCAABcQAABdg+BCQg+BChYAAQhXAAg+hCQg+hCAAhdQAAhcA+hCQA+hCBXAAg");
	this.shape_23.setTransform(-33.166,-35.8386,0.3527,0.3522);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AiVCfQg+hCAAhdQAAhcA+hCQA+hCBXAAQBYAAA+BCQA+BCAABcQAABdg+BCQg+BChYAAQhXAAg+hCg");
	this.shape_24.setTransform(-33.166,-35.8386,0.3527,0.3522);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3,0,0,4).p("AAAm6QC2AACACCQCBCCAAC2QAAC4iBCCQiACCi2AAQi1AAiAiCQiBiCAAi4QAAi2CBiCQCAiCC1AAg");
	this.shape_25.setTransform(-33.2101,-32.7654,0.3527,0.3522);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#004455").s().p("Ak1E5QiBiCAAi3QAAi3CBiBQCAiDC1AAQC2AACACDQCBCBAAC3QAAC4iBCBQiACDi2AAQi1AAiAiDg");
	this.shape_26.setTransform(-33.2101,-32.7654,0.3527,0.3522);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3,0,0,4).p("AAAr5QCJAAB8A8QB5A6BdBpQDEDgAAE6QAAE8jEDfQhdBqh5A5Qh8A8iJAAQiHAAh9g8Qh5g5hdhqQjEjfAAk8QAAk7DEjfQBdhpB5g6QB9g8CHAAg");
	this.shape_27.setTransform(-33.8361,-34.7907,0.3527,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AkEK+Qh5g5hdhqQjEjfAAk8QAAk7DEjfQBdhqB5g5QB9g8CHAAQCJAAB8A8QB5A5BdBqQDEDgAAE6QAAE7jEDgQhdBqh5A5Qh8A8iJAAQiHAAh9g8g");
	this.shape_28.setTransform(-33.8361,-34.7907,0.3527,0.3522);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E3DBDB").s().p("AFGASQhAADhAgBQiAgGhZACQhZADgfgEQhcAEhUgHIhWB8QhFBngcAoQgdAnAAgFQABgFhOkmQhOklAEgYQAEgYKeAKIKpAKQAMAAhAEjQhAEhgHAWQgHAXACADg");
	this.shape_29.setTransform(4.7843,165.4779);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5599FF").ss(0.1,0,0,4).p("AnMJrQkPhhgEgDQgDgDHApmQE0moBHhfQBJhgANAAQAOAABfAIQBZAJCZAKQCYAKAaAFIAcAEInKKxQnJKzgDABQgCADkQhig");
	this.shape_30.setTransform(-66.4511,80.3468,0.3527,0.3522);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5599FF").s().p("AnKJrQkPhhgEgDQgDgDHApmQE0moBHhfQBJhgANAAQAOAABfAIQBZAJCZAKQCYAKAaAFIAcAEInKKxQnJKzgDABIAAAAQgJAAkJhfg");
	this.shape_31.setTransform(-66.5133,80.3468,0.3527,0.3522);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5599FF").ss(0.1,0,0,4).p("AkLAfInUqpQgDgEApgFQAogEBngIQCigMBpgLQBQgJAYAAIAZAAIG+JbQHAJYAAAGQAAAFkKBfIkPBhQgEACnOqig");
	this.shape_32.setTransform(77.5414,79.5269,0.3527,0.3522);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5599FF").s().p("AkLAfInUqpQgDgEApgFQAogEBngIQCigMBpgLQBQgJAYAAIAZAAIG+JbQHAJYAAAGQAAAFkKBfIkPBhIAAABQgFAAnNqhg");
	this.shape_33.setTransform(77.5414,79.5269,0.3527,0.3522);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFE6D5").ss(0.2,0,0,4).p("AidC1QgZgLgbgVQgbgVgNgSQgxhEAjhSQAkhUBjguQBfgtBcAJQBdAJBHA9QAnAhAJARQAIASAAAvQAAAqgIAVQgHAVgaAeQhFBRh0AZQhzAahfgsg");
	this.shape_34.setTransform(99.4844,109.4201,0.3527,0.3522);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFE6D5").s().p("AidC1QgZgLgbgVQgbgVgNgSQgxhEAjhSQAkhUBjguQBfgtBcAJQBdAJBHA9QAnAhAJARQAIASAAAvQAAAqgIAVQgHAVgaAeQhFBRh0AZQgrAKgnAAQhEAAg8gcg");
	this.shape_35.setTransform(99.4844,109.4201,0.3527,0.3522);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFE6D5").ss(0.2,0,0,4).p("AhXC+Qh4gngzhdQgyhbA5hPQAvhCBcgVQBVgTBcAXQBdAXA7A4QBBA9AABNQAABkh5A3Qh5A3h/gqg");
	this.shape_36.setTransform(-87.5947,110.6819,0.3527,0.3522);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFE6D5").s().p("AhXC/Qh4gogzhdQgyhbA5hPQAvhCBcgVQBVgTBcAYQBdAWA7A4QBBA9AABNQAABkh5A3QhFAfhHAAQg1AAg3gRg");
	this.shape_37.setTransform(-87.5947,110.6819,0.3527,0.3522);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2,0,0,4).p("Egx5gYNIgcF9QgbHNAFGTQAQUJFJDfQDZCTLNBYQKEBPOLARQNeAPMWhJQMWhJF/hPQF/hQDGi5QDGi6Adk3QAdk3gFhiQgGhjgBhkQgCgKgBgKQhEnSAZiH");
	this.shape_38.setTransform(3.7622,2.4869,0.3527,0.3522);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.9,0,0,4).p("AXg1SQq1FIlcCjQprEjnCCuQpcDqo9CIQqYCeq5AwQgNETgbImQgbHVgpFGQhqNfkUHMQkylnjuqAQjyqLhVrEQhcsBB7pzQCJq/GHmYQM+tiV6lCQStkSWVCZQJyBEJWCRQI3CJHXC9QHNC5EnDNQEtDRBPDCQB0EgA/JcQA9JFgFLMQgFLfhJKbQhPLRiOHiQl0kAjZlRQi7kjhTl1QhAkhgMmVQgCnOgEjdQgHmDg0jyQhFk/ipjaQjBj6laiYQl7impKg7g");
	this.shape_39.setTransform(-0.1421,-57.9766,0.3527,0.3522);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#502D16").s().p("EhBSAhEQjyqLhVrEQhcsBB7pzQCJq/GHmYQM+tiV6lCQStkSWVCZQJyBEJWCRQI3CJHXC9QHNC5EnDNQEtDRBPDCQB0EgA/JcQA9JFgFLMQgFLfhJKbQhPLRiOHiQl0kAjZlRQi7kjhTl1QhAkhgMmVQgCnOgEjdQgHmDg0jyQhFk/ipjaQjBj6laiYQl7impKg7IwRHrQprEjnCCuQpcDqo9CIQqYCeq5AwIgoM5QgbHVgpFGQhqNfkUHMQkylnjuqAg");
	this.shape_40.setTransform(-0.1421,-58.0391,0.3527,0.3522);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.5,0,0,4).p("ABCDnQCAgdBIhZQBHhYgbhfQgchghugvQhtgviAAeQiAAdhIBZQhHBYAbBfQAcBfBuAvQBuAwB/geg");
	this.shape_41.setTransform(99.5695,109.4566,0.3527,0.3522);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,0,0,4).p("ABCjmQCAAdBHBZQBIBYgbBfQgcBghuAvQhuAvh/geQiAgdhIhZQhHhYAbhfQAbhfBugvQBvgvB/Adg");
	this.shape_42.setTransform(-87.5905,110.6257,0.3527,0.3522);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.9,0,0,4).p("A+gunIG6dAIJiuJIcQAMIKIOLIGN9Z");
	this.shape_43.setTransform(4.7489,166.6718,0.3527,0.3522);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.6,0,0,4).p("AzmxUMgW9AinMBVHgAhMgXXgh+");
	this.shape_44.setTransform(6.032,94.3578,0.3526,0.3522);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5599FF").s().p("AzmxTMAmzAAIMAXXAh+MhVHAAhg");
	this.shape_45.setTransform(6.03,94.3174,0.3526,0.3522);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFE6D5").s().p("AheMsIhgAAIhggDIgagBQg0gBg0gDIhqgHIhqgKQg0gFgzgHQg1gHg0gLQg0gJgygNQgygNgpgiQgpgigQgzQgQgwgKg0QgKg0gFg0QgGg0gDg1QgDg0gBg1QAAgzADg0IAHhoIAFhoIAHhoIABgQIVWnFQBxhMCLgpQAwAQA1AHQA0AHA5AFQA5AFAvAdQAuAdAoAWQApAVAiAfQAhAfAdAoQAcApASAuQARAuAKAuIAUBbQALAsgFAxQgFAxABAqIACBfQABA0gGA5QgGA5AGA0IAJBtQAFA+gJA+IgCASIgBACIAGAqQAGAqgaA4QgZA3gxAgQgyAfgxAXQgrAUgyAIIhjAOIh6AOQhBAGhBAEIh9AHQhAADhAACIiVACIhpABIhYgBg");
	this.shape_46.setTransform(2.8279,-26.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.8,-200.6,337.70000000000005,401.2);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape.setTransform(31.6457,75.7203,0.3526,0.3521);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AgMhwIAZDh");
	this.shape_1.setTransform(85.8509,80.3411,0.3526,0.3521);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_2.setTransform(79.2405,65.2903,0.3526,0.3521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABxAPIjhge");
	this.shape_3.setTransform(52.3935,84.3019,0.3526,0.3521);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AhbhDIC3CH");
	this.shape_4.setTransform(33.761,17.7614,0.3526,0.3521);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AAIhxIgPDi");
	this.shape_5.setTransform(92.5935,58.9531,0.3526,0.3521);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AgOhwIAdDh");
	this.shape_6.setTransform(21.5891,81.7934,0.3526,0.3521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_7.setTransform(27.415,56.0486,0.3526,0.3521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABOBTIibil");
	this.shape_8.setTransform(18.1605,33.4723,0.3526,0.3521);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_9.setTransform(64.4332,25.8149,0.3526,0.3521);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AhwAJIDhgR");
	this.shape_10.setTransform(84.5288,20.2699,0.3526,0.3521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("Ag0hkIBpDJ");
	this.shape_11.setTransform(96.2953,44.2984,0.3526,0.3521);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AA3BjIhtjG");
	this.shape_12.setTransform(13.401,71.3635,0.3526,0.3521);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABvAcIjcg3");
	this.shape_13.setTransform(43.941,11.2922,0.3526,0.3521);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AgThvIAoDf");
	this.shape_14.setTransform(22.5233,20.4019,0.3526,0.3521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhugaIDcA1");
	this.shape_15.setTransform(13.3922,53.5401,0.3526,0.3521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABehAIi7CB");
	this.shape_16.setTransform(34.0254,89.7149,0.3526,0.3521);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABkg2IjGBt");
	this.shape_17.setTransform(93.6512,70.5713,0.3526,0.3521);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhlgxIDLBj");
	this.shape_18.setTransform(67.3418,82.0575,0.3526,0.3521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABZBHIixiN");
	this.shape_19.setTransform(82.008,47.9951,0.3526,0.3521);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_20.setTransform(73.2911,16.8372,0.3526,0.3521);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_21.setTransform(87.3052,35.1887,0.3526,0.3521);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape_22.setTransform(57.8052,7.7539,0.3526,0.3521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABThNIilCb");
	this.shape_23.setTransform(37.9916,33.0763,0.3526,0.3521);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABLhVIiVCq");
	this.shape_24.setTransform(7.4516,43.3742,0.3526,0.3521);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABYhHIivCP");
	this.shape_25.setTransform(58.8717,92.2234,0.3526,0.3521);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5599FF").s().p("AlYFSQiPiMAAjGQAAjECPiMQCPiMDJAAQDKAACPCMQCPCMAADEQAADGiPCMQiPCLjKAAQjJAAiPiLg");
	this.shape_26.setTransform(52.5773,52.6199,0.3526,0.3522);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF2A7F").s().p("AlcMOQihhAh8h2Qh8h1hEiZQhGidAAitQAAisBGidQBEiZB8h1QB9h2CghAQCnhDC1AAQC3AACmBDQChBAB8B2QB8B1BECZQBGCdAACsQAACthGCdQhECZh8B1Qh8B2ihBAQimBDi3AAQi1AAinhDg");
	this.shape_27.setTransform(52.7536,48.5169,0.3526,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF5599").s().p("ApLVAQkQhvjRjKQjRjKhykFQh4kPAAkpQAAknB4kPQBykGDRjKQDRjKEQhvQEYhyEzAAQEzAAEZByQEQBvDRDKQDRDKBzEGQB2EPAAEnQAAEph2EPQhzEFjRDKQjRDKkQBvQkZBykzAAQkyAAkZhyg");
	this.shape_28.setTransform(53.1327,51.3168,0.3526,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-0.1,0,106.6,102.7), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape.setTransform(31.6457,75.7203,0.3526,0.3521);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AgMhwIAZDh");
	this.shape_1.setTransform(85.8509,80.3411,0.3526,0.3521);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_2.setTransform(79.2405,65.2903,0.3526,0.3521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABxAPIjhge");
	this.shape_3.setTransform(52.3935,84.3019,0.3526,0.3521);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AhbhDIC3CH");
	this.shape_4.setTransform(33.761,17.7614,0.3526,0.3521);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AAIhxIgPDi");
	this.shape_5.setTransform(92.5935,58.9531,0.3526,0.3521);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AgOhwIAdDh");
	this.shape_6.setTransform(21.5891,81.7934,0.3526,0.3521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_7.setTransform(27.415,56.0486,0.3526,0.3521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABOBTIibil");
	this.shape_8.setTransform(18.1605,33.4723,0.3526,0.3521);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_9.setTransform(64.4332,25.8149,0.3526,0.3521);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AhwAJIDhgR");
	this.shape_10.setTransform(84.5288,20.2699,0.3526,0.3521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("Ag0hkIBpDJ");
	this.shape_11.setTransform(96.2953,44.2984,0.3526,0.3521);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AA3BjIhtjG");
	this.shape_12.setTransform(13.401,71.3635,0.3526,0.3521);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABvAcIjcg3");
	this.shape_13.setTransform(43.941,11.2922,0.3526,0.3521);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AgThvIAoDf");
	this.shape_14.setTransform(22.5233,20.4019,0.3526,0.3521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhugaIDcA1");
	this.shape_15.setTransform(13.3922,53.5401,0.3526,0.3521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABehAIi7CB");
	this.shape_16.setTransform(34.0254,89.7149,0.3526,0.3521);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABkg2IjGBt");
	this.shape_17.setTransform(93.6512,70.5713,0.3526,0.3521);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhlgxIDLBj");
	this.shape_18.setTransform(67.3418,82.0575,0.3526,0.3521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABZBHIixiN");
	this.shape_19.setTransform(82.008,47.9951,0.3526,0.3521);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_20.setTransform(73.2911,16.8372,0.3526,0.3521);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_21.setTransform(87.3052,35.1887,0.3526,0.3521);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape_22.setTransform(57.8052,7.7539,0.3526,0.3521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABThNIilCb");
	this.shape_23.setTransform(37.9916,33.0763,0.3526,0.3521);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABLhVIiVCq");
	this.shape_24.setTransform(7.4516,43.3742,0.3526,0.3521);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABYhHIivCP");
	this.shape_25.setTransform(58.8717,92.2234,0.3526,0.3521);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5599FF").s().p("AlYFSQiPiMAAjGQAAjECPiMQCPiMDJAAQDKAACPCMQCPCMAADEQAADGiPCMQiPCLjKAAQjJAAiPiLg");
	this.shape_26.setTransform(52.5773,52.6199,0.3526,0.3522);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF2A7F").s().p("AlcMOQihhAh8h2Qh8h1hEiZQhGidAAitQAAisBGidQBEiZB8h1QB9h2CghAQCnhDC1AAQC3AACmBDQChBAB8B2QB8B1BECZQBGCdAACsQAACthGCdQhECZh8B1Qh8B2ihBAQimBDi3AAQi1AAinhDg");
	this.shape_27.setTransform(52.7536,48.5169,0.3526,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF5599").s().p("ApLVAQkQhvjRjKQjRjKhykFQh4kPAAkpQAAknB4kPQBykGDRjKQDRjKEQhvQEYhyEzAAQEzAAEZByQEQBvDRDKQDRDKBzEGQB2EPAAEnQAAEph2EPQhzEFjRDKQjRDKkQBvQkZBykzAAQkyAAkZhyg");
	this.shape_28.setTransform(53.1327,51.3168,0.3526,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-0.1,0,106.6,102.7), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape.setTransform(31.6457,75.7203,0.3526,0.3521);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AgMhwIAZDh");
	this.shape_1.setTransform(85.8509,80.3411,0.3526,0.3521);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_2.setTransform(79.2405,65.2903,0.3526,0.3521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABxAPIjhge");
	this.shape_3.setTransform(52.3935,84.3019,0.3526,0.3521);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AhbhDIC3CH");
	this.shape_4.setTransform(33.761,17.7614,0.3526,0.3521);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AAIhxIgPDi");
	this.shape_5.setTransform(92.5935,58.9531,0.3526,0.3521);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AgOhwIAdDh");
	this.shape_6.setTransform(21.5891,81.7934,0.3526,0.3521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_7.setTransform(27.415,56.0486,0.3526,0.3521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABOBTIibil");
	this.shape_8.setTransform(18.1605,33.4723,0.3526,0.3521);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_9.setTransform(64.4332,25.8149,0.3526,0.3521);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AhwAJIDhgR");
	this.shape_10.setTransform(84.5288,20.2699,0.3526,0.3521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("Ag0hkIBpDJ");
	this.shape_11.setTransform(96.2953,44.2984,0.3526,0.3521);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AA3BjIhtjG");
	this.shape_12.setTransform(13.401,71.3635,0.3526,0.3521);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABvAcIjcg3");
	this.shape_13.setTransform(43.941,11.2922,0.3526,0.3521);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AgThvIAoDf");
	this.shape_14.setTransform(22.5233,20.4019,0.3526,0.3521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhugaIDcA1");
	this.shape_15.setTransform(13.3922,53.5401,0.3526,0.3521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABehAIi7CB");
	this.shape_16.setTransform(34.0254,89.7149,0.3526,0.3521);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABkg2IjGBt");
	this.shape_17.setTransform(93.6512,70.5713,0.3526,0.3521);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhlgxIDLBj");
	this.shape_18.setTransform(67.3418,82.0575,0.3526,0.3521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABZBHIixiN");
	this.shape_19.setTransform(82.008,47.9951,0.3526,0.3521);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_20.setTransform(73.2911,16.8372,0.3526,0.3521);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_21.setTransform(87.3052,35.1887,0.3526,0.3521);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape_22.setTransform(57.8052,7.7539,0.3526,0.3521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABThNIilCb");
	this.shape_23.setTransform(37.9916,33.0763,0.3526,0.3521);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABLhVIiVCq");
	this.shape_24.setTransform(7.4516,43.3742,0.3526,0.3521);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABYhHIivCP");
	this.shape_25.setTransform(58.8717,92.2234,0.3526,0.3521);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5599FF").s().p("AlYFSQiPiMAAjGQAAjECPiMQCPiMDJAAQDKAACPCMQCPCMAADEQAADGiPCMQiPCLjKAAQjJAAiPiLg");
	this.shape_26.setTransform(52.5773,52.6199,0.3526,0.3522);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF2A7F").s().p("AlcMOQihhAh8h2Qh8h1hEiZQhGidAAitQAAisBGidQBEiZB8h1QB9h2CghAQCnhDC1AAQC3AACmBDQChBAB8B2QB8B1BECZQBGCdAACsQAACthGCdQhECZh8B1Qh8B2ihBAQimBDi3AAQi1AAinhDg");
	this.shape_27.setTransform(52.7536,48.5169,0.3526,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF5599").s().p("ApLVAQkQhvjRjKQjRjKhykFQh4kPAAkpQAAknB4kPQBykGDRjKQDRjKEQhvQEYhyEzAAQEzAAEZByQEQBvDRDKQDRDKBzEGQB2EPAAEnQAAEph2EPQhzEFjRDKQjRDKkQBvQkZBykzAAQkyAAkZhyg");
	this.shape_28.setTransform(53.1327,51.3168,0.3526,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-0.1,0,106.6,102.7), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape.setTransform(31.6457,75.7203,0.3526,0.3521);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AgMhwIAZDh");
	this.shape_1.setTransform(85.8509,80.3411,0.3526,0.3521);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_2.setTransform(79.2405,65.2903,0.3526,0.3521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABxAPIjhge");
	this.shape_3.setTransform(52.3935,84.3019,0.3526,0.3521);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AhbhDIC3CH");
	this.shape_4.setTransform(33.761,17.7614,0.3526,0.3521);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AAIhxIgPDi");
	this.shape_5.setTransform(92.5935,58.9531,0.3526,0.3521);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AgOhwIAdDh");
	this.shape_6.setTransform(21.5891,81.7934,0.3526,0.3521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_7.setTransform(27.415,56.0486,0.3526,0.3521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABOBTIibil");
	this.shape_8.setTransform(18.1605,33.4723,0.3526,0.3521);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_9.setTransform(64.4332,25.8149,0.3526,0.3521);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AhwAJIDhgR");
	this.shape_10.setTransform(84.5288,20.2699,0.3526,0.3521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("Ag0hkIBpDJ");
	this.shape_11.setTransform(96.2953,44.2984,0.3526,0.3521);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AA3BjIhtjG");
	this.shape_12.setTransform(13.401,71.3635,0.3526,0.3521);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABvAcIjcg3");
	this.shape_13.setTransform(43.941,11.2922,0.3526,0.3521);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AgThvIAoDf");
	this.shape_14.setTransform(22.5233,20.4019,0.3526,0.3521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhugaIDcA1");
	this.shape_15.setTransform(13.3922,53.5401,0.3526,0.3521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABehAIi7CB");
	this.shape_16.setTransform(34.0254,89.7149,0.3526,0.3521);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABkg2IjGBt");
	this.shape_17.setTransform(93.6512,70.5713,0.3526,0.3521);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhlgxIDLBj");
	this.shape_18.setTransform(67.3418,82.0575,0.3526,0.3521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABZBHIixiN");
	this.shape_19.setTransform(82.008,47.9951,0.3526,0.3521);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_20.setTransform(73.2911,16.8372,0.3526,0.3521);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_21.setTransform(87.3052,35.1887,0.3526,0.3521);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape_22.setTransform(57.8052,7.7539,0.3526,0.3521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABThNIilCb");
	this.shape_23.setTransform(37.9916,33.0763,0.3526,0.3521);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABLhVIiVCq");
	this.shape_24.setTransform(7.4516,43.3742,0.3526,0.3521);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABYhHIivCP");
	this.shape_25.setTransform(58.8717,92.2234,0.3526,0.3521);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5599FF").s().p("AlYFSQiPiMAAjGQAAjECPiMQCPiMDJAAQDKAACPCMQCPCMAADEQAADGiPCMQiPCLjKAAQjJAAiPiLg");
	this.shape_26.setTransform(52.5773,52.6199,0.3526,0.3522);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF2A7F").s().p("AlcMOQihhAh8h2Qh8h1hEiZQhGidAAitQAAisBGidQBEiZB8h1QB9h2CghAQCnhDC1AAQC3AACmBDQChBAB8B2QB8B1BECZQBGCdAACsQAACthGCdQhECZh8B1Qh8B2ihBAQimBDi3AAQi1AAinhDg");
	this.shape_27.setTransform(52.7536,48.5169,0.3526,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF5599").s().p("ApLVAQkQhvjRjKQjRjKhykFQh4kPAAkpQAAknB4kPQBykGDRjKQDRjKEQhvQEYhyEzAAQEzAAEZByQEQBvDRDKQDRDKBzEGQB2EPAAEnQAAEph2EPQhzEFjRDKQjRDKkQBvQkZBykzAAQkyAAkZhyg");
	this.shape_28.setTransform(53.1327,51.3168,0.3526,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-0.1,0,106.6,102.7), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAfABAoQAAAngXAfQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape.setTransform(28.5035,50.7439,0.3526,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_1.setTransform(28.5039,50.7439,0.3526,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_2.setTransform(22.0992,50.669,0.3526,0.3521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_3.setTransform(21.9007,50.7439,0.3526,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAkQAYAfABAnQAAAngWAgQgYAggmAKQgJACgQAAQgJAAhnAAg");
	this.shape_4.setTransform(28.5211,90.2594,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAmgWAhQgYAggmAJQgJADgQAAIhwAAg");
	this.shape_5.setTransform(28.5215,90.2594,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_6.setTransform(22.1168,90.1793,0.3526,0.3521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAfAhQAgAiAAAuQAAAvggAiQgfAigsAAg");
	this.shape_7.setTransform(21.9183,90.2594,0.3526,0.3522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape_8.setTransform(28.5211,104.8224,0.3526,0.3522);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_9.setTransform(28.5215,104.8224,0.3526,0.3522);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_10.setTransform(22.1168,104.7404,0.3526,0.3521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfghAAgwQAAgvAfghQAgghAsgBIH0AAQAtABAfAhQAgAhAAAvQAAAwggAhQgfAhgtABg");
	this.shape_11.setTransform(21.9183,104.8224,0.3526,0.3522);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAhfAAg");
	this.shape_12.setTransform(28.5388,76.6649,0.3526,0.3522);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAIhwABg");
	this.shape_13.setTransform(28.5392,76.6649,0.3526,0.3522);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_14.setTransform(22.1344,76.5866,0.3526,0.3521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAwggAhQgfAigsAAg");
	this.shape_15.setTransform(21.936,76.6649,0.3526,0.3522);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_16.setTransform(28.5125,63.634,0.3526,0.3522);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJACgQAAIhwABg");
	this.shape_17.setTransform(28.5127,63.634,0.3526,0.3522);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_18.setTransform(22.108,63.5574,0.3526,0.3521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAfgiAtAAIH0AAQAtAAAfAiQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_19.setTransform(21.9183,63.634,0.3526,0.3522);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAQgRAAhfAAg");
	this.shape_20.setTransform(28.5211,37.3167,0.3526,0.3522);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAIhwAAg");
	this.shape_21.setTransform(28.5215,37.3167,0.3526,0.3522);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_22.setTransform(22.1168,37.2347,0.3526,0.3521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAgvAfghQAggiAsABIH0AAQAtgBAfAiQAgAhAAAvQAAAwggAhQgfAigtAAg");
	this.shape_23.setTransform(21.9183,37.3079,0.3526,0.3522);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_24.setTransform(63.4582,90.2418,0.3526,0.3522);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB8ABQAsAFAbAkQAXAeABAoQABAngXAfQgYAhglAJQgKACgQAAIhvABg");
	this.shape_25.setTransform(63.4584,90.2418,0.3526,0.3522);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_26.setTransform(57.0507,90.1617,0.3526,0.3521);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("Aj6BzQgsgBgfghQgggiAAgvQAAguAggiQAfgiAsABIH1AAQAsgBAfAiQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_27.setTransform(56.8552,90.2418,0.3526,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAcAjQAXAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_28.setTransform(63.4582,104.8224,0.3526,0.3522);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAJQgJADgQAAIhwAAg");
	this.shape_29.setTransform(63.4584,104.8224,0.3526,0.3522);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_30.setTransform(57.0507,104.7404,0.3526,0.3521);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("Aj5BzQgtgBgfghQgggiAAgvQAAgvAgghQAfgiAtAAIHzAAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtABg");
	this.shape_31.setTransform(56.864,104.8224,0.3526,0.3522);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_32.setTransform(63.4406,76.6561,0.3526,0.3522);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_33.setTransform(63.4408,76.6561,0.3526,0.3522);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_34.setTransform(57.0419,76.5866,0.3526,0.3521);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("Aj6ByQgsABgfgiQgggiAAgvQAAguAggiQAfghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAvggAiQgfAigtgBg");
	this.shape_35.setTransform(56.8464,76.6473,0.3526,0.3522);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_36.setTransform(63.4759,63.5722,0.3526,0.3522);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQAsAHAaAjQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_37.setTransform(63.476,63.5723,0.3526,0.3522);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_38.setTransform(57.0683,63.4958,0.3526,0.3521);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAgvAfghQAggiAsAAIH0AAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtAAg");
	this.shape_39.setTransform(56.8817,63.5635,0.3526,0.3522);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_40.setTransform(63.4759,50.5414,0.3526,0.3522);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_41.setTransform(63.476,50.5414,0.3526,0.3522);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_42.setTransform(57.0683,50.4665,0.3526,0.3521);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAguAfgiQAgghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAwggAhQgfAigtAAg");
	this.shape_43.setTransform(56.8817,50.5326,0.3526,0.3522);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAheAAg");
	this.shape_44.setTransform(63.4053,37.3079,0.3526,0.3522);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAKQgJACgQgBIhwABg");
	this.shape_45.setTransform(63.4055,37.3079,0.3526,0.3522);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_46.setTransform(56.9978,37.2347,0.3526,0.3521);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_47.setTransform(56.8111,37.3079,0.3526,0.3522);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQABQgJAAhmAAg");
	this.shape_48.setTransform(63.3701,24.1185,0.3526,0.3522);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB8AAQAsAGAbAjQAXAfABAoQABAngXAfQgYAhglAKQgJACgRAAIhvAAg");
	this.shape_49.setTransform(63.3703,24.1185,0.3526,0.3522);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_50.setTransform(56.9625,24.047,0.3526,0.3521);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("Aj5BzQgtgBggghQgfgiAAgvQAAgvAfghQAgghAtAAIH0AAQAtAAAeAhQAgAhAAAvQAAAwggAhQgfAhgsABg");
	this.shape_51.setTransform(56.7582,24.1185,0.3526,0.3522);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_52.setTransform(63.3172,11.0699,0.3526,0.3522);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAmgXAgQgXAhgmAJQgJADgQgBIhwABg");
	this.shape_53.setTransform(63.3174,11.0699,0.3526,0.3522);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_54.setTransform(56.9096,11.0001,0.3526,0.3521);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Aj6ByQgsAAgfghQgggiAAgvQAAguAggiQAfghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_55.setTransform(56.723,11.0699,0.3526,0.3522);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_56.setTransform(28.5125,24.1623,0.3526,0.3522);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQArAHAbAjQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_57.setTransform(28.5127,24.1625,0.3526,0.3522);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_58.setTransform(22.108,24.0822,0.3526,0.3521);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAgghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_59.setTransform(21.9183,24.1537,0.3526,0.3522);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_60.setTransform(28.4949,11.1051,0.3526,0.3522);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfAAAoQABAngXAfQgYAiglAIQgJACgQAAIhvABg");
	this.shape_61.setTransform(28.4951,11.1051,0.3526,0.3522);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_62.setTransform(22.0904,11.0353,0.3526,0.3521);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_63.setTransform(21.9007,11.1051,0.3526,0.3522);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B7BEC8").s().p("AwwZ6QgYAAgRgRQgRgRAAgZMAAAgx+QAAgYARgRQARgRAYAAMAhhAAAQAYAAARARQARARAAAYMAAAAx+QAAAZgRARQgRARgYAAg");
	this.shape_64.setTransform(39.9053,58.3918,0.3527,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,79.8,116.8), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAfABAoQAAAngXAfQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape.setTransform(28.5035,50.7439,0.3526,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_1.setTransform(28.5039,50.7439,0.3526,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_2.setTransform(22.0992,50.669,0.3526,0.3521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_3.setTransform(21.9007,50.7439,0.3526,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAkQAYAfABAnQAAAngWAgQgYAggmAKQgJACgQAAQgJAAhnAAg");
	this.shape_4.setTransform(28.5211,90.2594,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAmgWAhQgYAggmAJQgJADgQAAIhwAAg");
	this.shape_5.setTransform(28.5215,90.2594,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_6.setTransform(22.1168,90.1793,0.3526,0.3521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAfAhQAgAiAAAuQAAAvggAiQgfAigsAAg");
	this.shape_7.setTransform(21.9183,90.2594,0.3526,0.3522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape_8.setTransform(28.5211,104.8224,0.3526,0.3522);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_9.setTransform(28.5215,104.8224,0.3526,0.3522);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_10.setTransform(22.1168,104.7404,0.3526,0.3521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfghAAgwQAAgvAfghQAgghAsgBIH0AAQAtABAfAhQAgAhAAAvQAAAwggAhQgfAhgtABg");
	this.shape_11.setTransform(21.9183,104.8224,0.3526,0.3522);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAhfAAg");
	this.shape_12.setTransform(28.5388,76.6649,0.3526,0.3522);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAIhwABg");
	this.shape_13.setTransform(28.5392,76.6649,0.3526,0.3522);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_14.setTransform(22.1344,76.5866,0.3526,0.3521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAwggAhQgfAigsAAg");
	this.shape_15.setTransform(21.936,76.6649,0.3526,0.3522);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_16.setTransform(28.5125,63.634,0.3526,0.3522);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJACgQAAIhwABg");
	this.shape_17.setTransform(28.5127,63.634,0.3526,0.3522);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_18.setTransform(22.108,63.5574,0.3526,0.3521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAfgiAtAAIH0AAQAtAAAfAiQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_19.setTransform(21.9183,63.634,0.3526,0.3522);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAQgRAAhfAAg");
	this.shape_20.setTransform(28.5211,37.3167,0.3526,0.3522);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAIhwAAg");
	this.shape_21.setTransform(28.5215,37.3167,0.3526,0.3522);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_22.setTransform(22.1168,37.2347,0.3526,0.3521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAgvAfghQAggiAsABIH0AAQAtgBAfAiQAgAhAAAvQAAAwggAhQgfAigtAAg");
	this.shape_23.setTransform(21.9183,37.3079,0.3526,0.3522);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_24.setTransform(63.4582,90.2418,0.3526,0.3522);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB8ABQAsAFAbAkQAXAeABAoQABAngXAfQgYAhglAJQgKACgQAAIhvABg");
	this.shape_25.setTransform(63.4584,90.2418,0.3526,0.3522);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_26.setTransform(57.0507,90.1617,0.3526,0.3521);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("Aj6BzQgsgBgfghQgggiAAgvQAAguAggiQAfgiAsABIH1AAQAsgBAfAiQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_27.setTransform(56.8552,90.2418,0.3526,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAcAjQAXAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_28.setTransform(63.4582,104.8224,0.3526,0.3522);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAJQgJADgQAAIhwAAg");
	this.shape_29.setTransform(63.4584,104.8224,0.3526,0.3522);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_30.setTransform(57.0507,104.7404,0.3526,0.3521);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("Aj5BzQgtgBgfghQgggiAAgvQAAgvAgghQAfgiAtAAIHzAAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtABg");
	this.shape_31.setTransform(56.864,104.8224,0.3526,0.3522);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_32.setTransform(63.4406,76.6561,0.3526,0.3522);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_33.setTransform(63.4408,76.6561,0.3526,0.3522);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_34.setTransform(57.0419,76.5866,0.3526,0.3521);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("Aj6ByQgsABgfgiQgggiAAgvQAAguAggiQAfghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAvggAiQgfAigtgBg");
	this.shape_35.setTransform(56.8464,76.6473,0.3526,0.3522);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_36.setTransform(63.4759,63.5722,0.3526,0.3522);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQAsAHAaAjQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_37.setTransform(63.476,63.5723,0.3526,0.3522);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_38.setTransform(57.0683,63.4958,0.3526,0.3521);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAgvAfghQAggiAsAAIH0AAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtAAg");
	this.shape_39.setTransform(56.8817,63.5635,0.3526,0.3522);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_40.setTransform(63.4759,50.5414,0.3526,0.3522);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_41.setTransform(63.476,50.5414,0.3526,0.3522);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_42.setTransform(57.0683,50.4665,0.3526,0.3521);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAguAfgiQAgghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAwggAhQgfAigtAAg");
	this.shape_43.setTransform(56.8817,50.5326,0.3526,0.3522);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAheAAg");
	this.shape_44.setTransform(63.4053,37.3079,0.3526,0.3522);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAKQgJACgQgBIhwABg");
	this.shape_45.setTransform(63.4055,37.3079,0.3526,0.3522);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_46.setTransform(56.9978,37.2347,0.3526,0.3521);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_47.setTransform(56.8111,37.3079,0.3526,0.3522);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQABQgJAAhmAAg");
	this.shape_48.setTransform(63.3701,24.1185,0.3526,0.3522);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB8AAQAsAGAbAjQAXAfABAoQABAngXAfQgYAhglAKQgJACgRAAIhvAAg");
	this.shape_49.setTransform(63.3703,24.1185,0.3526,0.3522);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_50.setTransform(56.9625,24.047,0.3526,0.3521);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("Aj5BzQgtgBggghQgfgiAAgvQAAgvAfghQAgghAtAAIH0AAQAtAAAeAhQAgAhAAAvQAAAwggAhQgfAhgsABg");
	this.shape_51.setTransform(56.7582,24.1185,0.3526,0.3522);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_52.setTransform(63.3172,11.0699,0.3526,0.3522);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAmgXAgQgXAhgmAJQgJADgQgBIhwABg");
	this.shape_53.setTransform(63.3174,11.0699,0.3526,0.3522);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_54.setTransform(56.9096,11.0001,0.3526,0.3521);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Aj6ByQgsAAgfghQgggiAAgvQAAguAggiQAfghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_55.setTransform(56.723,11.0699,0.3526,0.3522);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_56.setTransform(28.5125,24.1623,0.3526,0.3522);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQArAHAbAjQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_57.setTransform(28.5127,24.1625,0.3526,0.3522);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_58.setTransform(22.108,24.0822,0.3526,0.3521);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAgghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_59.setTransform(21.9183,24.1537,0.3526,0.3522);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_60.setTransform(28.4949,11.1051,0.3526,0.3522);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfAAAoQABAngXAfQgYAiglAIQgJACgQAAIhvABg");
	this.shape_61.setTransform(28.4951,11.1051,0.3526,0.3522);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_62.setTransform(22.0904,11.0353,0.3526,0.3521);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_63.setTransform(21.9007,11.1051,0.3526,0.3522);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B7BEC8").s().p("AwwZ6QgYAAgRgRQgRgRAAgZMAAAgx+QAAgYARgRQARgRAYAAMAhhAAAQAYAAARARQARARAAAYMAAAAx+QAAAZgRARQgRARgYAAg");
	this.shape_64.setTransform(39.9053,58.3918,0.3527,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,79.8,116.8), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAfABAoQAAAngXAfQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape.setTransform(28.5035,50.7439,0.3526,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_1.setTransform(28.5039,50.7439,0.3526,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_2.setTransform(22.0992,50.669,0.3526,0.3521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_3.setTransform(21.9007,50.7439,0.3526,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAkQAYAfABAnQAAAngWAgQgYAggmAKQgJACgQAAQgJAAhnAAg");
	this.shape_4.setTransform(28.5211,90.2594,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAmgWAhQgYAggmAJQgJADgQAAIhwAAg");
	this.shape_5.setTransform(28.5215,90.2594,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_6.setTransform(22.1168,90.1793,0.3526,0.3521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAfAhQAgAiAAAuQAAAvggAiQgfAigsAAg");
	this.shape_7.setTransform(21.9183,90.2594,0.3526,0.3522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape_8.setTransform(28.5211,104.8224,0.3526,0.3522);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_9.setTransform(28.5215,104.8224,0.3526,0.3522);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_10.setTransform(22.1168,104.7404,0.3526,0.3521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfghAAgwQAAgvAfghQAgghAsgBIH0AAQAtABAfAhQAgAhAAAvQAAAwggAhQgfAhgtABg");
	this.shape_11.setTransform(21.9183,104.8224,0.3526,0.3522);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAhfAAg");
	this.shape_12.setTransform(28.5388,76.6649,0.3526,0.3522);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAIhwABg");
	this.shape_13.setTransform(28.5392,76.6649,0.3526,0.3522);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_14.setTransform(22.1344,76.5866,0.3526,0.3521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAwggAhQgfAigsAAg");
	this.shape_15.setTransform(21.936,76.6649,0.3526,0.3522);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_16.setTransform(28.5125,63.634,0.3526,0.3522);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJACgQAAIhwABg");
	this.shape_17.setTransform(28.5127,63.634,0.3526,0.3522);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_18.setTransform(22.108,63.5574,0.3526,0.3521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAfgiAtAAIH0AAQAtAAAfAiQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_19.setTransform(21.9183,63.634,0.3526,0.3522);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAQgRAAhfAAg");
	this.shape_20.setTransform(28.5211,37.3167,0.3526,0.3522);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAIhwAAg");
	this.shape_21.setTransform(28.5215,37.3167,0.3526,0.3522);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_22.setTransform(22.1168,37.2347,0.3526,0.3521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAgvAfghQAggiAsABIH0AAQAtgBAfAiQAgAhAAAvQAAAwggAhQgfAigtAAg");
	this.shape_23.setTransform(21.9183,37.3079,0.3526,0.3522);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_24.setTransform(63.4582,90.2418,0.3526,0.3522);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB8ABQAsAFAbAkQAXAeABAoQABAngXAfQgYAhglAJQgKACgQAAIhvABg");
	this.shape_25.setTransform(63.4584,90.2418,0.3526,0.3522);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_26.setTransform(57.0507,90.1617,0.3526,0.3521);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("Aj6BzQgsgBgfghQgggiAAgvQAAguAggiQAfgiAsABIH1AAQAsgBAfAiQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_27.setTransform(56.8552,90.2418,0.3526,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAcAjQAXAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_28.setTransform(63.4582,104.8224,0.3526,0.3522);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAJQgJADgQAAIhwAAg");
	this.shape_29.setTransform(63.4584,104.8224,0.3526,0.3522);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_30.setTransform(57.0507,104.7404,0.3526,0.3521);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("Aj5BzQgtgBgfghQgggiAAgvQAAgvAgghQAfgiAtAAIHzAAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtABg");
	this.shape_31.setTransform(56.864,104.8224,0.3526,0.3522);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_32.setTransform(63.4406,76.6561,0.3526,0.3522);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_33.setTransform(63.4408,76.6561,0.3526,0.3522);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_34.setTransform(57.0419,76.5866,0.3526,0.3521);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("Aj6ByQgsABgfgiQgggiAAgvQAAguAggiQAfghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAvggAiQgfAigtgBg");
	this.shape_35.setTransform(56.8464,76.6473,0.3526,0.3522);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_36.setTransform(63.4759,63.5722,0.3526,0.3522);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQAsAHAaAjQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_37.setTransform(63.476,63.5723,0.3526,0.3522);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_38.setTransform(57.0683,63.4958,0.3526,0.3521);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAgvAfghQAggiAsAAIH0AAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtAAg");
	this.shape_39.setTransform(56.8817,63.5635,0.3526,0.3522);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_40.setTransform(63.4759,50.5414,0.3526,0.3522);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_41.setTransform(63.476,50.5414,0.3526,0.3522);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_42.setTransform(57.0683,50.4665,0.3526,0.3521);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAguAfgiQAgghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAwggAhQgfAigtAAg");
	this.shape_43.setTransform(56.8817,50.5326,0.3526,0.3522);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAheAAg");
	this.shape_44.setTransform(63.4053,37.3079,0.3526,0.3522);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAKQgJACgQgBIhwABg");
	this.shape_45.setTransform(63.4055,37.3079,0.3526,0.3522);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_46.setTransform(56.9978,37.2347,0.3526,0.3521);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_47.setTransform(56.8111,37.3079,0.3526,0.3522);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQABQgJAAhmAAg");
	this.shape_48.setTransform(63.3701,24.1185,0.3526,0.3522);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB8AAQAsAGAbAjQAXAfABAoQABAngXAfQgYAhglAKQgJACgRAAIhvAAg");
	this.shape_49.setTransform(63.3703,24.1185,0.3526,0.3522);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_50.setTransform(56.9625,24.047,0.3526,0.3521);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("Aj5BzQgtgBggghQgfgiAAgvQAAgvAfghQAgghAtAAIH0AAQAtAAAeAhQAgAhAAAvQAAAwggAhQgfAhgsABg");
	this.shape_51.setTransform(56.7582,24.1185,0.3526,0.3522);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_52.setTransform(63.3172,11.0699,0.3526,0.3522);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAmgXAgQgXAhgmAJQgJADgQgBIhwABg");
	this.shape_53.setTransform(63.3174,11.0699,0.3526,0.3522);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_54.setTransform(56.9096,11.0001,0.3526,0.3521);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Aj6ByQgsAAgfghQgggiAAgvQAAguAggiQAfghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_55.setTransform(56.723,11.0699,0.3526,0.3522);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_56.setTransform(28.5125,24.1623,0.3526,0.3522);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQArAHAbAjQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_57.setTransform(28.5127,24.1625,0.3526,0.3522);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_58.setTransform(22.108,24.0822,0.3526,0.3521);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAgghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_59.setTransform(21.9183,24.1537,0.3526,0.3522);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_60.setTransform(28.4949,11.1051,0.3526,0.3522);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfAAAoQABAngXAfQgYAiglAIQgJACgQAAIhvABg");
	this.shape_61.setTransform(28.4951,11.1051,0.3526,0.3522);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_62.setTransform(22.0904,11.0353,0.3526,0.3521);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_63.setTransform(21.9007,11.1051,0.3526,0.3522);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B7BEC8").s().p("AwwZ6QgYAAgRgRQgRgRAAgZMAAAgx+QAAgYARgRQARgRAYAAMAhhAAAQAYAAARARQARARAAAYMAAAAx+QAAAZgRARQgRARgYAAg");
	this.shape_64.setTransform(39.9053,58.3918,0.3527,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,79.8,116.8), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAfABAoQAAAngXAfQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape.setTransform(28.5035,50.7439,0.3526,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_1.setTransform(28.5039,50.7439,0.3526,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_2.setTransform(22.0992,50.669,0.3526,0.3521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_3.setTransform(21.9007,50.7439,0.3526,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAkQAYAfABAnQAAAngWAgQgYAggmAKQgJACgQAAQgJAAhnAAg");
	this.shape_4.setTransform(28.5211,90.2594,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAmgWAhQgYAggmAJQgJADgQAAIhwAAg");
	this.shape_5.setTransform(28.5215,90.2594,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_6.setTransform(22.1168,90.1793,0.3526,0.3521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAfAhQAgAiAAAuQAAAvggAiQgfAigsAAg");
	this.shape_7.setTransform(21.9183,90.2594,0.3526,0.3522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape_8.setTransform(28.5211,104.8224,0.3526,0.3522);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_9.setTransform(28.5215,104.8224,0.3526,0.3522);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_10.setTransform(22.1168,104.7404,0.3526,0.3521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfghAAgwQAAgvAfghQAgghAsgBIH0AAQAtABAfAhQAgAhAAAvQAAAwggAhQgfAhgtABg");
	this.shape_11.setTransform(21.9183,104.8224,0.3526,0.3522);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAhfAAg");
	this.shape_12.setTransform(28.5388,76.6649,0.3526,0.3522);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAIhwABg");
	this.shape_13.setTransform(28.5392,76.6649,0.3526,0.3522);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_14.setTransform(22.1344,76.5866,0.3526,0.3521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAwggAhQgfAigsAAg");
	this.shape_15.setTransform(21.936,76.6649,0.3526,0.3522);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_16.setTransform(28.5125,63.634,0.3526,0.3522);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJACgQAAIhwABg");
	this.shape_17.setTransform(28.5127,63.634,0.3526,0.3522);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_18.setTransform(22.108,63.5574,0.3526,0.3521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAfgiAtAAIH0AAQAtAAAfAiQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_19.setTransform(21.9183,63.634,0.3526,0.3522);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAQgRAAhfAAg");
	this.shape_20.setTransform(28.5211,37.3167,0.3526,0.3522);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAIhwAAg");
	this.shape_21.setTransform(28.5215,37.3167,0.3526,0.3522);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_22.setTransform(22.1168,37.2347,0.3526,0.3521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAgvAfghQAggiAsABIH0AAQAtgBAfAiQAgAhAAAvQAAAwggAhQgfAigtAAg");
	this.shape_23.setTransform(21.9183,37.3079,0.3526,0.3522);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_24.setTransform(63.4582,90.2418,0.3526,0.3522);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB8ABQAsAFAbAkQAXAeABAoQABAngXAfQgYAhglAJQgKACgQAAIhvABg");
	this.shape_25.setTransform(63.4584,90.2418,0.3526,0.3522);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_26.setTransform(57.0507,90.1617,0.3526,0.3521);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("Aj6BzQgsgBgfghQgggiAAgvQAAguAggiQAfgiAsABIH1AAQAsgBAfAiQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_27.setTransform(56.8552,90.2418,0.3526,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAcAjQAXAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_28.setTransform(63.4582,104.8224,0.3526,0.3522);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAJQgJADgQAAIhwAAg");
	this.shape_29.setTransform(63.4584,104.8224,0.3526,0.3522);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_30.setTransform(57.0507,104.7404,0.3526,0.3521);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("Aj5BzQgtgBgfghQgggiAAgvQAAgvAgghQAfgiAtAAIHzAAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtABg");
	this.shape_31.setTransform(56.864,104.8224,0.3526,0.3522);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_32.setTransform(63.4406,76.6561,0.3526,0.3522);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_33.setTransform(63.4408,76.6561,0.3526,0.3522);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_34.setTransform(57.0419,76.5866,0.3526,0.3521);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("Aj6ByQgsABgfgiQgggiAAgvQAAguAggiQAfghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAvggAiQgfAigtgBg");
	this.shape_35.setTransform(56.8464,76.6473,0.3526,0.3522);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_36.setTransform(63.4759,63.5722,0.3526,0.3522);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQAsAHAaAjQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_37.setTransform(63.476,63.5723,0.3526,0.3522);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_38.setTransform(57.0683,63.4958,0.3526,0.3521);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAgvAfghQAggiAsAAIH0AAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtAAg");
	this.shape_39.setTransform(56.8817,63.5635,0.3526,0.3522);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_40.setTransform(63.4759,50.5414,0.3526,0.3522);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_41.setTransform(63.476,50.5414,0.3526,0.3522);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_42.setTransform(57.0683,50.4665,0.3526,0.3521);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAguAfgiQAgghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAwggAhQgfAigtAAg");
	this.shape_43.setTransform(56.8817,50.5326,0.3526,0.3522);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAheAAg");
	this.shape_44.setTransform(63.4053,37.3079,0.3526,0.3522);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAKQgJACgQgBIhwABg");
	this.shape_45.setTransform(63.4055,37.3079,0.3526,0.3522);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_46.setTransform(56.9978,37.2347,0.3526,0.3521);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_47.setTransform(56.8111,37.3079,0.3526,0.3522);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQABQgJAAhmAAg");
	this.shape_48.setTransform(63.3701,24.1185,0.3526,0.3522);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB8AAQAsAGAbAjQAXAfABAoQABAngXAfQgYAhglAKQgJACgRAAIhvAAg");
	this.shape_49.setTransform(63.3703,24.1185,0.3526,0.3522);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_50.setTransform(56.9625,24.047,0.3526,0.3521);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("Aj5BzQgtgBggghQgfgiAAgvQAAgvAfghQAgghAtAAIH0AAQAtAAAeAhQAgAhAAAvQAAAwggAhQgfAhgsABg");
	this.shape_51.setTransform(56.7582,24.1185,0.3526,0.3522);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_52.setTransform(63.3172,11.0699,0.3526,0.3522);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAmgXAgQgXAhgmAJQgJADgQgBIhwABg");
	this.shape_53.setTransform(63.3174,11.0699,0.3526,0.3522);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_54.setTransform(56.9096,11.0001,0.3526,0.3521);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Aj6ByQgsAAgfghQgggiAAgvQAAguAggiQAfghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_55.setTransform(56.723,11.0699,0.3526,0.3522);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_56.setTransform(28.5125,24.1623,0.3526,0.3522);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQArAHAbAjQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_57.setTransform(28.5127,24.1625,0.3526,0.3522);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_58.setTransform(22.108,24.0822,0.3526,0.3521);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAgghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_59.setTransform(21.9183,24.1537,0.3526,0.3522);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_60.setTransform(28.4949,11.1051,0.3526,0.3522);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfAAAoQABAngXAfQgYAiglAIQgJACgQAAIhvABg");
	this.shape_61.setTransform(28.4951,11.1051,0.3526,0.3522);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_62.setTransform(22.0904,11.0353,0.3526,0.3521);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_63.setTransform(21.9007,11.1051,0.3526,0.3522);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B7BEC8").s().p("AwwZ6QgYAAgRgRQgRgRAAgZMAAAgx+QAAgYARgRQARgRAYAAMAhhAAAQAYAAARARQARARAAAYMAAAAx+QAAAZgRARQgRARgYAAg");
	this.shape_64.setTransform(39.9053,58.3918,0.3527,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,79.8,116.8), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFD5E5").s().p("AjrEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAIHXAAQB1AABSBSQBTBTAABzQAAB1hTBSQhSBSh1AAg");
	this.shape.setTransform(46.695,24.7323,0.3527,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AjdDSQhbhXAAh7QAAh6BbhXQBdhXCAAAQCBAABcBXQBcBXAAB6QAAB7hcBXQhcBXiBAAQiAAAhdhXg");
	this.shape_1.setTransform(46.9684,10.4404,0.3527,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD5E5").s().p("Ap/EZQh0AAhShSQhThTAAh0QAAh0BThSQBShSB0AAIT/AAQB0AABTBSQBSBSAAB0QAAB0hSBTQhTBSh0AAg");
	this.shape_2.setTransform(47.4798,35.1761,0.3527,0.3522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD5E5").s().p("AwCEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAMAgGAAAQB0AABTBSQBSBTAABzQAAB1hSBSQhTBSh0AAg");
	this.shape_3.setTransform(46.1484,48.5081,0.3527,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("AjNofIGbQ/");
	this.shape_4.setTransform(29.872,77.5072,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ah3lcIDvK5");
	this.shape_5.setTransform(22.07,70.9037,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ai3nuIFvPd");
	this.shape_6.setTransform(19.5576,75.5262,0.3526,0.3522);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40055").s().p("Ap6JTIm4ylMAhlgACImeSpg");
	this.shape_7.setTransform(47.6473,79.4519,0.3527,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,92.3,100.5), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFD5E5").s().p("AjrEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAIHXAAQB1AABSBSQBTBTAABzQAAB1hTBSQhSBSh1AAg");
	this.shape.setTransform(46.695,24.7323,0.3527,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AjdDSQhbhXAAh7QAAh6BbhXQBdhXCAAAQCBAABcBXQBcBXAAB6QAAB7hcBXQhcBXiBAAQiAAAhdhXg");
	this.shape_1.setTransform(46.9684,10.4404,0.3527,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD5E5").s().p("Ap/EZQh0AAhShSQhThTAAh0QAAh0BThSQBShSB0AAIT/AAQB0AABTBSQBSBSAAB0QAAB0hSBTQhTBSh0AAg");
	this.shape_2.setTransform(47.4798,35.1761,0.3527,0.3522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD5E5").s().p("AwCEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAMAgGAAAQB0AABTBSQBSBTAABzQAAB1hSBSQhTBSh0AAg");
	this.shape_3.setTransform(46.1484,48.5081,0.3527,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("AjNofIGbQ/");
	this.shape_4.setTransform(29.872,77.5072,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ah3lcIDvK5");
	this.shape_5.setTransform(22.07,70.9037,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ai3nuIFvPd");
	this.shape_6.setTransform(19.5576,75.5262,0.3526,0.3522);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40055").s().p("Ap6JTIm4ylMAhlgACImeSpg");
	this.shape_7.setTransform(47.6473,79.4519,0.3527,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,92.3,100.5), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFD5E5").s().p("AjrEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAIHXAAQB1AABSBSQBTBTAABzQAAB1hTBSQhSBSh1AAg");
	this.shape.setTransform(46.695,24.7323,0.3527,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AjdDSQhbhXAAh7QAAh6BbhXQBdhXCAAAQCBAABcBXQBcBXAAB6QAAB7hcBXQhcBXiBAAQiAAAhdhXg");
	this.shape_1.setTransform(46.9684,10.4404,0.3527,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD5E5").s().p("Ap/EZQh0AAhShSQhThTAAh0QAAh0BThSQBShSB0AAIT/AAQB0AABTBSQBSBSAAB0QAAB0hSBTQhTBSh0AAg");
	this.shape_2.setTransform(47.4798,35.1761,0.3527,0.3522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD5E5").s().p("AwCEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAMAgGAAAQB0AABTBSQBSBTAABzQAAB1hSBSQhTBSh0AAg");
	this.shape_3.setTransform(46.1484,48.5081,0.3527,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("AjNofIGbQ/");
	this.shape_4.setTransform(29.872,77.5072,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ah3lcIDvK5");
	this.shape_5.setTransform(22.07,70.9037,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ai3nuIFvPd");
	this.shape_6.setTransform(19.5576,75.5262,0.3526,0.3522);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40055").s().p("Ap6JTIm4ylMAhlgACImeSpg");
	this.shape_7.setTransform(47.6473,79.4519,0.3527,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,92.3,100.5), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFD5E5").s().p("AjrEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAIHXAAQB1AABSBSQBTBTAABzQAAB1hTBSQhSBSh1AAg");
	this.shape.setTransform(46.695,24.7323,0.3527,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AjdDSQhbhXAAh7QAAh6BbhXQBdhXCAAAQCBAABcBXQBcBXAAB6QAAB7hcBXQhcBXiBAAQiAAAhdhXg");
	this.shape_1.setTransform(46.9684,10.4404,0.3527,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD5E5").s().p("Ap/EZQh0AAhShSQhThTAAh0QAAh0BThSQBShSB0AAIT/AAQB0AABTBSQBSBSAAB0QAAB0hSBTQhTBSh0AAg");
	this.shape_2.setTransform(47.4798,35.1761,0.3527,0.3522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD5E5").s().p("AwCEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAMAgGAAAQB0AABTBSQBSBTAABzQAAB1hSBSQhTBSh0AAg");
	this.shape_3.setTransform(46.1484,48.5081,0.3527,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("AjNofIGbQ/");
	this.shape_4.setTransform(29.872,77.5072,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ah3lcIDvK5");
	this.shape_5.setTransform(22.07,70.9037,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ai3nuIFvPd");
	this.shape_6.setTransform(19.5576,75.5262,0.3526,0.3522);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40055").s().p("Ap6JTIm4ylMAhlgACImeSpg");
	this.shape_7.setTransform(47.6473,79.4519,0.3527,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,92.3,100.5), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#5599FF").s().p("EgFhAlSQikhFh/h+Qh/h+hFijQhJipAAi5QAAi5BJipQBFijB/h+QB/h+CkhFQCqhIC5AAQC7AACqBIQCkBFB/B+QB/B+BFCjQBICpAAC5QAAC5hICpQhFCjh/B+Qh/B+ikBFQiqBIi7AAQi5AAiqhIgA8BNaQikhFh/h+Qh/h+hFijQhJipAAi5QAAi5BJioQBFikB/h+QB/h+CkhFQCqhHC6AAQC7AACqBHQCkBFB/B+QB+B+BGCkQBICpAAC4QAAC5hICpQhGCjh+B+Qh/B+ikBFQiqBHi7AAQi6AAiqhHgAQ5MkQikhFh/h+Qh/h+hFijQhIipAAi4QAAi5BIipQBFijB/h+QB/h+CkhFQCrhIC6AAQC6AACqBIQClBFB+B+QB/B+BGCjQBICpAAC5QAAC4hICpQhGCjh/B+Qh+B+ilBFQiqBIi6AAQi6AAirhIgAmMrFQikhFh/h+Qh/h+hFijQhIipAAi5QAAi5BIipQBFikB/h9QB/h+CkhFQCqhIC6AAQC6AACqBIQCkBFB/B+QB/B9BFCkQBICpAAC5QAAC5hICpQhFCjh/B+Qh/B+ikBFQiqBIi6AAQi6AAiqhIg");
	this.shape.setTransform(235.375,245.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,470.8,491.6), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#5599FF").s().p("EgFcAjoQikhFh/h+Qh/h+hFijQhJipAAi5QAAi5BJipQBFijB/h+QB/h+CkhFQCqhIC5AAQC7AACqBIQCkBFB/B+QB/B+BFCjQBICpAAC5QAAC5hICpQhFCjh/B+Qh/B+ikBFQiqBIi7AAQi5AAiqhIgA9hNVQikhFh/h+Qh/h+hFijQhIipAAi5QAAi5BIioQBFikB/h+QB/h+CkhFQCqhHC7AAQC6AACqBHQCkBFB/B+QB/B+BFCkQBICpAAC4QAAC5hICpQhFCjh/B+Qh+B+ilBFQiqBHi6AAQi7AAiqhHgASZMfQikhFh/h+Qh/h+hFijQhIipAAi4QAAi5BIipQBFijB/h+QB/h+CkhFQCqhIC6AAQC7AACqBIQCkBFB/B+QB/B+BFCjQBICpAAC5QAAC4hICpQhFCjh/B+Qh/B+ikBFQiqBIi7AAQi6AAiqhIgAmHpbQikhFh/h+Qh/h+hFijQhIipAAi5QAAi5BIipQBFikB/h9QB/h+CkhFQCqhIC6AAQC6AACqBIQCkBFB/B+QB/B9BFCkQBICpAAC5QAAC5hICpQhFCjh/B+Qh/B+ikBFQiqBIi6AAQi6AAiqhIg");
	this.shape.setTransform(244.925,235.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,489.9,470.4), null);


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
	this.shape.graphics.f("#5599FF").s().p("EgPrAlbQnPjFllloQlllojEnSQjLnjABoRQgBoQDLnjQDEnSFlloQFlloHPjFQHfjNIMAAQINAAHfDNQHPDFFlFoQFlFnDEHTQDKHjAAIQQAAIRjKHjQjEHSllFoQllFonPDFQnfDNoNAAQoMAAnfjNg");
	this.shape.setTransform(91.5948,245.7369,0.3527,0.3522,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5599FF").s().p("EgPrAlbQnPjFllloQlllojEnSQjLnjAAoRQAAoQDLnjQDEnSFlloQFlloHPjFQHfjNIMAAQIMAAHgDNQHPDFFlFoQFlFnDEHTQDLHjAAIQQAAIRjLHjQjEHSllFoQllFonPDFQngDNoMAAQoMAAnfjNg");
	this.shape_1.setTransform(235.5457,395.5275,0.3527,0.3522,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5599FF").s().p("EgPrAlbQnPjEllloQlllpjEnSQjKnjAAoRQAAoQDKnjQDEnSFllpQFlloHPjEQHfjNIMAAQIMAAHgDNQHPDEFlFoQFlFpDEHSQDLHjAAIQQAAIRjLHjQjEHSllFpQllFonPDEQngDNoMAAQoMAAnfjNg");
	this.shape_2.setTransform(231.2572,90.9611,0.3527,0.3522,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5599FF").s().p("AlkNGQikhFh/h+Qh/h+hFijQhIipAAi5QAAi4BIipQBFijB/h+QB/h+CkhFQCrhIC5AAQC6AACqBIQClBFB+B+QB/B+BGCjQBICpAAC4QAAC5hICpQhGCjh/B+Qh+B+ilBFQiqBIi6AAQi5AAirhIg");
	this.shape_3.setTransform(380.125,240.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,471.7,486.5), null);


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
	this.shape.graphics.f("#5599FF").s().p("EgFcAjZQikhFh/h+Qh/h+hFijQhJipAAi5QAAi5BJipQBFijB/h+QB/h+CkhFQCqhIC5AAQC7AACqBIQCkBFB/B+QB/B+BFCjQBICpAAC5QAAC5hICpQhFCjh/B+Qh/B+ikBFQiqBIi7AAQi5AAiqhIgA9hNkQikhFh/h+Qh/h+hFijQhIipAAi5QAAi5BIioQBFikB/h+QB/h+CkhFQCqhHC7AAQC6AACqBHQCkBFB/B+QB/B+BFCkQBICpAAC4QAAC5hICpQhFCjh/B+Qh+B+ilBFQiqBHi6AAQi7AAiqhHgASZMuQikhFh/h+Qh/h+hFijQhIipAAi4QAAi5BIipQBFijB/h+QB/h+CkhFQCqhIC6AAQC7AACqBIQCkBFB/B+QB/B+BFCjQBICpAAC5QAAC4hICpQhFCjh/B+Qh/B+ikBFQiqBIi7AAQi6AAiqhIgAmHpMQikhFh/h+Qh/h+hFijQhIipAAi5QAAi5BIipQBFikB/h9QB/h+CkhFQCqhIC6AAQC6AACqBIQCkBFB/B+QB/B9BFCkQBICpAAC5QAAC5hICpQhFCjh/B+Qh/B+ikBFQiqBIi6AAQi6AAiqhIg");
	this.shape.setTransform(244.925,233.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,489.9,467.4), null);


(lib.pills = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AC93A7").s().p("Ak6A7IAAh1IJ1AAIAAB1g");
	this.shape.setTransform(25.9975,57.687,0.3527,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AC93A7").s().p("ApqA/IAAh9ITVAAIAAB9g");
	this.shape_1.setTransform(36.7016,50.8976,0.3527,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#550022").s().p("AoKBAIAAh/IQVAAIAAB/g");
	this.shape_2.setTransform(33.3158,41.6691,0.3527,0.3522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#550022").s().p("ArjA9IAAh5IXHAAIAAB5g");
	this.shape_3.setTransform(40.9428,35.232,0.3527,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D5E5FF").s().p("AsWJlQgrAAgggcQgegeAAgqIAAwCQAAgpAegdQAggeArAAIYtAAQAsAAAeAeQAgAdgBApIAAQCQABAqggAeQgeAcgsAAg");
	this.shape_4.setTransform(41.701,50.1844,0.3527,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D5E5FF").s().p("AwiEuQgsABgfgeQgfgdAAgqIAAmUQAAgoAfgeQAfgdAsgBMAhFAAAQAsABAfAdQAfAdAAApIAAGUQAAAqgfAdQgfAegsgBg");
	this.shape_5.setTransform(41.0574,10.6285,0.3527,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0044AA").s().p("ArZUFQibAAhuhoQhuhoAAiTIAA9DQAAiTBuhoQBthoCcAAIWzAAQCcAABtBoQBuBoAACTIAAdDQAACThuBoQhtBoicAAg");
	this.shape_6.setTransform(41.0574,54.7898,0.3527,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pills, new cjs.Rectangle(0,0,82.2,100.1), null);


(lib.tablets = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol14();
	this.instance.setTransform(39.9,58.4,1,1,0,0,0,39.9,58.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAfABAoQAAAngXAfQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape.setTransform(-125.7324,-92.4811,0.3526,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_1.setTransform(-125.732,-92.4811,0.3526,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_2.setTransform(-132.0731,-92.5061,0.3526,0.3522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_3.setTransform(-132.3355,-92.4811,0.3526,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAkQAYAfABAnQAAAngWAgQgYAggmAKQgJACgQAAQgJAAhnAAg");
	this.shape_4.setTransform(-125.7147,-52.9639,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAmgWAhQgYAggmAJQgJADgQAAIhwAAg");
	this.shape_5.setTransform(-125.7143,-52.9639,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_6.setTransform(-132.0555,-52.9906,0.3526,0.3522);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAfAhQAgAiAAAuQAAAvggAiQgfAigsAAg");
	this.shape_7.setTransform(-132.3178,-52.9639,0.3526,0.3522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape_8.setTransform(-125.7147,-38.4003,0.3526,0.3522);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_9.setTransform(-125.7143,-38.4003,0.3526,0.3522);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_10.setTransform(-132.0555,-38.4276,0.3526,0.3522);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfghAAgwQAAgvAfghQAgghAsgBIH0AAQAtABAfAhQAgAhAAAvQAAAwggAhQgfAhgtABg");
	this.shape_11.setTransform(-132.3178,-38.4003,0.3526,0.3522);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAhfAAg");
	this.shape_12.setTransform(-125.6971,-66.559,0.3526,0.3522);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAIhwABg");
	this.shape_13.setTransform(-125.6967,-66.559,0.3526,0.3522);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_14.setTransform(-132.0378,-66.5851,0.3526,0.3522);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAwggAhQgfAigsAAg");
	this.shape_15.setTransform(-132.3002,-66.559,0.3526,0.3522);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_16.setTransform(-125.7233,-79.5905,0.3526,0.3522);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJACgQAAIhwABg");
	this.shape_17.setTransform(-125.7232,-79.5905,0.3526,0.3522);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_18.setTransform(-132.0643,-79.616,0.3526,0.3522);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAfgiAtAAIH0AAQAtAAAfAiQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_19.setTransform(-132.3178,-79.5905,0.3526,0.3522);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAQgRAAhfAAg");
	this.shape_20.setTransform(-125.7147,-105.9089,0.3526,0.3522);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAIhwAAg");
	this.shape_21.setTransform(-125.7143,-105.9089,0.3526,0.3522);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_22.setTransform(-132.0555,-105.9421,0.3526,0.3522);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAgvAfghQAggiAsABIH0AAQAtgBAfAiQAgAhAAAvQAAAwggAhQgfAigtAAg");
	this.shape_23.setTransform(-132.3178,-105.9177,0.3526,0.3522);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_24.setTransform(-90.7761,-52.9815,0.3526,0.3522);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB8ABQAsAFAbAkQAXAeABAoQABAngXAfQgYAhglAJQgKACgQAAIhvABg");
	this.shape_25.setTransform(-90.7759,-52.9815,0.3526,0.3522);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_26.setTransform(-97.1186,-53.0082,0.3526,0.3522);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("Aj6BzQgsgBgfghQgggiAAgvQAAguAggiQAfgiAsABIH1AAQAsgBAfAiQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_27.setTransform(-97.3794,-52.9815,0.3526,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAcAjQAXAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_28.setTransform(-90.7761,-38.4003,0.3526,0.3522);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAJQgJADgQAAIhwAAg");
	this.shape_29.setTransform(-90.7759,-38.4003,0.3526,0.3522);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_30.setTransform(-97.1186,-38.4276,0.3526,0.3522);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("Aj5BzQgtgBgfghQgggiAAgvQAAgvAgghQAfgiAtAAIHzAAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtABg");
	this.shape_31.setTransform(-97.3706,-38.4003,0.3526,0.3522);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_32.setTransform(-90.7938,-66.5678,0.3526,0.3522);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_33.setTransform(-90.7936,-66.5678,0.3526,0.3522);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_34.setTransform(-97.1274,-66.5851,0.3526,0.3522);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("Aj6ByQgsABgfgiQgggiAAgvQAAguAggiQAfghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAvggAiQgfAigtgBg");
	this.shape_35.setTransform(-97.3883,-66.5766,0.3526,0.3522);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_36.setTransform(-90.7585,-79.6523,0.3526,0.3522);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQAsAHAaAjQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_37.setTransform(-90.7583,-79.6521,0.3526,0.3522);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_38.setTransform(-97.101,-79.6777,0.3526,0.3522);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAgvAfghQAggiAsAAIH0AAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtAAg");
	this.shape_39.setTransform(-97.353,-79.6609,0.3526,0.3522);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_40.setTransform(-90.7585,-92.6837,0.3526,0.3522);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_41.setTransform(-90.7583,-92.6837,0.3526,0.3522);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_42.setTransform(-97.101,-92.7086,0.3526,0.3522);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAguAfgiQAgghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAwggAhQgfAigtAAg");
	this.shape_43.setTransform(-97.353,-92.6925,0.3526,0.3522);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAheAAg");
	this.shape_44.setTransform(-90.829,-105.9177,0.3526,0.3522);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAKQgJACgQgBIhwABg");
	this.shape_45.setTransform(-90.8288,-105.9177,0.3526,0.3522);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_46.setTransform(-97.1715,-105.9421,0.3526,0.3522);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_47.setTransform(-97.4235,-105.9177,0.3526,0.3522);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQABQgJAAhmAAg");
	this.shape_48.setTransform(-90.8643,-119.1077,0.3526,0.3522);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB8AAQAsAGAbAjQAXAfABAoQABAngXAfQgYAhglAKQgJACgRAAIhvAAg");
	this.shape_49.setTransform(-90.8641,-119.1077,0.3526,0.3522);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_50.setTransform(-97.2068,-119.1315,0.3526,0.3522);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("Aj5BzQgtgBggghQgfgiAAgvQAAgvAfghQAgghAtAAIH0AAQAtAAAeAhQAgAhAAAvQAAAwggAhQgfAhgsABg");
	this.shape_51.setTransform(-97.4764,-119.1077,0.3526,0.3522);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_52.setTransform(-90.9172,-132.1568,0.3526,0.3522);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAmgXAgQgXAhgmAJQgJADgQgBIhwABg");
	this.shape_53.setTransform(-90.917,-132.1568,0.3526,0.3522);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_54.setTransform(-97.2597,-132.1801,0.3526,0.3522);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Aj6ByQgsAAgfghQgggiAAgvQAAguAggiQAfghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_55.setTransform(-97.5117,-132.1568,0.3526,0.3522);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_56.setTransform(-125.7233,-119.0639,0.3526,0.3522);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQArAHAbAjQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_57.setTransform(-125.7232,-119.0637,0.3526,0.3522);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_58.setTransform(-132.0643,-119.0963,0.3526,0.3522);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAgghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_59.setTransform(-132.3178,-119.0725,0.3526,0.3522);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_60.setTransform(-125.741,-132.1216,0.3526,0.3522);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfAAAoQABAngXAfQgYAiglAIQgJACgQAAIhvABg");
	this.shape_61.setTransform(-125.7408,-132.1216,0.3526,0.3522);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_62.setTransform(-132.0819,-132.1449,0.3526,0.3522);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_63.setTransform(-132.3355,-132.1216,0.3526,0.3522);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B7BEC8").s().p("AwwZ6QgYAAgRgRQgRgRAAgZMAAAgx+QAAgYARgRQARgRAYAAMAhhAAAQAYAAARARQARARAAAYMAAAAx+QAAAZgRARQgRARgYAAg");
	this.shape_64.setTransform(-114.3947,-84.8582,0.3527,0.3522);

	this.instance_1 = new lib.Symbol15();
	this.instance_1.setTransform(-114.4,-84.85,1,1,0,0,0,39.9,58.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol16();
	this.instance_2.setTransform(33.05,-234,1,1,0,0,0,39.9,58.4);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol17();
	this.instance_3.setTransform(189,-87.4,1,1,0,0,0,39.9,58.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_64,p:{x:-114.3947,y:-84.8582}},{t:this.shape_63,p:{x:-132.3355,y:-132.1216}},{t:this.shape_62,p:{x:-132.0819,y:-132.1449}},{t:this.shape_61,p:{x:-125.7408,y:-132.1216}},{t:this.shape_60,p:{x:-125.741,y:-132.1216}},{t:this.shape_59,p:{x:-132.3178,y:-119.0725}},{t:this.shape_58,p:{x:-132.0643,y:-119.0963}},{t:this.shape_57,p:{x:-125.7232,y:-119.0637}},{t:this.shape_56,p:{x:-125.7233,y:-119.0639}},{t:this.shape_55,p:{x:-97.5117,y:-132.1568}},{t:this.shape_54,p:{x:-97.2597,y:-132.1801}},{t:this.shape_53,p:{x:-90.917,y:-132.1568}},{t:this.shape_52,p:{x:-90.9172,y:-132.1568}},{t:this.shape_51,p:{x:-97.4764,y:-119.1077}},{t:this.shape_50,p:{x:-97.2068,y:-119.1315}},{t:this.shape_49,p:{x:-90.8641,y:-119.1077}},{t:this.shape_48,p:{x:-90.8643,y:-119.1077}},{t:this.shape_47,p:{x:-97.4235,y:-105.9177}},{t:this.shape_46,p:{x:-97.1715,y:-105.9421}},{t:this.shape_45,p:{x:-90.8288,y:-105.9177}},{t:this.shape_44,p:{x:-90.829,y:-105.9177}},{t:this.shape_43,p:{x:-97.353,y:-92.6925}},{t:this.shape_42,p:{x:-97.101,y:-92.7086}},{t:this.shape_41,p:{x:-90.7583,y:-92.6837}},{t:this.shape_40,p:{x:-90.7585,y:-92.6837}},{t:this.shape_39,p:{x:-97.353,y:-79.6609}},{t:this.shape_38,p:{x:-97.101,y:-79.6777}},{t:this.shape_37,p:{x:-90.7583,y:-79.6521}},{t:this.shape_36,p:{x:-90.7585,y:-79.6523}},{t:this.shape_35,p:{x:-97.3883,y:-66.5766}},{t:this.shape_34,p:{x:-97.1274,y:-66.5851}},{t:this.shape_33,p:{x:-90.7936,y:-66.5678}},{t:this.shape_32,p:{x:-90.7938,y:-66.5678}},{t:this.shape_31,p:{x:-97.3706,y:-38.4003}},{t:this.shape_30,p:{x:-97.1186,y:-38.4276}},{t:this.shape_29,p:{x:-90.7759,y:-38.4003}},{t:this.shape_28,p:{x:-90.7761,y:-38.4003}},{t:this.shape_27,p:{x:-97.3794,y:-52.9815}},{t:this.shape_26,p:{x:-97.1186,y:-53.0082}},{t:this.shape_25,p:{x:-90.7759,y:-52.9815}},{t:this.shape_24,p:{x:-90.7761,y:-52.9815}},{t:this.shape_23,p:{x:-132.3178,y:-105.9177}},{t:this.shape_22,p:{x:-132.0555,y:-105.9421}},{t:this.shape_21,p:{x:-125.7143,y:-105.9089}},{t:this.shape_20,p:{x:-125.7147,y:-105.9089}},{t:this.shape_19,p:{x:-132.3178,y:-79.5905}},{t:this.shape_18,p:{x:-132.0643,y:-79.616}},{t:this.shape_17,p:{x:-125.7232,y:-79.5905}},{t:this.shape_16,p:{x:-125.7233,y:-79.5905}},{t:this.shape_15,p:{x:-132.3002,y:-66.559}},{t:this.shape_14,p:{x:-132.0378,y:-66.5851}},{t:this.shape_13,p:{x:-125.6967,y:-66.559}},{t:this.shape_12,p:{x:-125.6971,y:-66.559}},{t:this.shape_11,p:{x:-132.3178,y:-38.4003}},{t:this.shape_10,p:{x:-132.0555,y:-38.4276}},{t:this.shape_9,p:{x:-125.7143,y:-38.4003}},{t:this.shape_8,p:{x:-125.7147,y:-38.4003}},{t:this.shape_7,p:{x:-132.3178,y:-52.9639}},{t:this.shape_6,p:{x:-132.0555,y:-52.9906}},{t:this.shape_5,p:{x:-125.7143,y:-52.9639}},{t:this.shape_4,p:{x:-125.7147,y:-52.9639}},{t:this.shape_3,p:{x:-132.3355,y:-92.4811}},{t:this.shape_2,p:{x:-132.0731,y:-92.5061}},{t:this.shape_1,p:{x:-125.732,y:-92.4811}},{t:this.shape,p:{x:-125.7324,y:-92.4811}}]},1).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_64,p:{x:33.0553,y:-234.0082}},{t:this.shape_63,p:{x:15.1145,y:-281.2716}},{t:this.shape_62,p:{x:15.3681,y:-281.2949}},{t:this.shape_61,p:{x:21.7092,y:-281.2716}},{t:this.shape_60,p:{x:21.709,y:-281.2716}},{t:this.shape_59,p:{x:15.1322,y:-268.2225}},{t:this.shape_58,p:{x:15.3857,y:-268.2463}},{t:this.shape_57,p:{x:21.7268,y:-268.2137}},{t:this.shape_56,p:{x:21.7267,y:-268.2139}},{t:this.shape_55,p:{x:49.9383,y:-281.3068}},{t:this.shape_54,p:{x:50.1903,y:-281.3301}},{t:this.shape_53,p:{x:56.533,y:-281.3068}},{t:this.shape_52,p:{x:56.5328,y:-281.3068}},{t:this.shape_51,p:{x:49.9736,y:-268.2577}},{t:this.shape_50,p:{x:50.2432,y:-268.2815}},{t:this.shape_49,p:{x:56.5859,y:-268.2577}},{t:this.shape_48,p:{x:56.5857,y:-268.2577}},{t:this.shape_47,p:{x:50.0265,y:-255.0677}},{t:this.shape_46,p:{x:50.2785,y:-255.0921}},{t:this.shape_45,p:{x:56.6212,y:-255.0677}},{t:this.shape_44,p:{x:56.621,y:-255.0677}},{t:this.shape_43,p:{x:50.097,y:-241.8425}},{t:this.shape_42,p:{x:50.349,y:-241.8586}},{t:this.shape_41,p:{x:56.6917,y:-241.8337}},{t:this.shape_40,p:{x:56.6915,y:-241.8337}},{t:this.shape_39,p:{x:50.097,y:-228.8109}},{t:this.shape_38,p:{x:50.349,y:-228.8277}},{t:this.shape_37,p:{x:56.6917,y:-228.8021}},{t:this.shape_36,p:{x:56.6915,y:-228.8023}},{t:this.shape_35,p:{x:50.0617,y:-215.7266}},{t:this.shape_34,p:{x:50.3226,y:-215.7351}},{t:this.shape_33,p:{x:56.6564,y:-215.7178}},{t:this.shape_32,p:{x:56.6562,y:-215.7178}},{t:this.shape_31,p:{x:50.0794,y:-187.5503}},{t:this.shape_30,p:{x:50.3314,y:-187.5776}},{t:this.shape_29,p:{x:56.6741,y:-187.5503}},{t:this.shape_28,p:{x:56.6739,y:-187.5503}},{t:this.shape_27,p:{x:50.0706,y:-202.1315}},{t:this.shape_26,p:{x:50.3314,y:-202.1582}},{t:this.shape_25,p:{x:56.6741,y:-202.1315}},{t:this.shape_24,p:{x:56.6739,y:-202.1315}},{t:this.shape_23,p:{x:15.1322,y:-255.0677}},{t:this.shape_22,p:{x:15.3945,y:-255.0921}},{t:this.shape_21,p:{x:21.7357,y:-255.0589}},{t:this.shape_20,p:{x:21.7353,y:-255.0589}},{t:this.shape_19,p:{x:15.1322,y:-228.7405}},{t:this.shape_18,p:{x:15.3857,y:-228.766}},{t:this.shape_17,p:{x:21.7268,y:-228.7405}},{t:this.shape_16,p:{x:21.7267,y:-228.7405}},{t:this.shape_15,p:{x:15.1498,y:-215.709}},{t:this.shape_14,p:{x:15.4122,y:-215.7351}},{t:this.shape_13,p:{x:21.7533,y:-215.709}},{t:this.shape_12,p:{x:21.7529,y:-215.709}},{t:this.shape_11,p:{x:15.1322,y:-187.5503}},{t:this.shape_10,p:{x:15.3945,y:-187.5776}},{t:this.shape_9,p:{x:21.7357,y:-187.5503}},{t:this.shape_8,p:{x:21.7353,y:-187.5503}},{t:this.shape_7,p:{x:15.1322,y:-202.1139}},{t:this.shape_6,p:{x:15.3945,y:-202.1406}},{t:this.shape_5,p:{x:21.7357,y:-202.1139}},{t:this.shape_4,p:{x:21.7353,y:-202.1139}},{t:this.shape_3,p:{x:15.1145,y:-241.6311}},{t:this.shape_2,p:{x:15.3769,y:-241.6561}},{t:this.shape_1,p:{x:21.718,y:-241.6311}},{t:this.shape,p:{x:21.7176,y:-241.6311}}]},1).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_64,p:{x:189.0053,y:-87.4082}},{t:this.shape_63,p:{x:171.0645,y:-134.6716}},{t:this.shape_62,p:{x:171.3181,y:-134.6949}},{t:this.shape_61,p:{x:177.6592,y:-134.6716}},{t:this.shape_60,p:{x:177.659,y:-134.6716}},{t:this.shape_59,p:{x:171.0822,y:-121.6225}},{t:this.shape_58,p:{x:171.3357,y:-121.6463}},{t:this.shape_57,p:{x:177.6768,y:-121.6137}},{t:this.shape_56,p:{x:177.6767,y:-121.6139}},{t:this.shape_55,p:{x:205.8883,y:-134.7068}},{t:this.shape_54,p:{x:206.1403,y:-134.7301}},{t:this.shape_53,p:{x:212.483,y:-134.7068}},{t:this.shape_52,p:{x:212.4828,y:-134.7068}},{t:this.shape_51,p:{x:205.9236,y:-121.6577}},{t:this.shape_50,p:{x:206.1932,y:-121.6815}},{t:this.shape_49,p:{x:212.5359,y:-121.6577}},{t:this.shape_48,p:{x:212.5357,y:-121.6577}},{t:this.shape_47,p:{x:205.9765,y:-108.4677}},{t:this.shape_46,p:{x:206.2285,y:-108.4921}},{t:this.shape_45,p:{x:212.5712,y:-108.4677}},{t:this.shape_44,p:{x:212.571,y:-108.4677}},{t:this.shape_43,p:{x:206.047,y:-95.2425}},{t:this.shape_42,p:{x:206.299,y:-95.2586}},{t:this.shape_41,p:{x:212.6417,y:-95.2337}},{t:this.shape_40,p:{x:212.6415,y:-95.2337}},{t:this.shape_39,p:{x:206.047,y:-82.2109}},{t:this.shape_38,p:{x:206.299,y:-82.2277}},{t:this.shape_37,p:{x:212.6417,y:-82.2021}},{t:this.shape_36,p:{x:212.6415,y:-82.2023}},{t:this.shape_35,p:{x:206.0117,y:-69.1266}},{t:this.shape_34,p:{x:206.2726,y:-69.1351}},{t:this.shape_33,p:{x:212.6064,y:-69.1178}},{t:this.shape_32,p:{x:212.6062,y:-69.1178}},{t:this.shape_31,p:{x:206.0294,y:-40.9503}},{t:this.shape_30,p:{x:206.2814,y:-40.9776}},{t:this.shape_29,p:{x:212.6241,y:-40.9503}},{t:this.shape_28,p:{x:212.6239,y:-40.9503}},{t:this.shape_27,p:{x:206.0206,y:-55.5315}},{t:this.shape_26,p:{x:206.2814,y:-55.5582}},{t:this.shape_25,p:{x:212.6241,y:-55.5315}},{t:this.shape_24,p:{x:212.6239,y:-55.5315}},{t:this.shape_23,p:{x:171.0822,y:-108.4677}},{t:this.shape_22,p:{x:171.3445,y:-108.4921}},{t:this.shape_21,p:{x:177.6857,y:-108.4589}},{t:this.shape_20,p:{x:177.6853,y:-108.4589}},{t:this.shape_19,p:{x:171.0822,y:-82.1405}},{t:this.shape_18,p:{x:171.3357,y:-82.166}},{t:this.shape_17,p:{x:177.6768,y:-82.1405}},{t:this.shape_16,p:{x:177.6767,y:-82.1405}},{t:this.shape_15,p:{x:171.0998,y:-69.109}},{t:this.shape_14,p:{x:171.3622,y:-69.1351}},{t:this.shape_13,p:{x:177.7033,y:-69.109}},{t:this.shape_12,p:{x:177.7029,y:-69.109}},{t:this.shape_11,p:{x:171.0822,y:-40.9503}},{t:this.shape_10,p:{x:171.3445,y:-40.9776}},{t:this.shape_9,p:{x:177.6857,y:-40.9503}},{t:this.shape_8,p:{x:177.6853,y:-40.9503}},{t:this.shape_7,p:{x:171.0822,y:-55.5139}},{t:this.shape_6,p:{x:171.3445,y:-55.5406}},{t:this.shape_5,p:{x:177.6857,y:-55.5139}},{t:this.shape_4,p:{x:177.6853,y:-55.5139}},{t:this.shape_3,p:{x:171.0645,y:-95.0311}},{t:this.shape_2,p:{x:171.3269,y:-95.0561}},{t:this.shape_1,p:{x:177.668,y:-95.0311}},{t:this.shape,p:{x:177.6676,y:-95.0311}}]},1).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_64,p:{x:39.9053,y:58.3918}},{t:this.shape_63,p:{x:21.9645,y:11.1284}},{t:this.shape_62,p:{x:22.2181,y:11.1051}},{t:this.shape_61,p:{x:28.5592,y:11.1284}},{t:this.shape_60,p:{x:28.559,y:11.1284}},{t:this.shape_59,p:{x:21.9822,y:24.1775}},{t:this.shape_58,p:{x:22.2357,y:24.1537}},{t:this.shape_57,p:{x:28.5768,y:24.1863}},{t:this.shape_56,p:{x:28.5767,y:24.1861}},{t:this.shape_55,p:{x:56.7883,y:11.0932}},{t:this.shape_54,p:{x:57.0403,y:11.0699}},{t:this.shape_53,p:{x:63.383,y:11.0932}},{t:this.shape_52,p:{x:63.3828,y:11.0932}},{t:this.shape_51,p:{x:56.8236,y:24.1423}},{t:this.shape_50,p:{x:57.0932,y:24.1185}},{t:this.shape_49,p:{x:63.4359,y:24.1423}},{t:this.shape_48,p:{x:63.4357,y:24.1423}},{t:this.shape_47,p:{x:56.8765,y:37.3323}},{t:this.shape_46,p:{x:57.1285,y:37.3079}},{t:this.shape_45,p:{x:63.4712,y:37.3323}},{t:this.shape_44,p:{x:63.471,y:37.3323}},{t:this.shape_43,p:{x:56.947,y:50.5575}},{t:this.shape_42,p:{x:57.199,y:50.5414}},{t:this.shape_41,p:{x:63.5417,y:50.5663}},{t:this.shape_40,p:{x:63.5415,y:50.5663}},{t:this.shape_39,p:{x:56.947,y:63.5891}},{t:this.shape_38,p:{x:57.199,y:63.5723}},{t:this.shape_37,p:{x:63.5417,y:63.5979}},{t:this.shape_36,p:{x:63.5415,y:63.5977}},{t:this.shape_35,p:{x:56.9117,y:76.6734}},{t:this.shape_34,p:{x:57.1726,y:76.6649}},{t:this.shape_33,p:{x:63.5064,y:76.6822}},{t:this.shape_32,p:{x:63.5062,y:76.6822}},{t:this.shape_31,p:{x:56.9294,y:104.8497}},{t:this.shape_30,p:{x:57.1814,y:104.8224}},{t:this.shape_29,p:{x:63.5241,y:104.8497}},{t:this.shape_28,p:{x:63.5239,y:104.8497}},{t:this.shape_27,p:{x:56.9206,y:90.2685}},{t:this.shape_26,p:{x:57.1814,y:90.2418}},{t:this.shape_25,p:{x:63.5241,y:90.2685}},{t:this.shape_24,p:{x:63.5239,y:90.2685}},{t:this.shape_23,p:{x:21.9822,y:37.3323}},{t:this.shape_22,p:{x:22.2445,y:37.3079}},{t:this.shape_21,p:{x:28.5857,y:37.3411}},{t:this.shape_20,p:{x:28.5853,y:37.3411}},{t:this.shape_19,p:{x:21.9822,y:63.6595}},{t:this.shape_18,p:{x:22.2357,y:63.634}},{t:this.shape_17,p:{x:28.5768,y:63.6595}},{t:this.shape_16,p:{x:28.5767,y:63.6595}},{t:this.shape_15,p:{x:21.9998,y:76.691}},{t:this.shape_14,p:{x:22.2622,y:76.6649}},{t:this.shape_13,p:{x:28.6033,y:76.691}},{t:this.shape_12,p:{x:28.6029,y:76.691}},{t:this.shape_11,p:{x:21.9822,y:104.8497}},{t:this.shape_10,p:{x:22.2445,y:104.8224}},{t:this.shape_9,p:{x:28.5857,y:104.8497}},{t:this.shape_8,p:{x:28.5853,y:104.8497}},{t:this.shape_7,p:{x:21.9822,y:90.2861}},{t:this.shape_6,p:{x:22.2445,y:90.2594}},{t:this.shape_5,p:{x:28.5857,y:90.2861}},{t:this.shape_4,p:{x:28.5853,y:90.2861}},{t:this.shape_3,p:{x:21.9645,y:50.7689}},{t:this.shape_2,p:{x:22.2269,y:50.7439}},{t:this.shape_1,p:{x:28.568,y:50.7689}},{t:this.shape,p:{x:28.5676,y:50.7689}}]},1).to({state:[{t:this.shape_64,p:{x:39.9053,y:58.3918}},{t:this.shape_63,p:{x:21.9645,y:11.1284}},{t:this.shape_62,p:{x:22.2181,y:11.1051}},{t:this.shape_61,p:{x:28.5592,y:11.1284}},{t:this.shape_60,p:{x:28.559,y:11.1284}},{t:this.shape_59,p:{x:21.9822,y:24.1775}},{t:this.shape_58,p:{x:22.2357,y:24.1537}},{t:this.shape_57,p:{x:28.5768,y:24.1863}},{t:this.shape_56,p:{x:28.5767,y:24.1861}},{t:this.shape_55,p:{x:56.7883,y:11.0932}},{t:this.shape_54,p:{x:57.0403,y:11.0699}},{t:this.shape_53,p:{x:63.383,y:11.0932}},{t:this.shape_52,p:{x:63.3828,y:11.0932}},{t:this.shape_51,p:{x:56.8236,y:24.1423}},{t:this.shape_50,p:{x:57.0932,y:24.1185}},{t:this.shape_49,p:{x:63.4359,y:24.1423}},{t:this.shape_48,p:{x:63.4357,y:24.1423}},{t:this.shape_47,p:{x:56.8765,y:37.3323}},{t:this.shape_46,p:{x:57.1285,y:37.3079}},{t:this.shape_45,p:{x:63.4712,y:37.3323}},{t:this.shape_44,p:{x:63.471,y:37.3323}},{t:this.shape_43,p:{x:56.947,y:50.5575}},{t:this.shape_42,p:{x:57.199,y:50.5414}},{t:this.shape_41,p:{x:63.5417,y:50.5663}},{t:this.shape_40,p:{x:63.5415,y:50.5663}},{t:this.shape_39,p:{x:56.947,y:63.5891}},{t:this.shape_38,p:{x:57.199,y:63.5723}},{t:this.shape_37,p:{x:63.5417,y:63.5979}},{t:this.shape_36,p:{x:63.5415,y:63.5977}},{t:this.shape_35,p:{x:56.9117,y:76.6734}},{t:this.shape_34,p:{x:57.1726,y:76.6649}},{t:this.shape_33,p:{x:63.5064,y:76.6822}},{t:this.shape_32,p:{x:63.5062,y:76.6822}},{t:this.shape_31,p:{x:56.9294,y:104.8497}},{t:this.shape_30,p:{x:57.1814,y:104.8224}},{t:this.shape_29,p:{x:63.5241,y:104.8497}},{t:this.shape_28,p:{x:63.5239,y:104.8497}},{t:this.shape_27,p:{x:56.9206,y:90.2685}},{t:this.shape_26,p:{x:57.1814,y:90.2418}},{t:this.shape_25,p:{x:63.5241,y:90.2685}},{t:this.shape_24,p:{x:63.5239,y:90.2685}},{t:this.shape_23,p:{x:21.9822,y:37.3323}},{t:this.shape_22,p:{x:22.2445,y:37.3079}},{t:this.shape_21,p:{x:28.5857,y:37.3411}},{t:this.shape_20,p:{x:28.5853,y:37.3411}},{t:this.shape_19,p:{x:21.9822,y:63.6595}},{t:this.shape_18,p:{x:22.2357,y:63.634}},{t:this.shape_17,p:{x:28.5768,y:63.6595}},{t:this.shape_16,p:{x:28.5767,y:63.6595}},{t:this.shape_15,p:{x:21.9998,y:76.691}},{t:this.shape_14,p:{x:22.2622,y:76.6649}},{t:this.shape_13,p:{x:28.6033,y:76.691}},{t:this.shape_12,p:{x:28.6029,y:76.691}},{t:this.shape_11,p:{x:21.9822,y:104.8497}},{t:this.shape_10,p:{x:22.2445,y:104.8224}},{t:this.shape_9,p:{x:28.5857,y:104.8497}},{t:this.shape_8,p:{x:28.5853,y:104.8497}},{t:this.shape_7,p:{x:21.9822,y:90.2861}},{t:this.shape_6,p:{x:22.2445,y:90.2594}},{t:this.shape_5,p:{x:28.5857,y:90.2861}},{t:this.shape_4,p:{x:28.5853,y:90.2861}},{t:this.shape_3,p:{x:21.9645,y:50.7689}},{t:this.shape_2,p:{x:22.2269,y:50.7439}},{t:this.shape_1,p:{x:28.568,y:50.7689}},{t:this.shape,p:{x:28.5676,y:50.7689}}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:29.7,y:55.45},0).wait(1).to({x:19.8,y:52.15},0).wait(1).to({x:10.25,y:48.55},0).wait(1).to({x:0.95,y:44.55},0).wait(1).to({x:-8.05,y:40.25},0).wait(1).to({x:-16.75,y:35.6},0).wait(1).to({x:-25.15,y:30.6},0).wait(1).to({x:-33.25,y:25.3},0).wait(1).to({x:-41.05,y:19.6},0).wait(1).to({x:-48.55,y:13.6},0).wait(1).to({x:-55.75,y:7.3},0).wait(1).to({x:-62.65,y:0.6},0).wait(1).to({x:-69.25,y:-6.4},0).wait(1).to({x:-75.55,y:-13.75},0).wait(1).to({x:-81.55,y:-21.45},0).wait(1).to({x:-87.25,y:-29.5},0).wait(1).to({x:-92.65,y:-37.85},0).wait(1).to({x:-97.75,y:-46.55},0).wait(1).to({x:-102.55,y:-55.6},0).wait(1).to({x:-107.05,y:-65},0).wait(1).to({x:-111.25,y:-74.75},0).wait(1).to({x:-115.2,y:-84.85},0).to({_off:true},1).wait(169));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({x:-113.65,y:-94.9},0).wait(1).to({x:-112.4,y:-104.7},0).wait(1).to({x:-110.65,y:-114.1},0).wait(1).to({x:-108.35,y:-123.25},0).wait(1).to({x:-105.55,y:-132},0).wait(1).to({x:-102.25,y:-140.45},0).wait(1).to({x:-98.45,y:-148.55},0).wait(1).to({x:-94.1,y:-156.35},0).wait(1).to({x:-89.2,y:-163.85},0).wait(1).to({x:-83.85,y:-170.95},0).wait(1).to({x:-77.95,y:-177.75},0).wait(1).to({x:-71.55,y:-184.25},0).wait(1).to({x:-64.65,y:-190.4},0).wait(1).to({x:-57.2,y:-196.25},0).wait(1).to({x:-49.25,y:-201.75},0).wait(1).to({x:-40.75,y:-206.9},0).wait(1).to({x:-31.8,y:-211.75},0).wait(1).to({x:-22.3,y:-216.25},0).wait(1).to({x:-12.25,y:-220.45},0).wait(1).to({x:-1.7,y:-224.35},0).wait(1).to({x:9.35,y:-227.9},0).wait(1).to({x:20.9,y:-231.1},0).wait(1).to({x:33,y:-234},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).wait(1).to({x:44.5,y:-231},0).wait(1).to({x:55.5,y:-227.7},0).wait(1).to({x:66.1,y:-224.15},0).wait(1).to({x:76.25,y:-220.2},0).wait(1).to({x:86,y:-216},0).wait(1).to({x:95.3,y:-211.5},0).wait(1).to({x:104.2,y:-206.65},0).wait(1).to({x:112.65,y:-201.55},0).wait(1).to({x:120.65,y:-196.1},0).wait(1).to({x:128.25,y:-190.35},0).wait(1).to({x:135.4,y:-184.3},0).wait(1).to({x:142.15,y:-177.9},0).wait(1).to({x:148.45,y:-171.25},0).wait(1).to({x:154.35,y:-164.25},0).wait(1).to({x:159.8,y:-156.95},0).wait(1).to({x:164.85,y:-149.35},0).wait(1).to({x:169.45,y:-141.4},0).wait(1).to({x:173.6,y:-133.2},0).wait(1).to({x:177.35,y:-124.65},0).wait(1).to({x:180.7,y:-115.8},0).wait(1).to({x:183.55,y:-106.65},0).wait(1).to({x:186.05,y:-97.15},0).wait(1).to({x:188.1,y:-87.4},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(143).to({_off:false},0).wait(1).to({x:187.4,y:-78},0).wait(1).to({x:185.4,y:-68.95},0).wait(1).to({x:182.95,y:-60.1},0).wait(1).to({x:180.05,y:-51.6},0).wait(1).to({x:176.7,y:-43.35},0).wait(1).to({x:172.9,y:-35.35},0).wait(1).to({x:168.7,y:-27.65},0).wait(1).to({x:164,y:-20.2},0).wait(1).to({x:158.85,y:-13.05},0).wait(1).to({x:153.25,y:-6.2},0).wait(1).to({x:147.25,y:0.45},0).wait(1).to({x:140.75,y:6.75},0).wait(1).to({x:133.85,y:12.85},0).wait(1).to({x:126.45,y:18.6},0).wait(1).to({x:118.65,y:24.15},0).wait(1).to({x:110.35,y:29.4},0).wait(1).to({x:101.65,y:34.35},0).wait(1).to({x:92.45,y:39.05},0).wait(1).to({x:82.85,y:43.45},0).wait(1).to({x:72.8,y:47.6},0).wait(1).to({x:62.25,y:51.5},0).wait(1).to({x:51.3,y:55.1},0).wait(1).to({x:39.9,y:58.4},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.1,-292.4,384,409.2);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pills();
	this.instance.setTransform(41.1,50.05,1,1,0,0,0,41.1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,82.2,100.1), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pills();
	this.instance.setTransform(41.1,50.05,1,1,0,0,0,41.1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,82.2,100.1), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pills();
	this.instance.setTransform(41.1,50.05,1,1,0,0,0,41.1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,82.2,100.1), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pills();
	this.instance.setTransform(41.1,50.05,1,1,0,0,0,41.1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,82.2,100.1), null);


(lib.pillss = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol6();
	this.instance.setTransform(41.1,50.1,1,1,0,0,0,41.1,50.1);

	this.instance_1 = new lib.pills();
	this.instance_1.setTransform(196.3,190.75,1,1,0,0,0,41.1,50);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(196.3,190.8,1,1,0,0,0,41.1,50.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol8();
	this.instance_3.setTransform(44.85,341.65,1,1,0,0,0,41.1,50.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(-110.9,195.05,1,1,0,0,0,41.1,50.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:196.3,y:190.75}}]},1).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{x:44.85,y:341.6}}]},1).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_1,p:{x:-110.9,y:195}}]},1).to({state:[{t:this.instance_4}]},24).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_1,p:{x:41.1,y:54.35}}]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:53.65,y:52.9},0).wait(1).to({x:65.7,y:56.05},0).wait(1).to({x:77.2,y:59.55},0).wait(1).to({x:88.15,y:63.4},0).wait(1).to({x:98.65,y:67.6},0).wait(1).to({x:108.55,y:72.1},0).wait(1).to({x:117.95,y:76.95},0).wait(1).to({x:126.85,y:82.15},0).wait(1).to({x:135.2,y:87.7},0).wait(1).to({x:143.05,y:93.55},0).wait(1).to({x:150.35,y:99.75},0).wait(1).to({x:157.15,y:106.3},0).wait(1).to({x:163.4,y:113.2},0).wait(1).to({x:169.15,y:120.45},0).wait(1).to({x:174.35,y:128},0).wait(1).to({x:179.05,y:135.9},0).wait(1).to({x:183.2,y:144.15},0).wait(1).to({x:186.85,y:152.75},0).wait(1).to({x:190,y:161.7},0).wait(1).to({x:192.6,y:170.95},0).wait(1).to({x:194.65,y:180.55},0).wait(1).to({x:196.25,y:190.55},0).to({_off:true},1).wait(169));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({_off:false},0).wait(1).to({x:193.8,y:201.55},0).wait(1).to({x:190.9,y:212},0).wait(1).to({x:187.6,y:222},0).wait(1).to({x:183.95,y:231.65},0).wait(1).to({x:179.9,y:240.9},0).wait(1).to({x:175.5,y:249.8},0).wait(1).to({x:170.7,y:258.25},0).wait(1).to({x:165.5,y:266.4},0).wait(1).to({x:159.9,y:274.1},0).wait(1).to({x:153.9,y:281.45},0).wait(1).to({x:147.55,y:288.4},0).wait(1).to({x:140.8,y:295},0).wait(1).to({x:133.7,y:301.2},0).wait(1).to({x:126.15,y:307},0).wait(1).to({x:118.25,y:312.45},0).wait(1).to({x:109.95,y:317.5},0).wait(1).to({x:101.3,y:322.2},0).wait(1).to({x:92.25,y:326.5},0).wait(1).to({x:82.8,y:330.4},0).wait(1).to({x:72.95,y:333.9},0).wait(1).to({x:62.7,y:337.05},0).wait(1).to({x:52.1,y:339.85},0).wait(1).to({x:41.1,y:342.25},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({_off:false},0).wait(1).to({x:34.05,y:337.95},0).wait(1).to({x:23.65,y:334.05},0).wait(1).to({x:13.55,y:329.9},0).wait(1).to({x:3.85,y:325.5},0).wait(1).to({x:-5.5,y:320.9},0).wait(1).to({x:-14.45,y:316},0).wait(1).to({x:-23.05,y:310.85},0).wait(1).to({x:-31.3,y:305.45},0).wait(1).to({x:-39.15,y:299.85},0).wait(1).to({x:-46.65,y:293.95},0).wait(1).to({x:-53.75,y:287.85},0).wait(1).to({x:-60.55,y:281.45},0).wait(1).to({x:-66.95,y:274.85},0).wait(1).to({x:-73,y:268},0).wait(1).to({x:-78.65,y:260.85},0).wait(1).to({x:-83.95,y:253.5},0).wait(1).to({x:-88.9,y:245.9},0).wait(1).to({x:-93.5,y:238.05},0).wait(1).to({x:-97.7,y:229.95},0).wait(1).to({x:-101.55,y:221.6},0).wait(1).to({x:-105,y:213},0).wait(1).to({x:-108.15,y:204.15},0).wait(1).to({x:-110.9,y:195.05},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(143).to({_off:false},0).wait(1).to({x:-106.55,y:184.05},0).wait(1).to({x:-102.05,y:173.5},0).wait(1).to({x:-97.3,y:163.4},0).wait(1).to({x:-92.35,y:153.7},0).wait(1).to({x:-87.2,y:144.5},0).wait(1).to({x:-81.85,y:135.75},0).wait(1).to({x:-76.3,y:127.45},0).wait(1).to({x:-70.55,y:119.55},0).wait(1).to({x:-64.55,y:112.15},0).wait(1).to({x:-58.35,y:105.15},0).wait(1).to({x:-51.95,y:98.65},0).wait(1).to({x:-45.35,y:92.55},0).wait(1).to({x:-38.55,y:86.9},0).wait(1).to({x:-31.55,y:81.7},0).wait(1).to({x:-24.3,y:76.95},0).wait(1).to({x:-16.85,y:72.65},0).wait(1).to({x:-9.2,y:68.8},0).wait(1).to({x:-1.35,y:65.35},0).wait(1).to({x:6.75,y:62.4},0).wait(1).to({x:15,y:59.85},0).wait(1).to({x:23.5,y:57.75},0).wait(1).to({x:32.2,y:56.1},0).wait(1).to({x:41.1,y:54.95},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,0,389.4,392.3);


(lib.donut = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol18();
	this.instance.setTransform(53.15,51.35,1,1,0,0,0,53.2,51.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape.setTransform(175.8667,-70.8989,0.3526,0.3521);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AgMhwIAZDh");
	this.shape_1.setTransform(230.079,-66.2772,0.3526,0.3521);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_2.setTransform(223.4677,-81.3307,0.3526,0.3521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABxAPIjhge");
	this.shape_3.setTransform(196.6172,-62.3158,0.3526,0.3521);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AhbhDIC3CH");
	this.shape_4.setTransform(177.9823,-128.8678,0.3526,0.3521);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AAIhxIgPDi");
	this.shape_5.setTransform(236.8225,-87.6689,0.3526,0.3521);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AgOhwIAdDh");
	this.shape_6.setTransform(165.8088,-64.8247,0.3526,0.3521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_7.setTransform(171.6355,-90.574,0.3526,0.3521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABOBTIibil");
	this.shape_8.setTransform(162.3798,-113.1541,0.3526,0.3521);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_9.setTransform(208.6585,-120.8129,0.3526,0.3521);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AhwAJIDhgR");
	this.shape_10.setTransform(228.7567,-126.3589,0.3526,0.3521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("Ag0hkIBpDJ");
	this.shape_11.setTransform(240.5248,-102.3262,0.3526,0.3521);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AA3BjIhtjG");
	this.shape_12.setTransform(157.6197,-75.2565,0.3526,0.3521);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABvAcIjcg3");
	this.shape_13.setTransform(188.1636,-135.3381,0.3526,0.3521);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AgThvIAoDf");
	this.shape_14.setTransform(166.7432,-126.2269,0.3526,0.3521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhugaIDcA1");
	this.shape_15.setTransform(157.6108,-93.0829,0.3526,0.3521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABehAIi7CB");
	this.shape_16.setTransform(178.2468,-56.9018,0.3526,0.3521);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABkg2IjGBt");
	this.shape_17.setTransform(237.8803,-76.0487,0.3526,0.3521);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhlgxIDLBj");
	this.shape_18.setTransform(211.5675,-64.5606,0.3526,0.3521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABZBHIixiN");
	this.shape_19.setTransform(226.2356,-98.6289,0.3526,0.3521);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_20.setTransform(217.5176,-129.7921,0.3526,0.3521);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_21.setTransform(231.5335,-111.4375,0.3526,0.3521);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape_22.setTransform(202.0296,-138.877,0.3526,0.3521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABThNIilCb");
	this.shape_23.setTransform(182.2135,-113.5503,0.3526,0.3521);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABLhVIiVCq");
	this.shape_24.setTransform(151.6695,-103.2506,0.3526,0.3521);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABYhHIivCP");
	this.shape_25.setTransform(203.0963,-54.3929,0.3526,0.3521);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5599FF").s().p("AlYFSQiPiMAAjGQAAjECPiMQCPiMDJAAQDKAACPCMQCPCMAADEQAADGiPCMQiPCLjKAAQjJAAiPiLg");
	this.shape_26.setTransform(196.6852,-94.0609,0.3526,0.3522);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF2A7F").s().p("AlcMOQihhAh8h2Qh8h1hEiZQhGidAAitQAAisBGidQBEiZB8h1QB9h2CghAQCnhDC1AAQC3AACmBDQChBAB8B2QB8B1BECZQBGCdAACsQAACthGCdQhECZh8B1Qh8B2ihBAQimBDi3AAQi1AAinhDg");
	this.shape_27.setTransform(196.8615,-98.164,0.3526,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF5599").s().p("ApLVAQkQhvjRjKQjRjKhykFQh4kPAAkpQAAknB4kPQBykGDRjKQDRjKEQhvQEYhyEzAAQEzAAEZByQEQBvDRDKQDRDKBzEGQB2EPAAEnQAAEph2EPQhzEFjRDKQjRDKkQBvQkZBykzAAQkyAAkZhyg");
	this.shape_28.setTransform(197.2406,-95.364,0.3526,0.3522);

	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(197.25,-95.3,1,1,0,0,0,53.2,51.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol20();
	this.instance_2.setTransform(360.85,47.1,1,1,0,0,0,53.2,51.4);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol21();
	this.instance_3.setTransform(207.45,189.5,1,1,0,0,0,53.2,51.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_28,p:{x:197.2406,y:-95.364}},{t:this.shape_27,p:{x:196.8615,y:-98.164}},{t:this.shape_26,p:{x:196.6852,y:-94.0609}},{t:this.shape_25,p:{x:203.0963,y:-54.3929}},{t:this.shape_24,p:{x:151.6695,y:-103.2506}},{t:this.shape_23,p:{x:182.2135,y:-113.5503}},{t:this.shape_22,p:{x:202.0296,y:-138.877}},{t:this.shape_21,p:{x:231.5335,y:-111.4375}},{t:this.shape_20,p:{x:217.5176,y:-129.7921}},{t:this.shape_19,p:{x:226.2356,y:-98.6289}},{t:this.shape_18,p:{x:211.5675,y:-64.5606}},{t:this.shape_17,p:{x:237.8803,y:-76.0487}},{t:this.shape_16,p:{x:178.2468,y:-56.9018}},{t:this.shape_15,p:{x:157.6108,y:-93.0829}},{t:this.shape_14,p:{x:166.7432,y:-126.2269}},{t:this.shape_13,p:{x:188.1636,y:-135.3381}},{t:this.shape_12,p:{x:157.6197,y:-75.2565}},{t:this.shape_11,p:{x:240.5248,y:-102.3262}},{t:this.shape_10,p:{x:228.7567,y:-126.3589}},{t:this.shape_9,p:{x:208.6585,y:-120.8129}},{t:this.shape_8,p:{x:162.3798,y:-113.1541}},{t:this.shape_7,p:{x:171.6355,y:-90.574}},{t:this.shape_6,p:{x:165.8088,y:-64.8247}},{t:this.shape_5,p:{x:236.8225,y:-87.6689}},{t:this.shape_4,p:{x:177.9823,y:-128.8678}},{t:this.shape_3,p:{x:196.6172,y:-62.3158}},{t:this.shape_2,p:{x:223.4677,y:-81.3307}},{t:this.shape_1,p:{x:230.079,y:-66.2772}},{t:this.shape,p:{x:175.8667,y:-70.8989}}]},1).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_28,p:{x:360.8406,y:47.036}},{t:this.shape_27,p:{x:360.4615,y:44.236}},{t:this.shape_26,p:{x:360.2852,y:48.3391}},{t:this.shape_25,p:{x:366.6963,y:88.0071}},{t:this.shape_24,p:{x:315.2695,y:39.1494}},{t:this.shape_23,p:{x:345.8135,y:28.8497}},{t:this.shape_22,p:{x:365.6296,y:3.523}},{t:this.shape_21,p:{x:395.1335,y:30.9625}},{t:this.shape_20,p:{x:381.1176,y:12.6079}},{t:this.shape_19,p:{x:389.8356,y:43.7711}},{t:this.shape_18,p:{x:375.1675,y:77.8394}},{t:this.shape_17,p:{x:401.4803,y:66.3513}},{t:this.shape_16,p:{x:341.8468,y:85.4982}},{t:this.shape_15,p:{x:321.2108,y:49.3171}},{t:this.shape_14,p:{x:330.3432,y:16.1731}},{t:this.shape_13,p:{x:351.7636,y:7.0619}},{t:this.shape_12,p:{x:321.2197,y:67.1435}},{t:this.shape_11,p:{x:404.1248,y:40.0738}},{t:this.shape_10,p:{x:392.3567,y:16.0411}},{t:this.shape_9,p:{x:372.2585,y:21.5871}},{t:this.shape_8,p:{x:325.9798,y:29.2459}},{t:this.shape_7,p:{x:335.2355,y:51.826}},{t:this.shape_6,p:{x:329.4088,y:77.5753}},{t:this.shape_5,p:{x:400.4225,y:54.7311}},{t:this.shape_4,p:{x:341.5823,y:13.5322}},{t:this.shape_3,p:{x:360.2172,y:80.0842}},{t:this.shape_2,p:{x:387.0677,y:61.0693}},{t:this.shape_1,p:{x:393.679,y:76.1228}},{t:this.shape,p:{x:339.4667,y:71.5011}}]},1).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_28,p:{x:207.4406,y:189.436}},{t:this.shape_27,p:{x:207.0615,y:186.636}},{t:this.shape_26,p:{x:206.8852,y:190.7391}},{t:this.shape_25,p:{x:213.2963,y:230.4071}},{t:this.shape_24,p:{x:161.8695,y:181.5494}},{t:this.shape_23,p:{x:192.4135,y:171.2497}},{t:this.shape_22,p:{x:212.2296,y:145.923}},{t:this.shape_21,p:{x:241.7335,y:173.3625}},{t:this.shape_20,p:{x:227.7176,y:155.0079}},{t:this.shape_19,p:{x:236.4356,y:186.1711}},{t:this.shape_18,p:{x:221.7675,y:220.2394}},{t:this.shape_17,p:{x:248.0803,y:208.7513}},{t:this.shape_16,p:{x:188.4468,y:227.8982}},{t:this.shape_15,p:{x:167.8108,y:191.7171}},{t:this.shape_14,p:{x:176.9432,y:158.5731}},{t:this.shape_13,p:{x:198.3636,y:149.4619}},{t:this.shape_12,p:{x:167.8197,y:209.5435}},{t:this.shape_11,p:{x:250.7248,y:182.4738}},{t:this.shape_10,p:{x:238.9567,y:158.4411}},{t:this.shape_9,p:{x:218.8585,y:163.9871}},{t:this.shape_8,p:{x:172.5798,y:171.6459}},{t:this.shape_7,p:{x:181.8355,y:194.226}},{t:this.shape_6,p:{x:176.0088,y:219.9753}},{t:this.shape_5,p:{x:247.0225,y:197.1311}},{t:this.shape_4,p:{x:188.1823,y:155.9322}},{t:this.shape_3,p:{x:206.8172,y:222.4842}},{t:this.shape_2,p:{x:233.6677,y:203.4693}},{t:this.shape_1,p:{x:240.279,y:218.5228}},{t:this.shape,p:{x:186.0667,y:213.9011}}]},1).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_28,p:{x:53.1906,y:51.336}},{t:this.shape_27,p:{x:52.8115,y:48.536}},{t:this.shape_26,p:{x:52.6352,y:52.6391}},{t:this.shape_25,p:{x:59.0463,y:92.3071}},{t:this.shape_24,p:{x:7.6195,y:43.4494}},{t:this.shape_23,p:{x:38.1635,y:33.1497}},{t:this.shape_22,p:{x:57.9796,y:7.823}},{t:this.shape_21,p:{x:87.4835,y:35.2625}},{t:this.shape_20,p:{x:73.4676,y:16.9079}},{t:this.shape_19,p:{x:82.1856,y:48.0711}},{t:this.shape_18,p:{x:67.5175,y:82.1394}},{t:this.shape_17,p:{x:93.8303,y:70.6513}},{t:this.shape_16,p:{x:34.1968,y:89.7982}},{t:this.shape_15,p:{x:13.5608,y:53.6171}},{t:this.shape_14,p:{x:22.6932,y:20.4731}},{t:this.shape_13,p:{x:44.1136,y:11.3619}},{t:this.shape_12,p:{x:13.5697,y:71.4435}},{t:this.shape_11,p:{x:96.4748,y:44.3738}},{t:this.shape_10,p:{x:84.7067,y:20.3411}},{t:this.shape_9,p:{x:64.6085,y:25.8871}},{t:this.shape_8,p:{x:18.3298,y:33.5459}},{t:this.shape_7,p:{x:27.5855,y:56.126}},{t:this.shape_6,p:{x:21.7588,y:81.8753}},{t:this.shape_5,p:{x:92.7725,y:59.0311}},{t:this.shape_4,p:{x:33.9323,y:17.8322}},{t:this.shape_3,p:{x:52.5672,y:84.3842}},{t:this.shape_2,p:{x:79.4177,y:65.3693}},{t:this.shape_1,p:{x:86.029,y:80.4228}},{t:this.shape,p:{x:31.8167,y:75.8011}}]},1).to({state:[{t:this.shape_28,p:{x:53.1406,y:51.286}},{t:this.shape_27,p:{x:52.7615,y:48.486}},{t:this.shape_26,p:{x:52.5852,y:52.5891}},{t:this.shape_25,p:{x:58.9963,y:92.2571}},{t:this.shape_24,p:{x:7.5695,y:43.3994}},{t:this.shape_23,p:{x:38.1135,y:33.0997}},{t:this.shape_22,p:{x:57.9296,y:7.773}},{t:this.shape_21,p:{x:87.4335,y:35.2125}},{t:this.shape_20,p:{x:73.4176,y:16.8579}},{t:this.shape_19,p:{x:82.1356,y:48.0211}},{t:this.shape_18,p:{x:67.4675,y:82.0894}},{t:this.shape_17,p:{x:93.7803,y:70.6013}},{t:this.shape_16,p:{x:34.1468,y:89.7482}},{t:this.shape_15,p:{x:13.5108,y:53.5671}},{t:this.shape_14,p:{x:22.6432,y:20.4231}},{t:this.shape_13,p:{x:44.0636,y:11.3119}},{t:this.shape_12,p:{x:13.5197,y:71.3935}},{t:this.shape_11,p:{x:96.4248,y:44.3238}},{t:this.shape_10,p:{x:84.6567,y:20.2911}},{t:this.shape_9,p:{x:64.5585,y:25.8371}},{t:this.shape_8,p:{x:18.2798,y:33.4959}},{t:this.shape_7,p:{x:27.5355,y:56.076}},{t:this.shape_6,p:{x:21.7088,y:81.8253}},{t:this.shape_5,p:{x:92.7225,y:58.9811}},{t:this.shape_4,p:{x:33.8823,y:17.7822}},{t:this.shape_3,p:{x:52.5172,y:84.3342}},{t:this.shape_2,p:{x:79.3677,y:65.3193}},{t:this.shape_1,p:{x:85.979,y:80.3728}},{t:this.shape,p:{x:31.7667,y:75.7511}}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:53.1,regY:51.3,x:54.2,y:40.1},0).wait(1).to({x:55.9,y:29.4},0).wait(1).to({x:58.1,y:19.1},0).wait(1).to({x:60.85,y:9.2},0).wait(1).to({x:64.1,y:-0.25},0).wait(1).to({x:67.9,y:-9.25},0).wait(1).to({x:72.2,y:-17.85},0).wait(1).to({x:77.05,y:-26},0).wait(1).to({x:82.4,y:-33.7},0).wait(1).to({x:88.25,y:-41.05},0).wait(1).to({x:94.65,y:-47.9},0).wait(1).to({x:101.6,y:-54.35},0).wait(1).to({x:109.05,y:-60.4},0).wait(1).to({x:117,y:-65.95},0).wait(1).to({x:125.5,y:-71.15},0).wait(1).to({x:134.5,y:-75.9},0).wait(1).to({x:144.05,y:-80.2},0).wait(1).to({x:154.1,y:-84.1},0).wait(1).to({x:164.7,y:-87.55},0).wait(1).to({x:175.8,y:-90.6},0).wait(1).to({x:187.45,y:-93.2},0).wait(1).to({x:199.65,y:-95.4},0).to({_off:true},1).wait(169));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({regX:53.1,regY:51.3,x:209.8,y:-93.75},0).wait(1).to({x:221.9,y:-91.7},0).wait(1).to({x:233.55,y:-89.25},0).wait(1).to({x:244.7,y:-86.35},0).wait(1).to({x:255.35,y:-83.1},0).wait(1).to({x:265.45,y:-79.35},0).wait(1).to({x:275.05,y:-75.25},0).wait(1).to({x:284.2,y:-70.75},0).wait(1).to({x:292.8,y:-65.8},0).wait(1).to({x:300.9,y:-60.4},0).wait(1).to({x:308.55,y:-54.65},0).wait(1).to({x:315.65,y:-48.45},0).wait(1).to({x:322.25,y:-41.85},0).wait(1).to({x:328.35,y:-34.85},0).wait(1).to({x:333.95,y:-27.4},0).wait(1).to({x:339.05,y:-19.55},0).wait(1).to({x:343.65,y:-11.3},0).wait(1).to({x:347.75,y:-2.65},0).wait(1).to({x:351.35,y:6.45},0).wait(1).to({x:354.45,y:16},0).wait(1).to({x:357.05,y:25.9},0).wait(1).to({x:359.15,y:36.25},0).wait(1).to({x:360.75,y:47},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).wait(1).to({regX:53.1,regY:51.3,x:357.45,y:57.5},0).wait(1).to({x:353.9,y:67.6},0).wait(1).to({x:350,y:77.35},0).wait(1).to({x:345.8,y:86.65},0).wait(1).to({x:341.3,y:95.6},0).wait(1).to({x:336.5,y:104.15},0).wait(1).to({x:331.35,y:112.35},0).wait(1).to({x:325.9,y:120.1},0).wait(1).to({x:320.15,y:127.5},0).wait(1).to({x:314.05,y:134.5},0).wait(1).to({x:307.65,y:141.1},0).wait(1).to({x:300.95,y:147.35},0).wait(1).to({x:293.95,y:153.2},0).wait(1).to({x:286.6,y:158.65},0).wait(1).to({x:279,y:163.7},0).wait(1).to({x:271,y:168.35},0).wait(1).to({x:262.75,y:172.65},0).wait(1).to({x:254.15,y:176.55},0).wait(1).to({x:245.25,y:180.05},0).wait(1).to({x:236.05,y:183.2},0).wait(1).to({x:226.5,y:185.9},0).wait(1).to({x:216.65,y:188.25},0).wait(1).to({x:206.5,y:190.25},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(143).to({_off:false},0).wait(1).to({regX:53.1,regY:51.3,x:198,y:186.95},0).wait(1).to({x:188.9,y:184.2},0).wait(1).to({x:180.05,y:181.1},0).wait(1).to({x:171.4,y:177.7},0).wait(1).to({x:163.05,y:173.95},0).wait(1).to({x:154.9,y:169.9},0).wait(1).to({x:147,y:165.5},0).wait(1).to({x:139.35,y:160.8},0).wait(1).to({x:131.95,y:155.8},0).wait(1).to({x:124.75,y:150.45},0).wait(1).to({x:117.8,y:144.75},0).wait(1).to({x:111.1,y:138.75},0).wait(1).to({x:104.65,y:132.45},0).wait(1).to({x:98.45,y:125.8},0).wait(1).to({x:92.45,y:118.8},0).wait(1).to({x:86.7,y:111.5},0).wait(1).to({x:81.2,y:103.9},0).wait(1).to({x:75.9,y:95.95},0).wait(1).to({x:70.9,y:87.65},0).wait(1).to({x:66.1,y:79.05},0).wait(1).to({x:61.55,y:70.1},0).wait(1).to({x:57.2,y:60.85},0).wait(1).to({x:53.15,y:51.3},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-146.7,414.40000000000003,388.4);


(lib.cupcake = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol10();
	this.instance.setTransform(46.1,50.2,1,1,0,0,0,46.1,50.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD5E5").s().p("AjrEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAIHXAAQB1AABSBSQBTBTAABzQAAB1hTBSQhSBSh1AAg");
	this.shape.setTransform(-110.955,172.2323,0.3527,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AjdDSQhbhXAAh7QAAh6BbhXQBdhXCAAAQCBAABcBXQBcBXAAB6QAAB7hcBXQhcBXiBAAQiAAAhdhXg");
	this.shape_1.setTransform(-110.6816,157.9404,0.3527,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD5E5").s().p("Ap/EZQh0AAhShSQhThTAAh0QAAh0BThSQBShSB0AAIT/AAQB0AABTBSQBSBSAAB0QAAB0hSBTQhTBSh0AAg");
	this.shape_2.setTransform(-110.1702,182.6761,0.3527,0.3522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD5E5").s().p("AwCEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAMAgGAAAQB0AABTBSQBSBTAABzQAAB1hSBSQhTBSh0AAg");
	this.shape_3.setTransform(-111.5016,196.0081,0.3527,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("AjNofIGbQ/");
	this.shape_4.setTransform(-127.7076,225.0273,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ah3lcIDvK5");
	this.shape_5.setTransform(-135.5098,218.4235,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ai3nuIFvPd");
	this.shape_6.setTransform(-138.0224,223.0462,0.3526,0.3522);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40055").s().p("Ap6JTIm4ylMAhlgACImeSpg");
	this.shape_7.setTransform(-110.0027,226.9519,0.3527,0.3522);

	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(-111.55,197.7,1,1,0,0,0,46.1,50.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(-259,50.2,1,1,0,0,0,46.1,50.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(-110.65,-90.5,1,1,0,0,0,46.1,50.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_7,p:{x:-110.0027,y:226.9519}},{t:this.shape_6,p:{x:-138.0224,y:223.0462}},{t:this.shape_5,p:{x:-135.5098,y:218.4235}},{t:this.shape_4,p:{x:-127.7076,y:225.0273}},{t:this.shape_3,p:{x:-111.5016,y:196.0081}},{t:this.shape_2,p:{x:-110.1702,y:182.6761}},{t:this.shape_1,p:{x:-110.6816,y:157.9404}},{t:this.shape,p:{x:-110.955,y:172.2323}}]},1).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_7,p:{x:-257.4527,y:79.4519}},{t:this.shape_6,p:{x:-285.4724,y:75.5462}},{t:this.shape_5,p:{x:-282.9598,y:70.9235}},{t:this.shape_4,p:{x:-275.1576,y:77.5273}},{t:this.shape_3,p:{x:-258.9516,y:48.5081}},{t:this.shape_2,p:{x:-257.6202,y:35.1761}},{t:this.shape_1,p:{x:-258.1316,y:10.4404}},{t:this.shape,p:{x:-258.405,y:24.7323}}]},1).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_7,p:{x:-109.1027,y:-61.2481}},{t:this.shape_6,p:{x:-137.1224,y:-65.1538}},{t:this.shape_5,p:{x:-134.6098,y:-69.7765}},{t:this.shape_4,p:{x:-126.8076,y:-63.1727}},{t:this.shape_3,p:{x:-110.6016,y:-92.1919}},{t:this.shape_2,p:{x:-109.2702,y:-105.5239}},{t:this.shape_1,p:{x:-109.7816,y:-130.2596}},{t:this.shape,p:{x:-110.055,y:-115.9677}}]},1).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_7,p:{x:47.6473,y:79.4519}},{t:this.shape_6,p:{x:19.6276,y:75.5462}},{t:this.shape_5,p:{x:22.1402,y:70.9235}},{t:this.shape_4,p:{x:29.9424,y:77.5273}},{t:this.shape_3,p:{x:46.1484,y:48.5081}},{t:this.shape_2,p:{x:47.4798,y:35.1761}},{t:this.shape_1,p:{x:46.9684,y:10.4404}},{t:this.shape,p:{x:46.695,y:24.7323}}]},1).to({state:[{t:this.shape_7,p:{x:47.6473,y:79.4519}},{t:this.shape_6,p:{x:19.6276,y:75.5462}},{t:this.shape_5,p:{x:22.1402,y:70.9235}},{t:this.shape_4,p:{x:29.9424,y:77.5273}},{t:this.shape_3,p:{x:46.1484,y:48.5081}},{t:this.shape_2,p:{x:47.4798,y:35.1761}},{t:this.shape_1,p:{x:46.9684,y:10.4404}},{t:this.shape,p:{x:46.695,y:24.7323}}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:44.2,y:61.5},0).wait(1).to({x:41.75,y:72.35},0).wait(1).to({x:38.8,y:82.8},0).wait(1).to({x:35.35,y:92.75},0).wait(1).to({x:31.4,y:102.3},0).wait(1).to({x:27,y:111.4},0).wait(1).to({x:22.05,y:120.05},0).wait(1).to({x:16.65,y:128.25},0).wait(1).to({x:10.7,y:136.05},0).wait(1).to({x:4.3,y:143.35},0).wait(1).to({x:-2.6,y:150.25},0).wait(1).to({x:-10.05,y:156.65},0).wait(1).to({x:-17.95,y:162.65},0).wait(1).to({x:-26.35,y:168.2},0).wait(1).to({x:-35.25,y:173.35},0).wait(1).to({x:-44.65,y:178},0).wait(1).to({x:-54.55,y:182.25},0).wait(1).to({x:-64.95,y:186.05},0).wait(1).to({x:-75.85,y:189.4},0).wait(1).to({x:-87.25,y:192.3},0).wait(1).to({x:-99.15,y:194.75},0).wait(1).to({x:-111.55,y:196.8},0).to({_off:true},1).wait(169));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({x:-122.7,y:194.85},0).wait(1).to({x:-133.5,y:191.7},0).wait(1).to({x:-143.8,y:188.2},0).wait(1).to({x:-153.7,y:184.4},0).wait(1).to({x:-163.2,y:180.3},0).wait(1).to({x:-172.2,y:175.85},0).wait(1).to({x:-180.8,y:171.05},0).wait(1).to({x:-189,y:165.95},0).wait(1).to({x:-196.75,y:160.5},0).wait(1).to({x:-204.05,y:154.75},0).wait(1).to({x:-210.9,y:148.65},0).wait(1).to({x:-217.35,y:142.25},0).wait(1).to({x:-223.4,y:135.55},0).wait(1).to({x:-228.95,y:128.45},0).wait(1).to({x:-234.1,y:121.1},0).wait(1).to({x:-238.85,y:113.35},0).wait(1).to({x:-243.15,y:105.3},0).wait(1).to({x:-247,y:96.95},0).wait(1).to({x:-250.45,y:88.25},0).wait(1).to({x:-253.45,y:79.25},0).wait(1).to({x:-256,y:69.85},0).wait(1).to({x:-258.15,y:60.2},0).wait(1).to({x:-259.9,y:50.2},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).wait(1).to({x:-255.35,y:39.6},0).wait(1).to({x:-251.5,y:29.4},0).wait(1).to({x:-247.35,y:19.65},0).wait(1).to({x:-242.95,y:10.25},0).wait(1).to({x:-238.3,y:1.3},0).wait(1).to({x:-233.4,y:-7.25},0).wait(1).to({x:-228.25,y:-15.35},0).wait(1).to({x:-222.8,y:-23.1},0).wait(1).to({x:-217.15,y:-30.4},0).wait(1).to({x:-211.2,y:-37.3},0).wait(1).to({x:-205,y:-43.8},0).wait(1).to({x:-198.55,y:-49.85},0).wait(1).to({x:-191.85,y:-55.55},0).wait(1).to({x:-184.9,y:-60.8},0).wait(1).to({x:-177.7,y:-65.65},0).wait(1).to({x:-170.2,y:-70.1},0).wait(1).to({x:-162.5,y:-74.1},0).wait(1).to({x:-154.5,y:-77.7},0).wait(1).to({x:-146.25,y:-80.9},0).wait(1).to({x:-137.7,y:-83.7},0).wait(1).to({x:-128.95,y:-86.1},0).wait(1).to({x:-119.9,y:-88.05},0).wait(1).to({x:-110.65,y:-89.65},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(143).to({_off:false},0).wait(1).to({x:-99.05,y:-88.2},0).wait(1).to({x:-87.9,y:-85.6},0).wait(1).to({x:-77.15,y:-82.6},0).wait(1).to({x:-66.9,y:-79.3},0).wait(1).to({x:-57.05,y:-75.65},0).wait(1).to({x:-47.6,y:-71.6},0).wait(1).to({x:-38.65,y:-67.25},0).wait(1).to({x:-30.1,y:-62.55},0).wait(1).to({x:-22,y:-57.45},0).wait(1).to({x:-14.3,y:-52.05},0).wait(1).to({x:-7.05,y:-46.3},0).wait(1).to({x:-0.25,y:-40.15},0).wait(1).to({x:6.15,y:-33.7},0).wait(1).to({x:12.05,y:-26.9},0).wait(1).to({x:17.6,y:-19.75},0).wait(1).to({x:22.65,y:-12.25},0).wait(1).to({x:27.3,y:-4.35},0).wait(1).to({x:31.55,y:3.85},0).wait(1).to({x:35.3,y:12.4},0).wait(1).to({x:38.65,y:21.3},0).wait(1).to({x:41.6,y:30.6},0).wait(1).to({x:44.05,y:40.2},0).wait(1).to({x:46.1,y:50.15},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306,-140.7,398.3,388.7);


(lib.circles = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1();
	this.instance.setTransform(244.9,233.7,1,1,0,0,0,244.9,233.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5599FF").s().p("EgPrAlbQnPjFllloQlllojEnSQjLnjABoRQgBoQDLnjQDEnSFlloQFlloHPjFQHfjNIMAAQINAAHfDNQHPDFFlFoQFlFnDEHTQDKHjAAIQQAAIRjKHjQjEHSllFoQllFonPDFQnfDNoNAAQoMAAnfjNg");
	this.shape.setTransform(101.6948,236.6369,0.3527,0.3522,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5599FF").s().p("EgPrAlbQnPjFllloQlllojEnSQjLnjAAoRQAAoQDLnjQDEnSFlloQFlloHPjFQHfjNIMAAQIMAAHgDNQHPDFFlFoQFlFnDEHTQDLHjAAIQQAAIRjLHjQjEHSllFoQllFonPDFQngDNoMAAQoMAAnfjNg");
	this.shape_1.setTransform(245.6457,386.4275,0.3527,0.3522,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5599FF").s().p("EgPrAlbQnPjEllloQlllpjEnSQjKnjAAoRQAAoQDKnjQDEnSFllpQFlloHPjEQHfjNIMAAQIMAAHgDNQHPDEFlFoQFlFpDEHSQDLHjAAIQQAAIRjLHjQjEHSllFpQllFonPDEQngDNoMAAQoMAAnfjNg");
	this.shape_2.setTransform(241.3572,81.8611,0.3527,0.3522,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5599FF").s().p("AlkNGQikhFh/h+Qh/h+hFijQhIipAAi5QAAi4BIipQBFijB/h+QB/h+CkhFQCrhIC5AAQC6AACqBIQClBFB+B+QB/B+BGCjQBICpAAC4QAAC5hICpQhGCjh/B+Qh+B+ilBFQiqBIi6AAQi5AAirhIg");
	this.shape_3.setTransform(390.225,231.275);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(245.9,234.1,1,1,0,0,0,235.8,243.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(244.9,235.2,1,1,0,0,0,244.9,235.2);
	this.instance_2._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5599FF").s().p("EgFhAlSQikhFh/h+Qh/h+hFijQhJipAAi5QAAi5BJipQBFijB/h+QB/h+CkhFQCqhIC5AAQC7AACqBIQCkBFB/B+QB/B+BFCjQBICpAAC5QAAC5hICpQhFCjh/B+Qh/B+ikBFQiqBIi7AAQi5AAiqhIgA8BNaQikhFh/h+Qh/h+hFijQhJipAAi5QAAi5BJioQBFikB/h+QB/h+CkhFQCqhHC6AAQC7AACqBHQCkBFB/B+QB+B+BGCkQBICpAAC4QAAC5hICpQhGCjh+B+Qh/B+ikBFQiqBHi7AAQi6AAiqhHgAQ5MkQikhFh/h+Qh/h+hFijQhIipAAi4QAAi5BIipQBFijB/h+QB/h+CkhFQCrhIC6AAQC6AACqBIQClBFB+B+QB/B+BGCjQBICpAAC5QAAC4hICpQhGCjh/B+Qh+B+ilBFQiqBIi6AAQi6AAirhIgAmMrFQikhFh/h+Qh/h+hFijQhIipAAi5QAAi5BIipQBFikB/h9QB/h+CkhFQCqhIC6AAQC6AACqBIQCkBFB/B+QB/B9BFCkQBICpAAC5QAAC5hICpQhFCjh/B+Qh/B+ikBFQiqBIi6AAQi6AAiqhIg");
	this.shape_4.setTransform(245.425,234.675);

	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(245.35,234.7,1,1,0,0,0,235.3,245.8);
	this.instance_3._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5599FF").s().p("EgFnAjoQikhFh/h+Qh+h+hGijQhIipAAi5QAAi5BIipQBGijB+h+QB/h+CkhFQCrhIC6AAQC5AACrBIQCjBFCAB+QB+B+BGCjQBICpAAC5QAAC5hICpQhGCjh+B+Qh/B+ikBFQirBIi5AAQi6AAirhIgA9rNVQikhFh/h+Qh/h+hFijQhJipAAi5QAAi5BJioQBFikB/h+QB/h+CkhFQCqhHC7AAQC6AACqBHQCkBFB/B+QB/B+BFCkQBICpAAC4QAAC5hICpQhFCjh/B+Qh+B+ilBFQiqBHi6AAQi7AAiqhHgASjMfQikhFh/h+Qh/h+hFijQhIipAAi4QAAi5BIipQBFijB/h+QB/h+CkhFQCqhIC7AAQC6AACqBIQClBFB+B+QB/B+BGCjQBICpAAC5QAAC4hICpQhGCjh/B+Qh+B+ilBFQiqBIi6AAQi7AAiqhIgAmRpbQilhFh/h+Qh+h+hGijQhIipAAi5QAAi5BIipQBGikB+h9QB/h+ClhFQCphIC7AAQC5AACrBIQCkBFB+B+QCAB9BFCkQBICpAAC5QAAC5hICpQhFCjiAB+Qh+B+ikBFQirBIi5AAQi7AAiphIg");
	this.shape_5.setTransform(245.95,235.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3,p:{x:390.225}},{t:this.shape_2,p:{y:81.8611}},{t:this.shape_1,p:{x:245.6457,y:386.4275}},{t:this.shape,p:{x:101.6948}}]},1).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_3,p:{x:398.925}},{t:this.shape_2,p:{y:87.8111}},{t:this.shape_1,p:{x:249.5457,y:379.8275}},{t:this.shape,p:{x:95.1948}}]},1).to({state:[{t:this.instance_2}]},23).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_3,p:{x:398.275}},{t:this.shape_2,p:{y:90.9611}},{t:this.shape_1,p:{x:245.6457,y:376.3775}},{t:this.shape,p:{x:91.5948}}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.0909},0).wait(1).to({rotation:8.1818,x:244.85},0).wait(1).to({rotation:12.2727,x:244.9},0).wait(1).to({rotation:16.3636,x:244.85,y:233.75},0).wait(1).to({rotation:20.4545,y:233.7},0).wait(1).to({rotation:24.5455,x:244.8,y:233.75},0).wait(1).to({rotation:28.6364,x:244.85,y:233.7},0).wait(1).to({rotation:32.7273,x:244.8},0).wait(1).to({rotation:36.8182,x:244.85},0).wait(1).to({rotation:40.9091,y:233.65},0).wait(1).to({rotation:45,x:244.8,y:233.7},0).wait(1).to({rotation:49.0909,x:244.85,y:233.75},0).wait(1).to({rotation:53.1818,x:244.8,y:233.7},0).wait(1).to({rotation:57.2727,x:244.85},0).wait(1).to({rotation:61.3636},0).wait(1).to({rotation:65.4545},0).wait(1).to({rotation:69.5455,y:233.65},0).wait(1).to({rotation:73.6364,x:244.8,y:233.7},0).wait(1).to({rotation:77.7273,x:244.85,y:233.65},0).wait(1).to({rotation:81.8182},0).wait(1).to({rotation:85.9091,x:244.8,y:233.7},0).wait(1).to({rotation:90,x:244.85,y:233.65},0).to({_off:true},1).wait(169));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({regX:235.9,rotation:3.913,x:245.95,y:234.15},0).wait(1).to({rotation:7.8261,x:246},0).wait(1).to({rotation:11.7391,x:245.95},0).wait(1).to({rotation:15.6522,x:246},0).wait(1).to({rotation:19.5652},0).wait(1).to({rotation:23.4783,x:245.95},0).wait(1).to({rotation:27.3913,x:246,y:234.2},0).wait(1).to({rotation:31.3043,y:234.15},0).wait(1).to({rotation:35.2174,x:245.95,y:234.2},0).wait(1).to({rotation:39.1304,x:246,y:234.15},0).wait(1).to({rotation:43.0435},0).wait(1).to({rotation:46.9565,x:245.95,y:234.2},0).wait(1).to({rotation:50.8696},0).wait(1).to({rotation:54.7826,x:246,y:234.15},0).wait(1).to({rotation:58.6957,x:245.95},0).wait(1).to({rotation:62.6087,x:246,y:234.2},0).wait(1).to({rotation:66.5217},0).wait(1).to({rotation:70.4348,y:234.25},0).wait(1).to({rotation:74.3478,x:245.95,y:234.2},0).wait(1).to({rotation:78.2609,x:246},0).wait(1).to({rotation:82.1739,x:245.95},0).wait(1).to({rotation:86.087},0).wait(1).to({rotation:90,x:246},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).wait(1).to({rotation:3.75,x:244.85},0).wait(1).to({rotation:7.5},0).wait(1).to({rotation:11.25,y:235.25},0).wait(1).to({rotation:15,x:244.9},0).wait(1).to({rotation:18.75,x:244.85,y:235.2},0).wait(1).to({rotation:22.5},0).wait(1).to({rotation:26.25,x:244.9},0).wait(1).to({rotation:30,x:244.85,y:235.25},0).wait(1).to({rotation:33.75,x:244.9,y:235.2},0).wait(1).to({rotation:37.5,x:244.85,y:235.25},0).wait(1).to({rotation:41.25,y:235.2},0).wait(1).to({rotation:45},0).wait(1).to({rotation:48.75,x:244.8,y:235.15},0).wait(1).to({rotation:52.5,x:244.85,y:235.25},0).wait(1).to({rotation:56.25,y:235.2},0).wait(1).to({rotation:60,x:244.8},0).wait(1).to({rotation:63.75},0).wait(1).to({rotation:67.5},0).wait(1).to({rotation:71.25,x:244.85},0).wait(1).to({rotation:75,y:235.15},0).wait(1).to({rotation:78.75,y:235.2},0).wait(1).to({rotation:82.5,x:244.8},0).wait(1).to({rotation:86.25,y:235.15},0).wait(1).to({rotation:90,x:244.85},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(143).to({_off:false},0).wait(1).to({regX:235.4,rotation:3.913,x:245.45,y:234.75},0).wait(1).to({rotation:7.8261,y:234.7},0).wait(1).to({rotation:11.7391,y:234.75},0).wait(1).to({rotation:15.6522,x:245.4},0).wait(1).to({rotation:19.5652},0).wait(1).to({rotation:23.4783},0).wait(1).to({rotation:27.3913,x:245.35},0).wait(1).to({rotation:31.3043,x:245.45,y:234.7},0).wait(1).to({rotation:35.2174,x:245.35,y:234.75},0).wait(1).to({rotation:39.1304,x:245.4,y:234.7},0).wait(1).to({rotation:43.0435,y:234.75},0).wait(1).to({rotation:46.9565,x:245.35},0).wait(1).to({rotation:50.8696,x:245.4,y:234.7},0).wait(1).to({rotation:54.7826,x:245.35,y:234.75},0).wait(1).to({rotation:58.6957},0).wait(1).to({rotation:62.6087},0).wait(1).to({rotation:66.5217,y:234.7},0).wait(1).to({rotation:70.4348},0).wait(1).to({rotation:74.3478,x:245.3},0).wait(1).to({rotation:78.2609,x:245.35,y:234.75},0).wait(1).to({rotation:82.1739,y:234.7},0).wait(1).to({rotation:86.087,x:245.3},0).wait(1).to({rotation:90,x:245.35},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-11.2,492.29999999999995,491.7);


// stage content:
(lib.homepage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// girly
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,0,0,4).p("AiTrVIOdThIo6DJIvX11g");
	this.shape.setTransform(385.5989,529.0682,0.3527,0.3522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,0,0,4).p("ACBroIuFTrIJdDlIOr2fg");
	this.shape_1.setTransform(243.9585,530.3048,0.3527,0.3522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("EhBEADvQAegMD2g8QD3g9BjgUQFxhLHNhBQHMhBGbglQIPgwGugSQGrgRJnAAQKqAAIPAVQIUAUVqBQQMtAwBCABQAWAAkZAbQkiAcmXAjQtWBNjlALQjkAMx5AWI0oAaQzYAZrbAOQ0zAaiYAEQiYAFAKgEg");
	this.shape_2.setTransform(298.9655,325.9637,0.3526,0.3522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D35F5F").s().p("EhBEADvQAegMD2g8QD3g9BjgUQFxhLHNhBQHMhBGbglQIPgwGugSQGrgRJnAAQKqAAIPAVQIUAUVqBQQMtAwBCABQAWAAkZAbQkiAcmXAjQtWBNjlALQjkAMx5AWI0oAaI+zAnQ0zAaiYAEIh0ACQgfAAAFgBg");
	this.shape_3.setTransform(298.9655,325.9637,0.3526,0.3522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D35F5F").ss(0.1,0,0,4).p("Eg/gAORQgKg7hAhWQhAhVifioQiiirhChYQhBhYgLg9QgFgfAUgfQAUgfAygnQFEj8PXjvQPXjuSphzQClgQDvgSQDwgSDLgLQDHgLJiAAQJhgBCxAMQIhAjGpA7QGpA7GBBeQGvBqFrCVQFrCVEOC3QBWA6ASAbQASAZgLA2QgTBiiFC4QiFC4jBDDIg1A2IlCgRQkhgQpzgkQxHhBo2gYQosgXpYgIQwxgMvbBPQvcBQtmCqQi0AjgTAAQgQABgEgIQgCgOgCgKg");
	this.shape_4.setTransform(310.882,294.3997,0.3526,0.3522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D35F5F").s().p("Eg/cAOpIgEgYQgKg7hAhWQhAhVifioQiiirhChYQhBhYgLg9QgFgfAUgfQAUgfAygnQFEj8PXjvQPXjuSphzQClgQDvgSQDwgSDLgLQDHgLJiAAQJhgBCxAMQIhAjGpA7QGpA7GBBeQGvBqFrCVQFrCVEOC3QBWA6ASAbQASAZgLA2QgTBiiFC4QiFC4jBDDIg1A2IlCgRQkhgQpzgkQxHhBo2gYQosgXpYgIQwxgMvbBPQvcBQtmCqQi0AjgTAAIgCAAQgOAAgEgHg");
	this.shape_5.setTransform(310.882,294.3997,0.3526,0.3522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D35F5F").ss(0.3,0,0,4).p("AiOBJQg0gZgPgfQgNgbAXgbQAzg6CXgBQBOgBA+AdQA+AdAJAoQAGAbgnAYQgjAWg8AMQiMAchYgpg");
	this.shape_6.setTransform(310.9402,255.2393,0.3526,0.3522);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D35F5F").s().p("AiOBJQg0gZgPgfQgNgbAXgbQAzg6CXgBQBOgBA+AdQA+AdAJAoQAGAbgnAYQgjAWg8AMQg5ALgvAAQhHAAg1gYg");
	this.shape_7.setTransform(310.9402,255.2393,0.3526,0.3522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.4,0,0,4).p("AAAiMQBtAABPApQBNApAAA6QAAA7hNApQhPAphtAAQhtAAhOgpQhNgpAAg7QAAg6BNgpQBOgpBtAAg");
	this.shape_8.setTransform(310.8424,255.2169,0.3526,0.3522);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ai6BkQhOgpAAg7QAAg6BOgpQBNgpBtAAQBuAABNApQBOApAAA6QAAA7hOApQhNAphuAAQhtAAhNgpg");
	this.shape_9.setTransform(310.8424,255.2169,0.3526,0.3522);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.4,0,0,4).p("EhAVAC7QQPjZRZhZQO+hNRTAMQM3AJSpBCQCnAJNCAxQJmAkGEAS");
	this.shape_10.setTransform(310.9826,322.8396,0.3526,0.3522);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("A+uh3QO+hNRTAMQM4AJSoBCIPpA6QJmAkGEASMiArAC4QQPjZRYhZg");
	this.shape_11.setTransform(310.9964,322.8415,0.3526,0.3522);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.4,0,0,4).p("Eg55gAVIrnC8MBnmgCEMAjugDJ");
	this.shape_12.setTransform(298.0153,329.9474,0.3526,0.3522);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Eg6CgAVMB/sgCRMgjuADJMhnmACEg");
	this.shape_13.setTransform(298.3634,329.9402,0.3526,0.3522);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.4,0,0,4).p("EBATANCIB2h3QCMiQBniBQFMmdiWhsQs0pW4RjVQ0wi15vB5Q2tBrygEjQohCGlgCSQloCVhjCHQg6BPBnCXQA+BbC+DFQC6DCA2BSQBaCIhNA6");
	this.shape_14.setTransform(310.9235,294.8241,0.3526,0.3522);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("EhAyAMmQg2hSi6jCQi+jGg+haQhniXA6hPQBjiIFoiVQFgiRIhiGQSgkkWthrQZvh4UwC1QYRDUM0JWQCWBslMGeQhnCBiMCQIh2B2MiA4ACnQBNg6haiIg");
	this.shape_15.setTransform(310.9235,294.8418,0.3526,0.3522);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF8080").s().p("Ai9B7QhOgzgBhIQABhIBOgzQBOgzBvAAQBvAABPAzQBOAzABBIQgBBIhOAzQhPA0hvAAQhvAAhOg0g");
	this.shape_16.setTransform(313.1223,449.4257,0.3527,0.3522);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3,0,0,4).p("AAAjgQBYAAA+BCQA+BCAABcQAABdg+BCQg+BChYAAQhWAAg/hCQg+hCAAhdQAAhcA+hCQA/hCBWAAg");
	this.shape_17.setTransform(352.1565,413.6563,0.3527,0.3522);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AiVCfQg+hCAAhdQAAhcA+hCQA/hCBWAAQBYAAA+BCQA+BCAABcQAABdg+BCQg+BChYAAQhWAAg/hCg");
	this.shape_18.setTransform(352.1565,413.6563,0.3527,0.3522);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3,0,0,4).p("AAAm6QC2AACACCQCBCCAAC2QAAC4iBCBQiACCi2AAQi1AAiAiCQiBiBAAi4QAAi2CBiCQCAiCC1AAg");
	this.shape_19.setTransform(352.1212,416.1043,0.3527,0.3522);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004455").s().p("Ak1E5QiBiBAAi4QAAi2CBiCQCAiCC1AAQC2AACACCQCBCCAAC2QAAC4iBCBQiACCi2AAQi1AAiAiCg");
	this.shape_20.setTransform(352.1212,416.1043,0.3527,0.3522);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3,0,0,4).p("AAAr5QCIAAB9A8QB5A5BdBqQDEDgAAE6QAAE7jEDgQhdBqh5A5Qh9A8iIAAQiHAAh9g8Qh4g5hehqQjEjgAAk7QAAk6DEjgQBehqB4g5QB9g8CHAAg");
	this.shape_21.setTransform(352.1653,414.7042,0.3527,0.3522);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkEK+Qh4g5hehqQjEjgAAk7QAAk6DEjgQBehpB4g6QB8g8CIAAQCIAAB9A8QB4A6BeBpQDEDgAAE6QAAE7jEDgQheBqh4A5Qh9A8iIAAQiIAAh8g8g");
	this.shape_22.setTransform(352.1653,414.7042,0.3527,0.3522);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3,0,0,4).p("AAAjgQBYAAA+BCQA+BCAABcQAABdg+BCQg+BChYAAQhXAAg+hCQg+hCAAhdQAAhcA+hCQA+hCBXAAg");
	this.shape_23.setTransform(275.834,414.0614,0.3527,0.3522);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AiVCfQg+hCAAhdQAAhcA+hCQA+hCBXAAQBYAAA+BCQA+BCAABcQAABdg+BCQg+BChYAAQhXAAg+hCg");
	this.shape_24.setTransform(275.834,414.0614,0.3527,0.3522);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3,0,0,4).p("AAAm6QC2AACACCQCBCCAAC2QAAC4iBCCQiACCi2AAQi1AAiAiCQiBiCAAi4QAAi2CBiCQCAiCC1AAg");
	this.shape_25.setTransform(275.7899,417.1346,0.3527,0.3522);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#004455").s().p("Ak1E5QiBiCAAi3QAAi3CBiBQCAiDC1AAQC2AACACDQCBCBAAC3QAAC4iBCBQiACDi2AAQi1AAiAiDg");
	this.shape_26.setTransform(275.7899,417.1346,0.3527,0.3522);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3,0,0,4).p("AAAr5QCJAAB8A8QB5A6BdBpQDEDgAAE6QAAE8jEDfQhdBqh5A5Qh8A8iJAAQiHAAh9g8Qh5g5hdhqQjEjfAAk8QAAk7DEjfQBdhpB5g6QB9g8CHAAg");
	this.shape_27.setTransform(275.1639,415.1093,0.3527,0.3522);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AkEK+Qh5g5hdhqQjEjfAAk8QAAk7DEjfQBdhqB5g5QB9g8CHAAQCJAAB8A8QB5A5BdBqQDEDgAAE6QAAE7jEDgQhdBqh5A5Qh8A8iJAAQiHAAh9g8g");
	this.shape_28.setTransform(275.1639,415.1093,0.3527,0.3522);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E3DBDB").s().p("AFGASQhAADhAgBQiAgGhZACQhZADgfgEQhcAEhUgHIhWB8QhFBngcAoQgdAnAAgFQABgFhOkmQhOklAEgYQAEgYKeAKIKpAKQAMAAhAEjQhAEhgHAWQgHAXACADg");
	this.shape_29.setTransform(313.7843,615.3779);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5599FF").ss(0.1,0,0,4).p("AnMJrQkPhhgEgDQgDgDHApmQE0moBHhfQBJhgANAAQAOAABfAIQBZAJCZAKQCYAKAaAFIAcAEInKKxQnJKzgDABQgCADkQhig");
	this.shape_30.setTransform(242.5489,530.2468,0.3527,0.3522);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5599FF").s().p("AnKJrQkPhhgEgDQgDgDHApmQE0moBHhfQBJhgANAAQAOAABfAIQBZAJCZAKQCYAKAaAFIAcAEInKKxQnJKzgDABIAAAAQgJAAkJhfg");
	this.shape_31.setTransform(242.4867,530.2468,0.3527,0.3522);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5599FF").ss(0.1,0,0,4).p("AkLAfInUqpQgDgEApgFQAogEBngIQCigMBpgLQBQgJAYAAIAZAAIG+JbQHAJYAAAGQAAAFkKBfIkPBhQgEACnOqig");
	this.shape_32.setTransform(386.5414,529.4269,0.3527,0.3522);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5599FF").s().p("AkLAfInUqpQgDgEApgFQAogEBngIQCigMBpgLQBQgJAYAAIAZAAIG+JbQHAJYAAAGQAAAFkKBfIkPBhIAAABQgFAAnNqhg");
	this.shape_33.setTransform(386.5414,529.4269,0.3527,0.3522);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFE6D5").ss(0.2,0,0,4).p("AidC1QgZgLgbgVQgbgVgNgSQgxhEAjhSQAkhUBjguQBfgtBcAJQBdAJBHA9QAnAhAJARQAIASAAAvQAAAqgIAVQgHAVgaAeQhFBRh0AZQhzAahfgsg");
	this.shape_34.setTransform(408.4844,559.3201,0.3527,0.3522);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFE6D5").s().p("AidC1QgZgLgbgVQgbgVgNgSQgxhEAjhSQAkhUBjguQBfgtBcAJQBdAJBHA9QAnAhAJARQAIASAAAvQAAAqgIAVQgHAVgaAeQhFBRh0AZQgrAKgnAAQhEAAg8gcg");
	this.shape_35.setTransform(408.4844,559.3201,0.3527,0.3522);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFE6D5").ss(0.2,0,0,4).p("AhXC+Qh4gngzhdQgyhbA5hPQAvhCBcgVQBVgTBcAXQBdAXA7A4QBBA9AABNQAABkh5A3Qh5A3h/gqg");
	this.shape_36.setTransform(221.4053,560.5819,0.3527,0.3522);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFE6D5").s().p("AhXC/Qh4gogzhdQgyhbA5hPQAvhCBcgVQBVgTBcAYQBdAWA7A4QBBA9AABNQAABkh5A3QhFAfhHAAQg1AAg3gRg");
	this.shape_37.setTransform(221.4053,560.5819,0.3527,0.3522);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2,0,0,4).p("Egx5gYNIgcF9QgbHNAFGTQAQUJFJDfQDZCTLNBYQKEBPOLARQNeAPMWhJQMWhJF/hPQF/hQDGi5QDGi6Adk3QAdk3gFhiQgGhjgBhkQgCgKgBgKQhEnSAZiH");
	this.shape_38.setTransform(312.7622,452.3869,0.3527,0.3522);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.9,0,0,4).p("AXg1SQq1FIlcCjQprEjnCCuQpcDqo9CIQqYCeq5AwQgNETgbImQgbHVgpFGQhqNfkUHMQkylnjuqAQjyqLhVrEQhcsBB7pzQCJq/GHmYQM+tiV6lCQStkSWVCZQJyBEJWCRQI3CJHXC9QHNC5EnDNQEtDRBPDCQB0EgA/JcQA9JFgFLMQgFLfhJKbQhPLRiOHiQl0kAjZlRQi7kjhTl1QhAkhgMmVQgCnOgEjdQgHmDg0jyQhFk/ipjaQjBj6laiYQl7impKg7g");
	this.shape_39.setTransform(308.8579,391.9234,0.3527,0.3522);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#502D16").s().p("EhBSAhEQjyqLhVrEQhcsBB7pzQCJq/GHmYQM+tiV6lCQStkSWVCZQJyBEJWCRQI3CJHXC9QHNC5EnDNQEtDRBPDCQB0EgA/JcQA9JFgFLMQgFLfhJKbQhPLRiOHiQl0kAjZlRQi7kjhTl1QhAkhgMmVQgCnOgEjdQgHmDg0jyQhFk/ipjaQjBj6laiYQl7impKg7IwRHrQprEjnCCuQpcDqo9CIQqYCeq5AwIgoM5QgbHVgpFGQhqNfkUHMQkylnjuqAg");
	this.shape_40.setTransform(308.8579,391.8609,0.3527,0.3522);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.5,0,0,4).p("ABCDnQCAgdBIhZQBHhYgbhfQgchghugvQhtgviAAeQiAAdhIBZQhHBYAbBfQAcBfBuAvQBuAwB/geg");
	this.shape_41.setTransform(408.5695,559.3566,0.3527,0.3522);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,0,0,4).p("ABCjmQCAAdBHBZQBIBYgbBfQgcBghuAvQhuAvh/geQiAgdhIhZQhHhYAbhfQAbhfBugvQBvgvB/Adg");
	this.shape_42.setTransform(221.4095,560.5257,0.3527,0.3522);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.9,0,0,4).p("A+gunIG6dAIJiuJIcQAMIKIOLIGN9Z");
	this.shape_43.setTransform(313.7489,616.5718,0.3527,0.3522);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.6,0,0,4).p("AzmxUMgW9AinMBVHgAhMgXXgh+");
	this.shape_44.setTransform(315.032,544.2578,0.3526,0.3522);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5599FF").s().p("AzmxTMAmzAAIMAXXAh+MhVHAAhg");
	this.shape_45.setTransform(315.03,544.2174,0.3526,0.3522);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFE6D5").s().p("AheMsIhgAAIhggDIgagBQg0gBg0gDIhqgHIhqgKQg0gFgzgHQg1gHg0gLQg0gJgygNQgygNgpgiQgpgigQgzQgQgwgKg0QgKg0gFg0QgGg0gDg1QgDg0gBg1QAAgzADg0IAHhoIAFhoQADg0AEg0IABgQIVWnFQBxhMCLgpQAwAQA1AHQA0AHA5AFQA5AFAvAdQAuAdAoAWQApAVAiAfQAhAfAdAoQAcApASAuQARAuAKAuIAUBbQALAsgFAxQgFAxABAqIACBfQABA0gGA5QgGA5AGA0IAJBtQAFA+gJA+IgCASIgBACIAGAqQAGAqgaA4QgZA3gxAgQgyAfgxAXQgrAUgyAIIhjAOIh6AOQhBAGhBAEIh9AHQhAADhAACQhLAChKAAIhpABIhYgBg");
	this.shape_46.setTransform(311.8279,423.425);

	this.instance = new lib.Tween9("synched",0);
	this.instance.setTransform(367.4,645.7,1,1,10.4787,0,0,58.4,195.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(0.4,0,0,4).p("AiUrVIOdThIo6DJIvW11g");
	this.shape_47.setTransform(385.5582,529.0156,0.3526,0.3522);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.4,0,0,4).p("ACBroIuFTrIJdDlIOr2fg");
	this.shape_48.setTransform(243.9183,530.2508,0.3526,0.3522);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(0.9,0,0,4).p("AAAr5QCIAAB9A8QB5A5BdBqQDEDgAAE6QAAE7jEDgQhdBqh5A5Qh9A8iIAAQiHAAh9g8Qh4g5hehqQjEjgAAk7QAAk6DEjgQBehqB4g5QB9g8CHAAg");
	this.shape_49.setTransform(352.1043,414.6502,0.3526,0.3522);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.9,0,0,4).p("AAAr5QCJAAB8A8QB5A6BdBpQDEDgAAE6QAAE8jEDfQhdBqh5A5Qh8A8iJAAQiHAAh9g8Qh5g5hdhqQjEjfAAk8QAAk7DEjfQBdhpB5g6QB9g8CHAAg");
	this.shape_50.setTransform(275.1162,415.0552,0.3526,0.3522);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFE6D5").s().p("EgAlAjZQpQgBkCgKQtJgkoYhaQoYhaiNiBQhkhchGjyQhHjxgclgQgUjsgDi6QgEi5ALisQAPjWASlqQAHiRAHhoQAHhoACgCQADgDA5gHQA6gIBLgHQIMg1HghrQHehqH7iwQFYh3F+ilQF8ikKwlFIJzkoICFARQJfBRGHDlQAfASA4AsQA3AsAwAsQB/B2BLB9QBLB+A0C1QAvCjAPC0QAPC0AKHyQAIG8ALCvQAKCuAbCcQAOBTgHCpQgHCpgWByQgsDmhsDBQhRCRiHBoQiIBoiiAqQjZA3nKAtQnLAupKAXQj5AKopAAIg1AAg");
	this.shape_51.setTransform(311.7686,425.3932,0.3526,0.3522);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E3DBDB").s().p("AWZLpQhXh2hziiIkbmPImZgMQisgFkSgDQkYgEjYAAIoXAAIkPGSQhwCnhSB0QhRB0gDgDQgKgIjDs8QjEs7AGgFQAEgEdTgOQdSgNANAEQAFABi1NVQi0NUgGAGIgBAAQgEAAhUhwg");
	this.shape_52.setTransform(313.8567,613.7976,0.3526,0.3522);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(0.6,0,0,4).p("EgyYgYMIgcF9QgbHOAFGTQAQUJFJDfQDZCTLNBYQKEBPOLAQQNeAQMmgtQM9guHGheQE4hBC9jtQCYi9BDkiQAwjQAAjtQAAhKgEhEIgFg1");
	this.shape_53.setTransform(311.7631,452.1885,0.3526,0.3522);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFE6D5").s().p("AheMsIhgAAIhggDIgagBQg0gBg0gDIhqgHIhqgKQg0gFgzgHQg1gHg0gLQg0gJgygNQgygNgpgiQgpgigQgzQgQgwgKg0QgKg0gFg0QgGg0gDg1QgDg0gBg1QAAgzADg0IAHhoIAFhoIAHhoIABgQIVWnFQBxhMCLgpQAwAQA1AHQA0AHA5AFQA5AFAvAdQAuAdAoAWQApAVAiAfQAhAfAdAoQAcApASAuQARAuAKAuIAUBbQALAsgFAxQgFAxABAqIACBfQABA0gGA5QgGA5AGA0IAJBtQAFA+gJA+IgCASIgBACIAGAqQAGAqgaA4QgZA3gxAgQgyAfgxAXQgrAUgyAIIhjAOIh6AOQhBAGhBAEIh9AHQhAADhAACIiVACIhpABIhYgBg");
	this.shape_54.setTransform(311.8279,412.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45,p:{x:315.03,y:544.2174}},{t:this.shape_44,p:{x:315.032,y:544.2578}},{t:this.shape_43,p:{scaleX:0.3527,x:313.7489,y:616.5718}},{t:this.shape_42,p:{scaleX:0.3527,x:221.4095,y:560.5257}},{t:this.shape_41,p:{scaleX:0.3527,x:408.5695,y:559.3566}},{t:this.shape_40,p:{scaleX:0.3527,x:308.8579,y:391.8609}},{t:this.shape_39,p:{scaleX:0.3527,x:308.8579,y:391.9234}},{t:this.shape_38},{t:this.shape_37,p:{scaleX:0.3527,x:221.4053,y:560.5819}},{t:this.shape_36,p:{scaleX:0.3527,x:221.4053,y:560.5819}},{t:this.shape_35,p:{scaleX:0.3527,x:408.4844,y:559.3201}},{t:this.shape_34,p:{scaleX:0.3527,x:408.4844,y:559.3201}},{t:this.shape_33,p:{scaleX:0.3527,x:386.5414,y:529.4269}},{t:this.shape_32,p:{scaleX:0.3527,x:386.5414,y:529.4269}},{t:this.shape_31,p:{scaleX:0.3527,x:242.4867,y:530.2468}},{t:this.shape_30,p:{scaleX:0.3527,x:242.5489,y:530.2468}},{t:this.shape_29},{t:this.shape_28,p:{scaleX:0.3527,x:275.1639,y:415.1093}},{t:this.shape_27},{t:this.shape_26,p:{scaleX:0.3527,x:275.7899,y:417.1346}},{t:this.shape_25},{t:this.shape_24,p:{scaleX:0.3527,x:275.834,y:414.0614}},{t:this.shape_23},{t:this.shape_22,p:{scaleX:0.3527,x:352.1653,y:414.7042}},{t:this.shape_21},{t:this.shape_20,p:{scaleX:0.3527,x:352.1212,y:416.1043}},{t:this.shape_19},{t:this.shape_18,p:{scaleX:0.3527,x:352.1565,y:413.6563}},{t:this.shape_17},{t:this.shape_16,p:{scaleX:0.3527,x:313.1223,y:449.4257}},{t:this.shape_15,p:{scaleY:0.3522,x:310.9235,y:294.8418}},{t:this.shape_14,p:{scaleY:0.3522,x:310.9235,y:294.8241}},{t:this.shape_13,p:{scaleY:0.3522,x:298.3634,y:329.9402}},{t:this.shape_12,p:{scaleY:0.3522,x:298.0153,y:329.9474}},{t:this.shape_11,p:{scaleY:0.3522,x:310.9964,y:322.8415}},{t:this.shape_10,p:{scaleY:0.3522,x:310.9826,y:322.8396}},{t:this.shape_9,p:{x:310.8424,y:255.2169}},{t:this.shape_8,p:{x:310.8424,y:255.2169}},{t:this.shape_7,p:{x:310.9402,y:255.2393}},{t:this.shape_6,p:{x:310.9402,y:255.2393}},{t:this.shape_5,p:{x:310.882,y:294.3997}},{t:this.shape_4,p:{x:310.882,y:294.3997}},{t:this.shape_3,p:{x:298.9655,y:325.9637}},{t:this.shape_2,p:{x:298.9655,y:325.9637}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},48).to({state:[{t:this.shape_54},{t:this.shape_45,p:{x:315.0164,y:544.1938}},{t:this.shape_44,p:{x:315.0184,y:544.2342}},{t:this.shape_43,p:{scaleX:0.3526,x:313.7081,y:616.5183}},{t:this.shape_42,p:{scaleX:0.3526,x:221.3807,y:560.4771}},{t:this.shape_41,p:{scaleX:0.3526,x:408.5164,y:559.308}},{t:this.shape_40,p:{scaleX:0.3526,x:308.8178,y:391.8269}},{t:this.shape_39,p:{scaleX:0.3526,x:308.8178,y:391.8894}},{t:this.shape_53},{t:this.shape_37,p:{scaleX:0.3526,x:221.3765,y:560.5333}},{t:this.shape_36,p:{scaleX:0.3526,x:221.3765,y:560.5333}},{t:this.shape_35,p:{scaleX:0.3526,x:408.4313,y:559.2716}},{t:this.shape_34,p:{scaleX:0.3526,x:408.4313,y:559.2716}},{t:this.shape_33,p:{scaleX:0.3526,x:386.4912,y:529.381}},{t:this.shape_32,p:{scaleX:0.3526,x:386.4912,y:529.381}},{t:this.shape_31,p:{scaleX:0.3526,x:242.4551,y:530.2008}},{t:this.shape_30,p:{scaleX:0.3526,x:242.5173,y:530.2008}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_28,p:{scaleX:0.3526,x:275.1162,y:415.0552}},{t:this.shape_50},{t:this.shape_26,p:{scaleX:0.3526,x:275.7421,y:417.0803}},{t:this.shape_24,p:{scaleX:0.3526,x:275.7862,y:414.0075}},{t:this.shape_22,p:{scaleX:0.3526,x:352.1043,y:414.6502}},{t:this.shape_49},{t:this.shape_20,p:{scaleX:0.3526,x:352.0602,y:416.0502}},{t:this.shape_18,p:{scaleX:0.3526,x:352.0955,y:413.6025}},{t:this.shape_16,p:{scaleX:0.3526,x:313.0817,y:449.3867}},{t:this.shape_15,p:{scaleY:0.3521,x:310.8966,y:294.7906}},{t:this.shape_14,p:{scaleY:0.3521,x:310.8966,y:294.7729}},{t:this.shape_13,p:{scaleY:0.3521,x:298.3375,y:329.8829}},{t:this.shape_12,p:{scaleY:0.3521,x:297.9894,y:329.8901}},{t:this.shape_11,p:{scaleY:0.3521,x:310.9694,y:322.7854}},{t:this.shape_10,p:{scaleY:0.3521,x:310.9557,y:322.7836}},{t:this.shape_9,p:{x:310.8289,y:255.2059}},{t:this.shape_8,p:{x:310.8289,y:255.2059}},{t:this.shape_7,p:{x:310.9267,y:255.2283}},{t:this.shape_6,p:{x:310.9267,y:255.2283}},{t:this.shape_5,p:{x:310.8685,y:294.3869}},{t:this.shape_4,p:{x:310.8685,y:294.3869}},{t:this.shape_3,p:{x:298.9525,y:325.9496}},{t:this.shape_2,p:{x:298.9525,y:325.9496}},{t:this.shape_48},{t:this.shape_47}]},143).wait(1));

	// cupcake
	this.instance_1 = new lib.cupcake();
	this.instance_1.setTransform(1644,434.95,1,1,0,0,0,46.1,50.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFD5E5").s().p("AjrEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAIHXAAQB1AABSBSQBTBTAABzQAAB1hTBSQhSBSh1AAg");
	this.shape_55.setTransform(1644.3815,409.4468,0.3526,0.3522);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D40000").s().p("AjdDSQhbhXAAh7QAAh6BbhXQBdhXCAAAQCBAABcBXQBcBXAAB6QAAB7hcBXQhcBXiBAAQiAAAhdhXg");
	this.shape_56.setTransform(1644.6548,395.1561,0.3526,0.3522);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFD5E5").s().p("Ap/EZQh0AAhShSQhThTAAh0QAAh0BThSQBShSB0AAIT/AAQB0AABTBSQBSBSAAB0QAAB0hSBTQhTBSh0AAg");
	this.shape_57.setTransform(1645.1662,419.8896,0.3526,0.3522);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFD5E5").s().p("AwCEZQh1AAhShSQhThSAAh1QAAhzBThTQBShSB1AAMAgGAAAQB0AABTBSQBSBTAABzQAAB1hSBSQhTBSh0AAg");
	this.shape_58.setTransform(1643.8349,433.2205,0.3526,0.3522);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("AjNofIGbQ/");
	this.shape_59.setTransform(1627.772,462.2572,0.3526,0.3522);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ah3lcIDvK5");
	this.shape_60.setTransform(1619.97,455.6537,0.3526,0.3522);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#11002B").ss(2.5,0,0,11.3).p("Ai3nuIFvPd");
	this.shape_61.setTransform(1617.4576,460.2762,0.3526,0.3522);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D40055").s().p("Ap6JTIm4ylMAhlgACImeSpg");
	this.shape_62.setTransform(1645.3337,464.1616,0.3526,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},191).wait(1));

	// donut
	this.instance_2 = new lib.donut();
	this.instance_2.setTransform(1338.6,441.3,1,1,0,0,0,53.2,51.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape_63.setTransform(1317.1667,465.7511,0.3526,0.3521);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AgMhwIAZDh");
	this.shape_64.setTransform(1371.379,470.3728,0.3526,0.3521);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_65.setTransform(1364.7677,455.3193,0.3526,0.3521);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABxAPIjhge");
	this.shape_66.setTransform(1337.9172,474.3342,0.3526,0.3521);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AhbhDIC3CH");
	this.shape_67.setTransform(1319.2823,407.7822,0.3526,0.3521);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AAIhxIgPDi");
	this.shape_68.setTransform(1378.1225,448.9811,0.3526,0.3521);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("AgOhwIAdDh");
	this.shape_69.setTransform(1307.1088,471.8253,0.3526,0.3521);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF6600").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_70.setTransform(1312.9355,446.076,0.3526,0.3521);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABOBTIibil");
	this.shape_71.setTransform(1303.6798,423.4959,0.3526,0.3521);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("ABAhdIh/C7");
	this.shape_72.setTransform(1349.9585,415.8371,0.3526,0.3521);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AhwAJIDhgR");
	this.shape_73.setTransform(1370.0567,410.2911,0.3526,0.3521);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("Ag0hkIBpDJ");
	this.shape_74.setTransform(1381.8248,434.3238,0.3526,0.3521);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#00D400").ss(5.3,0,0,11.3).p("AA3BjIhtjG");
	this.shape_75.setTransform(1298.9197,461.3935,0.3526,0.3521);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABvAcIjcg3");
	this.shape_76.setTransform(1329.4636,401.3119,0.3526,0.3521);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AgThvIAoDf");
	this.shape_77.setTransform(1308.0432,410.4231,0.3526,0.3521);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhugaIDcA1");
	this.shape_78.setTransform(1298.9108,443.5671,0.3526,0.3521);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABehAIi7CB");
	this.shape_79.setTransform(1319.5468,479.7482,0.3526,0.3521);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABkg2IjGBt");
	this.shape_80.setTransform(1379.1803,460.6013,0.3526,0.3521);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("AhlgxIDLBj");
	this.shape_81.setTransform(1352.8675,472.0894,0.3526,0.3521);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABZBHIixiN");
	this.shape_82.setTransform(1367.5356,438.0211,0.3526,0.3521);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFE680").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_83.setTransform(1358.8176,406.8579,0.3526,0.3521);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABBhdIiAC7");
	this.shape_84.setTransform(1372.8335,425.2125,0.3526,0.3521);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("AhGhYICNCx");
	this.shape_85.setTransform(1343.3296,397.773,0.3526,0.3521);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABThNIilCb");
	this.shape_86.setTransform(1323.5135,423.0997,0.3526,0.3521);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABLhVIiVCq");
	this.shape_87.setTransform(1292.9695,433.3994,0.3526,0.3521);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#DD55FF").ss(5.3,0,0,11.3).p("ABYhHIivCP");
	this.shape_88.setTransform(1344.3963,482.2571,0.3526,0.3521);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#5599FF").s().p("AlYFSQiPiMAAjGQAAjECPiMQCPiMDJAAQDKAACPCMQCPCMAADEQAADGiPCMQiPCLjKAAQjJAAiPiLg");
	this.shape_89.setTransform(1337.9852,442.5891,0.3526,0.3522);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF2A7F").s().p("AlcMOQihhAh8h2Qh8h1hEiZQhGidAAitQAAisBGidQBEiZB8h1QB9h2CghAQCnhDC1AAQC3AACmBDQChBAB8B2QB8B1BECZQBGCdAACsQAACthGCdQhECZh8B1Qh8B2ihBAQimBDi3AAQi1AAinhDg");
	this.shape_90.setTransform(1338.1615,438.486,0.3526,0.3522);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF5599").s().p("ApLVAQkQhvjRjKQjRjKhykFQh4kPAAkpQAAknB4kPQBykGDRjKQDRjKEQhvQEYhyEzAAQEzAAEZByQEQBvDRDKQDRDKBzEGQB2EPAAEnQAAEph2EPQhzEFjRDKQjRDKkQBvQkZBykzAAQkyAAkZhyg");
	this.shape_91.setTransform(1338.5406,441.286,0.3526,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},191).wait(1));

	// tablets
	this.instance_3 = new lib.tablets();
	this.instance_3.setTransform(1492.95,583.45,1,1,0,0,0,39.9,58.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAfABAoQAAAngXAfQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape_92.setTransform(1481.5535,575.7939,0.3526,0.3522);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_93.setTransform(1481.5539,575.7939,0.3526,0.3522);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_94.setTransform(1475.1492,575.694,0.3526,0.3521);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_95.setTransform(1474.9507,575.7939,0.3526,0.3522);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAkQAYAfABAnQAAAngWAgQgYAggmAKQgJACgQAAQgJAAhnAAg");
	this.shape_96.setTransform(1481.5711,615.3094,0.3526,0.3522);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAmgWAhQgYAggmAJQgJADgQAAIhwAAg");
	this.shape_97.setTransform(1481.5715,615.3094,0.3526,0.3522);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_98.setTransform(1475.1668,615.2026,0.3526,0.3521);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAfAhQAgAiAAAuQAAAvggAiQgfAigsAAg");
	this.shape_99.setTransform(1474.9683,615.3094,0.3526,0.3522);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAhgmAJQgJACgQAAQgRABhfAAg");
	this.shape_100.setTransform(1481.5711,629.8724,0.3526,0.3522);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAeABAoQAAAngXAfQgXAhgmAJQgJACgQAAIhwABg");
	this.shape_101.setTransform(1481.5715,629.8724,0.3526,0.3522);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_102.setTransform(1475.1668,629.7631,0.3526,0.3521);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfghAAgwQAAgvAfghQAgghAsgBIH0AAQAtABAfAhQAgAhAAAvQAAAwggAhQgfAhgtABg");
	this.shape_103.setTransform(1474.9683,629.8724,0.3526,0.3522);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADABQArAFAbAjQAYAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAhfAAg");
	this.shape_104.setTransform(1481.5888,601.7149,0.3526,0.3522);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAIhwABg");
	this.shape_105.setTransform(1481.5892,601.7149,0.3526,0.3522);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_106.setTransform(1475.1844,601.6105,0.3526,0.3521);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAwggAhQgfAigsAAg");
	this.shape_107.setTransform(1474.986,601.7149,0.3526,0.3522);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_108.setTransform(1481.5625,588.684,0.3526,0.3522);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJACgQAAIhwABg");
	this.shape_109.setTransform(1481.5627,588.684,0.3526,0.3522);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_110.setTransform(1475.158,588.5818,0.3526,0.3521);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAfgiAtAAIH0AAQAtAAAfAiQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_111.setTransform(1474.9683,588.684,0.3526,0.3522);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIgBjjIB5AAQB6AAADAAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAQgRAAhfAAg");
	this.shape_112.setTransform(1481.5711,562.3667,0.3526,0.3522);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfABAoQAAAmgXAgQgXAigmAIQgJADgQAAIhwAAg");
	this.shape_113.setTransform(1481.5715,562.3667,0.3526,0.3522);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_114.setTransform(1475.1668,562.2603,0.3526,0.3521);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAgvAfghQAggiAsABIH0AAQAtgBAfAiQAgAhAAAvQAAAwggAhQgfAigtAAg");
	this.shape_115.setTransform(1474.9683,562.3579,0.3526,0.3522);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_116.setTransform(1516.5082,615.2918,0.3526,0.3522);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB8ABQAsAFAbAkQAXAeABAoQABAngXAfQgYAhglAJQgKACgQAAIhvABg");
	this.shape_117.setTransform(1516.5084,615.2918,0.3526,0.3522);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_118.setTransform(1510.1007,615.185,0.3526,0.3521);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF0000").s().p("Aj6BzQgsgBgfghQgggiAAgvQAAguAggiQAfgiAsABIH1AAQAsgBAfAiQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_119.setTransform(1509.9052,615.2918,0.3526,0.3522);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAcAjQAXAfABAoQAAAmgWAgQgYAhgmAJQgJACgQAAQgRABheAAg");
	this.shape_120.setTransform(1516.5082,629.8724,0.3526,0.3522);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAJQgJADgQAAIhwAAg");
	this.shape_121.setTransform(1516.5084,629.8724,0.3526,0.3522);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_122.setTransform(1510.1007,629.7631,0.3526,0.3521);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0000").s().p("Aj5BzQgtgBgfghQgggiAAgvQAAgvAgghQAfgiAtAAIHzAAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtABg");
	this.shape_123.setTransform(1509.914,629.8724,0.3526,0.3522);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_124.setTransform(1516.4906,601.7061,0.3526,0.3522);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_125.setTransform(1516.4908,601.7061,0.3526,0.3522);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_126.setTransform(1510.0919,601.6105,0.3526,0.3521);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("Aj6ByQgsABgfgiQgggiAAgvQAAguAggiQAfghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAvggAiQgfAigtgBg");
	this.shape_127.setTransform(1509.8964,601.6973,0.3526,0.3522);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_128.setTransform(1516.5259,588.6222,0.3526,0.3522);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQAsAHAaAjQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_129.setTransform(1516.526,588.6223,0.3526,0.3522);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_130.setTransform(1510.1183,588.5202,0.3526,0.3521);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAgvAfghQAggiAsAAIH0AAQAtAAAfAiQAgAhAAAvQAAAvggAiQgfAhgtAAg");
	this.shape_131.setTransform(1509.9317,588.6135,0.3526,0.3522);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB2AAAGABQAsAFAbAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_132.setTransform(1516.5259,575.5914,0.3526,0.3522);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAQB3AAAGABQArAFAbAkQAYAfAAAnQABAngXAfQgYAiglAIQgJADgQAAIhwAAg");
	this.shape_133.setTransform(1516.526,575.5914,0.3526,0.3522);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADn");
	this.shape_134.setTransform(1510.1183,575.4915,0.3526,0.3521);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfghAAgwQAAguAfgiQAgghAsgBIH0AAQAtABAfAhQAgAiAAAuQAAAwggAhQgfAigtAAg");
	this.shape_135.setTransform(1509.9317,575.5826,0.3526,0.3522);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAgQgYAggmAKQgJACgQAAQgRAAheAAg");
	this.shape_136.setTransform(1516.4553,562.3579,0.3526,0.3522);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAngXAfQgYAhglAKQgJACgQgBIhwABg");
	this.shape_137.setTransform(1516.4555,562.3579,0.3526,0.3522);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_138.setTransform(1510.0478,562.2603,0.3526,0.3521);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("Aj6BzQgsgBggghQgfgiAAgvQAAgvAfghQAgghAsgBIH1AAQAsABAfAhQAgAhAAAvQAAAvggAiQgfAhgsABg");
	this.shape_139.setTransform(1509.8611,562.3579,0.3526,0.3522);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADAAQArAGAbAjQAYAfABAoQAAAngWAfQgYAhgmAJQgJACgQABQgJAAhmAAg");
	this.shape_140.setTransform(1516.4201,549.1685,0.3526,0.3522);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgyByIh3AAIgBjjIB5AAIB8AAQAsAGAbAjQAXAfABAoQABAngXAfQgYAhglAKQgJACgRAAIhvAAg");
	this.shape_141.setTransform(1516.4203,549.1685,0.3526,0.3522);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhzIAADm");
	this.shape_142.setTransform(1510.0125,549.0732,0.3526,0.3521);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("Aj5BzQgtgBggghQgfgiAAgvQAAgvAfghQAgghAtAAIH0AAQAtAAAeAhQAgAhAAAvQAAAwggAhQgfAhgsABg");
	this.shape_143.setTransform(1509.8082,549.1685,0.3526,0.3522);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAjQAXAgABAnQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_144.setTransform(1516.3672,536.1199,0.3526,0.3522);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9AAQArAGAbAjQAYAfAAAoQABAmgXAgQgXAhgmAJQgJADgQgBIhwABg");
	this.shape_145.setTransform(1516.3674,536.1199,0.3526,0.3522);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADm");
	this.shape_146.setTransform(1509.9596,536.0269,0.3526,0.3521);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("Aj6ByQgsAAgfghQgggiAAgvQAAguAggiQAfghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_147.setTransform(1509.773,536.1199,0.3526,0.3522);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjID1AAQAsAHAbAjQAXAeABAoQAAAngWAfQgXAhgnAJQgJADgQAAQgRAAheAAg");
	this.shape_148.setTransform(1481.5625,549.2123,0.3526,0.3522);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AipByIgBjjID2AAQArAHAbAjQAYAeAAAoQABAngXAfQgXAhgmAJQgJADgQAAIhwAAg");
	this.shape_149.setTransform(1481.5627,549.2125,0.3526,0.3522);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_150.setTransform(1475.158,549.1084,0.3526,0.3521);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("Aj6ByQgsAAggghQgfgiAAgvQAAguAfgiQAgghAsAAIH0AAQAtAAAfAhQAgAiAAAuQAAAvggAiQgfAhgtAAg");
	this.shape_151.setTransform(1474.9683,549.2037,0.3526,0.3522);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(0.9,0,0,4).p("AipByIAAjjIB5AAQB5AAADABQArAFAcAkQAXAfABAnQAAAngWAfQgYAigmAIQgJADgQAAQgRAAheAAg");
	this.shape_152.setTransform(1481.5449,536.1551,0.3526,0.3522);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AipByIgBjjIB5AAIB9ABQArAFAbAjQAYAfAAAoQABAngXAfQgYAiglAIQgJACgQAAIhvABg");
	this.shape_153.setTransform(1481.5451,536.1551,0.3526,0.3522);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(1.3,0,0,4).p("AAAhyIAADl");
	this.shape_154.setTransform(1475.1404,536.0621,0.3526,0.3521);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF0000").s().p("Aj6BzQgsAAgggiQgfgiAAgvQAAguAfgiQAgghAsAAIH1AAQAsAAAgAhQAfAiAAAuQAAAvgfAiQggAigsAAg");
	this.shape_155.setTransform(1474.9507,536.1551,0.3526,0.3522);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#B7BEC8").s().p("AwwZ6QgYAAgRgRQgRgRAAgZMAAAgx+QAAgYARgRQARgRAYAAMAhhAAAQAYAAARARQARARAAAYMAAAAx+QAAAZgRARQgRARgYAAg");
	this.shape_156.setTransform(1492.7614,583.3912,0.3526,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},191).wait(1));

	// pills
	this.instance_4 = new lib.pillss();
	this.instance_4.setTransform(1490,295.55,1,1,0,0,0,41.1,50.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#AC93A7").s().p("Ak6A7IAAh1IJ1AAIAAB1g");
	this.shape_157.setTransform(1474.706,303.1606,0.3526,0.3522);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AC93A7").s().p("ApqA/IAAh9ITVAAIAAB9g");
	this.shape_158.setTransform(1485.4088,296.3719,0.3526,0.3522);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#550022").s().p("AoKBAIAAh/IQVAAIAAB/g");
	this.shape_159.setTransform(1482.0234,287.1442,0.3526,0.3522);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#550022").s().p("ArjA9IAAh5IXHAAIAAB5g");
	this.shape_160.setTransform(1489.6493,280.7077,0.3526,0.3522);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#D5E5FF").s().p("AsWJlQgrAAgggcQgegeAAgqIAAwCQAAgpAegdQAggeArAAIYtAAQAsAAAeAeQAgAdgBApIAAQCQABAqggAeQgeAcgsAAg");
	this.shape_161.setTransform(1490.4075,295.6587,0.3526,0.3522);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D5E5FF").s().p("AwiEuQgsABgfgeQgfgdAAgqIAAmUQAAgoAfgeQAfgdAsgBMAhFAAAQAsABAfAdQAfAdAAApIAAGUQAAAqgfAdQgfAegsgBg");
	this.shape_162.setTransform(1489.764,256.1063,0.3526,0.3522);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#0044AA").s().p("ArZUFQibAAhuhoQhuhoAAiTIAA9DQAAiTBuhoQBthoCcAAIWzAAQCcAABtBoQBuBoAACTIAAdDQAACThuBoQhtBoicAAg");
	this.shape_163.setTransform(1489.764,300.2638,0.3526,0.3522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},191).wait(1));

	// circles
	this.instance_5 = new lib.circles();
	this.instance_5.setTransform(1491.8,436.5,1,1,0,0,0,244.9,233.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#5599FF").s().p("EgPrAlbQnPjFllloQlllojEnSQjLnjABoRQgBoQDLnjQDEnSFlloQFlloHPjFQHfjNIMAAQINAAHfDNQHPDFFlFoQFlFnDEHTQDKHjAAIQQAAIRjKHjQjEHSllFoQllFonPDFQnfDNoNAAQoMAAnfjNg");
	this.shape_164.setTransform(1338.4948,439.4369,0.3527,0.3522,90);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#5599FF").s().p("EgPrAlbQnPjFllloQlllojEnSQjLnjAAoRQAAoQDLnjQDEnSFlloQFlloHPjFQHfjNIMAAQIMAAHgDNQHPDFFlFoQFlFnDEHTQDLHjAAIQQAAIRjLHjQjEHSllFoQllFonPDFQngDNoMAAQoMAAnfjNg");
	this.shape_165.setTransform(1492.5457,579.1775,0.3527,0.3522,90);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#5599FF").s().p("EgPrAlbQnPjEllloQlllpjEnSQjKnjAAoRQAAoQDKnjQDEnSFllpQFlloHPjEQHfjNIMAAQIMAAHgDNQHPDEFlFoQFlFpDEHSQDLHjAAIQQAAIRjLHjQjEHSllFpQllFonPDEQngDNoMAAQoMAAnfjNg");
	this.shape_166.setTransform(1488.2572,293.7611,0.3527,0.3522,90);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#5599FF").s().p("AlkNGQikhFh/h+Qh/h+hFijQhIipAAi5QAAi4BIipQBFijB/h+QB/h+CkhFQCrhIC5AAQC6AACqBIQClBFB+B+QB/B+BGCjQBICpAAC4QAAC5hICpQhGCjh/B+Qh+B+ilBFQiqBIi6AAQi5AAirhIg");
	this.shape_167.setTransform(1645.175,434.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164}]},191).wait(1));

	// Layer_1
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(3.8,0,0,11.3).p("EiUVhICMEorAAAQAIAAAGAGQAGAGAAAIMAAACPdQAAAIgGAGQgGAGgIAAMkorAAAQgIAAgGgGQgGgGAAgIMAAAiPdQAAgIAGgGQAGgGAIAAg");
	this.shape_168.setTransform(951.65,461.05);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#AACCFF").s().p("EiUUBIDQgJgBgGgFQgFgGgBgIMAAAiPdQABgHAFgGQAGgHAJAAMEoqAAAQAIAAAGAHQAGAGgBAHMAAACPdQABAIgGAGQgGAFgIABg");
	this.shape_169.setTransform(951.65,461.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168}]}).to({state:[{t:this.shape_169},{t:this.shape_168}]},191).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(864.8,459.6,1040.1000000000001,923.4999999999999);
// library properties:
lib.properties = {
	id: '89511F7FE6A4BF41ACE5A357FFDDFFFD',
	width: 1903,
	height: 923,
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
an.compositions['89511F7FE6A4BF41ACE5A357FFDDFFFD'] = {
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