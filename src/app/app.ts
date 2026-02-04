import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YouTubePlayerA1 } from '../youtube-player/youtube-player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, YouTubePlayerA1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}
