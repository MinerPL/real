"use strict";
i.r(n), i.d(n, {
  default: function() {
    return o
  }
});
var t = i("818985"),
  o = {
    date: (0, t.default)({
      formats: {
        full: "EEEE, do MMMM y",
        long: "do MMMM y",
        medium: "do MMM y",
        short: "dd.MM.y"
      },
      defaultWidth: "full"
    }),
    time: (0, t.default)({
      formats: {
        full: "HH:mm:ss zzzz",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, t.default)({
      formats: {
        full: "{{date}} {{time}}",
        long: "{{date}} {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  }