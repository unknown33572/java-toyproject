package bankTransactionReceiptProgram.service;

import java.util.List;

import bankTransactionReceiptProgram.transaction.BankTransaction;

public interface StatementParser {
  BankTransaction parseFromCSV(final String line);
  List<BankTransaction> parseLinesFromCSV(final List<String> lines);
}
