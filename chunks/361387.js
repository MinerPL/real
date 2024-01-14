"use strict";
t.r(e), t.d(e, {
  default: function() {
    return i
  }
});
var n = t("818985"),
  i = {
    date: (0, n.default)({
      formats: {
        full: "d MMMM y EEEE",
        long: "d MMMM y",
        medium: "d MMM y",
        short: "dd.MM.yyyy"
      },
      defaultWidth: "full"
    }),
    time: (0, n.default)({
      formats: {
        full: "HH:mm:ss zzzz",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, n.default)({
      formats: {
        full: "{{date}} 'saat' {{time}}",
        long: "{{date}} 'saat' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  }