import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.loveIts++;
  }

  onDislike() {
    this.loveIts--;
  }
}
