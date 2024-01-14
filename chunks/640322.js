"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("446674"),
  l = n("151426"),
  r = n("95410"),
  o = n("489560"),
  u = n("55058"),
  d = n("384997"),
  c = n("48821"),
  E = n("388437"),
  f = n("667048"),
  _ = n("153014"),
  h = n("79176"),
  C = n("986321"),
  T = n("519440"),
  I = n("947337"),
  S = n("197881"),
  N = n("401774"),
  A = n("607894"),
  p = n("746504"),
  m = n("107153"),
  g = n("32505"),
  R = n("731681"),
  O = n("427474"),
  L = n("994428");

function v(e) {
  e.stopPropagation()
}

function M(e) {
  var t;
  let {
    guild: n
  } = e, [o, c] = s.useState(null !== (t = r.default.get(O.LAST_HIDDEN_CHANNEL_NOTICE)) && void 0 !== t ? t : 0), _ = e => {
    r.default.set(O.LAST_HIDDEN_CHANNEL_NOTICE, e), c(e)
  }, C = (0, i.useStateFromStoresArray)(O.CHANNEL_NOTICE_STORES, () => O.CHANNEL_NOTICES.filter(e => {
    let {
      store: t
    } = e;
    return null == t ? void 0 : t.channelNoticePredicate(n, o)
  }).map(e => e.dismissibleContentType));
  return (0, a.jsx)(d.default, {
    contentTypes: C,
    groupName: L.DismissibleContentGroupName.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e, i = () => {
        _(Date.now()), s(L.ContentDismissActionType.UNKNOWN)
      }, r = (() => {
        switch (t) {
          case l.DismissibleContent.CHANNEL_NOTICE_HUBLINK:
            return (0, a.jsx)(h.default, {
              guild: n,
              markAsDismissed: i
            });
          case l.DismissibleContent.CHANNEL_NOTICE_INVITE:
            return (0, a.jsx)(p.default, {
              guild: n,
              markAsDismissed: i
            });
          case l.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, a.jsx)(f.default, {
              guild: n,
              markAsDismissed: i
            });
          case l.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, a.jsx)(g.default, {
              guild: n,
              markAsDismissed: i
            });
          case l.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, a.jsx)(E.default, {
              guild: n,
              markAsDismissed: i
            });
          case l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
            return (0, a.jsx)(A.default, {
              guild: n,
              markAsDismissed: i
            });
          case l.DismissibleContent.LINKED_ROLE_ADMIN_GUILD:
            return (0, a.jsx)(u.default, {
              guild: n,
              markAsDismissed: () => s(L.ContentDismissActionType.UNKNOWN)
            });
          default:
            return null
        }
      })();
      return null == r ? null : (0, a.jsx)("div", {
        onContextMenu: v,
        children: r
      })
    }
  })
}
var P = e => {
  let {
    guild: t
  } = e, n = (0, R.default)(t);
  switch (n) {
    case R.ConnectedChannelNotices.ENABLE_PUBLIC_GUILD:
      return (0, a.jsx)(I.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, a.jsx)(c.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.MAX_MEMBER_COUNT:
      return (0, a.jsx)(m.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.GUILD_LIVE_CHANNEL:
      return (0, a.jsx)(_.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.GUILD_MFA_WARNING:
      return (0, a.jsx)(N.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.COMMANDS_MIGRATION:
      return (0, a.jsx)(T.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, a.jsx)(o.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.HUB_STUDY_ROOM:
      return (0, a.jsx)(C.default, {
        guild: t
      })
  }
  return S.ProcessArgs.isDisallowPopupsSet() ? null : (0, a.jsx)(M, {
    guild: e.guild
  })
}