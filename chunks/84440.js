"use strict";
n.r(t), n.d(t, {
  useNumberField: function() {
    return H
  }
}), n("222007");
var r = n("290895"),
  o = n("884691"),
  a = n("495912"),
  i = n("536571"),
  s = n("181551"),
  c = n("170225"),
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
  V = {},
  B = {},
  U = {};

function H(e, t, n) {
  var u;
  let d, {
      id: p,
      decrementAriaLabel: f,
      incrementAriaLabel: m,
      isDisabled: h,
      isReadOnly: g,
      isRequired: v,
      minValue: y,
      maxValue: b,
      autoFocus: x,
      validationState: S,
      isInvalid: w,
      label: D,
      formatOptions: C,
      onBlur: P = () => {},
      onFocus: k,
      onFocusChange: E,
      onKeyDown: T,
      onKeyUp: R,
      description: M,
      errorMessage: O,
      ...I
    } = e,
    {
      increment: A,
      incrementToMax: N,
      decrement: L,
      decrementToMin: j,
      numberValue: F,
      inputValue: K,
      commit: _
    } = t;
  let z = (0, s.useLocalizedStringFormatter)((u = l) && u.__esModule ? u.default : u),
    V = (0, r.useId)(p),
    {
      focusProps: B
    } = (0, a.useFocus)({
      onBlur: () => {
        _()
      }
    }),
    U = (0, s.useNumberFormatter)(C),
    H = (0, o.useMemo)(() => U.resolvedOptions(), [U]),
    G = (0, s.useNumberFormatter)({
      ...C,
      currencySign: void 0
    }),
    W = (0, o.useMemo)(() => isNaN(F) ? "" : G.format(F), [G, F]),
    {
      spinButtonProps: q,
      incrementButtonProps: Z,
      decrementButtonProps: Y
    } = (0, c.useSpinButton)({
      isDisabled: h,
      isReadOnly: g,
      isRequired: v,
      maxValue: b,
      minValue: y,
      onIncrement: A,
      onIncrementToMax: N,
      onDecrement: L,
      onDecrementToMin: j,
      value: F,
      textValue: W
    }),
    [X, J] = (0, o.useState)(!1),
    {
      focusWithinProps: $
    } = (0, a.useFocusWithin)({
      isDisabled: h,
      onFocusWithinChange: J
    }),
    Q = (0, o.useCallback)(e => {
      !(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) && (e.deltaY > 0 ? A() : e.deltaY < 0 && L())
    }, [L, A]),
    ee = h || g || !X;
  (0, a.useScrollWheel)({
    onScroll: Q,
    isDisabled: ee
  }, n);
  let et = H.maximumFractionDigits > 0,
    en = isNaN(t.minValue) || t.minValue < 0,
    er = "numeric";
  (0, r.isIPhone)() ? en ? er = "text" : et && (er = "decimal"): (0, r.isAndroid)() && (en ? er = "numeric" : et && (er = "decimal"));
  let eo = (0, r.filterDOMProps)(e),
    {
      labelProps: ea,
      inputProps: ei,
      descriptionProps: es,
      errorMessageProps: ec
    } = (0, i.useFormattedTextField)({
      ...I,
      ...eo,
      name: void 0,
      label: D,
      autoFocus: x,
      isDisabled: h,
      isReadOnly: g,
      isRequired: v,
      validationState: S,
      isInvalid: w,
      value: K,
      defaultValue: void 0,
      autoComplete: "off",
      "aria-label": e["aria-label"] || null,
      "aria-labelledby": e["aria-labelledby"] || null,
      id: V,
      type: "text",
      inputMode: er,
      onChange: e => {
        t.validate(e) && t.setInputValue(e)
      },
      onBlur: P,
      onFocus: k,
      onFocusChange: E,
      onKeyDown: T,
      onKeyUp: R,
      description: M,
      errorMessage: O
    }, t, n);
  (0, r.useFormReset)(n, t.numberValue, t.setNumberValue);
  let el = (0, r.mergeProps)(q, B, ei, {
      role: null,
      "aria-roledescription": (0, r.isIOS)() ? null : z.format("numberField"),
      "aria-valuemax": null,
      "aria-valuemin": null,
      "aria-valuenow": null,
      "aria-valuetext": null,
      autoCorrect: "off",
      spellCheck: "false"
    }),
    eu = e => {
      document.activeElement !== n.current && ("mouse" === e.pointerType ? n.current.focus() : e.target.focus())
    },
    ed = e["aria-label"] || ("string" == typeof e.label ? e.label : "");
  !ed && (d = null != e.label ? ea.id : e["aria-labelledby"]);
  let ep = (0, r.useId)(),
    ef = (0, r.useId)(),
    em = (0, r.mergeProps)(Z, {
      "aria-label": m || z.format("increase", {
        fieldLabel: ed
      }).trim(),
      id: d && !m ? ep : null,
      "aria-labelledby": d && !m ? "".concat(ep, " ").concat(d) : null,
      "aria-controls": V,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      allowFocusWhenDisabled: !0,
      isDisabled: !t.canIncrement,
      onPressStart: eu
    }),
    eh = (0, r.mergeProps)(Y, {
      "aria-label": f || z.format("decrease", {
        fieldLabel: ed
      }).trim(),
      id: d && !f ? ef : null,
      "aria-labelledby": d && !f ? "".concat(ef, " ").concat(d) : null,
      "aria-controls": V,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      allowFocusWhenDisabled: !0,
      isDisabled: !t.canDecrement,
      onPressStart: eu
    });
  return {
    groupProps: {
      role: "group",
      "aria-disabled": h,
      "aria-invalid": "invalid" === S ? "true" : void 0,
      ...$
    },
    labelProps: ea,
    inputProps: el,
    incrementButtonProps: em,
    decrementButtonProps: eh,
    errorMessageProps: ec,
    descriptionProps: es
  }
}
l = {
  "ar-AE": u = {
    decrease: e => "خفض ".concat(e.fieldLabel),
    increase: e => "زيادة ".concat(e.fieldLabel),
    numberField: "حقل رقمي"
  },
  "bg-BG": d = {
    decrease: e => "Намаляване ".concat(e.fieldLabel),
    increase: e => "Усилване ".concat(e.fieldLabel),
    numberField: "Номер на полето"
  },
  "cs-CZ": p = {
    decrease: e => "Sn\xedžit ".concat(e.fieldLabel),
    increase: e => "Zv\xfdšit ".concat(e.fieldLabel),
    numberField: "Č\xedseln\xe9 pole"
  },
  "da-DK": f = {
    decrease: e => "Reducer ".concat(e.fieldLabel),
    increase: e => "\xd8g ".concat(e.fieldLabel),
    numberField: "Talfelt"
  },
  "de-DE": m = {
    decrease: e => "".concat(e.fieldLabel, " verringern"),
    increase: e => "".concat(e.fieldLabel, " erh\xf6hen"),
    numberField: "Nummernfeld"
  },
  "el-GR": h = {
    decrease: e => "Μείωση ".concat(e.fieldLabel),
    increase: e => "Αύξηση ".concat(e.fieldLabel),
    numberField: "Πεδίο αριθμού"
  },
  "en-US": g = {
    decrease: e => "Decrease ".concat(e.fieldLabel),
    increase: e => "Increase ".concat(e.fieldLabel),
    numberField: "Number field"
  },
  "es-ES": v = {
    decrease: e => "Reducir ".concat(e.fieldLabel),
    increase: e => "Aumentar ".concat(e.fieldLabel),
    numberField: "Campo de n\xfamero"
  },
  "et-EE": y = {
    decrease: e => "V\xe4henda ".concat(e.fieldLabel),
    increase: e => "Suurenda ".concat(e.fieldLabel),
    numberField: "Numbri v\xe4li"
  },
  "fi-FI": b = {
    decrease: e => "V\xe4henn\xe4 ".concat(e.fieldLabel),
    increase: e => "Lis\xe4\xe4 ".concat(e.fieldLabel),
    numberField: "Numerokentt\xe4"
  },
  "fr-FR": x = {
    decrease: e => "Diminuer ".concat(e.fieldLabel),
    increase: e => "Augmenter ".concat(e.fieldLabel),
    numberField: "Champ de nombre"
  },
  "he-IL": S = {
    decrease: e => "הקטן ".concat(e.fieldLabel),
    increase: e => "הגדל ".concat(e.fieldLabel),
    numberField: "שדה מספר"
  },
  "hr-HR": w = {
    decrease: e => "Smanji ".concat(e.fieldLabel),
    increase: e => "Povećaj ".concat(e.fieldLabel),
    numberField: "Polje broja"
  },
  "hu-HU": D = {
    decrease: e => "".concat(e.fieldLabel, " cs\xf6kkent\xe9se"),
    increase: e => "".concat(e.fieldLabel, " n\xf6vel\xe9se"),
    numberField: "Sz\xe1mmező"
  },
  "it-IT": C = {
    decrease: e => "Riduci ".concat(e.fieldLabel),
    increase: e => "Aumenta ".concat(e.fieldLabel),
    numberField: "Campo numero"
  },
  "ja-JP": P = {
    decrease: e => "".concat(e.fieldLabel, "を縮小"),
    increase: e => "".concat(e.fieldLabel, "を拡大"),
    numberField: "数値フィールド"
  },
  "ko-KR": k = {
    decrease: e => "".concat(e.fieldLabel, " 감소"),
    increase: e => "".concat(e.fieldLabel, " 증가"),
    numberField: "번호 필드"
  },
  "lt-LT": E = {
    decrease: e => "Sumažinti ".concat(e.fieldLabel),
    increase: e => "Padidinti ".concat(e.fieldLabel),
    numberField: "Numerio laukas"
  },
  "lv-LV": T = {
    decrease: e => "Samazināšana ".concat(e.fieldLabel),
    increase: e => "Palielināšana ".concat(e.fieldLabel),
    numberField: "Skaitļu lauks"
  },
  "nb-NO": R = {
    decrease: e => "Reduser ".concat(e.fieldLabel),
    increase: e => "\xd8k ".concat(e.fieldLabel),
    numberField: "Tallfelt"
  },
  "nl-NL": M = {
    decrease: e => "".concat(e.fieldLabel, " verlagen"),
    increase: e => "".concat(e.fieldLabel, " verhogen"),
    numberField: "Getalveld"
  },
  "pl-PL": O = {
    decrease: e => "Zmniejsz ".concat(e.fieldLabel),
    increase: e => "Zwiększ ".concat(e.fieldLabel),
    numberField: "Pole numeru"
  },
  "pt-BR": I = {
    decrease: e => "Diminuir ".concat(e.fieldLabel),
    increase: e => "Aumentar ".concat(e.fieldLabel),
    numberField: "Campo de n\xfamero"
  },
  "pt-PT": A = {
    decrease: e => "Diminuir ".concat(e.fieldLabel),
    increase: e => "Aumentar ".concat(e.fieldLabel),
    numberField: "Campo num\xe9rico"
  },
  "ro-RO": N = {
    decrease: e => "Scădere ".concat(e.fieldLabel),
    increase: e => "Creștere ".concat(e.fieldLabel),
    numberField: "C\xe2mp numeric"
  },
  "ru-RU": L = {
    decrease: e => "Уменьшение ".concat(e.fieldLabel),
    increase: e => "Увеличение ".concat(e.fieldLabel),
    numberField: "Числовое поле"
  },
  "sk-SK": j = {
    decrease: e => "Zn\xedžiť ".concat(e.fieldLabel),
    increase: e => "Zv\xfdšiť ".concat(e.fieldLabel),
    numberField: "Č\xedseln\xe9 pole"
  },
  "sl-SI": F = {
    decrease: e => "Upadati ".concat(e.fieldLabel),
    increase: e => "Povečajte ".concat(e.fieldLabel),
    numberField: "Številčno polje"
  },
  "sr-SP": K = {
    decrease: e => "Decrease ".concat(e.fieldLabel),
    increase: e => "Increase ".concat(e.fieldLabel),
    numberField: "Number field"
  },
  "sv-SE": _ = {
    decrease: e => "Minska ".concat(e.fieldLabel),
    increase: e => "\xd6ka ".concat(e.fieldLabel),
    numberField: "Nummerf\xe4lt"
  },
  "tr-TR": z = {
    decrease: e => "".concat(e.fieldLabel, " azalt"),
    increase: e => "".concat(e.fieldLabel, " arttır"),
    numberField: "Sayı alanı"
  },
  "uk-UA": V = {
    decrease: e => "Зменшити ".concat(e.fieldLabel),
    increase: e => "Збільшити ".concat(e.fieldLabel),
    numberField: "Поле номера"
  },
  "zh-CN": B = {
    decrease: e => "降低 ".concat(e.fieldLabel),
    increase: e => "提高 ".concat(e.fieldLabel),
    numberField: "数字字段"
  },
  "zh-TW": U = {
    decrease: e => "縮小 ".concat(e.fieldLabel),
    increase: e => "放大 ".concat(e.fieldLabel),
    numberField: "數字欄位"
  }
}