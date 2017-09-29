import { Component, Input } from '@angular/core';
import { Description} from "../classes/description";

@Component({
  selector: 'project-description',
  templateUrl: './description.component.html',
  styleUrls: ['../app.component.css']
})
export class DescriptionComponent {

  @Input() description: Description;

}

