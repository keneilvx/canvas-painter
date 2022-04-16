<template>
  <div class="">
    <div class="canvas">
      <div class="brushes p-2">
        <div class="row justify-content-center">
          <input type="color" v-model="pen_color" id="colorPicker">
        </div>
        <div class="row justify-content-center">
        <div class="rubber mt-1" @click="rubber()">
          <div class="rubber-top">
          </div>
          <div class="rubber-bottom">
          </div>
        </div>
        </div>
        <div class="row justify-content-center">
        <div class="brush-size" :style="'width:' +pen_radius +'px; height:' +pen_radius +'px; background-color:' +pen_color  "></div>
        </div>
        <b-input class="" type="number" v-model="nib_size" style="width: 60px" @change="validSize"></b-input>
        <b-button class="mt-1 clear" @click="clearCanvas">Clear</b-button>
      </div>
      <canvas
        id="canvas"
        @mousedown="BeginPen"
        @mousemove="MovePen"
        @mouseup="StopPen"
        ref="canvas"
      >

      </canvas>
    </div>

  </div>
</template>

<script>
export default {
  name: "Draw.vue",
  data(){
    return{
      x_axis:0,
      y_axis:0,
      drawing: false,
      pen_color: "#000",
      rubber_color: "#000",
      rubber_size: 2,
      nib_size: 1,
      canvas_context: null,

    }


  },
  computed:{
    pen_radius(){
      let circle
      if (this.nib_size >= 6 && this.nib_size <= 25) {
        return circle = this.nib_size
      }else if(this.nib_size < 6){
       return circle = 6
      }else {
        return circle = 25
      }

    }
  },
  mounted(){
    //mounts canvas in the dom and sets a height 620
    this.canvas_context = document.getElementById('canvas').getContext("2d")
    this.canvas_context.canvas.width = window.innerWidth;
    this.canvas_context.canvas.height = 620;
  },
  methods: {
    //creates line base on mouse movement
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas_context;
      ctx.beginPath();
      ctx.strokeStyle = this.pen_color;
      ctx.lineWidth = this.nib_size;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },
    // creates stroke in the DOM
    BeginPen(event) {
      this.x_axis = event.offsetX;
      this.y_axis = event.offsetY;
      this.drawing = true;
    },
    // tracks mouse movement and create lines in the dom
    MovePen(event) {
      console.log(event.offsetX);
      console.log(event.offsetY);
      if (this.drawing === true) {
        this.drawLine(this.x_axis, this.y_axis, event.offsetX, event.offsetY);
        this.x_axis = event.offsetX;
        this.y_axis = event.offsetY;
      }
    },
    // stop pen on mouse movement end
    StopPen(event) {
      if (this.drawing === true) {
        this.drawLine(this.x_axis, this.y_axis, event.offsetX, event.offsetY);
        this.x_axis = 0;
        this.y_axis = 0;
        this.drawing = false;
      }
    },

    rubber(){
      this.pen_color = "#FFF"
    },

    clearCanvas(){

      this.canvas_context.clearRect(0, 0, this.canvas_context.canvas.width, this.canvas_context.canvas.height)
    },

    validSize(){
      if(this.nib_size > 25 ){
        this.nib_size = 25
      }if(this.nib_size < 1){
        this.nib_size = 1
      }
    }
  }
}
</script>

<style scoped>

.canvas {
  margin-top: 20px;
  cursor: crosshair;
  z-index: 2;
}

input[type="color"] {
  -webkit-appearance: none;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
}
.brushes{
  background-color: #ccc;
  border-radius: 5px;
  width: 80px;
  z-index: 999;
  position: absolute;
  margin-left: 10px;
}
.rubber{
  border: 1px solid #000;
  width: 20px;
  height: 20px;

}
.rubber-top{
  background-color: #FFF;
  width: 20px;
  height: 10px;
}
.rubber-bottom{
  width: 20px;

  height: 10px;
  background-color: #1855f8;
}

.brush-size{
  background-color: #000;
  border-radius: 50%;
  height: inherit;
  align-content: center;
  align-items: center;
  margin: 10px;
}

.colors{
  /*color: #fa5531;*/
  /*color: #244aad;*/
  color: #1e3899
}

.clear{
  border: 1px solid red;
  background-color: #CCC;
  color: red;
}
</style>
