import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent {
  @Input() public currency: string ; 
  @Input() public timeOfTransaction: Date ;
  @Input() public amount: number ;
  @Input() public fee: number ;

  constructor() {
    this.timeOfTransaction = new Date(); 
    this.currency = "";
    this.amount = 0;
    this.fee = 0;
     // Or initialize it based on your requirements
  }



  formatPercentage(value: number): string {
    const formatted = (value * 100).toFixed(3);
    const [integerPart, decimalPart] = formatted.split('.');
    return `${integerPart.padStart(2, '0')}.${decimalPart.padEnd(3, '0')}%`;
  }

  formatAmount(amount: number, currency: string): string {
    const formattedAmount = amount.toFixed(2);
    const [integerPart, decimalPart] = formattedAmount.split('.');
    const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    debugger
    return `${getCurrencySymbol(currency)}${integerWithCommas}.${decimalPart}`;
  }

  formatTime(date: Date): string {
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${dayOfWeek}: ${year} ${month} ${day} ${hours}-${minutes}-${seconds}`;
  }
}

function getCurrencySymbol(currency: string): string {
  // This is a simplified example, you may need to implement a more comprehensive solution
  // based on your application's requirements.
  switch (currency) {
    case 'EUR':
      return '€';
    // Add more cases for other currencies as needed
    default:
      return currency;
  }

}
