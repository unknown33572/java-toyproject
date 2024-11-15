package service;

import transaction.BankTransaction;

@FunctionalInterface
public interface TransactionFilter {
  boolean test(BankTransaction bankTransaction);
}
