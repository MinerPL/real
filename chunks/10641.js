"use strict";
n.r(t), n.d(t, {
  isDismissibleContentDismissed: function() {
    return T
  },
  useIsDismissibleContentDismissed: function() {
    return g
  },
  requestMarkDismissibleContentAsShown: function() {
    return I
  },
  markDismissibleContentAsDismissed: function() {
    return C
  }
}), n("222007");
var i = n("446674"),
  r = n("151426"),
  s = n("848415"),
  a = n("193302"),
  o = n("872173"),
  l = n("374363"),
  u = n("599110"),
  c = n("674268"),
  d = n("495226"),
  f = n("585653"),
  E = n("989691"),
  h = n("127746"),
  p = n("862853"),
  _ = n("846614"),
  S = n("994428"),
  m = n("49111");

function T(e) {
  var t;
  if ((0, _.disableNewUserDismissibleContent)(e)) return !0;
  let n = null === (t = l.default.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
  return null != n && (0, c.hasBit)(n, e)
}

function g(e) {
  return (0, i.useStateFromStores)([l.default], () => T(e))
}

function I(e, t, n) {
  if ((0, p.isContentShown)(e) || s.default.isAnyActive() || E.default.hasUserHitDCCap(e)) return;
  let i = function(e) {
    let t = h.CONTENT_TYPES_WITH_BYPASS_HOLDOUT.has(e),
      {
        enabled: n
      } = a.default.getCurrentConfig({
        location: "isUserSubjectToDCFHoldout"
      }, {
        autoTrackExposure: !t
      });
    return n && !t
  }(e);
  if (!i) !n && (0, p.addCandidateContent)({
    content: e,
    groupName: null == t ? void 0 : t.groupName,
    onAdded: () => {
      var n;
      let [i, s] = (0, p.getCurrentlyShownCounts)();
      (0, f.handleDCShownToUser)(e), u.default.track(m.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
        type: r.DismissibleContent[e],
        content_count: i,
        fatigable_content_count: s,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: d.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
        guild_id: null == t ? void 0 : t.guildId
      }), null == t || null === (n = t.onShown) || void 0 === n || n.call(t)
    }
  })
}
async function C(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  ((0, p.isContentShown)(e) || t.forceTrack) && function(e, t) {
    var n;
    let [i] = (0, p.getCurrentlyShownCounts)(), s = E.default.getRenderedAtTimestamp(e), a = new Date, o = null == s ? null : a.getTime() - s;
    u.default.track(m.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
      type: r.DismissibleContent[e],
      action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : S.ContentDismissActionType.UNKNOWN,
      content_count: i,
      group_name: null == t ? void 0 : t.groupName,
      bypass_fatigue: d.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
      guild_id: null == t ? void 0 : t.guildId,
      shown_duration: o
    })
  }(e, t), (0, f.handleDCDismissed)(e), await (0, o.addDismissedContent)(e);
  let n = !E.default.hasUserHitDCCap();
  (0, p.removeCandidateContent)({
    content: e,
    groupName: null == t ? void 0 : t.groupName
  }, n)
}