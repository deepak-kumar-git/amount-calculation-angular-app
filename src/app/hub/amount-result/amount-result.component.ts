import { Component, OnChanges, Input } from '@angular/core';
import { InterestAmount } from 'src/app/provider/interestAmount';

@Component({
  selector: 'app-amount-result',
  templateUrl: './amount-result.component.html',
  styleUrls: ['./amount-result.component.scss']
})
export class AmountResultComponent implements OnChanges {
  @Input() interestInfo: any;
  private interestAmount: any;
  constructor(
    private _interestAmount: InterestAmount
  ) { }

  ngOnChanges(changes: { [propName: string]: any }) {
    let self =this;
    self.interestAmount = changes["interestInfo"].currentValue;
    self._interestAmount.getLoanAmount().subscribe((res: any) => {
      const item = res;
      self.interestAmount = item;
    });
  }

}
