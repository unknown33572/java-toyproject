package processor;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

import service.TransactionFilter;
import transaction.BankTransaction;

public class CalculateProcessor {
  private final List<BankTransaction> bankTransactions;

  public CalculateProcessor(final BankTransaction bankTransaction) {
    this.bankTransactions = List.of(bankTransaction);
  }

  public CalculateProcessor(final List<BankTransaction> bankTransactions) {
    this.bankTransactions = bankTransactions;
  }
  
  public double calculateTotalAmount() {
    double total = 0d;
    for (final BankTransaction bankTransaction : bankTransactions) {
      total += bankTransaction.getAmount();
    }
    return total;
  }

  public double calculateTotalInMonth(final Month month) {
    double total = 0d;

    for (final BankTransaction bankTransaction : bankTransactions) {
      final LocalDate date = bankTransaction.getDate();

      if (date.getMonth() == month) {
        total += bankTransaction.getAmount();
      }
    }

    return total;
  }

  public double calculateTotalForCategory(final String category) {
    double total = 0d;

    for (final BankTransaction bankTransaction : bankTransactions) {
      if (bankTransaction.getDescription().equals(category)) {
        total += bankTransaction.getAmount();
      }
    }

    return total;
  }

  public List<BankTransaction> findTransactions(final TransactionFilter transactionFilter) {
    final List<BankTransaction> result = new ArrayList<>();

    for (final BankTransaction bankTransaction : bankTransactions) {
      if (transactionFilter.test(bankTransaction)) {
        result.add(bankTransaction);
      }
    }

    return result;
  }
}
