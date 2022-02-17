//For Draggable
Draggable.create(".mobile_listwrapper", {
		bounds:".mobile_listcontainer",
		type:"x",
    zIndex: "4",
   	inertia: true,
    zIndexBoost:false,
    dragClickables: true,
		onDrag: makeEmMove,
  	onThrowUpdate: makeEmMove
});

function makeEmMove() {
  TweenMax.set(".mobile_imglist", { x: -(this.x) });
}
