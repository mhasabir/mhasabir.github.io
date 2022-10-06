import { Component, OnInit } from '@angular/core';
// import * as simplemaps_usmap from '../../../../../../assets/JS/usmap.js';
// const simplemaps_usmap = require('../../../../../../assets/JS/usmap');
declare var simplemaps_usmap: any;
@Component({
  selector: 'app-list-simple-maps',
  templateUrl: './list-simple-maps.component.html',
  styleUrls: ['./list-simple-maps.component.scss']
})
export class ListSimpleMapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    simplemaps_usmap.hooks.ready = function (){
      // optionally update simplemaps_usmap.mapdata
      simplemaps_usmap.load();
    }
  }

}
