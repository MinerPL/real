"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("90915"),
  o = n("750485"),
  u = n("446674"),
  d = n("77078"),
  c = n("54239"),
  f = n("389434"),
  E = n("521128"),
  _ = n("845579"),
  h = n("538137"),
  C = n("956089"),
  I = n("49111"),
  T = n("853994"),
  S = n("782340"),
  m = n("724708"),
  p = n("926622"),
  A = () => {
    let e = _.FamilyCenterEnabled.useSetting(),
      {
        categories: t,
        initialized: n
      } = (0, u.useStateFromStoresObject)([E.default], () => E.default.getEmailSettings());
    return s.useEffect(() => {
      null == n && (0, f.fetchEmailSettings)()
    }, [n]), (0, a.jsxs)("div", {
      className: m.container,
      children: [(0, a.jsx)(d.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: S.default.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
      }), (0, a.jsx)(d.FormSwitch, {
        className: l(p.marginTop8, p.marginBottom20),
        value: e,
        note: S.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
        hideBorder: !0,
        onChange: _.FamilyCenterEnabled.updateSetting,
        children: S.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
      }), e ? (0, a.jsx)(d.Card, {
        className: m.enableCard,
        type: d.Card.Types.CUSTOM,
        outline: !0,
        children: (0, a.jsxs)(o.default, {
          justify: o.default.Justify.END,
          children: [(0, a.jsx)(o.default.Child, {
            children: (0, a.jsx)(d.Text, {
              variant: "text-sm/semibold",
              color: "text-normal",
              children: S.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
            })
          }), (0, a.jsx)(d.Clickable, {
            children: (0, a.jsx)(r.Link, {
              onClick: c.popLayer,
              to: {
                pathname: I.Routes.FAMILY_CENTER,
                state: {
                  scrollRestoration: !1
                }
              },
              children: S.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
            })
          }), (0, a.jsx)(C.IconBadge, {
            icon: h.default,
            className: m.arrow,
            disableColor: !0
          })]
        })
      }) : null, (0, a.jsx)(d.FormSwitch, {
        className: l(p.marginTop20, p.marginBottom20),
        value: !!t[T.EmailCategories.FAMILY_CENTER_DIGEST],
        note: S.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
        hideBorder: !0,
        onChange: function(e) {
          (0, f.updateEmailSetting)(T.EmailCategories.FAMILY_CENTER_DIGEST, e)
        },
        children: S.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
      })]
    })
  }