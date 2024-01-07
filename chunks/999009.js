            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                n = a("446674"),
                i = a("77078"),
                r = a("305961"),
                d = a("191814"),
                o = a("461380"),
                u = a("911029"),
                c = a("856246"),
                m = a("246421"),
                f = a("782340"),
                x = a("820011");
            let h = "expanded-area";

            function g(e) {
                let {
                    attachments: t,
                    role: a,
                    roleLocked: n
                } = e, [r, g] = s.useState(!1);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(i.Clickable, {
                        className: x.viewContents,
                        onClick: () => {
                            g(e => !e)
                        },
                        "aria-expanded": r,
                        "aria-controls": h,
                        children: [(0, l.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: r ? f.default.Messages.GUILD_PRODUCT_INFO_MODAL_COLLAPSE_CONTENTS : f.default.Messages.GUILD_PRODUCT_INFO_MODAL_VIEW_CONTENTS
                        }), (0, l.jsx)(o.default, {
                            className: x.caretIcon,
                            direction: r ? o.default.Directions.UP : o.default.Directions.DOWN
                        })]
                    }), (0, l.jsx)(d.default, {
                        size: 12
                    }), r && (0, l.jsxs)("ul", {
                        className: x.contentsContainer,
                        id: h,
                        children: [(0, l.jsx)(c.default, {
                            label: f.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE,
                            children: (0, l.jsx)("ul", {
                                className: x.attachmentGrid,
                                children: t.map(e => (0, l.jsx)(u.default, {
                                    attachment: e
                                }, e.id))
                            })
                        }), null != a && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: x.separator
                            }), (0, l.jsx)(c.default, {
                                label: f.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE,
                                children: (0, l.jsx)(m.default, {
                                    role: a,
                                    textVariant: "text-md/medium",
                                    locked: n
                                })
                            })]
                        })]
                    })]
                })
            }

            function j(e) {
                var t;
                let {
                    listing: a
                } = e, s = null !== (t = a.attachments) && void 0 !== t ? t : [], i = (0, n.useStateFromStores)([r.default], () => {
                    var e, t;
                    return null === (e = r.default.getGuild(a.guild_id)) || void 0 === e ? void 0 : e.roles[null !== (t = a.role_id) && void 0 !== t ? t : ""]
                }), d = !a.has_entitlement;
                return 0 === s.length && null == i ? null : 0 === s.length && null != i ? (0, l.jsx)(m.default, {
                    role: i,
                    textVariant: "text-md/medium",
                    locked: d
                }) : (0, l.jsx)(g, {
                    attachments: s,
                    role: i,
                    roleLocked: d
                })
            }