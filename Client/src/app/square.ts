export class Square {
    private color = 'black';
    private x = 27;
    private y = 115;
    private z = 6;
  
    constructor(private ctx: CanvasRenderingContext2D) {}
  
    moveRight() {
      this.x++;
      this.draw();
    }
  
    private draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.z * this.x, this.z * this.y, this.z, this.z);
    }
  }
  