import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {
  width: number = window.innerWidth;
  height : number = window.innerHeight;
  x: number;
  @ViewChild('myCanvas') canvasRef: ElementRef;
  context: CanvasRenderingContext2D;
  constructor() { }

  ngOnInit() {
    // let ctx = this.context;
    // // the following is woking
    // let ctx :CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext("2d");
    // ctx.fillRect(100, 100, 100, 100);


    //use draw is better
    this.context = this.canvasRef.nativeElement.getContext("2d");
    this.x = 0;
    this.draw();
  }

  draw() {
    console.log('hit draw');
    requestAnimationFrame(() => {
      this.draw();
      // console.log('here');
    });
    let ctx = this.context;
    // for (this.x = 0; this.x+= 0.1; this.x < window.innerWidth){
    ctx.beginPath();
    ctx.arc(this.x, 50, 4, 0, Math.PI * 2, false);
    // ctx.str
    ctx.strokeStyle = 'pink';
    ctx.stroke();
    // }

    // this.x += 0.1;

    // ctx.fillRect
    // ctx.clearRect(0, 0, 400, 400);
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(0, 0, 50, 60);
  }

}
