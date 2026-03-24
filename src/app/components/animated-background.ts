import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-background',
  standalone: true,
  template: `<canvas #bgCanvas class="fixed inset-0 -z-10 pointer-events-none"></canvas>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimatedBackground implements OnInit, OnDestroy {
  @ViewChild('bgCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId?: number;
  private particleCount = 60;

  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }

    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.resize();
    this.initParticles();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationId !== undefined) {
      cancelAnimationFrame(this.animationId);
    }
  }

  @HostListener('window:resize')
  resize() {
    if (!this.isBrowser) {
      return;
    }

    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Cap particles on mobile
    this.particleCount = window.innerWidth < 768 ? 30 : 80;
    this.initParticles();
  }

  private initParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height));
    }
  }

  private animate() {
    if (!this.isBrowser) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.drawStaticGradient();
      return;
    }

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawMeshGradient();
    
    this.particles.forEach((p, i) => {
      p.update();
      p.draw(this.ctx);
      
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = p.x - this.particles[j].x;
        const dy = p.y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - dist / 150)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private drawMeshGradient() {
    const time = Date.now() * 0.0005;
    const canvas = this.canvasRef.nativeElement;
    
    const g = this.ctx.createRadialGradient(
      canvas.width * (0.5 + Math.sin(time) * 0.2),
      canvas.height * (0.5 + Math.cos(time * 0.7) * 0.2),
      0,
      canvas.width * 0.5,
      canvas.height * 0.5,
      canvas.width * 0.8
    );
    
    g.addColorStop(0, 'rgba(16, 185, 129, 0.03)');
    g.addColorStop(1, 'rgba(5, 5, 5, 0)');
    
    this.ctx.fillStyle = g;
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  private drawStaticGradient() {
    const canvas = this.canvasRef.nativeElement;
    const g = this.ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    g.addColorStop(0, '#050505');
    g.addColorStop(1, '#0a0a0a');
    this.ctx.fillStyle = g;
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(w: number, h: number) {
    this.canvasWidth = w;
    this.canvasHeight = h;
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.size = Math.random() * 2 + 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
    ctx.fill();
  }
}
