export class Ball {
    x: number;
    y: number;
    dy: number;
    gravity: number;
    friction : number;
    radious: number;
    color: string;
    ctx: CanvasRenderingContext2D;
    constructor(x: number, y: number, dy: number, radious: number) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.gravity = 1;
        this.friction = 0.95;
        this.radious = radious;
        this.color = this.getRandomColor();
    }
    draw(ctx: CanvasRenderingContext2D): void {
        console.log('hit Draw');
        
        // this.ctx = ctx;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radious, 0, Math.PI * 2, false);
        // ctx.fillStyle = this.color;
        // ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.lineWidth =10;
        ctx.stroke();
        // console.log(this.y);

    }
    update(height: number): void {
        if (this.y + this.radious >= height - 10) {
            this.dy = -this.dy * this.friction;
        } else {
            this.dy += this.gravity;
            // console.log(this.dy);

        }
        // dy = (this.y + this.radious == height)? -dy : dy;
        console.log(this.y + this.radious);


        this.y += this.dy;
        // debugger;
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
