import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinktreeArtistComponent } from './artist/artist.component';

@NgModule({
  declarations: [LinktreeArtistComponent],
  imports: [CommonModule],
  exports: [LinktreeArtistComponent],
})
export class LinktreeModule {}
