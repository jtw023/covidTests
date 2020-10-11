import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  input = '';
  search = document.querySelector('input');

  constructor() {}

  ngOnInit(): void {}

  onSubmit(e: any): void {
    e.preventDefault();
    this.submitted.emit(this.input);
  }
}
