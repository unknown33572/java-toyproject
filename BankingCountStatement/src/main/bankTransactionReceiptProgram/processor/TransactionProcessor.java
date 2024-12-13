package bankTransactionReceiptProgram.processor;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

import bankTransactionReceiptProgram.service.TransactionFilter;
import bankTransactionReceiptProgram.service.TransactionSummarizer;
import bankTransactionReceiptProgram.transaction.BankTransaction;
import bankTransactionReceiptProgram.transaction.summary.SummaryStatistics;

public class TransactionProcessor {

  private final List<BankTransaction> bankTransactions;

  public TransactionProcessor(final BankTransaction bankTransaction) {
    this.bankTransactions = List.of(bankTransaction);
  }

  public TransactionProcessor(final List<BankTransaction> bankTransactions) {
    this.bankTransactions = bankTransactions;
  }

  public SummaryStatistics summarizeTransactions() {
        double sum = summarizeTransactions((acc, bankTransaction) -> acc + bankTransaction.getAmount());
        double average = sum / bankTransactions.size();
        double max = bankTransactions.stream().mapToDouble(BankTransaction::getAmount).max().orElse(0);
        double min = bankTransactions.stream().mapToDouble(BankTransaction::getAmount).min().orElse(0);

        return new SummaryStatistics(sum, average, max, min);
  }

  public double summarizeTransactions(final TransactionSummarizer transactionSummarizer) {
    double result = 0;
    for (final BankTransaction bankTransaction : bankTransactions) {
      result = transactionSummarizer.summarize(result, bankTransaction);
    }
    return result;
  }

  public double calculateTotalAmount() {
    double total = 0d;
    for (final BankTransaction bankTransaction : bankTransactions) {
      total += bankTransaction.getAmount();
    }
    return total;
  }
  //#region old code
  /*
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
   */
  //#endregion old code

  public double calculateTotalInMonth(final Month month) {
    return summarizeTransactions((acc, bankTransactions) ->
      bankTransactions.getDate().getMonth() == month ? acc + bankTransactions.getAmount() : acc
    );
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

  public List<BankTransaction> findTransactionsGreaterThanEqual(final int amount) {
    return findTransactions(bankTransactions -> bankTransactions.getAmount() >= amount);
  }
}
