public class RunnableThread {
  public void runnableThread() {
    Thread t = new Thread(() -> {});
    t.start();

    System.out.println("Runnable thread: " + t.getState());
  }
}
