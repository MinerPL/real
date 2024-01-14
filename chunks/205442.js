"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var r = t("818985"),
  o = {
    date: (0, r.default)({
      formats: {
        full: "EEEE, d. MMMM yyyy",
        long: "d. MMMM yyyy",
        medium: "d. M. yyyy",
        short: "dd.MM.yyyy"
      },
      defaultWidth: "full"
    }),
    time: (0, r.default)({
      formats: {
        full: "H:mm:ss zzzz",
        long: "H:mm:ss z",
        medium: "H:mm:ss",
        short: "H:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, r.default)({
      formats: {
        full: "{{date}} 'v' {{time}}",
        long: "{{date}} 'v' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  }