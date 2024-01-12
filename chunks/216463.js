            "use strict";
            n.r(t), n.d(t, {
                InstantInviteGuestPage: function() {
                    return m
                }
            }), n("808653");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                u = n("155996"),
                o = n("41594"),
                d = n("652453"),
                c = n("782340"),
                f = n("435808"),
                h = n("926622");
            let g = e => {
                    let {
                        guild: t,
                        inviteChannel: n,
                        setInviteChannel: r
                    } = e, s = (0, u.default)(t.id), d = i.useMemo(() => s.reduce((e, t) => ({
                        ...e,
                        [t.id]: t
                    }), {}), [s]), f = i.useMemo(() => Object.values(d).map(e => ({
                        value: e.id,
                        label: e.name
                    })), [d]);
                    return (0, l.jsx)(a.SearchableSelect, {
                        options: f,
                        value: null == n ? void 0 : n.id,
                        onChange: e => {
                            r(d[e])
                        },
                        placeholder: c.default.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
                        renderOptionPrefix: e => {
                            if (null == e) return null;
                            let n = e.value,
                                i = d[n];
                            return null == i ? null : (0, l.jsx)(o.ChannelItemIcon, {
                                channel: i,
                                guild: t
                            })
                        }
                    })
                },
                m = e => {
                    let {
                        handleDone: t,
                        headerId: n,
                        inviteChannel: i,
                        copyValue: r
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)(a.ModalHeader, {
                            children: [(0, l.jsx)(a.ModalCloseButton, {
                                className: f.closeButton,
                                onClick: t
                            }), (0, l.jsx)("div", {
                                className: f.headerContainer,
                                children: (0, l.jsx)(a.FormTitle, {
                                    id: n,
                                    tag: "h2",
                                    className: s(h.marginReset, f.headerCloseButtonSpacing, f.headerText),
                                    children: c.default.Messages.INVITE_A_GUEST_VOICE_ONLY
                                })
                            })]
                        }), (0, l.jsx)(a.ModalContent, {
                            className: f.noScroll,
                            children: (0, l.jsxs)("div", {
                                className: f.guestBody,
                                children: [(0, l.jsx)(a.Text, {
                                    tag: "div",
                                    variant: "heading-sm/normal",
                                    color: "header-secondary",
                                    children: c.default.Messages.INVITE_A_GUEST_EXPLANATION
                                }), (0, l.jsx)(a.FormTitle, {
                                    tag: "h5",
                                    className: f.guestSelectChannelHeader,
                                    children: c.default.Messages.INVITE_A_GUEST_STEP_1
                                }), (0, l.jsx)(g, {
                                    ...e
                                }), (0, l.jsx)(a.FormTitle, {
                                    tag: "h5",
                                    className: f.guestSendInviteLinkHeader,
                                    children: c.default.Messages.INVITE_A_GUEST_STEP_2
                                }), (0, l.jsx)(d.InviteCopyInput, {
                                    ...e,
                                    copyValue: null == i ? "" : r,
                                    disabled: null == i
                                })]
                            })
                        })]
                    })
                }