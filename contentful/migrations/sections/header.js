module.exports = function(migration) {
  const Header = migration
    .createContentType("header")
    .name("Header")
    .displayField("title");

  Header.createField("title")
    .type("Symbol")
    .name("Title")
    .localized(true);
  Header.createField("logoLink")
    .type("Link")
    .name("Logo Link")
    .linkType("Entry")
    .validations([
      {
        linkContentType: ["link"]
      }
    ])
    .required(true);
  Header.createField("navbar")
    .type("Array")
    .name("Navigation Bar")
    .items({
      type: "Link",
      validations: [
        {
          linkContentType: ["link"]
        }
      ],
      linkType: "Entry"
    })
    .required(true);
};
