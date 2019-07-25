module.exports = function(migration) {
  const Image = migration
    .createContentType("image")
    .name("Image")
    .displayField("title");

  Image.createField("title")
    .type("Symbol")
    .name("Title")
    .localized(true)
    .required(true);
  Image.createField("description")
    .type("Text")
    .name("Description")
    .localized(true)
    .required(true);
  Image.createField("alternateText")
    .type("Text")
    .name("Alternate Text")
    .localized(true)
    .required(true);
  Image.createField("image")
    .type("Link")
    .linkType("Asset")
    .name("Image")
    .validations([{ linkMimetypeGroup: ["image"] }])
    .required(true);
};
