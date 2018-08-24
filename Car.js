function Car() {
    this.pos;
    this.acc = 0;
    this.accV ;
    this.vel = 0;
    this.maxVel;
    this.dimensions2D = [200, 120];
    this.c;
    this.direction;

    this.update = function(){
        this.move();
        this.show();
    }

    this.move = function(){
        if(this.vel < 0){
            this.acc = 0;
            this.vel = 0;
        }
        if(this.vel + this.acc < this.maxVel ) this.vel += this.acc;
        switch(this.direction){
            case 0:
                this.pos.y -= this.vel;
                break;
            case 1:
                this.pos.x += this.vel;
                break;
            case 2:
                this.pos.y += this.vel;
                break;
            case 3:
                this.pos.x -= this.vel;
                break;
        }
        if(this.pos.x > width){
            this.pos.x = 0;
        }
        else if(this.pos.x < 0){
            this.pos.x = width;
        }
        if(this.pos.y > height){
            this.pos.y = 0;
        }
        else if (this.pos.y < 0) {
            this.pos.y = height;
        }
    }

    this.createRandom = function(){
        this.pos = createVector(random(width - 200),random(height - 120));
        this.accV = random(1, 3);
        this.maxVel = random(10, 30) * scaling;
        //this.dimensions2D = [random(200,300), random(150, 200)];
        this.dimensions2D = [200, 120];
        this.c = [random(0,255), random(0,255), random(0,255)]
        this.direction = int(random(0, 4));
    }

    this.applyForce = function(acc){
        this.acc = acc;
    }

    this.break = function(){
        this.applyForce(-this.accV)
    }

    this.accel = function(){
        this.applyForce(this.accV);
    }

    this.show = function(){
        if(this.direction == 1 || this.direction == 3){
            rect(this.pos.x, this.pos.y, this.dimensions2D[0] * scaling, this.dimensions2D[1] * scaling);
        }
        else{
            rect(this.pos.x, this.pos.y, this.dimensions2D[1] * scaling, this.dimensions2D[0] * scaling);
        }
        fill(this.c[0], this.c[1], this.c[2]);
    }
}
