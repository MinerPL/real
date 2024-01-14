"use strict";
n.r(t), n.d(t, {
  GridKeyboardDelegate: function() {
    return f
  },
  useGrid: function() {
    return Q
  },
  useGridRowGroup: function() {
    return ee
  },
  useGridRow: function() {
    return et
  },
  useGridCell: function() {
    return en
  },
  useGridSelectionCheckbox: function() {
    return eo
  },
  useHighlightSelectionDescription: function() {
    return $
  },
  useGridSelectionAnnouncement: function() {
    return X
  }
}), n("222007"), n("424973");
var r = n("872834"),
  o = n("828761"),
  a = n("290895"),
  i = n("884691"),
  s = n("181551"),
  c = n("780095"),
  l = n("628364"),
  u = n("362561"),
  d = n("495912");

function p(e) {
  return e && e.__esModule ? e.default : e
}
class f {
  isCell(e) {
    return "cell" === e.type
  }
  isRow(e) {
    return "row" === e.type || "item" === e.type
  }
  findPreviousKey(e, t) {
    let n = null != e ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
    for (; null != n;) {
      let e = this.collection.getItem(n);
      if (!this.disabledKeys.has(n) && (!t || t(e))) return n;
      n = this.collection.getKeyBefore(n)
    }
  }
  findNextKey(e, t) {
    let n = null != e ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
    for (; null != n;) {
      let e = this.collection.getItem(n);
      if (!this.disabledKeys.has(n) && (!t || t(e))) return n;
      n = this.collection.getKeyAfter(n)
    }
  }
  getKeyBelow(e) {
    let t = this.collection.getItem(e);
    if (t && (this.isCell(t) && (e = t.parentKey), null != (e = this.findNextKey(e)))) {
      if (this.isCell(t)) {
        let n = this.collection.getItem(e);
        return (0, r.getNthItem)((0, r.getChildNodes)(n, this.collection), t.index).key
      }
      if ("row" === this.focusMode) return e
    }
  }
  getKeyAbove(e) {
    let t = this.collection.getItem(e);
    if (t && (this.isCell(t) && (e = t.parentKey), null != (e = this.findPreviousKey(e)))) {
      if (this.isCell(t)) {
        let n = this.collection.getItem(e);
        return (0, r.getNthItem)((0, r.getChildNodes)(n, this.collection), t.index).key
      }
      if ("row" === this.focusMode) return e
    }
  }
  getKeyRightOf(e) {
    let t = this.collection.getItem(e);
    if (t) {
      if (this.isRow(t)) {
        let e = (0, r.getChildNodes)(t, this.collection);
        return "rtl" === this.direction ? (0, r.getLastItem)(e).key : (0, r.getFirstItem)(e).key
      }
      if (this.isCell(t)) {
        let n = this.collection.getItem(t.parentKey),
          o = (0, r.getChildNodes)(n, this.collection),
          a = "rtl" === this.direction ? (0, r.getNthItem)(o, t.index - 1) : (0, r.getNthItem)(o, t.index + 1);
        return a ? a.key : "row" === this.focusMode ? t.parentKey : "rtl" === this.direction ? this.getFirstKey(e) : this.getLastKey(e)
      }
    }
  }
  getKeyLeftOf(e) {
    let t = this.collection.getItem(e);
    if (t) {
      if (this.isRow(t)) {
        let e = (0, r.getChildNodes)(t, this.collection);
        return "rtl" === this.direction ? (0, r.getFirstItem)(e).key : (0, r.getLastItem)(e).key
      }
      if (this.isCell(t)) {
        let n = this.collection.getItem(t.parentKey),
          o = (0, r.getChildNodes)(n, this.collection),
          a = "rtl" === this.direction ? (0, r.getNthItem)(o, t.index + 1) : (0, r.getNthItem)(o, t.index - 1);
        return a ? a.key : "row" === this.focusMode ? t.parentKey : "rtl" === this.direction ? this.getLastKey(e) : this.getFirstKey(e)
      }
    }
  }
  getFirstKey(e, t) {
    let n;
    if (null != e) {
      if (!(n = this.collection.getItem(e))) return;
      if (this.isCell(n) && !t) {
        let e = this.collection.getItem(n.parentKey);
        return (0, r.getFirstItem)((0, r.getChildNodes)(e, this.collection)).key
      }
    }
    if (null != (e = this.findNextKey()) && n && this.isCell(n) && t || "cell" === this.focusMode) {
      let t = this.collection.getItem(e);
      e = (0, r.getFirstItem)((0, r.getChildNodes)(t, this.collection)).key
    }
    return e
  }
  getLastKey(e, t) {
    let n;
    if (null != e) {
      if (!(n = this.collection.getItem(e))) return;
      if (this.isCell(n) && !t) {
        let e = this.collection.getItem(n.parentKey),
          t = (0, r.getChildNodes)(e, this.collection);
        return (0, r.getLastItem)(t).key
      }
    }
    if (null != (e = this.findPreviousKey()) && n && this.isCell(n) && t || "cell" === this.focusMode) {
      let t = this.collection.getItem(e),
        n = (0, r.getChildNodes)(t, this.collection);
      e = (0, r.getLastItem)(n).key
    }
    return e
  }
  getItem(e) {
    return this.ref.current.querySelector('[data-key="'.concat(e, '"]'))
  }
  getItemRect(e) {
    var t;
    if (this.layout) return null === (t = this.layout.getLayoutInfo(e)) || void 0 === t ? void 0 : t.rect;
    let n = this.getItem(e);
    if (n) return new o.Rect(n.offsetLeft, n.offsetTop, n.offsetWidth, n.offsetHeight)
  }
  getPageHeight() {
    var e, t, n;
    return this.layout ? null === (e = this.layout.virtualizer) || void 0 === e ? void 0 : e.visibleRect.height : null === (t = this.ref) || void 0 === t ? void 0 : null === (n = t.current) || void 0 === n ? void 0 : n.offsetHeight
  }
  getContentHeight() {
    var e, t;
    return this.layout ? this.layout.getContentSize().height : null === (e = this.ref) || void 0 === e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.scrollHeight
  }
  getKeyPageAbove(e) {
    let t = this.getItemRect(e);
    if (!t) return null;
    let n = Math.max(0, t.maxY - this.getPageHeight());
    for (; t && t.y > n;) e = this.getKeyAbove(e), t = this.getItemRect(e);
    return e
  }
  getKeyPageBelow(e) {
    let t = this.getItemRect(e);
    if (!t) return null;
    let n = this.getPageHeight(),
      r = Math.min(this.getContentHeight(), t.y + n);
    for (; t && t.maxY < r;) {
      let n = this.getKeyBelow(e);
      t = this.getItemRect(n), null != n && (e = n)
    }
    return e
  }
  getKeyForSearch(e, t) {
    if (!this.collator) return null;
    let n = this.collection,
      o = null != t ? t : this.getFirstKey(),
      a = n.getItem(o);
    "cell" === a.type && (o = a.parentKey);
    let i = !1;
    for (; null != o;) {
      let t = n.getItem(o);
      if (t.textValue) {
        let n = t.textValue.slice(0, e.length);
        if (0 === this.collator.compare(n, e)) {
          if (this.isRow(t) && "cell" === this.focusMode) return (0, r.getFirstItem)((0, r.getChildNodes)(t, this.collection)).key;
          return t.key
        }
      }
      null == (o = this.findNextKey(o)) && !i && (o = this.getFirstKey(), i = !0)
    }
    return null
  }
  constructor(e) {
    this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.ref = e.ref, this.direction = e.direction, this.collator = e.collator, this.layout = e.layout, this.focusMode = e.focusMode || "row"
  }
}
let m = new WeakMap;
var h = {},
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
  G = {},
  W = {},
  q = {},
  Z = {},
  Y = {};

