import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
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
  showSplash = signal(true);

  onSplashFinished() {
    this.showSplash.set(false);
  }
}
