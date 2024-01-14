"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("818985"),
  i = {
    date: (0, a.default)({
      formats: {
        full: "EEEE, do MMMM, y",
        long: "do MMMM, y",
        medium: "d MMM, y",
        short: "dd/MM/yyyy"
      },
      defaultWidth: "full"
    }),
    time: (0, a.default)({
      formats: {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, a.default)({
      formats: {
        full: "{{date}} 'को' {{time}}",
        long: "{{date}} 'को' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  }