"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("424973"), n("222007"), n("881410");
var a = n("37983"),
  s = n("884691"),
  i = n("77078"),
  l = n("401642"),
  r = n("444097"),
  o = n("49111"),
  u = n("782340");

function d(e, t, n, s, d) {
  let c = [];
  for (let {
      user: t,
      status: n
    }
    of e) c.push((0, a.jsx)(i.MenuItem, {
    id: t.id,
    keepItemStyles: !0,
    render: e => (0, a.jsx)(r.default, {
      ...e,
      user: t,
      status: n,
      guildId: d
    }),
    action: () => (0, l.openUserProfileModal)({
      userId: t.id,
      analyticsLocation: {
        section: o.AnalyticsSections.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU
      }
    })
  }));
  for (let e of t) c.push((0, a.jsx)(i.MenuItem, {
    id: e.id,
    keepItemStyles: !0,
    render: t => (0, a.jsx)(r.default, {
      ...t,
      user: e,
      guildId: d
    }),
    action: () => (0, l.openUserProfileModal)({
      userId: e.id,
      analyticsLocation: {
        section: o.AnalyticsSections.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU
      }
    })
  }));
  let E = n - c.length;
  return E > 0 && c.push((0, a.jsx)(i.MenuItem, {
    id: "unknown-members-".concat(null == s ? void 0 : s.session_id),
    render: e => (0, a.jsx)(r.NowPlayingUnknownMemberMenuItem, {
      ...e,
      label: u.default.Messages.GAME_FEED_UNKNOWN_PLAYERS.format({
        count: E
      })
    })
  })), c
}

function c(e) {
  let {
    priorityMembers: t,
    partiedMembers: n,
    currentActivities: l,
    guildContext: r
  } = e, o = new Set(t.map(e => {
    let {
      user: t
    } = e;
    return t.id
  })), c = n.filter(e => !o.has(e.id)), E = s.useMemo(() => {
    let e = l.flatMap(e => {
      let {
        playingMembers: t
      } = e;
      return t
    }).map(e => e.id);
    return n.filter(t => !e.includes(t.id))
  }, [n, l]);
  if (l.length <= 1 && 0 === E.length) {
    var f, _;
    return (0, a.jsx)(i.MenuGroup, {
      label: n.length > 1 ? u.default.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
        memberCount: n.length
      }) : void 0,
      children: d(t, c, n.length, null !== (_ = null === (f = l[0]) || void 0 === f ? void 0 : f.activity) && void 0 !== _ ? _ : void 0, null == r ? void 0 : r.id)
    })
  }
  let h = l.map((e, n) => {
      let {
        playingMembers: s,
        game: l,
        activity: u
      } = e, c = new Set(s.map(e => e.id));
      return (0, a.jsx)(i.MenuGroup, {
        label: "".concat(l.name, " - ").concat(s.length),
        children: d(t.filter(e => {
          let {
            user: t
          } = e;
          return c.has(t.id)
        }), s.filter(e => !o.has(e.id)), s.length, null != u ? u : void 0, null == r ? void 0 : r.id)
      }, n)
    }),
    C = E.map(e => e.id),
    T = (0, a.jsx)(i.MenuGroup, {
      label: "".concat(u.default.Messages.ACTIVITY_FEED_OTHER_MEMBER_LIST_HEADER, " - ").concat(E.length),
      children: d(t.filter(e => {
        let {
          user: t
        } = e;
        return C.includes(t.id)
      }), E.filter(e => !o.has(e.id)), E.length, void 0, null == r ? void 0 : r.id)
    });
  return [...h, T]
}