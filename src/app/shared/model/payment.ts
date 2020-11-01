export interface Payment {
  id: Number;
  cardholderName: String;
  cardNumber: String;
  expirationDate: Date;
  securityCode?: String;
  amount: Number;
}
