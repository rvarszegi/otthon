import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  private currentLink = '/';
  // tslint:disable-next-line:no-output-rename
  @Output('change') pageChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onMenuClick($event: Event) {
    $event.preventDefault();
    const element = $event.target as HTMLLinkElement;
    this.currentLink = element.href.replace(location.origin, '');

    this.pageChange.emit(this.currentLink);
    console.log(this.currentLink);
  }

}
