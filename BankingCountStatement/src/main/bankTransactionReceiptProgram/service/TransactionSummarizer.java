package bankTransactionReceiptProgram.service;

import bankTransactionReceiptProgram.transaction.BankTransaction;

@FunctionalInterface
public interface TransactionSummarizer {
  double summarize(double accumulator, BankTransaction bankTransaction);
}
