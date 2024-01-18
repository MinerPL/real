"use strict";
n.r(t), n.d(t, {
  default: function() {
    return z
  }
}), n("781738"), n("424973"), n("222007");
var s = n("917351"),
  i = n.n(s),
  r = n("132710"),
  a = n.n(r),
  o = n("980215"),
  d = n("867805"),
  u = n("235004"),
  l = n("42203"),
  f = n("305961"),
  _ = n("697218"),
  c = n("387111"),
  g = n("158998"),
  m = n("946897"),
  h = n("632886"),
  v = n("270926"),
  E = n("647374"),
  p = n("693078"),
  y = n("290689"),
  C = n("839462"),
  T = n("646630"),
  S = n("788554"),
  I = n("49111"),
  A = n("317041"),
  D = n("680894"),
  N = n("782340");
let O = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
  b = /^$|\n *$/,
  P = /^ *>>> ?/,
  k = /^ *> ?/gm;

function R(e) {
  let t = (0, E.punycodeLink)(e[1]);
  if (null == t) return {
    type: "text",
    content: e[1]
  };
  let {
    displayTarget: n,
    target: s
  } = t;
  return {
    type: "link",
    content: [{
      type: "text",
      content: n
    }],
    target: s,
    title: void 0
  }
}
let V = e => {
    let t = l.default.getChannel(e);
    return null == t ? void 0 : t.getGuildId()
  },
  M = e => null != e.guildId ? f.default.getGuild(e.guildId) : null != e.channelId ? f.default.getGuild(V(e.channelId)) : null,
  w = {
    newline: a.defaultRules.newline,
    paragraph: a.defaultRules.paragraph,
    escape: {
      ...a.defaultRules.escape,
      match: (e, t, n) => !1 === t.allowEscape ? null : a.defaultRules.escape.match(e, t, n)
    },
    blockQuote: {
      ...a.defaultRules.blockQuote,
      requiredFirstCharacters: [" ", ">"],
      match(e, t) {
        let {
          prevCapture: n,
          inQuote: s,
          nested: i
        } = t;
        if (s || i) return null;
        if (null == n) return O.exec(e);
        let r = n[0];
        return b.test(r) ? O.exec(e) : null
      },
      parse(e, t, n) {
        let s = e[0],
          i = !!P.exec(s),
          r = s.replace(i ? P : k, ""),
          a = n.inQuote || !1,
          o = n.inline || !1;
        n.inQuote = !0, !i && (n.inline = !0);
        let d = t(r, n);
        return n.inQuote = a, n.inline = o, 0 === d.length && d.push({
          type: "text",
          content: " "
        }), {
          content: d,
          type: "blockQuote"
        }
      }
    },
    link: E.default,
    autolink: {
      ...a.defaultRules.autolink,
      parse: R
    },
    url: {
      ...a.defaultRules.url,
      requiredFirstCharacters: ["h", "s"],
      match(e, t) {
        if (!t.inline) return null;
        let n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
        if (null != n) {
          let e = 0,
            t = n[0];
          for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
            let n = t.indexOf("(", e);
            if (-1 === n) {
              t = t.slice(0, t.length - 1);
              break
            }
            e = n + 1
          }
          n[0] = n[1] = t
        }
        return n
      },
      parse: R
    },
    strong: a.defaultRules.strong,
    em: a.defaultRules.em,
    u: a.defaultRules.u,
    br: a.defaultRules.br,
    text: y.default,
    inlineCode: {
      ...a.defaultRules.inlineCode,
      parse(e, t, n) {
        let s = a.defaultRules.inlineCode.parse(e, t, n);
        return !0 === n.parseInlineCodeChildContent ? {
          ...s,
          validationChildContent: t(s.content, n)
        } : s
      }
    },
    emoticon: {
      order: y.default.order,
      requiredFirstCharacters: ["\xaf"],
      match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
      parse: e => ({
        type: "text",
        content: e[1]
      })
    },
    codeBlock: {
      order: a.defaultRules.codeBlock.order,
      requiredFirstCharacters: ["`"],
      match: e => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
      parse(e, t, n) {
        var s, i;
        return {
          lang: null !== (s = e[1]) && void 0 !== s ? s : "",
          content: null !== (i = e[2]) && void 0 !== i ? i : "",
          inQuote: n.inQuote || !1
        }
      }
    },
    roleMention: {
      order: y.default.order,
      requiredFirstCharacters: ["<"],
      match: e => /^<@&(\d+)>/.exec(e),
      parse(e, t, n) {
        let [s, i] = e;
        if (n.returnMentionIds) return {
          type: "roleMention",
          id: i
        };
        let r = M(n),
          a = null != r ? r.roles[i] : null;
        return null == a ? {
          type: "text",
          content: "@".concat(N.default.Messages.DELETED_ROLE_PLACEHOLDER)
        } : {
          type: "mention",
          channelId: n.channelId,
          guildId: null != r ? r.id : null,
          roleId: i,
          roleColor: a.color,
          color: a.color,
          colorString: a.colorString,
          content: [{
            type: "text",
            content: "@".concat(a.name)
          }]
        }
      }
    },
    mention: {
      order: y.default.order,
      requiredFirstCharacters: ["<", "@"],
      match(e, t) {
        let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
        return null != n && ("@Clyde" !== n[0] || (0, o.getClydeEnabled)(M(t), l.default.getChannel(t.channelId))) ? n : null
      },
      parse(e, t, n) {
        let s, i;
        if (n.returnMentionIds) return null == e[1] ? {
          type: "mention",
          text: e[0]
        } : {
          type: "mention",
          id: e[1]
        };
        let r = _.default.getUser(e[1]),
          a = l.default.getChannel(n.channelId);
        if (null != r && (i = r.id, s = r.toString(), null != a)) {
          var d;
          s = null !== (d = c.default.getNickname(a.getGuildId(), n.channelId, r)) && void 0 !== d ? d : g.default.getName(r)
        }
        null == r && "@Clyde" === e[0] && (0, o.getClydeEnabled)(M(n), a) && (i = D.CLYDE_AI_USER_ID);
        let u = e[1],
          f = null != u && I.ID_REGEX.test(u.trim()),
          m = f && n.unknownUserMentionPlaceholder ? "@".concat(N.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
        return {
          userId: i,
          channelId: n.channelId,
          guildId: null == a ? void 0 : a.getGuildId(),
          roleName: e[2],
          content: [{
            type: "text",
            content: null != s ? "@".concat(s) : m
          }]
        }
      }
    },
    channelMention: h.default.channelMention,
    channelOrMessageUrl: h.default.channelOrMessageUrl,
    mediaPostLink: h.default.mediaPostLink,
    attachmentLink: m.default.attachmentLink,
    commandMention: {
      order: a.defaultRules.text.order,
      requiredFirstCharacters: ["<"],
      match: e => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
      parse(e, t, n) {
        if (n.returnMentionIds) return {
          type: "commandMention",
          id: e[2]
        };
        let [, ...s] = e[1].split(" "), i = "".concat(e[2]).concat([...s].map(e => "".concat(A.SUB_COMMAND_KEY_SEPARATOR).concat(e)).join(""));
        return {
          channelId: n.channelId,
          commandId: e[2],
          commandName: e[1],
          commandKey: i,
          content: [{
            type: "text",
            content: "".concat(e[1])
          }]
        }
      }
    },
    emoji: {
      order: y.default.order,
      requiredFirstCharacters: [":"],
      match(e) {
        let t = d.default.EMOJI_NAME_RE.exec(e);
        return null != t && "" !== d.default.convertNameToSurrogate(t[1]) ? t : null
      },
      parse(e) {
        let t = d.default.convertNameToSurrogate(e[1]);
        return {
          type: "text",
          content: null == t || "" === t ? ":".concat(e[1], ":") : t
        }
      }
    },
    soundboard: {
      order: y.default.order,
      requiredFirstCharacters: ["<"],
      match: e => /^<sound:(\d+)>/.exec(e),
      parse(e, t, n) {
        var s;
        let i = e[1],
          r = u.default.getSoundById(i),
          a = null !== (s = null == r ? void 0 : r.name) && void 0 !== s ? s : i;
        return {
          type: "soundboard",
          id: i,
          soundId: i,
          channelId: n.channelId,
          content: a
        }
      }
    },
    customEmoji: {
      order: y.default.order,
      requiredFirstCharacters: ["<"],
      match: e => /^<a?:(\w+):(\d+)>/.exec(e),
      parse: e => ({
        type: "text",
        content: ":".concat(e[1], ":")
      })
    },
    timestamp: {
      order: y.default.order - 1,
      requiredFirstCharacters: ["<"],
      match: e => T.TIMESTAMP_REGEX.exec(e),
      parse(e) {
        let [t, n, s] = e, i = (0, T.parseTimestamp)(n, s);
        return null == i ? {
          type: "text",
          content: t
        } : i
      }
    },
    s: {
      order: a.defaultRules.u.order,
      requiredFirstCharacters: ["~"],
      match: a.inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
      parse: a.defaultRules.u.parse
    },
    spoiler: {
      order: y.default.order,
      requiredFirstCharacters: ["|"],
      match: e => I.MARKDOWN_SPOILER_REGEXP.exec(e),
      parse: (e, t, n) => ({
        content: t(e[1], n),
        channelId: n.channelId
      })
    },
    staticRouteLink: {
      order: y.default.order,
      requiredFirstCharacters: ["<"],
      match: e => I.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
      parse(e, t, n) {
        let s = {
          home: N.default.Messages.SERVER_GUIDE,
          guide: N.default.Messages.SERVER_GUIDE,
          browse: N.default.Messages.CHANNEL_BROWSER_TITLE,
          customize: N.default.Messages.CHANNELS_AND_ROLES
        };
        return {
          content: [{
            type: "text",
            content: s[e[1]]
          }],
          channelId: e[1],
          guildId: V(n.channelId),
          id: e[1]
        }
      }
    },
    heading: v.default,
    list: p.default
  },
  L = (0, S.default)([w, C.default]),
  U = i.omit(L, ["inlineCode", "codeBlock", "br", "blockQuote"]),
  G = i.omit(L, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
  F = i.omit(L, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink"]),
  x = i.omit((0, S.default)([L, {
    inlineCode: {
      match(e, t, n) {
        let s = L.codeBlock.match(e, t, n);
        if (null != s) return s;
        let i = L.inlineCode.match(e, t, n);
        if (null != i) return i
      }
    }
  }]), ["blockQuote", "codeBlock", "br"]),
  B = i.omit(L, ["codeBlock", "br", "blockQuote"]),
  H = i.omit(L, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline"]),
  Y = i.omit(L, ["codeBlock", "blockQuote", "br"]),
  j = i.omit(L, ["codeBlock", "br", "inlineCode"]);

function K(e, t) {
  return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
}
let W = (0, S.default)([{
  highlightWord: {
    order: -1,
    match(e, t) {
      if (null == t.highlightWord || 0 === t.highlightWord.length) return null;
      let n = e.indexOf(t.highlightWord);
      if (-1 === n) return null;
      let s = !K(e, n);
      if (s)
        do n = e.indexOf(t.highlightWord, n + 1), s = !K(e, n); while (s && -1 !== n);
      if (-1 === n) return null;
      let i = e.substring(0, n),
        r = e.substring(n + t.highlightWord.length);
      return [e, t.highlightWord, i, r]
    },
    parse(e, t, n) {
      let s = t(e[2], n),
        i = t(e[3], n);
      return [...s, {
        type: "highlight",
        content: e[1]
      }, ...i]
    }
  }
}, i.omit(L, ["url"])]);
i.omit((0, S.default)([L, {
  mention: {
    match(e, t, n) {
      let s = L.codeBlock.match(e, t, n);
      if (null != s) return s;
      let i = L.inlineCode.match(e, t, n);
      if (null != i) return i
    }
  }
}]), ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]);
var z = {
  RULES: L,
  CHANNEL_TOPIC_RULES: U,
  VOICE_CHANNEL_STATUS_RULES: G,
  EMBED_TITLE_RULES: F,
  INLINE_REPLY_RULES: x,
  GUILD_VERIFICATION_FORM_RULES: B,
  GUILD_EVENT_RULES: Y,
  PROFILE_BIO_RULES: H,
  AUTO_MODERATION_SYSTEM_MESSAGE_RULES: W,
  NATIVE_SEARCH_RESULT_LINK_RULES: j
}