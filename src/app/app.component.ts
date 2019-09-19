import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  blogs = [
    {
      title: 'My first post',
      content: 'strLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'My second post',
      content: 'strLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'My last post',
      content: 'strLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
      loveIts: 0,
      createdAt: new Date()
    }
  ];
}
