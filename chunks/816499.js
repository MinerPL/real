            "use strict";
            l.r(t), l.d(t, {
                generateRedditMetadataItems: function() {
                    return p
                },
                generateTwitterMetadataItems: function() {
                    return E
                },
                generateSteamMetadataItems: function() {
                    return T
                },
                generatePaypalMetadataItems: function() {
                    return h
                },
                generateEbayMetadataItems: function() {
                    return _
                },
                generateTikTokMetadataItems: function() {
                    return S
                },
                generateRoleConnectionMetadataItems: function() {
                    return I
                }
            }), l("424973"), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("917351"),
                r = l.n(i),
                o = l("77078"),
                u = l("240481"),
                d = l("535013"),
                c = l("214509"),
                f = l("782340"),
                m = l("536271");

            function p(e) {
                var t;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    s = Number(null !== (t = e[c.MetadataFields.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
                    i = "1" === e[c.MetadataFields.REDDIT_GOLD],
                    r = "1" === e[c.MetadataFields.REDDIT_MOD];
                return s > -1 && a.push((0, n.jsx)(g, {
                    className: l,
                    count: s,
                    label: f.default.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
                }, c.MetadataFields.REDDIT_TOTAL_KARMA)), i && a.push((0, n.jsx)(C, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_REDDIT_GOLD
                }, c.MetadataFields.REDDIT_GOLD)), r && a.push((0, n.jsx)(C, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_REDDIT_MOD
                }, c.MetadataFields.REDDIT_MOD)), a
            }

            function E(e) {
                var t, l;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    s = [],
                    i = Number(null !== (t = e[c.MetadataFields.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
                    r = Number(null !== (l = e[c.MetadataFields.TWITTER_FOLLOWERS_COUNT]) && void 0 !== l ? l : -1);
                return i > -1 && s.push((0, n.jsx)(g, {
                    className: a,
                    count: i,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
                }, c.MetadataFields.TWITTER_STATUSES_COUNT)), r > -1 && s.push((0, n.jsx)(g, {
                    className: a,
                    count: r,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
                }, c.MetadataFields.TWITTER_FOLLOWERS_COUNT)), s
            }

            function T(e) {
                var t, a, s;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    r = [],
                    o = Number(null !== (t = e[c.MetadataFields.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
                    u = Number(null !== (a = e[c.MetadataFields.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== a ? a : -1),
                    d = Number(null !== (s = e[c.MetadataFields.STEAM_ITEM_COUNT_TF2]) && void 0 !== s ? s : -1);
                return o > -1 && r.push((0, n.jsx)(g, {
                    className: i,
                    count: o,
                    label: f.default.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
                }, c.MetadataFields.STEAM_GAME_COUNT)), u > -1 && r.push((0, n.jsx)(v, {
                    className: i,
                    label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: u
                    }),
                    imageSrc: l("142226"),
                    imageAlt: f.default.Messages.CONNECTIONS_STEAM_DOTA2
                }, c.MetadataFields.STEAM_ITEM_COUNT_DOTA2)), d > -1 && r.push((0, n.jsx)(v, {
                    className: i,
                    label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: d
                    }),
                    imageSrc: l("449236"),
                    imageAlt: f.default.Messages.CONNECTIONS_STEAM_TF2
                }, c.MetadataFields.STEAM_ITEM_COUNT_TF2)), r
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    l = [],
                    a = "1" === e[c.MetadataFields.PAYPAL_VERIFIED];
                return a && l.push((0, n.jsx)(C, {
                    className: s(t, m.paypalVerifiedTag),
                    label: f.default.Messages.CONNECTIONS_PAYPAL_VERIFIED
                }, c.MetadataFields.PAYPAL_VERIFIED)), l
            }

            function _(e) {
                var t;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    s = Number(null !== (t = e[c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
                    i = "1" === e[c.MetadataFields.EBAY_TOP_RATED_SELLER];
                return s > 0 && a.push((0, n.jsx)(g, {
                    className: l,
                    count: s,
                    label: f.default.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                    percent: !0
                }, c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), i && a.push((0, n.jsx)(C, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                }, c.MetadataFields.EBAY_TOP_RATED_SELLER)), a
            }

            function S(e) {
                var t, l, a;
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    i = [],
                    r = "1" === e[c.MetadataFields.TIKTOK_VERIFIED],
                    o = Number(null !== (t = e[c.MetadataFields.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
                    u = Number(null !== (l = e[c.MetadataFields.TIKTOK_FOLLOWING_COUNT]) && void 0 !== l ? l : -1),
                    d = Number(null !== (a = e[c.MetadataFields.TIKTOK_LIKES_COUNT]) && void 0 !== a ? a : -1);
                return o > -1 && i.push((0, n.jsx)(g, {
                    className: s,
                    count: o,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
                }, c.MetadataFields.TIKTOK_FOLLOWER_COUNT)), u > -1 && i.push((0, n.jsx)(g, {
                    className: s,
                    count: u,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
                }, c.MetadataFields.TIKTOK_FOLLOWING_COUNT)), d > -1 && i.push((0, n.jsx)(g, {
                    className: s,
                    count: d,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
                }, c.MetadataFields.TIKTOK_LIKES_COUNT)), r && i.push((0, n.jsx)(C, {
                    className: s,
                    label: f.default.Messages.CONNECTIONS_TIKTOK_VERIFIED
                }, c.MetadataFields.TIKTOK_VERIFIED)), i
            }

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    a = [],
                    s = Object.keys(e.metadata);
                if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === s.length) return a;
                let i = r.sortBy(s, t => {
                    var l, n;
                    return null === (n = e.application_metadata) || void 0 === n ? void 0 : null === (l = n[t]) || void 0 === l ? void 0 : l.name
                });
                for (let s of i) {
                    let i = e.application_metadata[s];
                    if (null == i) continue;
                    let r = e.metadata[s];
                    try {
                        switch (i.type) {
                            case c.MetadataItemTypes.BOOLEAN_EQUAL:
                            case c.MetadataItemTypes.BOOLEAN_NOT_EQUAL: {
                                let e = i.type === c.MetadataItemTypes.BOOLEAN_EQUAL && "1" === r || i.type === c.MetadataItemTypes.BOOLEAN_NOT_EQUAL && "1" !== r;
                                e && a.push((0, n.jsx)(C, {
                                    className: t,
                                    label: i.name
                                }, i.key))
                            }
                            break;
                            case c.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                            case c.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                                a.push((0, n.jsx)(A, {
                                    className: t,
                                    date: r,
                                    locale: l,
                                    label: i.name
                                }, i.key));
                                break;
                            case c.MetadataItemTypes.INTEGER_EQUAL:
                            case c.MetadataItemTypes.INTEGER_NOT_EQUAL:
                            case c.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                            case c.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                                a.push((0, n.jsx)(g, {
                                    className: t,
                                    count: Number(r),
                                    label: i.name
                                }, i.key))
                        }
                    } catch (e) {}
                }
                return a
            }

            function g(e) {
                let t, {
                        count: l,
                        label: a,
                        className: i,
                        percent: r
                    } = e,
                    d = (0, u.shortenAndLocalizeNumber)(l) + (r ? "%" : "");
                return t = "string" == typeof a ? f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                    name: a,
                    value: d
                }) : a.format({
                    value: d
                }), (0, n.jsx)(o.Text, {
                    className: s(m.connectedAccountVanityMetadata, i),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: t
                })
            }

            function A(e) {
                let {
                    date: t,
                    locale: l,
                    label: a,
                    className: i
                } = e;
                return (0, n.jsx)(o.Text, {
                    className: s(m.connectedAccountVanityMetadata, i),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                        value: (0, d.getCreatedAtDate)(t, l),
                        name: a
                    })
                })
            }

            function v(e) {
                let {
                    label: t,
                    imageSrc: l,
                    imageAlt: a,
                    className: i
                } = e;
                return (0, n.jsxs)("div", {
                    className: s(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataItem, i),
                    children: [(0, n.jsx)(o.Tooltip, {
                        text: a,
                        children: e => (0, n.jsx)("img", {
                            ...e,
                            src: l,
                            alt: a,
                            className: m.connectedAccountVanityMetadataItemIcon
                        })
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-active",
                        children: t
                    })]
                })
            }

            function C(e) {
                let {
                    label: t,
                    className: l
                } = e;
                return (0, n.jsx)(o.Text, {
                    variant: "text-xs/semibold",
                    color: "interactive-active",
                    className: s(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataTag, l),
                    children: t
                })
            }