"use strict";
t.r(r), t.d(r, {
  computeTextAlternative: function() {
    return d
  }
}), t("781738"), t("70102"), t("424973");
var a = t("99368"),
  o = t("251378"),
  n = t("640029");

function l(e, r) {
  if (!(0, n.isElement)(e)) return !1;
  if ("range" === r) return (0, n.hasAnyConcreteRoles)(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
  throw TypeError("No knowledge about abstract role '".concat(r, "'. This is likely a bug :("))
}

function i(e, r) {
  var t = (0, a.default)(e.querySelectorAll(r));
  return (0, n.queryIdRefs)(e, "aria-owns").forEach(function(e) {
    t.push.apply(t, (0, a.default)(e.querySelectorAll(r)))
  }), t
}

function s(e) {
  var r = e.getPropertyValue("content");
  return /^["'].*["']$/.test(r) ? r.slice(1, -1) : ""
}

function u(e) {
  var r = (0, n.getLocalName)(e);
  return "button" === r || "input" === r && "hidden" !== e.getAttribute("type") || "meter" === r || "output" === r || "progress" === r || "select" === r || "textarea" === r
}

function d(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    t = new o.default,
    d = (0, n.safeWindow)(e),
    c = r.compute,
    p = void 0 === c ? "name" : c,
    m = r.computedStyleSupportsPseudoElements,
    f = void 0 === m ? void 0 !== r.getComputedStyle : m,
    b = r.getComputedStyle,
    v = void 0 === b ? d.getComputedStyle.bind(d) : b;

  function h(e, r) {
    var t, o, l = "";
    if ((0, n.isElement)(e) && f) {
      var i = s(v(e, "::before"));
      l = "".concat(i, " ").concat(l)
    }
    if (((0, n.isHTMLSlotElement)(e) ? 0 === (o = (t = e).assignedNodes()).length ? (0, a.default)(t.childNodes) : o : (0, a.default)(e.childNodes).concat((0, n.queryIdRefs)(e, "aria-owns"))).forEach(function(e) {
        var t = C(e, {
            isEmbeddedInLabel: r.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          }),
          a = "inline" !== ((0, n.isElement)(e) ? v(e).getPropertyValue("display") : "inline") ? " " : "";
        l += "".concat(a).concat(t).concat(a)
      }), (0, n.isElement)(e) && f) {
      var u = s(v(e, "::after"));
      l = "".concat(l, " ").concat(u)
    }
    return l
  }

  function C(e, r) {
    if (t.has(e)) return "";
    if ((0, n.hasAnyConcreteRoles)(e, ["menu"]) || function(e, r) {
        if (!(0, n.isElement)(e)) return !1;
        if (e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden")) return !0;
        var t = r(e);
        return "none" === t.getPropertyValue("display") || "hidden" === t.getPropertyValue("visibility")
      }(e, v) && !r.isReferenced) return t.add(e), "";
    var o, s, d, c, m = (0, n.queryIdRefs)(e, "aria-labelledby");
    if ("name" === p && !r.isReferenced && m.length > 0) return m.map(function(e) {
      return C(e, {
        isEmbeddedInLabel: r.isEmbeddedInLabel,
        isReferenced: !0,
        recursion: !1
      })
    }).join(" ");
    var f = r.recursion && (b = e, (0, n.hasAnyConcreteRoles)(b, ["button", "combobox", "listbox", "textbox"]) || l(b, "range")) && "name" === p;
    if (!f) {
      var b, q, P = ((0, n.isElement)(e) && e.getAttribute("aria-label") || "").trim();
      if ("" !== P && "name" === p) return t.add(e), P;
      if (q = e, !(0, n.hasAnyConcreteRoles)(q, ["none", "presentation"])) {
        var x = function(e) {
          if (!(0, n.isElement)(e)) return null;

          function r(e, r) {
            var a = e.getAttributeNode(r);
            return null === a || t.has(a) || "" === a.value.trim() ? null : (t.add(a), a.value)
          }
          if ((0, n.isHTMLFieldSetElement)(e)) {
            t.add(e);
            for (var o = (0, a.default)(e.childNodes), l = 0; l < o.length; l += 1) {
              var i = o[l];
              if ((0, n.isHTMLLegendElement)(i)) return C(i, {
                isEmbeddedInLabel: !1,
                isReferenced: !1,
                recursion: !1
              })
            }
          } else if ((0, n.isHTMLTableElement)(e)) {
            t.add(e);
            for (var s = (0, a.default)(e.childNodes), d = 0; d < s.length; d += 1) {
              var c = s[d];
              if ((0, n.isHTMLTableCaptionElement)(c)) return C(c, {
                isEmbeddedInLabel: !1,
                isReferenced: !1,
                recursion: !1
              })
            }
          } else if ((0, n.isSVGSVGElement)(e)) {
            t.add(e);
            for (var p = (0, a.default)(e.childNodes), m = 0; m < p.length; m += 1) {
              var f = p[m];
              if ((0, n.isSVGTitleElement)(f)) return f.textContent
            }
            return null
          } else if ("img" === (0, n.getLocalName)(e) || "area" === (0, n.getLocalName)(e)) {
            var b = r(e, "alt");
            if (null !== b) return b
          } else if ((0, n.isHTMLOptGroupElement)(e)) {
            var v = r(e, "label");
            if (null !== v) return v
          }
          if ((0, n.isHTMLInputElement)(e) && ("button" === e.type || "submit" === e.type || "reset" === e.type)) {
            var h = r(e, "value");
            if (null !== h) return h;
            if ("submit" === e.type) return "Submit";
            if ("reset" === e.type) return "Reset"
          }
          var q = function(e) {
            var r = e.labels;
            if (null === r) return r;
            if (void 0 !== r) return (0, a.default)(r);
            if (!u(e)) return null;
            var t = e.ownerDocument;
            return (0, a.default)(t.querySelectorAll("label")).filter(function(r) {
              return function(e) {
                if (void 0 !== e.control) return e.control;
                var r = e.getAttribute("for");
                return null !== r ? e.ownerDocument.getElementById(r) : function e(r) {
                  if (u(r)) return r;
                  var t = null;
                  return r.childNodes.forEach(function(r) {
                    if (null === t && (0, n.isElement)(r)) {
                      var a = e(r);
                      null !== a && (t = a)
                    }
                  }), t
                }(e)
              }(r) === e
            })
          }(e);
          if (null !== q && 0 !== q.length) return t.add(e), (0, a.default)(q).map(function(e) {
            return C(e, {
              isEmbeddedInLabel: !0,
              isReferenced: !1,
              recursion: !0
            })
          }).filter(function(e) {
            return e.length > 0
          }).join(" ");
          if ((0, n.isHTMLInputElement)(e) && "image" === e.type) {
            var P = r(e, "alt");
            if (null !== P) return P;
            var x = r(e, "title");
            return null !== x ? x : "Submit Query"
          }
          return r(e, "title")
        }(e);
        if (null !== x) return t.add(e), x
      }
    }
    if (f || r.isEmbeddedInLabel || r.isReferenced) {
      if ((0, n.hasAnyConcreteRoles)(e, ["combobox", "listbox"])) {
        t.add(e);
        var y, R, g = (R = e, (0, n.isHTMLSelectElement)(R) ? R.selectedOptions || i(R, "[selected]") : i(R, '[aria-selected="true"]'));
        return 0 === g.length ? (0, n.isHTMLInputElement)(e) ? e.value : "" : (0, a.default)(g).map(function(e) {
          return C(e, {
            isEmbeddedInLabel: r.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          })
        }).join(" ")
      }
      if (l(e, "range")) return (t.add(e), e.hasAttribute("aria-valuetext")) ? e.getAttribute("aria-valuetext") : e.hasAttribute("aria-valuenow") ? e.getAttribute("aria-valuenow") : e.getAttribute("value") || "";
      if ((0, n.hasAnyConcreteRoles)(e, ["textbox"])) {
        ;
        return t.add(e), y = e, (0, n.isHTMLInputElement)(y) || (0, n.isHTMLTextAreaElement)(y) ? y.value : y.textContent || ""
      }
    }
    if (o = e, (0, n.hasAnyConcreteRoles)(o, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]) || (0, n.isElement)(e) && r.isReferenced || (s = e, (0, n.isHTMLTableCaptionElement)(s)) || (d = 0, 0)) return t.add(e), h(e, {
      isEmbeddedInLabel: r.isEmbeddedInLabel,
      isReferenced: !1
    });
    if (e.nodeType === e.TEXT_NODE) return t.add(e), e.textContent || "";
    if (r.recursion) return t.add(e), h(e, {
      isEmbeddedInLabel: r.isEmbeddedInLabel,
      isReferenced: !1
    });
    var w = (c = 0, null);
    return null !== w ? (t.add(e), w) : (t.add(e), "")
  }
  return C(e, {
    isEmbeddedInLabel: !1,
    isReferenced: "description" === p,
    recursion: !1
  }).trim().replace(/\s\s+/g, " ")
}