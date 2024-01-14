"use strict";
n.r(e), n.d(e, {
  default: function() {
    return a
  }
});
var t = n("818985"),
  a = {
    date: (0, t.default)({
      formats: {
        full: "EEEE, d. MMMM y.",
        long: "d. MMMM y.",
        medium: "d. MMM y.",
        short: "dd. MM. y."
      },
      defaultWidth: "full"
    }),
    time: (0, t.default)({
      formats: {
        full: "HH:mm:ss (zzzz)",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, t.default)({
      formats: {
        full: "{{date}} 'u' {{time}}",
        long: "{{date}} 'u' {{time}}",
        medium: "{{date}} {{time}}",
        short: "{{date}} {{time}}"
      },
      defaultWidth: "full"
    })
  }