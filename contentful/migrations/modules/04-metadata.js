module.exports = function(migration) {
  const Metadata = migration
    .createContentType("metadata")
    .name("Metadata")
    .displayField("title");

  Metadata.createField("title")
    .type("Symbol")
    .name("Title")
    .localized(true)
    .required(true);
  Metadata.createField("description")
    .type("Text")
    .name("Description")
    .localized(true)
    .required(true);
  Metadata.createField("author")
    .type("Symbol")
    .name("Author")
    .required(true);
  Metadata.createField("language")
    .type("Symbol")
    .name("Language")
    .required(true);
  Metadata.createField("keywords")
    .type("Text")
    .name("Keywords")
    .localized(true)
    .required(true);
};
