package customerSystem;

public class GoldCustomerPurchaseAmountRule implements ExcellentCustomerRule {

  @Override
  public boolean ok(PurchaseHistory history) {
    return 1000000 <= history.getTotalPurchaseAmount();
  }
  
}
