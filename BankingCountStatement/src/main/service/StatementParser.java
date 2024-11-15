package service;

import java.util.List;

import transaction.BankTransaction;

public interface StatementParser {
  BankTransaction parseFromCSV(final String line);
  List<BankTransaction> parseLinesFromCSV(final List<String> lines);
}
