"use strict";
t.r(e), t.d(e, {
  default: function() {
    return r
  }
});
var a = t("818985"),
  r = {
    date: (0, a.default)({
      formats: {
        full: "y 'm'. MMMM d 'd'., EEEE",
        long: "y 'm'. MMMM d 'd'.",
        medium: "y-MM-dd",
        short: "y-MM-dd"
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
        full: "{{date}} {{time}}",
        long: "{{date}} {{time}}",
        medium: "{{date}} {{time}}",
        short: "{{date}} {{time}}"
      },
      defaultWidth: "full"
    })
  }