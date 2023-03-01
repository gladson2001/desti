import { Component } from '@angular/core';
import { district } from 'src/assets/data';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
  title = district;
}
