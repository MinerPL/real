"use strict";
s.r(t), s.d(t, {
  MultiAccountActionType: function() {
    return a
  },
  default: function() {
    return x
  }
}), s("506083");
var a, n, r = s("37983"),
  o = s("884691"),
  l = s("414456"),
  i = s.n(l),
  u = s("446674"),
  d = s("77078"),
  c = s("437822"),
  h = s("272030"),
  f = s("766274"),
  m = s("271938"),
  p = s("102985"),
  C = s("697218"),
  S = s("433487"),
  g = s("599110"),
  T = s("158998"),
  A = s("694787"),
  N = s("770032"),
  E = s("927101"),
  _ = s("49111"),
  M = s("782340"),
  O = s("31295");

function I(e) {
  let {
    actionText: t,
    user: s,
    onAction: a
  } = e, {
    currentUser: n,
    hidePrivateData: o,
    isAuthenticated: l
  } = (0, u.useStateFromStoresObject)([C.default, p.default, m.default], () => ({
    currentUser: C.default.getCurrentUser(),
    hidePrivateData: p.default.hidePersonalInformation,
    isAuthenticated: m.default.isAuthenticated()
  })), E = new f.default(s), I = l && (null == n ? void 0 : n.id) === E.id, x = s.tokenStatus === N.MultiAccountTokenStatus.INVALID, R = o || E.isPomelo() ? null : "#".concat(E.discriminator), L = null;
  return I ? L = (0, r.jsx)(d.Text, {
    variant: "text-sm/semibold",
    className: O.hintText,
    color: "text-positive",
    children: M.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
  }) : x && (L = (0, r.jsx)(d.Text, {
    variant: "text-sm/semibold",
    className: O.hintText,
    color: "text-danger",
    children: M.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
  })), (0, r.jsx)("div", {
    className: O.accountCard,
    children: (0, r.jsxs)("div", {
      className: O.userDetails,
      children: [(0, r.jsx)(d.Avatar, {
        src: E.getAvatarURL(void 0, 40),
        size: d.AvatarSizes.SIZE_40,
        "aria-label": s.username
      }), (0, r.jsxs)("div", {
        className: i(O.usernameSection, {
          [O.hasActionMaxWidth]: !I
        }),
        children: [(0, r.jsxs)("div", {
          className: O.username,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: O.textOverflow,
            children: T.default.getUserTag(E, {
              mode: "username",
              identifiable: o ? "never" : "always"
            })
          }), (0, r.jsx)(d.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: R
          })]
        }), L]
      }), (0, r.jsxs)("div", {
        className: O.userActions,
        children: [!I && (0, r.jsx)(d.Button, {
          onClick: function() {
            if (x) {
              a(0, s.id);
              return
            }
            g.default.track(_.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: _.AnalyticsSections.MANAGE_ACCOUNTS_MODAL
              }
            }), A.switchAccount(s.id), a(1, s.id)
          },
          color: d.Button.Colors.PRIMARY,
          children: x ? M.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
        }), (0, r.jsx)(d.Button, {
          className: O.userActionMenu,
          onClick: function(e) {
            (0, h.openContextMenu)(e, e => {
              let {
                onSelect: t
              } = e;
              return (0, r.jsx)(d.Menu, {
                "aria-label": M.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                navId: "manage-multi-account",
                onClose: h.closeContextMenu,
                onSelect: t,
                children: (0, r.jsx)(d.MenuItem, {
                  id: "remove-account",
                  label: M.default.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                  action: () => {
                    ! function() {
                      c.default.logout(null, s.id).finally(() => {
                        A.removeAccount(s.id)
                      });
                      let e = {};
                      null != n ? e.section = _.AnalyticsSections.MANAGE_ACCOUNTS_MODAL : e.page = _.PageAnalyticsLocations.LOGIN, g.default.track(_.AnalyticEvents.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                        location: e
                      }), a(2, s.id)
                    }(), null != t && t()
                  },
                  color: "danger"
                })
              })
            })
          },
          size: d.Button.Sizes.ICON,
          look: d.Button.Looks.BLANK,
          color: d.Button.Colors.WHITE,
          "aria-label": M.default.Messages.MORE_OPTIONS,
          children: (0, r.jsx)(S.default, {
            className: O.overflowMenuIcon
          })
        })]
      })]
    })
  })
}

function x(e) {
  let {
    actionText: t,
    onAction: s
  } = e, {
    isLoading: a,
    multiAccountUsers: n
  } = (0, E.useMultiAccountUsers)();
  return (0, r.jsx)("div", {
    className: O.list,
    children: a ? (0, r.jsx)(d.Spinner, {}) : n.map((e, a) => (0, r.jsxs)(o.Fragment, {
      children: [(0, r.jsx)(I, {
        user: e,
        actionText: t,
        onAction: s
      }, e.id), n.length - 1 !== a && (0, r.jsx)("div", {
        role: "separator",
        className: O.separator
      })]
    }, e.id))
  })
}(n = a || (a = {}))[n.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", n[n.SWITCHED = 1] = "SWITCHED", n[n.REMOVED = 2] = "REMOVED"