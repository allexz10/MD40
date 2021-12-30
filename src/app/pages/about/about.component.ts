import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {

  title: string = "angular-intro";

  about = {
    created: "2011-10-05T14:45:00.00Z",
    description: "An awesome page",
    rating: 3.52342423
  }

  showDescription = false;

  public toggleShowDescription(): void {
    this.showDescription = !this.showDescription
  }

}
