"use strict";
n.r(t), n.d(t, {
  SafetyPolicyNotice: function() {
    return m
  }
});
var a = n("37983");
n("884691");
var s = n("866227"),
  l = n.n(s),
  i = n("669491"),
  r = n("779807"),
  o = n("77078"),
  u = n("170213"),
  d = n("782340"),
  c = n("234995");
let f = e => l().diff(l.unix(e), "days");

function m(e) {
  var t, s, l, m, E;
  if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
  let _ = e.message.embeds[0],
    h = null !== (l = null === (t = _.fields) || void 0 === t ? void 0 : t.find(e => e.rawName === u.SafetyHubPolicyNoticeKeys.CLASSIFICATION_ID)) && void 0 !== l ? l : void 0,
    p = null !== (m = null == h ? void 0 : h.rawValue) && void 0 !== m ? m : void 0,
    I = null !== (E = null === (s = _.fields) || void 0 === s ? void 0 : s.find(e => e.rawName === u.SafetyHubPolicyNoticeKeys.INCIDENT_TIMESTAMP)) && void 0 !== E ? E : void 0,
    T = null == I || null == I.rawValue ? void 0 : parseFloat(I.rawValue);
  return null == p || null == T ? null : (0, a.jsxs)(o.Clickable, {
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("825138").then(n.bind(n, "825138"));
        return t => (0, a.jsx)(e, {
          classificationId: p,
          source: u.SafetyHubAnalyticsActionSource.SystemDM,
          transitionState: t.transitionState,
          onClose: t.onClose
        })
      })
    },
    className: c.safetyPolicyNoticeContainer,
    children: [(0, a.jsxs)("div", {
      className: c.noticeContent,
      children: [(0, a.jsxs)("div", {
        className: c.headerRow,
        children: [(0, a.jsx)(r.WarningIcon, {
          className: c.warningIcon,
          color: i.default.colors.STATUS_DANGER
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: d.default.Messages.SAFETY_POLICY_NOTICE_HEADER
        })]
      }), (0, a.jsx)("div", {
        className: c.incidentTiming,
        children: (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: d.default.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: f(T)
          })
        })
      }), (0, a.jsx)("div", {
        className: c.noticeBody,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: d.default.Messages.SAFETY_POLICY_NOTICE_BODY
        })
      })]
    }), (0, a.jsx)("div", {
      className: c.footerContainer,
      children: (0, a.jsx)(o.Button, {
        look: o.Button.Looks.BLANK,
        className: c.detailsButton,
        color: o.Button.Colors.WHITE,
        children: d.default.Messages.SAFETY_POLICY_NOTICE_BUTTON
      })
    })]
  })
}