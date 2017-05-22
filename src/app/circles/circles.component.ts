import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  x: number;
  y: number;
  dx: number;
  dy : number;
  radious: number;
  @ViewChild('myCanvas') canvasRef: ElementRef;
  // context: CanvasRenderingContext2D;
  ctx: CanvasRenderingContext2D;
  constructor() { }

  ngOnInit() {
    // let ctx = this.context;
    // // the following is woking
    // let ctx :CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext("2d");
    // ctx.fillRect(100, 100, 100, 100);


    //use draw is better
    // this.context = this.canvasRef.nativeElement.getContext("2d");
    this.ctx = this.canvasRef.nativeElement.getContext("2d");
    this.dx = 10;
    this.dy = 20;
    this.radious = 40;
    this.x = 0 + this.radious;
    this.y = 0 + this.radious;
    this.draw();
  }

  draw() {
    console.log('hit draw');
    requestAnimationFrame(() => {
      this.draw();
      // console.log('here');
    });
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radious, 0, Math.PI * 2, false);
    this.ctx.strokeStyle = 'purple';
    this.ctx.stroke();
    this.dx = ((this.x > this.width - this.radious) || (this.x < 0 + this.radious)) ? -this.dx : this.dx;
    this.dy = ((this.y > this.height - this.radious) || (this.y < 0 + this.radious)) ? -this.dy : this.dy;
    this.x += this.dx;
    this.y +=this.dy;
  }

}
