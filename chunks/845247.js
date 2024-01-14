"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("781738");
var l = n("37983");
n("884691");
var i = n("798609"),
  r = n("240249"),
  o = n("972620"),
  s = n("524768"),
  a = n("355263"),
  u = n("845579"),
  d = n("697218"),
  c = n("501536"),
  f = n("387111"),
  p = n("511104"),
  m = n("200294"),
  h = n("851745"),
  E = n("825871"),
  S = n("782340");

function g(e) {
  let t = p.PREFIX_COMMAND_REGEX.exec(e);
  if (null != t) return {
    type: "prefix",
    cleanedQuery: e.substring(t[0].length).trim()
  };
  let n = p.BOT_MENTION_COMMAND_REGEX.exec(e);
  if (null != n) {
    let t = n[1],
      l = d.default.getUser(t);
    return null == l || !l.bot || l.isClyde() ? null : {
      type: "mention",
      cleanedQuery: e.substring(n[0].length).trim(),
      user: l
    }
  }
  return null
}
let C = {
  ...E.default,
  sentinel: void 0,
  focusMode: h.FocusMode.MANUAL,
  matches(e, t, n, l, i) {
    if (i.commands === h.CommandMode.DISABLED || i.commands === h.CommandMode.OLD_BUILT_INS || n.length < 2 || !u.ShowCommandSuggestions.getSetting()) return !1;
    let r = g(n);
    return null != r && r.cleanedQuery.length > 0
  },
  queryResults(e, t, n, l, s) {
    if (!u.ShowCommandSuggestions.getSetting()) return E.EMPTY_RESULTS;
    let d = g(n);
    if (null == d) return E.EMPTY_RESULTS;
    let c = (0, E.getLimit)("LegacyCommandAutocompletes"),
      f = (0, a.getCommandQuery)(e, d.cleanedQuery),
      {
        commands: p,
        sections: m
      } = r.executeQuery(e, {
        commandType: i.ApplicationCommandType.CHAT,
        text: f.text
      }, {
        limit: c,
        placeholderCount: h.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
        scoreMethod: o.ScoreMethod.COMMAND_OR_APPLICATION,
        allowFetch: s
      });
    if (null == p) return E.EMPTY_RESULTS;
    let S = p;
    if (f.hasSpaceTerminator) {
      let e = f.text.trim(),
        t = e + " ";
      S = S.filter(n => n.name === e || n.name.startsWith(t))
    }
    return 0 === S.length ? E.EMPTY_RESULTS : {
      results: {
        entries: S.slice(0, c).map(e => ({
          command: e,
          section: null == m ? void 0 : m.find(t => t.id === e.applicationId)
        }))
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        entries: t
      },
      selectedIndex: n,
      guild: i,
      channel: r,
      query: o,
      options: s,
      onHover: a,
      onClick: u
    } = e;
    return (0, m.renderAutocompleteGroup)({
      query: o,
      selectedIndex: n,
      autocompletes: t,
      onHover: a,
      onClick: u,
      titleWithQuery: S.default.Messages.COMMANDS_MATCHING,
      titleWithoutQuery: S.default.Messages.COMMANDS,
      Component: s.commands === h.CommandMode.OLD_BUILT_INS ? c.default.Command : c.default.NewCommand,
      getProps: e => {
        let {
          command: t,
          section: n
        } = e;
        return {
          key: t.id,
          command: t,
          channel: r,
          guildId: r.guild_id,
          showImage: !0,
          section: n
        }
      },
      getQuery: e => {
        let t = g(e);
        if ("mention" !== t.type) return e;
        let n = f.default.getName(null == i ? void 0 : i.id, r.id, t.user);
        return e.replace(p.BOT_MENTION_COMMAND_REGEX, "@".concat(n))
      },
      key: "commands",
      footer: (0, l.jsx)(E.FakeFooter, {})
    })
  },
  onSelect(e) {
    let {
      results: t,
      index: n,
      type: l,
      options: i,
      channel: r
    } = e, o = E.default.onSelect({
      results: t,
      index: n,
      type: l,
      options: i,
      channel: r,
      location: s.ApplicationCommandTriggerLocations.SUGGESTION
    });
    return null == o ? null : {
      ...o,
      type: h.AutocompleteSelectionTypes.COMMAND_SUGGESTION
    }
  }
};
var T = C