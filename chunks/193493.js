"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("781738");
var r = function(e, t) {
    switch (e) {
      case "P":
        return t.date({
          width: "short"
        });
      case "PP":
        return t.date({
          width: "medium"
        });
      case "PPP":
        return t.date({
          width: "long"
        });
      default:
        return t.date({
          width: "full"
        })
    }
  },
  a = function(e, t) {
    switch (e) {
      case "p":
        return t.time({
          width: "short"
        });
      case "pp":
        return t.time({
          width: "medium"
        });
      case "ppp":
        return t.time({
          width: "long"
        });
      default:
        return t.time({
          width: "full"
        })
    }
  },
  o = {
    p: a,
    P: function(e, t) {
      var n, o = e.match(/(P+)(p+)?/) || [],
        i = o[1],
        s = o[2];
      if (!s) return r(e, t);
      switch (i) {
        case "P":
          n = t.dateTime({
            width: "short"
          });
          break;
        case "PP":
          n = t.dateTime({
            width: "medium"
          });
          break;
        case "PPP":
          n = t.dateTime({
            width: "long"
          });
          break;
        default:
          n = t.dateTime({
            width: "full"
          })
      }
      return n.replace("{{date}}", r(i, t)).replace("{{time}}", a(s, t))
    }
  }