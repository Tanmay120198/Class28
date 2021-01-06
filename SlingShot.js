class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pntB = pointB;
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA = null;    
    }

    display(){
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.pntB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}