function X(e, t) {
  var n;
  let {
    getRowText: r = e => {
      var r, o, a;
      return null !== (n = null === (o = (r = t.collection).getTextValue) || void 0 === o ? void 0 : o.call(r, e)) && void 0 !== n ? n : null === (a = t.collection.getItem(e)) || void 0 === a ? void 0 : a.textValue
    }
  } = e, o = (0, s.useLocalizedStringFormatter)(p(h)), c = t.selectionManager.rawSelection, l = (0, i.useRef)(c);
  (0, a.useUpdateEffect)(() => {
    var e;
    if (!t.selectionManager.isFocused) {
      l.current = c;
      return
    }
    let n = J(c, l.current),
      a = J(l.current, c),
      i = "replace" === t.selectionManager.selectionBehavior,
      s = [];
    if (1 === t.selectionManager.selectedKeys.size && i) {
      if (t.collection.getItem(t.selectionManager.selectedKeys.keys().next().value)) {
        let e = r(t.selectionManager.selectedKeys.keys().next().value);
        e && s.push(o.format("selectedItem", {
          item: e
        }))
      }
    } else if (1 === n.size && 0 === a.size) {
      let e = r(n.keys().next().value);
      e && s.push(o.format("selectedItem", {
        item: e
      }))
    } else if (1 === a.size && 0 === n.size && t.collection.getItem(a.keys().next().value)) {
      let e = r(a.keys().next().value);
      e && s.push(o.format("deselectedItem", {
        item: e
      }))
    }
    "multiple" === t.selectionManager.selectionMode && (0 === s.length || "all" === c || c.size > 1 || "all" === l.current || (null === (e = l.current) || void 0 === e ? void 0 : e.size) > 1) && s.push("all" === c ? o.format("selectedAll") : o.format("selectedCount", {
      count: c.size
    })), s.length > 0 && (0, u.announce)(s.join(" ")), l.current = c
  }, [c])
}

