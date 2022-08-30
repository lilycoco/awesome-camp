module.exports = {
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@test/(.*)$",
    "^@(components|containers)/(.*)$",
    "^@(actions|epics|reducers)/(.*)$",
    "^@shared/(.*)$",
    "^@(styles|assets)/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
};
