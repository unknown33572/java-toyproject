package bankTransactionReceiptProgram.analyzer;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Month;
import java.util.List;

import bankTransactionReceiptProgram.Exporter.HtmlExporter;
import bankTransactionReceiptProgram.processor.TransactionProcessor;
import bankTransactionReceiptProgram.processor.filter.TransactionFebAndExpensive;
import bankTransactionReceiptProgram.service.StatementParser;
import bankTransactionReceiptProgram.transaction.BankTransaction;
import bankTransactionReceiptProgram.transaction.summary.SummaryStatistics;

public class BankStatementAnalyzer {

  private static final String RESOURCES = "src/main/resources/";

  public void setAnalyze(final String fileName, final StatementParser bankStatementParser) throws IOException {
    final Path path = Paths.get(RESOURCES, fileName);
    final List<String> lines = Files.readAllLines(path);

    final List<BankTransaction> allBankTransactions = bankStatementParser.parseLinesFromCSV(lines);

    final TransactionProcessor bankStatementProcessor = new TransactionProcessor(allBankTransactions);

    SummaryStatistics summaryStatistics = bankStatementProcessor.summarizeTransactions();

    final TransactionProcessor calculateProcessor = new TransactionProcessor(allBankTransactions);
    
    // final List<BankTransaction> transactions = bankStatementProcessor.findTransactions(new TransactionFebAndExpensive());

    summaryPrint(calculateProcessor);

    System.out.println();

    final List<BankTransaction> filterBankTransactions = bankStatementProcessor.findTransactionsGreaterThanEqual(300);

    final TransactionProcessor filterBankStatementProcessor = new TransactionProcessor(filterBankTransactions);

    summaryPrint(filterBankStatementProcessor);

    System.out.println();

    // summaryPrint(bankStatementProcessor);

    // System.out.println();

    // summaryPrint(calculateProcessor);

    // System.out.println();

    // summaryPrint(bankStatementProcessor);

    summaryListPrint(allBankTransactions);

    System.out.println();

    summaryListPrint(filterBankTransactions);

    exportHtmlReport(summaryStatistics);
  }

  private void summaryPrint(final TransactionProcessor calculateProcessor) {
        System.out.println("The total for all transactions is: " + calculateProcessor.calculateTotalAmount());
        System.out.println("The total for transactions in January is: " + calculateProcessor.calculateTotalInMonth(Month.JANUARY));
        // System.out.println("The total Food received is: " + calculateProcessor.calculateTotalForCategory("Food"));
  }

  private void summaryListPrint(final List<BankTransaction> bankTransactions) {
    int i = 1;
    for (final BankTransaction transaction : bankTransactions) {
      System.out.println("The " + i +" line from the CSV file is: " + transaction);
      i++;
    }
  }

  private void exportHtmlReport(final SummaryStatistics summaryStatistics) {
    HtmlExporter htmlExporter = new HtmlExporter();

    String htmlReport = htmlExporter.export(summaryStatistics);

    String htmlDirPath = RESOURCES + "html";

    File htmlDir = new File(htmlDirPath);
    if (!htmlDir.exists()) {
      htmlDir.mkdirs();
    }

    String htmlFilePath = htmlDirPath + "/report.html";

    try (BufferedWriter writer = new BufferedWriter(new FileWriter(htmlFilePath))) {
        writer.write(htmlReport);
        System.out.println("HTML 보고서가 생성되었습니다: " + htmlFilePath);
    } catch (IOException e) {
        System.err.println("HTML 보고서를 저장하는 동안 오류가 발생했습니다.");
        e.printStackTrace();
    }
  }

}
