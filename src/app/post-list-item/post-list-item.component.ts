import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() blogTitle: string;
  @Input() blogContent: string;
  @Input() blogLoveIts: number;
  @Input() blogCreatedAt: Date;

  constructor() {}

  ngOnInit() {
  }

  onLike() {
    this.blogLoveIts++;
  }

  onDislike() {
    this.blogLoveIts--;
  }

}
