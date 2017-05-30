import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Circle } from './circle';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {
  title: string = 'defaule';
  width: number; //= window.innerWidth - 10;
  height: number;// = window.innerHeight;
  x: number;
  y: number;
  dx: number;
  dy: number;
  radious: number;
  // circle: Circle;
  circles: Circle[] = [];
  mouse: object = { x: undefined, y: undefined };
  @ViewChild('myCanvas') canvasRef: ElementRef;
  // context: CanvasRenderingContext2D;
  ctx: CanvasRenderingContext2D;
  constructor() {
    //defualt value setting
    this.title = 'Jumping Circle';
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  ngOnInit() {
    // let ctx = this.context;
    // // the following is woking
    // let ctx :CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext("2d");
    // ctx.fillRect(100, 100, 100, 100);

    //use draw is better
    // this.context = this.canvasRef.nativeElement.getContext("2d");
    this.ctx = this.canvasRef.nativeElement.getContext("2d");
    for (let index: number = 0; index < 500; index++) {
      this.dx = (Math.random() - 0.5) * 10;
      this.dy = (Math.random() - 0.5) * 10;
      this.radious = 4;
      this.x = Math.random() * (this.width - this.radious * 2) + this.radious;//0 + this.radious;
      this.y = Math.random() * (this.height - this.radious * 2) + this.radious;//0 + this.radious;
      this.circles.push(new Circle(this.x, this.y, this.dx, this.dy, this.radious));
    }
    // this.circle = new Circle(this.x, this.y, this.dx, this.dy, this.radious);
    this.animate();

  }

  animate() {
    console.log('hit draw');
    this.ctx.clearRect(0, 0, this.width, this.height);
    requestAnimationFrame(() => {
      this.animate();
    });
    for (let index = 0; index < this.circles.length; index++) {
      this.circles[index].draw(this.ctx);
      this.circles[index].update(this.width, this.height, this.mouse[this.x], this.mouse[this.y]);

    }
  }
  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.mouse[this.x] = event.x;
    this.mouse[this.y] = event.y;
    // console.log(this.mouse[this.x]);

  }
  // popUp(event){
  // add (mousemove)='popUp($event)' in dom, remember $ sign
  //   console.log(event.x);
  //   console.log(event.y);
  // }
  //* capture the window:resize event and reset the canvas size
  resize(event) {
    this.width = window.innerWidth;
  }
}
