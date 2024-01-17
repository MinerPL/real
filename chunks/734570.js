"use strict";
n.r(t), n.d(t, {
  handleLegacyCommands: function() {
    return g
  }
}), n("222007"), n("781738");
var s = n("132710"),
  a = n.n(s),
  l = n("223468"),
  i = n("819689"),
  r = n("716241"),
  o = n("385976"),
  u = n("166257"),
  d = n("432173"),
  c = n("845579"),
  f = n("377253"),
  h = n("49111");
let C = /\\([*?+/])/g,
  p = {
    tts: {
      action: () => ({
        tts: c.EnableTTSCommand.getSetting()
      })
    },
    me: {
      action: e => ({
        content: "_".concat(e, "_")
      })
    },
    tableflip: {
      action: e => ({
        content: "".concat(e, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
      })
    },
    unflip: {
      action: e => ({
        content: "".concat(e, " ┬─┬ノ( \xba _ \xbaノ)").trim()
      })
    },
    shrug: {
      action: e => ({
        content: "".concat(e, " \xaf\\_(ツ)_/\xaf").trim()
      })
    },
    nick: {
      action(e, t) {
        let {
          channel: n
        } = t;
        if (null != n.guild_id) return l.default.changeNickname(n.guild_id, n.id, h.ME, e), {
          content: ""
        }
      }
    },
    reaction: {
      match: a.anyScopeRegex(/^\+:(.+?): *$/),
      action(e, t) {
        let {
          isEdit: n,
          channel: s
        } = t;
        if (n || !f.default.hasPresent(s.id)) return;
        let a = f.default.getMessages(s.id).last();
        if (null == a || null == a.id) return;
        let l = o.default.getDisambiguatedEmojiContext(s.guild_id).getByName(e.trim().slice(2, -1));
        if (null != l) return (0, u.addReaction)(s.id, a.id, (0, d.toReactionEmoji)(l)), {
          content: ""
        }
      }
    },
    searchReplace: {
      match: a.anyScopeRegex(/^s\/((?:.+?)[^\\]|.)\/(.*)/),
      action(e, t) {
        var n;
        let {
          isEdit: s,
          channel: a
        } = t;
        if (s) return;
        let l = f.default.getLastEditableMessage(a.id);
        if (null == l || null == l.id) return {
          content: ""
        };
        let [, r, o] = Array.from(null !== (n = e.match(this.match.regex)) && void 0 !== n ? n : []);
        r = r.replace(C, (e, t) => t), o = o.replace(C, (e, t) => t);
        let u = l.content.replace(r, o);
        return (null == u || "" === u) && 0 === l.attachments.length ? i.default.deleteMessage(a.id, l.id) : e !== l.content && i.default.editMessage(a.id, l.id, {
          content: u
        }), {
          content: ""
        }
      }
    },
    spoiler: {
      action: e => ({
        content: (0, h.MARKDOWN_SPOILER_WRAPPER)(e).trim()
      })
    }
  };

function m(e, t, n, s) {
  return r.default.trackWithMetadata(h.AnalyticEvents.SLASH_COMMAND_USED, {
    command: e
  }), t.action(n, s)
}

function g(e, t) {
  for (let s in p) {
    let a = p[s];
    if (null != a.match) {
      var n;
      if (null === (n = a.match.regex) || void 0 === n ? void 0 : n.test(e)) return m(s, a, e, t);
      continue
    }
    if (c.UseLegacyChatInput.getSetting() && "/" === e[0]) {
      let n = e.split(" "),
        l = n[0].slice(1);
      if (s === l && null != a.action) return m(s, a, n.slice(1).join(" "), t)
    }
  }
}
Object.setPrototypeOf(p, null)