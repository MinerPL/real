"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("917351"),
  o = n.n(r),
  s = n("77078"),
  a = n("822637"),
  u = n("716241"),
  d = n("383018"),
  c = n("524768"),
  f = n("318981"),
  p = n("501536"),
  m = n("145131"),
  h = n("851745"),
  E = n("406291"),
  S = n("49111"),
  g = n("782340"),
  C = n("567484");
let T = {
  results: {
    command: null,
    integrations: [],
    isLoading: !1
  }
};

function v(e, t, n) {
  var l, i;
  let r;
  return n.commands === h.CommandMode.OLD_BUILT_INS ? (r = t.split(" ")[0].substring(E.COMMAND_SENTINEL.length), t = t.substring((null !== (l = r.length) && void 0 !== l ? l : 0) + E.COMMAND_SENTINEL.length)) : r = null === (i = d.default.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.name, {
    command: r,
    query: t.trim()
  }
}
let y = {
  stores: [d.default, f.default],
  matches(e, t, n, l, i) {
    var r;
    return i.commands !== h.CommandMode.DISABLED && (i.commands === h.CommandMode.OLD_BUILT_INS ? n.startsWith(E.COMMAND_SENTINEL + "gif") || n.startsWith(E.COMMAND_SENTINEL + "tenor") : (null === (r = d.default.getActiveCommand(e.id)) || void 0 === r ? void 0 : r.integrationType) === S.ChannelTextAreaIntegrationTypes.GIF && d.default.getOptionStates(e.id).query.hasValue)
  },
  queryResults(e, t, n, l, i) {
    let {
      command: r,
      query: s
    } = v(e, n, l);
    if (null == r) return T;
    let u = o.findKey(S.ChannelTextAreaIntegrations, e => e.command === r);
    i && null != u && s.length > 0 && a.default.search(u, s);
    let d = f.default.getResults(u, s);
    return null == d ? T : {
      results: {
        command: r,
        integrations: d.results,
        isLoading: d.loading
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        integrations: t,
        isLoading: n
      },
      selectedIndex: r,
      channel: o,
      query: a,
      options: u,
      onHover: c,
      onClick: f
    } = e, {
      command: E,
      query: T
    } = v(o, a, u);
    if (null == E || 0 === T.length) return null;
    if (n) return (0, l.jsx)(s.Spinner, {
      className: C.spinner,
      type: s.Spinner.Type.SPINNING_CIRCLE
    });
    if (null != t) {
      var y, x;
      let e = !1,
        n = t.map((t, n) => {
          if (t.type === S.ChannelTextAreaIntegrationTypes.GIF) {
            var i, o, s;
            return e = !0, (0, l.jsx)(p.default.GIFIntegration, {
              className: C.horizontalAutocomplete,
              onClick: f,
              onHover: c,
              selected: r === n,
              index: n,
              width: null !== (i = t.meta.width) && void 0 !== i ? i : 0,
              height: null !== (o = t.meta.height) && void 0 !== o ? o : 0,
              src: null !== (s = t.meta.src) && void 0 !== s ? s : "",
              url: t.meta.url
            }, "".concat(t.meta.url).concat(t.meta.src))
          }
        }),
        s = u.commands === h.CommandMode.OLD_BUILT_INS ? E : null !== (x = null === (y = d.default.getActiveCommand(o.id)) || void 0 === y ? void 0 : y.integrationTitle) && void 0 !== x ? x : E,
        a = T.length > 0 && null != s ? g.default.Messages.CONTENT_MATCHING.format({
          query: T,
          command: s
        }) : null != s ? s : E;
      return (0, l.jsxs)(i.Fragment, {
        children: [(0, l.jsx)(p.default.Title, {
          title: a
        }), e ? (0, l.jsx)(m.default, {
          className: C.horizontalAutocompletes,
          children: n
        }) : n]
      }, "gifs")
    }
  },
  onSelect(e) {
    let {
      results: {
        command: t,
        integrations: n
      },
      index: l,
      type: i,
      options: r,
      channel: o
    } = e;
    if (null == t) return {
      type: null
    };
    let s = n[l];
    if (i === h.SelectType.INSERT ? r.replaceText(function(e) {
        return e.meta.url
      }(s)) : r.sendMessage(function(e) {
        return e.meta.url
      }(s)), u.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_SELECTED, {
        search_type: S.SearchTypes.GIF,
        index_num: l,
        source_object: "/".concat(t)
      }), r.commands !== h.CommandMode.OLD_BUILT_INS) {
      let e = d.default.getActiveCommand(o.id);
      (null == e ? void 0 : e.inputType) === c.ApplicationCommandInputType.BUILT_IN_INTEGRATION && u.default.trackWithMetadata(S.AnalyticEvents.APPLICATION_COMMAND_USED, {
        command_id: e.id,
        application_id: e.applicationId,
        command_type: e.type
      })
    }
    return {
      type: h.AutocompleteSelectionTypes.GIF
    }
  }
};

function x(e) {
  return e.meta.url
}
var I = y