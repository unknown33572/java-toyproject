package documentManager;

public class App {
  public static void main(String[] args) {
    DocumentManagementSystem documentSystem = new DocumentManagementSystem();

    try {
      documentSystem.importFile("src/main/documentManager/path/to/image.jpg");

      for (Document doc : documentSystem.contents()) {

        if (doc.getAttribute(Attributes.WIDTH) != null) {
          System.out.println(" - Width: " + doc.getAttribute(Attributes.WIDTH));
          System.out.println(" - Height: " + doc.getAttribute(Attributes.HEIGHT));
        }
        System.out.println();
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
