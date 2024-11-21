package documentManager;

import java.io.File;
import java.io.IOException;

import org.w3c.dom.Text;

public class ReportImporter implements Importer {
  @Override
  public Document importFile(File file) throws IOException {
    final TextFile textFile = new TextFile(file);

    textFile.addLineSuffix(NAME_PREFIX, PATIENT);
  }
}
