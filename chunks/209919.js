"use strict";

function e(n, i) {
  if (void 0 !== n.one && 1 === i) return n.one;
  var t = i % 10,
    e = i % 100;
  return 1 === t && 11 !== e ? n.singularNominative.replace("{{count}}", String(i)) : t >= 2 && t <= 4 && (e < 10 || e > 20) ? n.singularGenitive.replace("{{count}}", String(i)) : n.pluralGenitive.replace("{{count}}", String(i))
}

function a(n) {
  return function(i, t) {
    if (null == t || !t.addSuffix) return e(n.regular, i);
    if (t.comparison && t.comparison > 0) return n.future ? e(n.future, i) : "через " + e(n.regular, i);
    return n.past ? e(n.past, i) : e(n.regular, i) + " назад"
  }
}
t.r(i), t.d(i, {
  default: function() {
    return r
  }
}), t("781738");
var u = {
    lessThanXSeconds: a({
      regular: {
        one: "меньше секунды",
        singularNominative: "меньше {{count}} секунды",
        singularGenitive: "меньше {{count}} секунд",
        pluralGenitive: "меньше {{count}} секунд"
      },
      future: {
        one: "меньше, чем через секунду",
        singularNominative: "меньше, чем через {{count}} секунду",
        singularGenitive: "меньше, чем через {{count}} секунды",
        pluralGenitive: "меньше, чем через {{count}} секунд"
      }
    }),
    xSeconds: a({
      regular: {
        singularNominative: "{{count}} секунда",
        singularGenitive: "{{count}} секунды",
        pluralGenitive: "{{count}} секунд"
      },
      past: {
        singularNominative: "{{count}} секунду назад",
        singularGenitive: "{{count}} секунды назад",
        pluralGenitive: "{{count}} секунд назад"
      },
      future: {
        singularNominative: "через {{count}} секунду",
        singularGenitive: "через {{count}} секунды",
        pluralGenitive: "через {{count}} секунд"
      }
    }),
    halfAMinute: function(n, i) {
      if (null != i && i.addSuffix) return i.comparison && i.comparison > 0 ? "через полминуты" : "полминуты назад";
      return "полминуты"
    },
    lessThanXMinutes: a({
      regular: {
        one: "меньше минуты",
        singularNominative: "меньше {{count}} минуты",
        singularGenitive: "меньше {{count}} минут",
        pluralGenitive: "меньше {{count}} минут"
      },
      future: {
        one: "меньше, чем через минуту",
        singularNominative: "меньше, чем через {{count}} минуту",
        singularGenitive: "меньше, чем через {{count}} минуты",
        pluralGenitive: "меньше, чем через {{count}} минут"
      }
    }),
    xMinutes: a({
      regular: {
        singularNominative: "{{count}} минута",
        singularGenitive: "{{count}} минуты",
        pluralGenitive: "{{count}} минут"
      },
      past: {
        singularNominative: "{{count}} минуту назад",
        singularGenitive: "{{count}} минуты назад",
        pluralGenitive: "{{count}} минут назад"
      },
      future: {
        singularNominative: "через {{count}} минуту",
        singularGenitive: "через {{count}} минуты",
        pluralGenitive: "через {{count}} минут"
      }
    }),
    aboutXHours: a({
      regular: {
        singularNominative: "около {{count}} часа",
        singularGenitive: "около {{count}} часов",
        pluralGenitive: "около {{count}} часов"
      },
      future: {
        singularNominative: "приблизительно через {{count}} час",
        singularGenitive: "приблизительно через {{count}} часа",
        pluralGenitive: "приблизительно через {{count}} часов"
      }
    }),
    xHours: a({
      regular: {
        singularNominative: "{{count}} час",
        singularGenitive: "{{count}} часа",
        pluralGenitive: "{{count}} часов"
      }
    }),
    xDays: a({
      regular: {
        singularNominative: "{{count}} день",
        singularGenitive: "{{count}} дня",
        pluralGenitive: "{{count}} дней"
      }
    }),
    aboutXWeeks: a({
      regular: {
        singularNominative: "около {{count}} недели",
        singularGenitive: "около {{count}} недель",
        pluralGenitive: "около {{count}} недель"
      },
      future: {
        singularNominative: "приблизительно через {{count}} неделю",
        singularGenitive: "приблизительно через {{count}} недели",
        pluralGenitive: "приблизительно через {{count}} недель"
      }
    }),
    xWeeks: a({
      regular: {
        singularNominative: "{{count}} неделя",
        singularGenitive: "{{count}} недели",
        pluralGenitive: "{{count}} недель"
      }
    }),
    aboutXMonths: a({
      regular: {
        singularNominative: "около {{count}} месяца",
        singularGenitive: "около {{count}} месяцев",
        pluralGenitive: "около {{count}} месяцев"
      },
      future: {
        singularNominative: "приблизительно через {{count}} месяц",
        singularGenitive: "приблизительно через {{count}} месяца",
        pluralGenitive: "приблизительно через {{count}} месяцев"
      }
    }),
    xMonths: a({
      regular: {
        singularNominative: "{{count}} месяц",
        singularGenitive: "{{count}} месяца",
        pluralGenitive: "{{count}} месяцев"
      }
    }),
    aboutXYears: a({
      regular: {
        singularNominative: "около {{count}} года",
        singularGenitive: "около {{count}} лет",
        pluralGenitive: "около {{count}} лет"
      },
      future: {
        singularNominative: "приблизительно через {{count}} год",
        singularGenitive: "приблизительно через {{count}} года",
        pluralGenitive: "приблизительно через {{count}} лет"
      }
    }),
    xYears: a({
      regular: {
        singularNominative: "{{count}} год",
        singularGenitive: "{{count}} года",
        pluralGenitive: "{{count}} лет"
      }
    }),
    overXYears: a({
      regular: {
        singularNominative: "больше {{count}} года",
        singularGenitive: "больше {{count}} лет",
        pluralGenitive: "больше {{count}} лет"
      },
      future: {
        singularNominative: "больше, чем через {{count}} год",
        singularGenitive: "больше, чем через {{count}} года",
        pluralGenitive: "больше, чем через {{count}} лет"
      }
    }),
    almostXYears: a({
      regular: {
        singularNominative: "почти {{count}} год",
        singularGenitive: "почти {{count}} года",
        pluralGenitive: "почти {{count}} лет"
      },
      future: {
        singularNominative: "почти через {{count}} год",
        singularGenitive: "почти через {{count}} года",
        pluralGenitive: "почти через {{count}} лет"
      }
    })
  },
  r = function(n, i, t) {
    return u[n](i, t)
  }