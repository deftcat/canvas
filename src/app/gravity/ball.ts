export class Ball {
    x: number;
    y: number;
    dy: number;
    dx:number;
    gravity: number;
    friction: number;
    radious: number;
    color: string;
    strokeWidth: number;
    ctx: CanvasRenderingContext2D;
    constructor(x: number, y: number,dx:number, dy: number, radious: number) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.gravity = 1;
        this.friction = 0.90;
        this.radious = radious;
        this.color = this.getRandomColor();
        this.strokeWidth = 10;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radious, 0, Math.PI * 2, false);
        // ctx.fillStyle = this.color;
        // ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.strokeWidth;
        ctx.stroke();
    }
    update(height: number, width:number): void {
        if (this.y + this.radious + this.strokeWidth / 2 + this.dy >= height) {
            this.dy = -this.dy * this.friction;
        } else {
            this.dy += this.gravity;
        }
        if(this.x + this.dx + this.radious + this.strokeWidth >= width || this.x + this.dx - this.radious - this.strokeWidth/2<=0)this.dx =-this.dx;
        this.y += this.dy;
        this.x += this.dx;
    }
    getRandomColor(): string {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
