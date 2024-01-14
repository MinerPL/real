"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("64273"),
  a = {
    ordinalNumber: function(e, t) {
      var n = Number(e),
        r = n % 100;
      if (r > 20 || r < 10) switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd"
      }
      return n + "th"
    },
    era: (0, r.default)({
      values: {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
      },
      defaultWidth: "wide"
    }),
    quarter: (0, r.default)({
      values: {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
      },
      defaultWidth: "wide",
      argumentCallback: function(e) {
        return e - 1
      }
    }),
    month: (0, r.default)({
      values: {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      },
      defaultWidth: "wide"
    }),
    day: (0, r.default)({
      values: {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      defaultWidth: "wide"
    }),
    dayPeriod: (0, r.default)({
      values: {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night"
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night"
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night"
        }
      },
      defaultWidth: "wide",
      formattingValues: {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night"
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night"
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night"
        }
      },
      defaultFormattingWidth: "wide"
    })
  }