
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
  //when shadowDOM is used for a component that component creates it own DOM, with this we achieve true encapsulation with shadowDOM.
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