function J(e, t) {
  let n = new Set;
  if ("all" === e || "all" === t) return n;
  for (let r of e.keys()) !t.has(r) && n.add(r);
  return n
}

function $(e) {
  let t = (0, s.useLocalizedStringFormatter)(p(h)),
    n = (0, d.useInteractionModality)(),
    r = ("pointer" === n || "virtual" === n || null == n) && "undefined" != typeof window && "ontouchstart" in window,
    o = (0, i.useMemo)(() => {
      let n, o = e.selectionManager.selectionMode,
        a = e.selectionManager.selectionBehavior;
      return r && (n = t.format("longPressToSelect")), "replace" === a && "none" !== o && e.hasItemActions ? n : void 0
    }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, t, r]);
  return (0, a.useDescription)(o)
}

function Q(e, t, n) {
  let {
    isVirtualized: r,
    keyboardDelegate: o,
    focusMode: u,
    scrollRef: d,
    getRowText: p,
    onRowAction: h,
    onCellAction: g
  } = e, {
    selectionManager: v
  } = t;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let y = (0, s.useCollator)({
      usage: "search",
      sensitivity: "base"
    }),
    {
      direction: b
    } = (0, s.useLocale)(),
    x = t.selectionManager.disabledBehavior,
    S = (0, i.useMemo)(() => o || new f({
      collection: t.collection,
      disabledKeys: "selection" === x ? new Set : t.disabledKeys,
      ref: n,
      direction: b,
      collator: y,
      focusMode: u
    }), [o, t.collection, t.disabledKeys, x, n, b, y, u]),
    {
      collectionProps: w
    } = (0, l.useSelectableCollection)({
      ref: n,
      selectionManager: v,
      keyboardDelegate: S,
      isVirtualized: r,
      scrollRef: d
    }),
    D = (0, a.useId)(e.id);
  m.set(t, {
    keyboardDelegate: S,
    actions: {
      onRowAction: h,
      onCellAction: g
    }
  });
  let C = $({
      selectionManager: v,
      hasItemActions: !!(h || g)
    }),
    P = (0, a.filterDOMProps)(e, {
      labelable: !0
    }),
    k = (0, i.useCallback)(e => {
      if (v.isFocused) {
        !e.currentTarget.contains(e.target) && v.setFocused(!1);
        return
      }
      e.currentTarget.contains(e.target) && v.setFocused(!0)
    }, [v]),
    E = (0, i.useMemo)(() => ({
      onBlur: w.onBlur,
      onFocus: k
    }), [k, w.onBlur]),
    T = (0, c.useHasTabbableChild)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    R = (0, a.mergeProps)(P, {
      role: "grid",
      id: D,
      "aria-multiselectable": "multiple" === v.selectionMode ? "true" : void 0
    }, t.isKeyboardNavigationDisabled ? E : w, 0 === t.collection.size && {
      tabIndex: T ? -1 : 0
    }, C);
  return r && (R["aria-rowcount"] = t.collection.size, R["aria-colcount"] = t.collection.columnCount), X({
    getRowText: p
  }, t), {
    gridProps: R
  }
}

function ee() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  }
}

function et(e, t, n) {
  let {
    node: r,
    isVirtualized: o,
    shouldSelectOnPressUp: a,
    onAction: i
  } = e, {
    actions: {
      onRowAction: s
    }
  } = m.get(t), {
    itemProps: c,
    ...u
  } = (0, l.useSelectableItem)({
    selectionManager: t.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: o,
    shouldSelectOnPressUp: a,
    onAction: s ? () => s(r.key) : i,
    isDisabled: 0 === t.collection.size
  }), d = t.selectionManager.isSelected(r.key), p = {
    role: "row",
    "aria-selected": "none" !== t.selectionManager.selectionMode ? d : void 0,
    "aria-disabled": u.isDisabled || void 0,
    ...c
  };
  return o && (p["aria-rowindex"] = r.index + 1), {
    rowProps: p,
    ...u
  }
}

