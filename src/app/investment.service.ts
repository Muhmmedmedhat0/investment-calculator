import { Injectable, signal } from '@angular/core';
import { type InvestmentInput } from '../investment-input.types';
import { type InvestmentResults } from './investment-results/investment-results.types';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resusultsData = signal<InvestmentResults | undefined>(undefined);

  calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }: InvestmentInput) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    console.log(annualData);
    this.resusultsData.set(annualData);
  }
}
