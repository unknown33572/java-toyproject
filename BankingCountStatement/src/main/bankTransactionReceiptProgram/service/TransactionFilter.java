package bankTransactionReceiptProgram.service;

import bankTransactionReceiptProgram.transaction.BankTransaction;

@FunctionalInterface
public interface TransactionFilter {
  boolean test(BankTransaction bankTransaction);
}
