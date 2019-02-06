import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VismaService } from '../services/visma.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private vismaService: VismaService
  ) { }

  ngOnInit() {
  }

  navigate(event, path: string) {
    event.preventDefault(); // prevent submit
    this.router.navigate([path]);
  }


}
