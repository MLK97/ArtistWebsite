import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicComponent } from './music.component';
import { MusicCardComponent } from './music-card/music-card.component';
import { MaterialModule } from '../material.module';
import { MusicDetailComponent } from './music-detail/music-detail.component';

@NgModule({
  declarations: [MusicComponent, MusicCardComponent, MusicDetailComponent],
  imports: [CommonModule, MaterialModule],
})
export class MusicModule {}
