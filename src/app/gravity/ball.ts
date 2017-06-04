export class Ball {
    x: number;
    y: number;
    radious: number;
    color: string;
    ctx: CanvasRenderingContext2D;
    constructor(x: number, y: number, radious: number, color: string) {
        this.x = x;
        this.y = y;
        this.radious = radious;
        this.color = color;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        // this.ctx = ctx;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radious, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        console.log(this.y);
        
    }
    update(dy: number=1): void {
        this.y += dy;
        // debugger;
    }
}
