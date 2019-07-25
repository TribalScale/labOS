module.exports = function(migration) {
  const Hero = migration
    .createContentType("hero")
    .name("Hero")
    .displayField("title");

  Hero.createField("title")
    .type("Symbol")
    .name("Title")
    .localized(true);
  Hero.createField("contentInfo")
    .type("Link")
    .name("Content Info")
    .linkType("Entry")
    .validations([
      {
        linkContentType: ["copy"]
      }
    ])
    .required(true);
  Hero.createField("backgroundImage")
    .type("Link")
    .linkType("Entry")
    .name("Background Image")
    .required(true)
    .validations([{ linkContentType: ["image"] }]);
};
