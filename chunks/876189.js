"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  s = n("414456"),
  a = n.n(s),
  r = n("446674"),
  o = n("77078"),
  u = n("817963"),
  d = n("305961"),
  c = n("957255"),
  f = n("677099"),
  m = n("697218"),
  h = n("476263"),
  g = n("368121"),
  E = n("427459"),
  S = n("305122"),
  p = n("235004"),
  v = n("846325"),
  _ = n("782340"),
  N = n("151355");

function C(e) {
  let {
    availableSlots: t,
    className: n
  } = e;
  return (0, i.jsxs)(o.Text, {
    className: a(N.suffixNode, n),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, i.jsx)(g.default, {
      className: N.speakerIcon
    }), _.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
      slots: t
    })]
  })
}

function A(e) {
  let {
    value: t,
    className: n,
    onChange: s
  } = e, g = (0, r.useStateFromStoresObject)([f.default, c.default, m.default, d.default], () => {
    let e = {};
    for (let t of f.default.getFlattenedGuildIds()) {
      let n = d.default.getGuild(t);
      if (null == n) continue;
      let i = (0, u.getManageResourcePermissions)(n, c.default, m.default);
      i.canCreateExpressions && (e[n.id] = n)
    }
    return e
  }), A = (0, r.useStateFromStoresObject)([p.default], () => {
    let e = {};
    for (let [n, i] of Object.entries(g)) {
      var t;
      let l = (0, E.getAvailableSoundboardSoundCount)(null !== (t = p.default.getSoundsForGuild(n)) && void 0 !== t ? t : v.EMPTY_SOUND_LIST, i.premiumTier);
      e[n] = l
    }
    return e
  }, [g]);
  l.useEffect(() => {
    (0, S.maybeFetchSoundboardSounds)()
  }, []);
  let b = l.useMemo(() => Object.values(g).map(e => {
      let {
        name: t,
        id: n
      } = e;
      return {
        label: t,
        value: n,
        disabled: A[n] <= 0
      }
    }), [g, A]),
    I = l.useCallback(e => null == e || "" === e.value ? null : (0, i.jsx)(h.default, {
      className: a(N.guildSelectOptionIcon, {
        [N.disabledOption]: e.disabled
      }),
      guild: g[e.value],
      size: h.default.Sizes.SMOL,
      active: !0
    }), [g]),
    O = l.useCallback(e => {
      let t = null == e ? void 0 : e.value;
      return null == t || "" === t ? null : (0, i.jsx)(C, {
        className: a({
          [N.disabledOption]: null == e ? void 0 : e.disabled
        }),
        availableSlots: A[t]
      })
    }, [A]),
    D = l.useCallback(e => (0, i.jsx)("div", {
      className: a({
        [N.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    w = l.useCallback(e => {
      !(A[e] <= 0) && s(e)
    }, [A, s]),
    x = (() => {
      let e = A[null != t ? t : ""];
      return null == e || e > 0 ? t : void 0
    })();
  return (0, i.jsx)(o.SearchableSelect, {
    className: n,
    onChange: w,
    value: x,
    multi: !1,
    options: b,
    renderOptionPrefix: I,
    renderOptionSuffix: O,
    renderOptionLabel: D,
    placeholder: 0 === b.length ? _.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : _.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
  })
}