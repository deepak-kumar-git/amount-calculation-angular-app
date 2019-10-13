import { Component, OnChanges, OnInit, AfterViewInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { InterestAmount } from './../../provider/interestAmount';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  @Input() public loanAmountInfo: any;
  public loanAmount: any;
  constructor(
    private _interestAmount: InterestAmount
  ) {
  }
  private getHistory(history) {
    this._interestAmount.changeLoanAmount(history);
  }
}
