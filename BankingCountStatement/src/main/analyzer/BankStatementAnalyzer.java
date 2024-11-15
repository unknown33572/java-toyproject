package analyzer;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Month;
import java.util.List;

import processor.CalculateProcessor;
import processor.filter.TransactionFebAndExpensive;
import service.StatementParser;
import transaction.BankTransaction;

public class BankStatementAnalyzer {

  private static final String RESOURCES = "src/main/resources/";

  public void setAnalyze(final String fileName, final StatementParser bankStatementParser) throws IOException {
    final Path path = Paths.get(RESOURCES, fileName);
    final List<String> lines = Files.readAllLines(path);

    final List<BankTransaction> bankTransactions = bankStatementParser.parseLinesFromCSV(lines);

    final CalculateProcessor bankStatementProcessor = new CalculateProcessor(bankTransactions);

    final List<BankTransaction> transactions = bankStatementProcessor.findTransactions(new TransactionFebAndExpensive());

    final CalculateProcessor calculateProcessor = new CalculateProcessor(transactions);

    System.out.println();

    summaryPrint(calculateProcessor);

    System.out.println();

    summaryPrint(bankStatementProcessor);

    int i = 1;
    for (final BankTransaction transaction : bankTransactions) {
        System.out.println("The " + i +" line from the CSV file is: " + transaction);
        i++;
    }
  }

  private void summaryPrint(final CalculateProcessor calculateProcessor) {
        System.out.println("The total for all transactions is: " + calculateProcessor.calculateTotalAmount());
        System.out.println("The total for transactions in January is: " + calculateProcessor.calculateTotalInMonth(Month.JANUARY));
        System.out.println("The total Food received is: " + calculateProcessor.calculateTotalForCategory("Food"));
  }
}
