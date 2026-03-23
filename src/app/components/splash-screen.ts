import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { animate, stagger } from 'motion';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  template: `
    <div class="fixed inset-0 z-[100] bg-dark-bg flex flex-col items-center justify-center overflow-hidden">
      <!-- Monogram -->
      <div class="relative mb-8">
        <div class="text-8xl font-display font-extrabold text-white opacity-0 monogram-char">N</div>
        <div class="absolute top-0 left-0 text-8xl font-display font-extrabold text-primary opacity-0 monogram-char mix-blend-overlay">K</div>
      </div>
      
      <!-- Progress Bar -->
      <div class="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
        <div class="absolute inset-0 bg-primary origin-left scale-x-0 progress-bar"></div>
      </div>
      
      <!-- Text -->
      <div class="mt-4 text-xs font-mono text-white/40 tracking-[0.2em] uppercase opacity-0 loading-text">
        Initializing Portfolio v2.0
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashScreen implements OnInit {
  @Output() finished = new EventEmitter<void>();

  ngOnInit() {
    this.startAnimation();
  }

  private async startAnimation() {
    // Monogram animation
    animate('.monogram-char', { opacity: [0, 1], y: [20, 0], scale: [0.8, 1] }, { 
      delay: stagger(0.2), 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    });

    // Progress bar
    const progress = animate('.progress-bar', { scaleX: [0, 1] }, { 
      duration: 1.5, 
      ease: 'easeInOut' 
    });

    // Loading text
    animate('.loading-text', { opacity: [0, 1] }, { 
      delay: 0.5, 
      duration: 0.5 
    });

    await progress.finished;

    // Exit animation
    animate('.monogram-char', { opacity: 0, scale: 1.2, filter: 'blur(10px)' }, { duration: 0.5 });
    animate('.loading-text', { opacity: 0 }, { duration: 0.3 });
    
    const exit = animate('div', { opacity: 0 }, { duration: 0.8, ease: 'easeIn' });
    await exit.finished;
    
    this.finished.emit();
  }
}
