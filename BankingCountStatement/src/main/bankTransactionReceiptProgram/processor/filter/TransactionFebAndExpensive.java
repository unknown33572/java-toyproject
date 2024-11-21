package bankTransactionReceiptProgram.processor.filter;

import java.time.Month;

import bankTransactionReceiptProgram.service.TransactionFilter;
import bankTransactionReceiptProgram.transaction.BankTransaction;

public class TransactionFebAndExpensive implements TransactionFilter {
  @Override
  public boolean test(final BankTransaction bankTransaction) {
    return bankTransaction.getDate().getMonth() == Month.FEBRUARY &&
           bankTransaction.getAmount() >= 1_000;
  }
}
