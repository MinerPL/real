"use strict";
n.r(e), n.d(e, {
  default: function() {
    return i
  }
});
var a = n("818985"),
  i = {
    date: (0, a.default)({
      formats: {
        full: "EEEE, do MMMM y",
        long: "do MMMM y",
        medium: "do MMM y",
        short: "dd.MM.y"
      },
      defaultWidth: "full"
    }),
    time: (0, a.default)({
      formats: {
        full: "HH:mm:ss zzzz",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, a.default)({
      formats: {
        full: "{{date}} 'um' {{time}}",
        long: "{{date}} 'um' {{time}}",
        medium: "{{date}} {{time}}",
        short: "{{date}} {{time}}"
      },
      defaultWidth: "full"
    })
  }