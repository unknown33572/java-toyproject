package customerSystem;

public class SilverCustomerPurchaseAmountRule implements ExcellentCustomerRule {

  @Override
  public boolean ok(PurchaseHistory history) {
    return 50000 <= history.getTotalPurchaseAmount();
  }
}
