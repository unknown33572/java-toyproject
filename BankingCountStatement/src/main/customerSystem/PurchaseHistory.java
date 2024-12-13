package customerSystem;

public class PurchaseHistory {
  private final int totalPurchaseAmount;
  private final int purchaseFrequencyPerMonth;
  private final double returnRate;

  public PurchaseHistory(final int totalPurchaseAmount, final int purchaseFrequencyPerMonth, final double returnRate) {
    this.totalPurchaseAmount = totalPurchaseAmount;
    this.purchaseFrequencyPerMonth = purchaseFrequencyPerMonth;
    this.returnRate = returnRate;
  }

  public int getTotalPurchaseAmount() {
    return totalPurchaseAmount;
  }

  public int getPurchaseFrequencyPerMonth() {
    return purchaseFrequencyPerMonth;
  }

  public double getReturnRate() {
    return returnRate;
  }
}
