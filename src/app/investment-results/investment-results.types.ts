interface InvestmentResult {
  year: number;
  valueEndOfYear: number;
  interest: number;
  totalInterest: number;
  totalAmountInvested: number;
}
export type InvestmentResults = InvestmentResult[];
