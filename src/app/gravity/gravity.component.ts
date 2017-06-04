import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ball } from './ball';

@Component({
  selector: 'app-gravity',
  templateUrl: './gravity.component.html',
  styleUrls: ['./gravity.component.css']
})
export class GravityComponent implements OnInit {
  width: number;
  height: number;
  radious: number;
  @ViewChild('gravity') canvasRef: ElementRef;
  // ctx:Canvas2DContextAttributes;
  ctx: CanvasRenderingContext2D;
  ball: Ball;
  constructor() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.radious = 50;
  }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext("2d");
    this.ball = new Ball(this.width / 2, this.height / 2,1, this.radious, 'red');
    this.animation();
  }
  animation() {
    console.log('begin draw');
    this.ctx.clearRect(0, 0, this.width, this.height);
    requestAnimationFrame(() => { //remember add it!!!!!!
      this.animation();
    });

    this.ball.draw(this.ctx);
    this.ball.update(this.height);
}
  resize() {

  }

}
