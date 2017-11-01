import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  public time = 3;

  public knopkaState = 'GAME OVER!';

  @Output() clicked = new EventEmitter();

  ngOnInit() {

    // this.time -= 1;

    // console.log(this.time + 's');




    var refreshId = setInterval( () => {

      // console.log(e.time + 's');

      if (this.time >= 1) {
        this.time -= 1;
        // console.log('yes');
      }
      else {
        clearInterval(refreshId);
        // console.log('no');
        this.clicked.emit(this.knopkaState);

      }


      // console.log(this.time + 's');

    }, 1000);
  }

}
