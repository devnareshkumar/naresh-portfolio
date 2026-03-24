import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SplashScreen} from './components/splash-screen';
import {AnimatedBackground} from './components/animated-background';
import {CommonModule} from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, SplashScreen, AnimatedBackground, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  showSplash = signal(isPlatformBrowser(this.platformId));

  onSplashFinished() {
    this.showSplash.set(false);
  }
}
