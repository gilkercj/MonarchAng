import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  pic: string;
}

@Component({
  selector: 'port-grid',
  templateUrl: './port-grid.component.html',
  styleUrls: ['./port-grid.component.css']
})

export class PortGridComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

    tiles: Tile[] = [
      {text: 'One', cols: 1, rows: 1, pic: 'https://picsum.photos/id/237/300/400'},
      {text: 'Two', cols: 1, rows: 2, pic: 'https://picsum.photos/300/400?grayscale'},
      {text: 'Three', cols: 1, rows: 1, pic: 'https://picsum.photos/300/400'},
      {text: 'Four', cols: 1, rows: 1, pic: 'https://picsum.photos/id/10/300/400'},
    ];
}
