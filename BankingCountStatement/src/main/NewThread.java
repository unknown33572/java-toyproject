public class NewThread {
  public void newThread() {
    Thread t = new Thread(() -> {});
    System.out.println("New thread: " + t.getState());
  }
}
