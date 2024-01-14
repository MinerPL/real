"use strict";
n.r(t), n.d(t, {
  useMenuTrigger: function() {
    return W
  },
  useMenu: function() {
    return Z
  },
  useMenuItem: function() {
    return Y
  },
  useMenuSection: function() {
    return X
  }
}), n("222007");
var r = n("290895"),
  o = n("181551"),
  a = n("495912"),
  i = n("439991"),
  s = n("628364"),
  c = n("780095"),
  l = n("872834"),
  u = n("884691"),
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
  U = {},
  H = {},
  G = {};

function W(e, t, n) {
  var s;
  let {
    type: c = "menu",
    isDisabled: l,
    trigger: u = "press"
  } = e, p = (0, r.useId)(), {
    triggerProps: f,
    overlayProps: m
  } = (0, i.useOverlayTrigger)({
    type: c
  }, t, n);
  let h = (0, o.useLocalizedStringFormatter)((s = d) && s.__esModule ? s.default : s),
    {
      longPressProps: g
    } = (0, a.useLongPress)({
      isDisabled: l || "longPress" !== u,
      accessibilityDescription: h.format("longPressMessage"),
      onLongPressStart() {
        t.close()
      },
      onLongPress() {
        t.open("first")
      }
    });
  return delete f.onPress, {
    menuTriggerProps: {
      ...f,
      ..."press" === u ? {
        onPressStart(e) {
          "touch" !== e.pointerType && "keyboard" !== e.pointerType && !l && t.toggle("virtual" === e.pointerType ? "first" : null)
        },
        onPress(e) {
          "touch" === e.pointerType && !l && t.toggle()
        }
      } : g,
      id: p,
      onKeyDown: e => {
        if (!l) {
          if (("longPress" !== u || e.altKey) && n && n.current) switch (e.key) {
            case "Enter":
            case " ":
              if ("longPress" === u) return;
            case "ArrowDown":
              !("continuePropagation" in e) && e.stopPropagation(), e.preventDefault(), t.toggle("first");
              break;
            case "ArrowUp":
              !("continuePropagation" in e) && e.stopPropagation(), e.preventDefault(), t.toggle("last");
              break;
            default:
              "continuePropagation" in e && e.continuePropagation()
          }
        }
      }
    },
    menuProps: {
      ...m,
      "aria-labelledby": p,
      autoFocus: t.focusStrategy || !0,
      onClose: t.close
    }
  }
}
d = {
  "ar-AE": p = {
    longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
  },
  "bg-BG": f = {
    longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
  },
  "cs-CZ": m = {
    longPressMessage: "Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + šipka dolů otevřete nab\xeddku"
  },
  "da-DK": h = {
    longPressMessage: "Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen"
  },
  "de-DE": g = {
    longPressMessage: "Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen"
  },
  "el-GR": v = {
    longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
  },
  "en-US": y = {
    longPressMessage: "Long press or press Alt + ArrowDown to open menu"
  },
  "es-ES": b = {
    longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa"
  },
  "et-EE": x = {
    longPressMessage: "Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool"
  },
  "fi-FI": S = {
    longPressMessage: "Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli"
  },
  "fr-FR": w = {
    longPressMessage: "Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu."
  },
  "he-IL": D = {
    longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
  },
  "hr-HR": C = {
    longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
  },
  "hu-HU": P = {
    longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz"
  },
  "it-IT": k = {
    longPressMessage: "Premere a lungo o premere Alt + Freccia gi\xf9 per aprire il menu"
  },
  "ja-JP": E = {
    longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
  },
  "ko-KR": T = {
    longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
  },
  "lt-LT": R = {
    longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
  },
  "lv-LV": M = {
    longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
  },
  "nb-NO": O = {
    longPressMessage: "Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen"
  },
  "nl-NL": I = {
    longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
  },
  "pl-PL": A = {
    longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w d\xf3ł, aby otworzyć menu"
  },
  "pt-BR": N = {
    longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
  },
  "pt-PT": L = {
    longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
  },
  "ro-RO": j = {
    longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată \xeen jos pentru a deschide meniul"
  },
  "ru-RU": F = {
    longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
  },
  "sk-SK": K = {
    longPressMessage: "Ponuku otvor\xedte dlh\xfdm stlačen\xedm alebo stlačen\xedm kl\xe1vesu Alt + kl\xe1vesu so š\xedpkou nadol"
  },
  "sl-SI": _ = {
    longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
  },
  "sr-SP": z = {
    longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
  },
  "sv-SE": V = {
    longPressMessage: "H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn"
  },
  "tr-TR": B = {
    longPressMessage: "Men\xfcy\xfc a\xe7mak i\xe7in uzun basın veya Alt + Aşağı Ok tuşuna basın"
  },
  "uk-UA": U = {
    longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
  },
  "zh-CN": H = {
    longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
  },
  "zh-TW": G = {
    longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
  }
};
let q = new WeakMap;

