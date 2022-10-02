import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicCardComponent } from './music-card/music-card.component';
import { Album } from './music-card/musics';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  musics: Album[] = [
    {
      id: 'III.',
      route: '3',
      name: 'Black Skies and Shimmering Vibrations',
      instruments: 'Synth',
      year: 2022,
      artwork: '../../assets/img/artwork-bssv.jpg',
    },
    {
      id: 'II.',
      route: '2',
      name: 'The Challenge of Solitude',
      instruments: 'Piano',
      year: 2021,
      artwork: '../../assets/img/artwork-cos.jpg',
    },
    {
      id: 'I.',
      route: '1',
      name: 'Loft',
      instruments: 'Synth/Strings/Piano',
      year: 2019,
      artwork: '',
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  @ViewChild(MusicCardComponent) musicCard!: MusicCardComponent;
  ngOnInit(): void {}

  public onCardClick(evt: MouseEvent) {
    this.router.navigate(['1'], { relativeTo: this.route });
    console.log(evt);
  }
}
