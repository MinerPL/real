"use strict";
n.r(t), n.d(t, {
  SafetySystemNotification: function() {
    return g
  }
});
var a = n("37983");
n("884691");
var s = n("866227"),
  l = n.n(s),
  i = n("669491"),
  r = n("779807"),
  o = n("77078"),
  u = n("733160"),
  d = n("736393"),
  c = n("170213"),
  f = n("782340"),
  m = n("289487");
let E = e => l().diff(l.unix(e), "days");

function _(e) {
  let {
    classificationId: t
  } = e;
  return (0, a.jsx)(o.Anchor, {
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("825138").then(n.bind(n, "825138"));
        return n => (0, a.jsx)(e, {
          classificationId: t,
          source: c.SafetyHubAnalyticsActionSource.SystemDM,
          transitionState: n.transitionState,
          onClose: n.onClose
        })
      })
    },
    className: m.detailsButton,
    children: f.default.Messages.SAFETY_SYSTEM_NOTIFICATION_SEE_DETAILS_BUTTON
  })
}

function h(e) {
  let {
    learnMoreLink: t
  } = e;
  return (0, a.jsx)(o.Anchor, {
    className: m.detailsButton,
    href: t,
    children: f.default.Messages.SAFETY_SYSTEM_NOTIFICATION_LEARN_MORE_BUTTON
  })
}

function p(e) {
  let {
    ctaType: t,
    classificationId: n,
    learnMoreLink: s
  } = e;
  switch (t) {
    case c.SafetySystemNotificationCtaType.POLICY_VIOLATION_DETAIL:
      if (null == n) return null;
      return (0, a.jsx)(_, {
        classificationId: n
      });
    case c.SafetySystemNotificationCtaType.LEARN_MORE_LINK:
      if (null == s) return null;
      return (0, a.jsx)(h, {
        learnMoreLink: s
      });
    default:
      return null
  }
}

function I(e) {
  let {
    iconType: t
  } = e, n = {
    default: (0, a.jsx)(u.default, {
      color: i.default.colors.TEXT_LINK.css
    }),
    danger: (0, a.jsx)(r.WarningIcon, {
      color: i.default.colors.STATUS_DANGER
    })
  };
  return null != t && t in n ? (0, a.jsx)("div", {
    className: m.icon,
    children: n[t]
  }) : null
}

function T(e) {
  let {
    children: t,
    theme: n
  } = e, s = {
    default: m.defaultFooterContainer,
    danger: m.dangerFooterContainer
  };
  return (0, a.jsx)("div", {
    className: s[null != n ? n : "default"],
    children: t
  })
}

function g(e) {
  var t, n;
  if (null == e.embed || null == e.embed.fields) return null;
  let s = (0, d.parseMessageEmbedForProps)(e.embed);
  return null == s ? null : (0, a.jsxs)(o.Clickable, {
    className: m.safetyPolicyNoticeContainer,
    children: [(0, a.jsxs)("div", {
      className: m.noticeContent,
      children: [(0, a.jsxs)("div", {
        className: m.headerRow,
        children: [(0, a.jsx)(I, {
          iconType: s.icon
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: s.header
        })]
      }), (0, a.jsx)("div", {
        className: m.incidentTiming,
        children: (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: f.default.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: E(null !== (n = s.timestamp) && void 0 !== n ? n : 0)
          })
        })
      }), (0, a.jsx)("div", {
        className: m.noticeBody,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: s.body
        })
      })]
    }), (0, a.jsx)(T, {
      theme: s.theme,
      children: null === (t = s.ctas) || void 0 === t ? void 0 : t.map(e => (0, a.jsx)(p, {
        ctaType: e,
        classificationId: s.classification_id,
        learnMoreLink: s.learn_more_link
      }, e))
    })]
  })
}