package customerSystem;

public class App {
  public static void main(String[] args) {
    PurchaseHistory purchaseHistory = new PurchaseHistory(1000001, 11, 1);

    ExcellentCustomerPolicy goldCustomerPolicy = new ExcellentCustomerPolicy();

    goldCustomerPolicy.add(new GoldCustomerPurchaseAmountRule());
    goldCustomerPolicy.add(new PurchaseFrequencyRule());
    goldCustomerPolicy.add(new ReturnRateRule());

    SilverCustomerPolicy silverCustomerPolicy = new SilverCustomerPolicy();

    System.out.println(silverCustomerPolicy.complyWithAll(purchaseHistory));
    
    System.out.println(goldCustomerPolicy.complyWithAll(purchaseHistory));
  }
}
