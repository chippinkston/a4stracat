import { Component, Input, OnInit } from '@angular/core';
import { Description} from "../classes/description";
import {StracatService} from "../stracat.service";


@Component({
  selector: 'project-description',
  templateUrl: './description.component.html',
  styleUrls: ['../app.component.css']
})
export class DescriptionComponent implements OnInit{

  constructor(
    private strcatService: StracatService
  ) {}

  ngOnInit(): void {
    this.getDescription();
  }
  getDescription(): void {
    this.description = new Description;
  }
  @Input() description: Description;

}

