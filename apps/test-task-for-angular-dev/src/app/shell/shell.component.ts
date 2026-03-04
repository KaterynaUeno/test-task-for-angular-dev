import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  standalone: true,
  imports: [HeaderComponent, CommonModule, TranslateModule, RouterModule],
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
