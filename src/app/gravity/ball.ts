export class Ball {
    x: number;
    y: number;
    dy: number;
    gravity: number;
    friction: number;
    radious: number;
    color: string;
    strokeWidth: number;
    ctx: CanvasRenderingContext2D;
    constructor(x: number, y: number, dy: number, radious: number) {
        this.x = x;
        this.y = y;
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
    update(height: number): void {
        if (this.y + this.radious + this.strokeWidth / 2 + this.dy >= height) {
            this.dy = -this.dy * this.friction;
        } else {
            this.dy += this.gravity;
        }
        this.y += this.dy;
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
