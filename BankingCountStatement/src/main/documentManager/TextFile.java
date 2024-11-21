package documentManager;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static documentManager.Attributes.PATH;
import static java.util.stream.Collectors.toList;

public class TextFile {
  private final Map<String, String> attributes;
  private final List<String> lines;

  TextFile(File file) throws IOException {
    attributes = new HashMap<>();
    attributes.put(PATH, file.getPath());
    lines = Files.lines(file.toPath()).collect(toList());
  }
}
