package customerSystem;

public interface ExcellentCustomerRule {
  /**
   * @param history 구매 이력
   * @return 조건 만족 시 true, 아닐 시 false
   */
  boolean ok(final PurchaseHistory history);
}
