"use strict";
l.r(t), l.d(t, {
  default: function() {
    return Q
  }
}), l("222007"), l("808653"), l("424973"), l("881410");
var n = l("917351"),
  a = l.n(n),
  r = l("132710"),
  i = l.n(r),
  u = l("679653"),
  o = l("385976"),
  s = l("867805"),
  c = l("252931"),
  d = l("888198"),
  f = l("290689"),
  p = l("804888"),
  h = l("401690"),
  E = l("845579"),
  g = l("42203"),
  m = l("923959"),
  A = l("26989"),
  L = l("305961"),
  y = l("957255"),
  C = l("27618"),
  S = l("102985"),
  N = l("697218"),
  _ = l("25292"),
  T = l("402671"),
  I = l("158998"),
  R = l("49111"),
  v = l("958706"),
  b = l("782340");

function U(e, t, l) {
  let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  if (t[0] !== e) return null;
  let a = t.substr(e.length);
  return l.sortBy(e => {
    let {
      text: t
    } = e;
    return -t.length
  }).filter(e => {
    let {
      text: l
    } = e;
    return 1 === t.toLowerCase().indexOf(l.toLowerCase())
  }).sortBy(e => {
    let {
      text: t
    } = e;
    return t === a ? 0 : 1
  }).map(t => {
    let {
      id: l,
      text: a
    } = t;
    return [e + a, l, n]
  }).first()
}

function M(e) {
  return {
    order: e.order,
    match: e.match,
    parse: t => ({
      type: e.type,
      content: t[0]
    })
  }
}