function en(e, t, n) {
  var r;
  let {
    node: o,
    isVirtualized: u,
    focusMode: p = "child",
    shouldSelectOnPressUp: f,
    onAction: h
  } = e, {
    direction: g
  } = (0, s.useLocale)(), {
    keyboardDelegate: v,
    actions: {
      onCellAction: y
    }
  } = m.get(t), b = (0, i.useRef)(null), x = () => {
    let e = (0, c.getFocusableTreeWalker)(n.current);
    if ("child" === p) {
      if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
      let r = "last" === t.selectionManager.childFocusStrategy ? er(e) : e.firstChild();
      if (r) {
        (0, c.focusSafely)(r);
        return
      }
    }(null != b.current && o.key !== b.current || !n.current.contains(document.activeElement)) && (0, c.focusSafely)(n.current)
  }, {
    itemProps: S,
    isPressed: w
  } = (0, l.useSelectableItem)({
    selectionManager: t.selectionManager,
    key: o.key,
    ref: n,
    isVirtualized: u,
    focus: x,
    shouldSelectOnPressUp: f,
    onAction: y ? () => y(o.key) : h,
    isDisabled: 0 === t.collection.size
  }), D = (0, a.mergeProps)(S, {
    role: "gridcell",
    onKeyDownCapture: e => {
      if (!e.currentTarget.contains(e.target) || t.isKeyboardNavigationDisabled) return;
      let r = (0, c.getFocusableTreeWalker)(n.current);
      switch (r.currentNode = document.activeElement, e.key) {
        case "ArrowLeft": {
          let t = "rtl" === g ? r.nextNode() : r.previousNode();
          if ("child" === p && t === n.current && (t = null), t) e.preventDefault(), e.stopPropagation(), (0, c.focusSafely)(t), (0, a.scrollIntoViewport)(t, {
            containingElement: (0, a.getScrollParent)(n.current)
          });
          else {
            if (v.getKeyLeftOf(o.key) !== o.key) break;
            e.preventDefault(), e.stopPropagation(), "cell" === p && "rtl" === g ? ((0, c.focusSafely)(n.current), (0, a.scrollIntoViewport)(n.current, {
              containingElement: (0, a.getScrollParent)(n.current)
            })) : (r.currentNode = n.current, (t = "rtl" === g ? r.firstChild() : er(r)) && ((0, c.focusSafely)(t), (0, a.scrollIntoViewport)(t, {
              containingElement: (0, a.getScrollParent)(n.current)
            })))
          }
          break
        }
        case "ArrowRight": {
          let t = "rtl" === g ? r.previousNode() : r.nextNode();
          if ("child" === p && t === n.current && (t = null), t) e.preventDefault(), e.stopPropagation(), (0, c.focusSafely)(t), (0, a.scrollIntoViewport)(t, {
            containingElement: (0, a.getScrollParent)(n.current)
          });
          else {
            if (v.getKeyRightOf(o.key) !== o.key) break;
            e.preventDefault(), e.stopPropagation(), "cell" === p && "ltr" === g ? ((0, c.focusSafely)(n.current), (0, a.scrollIntoViewport)(n.current, {
              containingElement: (0, a.getScrollParent)(n.current)
            })) : (r.currentNode = n.current, (t = "rtl" === g ? er(r) : r.firstChild()) && ((0, c.focusSafely)(t), (0, a.scrollIntoViewport)(t, {
              containingElement: (0, a.getScrollParent)(n.current)
            })))
          }
          break
        }
        case "ArrowUp":
        case "ArrowDown":
          !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)))
      }
    },
    onFocus: e => {
      if (b.current = o.key, e.target !== n.current) {
        !(0, d.isFocusVisible)() && t.selectionManager.setFocusedKey(o.key);
        return
      }
      requestAnimationFrame(() => {
        "child" === p && document.activeElement === n.current && x()
      })
    }
  });
  return u && (D["aria-colindex"] = (null !== (r = o.colIndex) && void 0 !== r ? r : o.index) + 1), f && null != D.tabIndex && null == D.onPointerDown && (D.onPointerDown = e => {
    let t = e.currentTarget,
      n = t.getAttribute("tabindex");
    t.removeAttribute("tabindex"), requestAnimationFrame(() => {
      t.setAttribute("tabindex", n)
    })
  }), {
    gridCellProps: D,
    isPressed: w
  }
}

function er(e) {
  let t, n;
  do(n = e.lastChild()) && (t = n); while (n);
  return t
}