function Z(e, t, n) {
  let {
    shouldFocusWrap: o = !0,
    ...a
  } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let i = (0, r.filterDOMProps)(e, {
      labelable: !0
    }),
    {
      listProps: c
    } = (0, s.useSelectableList)({
      ...a,
      ref: n,
      selectionManager: t.selectionManager,
      collection: t.collection,
      disabledKeys: t.disabledKeys,
      shouldFocusWrap: o
    });
  return q.set(t, {
    onClose: e.onClose,
    onAction: e.onAction
  }), {
    menuProps: (0, r.mergeProps)(i, {
      role: "menu",
      "aria-hidden": t.expandedKeys.size > 0 || void 0,
      ...c,
      onKeyDown: e => {
        "Escape" !== e.key && c.onKeyDown(e)
      }
    })
  }
}

function Y(e, t, n) {
  var i, d;
  let {
    key: p,
    closeOnSelect: f,
    isVirtualized: m,
    "aria-haspopup": h
  } = e, {
    direction: g
  } = (0, o.useLocale)(), v = !!h, y = t.expandedKeys.has(p), b = null !== (i = e.isDisabled) && void 0 !== i ? i : t.disabledKeys.has(p), x = null !== (d = e.isSelected) && void 0 !== d ? d : t.selectionManager.isSelected(p), S = (0, u.useRef)(), w = (0, u.useCallback)(() => {
    S.current && (clearTimeout(S.current), S.current = void 0)
  }, [S]), D = (0, r.useEffectEvent)(() => {
    w(), t.setExpandedKeys(new Set([p]))
  });
  (0, r.useLayoutEffect)(() => () => w(), [w]);
  let C = q.get(t),
    P = e.onClose || C.onClose,
    k = (0, u.useCallback)(() => {
      D()
    }, []),
    E = v ? k : e.onAction || C.onAction,
    T = "menuitem";
  "single" === t.selectionManager.selectionMode ? T = "menuitemradio" : "multiple" === t.selectionManager.selectionMode && (T = "menuitemcheckbox");
  let R = (0, r.useSlotId)(),
    M = (0, r.useSlotId)(),
    O = (0, r.useSlotId)(),
    I = {
      "aria-disabled": b || void 0,
      role: T,
      "aria-label": e["aria-label"],
      "aria-labelledby": R,
      "aria-describedby": [M, O].filter(Boolean).join(" ") || void 0
    };
  "none" !== t.selectionManager.selectionMode && (I["aria-checked"] = x), m && (I["aria-posinset"] = t.collection.getItem(p).index, I["aria-setsize"] = (0, l.getItemCount)(t.collection)), null != h && (I["aria-haspopup"] = h, I["aria-expanded"] = y ? "true" : "false");
  let {
    itemProps: A,
    isFocused: N
  } = (0, s.useSelectableItem)({
    selectionManager: t.selectionManager,
    key: p,
    ref: n,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0
  }), {
    pressProps: L,
    isPressed: j
  } = (0, a.usePress)({
    onPressStart: e => {
      "keyboard" === e.pointerType && E && E(p)
    },
    onPressUp: e => {
      "keyboard" !== e.pointerType && (E && E(p), !v && P && (null != f ? f : "multiple" !== t.selectionManager.selectionMode) && P())
    },
    isDisabled: b || v && t.expandedKeys.has(p)
  }), {
    hoverProps: F
  } = (0, a.useHover)({
    isDisabled: b,
    onHoverStart() {
      !(0, a.isFocusVisible)() && !(v && t.expandedKeys.has(p)) && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(p), p === t.selectionManager.focusedKey && t.selectionManager.isFocused && document.activeElement !== n.current && (0, c.focusSafely)(n.current))
    },
    onHoverChange: e => {
      e && v && !t.expandedKeys.has(p) ? !S.current && (S.current = setTimeout(() => {
        D()
      }, 200)) : !e && w()
    }
  }), {
    keyboardProps: K
  } = (0, a.useKeyboard)({
    onKeyDown: e => {
      if (e.repeat) {
        e.continuePropagation();
        return
      }
      switch (e.key) {
        case " ":
          !b && "none" === t.selectionManager.selectionMode && !v && !1 !== f && P && P();
          break;
        case "Enter":
          !b && !1 !== f && !v && P && P();
          break;
        case "ArrowRight":
          v && "ltr" === g ? D() : e.continuePropagation();
          break;
        case "ArrowLeft":
          v && "rtl" === g ? D() : e.continuePropagation();
          break;
        default:
          e.continuePropagation()
      }
    }
  });
  return {
    menuItemProps: {
      ...I,
      ...(0, r.mergeProps)(A, L, F, K)
    },
    labelProps: {
      id: R
    },
    descriptionProps: {
      id: M
    },
    keyboardShortcutProps: {
      id: O
    },
    isFocused: N,
    isSelected: x,
    isPressed: j,
    isDisabled: b
  }
}

function X(e) {
  let {
    heading: t,
    "aria-label": n
  } = e, o = (0, r.useId)();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: t ? {
      id: o,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": t ? o : void 0
    }
  }
}