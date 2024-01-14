var r, a;
e = n.nmd(e), r = this, a = function(e) {
  "use strict";

  function t(e, t, n) {
    var r, a, o;
    if ("m" === n) return t ? "минута" : "минуту";
    return e + " " + (r = ({
      ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
      mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
      hh: "час_часа_часов",
      dd: "день_дня_дней",
      MM: "месяц_месяца_месяцев",
      yy: "год_года_лет"
    })[n], a = +e, o = r.split("_"), a % 10 == 1 && a % 100 != 11 ? o[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? o[1] : o[2])
  }
  var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
  return e.defineLocale("ru", {
    months: {
      format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
      standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
    },
    monthsShort: {
      format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
      standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
    },
    weekdays: {
      standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
      format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
      isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
    monthsParse: n,
    longMonthsParse: n,
    shortMonthsParse: n,
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY г.",
      LLL: "D MMMM YYYY г., H:mm",
      LLLL: "dddd, D MMMM YYYY г., H:mm"
    },
    calendar: {
      sameDay: "[Сегодня, в] LT",
      nextDay: "[Завтра, в] LT",
      lastDay: "[Вчера, в] LT",
      nextWeek: function(e) {
        if (e.week() !== this.week()) switch (this.day()) {
          case 0:
            return "[В следующее] dddd, [в] LT";
          case 1:
          case 2:
          case 4:
            return "[В следующий] dddd, [в] LT";
          case 3:
          case 5:
          case 6:
            return "[В следующую] dddd, [в] LT"
        } else return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT"
      },
      lastWeek: function(e) {
        if (e.week() !== this.week()) switch (this.day()) {
          case 0:
            return "[В прошлое] dddd, [в] LT";
          case 1:
          case 2:
          case 4:
            return "[В прошлый] dddd, [в] LT";
          case 3:
          case 5:
          case 6:
            return "[В прошлую] dddd, [в] LT"
        } else return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "через %s",
      past: "%s назад",
      s: "несколько секунд",
      ss: t,
      m: t,
      mm: t,
      h: "час",
      hh: t,
      d: "день",
      dd: t,
      M: "месяц",
      MM: t,
      y: "год",
      yy: t
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: function(e) {
      return /^(дня|вечера)$/.test(e)
    },
    meridiem: function(e, t, n) {
      if (e < 4) return "ночи";
      if (e < 12) return "утра";
      if (e < 17) return "дня";
      else return "вечера"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: function(e, t) {
      switch (t) {
        case "M":
        case "d":
        case "DDD":
          return e + "-й";
        case "D":
          return e + "-го";
        case "w":
        case "W":
          return e + "-я";
        default:
          return e
      }
    },
    week: {
      dow: 1,
      doy: 4
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)