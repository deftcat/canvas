export class Ball {
    x: number;
    y: number;
    dy:number;
    radious: number;
    color: string;
    ctx: CanvasRenderingContext2D;
    constructor(x: number, y: number,dy:number, radious: number, color: string) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.radious = radious;
        this.color = color;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        // this.ctx = ctx;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radious, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        // console.log(this.y);

    }
    update(height: number): void {
        if (this.y + this.radious >= height){
            this.dy = -this.dy;
        }
        // dy = (this.y + this.radious == height)? -dy : dy;
        console.log(this.y + this.radious);
        
        
        this.y += this.dy;
        // debugger;
    }
}
