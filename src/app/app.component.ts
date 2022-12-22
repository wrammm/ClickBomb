import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  firstClick = false;
  clickThreshold = 30000;
  finished = false;
  code = '3SBAB';

  ngOnInit() {
    const clicksRemaining = localStorage.getItem('clicksRemaining');
    if(clicksRemaining && clicksRemaining !== null) {
      this.clickThreshold = Number(clicksRemaining);
      this.firstClick = true;
      if(this.clickThreshold <= 0) {
        this.finished = true;
      }
    }
  }

  clickedScreen() {
    this.clickThreshold --;
    this.firstClick = true;
    if(this.clickThreshold <= 0) {
      this.finished = true;
    }
    localStorage.setItem('clicksRemaining', this.clickThreshold.toString());
  }

}
