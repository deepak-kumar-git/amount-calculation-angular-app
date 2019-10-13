import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class InterestAmount {
    private state$ = new BehaviorSubject<any>('initialState');
    constructor(
        private _http: HttpClient
    ) { }

    public interestAmount(amount, months) {
        const url = 'https://ftl-frontend-test.herokuapp.com/interest?amount=' + amount + '&numMonths=' + months;
        return this._http.get(url);
    }
    changeLoanAmount(loanAmount) {
        this.state$.next(loanAmount);
    }

    getLoanAmount() {
        return this.state$.asObservable();
    }
}