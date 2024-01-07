            "use strict";
            n.r(t), n.d(t, {
                getSafetyHubData: function() {
                    return u
                },
                getSafetyHubDataForClassification: function() {
                    return c
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("651693"),
                a = n("234998"),
                o = n("736393"),
                s = n("49111");
            async function u() {
                r.default.dispatch({
                    type: "SAFETY_HUB_FETCH_START"
                }), await i.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(e => {
                    let {
                        body: t
                    } = e, {
                        classifications: n,
                        guild_classifications: i,
                        account_standing: l
                    } = t, a = n.map(e => (d(e), e));
                    r.default.dispatch({
                        type: "SAFETY_HUB_FETCH_SUCCESS",
                        classifications: a.concat(null != i ? i : []),
                        accountStanding: l
                    })
                }).catch(e => {
                    var t, n;
                    r.default.dispatch({
                        type: "SAFETY_HUB_FETCH_FAILURE",
                        error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : "Unknown error"
                    })
                })
            }
            async function c(e) {
                r.default.dispatch({
                    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
                    classificationId: e
                }), await i.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(t => {
                    let {
                        body: n
                    } = t, {
                        classifications: i,
                        account_standing: l,
                        is_dsa_eligible: a
                    } = n, o = i.find(t => t.id === e);
                    null != o ? (d(o), r.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                        classification: o,
                        accountStanding: l,
                        isDsaEligible: a
                    })) : r.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: "Classification not found.",
                        classificationId: e
                    })
                }).catch(t => {
                    var n, i;
                    r.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: null !== (i = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : "Unknown error",
                        classificationId: e
                    })
                })
            }

            function d(e) {
                if (null != e.flagged_content && e.flagged_content.length > 0) {
                    let t = e.flagged_content[0];
                    t.attachments = t.attachments.filter(e => {
                        let {
                            filename: t
                        } = e;
                        return (0, l.isImageFile)(t)
                    }), t.attachments.forEach(e => (0, a.setMessageAttachmentDimensions)(e)), e.flagged_content = (0, o.isFlaggedContentEmpty)(t) ? [] : [t]
                }
            }