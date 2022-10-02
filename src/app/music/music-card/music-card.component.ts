import { Component, OnInit, Input } from '@angular/core';
import { Album } from './musics';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss'],
})
export class MusicCardComponent implements OnInit {
  @Input() music!: Album;
  constructor() {}

  ngOnInit(): void {}
}
