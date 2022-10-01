import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  musics: {
    id: string;
    name: string;
    instruments: string;
    year: number;
    artwork: string;
  }[] = [
    {
      id: 'III.',
      name: 'Black Skies and Shimmering Vibrations',
      instruments: 'Synth',
      year: 2022,
      artwork: '../../assets/img/artwork-bssv.jpg',
    },
    {
      id: 'II.',
      name: 'The Challenge of Solitude',
      instruments: 'Piano',
      year: 2021,
      artwork: '../../assets/img/artwork-cos.jpg',
    },
    {
      id: 'I.',
      name: 'Loft',
      instruments: 'Synth/Strings/Piano',
      year: 2019,
      artwork: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
