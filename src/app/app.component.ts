import { Component, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    @Output() pageChange: EventEmitter <string> = new EventEmitter()
  public constructor(private titleHandler: Title) {
    this.titleHandler.setTitle(environment.appTitle);
    }

    onPageChange(pageUrl: string)
    {
      console.log('onPageChange', pageUrl)
      this.pageChange.emit(pageUrl)
    }
}
