import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  tools: { id: string; name: string; year: number }[] = [
    { id: 'I.', name: 'The Linktree', year: 2022 },
    { id: 'II.', name: 'The Scraper', year: 2020 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