function eo(e, t) {
  let {
    key: n
  } = e, r = t.selectionManager, o = (0, a.useId)(), i = !t.selectionManager.canSelectItem(n), c = t.selectionManager.isSelected(n), l = (0, s.useLocalizedStringFormatter)(p(h));
  return {
    checkboxProps: {
      id: o,
      "aria-label": l.format("select"),
      isSelected: c,
      isDisabled: i,
      onChange: () => r.select(n)
    }
  }
}
h = {
  "ar-AE": g = {
    deselectedItem: e => "".concat(e.item, " غير المحدد"),
    longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
    select: "تحديد",
    selectedAll: "جميع العناصر المحددة.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "لم يتم تحديد عناصر",
      one: () => "".concat(t.number(e.count), " عنصر محدد"),
      other: () => "".concat(t.number(e.count), " عنصر محدد")
    }), "."),
    selectedItem: e => "".concat(e.item, " المحدد")
  },
  "bg-BG": v = {
    deselectedItem: e => "".concat(e.item, " не е избран."),
    longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
    select: "Изберете",
    selectedAll: "Всички елементи са избрани.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Няма избрани елементи",
      one: () => "".concat(t.number(e.count), " избран елемент"),
      other: () => "".concat(t.number(e.count), " избрани елементи")
    }), "."),
    selectedItem: e => "".concat(e.item, " избран.")
  },
  "cs-CZ": y = {
    deselectedItem: e => "Položka ".concat(e.item, " nen\xed vybr\xe1na."),
    longPressToSelect: "Dlouh\xfdm stisknut\xedm přejdete do režimu v\xfdběru.",
    select: "Vybrat",
    selectedAll: "Vybr\xe1ny všechny položky.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nevybr\xe1ny ž\xe1dn\xe9 položky",
      one: () => "Vybr\xe1na ".concat(t.number(e.count), " položka"),
      other: () => "Vybr\xe1no ".concat(t.number(e.count), " položek")
    }), "."),
    selectedItem: e => "Vybr\xe1na položka ".concat(e.item, ".")
  },
  "da-DK": b = {
    deselectedItem: e => "".concat(e.item, " ikke valgt."),
    longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
    select: "V\xe6lg",
    selectedAll: "Alle elementer valgt.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Ingen elementer valgt",
      one: () => "".concat(t.number(e.count), " element valgt"),
      other: () => "".concat(t.number(e.count), " elementer valgt")
    }), "."),
    selectedItem: e => "".concat(e.item, " valgt.")
  },
  "de-DE": x = {
    deselectedItem: e => "".concat(e.item, " nicht ausgew\xe4hlt."),
    longPressToSelect: "Gedr\xfcckt halten, um Auswahlmodus zu \xf6ffnen.",
    select: "Ausw\xe4hlen",
    selectedAll: "Alle Elemente ausgew\xe4hlt.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Keine Elemente ausgew\xe4hlt",
      one: () => "".concat(t.number(e.count), " Element ausgew\xe4hlt"),
      other: () => "".concat(t.number(e.count), " Elemente ausgew\xe4hlt")
    }), "."),
    selectedItem: e => "".concat(e.item, " ausgew\xe4hlt.")
  },
  "el-GR": S = {
    deselectedItem: e => "Δεν επιλέχθηκε το στοιχείο ".concat(e.item, "."),
    longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
    select: "Επιλογή",
    selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Δεν επιλέχθηκαν στοιχεία",
      one: () => "Επιλέχθηκε ".concat(t.number(e.count), " στοιχείο"),
      other: () => "Επιλέχθηκαν ".concat(t.number(e.count), " στοιχεία")
    }), "."),
    selectedItem: e => "Επιλέχθηκε το στοιχείο ".concat(e.item, ".")
  },
  "en-US": w = {
    deselectedItem: e => "".concat(e.item, " not selected."),
    select: "Select",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "No items selected",
      one: () => "".concat(t.number(e.count), " item selected"),
      other: () => "".concat(t.number(e.count), " items selected")
    }), "."),
    selectedAll: "All items selected.",
    selectedItem: e => "".concat(e.item, " selected."),
    longPressToSelect: "Long press to enter selection mode."
  },
  "es-ES": D = {
    deselectedItem: e => "".concat(e.item, " no seleccionado."),
    longPressToSelect: "Mantenga pulsado para abrir el modo de selecci\xf3n.",
    select: "Seleccionar",
    selectedAll: "Todos los elementos seleccionados.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Ning\xfan elemento seleccionado",
      one: () => "".concat(t.number(e.count), " elemento seleccionado"),
      other: () => "".concat(t.number(e.count), " elementos seleccionados")
    }), "."),
    selectedItem: e => "".concat(e.item, " seleccionado.")
  },
  "et-EE": C = {
    deselectedItem: e => "".concat(e.item, " pole valitud."),
    longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
    select: "Vali",
    selectedAll: "K\xf5ik \xfcksused valitud.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "\xdcksusi pole valitud",
      one: () => "".concat(t.number(e.count), " \xfcksus valitud"),
      other: () => "".concat(t.number(e.count), " \xfcksust valitud")
    }), "."),
    selectedItem: e => "".concat(e.item, " valitud.")
  },
  "fi-FI": P = {
    deselectedItem: e => "Kohdetta ".concat(e.item, " ei valittu."),
    longPressToSelect: "Siirry valintatilaan painamalla pitk\xe4\xe4n.",
    select: "Valitse",
    selectedAll: "Kaikki kohteet valittu.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Ei yht\xe4\xe4n kohdetta valittu",
      one: () => "".concat(t.number(e.count), " kohde valittu"),
      other: () => "".concat(t.number(e.count), " kohdetta valittu")
    }), "."),
    selectedItem: e => "".concat(e.item, " valittu.")
  },
  "fr-FR": k = {
    deselectedItem: e => "".concat(e.item, " non s\xe9lectionn\xe9."),
    longPressToSelect: "Appuyez de mani\xe8re prolong\xe9e pour passer en mode de s\xe9lection.",
    select: "S\xe9lectionner",
    selectedAll: "Tous les \xe9l\xe9ments s\xe9lectionn\xe9s.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Aucun \xe9l\xe9ment s\xe9lectionn\xe9",
      one: () => "".concat(t.number(e.count), " \xe9l\xe9ment s\xe9lectionn\xe9"),
      other: () => "".concat(t.number(e.count), " \xe9l\xe9ments s\xe9lectionn\xe9s")
    }), "."),
    selectedItem: e => "".concat(e.item, " s\xe9lectionn\xe9.")
  },
  "he-IL": E = {
    deselectedItem: e => "".concat(e.item, " לא נבחר."),
    longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
    select: "בחר",
    selectedAll: "כל הפריטים נבחרו.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "לא נבחרו פריטים",
      one: () => "פריט ".concat(t.number(e.count), " נבחר"),
      other: () => "".concat(t.number(e.count), " פריטים נבחרו")
    }), "."),
    selectedItem: e => "".concat(e.item, " נבחר.")
  },
  "hr-HR": T = {
    deselectedItem: e => "Stavka ".concat(e.item, " nije odabrana."),
    longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
    select: "Odaberite",
    selectedAll: "Odabrane su sve stavke.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nije odabrana nijedna stavka",
      one: () => "Odabrana je ".concat(t.number(e.count), " stavka"),
      other: () => "Odabrano je ".concat(t.number(e.count), " stavki")
    }), "."),
    selectedItem: e => "Stavka ".concat(e.item, " je odabrana.")
  },
  "hu-HU": R = {
    deselectedItem: e => "".concat(e.item, " nincs kijel\xf6lve."),
    longPressToSelect: "Nyomja hosszan a kijel\xf6l\xe9shez.",
    select: "Kijel\xf6l\xe9s",
    selectedAll: "Az \xf6sszes elem kijel\xf6lve.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Egy elem sincs kijel\xf6lve",
      one: () => "".concat(t.number(e.count), " elem kijel\xf6lve"),
      other: () => "".concat(t.number(e.count), " elem kijel\xf6lve")
    }), "."),
    selectedItem: e => "".concat(e.item, " kijel\xf6lve.")
  },
  "it-IT": M = {
    deselectedItem: e => "".concat(e.item, " non selezionato."),
    longPressToSelect: "Premi a lungo per passare alla modalit\xe0 di selezione.",
    select: "Seleziona",
    selectedAll: "Tutti gli elementi selezionati.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nessun elemento selezionato",
      one: () => "".concat(t.number(e.count), " elemento selezionato"),
      other: () => "".concat(t.number(e.count), " elementi selezionati")
    }), "."),
    selectedItem: e => "".concat(e.item, " selezionato.")
  },
  "ja-JP": O = {
    deselectedItem: e => "".concat(e.item, " が選択されていません。"),
    longPressToSelect: "長押しして選択モードを開きます。",
    select: "選択",
    selectedAll: "すべての項目を選択しました。",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "項目が選択されていません",
      one: () => "".concat(t.number(e.count), " 項目を選択しました"),
      other: () => "".concat(t.number(e.count), " 項目を選択しました")
    }), "。"),
    selectedItem: e => "".concat(e.item, " を選択しました。")
  },
  "ko-KR": I = {
    deselectedItem: e => "".concat(e.item, "이(가) 선택되지 않았습니다."),
    longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
    select: "선택",
    selectedAll: "모든 항목이 선택되었습니다.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "선택된 항목이 없습니다",
      one: () => "".concat(t.number(e.count), "개 항목이 선택되었습니다"),
      other: () => "".concat(t.number(e.count), "개 항목이 선택되었습니다")
    }), "."),
    selectedItem: e => "".concat(e.item, "이(가) 선택되었습니다.")
  },
  "lt-LT": A = {
    deselectedItem: e => "".concat(e.item, " nepasirinkta."),
    longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
    select: "Pasirinkti",
    selectedAll: "Pasirinkti visi elementai.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nepasirinktas nė vienas elementas",
      one: () => "Pasirinktas ".concat(t.number(e.count), " elementas"),
      other: () => "Pasirinkta elementų: ".concat(t.number(e.count))
    }), "."),
    selectedItem: e => "Pasirinkta: ".concat(e.item, ".")
  },
  "lv-LV": N = {
    deselectedItem: e => "Vienums ".concat(e.item, " nav atlasīts."),
    longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
    select: "Atlasīt",
    selectedAll: "Atlasīti visi vienumi.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nav atlasīts neviens vienums",
      one: () => "Atlasīto vienumu skaits: ".concat(t.number(e.count)),
      other: () => "Atlasīto vienumu skaits: ".concat(t.number(e.count))
    }), "."),
    selectedItem: e => "Atlasīts vienums ".concat(e.item, ".")
  },
  "nb-NO": L = {
    deselectedItem: e => "".concat(e.item, " er ikke valgt."),
    longPressToSelect: "Bruk et langt trykk for \xe5 g\xe5 inn i valgmodus.",
    select: "Velg",
    selectedAll: "Alle elementer er valgt.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Ingen elementer er valgt",
      one: () => "".concat(t.number(e.count), " element er valgt"),
      other: () => "".concat(t.number(e.count), " elementer er valgt")
    }), "."),
    selectedItem: e => "".concat(e.item, " er valgt.")
  },
  "nl-NL": j = {
    deselectedItem: e => "".concat(e.item, " niet geselecteerd."),
    longPressToSelect: "Druk lang om de selectiemodus te openen.",
    select: "Selecteren",
    selectedAll: "Alle items geselecteerd.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Geen items geselecteerd",
      one: () => "".concat(t.number(e.count), " item geselecteerd"),
      other: () => "".concat(t.number(e.count), " items geselecteerd")
    }), "."),
    selectedItem: e => "".concat(e.item, " geselecteerd.")
  },
  "pl-PL": F = {
    deselectedItem: e => "Nie zaznaczono ".concat(e.item, "."),
    longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
    select: "Zaznacz",
    selectedAll: "Wszystkie zaznaczone elementy.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nie zaznaczono żadnych element\xf3w",
      one: () => "".concat(t.number(e.count), " zaznaczony element"),
      other: () => "".concat(t.number(e.count), " zaznaczonych element\xf3w")
    }), "."),
    selectedItem: e => "Zaznaczono ".concat(e.item, ".")
  },
  "pt-BR": K = {
    deselectedItem: e => "".concat(e.item, " n\xe3o selecionado."),
    longPressToSelect: "Mantenha pressionado para entrar no modo de sele\xe7\xe3o.",
    select: "Selecionar",
    selectedAll: "Todos os itens selecionados.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nenhum item selecionado",
      one: () => "".concat(t.number(e.count), " item selecionado"),
      other: () => "".concat(t.number(e.count), " itens selecionados")
    }), "."),
    selectedItem: e => "".concat(e.item, " selecionado.")
  },
  "pt-PT": _ = {
    deselectedItem: e => "".concat(e.item, " n\xe3o selecionado."),
    longPressToSelect: "Prima continuamente para entrar no modo de sele\xe7\xe3o.",
    select: "Selecionar",
    selectedAll: "Todos os itens selecionados.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nenhum item selecionado",
      one: () => "".concat(t.number(e.count), " item selecionado"),
      other: () => "".concat(t.number(e.count), " itens selecionados")
    }), "."),
    selectedItem: e => "".concat(e.item, " selecionado.")
  },
  "ro-RO": z = {
    deselectedItem: e => "".concat(e.item, " neselectat."),
    longPressToSelect: "Apăsați lung pentru a intra \xeen modul de selectare.",
    select: "Selectare",
    selectedAll: "Toate elementele selectate.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Niciun element selectat",
      one: () => "".concat(t.number(e.count), " element selectat"),
      other: () => "".concat(t.number(e.count), " elemente selectate")
    }), "."),
    selectedItem: e => "".concat(e.item, " selectat.")
  },
  "ru-RU": V = {
    deselectedItem: e => "".concat(e.item, " не выбрано."),
    longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
    select: "Выбрать",
    selectedAll: "Выбраны все элементы.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Нет выбранных элементов",
      one: () => "".concat(t.number(e.count), " элемент выбран"),
      other: () => "".concat(t.number(e.count), " элементов выбрано")
    }), "."),
    selectedItem: e => "".concat(e.item, " выбрано.")
  },
  "sk-SK": B = {
    deselectedItem: e => "Nevybrat\xe9 položky: ".concat(e.item, "."),
    longPressToSelect: "Dlhš\xedm stlačen\xedm prejdite do režimu v\xfdberu.",
    select: "Vybrať",
    selectedAll: "Všetky vybrat\xe9 položky.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Žiadne vybrat\xe9 položky",
      one: () => "".concat(t.number(e.count), " vybrat\xe1 položka"),
      other: () => "Počet vybrat\xfdch položiek:".concat(t.number(e.count))
    }), "."),
    selectedItem: e => "Vybrat\xe9 položky: ".concat(e.item, ".")
  },
  "sl-SI": U = {
    deselectedItem: e => "Element ".concat(e.item, " ni izbran."),
    longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
    select: "Izberite",
    selectedAll: "Vsi elementi so izbrani.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Noben element ni izbran",
      one: () => "".concat(t.number(e.count), " element je izbran"),
      other: () => "".concat(t.number(e.count), " elementov je izbranih")
    }), "."),
    selectedItem: e => "Element ".concat(e.item, " je izbran.")
  },
  "sr-SP": H = {
    deselectedItem: e => "".concat(e.item, " nije izabrano."),
    longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
    select: "Izaberite",
    selectedAll: "Izabrane su sve stavke.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nije izabrana nijedna stavka",
      one: () => "Izabrana je ".concat(t.number(e.count), " stavka"),
      other: () => "Izabrano je ".concat(t.number(e.count), " stavki")
    }), "."),
    selectedItem: e => "".concat(e.item, " je izabrano.")
  },
  "sv-SE": G = {
    deselectedItem: e => "".concat(e.item, " ej markerat."),
    longPressToSelect: "Tryck l\xe4nge n\xe4r du vill \xf6ppna v\xe4ljarl\xe4ge.",
    select: "Markera",
    selectedAll: "Alla markerade objekt.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Inga markerade objekt",
      one: () => "".concat(t.number(e.count), " markerat objekt"),
      other: () => "".concat(t.number(e.count), " markerade objekt")
    }), "."),
    selectedItem: e => "".concat(e.item, " markerat.")
  },
  "tr-TR": W = {
    deselectedItem: e => "".concat(e.item, " se\xe7ilmedi."),
    longPressToSelect: "Se\xe7im moduna girmek i\xe7in uzun basın.",
    select: "Se\xe7",
    selectedAll: "T\xfcm \xf6geler se\xe7ildi.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Hi\xe7bir \xf6ge se\xe7ilmedi",
      one: () => "".concat(t.number(e.count), " \xf6ge se\xe7ildi"),
      other: () => "".concat(t.number(e.count), " \xf6ge se\xe7ildi")
    }), "."),
    selectedItem: e => "".concat(e.item, " se\xe7ildi.")
  },
  "uk-UA": q = {
    deselectedItem: e => "".concat(e.item, " не вибрано."),
    longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
    select: "Вибрати",
    selectedAll: "Усі елементи вибрано.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Жодних елементів не вибрано",
      one: () => "".concat(t.number(e.count), " елемент вибрано"),
      other: () => "Вибрано елементів: ".concat(t.number(e.count))
    }), "."),
    selectedItem: e => "".concat(e.item, " вибрано.")
  },
  "zh-CN": Z = {
    deselectedItem: e => "未选择 ".concat(e.item, "。"),
    longPressToSelect: "长按以进入选择模式。",
    select: "选择",
    selectedAll: "已选择所有项目。",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "未选择项目",
      one: () => "已选择 ".concat(t.number(e.count), " 个项目"),
      other: () => "已选择 ".concat(t.number(e.count), " 个项目")
    }), "。"),
    selectedItem: e => "已选择 ".concat(e.item, "。")
  },
  "zh-TW": Y = {
    deselectedItem: e => "未選取「".concat(e.item, "」。"),
    longPressToSelect: "長按以進入選擇模式。",
    select: "選取",
    selectedAll: "已選取所有項目。",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "未選取任何項目",
      one: () => "已選取 ".concat(t.number(e.count), " 個項目"),
      other: () => "已選取 ".concat(t.number(e.count), " 個項目")
    }), "。"),
    selectedItem: e => "已選取「".concat(e.item, "」。")
  }
}