function O(e) {
  return {
    match: i.anyScopeRegex(e),
    parse: e => ({
      type: "text",
      content: e[0]
    })
  }
}
let G = d.default.RULES,
  D = f.default,
  w = /^<@!?(\d+)>/,
  P = /^<@&(\d+)>/,
  x = /^<#(\d+)>/,
  k = /^<a?:(\w+):(\d+)>/,
  F = /(@everyone|@here|@Clyde)\b/,
  H = {
    link: M(i.defaultRules.link),
    autolink: M(i.defaultRules.autolink),
    url: M(i.defaultRules.url),
    inlineCode: M(G.inlineCode),
    codeBlock: M(G.codeBlock),
    rawUserMention: O(w),
    rawRoleMention: O(P),
    rawChannelMention: O(x),
    rawEmoji: O(k),
    mention: {
      match(e, t, l) {
        let n = l.split(" ").pop() + e;
        if (/^[^ ]+@[^ ]+\.[^ .]+/.test(n)) return null;
        let a = U("@", e, t.users, "mention");
        if (a || (a = U("@", e, t.mentionableRoles, "roleMention"))) return a;
        let r = t.users.map(e => ({
          ...e,
          text: e.text.split("#")[0]
        }));
        if (!(a = U("@", e, r, "mention"))) return null;
        let i = F.exec(e);
        if (null != i && a[0].length <= i[0].length) return null;
        if ("" === l && (0, p.canSuppressNotifications)()) {
          let t = p.SILENT_RE.exec(e);
          if (null != t && a[0].length <= t[0].length) return null
        }
        return a
      },
      parse(e) {
        let [, t, l] = e, n = "@";
        return "roleMention" === l && (n += "&"), {
          type: l,
          content: "<".concat(n).concat(t, ">")
        }
      }
    },
    channel: {
      match: (e, t) => (function(e, t, l) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (t[0] !== e) return null;
        if ('"' !== t[1]) return U(e, t, l, n);
        let a = 2;
        for (; a < t.length; a++) {
          if ("\\" === t[a]) {
            a++;
            continue
          }
          if ('"' === t[a]) break
        }
        let r = t.substring(0, a + 1),
          i = (0, u.unescapeChannelName)(t.substring(2, a));
        return l.sortBy(e => {
          let {
            text: t
          } = e;
          return -t.length
        }).filter(e => {
          let {
            text: t
          } = e;
          return i === t
        }).map(e => {
          let {
            id: t
          } = e;
          return [r, t, n]
        }).first()
      })("#", e, t.channels),
      parse: e => ({
        type: "text",
        content: "<#".concat(e[1], ">")
      })
    },
    emoticon: {
      match(e, t, l) {
        if (!E.ConvertEmoticons.getSetting() || 0 !== l.length && !/\s$/.test(l)) return null;
        let n = s.default.EMOJI_SHORTCUT_RE.exec(e);
        return null == n || n[0].length !== e.length && " " !== e[n[0].length] && "\n" !== e[n[0].length] ? null : n
      },
      parse: e => ({
        type: "emoticon",
        content: s.default.convertShortcutToName(e[1]),
        isShortcut: !0
      })
    },
    emoji: {
      order: G.emoji.order,
      match: e => s.default.EMOJI_NAME_RE.exec(e),
      parse(e, t, l) {
        let [n, a] = e, {
          customEmoji: r
        } = l, i = Object.prototype.hasOwnProperty.call(r, a) ? r[a] : null;
        if (null != i) {
          var u;
          return {
            type: "customEmoticon",
            content: "<".concat(!0 === i.animated ? "a" : "", ":").concat(null !== (u = i.originalName) && void 0 !== u ? u : i.name, ":").concat(i.id, ">"),
            emoji: i
          }
        }
        return {
          type: "text",
          content: n
        }
      }
    },
    customEmoticons: {
      match(e, t) {
        var l, n;
        return null !== (n = null === (l = t.customEmoticonsRegex) || void 0 === l ? void 0 : l.exec(e)) && void 0 !== n ? n : null
      },
      parse(e, t, l) {
        let [n, a] = e, {
          emojiContext: r
        } = l, i = r.getEmoticonByName(a);
        return null != i ? {
          type: "customEmoticon",
          content: "<".concat(!0 === i.animated ? "a" : "", ":").concat(i.name, ":").concat(i.id, ">"),
          emoji: i
        } : {
          type: "text",
          content: n
        }
      }
    },
    text: {
      ...D,
      match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, f.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != D.match ? D.match(e, t, "") : null
    }
  },
  q = {
    inlineCode: M(G.inlineCode),
    codeBlock: M(G.codeBlock),
    mention: {
      match: i.anyScopeRegex(w),
      parse(e, t, l) {
        let {
          isNotification: n
        } = l, a = N.default.getUser(e[1]);
        if (null == a) return {
          content: e[0]
        };
        let r = I.default.getUserTag(a, {
          identifiable: n && S.default.enabled ? "never" : "always"
        });
        if (!n) return {
          content: "@".concat(r)
        };
        {
          let e = I.default.getGlobalName(a);
          return {
            content: null != e ? "@".concat(e) : "@".concat(r)
          }
        }
      }
    },
    roleMention: {
      match: i.anyScopeRegex(P),
      parse(e, t, l) {
        let {
          guild: n
        } = l;
        if (null != n) {
          let t = n.roles[e[1]];
          if (null != t) return {
            content: "@".concat(t.name)
          }
        }
        return {
          content: e[0]
        }
      }
    },
    channel: {
      match: i.anyScopeRegex(x),
      parse(e) {
        let t = g.default.getChannel(e[1]);
        return {
          content: null == t ? e[0] : (0, u.computeChannelName)(t, N.default, C.default, !0, !0)
        }
      }
    },
    emoji: {
      match: i.anyScopeRegex(k),
      parse(e, t, l) {
        let [n, a, r] = e, {
          guild: i
        } = l, u = o.default.getDisambiguatedEmojiContext(i ? i.id : null).getById(r), s = null != u ? u.name : a;
        return {
          content: ":".concat(s, ":")
        }
      }
    },
    soundboard: {
      match: i.anyScopeRegex(/^<sound:(\d+)>/),
      parse(e) {
        let [t, l] = e;
        return {
          content: "<sound:".concat(l, ">")
        }
      }
    },
    spoiler: {
      match: i.anyScopeRegex(R.MARKDOWN_SPOILER_REGEXP),
      parse: () => ({
        content: "<".concat(b.default.Messages.SPOILER.toLowerCase(), ">")
      })
    },
    staticRouteLink: {
      match: i.anyScopeRegex(R.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
      parse: e => ({
        content: "<id:".concat(e[1], ">")
      })
    },
    timestamp: {
      ...G.timestamp,
      parse() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++) t[l] = arguments[l];
        let n = G.timestamp.parse(...t);
        return {
          content: n.formatted
        }
      }
    },
    text: {
      ...D
    }
  };
[H, q].forEach(e => {
  Object.keys(e).forEach((t, l) => {
    e[t].order = l
  })
});
let B = i.parserFor(H),
  V = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

