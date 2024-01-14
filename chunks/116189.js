"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("37983");
n("884691");
var i = n("917351"),
  r = n.n(i),
  o = n("96386"),
  s = n("798609"),
  a = n("246598"),
  u = n("383018"),
  d = n("916565"),
  c = n("501536"),
  f = n("25292"),
  p = n("200294"),
  m = n("851745"),
  h = n("317041"),
  E = n("782340"),
  S = n("269175"),
  g = n("327769");
let C = {
    results: {
      choices: []
    }
  },
  T = {
    results: {
      choices: [],
      isLoading: !0
    }
  },
  v = Array.from({
    length: 5
  }, () => ({
    name: "",
    displayName: "",
    value: ""
  })),
  y = {
    results: {
      choices: [],
      isError: !0
    }
  },
  x = r.debounce(d.default, h.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, {
    leading: !0,
    trailing: !0
  }),
  I = {
    stores: [u.default, a.default],
    showEmpty: !0,
    matches(e, t, n, l, i) {
      let r = u.default.getActiveOption(e.id);
      return i.commands !== m.CommandMode.DISABLED && null != r && (r.type === s.ApplicationCommandOptionType.BOOLEAN || !!(null == r ? void 0 : r.autocomplete) || (null == r ? void 0 : r.choices) != null && r.choices.length > 0)
    },
    queryResults(e, t, n, l, i) {
      var r;
      let o = u.default.getActiveOption(e.id);
      if (null == o) return C;
      if (o.autocomplete) {
        if (i) {
          let i = u.default.getActiveCommand(e.id),
            r = l.getCommandOptionValues();
          x({
            command: i,
            optionValues: r,
            context: {
              channel: e,
              guild: t,
              autocomplete: {
                name: o.name,
                query: n
              }
            }
          })
        }
        let r = a.default.getLastErrored(e.id);
        if (r) return y;
        let s = a.default.getAutocompleteChoices(e.id, o.name, n);
        return null == s ? T : {
          results: {
            choices: s
          }
        }
      }
      let d = f.default.queryChoiceResults({
        query: n,
        choices: o.type === s.ApplicationCommandOptionType.BOOLEAN ? h.BOOLEAN_CHOICES : null !== (r = o.choices) && void 0 !== r ? r : []
      });
      return {
        results: d
      }
    },
    renderResults(e) {
      let {
        results: {
          choices: t,
          isLoading: n,
          isError: i
        },
        selectedIndex: r,
        query: s,
        onHover: a,
        onClick: u
      } = e;
      return i ? (0, l.jsx)(o.default, {
        message: E.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_FAILED,
        noResultsImageURL: g,
        className: S.noAutocompleteResults
      }) : 0 !== t.length || n ? (0, p.renderAutocompleteGroup)({
        query: s,
        selectedIndex: r,
        autocompletes: n ? v : t,
        onHover: a,
        onClick: u,
        titleWithQuery: E.default.Messages.OPTIONS_MATCHING,
        titleWithoutQuery: E.default.Messages.OPTIONS,
        Component: n ? c.default.Loading : c.default.Generic,
        getProps: (e, t) => ({
          key: t.toString(),
          text: e.displayName
        }),
        getQuery: e => e,
        key: "choice"
      }) : (0, l.jsx)(o.default, {
        message: E.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_NO_OPTIONS,
        noResultsImageURL: g,
        className: S.noAutocompleteResults
      })
    },
    onSelect(e) {
      let {
        results: {
          choices: t
        },
        index: n,
        options: l
      } = e, i = t[n];
      return l.insertText(function(e) {
        return e.displayName
      }(i)), {
        type: m.AutocompleteSelectionTypes.CHOICE
      }
    }
  };
var N = I