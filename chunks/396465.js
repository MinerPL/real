"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("798609"),
  o = n("200294"),
  s = n("851745"),
  a = n("501536"),
  u = n("124299"),
  d = n("240249"),
  c = n("972620"),
  f = n("524768"),
  p = n("529190"),
  m = n("41884"),
  h = n("406291"),
  E = n("782340"),
  S = n("253184");

function g(e) {
  let {
    query: t,
    onHover: n,
    onClick: g,
    channel: C,
    selectedIndex: T
  } = e, v = i.useRef(null), {
    commands: y,
    sections: x,
    scrollDown: I
  } = d.useQuery(C, {
    commandType: r.ApplicationCommandType.CHAT,
    text: t
  }, {
    limit: s.MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY,
    placeholderCount: s.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
    scoreMethod: c.ScoreMethod.COMMAND_OR_APPLICATION
  }), N = i.useCallback(e => {
    var t;
    if (null == y) return null;
    let i = y[e],
      r = null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : e;
    if (null == i || i.inputType === f.ApplicationCommandInputType.PLACEHOLDER) return (0, l.jsx)(m.default, {}, r);
    let o = x.find(e => e.id === i.applicationId);
    return (0, l.jsx)(a.default.NewCommand, {
      index: e,
      command: i,
      channel: C,
      className: S.itemWrapper,
      selected: T === e,
      showImage: !0,
      section: o,
      onClick: g,
      onHover: n
    }, r)
  }, [C, y, x, g, n, T]);
  return null == y || 0 === y.length ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, o.renderHeader)({
      titleWithQuery: E.default.Messages.COMMANDS_MATCHING,
      titleWithoutQuery: E.default.Messages.COMMANDS,
      query: t,
      getQuery: e => "".concat(h.COMMAND_SENTINEL).concat(e)
    }), (0, l.jsx)(u.default, {
      ref: v,
      role: "listbox",
      className: S.list,
      listPadding: [0, 8, 0, 8],
      onScroll: e => {
        if (null == y) return;
        let t = y.length * p.ITEM_HEIGHT,
          n = v.current.getListDimensions().height;
        t - e - n < 9 * p.ITEM_HEIGHT && I()
      },
      renderRow: N,
      rowCount: y.length,
      rowHeight: p.ITEM_HEIGHT
    })]
  })
}