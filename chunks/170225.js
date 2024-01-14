"use strict";
n.r(t), n.d(t, {
  useSpinButton: function() {
    return B
  }
}), n("781738");
var r = n("362561"),
  o = n("884691"),
  a = n("290895"),
  i = n("181551"),
  s = {},
  c = {},
  l = {},
  u = {},
  d = {},
  p = {},
  f = {},
  m = {},
  h = {},
  g = {},
  v = {},
  y = {},
  b = {},
  x = {},
  S = {},
  w = {},
  D = {},
  C = {},
  P = {},
  k = {},
  E = {},
  T = {},
  R = {},
  M = {},
  O = {},
  I = {},
  A = {},
  N = {},
  L = {},
  j = {},
  F = {},
  K = {},
  _ = {},
  z = {},
  V = {};

function B(e) {
  var t;
  let n = (0, o.useRef)(),
    {
      value: c,
      textValue: l,
      minValue: u,
      maxValue: d,
      isDisabled: p,
      isReadOnly: f,
      isRequired: m,
      onIncrement: h,
      onIncrementPage: g,
      onDecrement: v,
      onDecrementPage: y,
      onDecrementToMin: b,
      onIncrementToMax: x
    } = e;
  let S = (0, i.useLocalizedStringFormatter)((t = s) && t.__esModule ? t.default : t),
    w = () => clearTimeout(n.current);
  (0, o.useEffect)(() => () => w(), []);
  let D = (0, o.useRef)(!1),
    C = () => {
      D.current = !0
    },
    P = () => {
      D.current = !1
    };
  l = "" === l ? S.format("Empty") : (l || "".concat(c)).replace("-", "−"), (0, o.useEffect)(() => {
    D.current && ((0, r.clearAnnouncer)("assertive"), (0, r.announce)(l, "assertive"))
  }, [l]);
  let k = (0, a.useEffectEvent)(e => {
      w(), h(), n.current = window.setTimeout(() => {
        (isNaN(d) || isNaN(c) || c < d) && k(60)
      }, e)
    }),
    E = (0, a.useEffectEvent)(e => {
      w(), v(), n.current = window.setTimeout(() => {
        (isNaN(u) || isNaN(c) || c > u) && E(60)
      }, e)
    }),
    T = e => {
      e.preventDefault()
    },
    {
      addGlobalListener: R,
      removeAllGlobalListeners: M
    } = (0, a.useGlobalListeners)();
  return {
    spinButtonProps: {
      role: "spinbutton",
      "aria-valuenow": isNaN(c) ? null : c,
      "aria-valuetext": l,
      "aria-valuemin": u,
      "aria-valuemax": d,
      "aria-disabled": p || null,
      "aria-readonly": f || null,
      "aria-required": m || null,
      onKeyDown: e => {
        if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !f) switch (e.key) {
          case "PageUp":
            if (g) {
              e.preventDefault(), g();
              break
            }
          case "ArrowUp":
          case "Up":
            h && (e.preventDefault(), h());
            break;
          case "PageDown":
            if (y) {
              e.preventDefault(), y();
              break
            }
          case "ArrowDown":
          case "Down":
            v && (e.preventDefault(), v());
            break;
          case "Home":
            b && (e.preventDefault(), b());
            break;
          case "End":
            x && (e.preventDefault(), x())
        }
      },
      onFocus: C,
      onBlur: P
    },
    incrementButtonProps: {
      onPressStart: () => {
        k(400), R(window, "contextmenu", T)
      },
      onPressEnd: () => {
        w(), M()
      },
      onFocus: C,
      onBlur: P
    },
    decrementButtonProps: {
      onPressStart: () => {
        E(400), R(window, "contextmenu", T)
      },
      onPressEnd: () => {
        w(), M()
      },
      onFocus: C,
      onBlur: P
    }
  }
}
s = {
  "ar-AE": c = {
    Empty: "فارغ"
  },
  "bg-BG": l = {
    Empty: "Изпразни"
  },
  "cs-CZ": u = {
    Empty: "Pr\xe1zdn\xe9"
  },
  "da-DK": d = {
    Empty: "Tom"
  },
  "de-DE": p = {
    Empty: "Leer"
  },
  "el-GR": f = {
    Empty: "Άδειο"
  },
  "en-US": m = {
    Empty: "Empty"
  },
  "es-ES": h = {
    Empty: "Vac\xedo"
  },
  "et-EE": g = {
    Empty: "T\xfchjenda"
  },
  "fi-FI": v = {
    Empty: "Tyhj\xe4"
  },
  "fr-FR": y = {
    Empty: "Vide"
  },
  "he-IL": b = {
    Empty: "ריק"
  },
  "hr-HR": x = {
    Empty: "Prazno"
  },
  "hu-HU": S = {
    Empty: "\xdcres"
  },
  "it-IT": w = {
    Empty: "Vuoto"
  },
  "ja-JP": D = {
    Empty: "空"
  },
  "ko-KR": C = {
    Empty: "비어 있음"
  },
  "lt-LT": P = {
    Empty: "Tuščias"
  },
  "lv-LV": k = {
    Empty: "Tukšs"
  },
  "nb-NO": E = {
    Empty: "Tom"
  },
  "nl-NL": T = {
    Empty: "Leeg"
  },
  "pl-PL": R = {
    Empty: "Pusty"
  },
  "pt-BR": M = {
    Empty: "Vazio"
  },
  "pt-PT": O = {
    Empty: "Vazio"
  },
  "ro-RO": I = {
    Empty: "Gol"
  },
  "ru-RU": A = {
    Empty: "Не заполнено"
  },
  "sk-SK": N = {
    Empty: "Pr\xe1zdne"
  },
  "sl-SI": L = {
    Empty: "Prazen"
  },
  "sr-SP": j = {
    Empty: "Prazno"
  },
  "sv-SE": F = {
    Empty: "Tomt"
  },
  "tr-TR": K = {
    Empty: "Boş"
  },
  "uk-UA": _ = {
    Empty: "Пусто"
  },
  "zh-CN": z = {
    Empty: "空"
  },
  "zh-TW": V = {
    Empty: "空白"
  }
}