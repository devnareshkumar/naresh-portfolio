import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RESUME_DATA } from '../data/resume';
import { animate, stagger, scroll } from 'motion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-screen">
      <!-- Navbar -->
      <nav class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div class="text-xl font-display font-bold tracking-tighter">
          <span class="text-primary">N</span>K
        </div>
        <div class="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-white/60">
          <a href="#hero" class="hover:text-primary transition-colors">Home</a>
          <a href="#experience" class="hover:text-primary transition-colors">Experience</a>
          <a href="#achievements" class="hover:text-primary transition-colors">Impact</a>
          <a href="#projects" class="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" class="hover:text-primary transition-colors">Skills</a>
        </div>
        <button (click)="downloadResume()" class="cursor-pointer text-xs font-mono uppercase tracking-widest px-4 py-2 border border-primary/30 rounded-full hover:bg-primary/10 transition-colors">
          Resume
        </button>
      </nav>

      <!-- Hero Section -->
      <section id="hero" class="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20">
        <div class="max-w-4xl">
          <div class="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-[0.2em] font-mono mb-6 hero-reveal">
            {{ data.basics.label }}
          </div>
          <h1 class="text-6xl md:text-8xl font-display font-extrabold tracking-tight mb-6 hero-reveal">
            {{ data.basics.name }}
          </h1>
          <p class="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed hero-reveal">
            {{ data.basics.summary }}
          </p>
          <div class="flex flex-wrap gap-4 hero-reveal">
            <a href="#experience" class="px-8 py-4 bg-primary text-dark-bg font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
              View Experience <mat-icon class="scale-75">arrow_downward</mat-icon>
            </a>
            <button (click)="downloadResume()" class="group cursor-pointer px-8 py-4 glass text-white font-bold rounded-xl border border-white/15 hover:border-primary/45 hover:bg-primary/10 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 flex items-center gap-2">
              <span>Download CV</span>
              <mat-icon class="scale-75 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-90">download</mat-icon>
            </button>
          </div>
        </div>
      </section>

      <!-- Impact Strip -->
      <div class="py-12 glass border-y border-white/5 overflow-hidden">
        <div class="flex gap-24 items-center justify-center whitespace-nowrap animate-marquee">
          @for (item of impactItems; track $index) {
            <div class="flex items-center gap-4">
              <span class="text-4xl font-display font-bold text-primary">{{ item.value }}</span>
              <span class="text-xs font-mono uppercase tracking-widest text-white/40">{{ item.label }}</span>
            </div>
          }
        </div>
      </div>

      <!-- Experience Section -->
      <section id="experience" class="py-32 px-6 md:px-24">
        <div class="flex flex-col md:flex-row gap-12 mb-16">
          <div class="md:w-1/3">
            <h2 class="text-4xl font-display font-bold mb-4">Professional Story</h2>
            <p class="text-white/40 font-mono text-sm leading-relaxed">
              10+ years of architecting scalable enterprise solutions and leading high-performance teams.
            </p>
          </div>
          <div class="md:w-2/3 space-y-8">
            @for (job of data.experience; track $index) {
              <div class="glass p-8 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <mat-icon class="text-8xl scale-[4]">work</mat-icon>
                </div>
                <div class="flex flex-col md:flex-row justify-between mb-6">
                  <div>
                    <h3 class="text-2xl font-bold mb-1">{{ job.role }}</h3>
                    <p class="text-primary font-mono text-sm uppercase tracking-widest">{{ job.company }}</p>
                  </div>
                  <div class="text-right mt-4 md:mt-0">
                    <p class="text-sm font-mono text-white/40">{{ job.dates }}</p>
                    <p class="text-xs text-white/20">{{ job.location }}</p>
                  </div>
                </div>
                <ul class="space-y-4 mb-8">
                  @for (bullet of job.bullets; track $index) {
                    <li class="flex gap-4 text-white/60 text-sm leading-relaxed">
                      <span class="text-primary mt-1 shrink-0"><mat-icon class="scale-50">circle</mat-icon></span>
                      {{ bullet }}
                    </li>
                  }
                </ul>
                <div class="flex flex-wrap gap-2">
                  @for (metric of job.metrics; track $index) {
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/40">
                      {{ metric }}
                    </span>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Achievements Section -->
      <section id="achievements" class="py-32 px-6 md:px-24 bg-white/[0.02]">
        <h2 class="text-4xl font-display font-bold mb-16 text-center">Impact & Recognition</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (award of data.achievements; track $index) {
            <div class="glass p-8 rounded-3xl text-center group hover:scale-[1.02] transition-all">
              <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <mat-icon class="text-primary">emoji_events</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-2">{{ award }}</h3>
              <div class="h-1 w-12 bg-primary/30 mx-auto rounded-full"></div>
            </div>
          }
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-32 px-6 md:px-24">
        <h2 class="text-4xl font-display font-bold mb-16">Key Architectural Contributions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (project of data.projects; track $index) {
            <div class="glass p-8 rounded-3xl border-l-4 border-l-primary/30">
              <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-primary font-mono text-xs uppercase tracking-widest mb-6">{{ project.role }}</p>
              <p class="text-white/60 text-sm mb-6 leading-relaxed">{{ project.description }}</p>
              <ul class="space-y-2">
                @for (bullet of project.bullets; track $index) {
                  <li class="flex gap-3 text-white/40 text-xs">
                    <span class="text-primary/40 mt-1 shrink-0"><mat-icon class="scale-50">check</mat-icon></span>
                    {{ bullet }}
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-32 px-6 md:px-24 bg-white/[0.02]">
        <h2 class="text-4xl font-display font-bold mb-16 text-center">Technical Arsenal</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (skillGroup of data.skills; track $index) {
            <div class="space-y-6">
              <h3 class="text-xs font-mono uppercase tracking-[0.3em] text-primary/60 border-b border-primary/20 pb-2">
                {{ skillGroup.category }}
              </h3>
              <div class="flex flex-wrap gap-2">
                @for (skill of skillGroup.items; track $index) {
                  <span class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60 hover:text-primary hover:border-primary/30 transition-colors">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Education & Footer -->
      <footer class="py-32 px-6 md:px-24 border-t border-white/5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 class="text-2xl font-display font-bold mb-8">Education</h2>
            <div class="space-y-8">
              @for (edu of data.education; track $index) {
                <div>
                  <h3 class="text-lg font-bold mb-1">{{ edu.degree }}</h3>
                  <p class="text-white/40 text-sm">{{ edu.school }}</p>
                  <p class="text-primary font-mono text-[10px] uppercase tracking-widest mt-2">{{ edu.dates }}</p>
                </div>
              }
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <h2 class="text-2xl font-display font-bold mb-8">Connect</h2>
              <div class="space-y-4">
                <a [href]="'mailto:' + data.basics.email" class="flex items-center gap-4 text-white/60 hover:text-primary transition-colors">
                  <mat-icon>email</mat-icon> {{ data.basics.email }}
                </a>
                <a [href]="'tel:' + data.basics.phone" class="flex items-center gap-4 text-white/60 hover:text-primary transition-colors">
                  <mat-icon>phone</mat-icon> {{ data.basics.phone }}
                </a>
                <div class="flex gap-6 mt-8">
                  <a [href]="data.basics.github" target="_blank" class="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <mat-icon>code</mat-icon>
                  </a>
                  <a [href]="data.basics.linkedin" target="_blank" class="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <mat-icon>link</mat-icon>
                  </a>
                </div>
              </div>
            </div>
            <p class="text-white/20 text-[10px] font-mono uppercase tracking-[0.5em] mt-24">
              © 2026 Naresh Kumar Katta. Built with Angular 21.
            </p>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: fit-content;
      animation: marquee 40s linear infinite;
    }
    :host {
      display: block;
      scroll-behavior: smooth;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly resumeUrl = 'https://raw.githubusercontent.com/devnareshkumar/devnareshkumar/main/Naresh-Kumar-Katta-Resume.pdf';
  data = RESUME_DATA;
  impactItems = [
    { label: 'Experience', value: '10.8y' },
    { label: 'Features Built', value: '15+' },
    { label: 'Global Users', value: '100k+' },
    { label: 'Code Coverage', value: '85%+' },
    { label: 'Bugs Resolved', value: '150+' },
    { label: 'Experience', value: '10.8y' },
    { label: 'Features Built', value: '15+' },
    { label: 'Global Users', value: '100k+' },
    { label: 'Code Coverage', value: '85%+' },
    { label: 'Bugs Resolved', value: '150+' },
  ];

  ngOnInit() {
    if (this.isBrowser) {
      this.initAnimations();
    }
  }

  private initAnimations() {
    // Hero reveal
    animate('.hero-reveal', { opacity: [0, 1], y: [30, 0] }, { 
      delay: stagger(0.1), 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1] 
    });

    // Scroll reveal for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      scroll(
        animate(section, { opacity: [0, 1], y: [50, 0] }, { duration: 0.8 }),
        { target: section, offset: ["start end", "end end"] }
      );
    });
  }

  async downloadResume() {
    if (!this.isBrowser) {
      return;
    }

    try {
      const response = await fetch(this.resumeUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch resume: ${response.status}`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = 'Naresh-Kumar-Katta-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(this.resumeUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
