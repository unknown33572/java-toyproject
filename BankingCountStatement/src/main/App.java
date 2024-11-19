import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.Month;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import analyzer.BankStatementAnalyzer;
import parser.CSVParser;
import processor.TransactionProcessor;
import service.StatementParser;
import transaction.BankTransaction;

public class App {

    // private static final String RESOURCES = "src/main/resources/";

    // private static final CSVParser csvParser = new CSVParser();

    //#region receiptReadMethod
    /*
    public static void receiptCounting(String[] args) throws IOException{
        if (args.length == 0) {
            System.out.println("array is empty");
            return;
        }

        final Path path = Paths.get(RESOURCES, args[0]);

        if (!Files.exists(path)) {
            System.out.println("파일을 찾을 수 없습니다: " + path.toAbsolutePath());
            return;
        }


        final List<String> lines = Files.readAllLines(path);
        double total = 0d;
        for (final String line : lines) {
            final String[] columns = line.split(",");
            final double amount = Double.parseDouble(columns[1]);
            total += amount;
        }

        System.out.println("The total for all transactions is: " + total);
    }

    public static void searchMonthReceiptCounting(String[] args) throws IOException {

        Scanner scanner = new Scanner(System.in);

        final Path path = Paths.get(RESOURCES, args[0]);
        final List<String> lines = Files.readAllLines(path);
        double total = 0d;
        final DateTimeFormatter DATE_PATTERN = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        System.out.println("Select Month:");
        int month = scanner.nextInt();

        if (month < 1 || month > 12) {
            System.out.println("Invalid month");
            return;
        }

        for (final String line : lines) {
            final String[] columns = line.split(",");
            final LocalDate date = LocalDate.parse(columns[0], DATE_PATTERN);
            if (date.getMonth() == Month.of(month)) {
                final double amount = Double.parseDouble(columns[1]);
                total += amount;
            }
        }

        System.out.println("The total for all transactions in " + month + " is: " + total);
    }
    */
    //#endregion receiptReadMethod

    //#region calculateProcessor
    /*
    public static double calculateTotalAmount(final List<BankTransaction> bankTransactions) {
        // return bankTransactions.stream()
        //         .map(BankTransaction::getAmount)
        //         .reduce(0d, Double::sum);
        double total = 0d;

        for (final BankTransaction bankTransaction : bankTransactions) {
            total += bankTransaction.getAmount();
        }

        return total;
    }

    public static List<BankTransaction> selectInMonth(final List<BankTransaction> bankTransactions, final int month) {
        // return bankTransactions.stream()
        //         .filter(bankTransaction -> bankTransaction.getDate().getMonthValue() == month)
        //         .collect(Collectors.toList());
        final List<BankTransaction> bankTransactionsInMonth = new ArrayList<>();

        for (final BankTransaction bankTransaction : bankTransactions) {
            if (bankTransaction.getDate().getMonthValue() == month) {
                bankTransactionsInMonth.add(bankTransaction);
            }
        }

        return bankTransactionsInMonth;
    }
    */
    //#endregion calculateProcessor

    public static void main(String[] args) throws IOException {
        //#region old code
        /*
        // receiptCounting(args);
        // searchMonthReceiptCounting(args);

        final String fileName = args[0];
        final Path path = Paths.get(RESOURCES, fileName);
        final List<String> lines = Files.readAllLines(path);

        final BankTransaction bankTransaction = csvParser.parseFromCSV(lines.get(0));

        final List<BankTransaction> bankTransactions = csvParser.parseLinesFromCSV(lines);

        final CalculateProcessor calculateProcessorSingle = new CalculateProcessor(bankTransaction);

        final CalculateProcessor calculateProcessorMulti = new CalculateProcessor(bankTransactions);

        System.out.println();

        summaryPrint(calculateProcessorSingle);
        System.out.println("The first line from the CSV file is: " + bankTransaction);

        System.out.println();

        summaryPrint(calculateProcessorMulti);
        int i = 1;
        for (final BankTransaction transaction : bankTransactions) {
            System.out.println("The " + i +" line from the CSV file is: " + transaction);
            i++;
        }

        // System.out.println("The total for all transactions is: " + calculateTotalAmount(bankTransactions));

        // System.out.println("Transactions in January: " + selectInMonth(bankTransactions, 1));
        */
        //#endregion old code

        final BankStatementAnalyzer bankStatementAnalyzer = new BankStatementAnalyzer();

        final StatementParser statementParser = new CSVParser();

        bankStatementAnalyzer.setAnalyze(args[0], statementParser);
    }

}
