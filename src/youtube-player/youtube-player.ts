import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';


@Component({
  selector: 'youtube-player-a1',
  standalone: true,
  imports: [YouTubePlayer],
  template: `
    <youtube-player
      [videoId]="'dQw4w9WgXcQ'"
      [height]="270"
      [width]="480"
      placeholderImageQuality="high"
      class=""
    />
  `,
})

export class YouTubePlayerA1 {}
