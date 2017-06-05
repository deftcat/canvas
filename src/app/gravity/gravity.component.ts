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
  ball: Ball[] = [];
  constructor() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.radious = 50;
  }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext("2d");
    for (let i = 0; i < 10; i++) {
      this.ball.push(new Ball(Math.random() * (this.width - this.radious * 2) + this.radious, this.height / 2 * Math.random(), 1, this.radious));
    }
    this.animation();
  }
  animation() {
    console.log('begin draw');
    this.ctx.clearRect(0, 0, this.width, this.height);
    requestAnimationFrame(() => { //remember add it!!!!!!
      this.animation();
    });
    // this.ball.forEach(function(ball, i){
    //   console.log(typeof(ball));
    //   ball[i].draw(ctx);

    // });
    for (let index = 0; index < this.ball.length; index++) {
      this.ball[index].draw(this.ctx);
      this.ball[index].update(this.height);
    }
  }
  resize() {

  }

}
