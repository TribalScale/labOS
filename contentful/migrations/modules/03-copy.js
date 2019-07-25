module.exports = function(migration) {
  const Copy = migration
    .createContentType("copy")
    .name("Copy")
    .displayField("title");

  Copy.createField("title")
    .type("Symbol")
    .name("Title")
    .localized(true);
  Copy.createField("text")
    .type("Text")
    .name("Text")
    .localized(true);
  Copy.createField("image")
    .type("Link")
    .linkType("Entry")
    .name("Image")
    .validations([{ linkContentType: ["image"] }]);
  Copy.createField("link")
    .type("Link")
    .name("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["link"] }]);
};
