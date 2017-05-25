export class Circle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    radious: number;
    ctx: CanvasRenderingContext2D;
    constructor(x: number, y: number, dx: number, dy: number, radious: number = 40) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radious = radious;
    }
    draw(ctx : CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radious, 0, Math.PI * 2, false);
        this.ctx.strokeStyle = 'purple';
        this.ctx.stroke();
    }
    update(width: number, height: number) {
        this.dx = ((this.x > width - this.radious) || (this.x < 0 + this.radious)) ? -this.dx : this.dx;
        this.dy = ((this.y > height - this.radious) || (this.y < 0 + this.radious)) ? -this.dy : this.dy;
        this.x += this.dx;
        this.y += this.dy;
    }
}
