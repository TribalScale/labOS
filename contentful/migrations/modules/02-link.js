module.exports = function(migration) {
  const Link = migration
    .createContentType("link")
    .name("Link")
    .displayField("link");

  Link.createField("link")
    .type("Symbol")
    .name("Link")
    .localized(true)
    .required(true);
  Link.createField("alternateText")
    .type("Symbol")
    .name("Alternate Text")
    .localized(true)
    .required(true);
  Link.createField("linkText")
    .type("Symbol")
    .name("Link Text")
    .localized(true)
    .required(true);
  Link.createField("callToAction")
    .type("Boolean")
    .name("Call to Action");
  Link.createField("image")
    .type("Link")
    .linkType("Entry")
    .name("Image")
    .validations([{ linkContentType: ["image"] }]);
};
