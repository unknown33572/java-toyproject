package customerSystem;

public class ReturnRateRule implements ExcellentCustomerRule {

  @Override
  public boolean ok(PurchaseHistory history) {
    return history.getReturnRate() <= 1.0;
  }
  
}
