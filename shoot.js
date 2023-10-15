AFRAME.registerComponent("bullets",{
    init:function(){
        this.shootBullets();
    },
    
shootBullets:function(){
    window.addEventListener("keydown",(e)=>{
        if(e.key==="z"){
            var bullet = document.createElement("a-entity");
            bullet.setAttribute("geometry",{
                primitive:"sphere",
                radius:"0.2",
            });
        bullet.setAttribute("position",{
            x:pos.x,
            y:pos.y,
            z:pos.z,
        });
        var camera=document.querySelector("#camera").object3D;
        var direction=new THREE.vector3();
        camera.getWorldDirection(direction);
        bullet.setAttribute("visible",false);
        bullet.addEventListener("collide",this.removeBullet);
        bullet.appendChild("a-scene");
        }

    })
},
removeBullet:function(e){
var scene=document.querySelector("#scene");
var element=e.detail.target.el;
var elementHit=e.detail.body.el;
var paint=document.createElement("a-entity");
var pos=element.getAttribute("position");
var rotate=elementHit.getAttribute("rotation");

paint.setAttribute("position",{
         x:pos.x,
            y:pos.y,
            z:pos.z,
}),
paint.setAttribute("rotation",{
    x:rotate.x,
       y:rotate.y,
       z:rotate.z,
}),
paint.setAttribute("scale",{
    x:2,
       y:2,
       z:2,
})




}

})