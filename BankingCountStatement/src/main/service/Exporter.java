package service;

import transaction.summary.SummaryStatistics;

public interface Exporter {
  String export(SummaryStatistics summaryStatistics);
}
