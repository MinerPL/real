"use strict";
n.r(t), n.d(t, {
  useMultiAccountMenuItems: function() {
    return p
  }
}), n("424973");
var a = n("37983");
n("884691");
var s = n("446674"),
  i = n("77078"),
  l = n("449918"),
  r = n("766274"),
  o = n("102985"),
  u = n("697218"),
  d = n("578706"),
  c = n("423487"),
  f = n("599110"),
  E = n("158998"),
  _ = n("694787"),
  h = n("770032"),
  C = n("927101"),
  I = n("891964"),
  T = n("49111"),
  S = n("782340"),
  m = n("962101");

function p() {
  let e = (0, s.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    t = (0, s.useStateFromStores)([o.default], () => o.default.hidePersonalInformation),
    {
      multiAccountUsers: n
    } = (0, C.useMultiAccountUsers)(),
    p = t => {
      t !== (null == e ? void 0 : e.id) && (f.default.track(T.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
        location: {
          section: T.AnalyticsSections.PROFILE_POPOUT
        }
      }), _.switchAccount(t))
    },
    A = n.map(n => {
      let s = new r.default(n),
        o = s.id === (null == e ? void 0 : e.id),
        u = n.tokenStatus === h.MultiAccountTokenStatus.INVALID,
        f = t ? null : "#".concat(s.discriminator);
      return (0, a.jsx)(i.MenuItem, {
        id: s.id,
        focusedClassName: m.focused,
        label: e => {
          let {
            isFocused: r
          } = e;
          return (0, a.jsxs)("div", {
            className: m.userMenuItem,
            children: [(0, a.jsx)(i.Avatar, {
              src: s.getAvatarURL(void 0, 40),
              size: i.AvatarSizes.SIZE_24,
              "aria-label": n.username
            }), (0, a.jsxs)("div", {
              className: m.userMenuUsername,
              children: [(0, a.jsx)(i.Text, {
                className: m.userMenuText,
                variant: "text-sm/normal",
                children: E.default.getUserTag(s, {
                  mode: "username",
                  identifiable: t ? "never" : "always"
                })
              }), !s.isPomelo() && (0, a.jsx)(i.Text, {
                className: m.userMenuDiscriminator,
                variant: "text-sm/normal",
                children: f
              })]
            }), o && (0, a.jsx)(d.default, {
              color: (0, l.getColor)(r ? T.Color.WHITE_500 : T.Color.BRAND_500),
              backgroundColor: (0, l.getColor)(r ? T.Color.BRAND_500 : T.Color.WHITE_500),
              width: 18,
              height: 18,
              className: m.activeIcon
            }), u && (0, a.jsx)(c.default, {
              color: (0, l.getColor)(T.Color.RED_400),
              backgroundColor: (0, l.getColor)(T.Color.WHITE_500),
              width: 15,
              height: 15,
              className: m.activeIcon
            })]
          })
        },
        action: () => {
          u ? (0, I.default)() : p(s.id)
        }
      }, s.id)
    });
  return A.push((0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.MenuSeparator, {}), (0, a.jsx)(i.MenuItem, {
      id: "manage-accounts",
      label: S.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
      action: I.default
    })]
  })), A
}