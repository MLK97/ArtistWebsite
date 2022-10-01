import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class LinktreeArtistComponent implements OnInit {
  links = [
    { id: 1, name: 'Follow', link: 'www.google.com' },
    { id: 2, name: 'Spotify', link: 'www.google.com' },
    { id: 3, name: 'Apple Music', link: 'www.google.com' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
