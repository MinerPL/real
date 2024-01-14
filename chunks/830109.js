"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("818985"),
  r = {
    date: (0, a.default)({
      formats: {
        full: "EEEE d MMMM y",
        long: "d MMMM y",
        medium: "d MMM y",
        short: "y-MM-dd"
      },
      defaultWidth: "full"
    }),
    time: (0, a.default)({
      formats: {
        full: "'kl'. HH:mm:ss zzzz",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, a.default)({
      formats: {
        full: "{{date}} 'kl.' {{time}}",
        long: "{{date}} 'kl.' {{time}}",
        medium: "{{date}} {{time}}",
        short: "{{date}} {{time}}"
      },
      defaultWidth: "full"
    })
  }