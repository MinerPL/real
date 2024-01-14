"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  },
  GuildSelector: function() {
    return p
  }
}), n("843762");
var r = n("37983"),
  a = n("884691"),
  i = n("414456"),
  l = n.n(i),
  o = n("446674"),
  s = n("77078"),
  u = n("570697"),
  d = n("305961"),
  c = n("677099"),
  f = n("476263"),
  v = n("449008"),
  h = n("424562"),
  C = n("782340"),
  m = n("764347");

function S(e) {
  let {
    guildId: t,
    className: n,
    globalOption: a,
    hideDivider: i = !1,
    onChange: o,
    renderOptionSuffix: s
  } = e;
  return (0, r.jsx)(u.default, {
    className: l(m.section, n),
    title: C.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
    hideDivider: i,
    forcedDivider: !0,
    children: (0, r.jsx)(p, {
      guildId: t,
      onChange: o,
      renderOptionSuffix: s,
      globalOption: a
    })
  })
}

function p(e) {
  let {
    guildId: t,
    globalOption: n,
    onChange: i,
    renderOptionSuffix: l
  } = e, u = (0, o.useStateFromStores)([h.default], () => h.default.showNotice()), S = (0, o.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()), p = (0, o.useStateFromStores)([d.default], () => d.default.getGuilds()), g = a.useMemo(() => {
    let e = S.map(e => {
      let t = p[e];
      return null == t ? null : {
        label: t.name,
        value: t.id
      }
    }).filter(v.isNotNullish);
    return null != n && e.unshift(n), e
  }, [S, p, n]), F = a.useCallback(e => {
    let t = (null == e ? void 0 : e.label) === (null == n ? void 0 : n.label) && (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value);
    return null == e || "" === e.value || t ? null : (0, r.jsx)(f.default, {
      className: m.guildSelectOptionIcon,
      guild: p[e.value],
      size: f.default.Sizes.SMOL,
      active: !0
    })
  }, [p, n]);
  return (0, r.jsx)(s.SearchableSelect, {
    isDisabled: u,
    onChange: e => {
      if ("" === e || e === (null == n ? void 0 : n.value)) {
        i(null);
        return
      }
      let t = p[e];
      null != t && i(t)
    },
    value: t,
    options: g,
    renderOptionPrefix: F,
    renderOptionSuffix: l,
    placeholder: C.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER
  })
}