import { Component } from '@angular/core';
import { faFilm,faAdjust,faAlignRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'add-to-cart';
  faFilm=faFilm
  faAdjust =faAdjust
  faAlignRight = faAlignRight

  
}
