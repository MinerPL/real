"use strict";
n.r(t), n.d(t, {
  getSafetyHubData: function() {
    return s
  },
  getSafetyHubDataForClassification: function() {
    return u
  }
});
var i = n("872717"),
  l = n("913144"),
  r = n("651693"),
  o = n("736393"),
  a = n("49111");
async function s() {
  l.default.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  }), await i.default.get({
    url: a.Endpoints.SAFETY_HUB
  }).then(e => {
    let {
      body: t
    } = e, {
      classifications: n,
      guild_classifications: i,
      account_standing: r
    } = t, o = n.map(e => (c(e), e));
    l.default.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: o.concat(null != i ? i : []),
      accountStanding: r
    })
  }).catch(e => {
    var t, n;
    l.default.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : "Unknown error"
    })
  })
}
async function u(e) {
  l.default.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: e
  }), await i.default.get({
    url: a.Endpoints.SAFETY_HUB
  }).then(t => {
    let {
      body: n
    } = t, {
      classifications: i,
      account_standing: r,
      is_dsa_eligible: o
    } = n, a = i.find(t => t.id === e);
    null != a ? (c(a), l.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: a,
      accountStanding: r,
      isDsaEligible: o
    })) : l.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: e
    })
  }).catch(t => {
    var n, i;
    l.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: null !== (i = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : "Unknown error",
      classificationId: e
    })
  })
}

function c(e) {
  if (null != e.flagged_content && e.flagged_content.length > 0) {
    let t = e.flagged_content[0];
    t.attachments = t.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, r.isImageFile)(t)
    }), e.flagged_content = (0, o.isFlaggedContentEmpty)(t) ? [] : [t]
  }
}