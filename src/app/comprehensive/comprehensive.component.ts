import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comprehensive',
  templateUrl: './comprehensive.component.html',
  styleUrls: ['./comprehensive.component.scss']
})
export class ComprehensiveComponent implements OnInit {
  @Input() isSimplify: boolean;
  @Output() lightboxEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeLightBox(imgNo: string, title: string) {
    this.lightboxEmitter.emit({imgNo: imgNo, title: title});
  }
}
