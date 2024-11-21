package bankTransactionReceiptProgram.service;

import bankTransactionReceiptProgram.transaction.summary.SummaryStatistics;

public interface Exporter {
  String export(SummaryStatistics summaryStatistics);
}
