var _as = _as || new _asController();

function _asController() {

<<<<<<< HEAD
        this.sprites = [];

        this.addSprite = function(id, params) {
                this.sprites.push(new _asInstance(id, params));
        }

        this.interval = 100;
        this.intervalID = setInterval(function(){
                for(var i=0; i < _as.sprites.length; i++) {
                        _as.sprites[i].animate();
                }
        }, this.interval);
}

function _asInstance(id, params){
        this.el = document.getElementById(id);

        this.w = params.width;
        this.h = params.height;
        this.cols   = params.cols;
        this.rows   = params.rows;
        this.image  = params.image;
        this.interval   = params.interval || 100;

        this.posX = 0;
        this.posY = 0;

        this.moveLeft = this.cols != 0 ? this.w/this.cols : 0;
        this.moveDown = this.rows != 0 ? this.h/this.rows : 0;

        this.el.style.width=(this.w/this.cols)+"px";
        this.el.style.height=(this.h/this.rows)+"px";
        this.el.style.backgroundImage = "url('"+this.image+"')";
        this.el.style.backgroundRepeat = "no-repeat";
        this.el.style.backgroundPosition = "0% 0%";

        this.animate = function() {
                this.posX = this.posX-this.moveLeft;
                if(this.posX <= -this.w) {
                        this.posX = 0;
                        this.posY = this.posY-this.moveDown;
                        if(this.posY <= -this.h) {
                                this.posY = 0;
                        }

                }
                this.el.style.backgroundPosition = this.posX+"px "+this.posY+"px";
        }
}
=======
	this.sprites = [];

	this.addSprite = function(id, params) {
		this.sprites.push(new _asInstance(id, params));
	}

	this.interval = 100;
	this.intervalID = setInterval(function(){
		for(var i=0; i < _as.sprites.length; i++) {
			_as.sprites[i].animate();
		}
	}, this.interval);
}

function _asInstance(id, params){
	this.el = document.getElementById(id);

	this.w = params.width;
	this.h = params.height;
	this.cols   = params.cols;
	this.rows   = params.rows;
	this.image  = params.image;
	this.interval   = params.interval || 100;

	this.posX = 0;
	this.posY = 0;

	this.moveLeft = this.cols != 0 ? this.w/this.cols : 0;
	this.moveDown = this.rows != 0 ? this.h/this.rows : 0;

	this.el.style.width=(this.w/this.cols)+"px";
	this.el.style.height=(this.h/this.rows)+"px";
	this.el.style.backgroundImage = "url('"+this.image+"')";
	this.el.style.backgroundRepeat = "no-repeat";
	this.el.style.backgroundPosition = "0% 0%";

	this.animate = function() {
		this.posX = this.posX-this.moveLeft;
		if(this.posX <= -this.w) {
			this.posX = 0;
			this.posY = this.posY-this.moveDown;
			if(this.posY <= -this.h) {
				this.posY = 0;
			}

		}
		this.el.style.backgroundPosition = this.posX+"px "+this.posY+"px";
	}
}

>>>>>>> d18d9ef821e887e05ffb352053be9faebac225c5
