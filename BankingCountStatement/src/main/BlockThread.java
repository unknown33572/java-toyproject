public class BlockThread {
  public void blockedThread() {
    try{
      Thread t1 = new Thread(new SyncCode());
      Thread t2 = new Thread(new SyncCode());
  
      t1.start();
      Thread.sleep(2000);
      t2.start();
      Thread.sleep(2000);
  
      System.out.println("Blocked thread 1: " + t1.getState() + " " + t1.getName());
  
      System.out.println("Blocked thread 2: " + t2.getState() + " " + t2.getName());
  
      System.exit(0);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }

  private class SyncCode implements Runnable {
    @Override
    public void run() {
      System.out.println("Thread " + Thread.currentThread().getName() + " is in run() method");
      syncMethod();
    }
  
    public static synchronized void syncMethod() {
      System.out.println("Thread " + Thread.currentThread().getName() + " is in syncMethod() method");
  
      while (true) {
        
      }
    }
  }
}
