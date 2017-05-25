export class Circle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    radious: number;
    color: string;
    ctx: CanvasRenderingContext2D;
    maxRadious: number = 50;
    minRadious : number = 1;
    constructor(x: number, y: number, dx: number, dy: number, radious: number = 40) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radious = radious ? radious : this.minRadious;
        this.color = this.getRandomColor();
    }
    getRandomColor(): string {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    draw(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radious, 0, Math.PI * 2, false);
        // this.ctx.strokeStyle = 'purple';
        // this.ctx.stroke();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
    update(width: number, height: number, mouseX: number, mouseY: number) {
        this.dx = ((this.x > width - this.radious) || (this.x < 0 + this.radious)) ? -this.dx : this.dx;
        this.dy = ((this.y > height - this.radious) || (this.y < 0 + this.radious)) ? -this.dy : this.dy;
        this.x += this.dx;
        this.y += this.dy;
        //interactive
        if (mouseX - this.x < 50 && mouseX - this.x > -50
            && mouseY - this.y < 50 && mouseY - this.y > -50) {
            if (this.radious < this.maxRadious) {
                this.radious += 1;
            }
        } else if (this.radious > this.minRadious) {
            this.radious -= 1;
        }
        // this.ctx.fillStyle = Math.random();
        this.ctx.fill();
    }
}
