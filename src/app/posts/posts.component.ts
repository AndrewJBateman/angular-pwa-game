import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = [
    {
      title: 'Hello world',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    },
    {
      title: 'Second post',
      details: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];
  constructor() {}
  ngOnInit() {}
}
