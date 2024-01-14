"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("776466"),
  u = s("79112"),
  c = s("642950"),
  S = s("135230"),
  E = s("550766"),
  f = s("191225"),
  T = s("29479"),
  m = s("250404"),
  _ = s("102985"),
  g = s("941886"),
  h = s("145131"),
  I = s("266926"),
  N = s("315102"),
  p = s("161778"),
  C = s("101787"),
  A = s("216503"),
  O = s("49111"),
  x = s("782340"),
  R = s("799068"),
  M = s("926622");
let v = r.default.connectStores([p.default], () => ({
  theme: p.default.theme
}))(g.default);

function D(e) {
  let {
    application: t
  } = e;
  return (0, a.jsxs)("div", {
    className: R.twoWayWarning,
    children: [(0, a.jsx)(I.default, {
      className: R.twoWayWarningIcon
    }), (0, a.jsx)(o.Text, {
      color: "text-normal",
      variant: "text-sm/medium",
      children: x.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
        applicationName: t.name,
        onConnectionPress: () => u.default.setSection(O.AnalyticsSections.SETTINGS_CONNECTIONS)
      })
    })]
  })
}
let L = e => {
  let {
    scopes: t,
    application: s,
    onDelete: n
  } = e, l = () => {
    let e = x.default.Messages.DELETE_APP_CONFIRM_MSG;
    return (0, C.default)(s.id) && (e = (0, a.jsxs)(a.Fragment, {
      children: [e, (0, a.jsx)(A.default, {
        className: R.infoBox,
        children: x.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
          applicationName: s.name
        })
      })]
    })), (0, o.openModal)(t => (0, a.jsx)(S.default, {
      title: x.default.Messages.DEAUTHORIZE_APP,
      body: e,
      confirmText: x.default.Messages.DEAUTHORIZE,
      cancelText: x.default.Messages.CANCEL,
      onConfirm: n,
      ...t
    }))
  }, r = (0, C.useShouldWarnAuthorizedAppTwoWay)(s.id);
  return (0, a.jsx)(o.Card, {
    className: i(R.authedApp, M.marginBottom8),
    outline: !0,
    children: (0, a.jsxs)(o.HeadingLevel, {
      component: (() => {
        let e = N.default.getApplicationIconURL({
            id: s.id,
            icon: s.icon
          }),
          t = null != e ? (0, a.jsx)(h.default.Child, {
            className: R.appAvatar,
            grow: 0,
            children: (0, a.jsx)("img", {
              src: e,
              alt: ""
            })
          }) : null;
        return (0, a.jsxs)(h.default, {
          className: i(R.header, M.marginBottom20),
          children: [(0, a.jsxs)(h.default, {
            className: R.headerInfo,
            children: [t, (0, a.jsx)(h.default.Child, {
              children: (0, a.jsx)(o.Heading, {
                variant: "text-sm/semibold",
                children: s.name
              })
            })]
          }), (0, a.jsx)(h.default.Child, {
            wrap: !0,
            grow: 0,
            children: (0, a.jsx)(o.Button, {
              className: R.deleteApp,
              color: o.ButtonColors.RED,
              look: o.ButtonLooks.OUTLINED,
              size: o.ButtonSizes.SMALL,
              onClick: l,
              children: x.default.Messages.DEAUTHORIZE
            })
          })]
        })
      })(),
      children: [(() => {
        if (null != s.description && "" !== s.description) return (0, a.jsx)(o.FormItem, {
          faded: !0,
          title: x.default.Messages.ABOUT_THIS_APP,
          children: (0, a.jsx)(o.FormText, {
            children: s.description
          })
        })
      })(), (() => {
        let e = t.map(e => (0, a.jsxs)("li", {
          className: i(R.permission, M.marginTop8),
          children: [(0, a.jsx)("i", {
            className: R.permissionCheckmark
          }), (0, a.jsx)(o.FormText, {
            children: (0, T.getScopeName)(e, t)
          })]
        }, e));
        if (e.length > 0) return (0, a.jsx)(o.FormItem, {
          faded: !0,
          title: x.default.Messages.PERMISSIONS,
          className: M.marginTop20,
          children: (0, a.jsx)("ul", {
            children: e
          })
        })
      })(), r && (0, a.jsx)(D, {
        application: s
      })]
    })
  })
};
var P = () => {
  let e = (0, r.useStateFromStores)([_.default], () => _.default.hidePersonalInformation),
    t = (0, r.useStateFromStores)([m.default], () => m.default.getApps()),
    l = (0, r.useStateFromStores)([f.default], () => f.default.getSelfEmbeddedActivities());
  n.useEffect(() => {
    d.default.fetch()
  }, []);
  let i = e => {
      let {
        id: t,
        application: s
      } = e;
      d.default.delete(t);
      let a = l.get(s.id);
      null != a && (0, E.stopEmbeddedActivity)({
        channelId: a.channelId,
        applicationId: s.id
      })
    },
    u = () => (0, a.jsxs)(v, {
      className: R.marginTop20,
      children: [(0, a.jsx)(g.EmptyStateImage, {
        darkSrc: s("541956"),
        lightSrc: s("301037"),
        width: 380,
        height: 282
      }), (0, a.jsx)(g.EmptyStateText, {
        note: x.default.Messages.NO_AUTHORIZED_APPS_NOTE,
        children: x.default.Messages.NO_AUTHORIZED_APPS
      })]
    });
  return e ? (0, a.jsx)(c.default, {}) : (0, a.jsx)(o.FormSection, {
    tag: o.FormTitleTags.H1,
    title: x.default.Messages.AUTHORIZED_APPS,
    children: (0, a.jsx)(o.HeadingLevel, {
      component: (0, a.jsx)(o.FormNotice, {
        className: M.marginBottom40,
        type: o.CardTypes.PRIMARY,
        title: x.default.Messages.APPLICATIONS_AND_CONNECTIONS,
        body: x.default.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
      }),
      children: null == t ? (0, a.jsx)(o.Spinner, {
        className: M.marginTop20,
        type: o.Spinner.Type.SPINNING_CIRCLE
      }) : 0 === t.length ? u() : t.sort((e, t) => e.application.name.localeCompare(t.application.name)).map(e => (0, a.jsx)(L, {
        onDelete: () => i(e),
        ...e
      }, e.id))
    })
  })
}