function K(e, t, l, n) {
  let a = "";
  return e.forEach(e => {
    if (! function(e, t, l) {
        if (null != l && ("customEmoticon" === t.type && l(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
          let n;
          let a = s.default.translateSurrogatesToInlineEmoji(t.content);
          for (; null !== (n = V.exec(a));) {
            let a;
            null != n[1] && "" !== n[1] ? e.emojiContext && (a = e.emojiContext.getById(n[1])) : a = s.default.getByName(n[2]), a && l(a, t.isShortcut || !1)
          }
        }
      }(t, e, n), "string" == typeof e.content) switch (e.type) {
      case "codeBlock":
      case "inlineCode":
      case "mention":
      case "roleMention":
      case "channel":
      case "emoji":
        a += e.content;
        break;
      default:
        a += l(e.content)
    } else e.content.constructor === Array ? a += K(e.content, t, l, n) : console.warn("Unknown message item type: ", e)
  }), a
}

function Y(e) {
  let t;
  let l = null == e ? void 0 : e.getGuildId(),
    n = null != l ? L.default.getGuild(l) : null,
    r = y.default.can(R.Permissions.MENTION_EVERYONE, e);
  t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(e => ({
    userId: e,
    nick: null
  })) : null != l ? A.default.getMembers(l).map(e => {
    let {
      userId: t,
      nick: l
    } = e;
    return {
      userId: t,
      nick: l
    }
  }) : [];
  let i = a(t.reduce((e, t) => {
      let {
        userId: l
      } = t, n = N.default.getUser(l);
      return null == n ? e : (e.push({
        id: l,
        text: n.tag
      }), e)
    }, [])),
    u = a(null != n ? n.roles : {}).values().filter(e => {
      let {
        mentionable: t
      } = e;
      return r || t
    }).map(e => {
      let {
        id: t,
        name: l
      } = e;
      return {
        id: t,
        text: l
      }
    }),
    s = a(m.default.getTextChannelNameDisambiguations(l)).map(e => {
      let {
        id: t,
        name: l
      } = e;
      return {
        id: t,
        text: l
      }
    }),
    d = null != l ? a(_.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== m.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => m.default.getChannels(l)[e].map(e => ({
      id: e.channel.id,
      text: e.channel.name
    }))).value() : [],
    f = h.default.computeAllActiveJoinedThreads(l).map(e => ({
      id: e.id,
      text: e.name
    })),
    p = o.default.getDisambiguatedEmojiContext(l),
    E = p.getEscapedCustomEmoticonNames(),
    g = p.getCustomEmoji(),
    C = p.getCustomEmoticonRegex(),
    S = N.default.getCurrentUser(),
    T = (0, c.getInventoryGuildPacksUserExperimentConfig)({
      user: S,
      autoTrackExposure: !1
    }).viewAndUseEnabled,
    I = {
      inline: !0,
      mentionableRoles: u,
      guild: n,
      users: i,
      channels: s.concat(d).concat(f),
      emojiContext: p,
      customEmoticonsRegex: C,
      canViewAndUsePackEmoji: T,
      customEmoji: g,
      textExclusions: E,
      disableErrorGuards: !0
    };
  return I
}

function j(e) {
  return e
}
var Q = {
  parse(e, t) {
    var l, n, a;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
      i = null != r ? r : Y(e),
      u = {
        content: t,
        tts: !1,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      };
    return u.content = (l = u.content, n = i, a = (t, l) => {
      T.default.isEmojiPremiumLocked({
        emoji: t,
        channel: e,
        intention: v.EmojiIntention.CHAT,
        canViewAndUsePackEmoji: i.canViewAndUsePackEmoji
      }) ? u.invalidEmojis.push(t) : !l && u.validNonShortcutEmojis.push(t)
    }, K(B(l, n), n, s.default.translateInlineEmojiToSurrogates, a)), u
  },
  parsePreprocessor(e, t) {
    let l = Y(e);
    return B(t, l)
  },
  unparse(e, t, l) {
    let n = g.default.getChannel(t),
      r = null != n ? n.getGuildId() : null,
      u = null != r ? L.default.getGuild(r) : null,
      o = l ? q : a.omit(q, ["spoiler", "timestamp"]),
      c = l ? j : s.default.translateSurrogatesToInlineEmoji,
      d = i.parserFor(o),
      f = {
        inline: !0,
        guild: u,
        isNotification: l
      };
    return K(d(e, f), f, c)
  }
}