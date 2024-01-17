"use strict";
n.r(t), n.d(t, {
  DiscoveryTagStyle: function() {
    return C
  },
  DiscoveryTags: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("77078"),
  o = n("731898"),
  u = n("599110"),
  d = n("49111"),
  c = n("259160");
let f = ["egirl", "egirls", "waifu", "dating", "nsfw", "sex", "playboy", "stupid", "harem", "playgirl", "shitcoin", "shitpost", "porno", "nudes", "sexy", "horny", "fart", "tits", "balls", "cum"],
  E = e => {
    let {
      text: t,
      onClick: n,
      className: s,
      hide: i
    } = e;
    return (0, a.jsx)("li", {
      className: l(c.tag, s, {
        [c.hide]: i
      }),
      children: (0, a.jsx)(r.Clickable, {
        className: c.tagText,
        onClick: e => {
          e.stopPropagation(), e.preventDefault(), n(e)
        },
        children: t
      })
    })
  },
  _ = e => {
    let {
      tags: t,
      onTagClick: n,
      guildId: i,
      section: l
    } = e;
    return s.useEffect(() => {
      u.default.track(d.AnalyticEvents.OPEN_POPOUT, {
        type: "Discovery Tags Overflow",
        guild_id: i,
        location: {
          page: d.AnalyticsPages.GUILD_DISCOVERY,
          section: l
        }
      })
    }, [i, l]), (0, a.jsx)(r.Dialog, {
      className: c.overflowTagsPopout,
      children: (0, a.jsx)("ul", {
        children: t.map(e => (0, a.jsx)(E, {
          onClick: () => n(e),
          className: c.tagAlt,
          text: e
        }, e))
      })
    })
  },
  h = e => {
    let {
      className: t,
      count: n
    } = e;
    return (0, a.jsx)(r.Popout, {
      renderPopout: () => (0, a.jsx)(_, {
        ...e
      }),
      position: "right",
      align: "top",
      closeOnScroll: !0,
      children: e => (0, a.jsx)(E, {
        className: t,
        ...e,
        text: "+".concat(n)
      })
    })
  },
  C = {
    DEFAULT: c.tagDefault,
    LIGHT: c.tagLight,
    ALT: c.tagAlt
  },
  I = e => {
    let {
      tags: t,
      onTagClick: n,
      className: i,
      discoveryTagStyle: r = C.DEFAULT,
      hideOverflow: u = !1,
      guildId: d,
      section: _
    } = e, {
      ref: I,
      width: T
    } = (0, o.default)(), [S, m] = s.useState(null), p = t.filter(e => !f.includes(e.toLowerCase()));
    return s.useLayoutEffect(() => {
      if (null == I.current || null == T || 0 === T) return;
      let e = 0,
        t = 0,
        n = T - 40 - 4;
      for (let a = 0; a < p.length; a++) {
        let s = I.current.children[a],
          i = s.clientWidth;
        if (t += i + 4, a === p.length - 1 ? t > n + 40 : t > n) break;
        e++
      }
      m(t => e <= p.length ? e : t)
    }, [T, I, p]), (0, a.jsxs)("ul", {
      ref: I,
      className: l(c.tagContainer, i, {
        [c.invisible]: null == S
      }),
      children: [p.map((e, t) => (0, a.jsx)(E, {
        className: r,
        onClick: () => n(e),
        hide: null != S && t >= S,
        text: e
      }, e)), !u && null != S && S < p.length && (0, a.jsx)(h, {
        className: r,
        onTagClick: n,
        tags: p.slice(S),
        count: p.length - S,
        guildId: d,
        section: _
      })]
    })
  }