"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("37983"),
  u = n("884691"),
  i = n("917351"),
  a = n.n(i),
  r = n("249654"),
  s = n("446674"),
  d = n("77078"),
  o = n("267363"),
  c = n("15433"),
  f = n("27978"),
  E = n("923959"),
  v = n("124948"),
  S = n("305961"),
  g = n("660478"),
  h = n("476765"),
  m = n("943232"),
  N = n("945330"),
  C = n("599110"),
  _ = n("449008"),
  T = n("933326"),
  p = n("334683"),
  I = n("534222"),
  x = n("473031"),
  G = n("266763"),
  R = n("842672"),
  D = n("745049"),
  L = n("49111"),
  U = n("133335"),
  y = n("782340"),
  M = n("639480");

function A(e) {
  let {
    transitionState: t,
    onClose: i,
    guildId: A
  } = e, V = (0, h.useUID)(), j = (0, s.useStateFromStores)([S.default], () => S.default.getGuild(A)), P = (0, p.default)(null == j ? void 0 : j.id), O = (0, I.default)(A), F = u.useRef(g.default.ackMessageId(A, U.ReadStateTypes.GUILD_EVENT)), b = (0, R.default)();
  return u.useEffect(() => {
    O.forEach(e => T.default.getGuildEventUserCounts(A, e.id, [])), T.default.getGuildEventsForCurrentUser(A)
  }, [O, A]), u.useEffect(() => {
    let e = S.default.getGuild(A);
    if (!(null == e ? void 0 : e.hasFeature(L.GuildFeatures.HUB))) return;
    let {
      showHubEventsList: t
    } = f.default.getCurrentConfig({
      guildId: A,
      location: "d3755f_1"
    });
    if (!t) return;
    let n = E.default.getDefaultChannel(A);
    null != n && c.fetchDirectoryEntries(n.id)
  }, [A]), u.useEffect(() => {
    C.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: D.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: A,
      guild_events_count: O.length
    })
  }, []), u.useEffect(() => {
    a(O).map(e => e.creator_id).filter(_.isNotNullish).uniq().forEach(e => {
      v.default.requestMember(A, e)
    })
  }, [A, O]), u.useEffect(() => {
    null != A && (0, o.ackGuildFeature)(A, U.ReadStateTypes.GUILD_EVENT)
  }, [A]), (0, l.jsxs)(d.ModalRoot, {
    size: d.ModalSize.MEDIUM,
    transitionState: t,
    "aria-labelledby": V,
    children: [(0, l.jsxs)(d.ModalHeader, {
      className: M.header,
      children: [(0, l.jsx)(m.default, {
        className: M.icon
      }), (0, l.jsx)(d.Heading, {
        id: V,
        variant: "heading-md/semibold",
        children: O.length > 0 ? y.default.Messages.GUILD_EVENTS_PLURAL.format({
          number: O.length
        }) : y.default.Messages.GUILD_EVENTS
      }), P && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: M.divider,
          children: "|"
        }), (0, l.jsx)(d.Button, {
          size: d.Button.Sizes.MIN,
          onClick: () => {
            (0, d.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("590942").then(n.bind(n, "590942"));
              return t => (0, l.jsx)(e, {
                ...t,
                guildId: A
              })
            }, b)
          },
          innerClassName: M.button,
          children: y.default.Messages.SCHEDULE_EVENT
        })]
      }), (0, l.jsx)(d.Clickable, {
        onClick: i,
        className: M.iconButton,
        "aria-label": y.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          className: M.icon
        })
      })]
    }), (0, l.jsx)(d.ModalContent, {
      className: M.content,
      children: O.length > 0 ? O.map(e => (0, l.jsx)(x.default, {
        guildEvent: e,
        guildId: A,
        onActionTaken: i,
        isNew: null != F.current && r.default.compare(e.id, F.current) > 0
      }, e.id)) : (0, l.jsx)(G.default, {
        guildId: A,
        onClose: i
      })
    })]
  })
}