"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("424973");
var l = n("37983");
n("884691");
var i = n("383018"),
  r = n("501536"),
  o = n("200294"),
  s = n("851745"),
  a = n("782340");
let u = {
    results: {
      commandOptions: []
    }
  },
  d = {
    stores: [i.default],
    focusMode: s.FocusMode.AUTO_WHEN_FILTERED,
    matches: (e, t, n, l, r) => !(l || null == i.default.getActiveCommand(e.id) || null != i.default.getActiveOption(e.id)),
    queryResults(e, t, n, l, r) {
      let o = i.default.getActiveCommand(e.id);
      if ((null == o ? void 0 : o.options) == null) return u;
      let s = i.default.getOptionStates(e.id),
        a = o.options.filter(e => {
          var t;
          return e.displayName.startsWith(n) && !(null === (t = s[e.name]) || void 0 === t ? void 0 : t.hasValue)
        });
      return 0 === a.length ? u : {
        results: {
          commandOptions: a
        }
      }
    },
    renderResults(e) {
      let {
        results: {
          commandOptions: t
        },
        selectedIndex: n,
        query: i,
        onHover: s,
        onClick: u
      } = e, d = [], c = [];
      t.forEach(e => {
        (e.required ? d : c).push(e)
      });
      let f = d.length > 0 ? (0, o.renderAutocompleteGroup)({
          query: i,
          selectedIndex: n,
          autocompletes: d,
          onHover: s,
          onClick: u,
          titleWithQuery: a.default.Messages.REQUIRED_OPTIONS_MATCHING,
          titleWithoutQuery: a.default.Messages.REQUIRED_OPTIONS,
          Component: r.default.Generic,
          getProps: (e, t) => ({
            key: t.toString(),
            text: e.displayName,
            description: e.displayDescription
          }),
          getQuery: e => e,
          key: "required-options"
        }) : null,
        p = c.length > 0 ? (0, o.renderAutocompleteGroup)({
          query: i,
          selectedIndex: n,
          autocompletes: c,
          onHover: s,
          onClick: u,
          titleWithQuery: a.default.Messages.OPTIONS_MATCHING,
          titleWithoutQuery: d.length > 0 ? a.default.Messages.OTHER_OPTIONS : a.default.Messages.OPTIONS,
          Component: r.default.Generic,
          getProps: (e, t) => ({
            key: t.toString(),
            text: e.displayName,
            description: e.displayDescription
          }),
          getQuery: e => e,
          key: "optional-options",
          indexOffset: d.length
        }) : null;
      return (0, l.jsxs)(l.Fragment, {
        children: [f, p]
      })
    },
    onSelect(e) {
      let {
        results: {
          commandOptions: t
        },
        index: n,
        options: l
      } = e, i = t[n];
      return l.insertText(function(e) {
        return "".concat(e.displayName, ":")
      }(i)), {
        type: s.AutocompleteSelectionTypes.COMMAND_OPTION
      }
    }
  };
var c = d