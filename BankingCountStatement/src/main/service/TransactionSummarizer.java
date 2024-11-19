package service;

import transaction.BankTransaction;

@FunctionalInterface
public interface TransactionSummarizer {
  double summarize(double accumulator, BankTransaction bankTransaction);
}
