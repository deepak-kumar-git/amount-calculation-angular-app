import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InterestAmount } from './../../provider/interestAmount';

@Component({
  selector: 'app-amount-calculator',
  templateUrl: './amount-calculator.component.html',
  styleUrls: ['./amount-calculator.component.scss']
})
export class AmountCalculatorComponent implements OnInit {
  @Output() interestRate = new EventEmitter<any>();;
  public amount: number = 500;
  public month: number;
  public loanAmount: Array<any> = [];
  constructor(
    private _interestAmount: InterestAmount,
    private _toaster : ToastrService
  ) { }

  ngOnInit() {
  }

  public calculateAmount() {
    if (this.validate()) {
      this._interestAmount.interestAmount(this.amount, this.month)
        .subscribe((res: any) => {
          this._interestAmount.changeLoanAmount(res);
          this.interestRate.emit(res);
          this.loanAmount.push(res);
          localStorage.setItem('loanAmount', JSON.stringify(this.loanAmount));
        });
    }
  }

  private validate() {
    if (this.month === null || this.month === undefined || this.month > 24 || this.month < 6) {
      setTimeout(()=>{
        this._toaster.error('Duration should be between 6 to 24 months .')
      },300)
      return false;
    } else if (this.amount === null) {
      return false;
    } else {
      return true;
    }
  };
}
