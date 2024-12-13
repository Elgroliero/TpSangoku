import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  public currentYear!: number;

  ngOnInit(): void {
    const today = new Date();
    this.currentYear = today.getFullYear();
  }

}
