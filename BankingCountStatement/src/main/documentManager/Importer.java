package documentManager;

import java.io.File;

public interface Importer {
  Document importFile(File path) throws Exception;
}
