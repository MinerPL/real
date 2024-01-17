"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("798609"),
  d = n("175528"),
  c = n("274800"),
  f = n("574073"),
  E = n("401642"),
  _ = n("42203"),
  T = n("305961"),
  I = n("697218"),
  m = n("666897"),
  N = n("49111"),
  p = n("406291"),
  S = n("782340"),
  A = n("532560");
let C = {
    tag: "span",
    variant: "text-md/normal",
    color: "header-secondary"
  },
  h = {
    className: i("mention", A.mention)
  };

function g(e) {
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(o.Text, {
      ...C,
      color: "header-primary",
      children: e
    })
  })
}
var M = l.memo(function(e) {
  var t, n, a, i, M, O;
  let R, {
      channel: L,
      messageId: v,
      interactionData: P
    } = e,
    {
      onCopy: D,
      copyRef: x
    } = (0, d.default)(L, null == P ? void 0 : null === (t = P.application_command) || void 0 === t ? void 0 : t.id),
    y = (0, r.useStateFromStores)([T.default], () => T.default.getGuild(L.guild_id), [L.guild_id]);
  if (l.useEffect(() => {
      (null == P || P.type === u.ApplicationCommandType.CHAT && void 0 === P.application_command) && c.fetchMessageInteractionData(L.id, v)
    }, [L.id, v, P]), null == P) R = (0, s.jsx)(o.Spinner, {
    type: o.Spinner.Type.SPINNING_CIRCLE,
    className: A.spinner
  });
  else {
    let e = [],
      t = Object.fromEntries((null !== (i = null === (n = P.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== i ? i : []).map(e => [e.name, e]));
    for (let n of null !== (M = P.options) && void 0 !== M ? M : []) e = e.concat(function e(t, n, a, i, r) {
      var d, c, T, A, M, O, R;
      let L;
      let v = null != i ? i + " " + t.name : t.name;
      if (t.type === u.ApplicationCommandOptionType.SUB_COMMAND || t.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
        let i = [(0, s.jsxs)(l.Fragment, {
            children: [" ", (0, s.jsx)(o.Text, {
              ...C,
              children: null !== (c = null == r ? void 0 : r.name_localized) && void 0 !== c ? c : t.name
            })]
          }, v)],
          u = Object.fromEntries(null === (d = null !== (T = null == r ? void 0 : r.options) && void 0 !== T ? T : []) || void 0 === d ? void 0 : d.map(e => [e.name, e]));
        for (let s of null !== (A = t.options) && void 0 !== A ? A : []) i = i.concat(e(s, n, a, v, u[s.name]));
        return i
      }
      let P = t.value;
      if (null != t.value) switch (t.type) {
        case u.ApplicationCommandOptionType.USER: {
          let e = t.value.toString(),
            l = I.default.getUser(e);
          if (null != l) {
            let e = (0, f.getUserAuthor)(l, n);
            L = (0, s.jsxs)(m.default, {
              ...h,
              onClick: () => (0, E.openUserProfileModal)({
                userId: l.id,
                guildId: n.guild_id,
                analyticsLocation: {
                  section: N.AnalyticsSections.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                }
              }),
              children: [p.MENTION_SENTINEL, e.nick]
            })
          }
          break
        }
        case u.ApplicationCommandOptionType.CHANNEL: {
          let e = t.value.toString(),
            n = _.default.getChannel(e);
          null != n && (L = (0, s.jsxs)(m.default, {
            ...h,
            children: [p.CHANNEL_SENTINEL, n.name]
          }));
          break
        }
        case u.ApplicationCommandOptionType.ROLE: {
          let e = t.value.toString(),
            n = (null == a ? void 0 : a.roles) != null ? a.roles[e] : null;
          null != n && (L = (0, s.jsxs)(m.default, {
            ...h,
            children: [p.MENTION_SENTINEL, n.name]
          }));
          break
        }
        case u.ApplicationCommandOptionType.MENTIONABLE: {
          let e = t.value.toString(),
            l = (null == a ? void 0 : a.roles) != null ? a.roles[e] : null;
          if (null != l) L = (0, s.jsxs)(m.default, {
            children: [p.MENTION_SENTINEL, l.name]
          });
          else {
            let t = I.default.getUser(e);
            if (null != t) {
              let e = (0, f.getUserAuthor)(t, n);
              L = (0, s.jsxs)(m.default, {
                ...h,
                onClick: () => (0, E.openUserProfileModal)({
                  userId: t.id,
                  guildId: n.guild_id,
                  analyticsLocation: {
                    section: N.AnalyticsSections.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                  }
                }),
                children: [p.MENTION_SENTINEL, e.nick]
              })
            }
          }
          break
        }
        case u.ApplicationCommandOptionType.ATTACHMENT:
          L = g(S.default.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
          break;
        default: {
          let e = null == r ? void 0 : null === (M = r.choices) || void 0 === M ? void 0 : M.find(e => e.value === t.value);
          null != e && (P = null !== (O = e.name_localized) && void 0 !== O ? O : e.name)
        }
      }
      return null == L && (L = g(null == P ? void 0 : P.toString())), [(0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsxs)(o.Text, {
          ...C,
          children: [" ", null !== (R = null == r ? void 0 : r.name_localized) && void 0 !== R ? R : t.name, ": "]
        }), L]
      }, v)]
    }(n, L, y, null, t[n.name]));
    R = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)(o.Text, {
        ...C,
        children: ["/", null !== (O = null === (a = P.application_command) || void 0 === a ? void 0 : a.name_localized) && void 0 !== O ? O : P.name]
      }), e]
    })
  }
  return (0, s.jsxs)("div", {
    className: A.container,
    onCopy: e => {
      var t, n, s;
      let l = null !== (s = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== s ? s : "";
      l.startsWith("/") && l.endsWith("\n") && D(e, P)
    },
    children: [(0, s.jsx)("div", {
      className: A.tooltip,
      ref: x,
      children: R
    }), (0, s.jsx)("div", {
      className: A.tooltipPointer
    })]
  })
})