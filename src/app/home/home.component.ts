import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  scroll: any;

  @ViewChild('scrollContent') scrollContent!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
      smartphone: {
        smooth: true,
      },
    });
  }

  ngAfterViewInit() {
    const ro = new ResizeObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        const { inlineSize: width, blockSize: height } =
          entry.contentBoxSize[0];
        if (this.scroll) {
          this.scroll.update();
        }
      });
    });

    ro.observe(this.scrollContent.nativeElement);
  }
}
