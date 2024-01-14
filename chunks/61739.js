"use strict";
a.r(e), a.d(e, {
  default: function() {
    return u
  }
});
var d = a("818985"),
  u = {
    date: (0, d.default)({
      formats: {
        full: "EEEE, d MMMM yyyy",
        long: "d MMMM yyyy",
        medium: "d MMM yyyy",
        short: "dd/MM/yyyy"
      },
      defaultWidth: "full"
    }),
    time: (0, d.default)({
      formats: {
        full: "HH:mm:ss zzzz",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, d.default)({
      formats: {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  }