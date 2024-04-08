import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simplify',
  templateUrl: './simplify.component.html',
  styleUrls: ['./simplify.component.scss']
})
export class SimplifyComponent implements OnInit {
  @Input
  ({ required: true }) isSimplify: boolean = false;

  @Output() lightboxEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeLightBox(imgNo: string, title: string) {
    this.lightboxEmitter.emit({imgNo: imgNo, title: title});
  }

}
