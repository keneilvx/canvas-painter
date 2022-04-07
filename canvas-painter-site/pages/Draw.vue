<template>
  <div class="">
    <div class="canvas">
      <div class="brushes">
        <input type="color" v-model="pen_color" id="colorPicker">
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
      nib_size: 1,
      canvas_context: null
    }


  },
  mounted(){
    this.canvas_context = document.getElementById('canvas').getContext("2d")
    this.canvas_context.canvas.width = window.innerWidth;
    this.canvas_context.canvas.height = 620;
  },
  methods: {
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
    BeginPen(event) {
      this.x_axis = event.offsetX;
      this.y_axis = event.offsetY;
      this.drawing = true;
    },

    MovePen(event) {
      console.log(event.offsetX);
      console.log(event.offsetY);
      if (this.drawing === true) {
        this.drawLine(this.x_axis, this.y_axis, event.offsetX, event.offsetY);
        this.x_axis = event.offsetX;
        this.y_axis = event.offsetY;
      }
    },

    StopPen(event) {
      if (this.drawing === true) {
        this.drawLine(this.x_axis, this.y_axis, event.offsetX, event.offsetY);
        this.x_axis = 0;
        this.y_axis = 0;
        this.drawing = false;
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

</style>
