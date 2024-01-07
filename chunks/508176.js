            "use strict";
            n.r(t), n.d(t, {
                GuildBrowseChannelsRow: function() {
                    return L
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("65597"),
                i = n("151426"),
                r = n("669491"),
                o = n("272030"),
                u = n("10641"),
                d = n("863636"),
                c = n("361776"),
                f = n("15684"),
                h = n("393414"),
                C = n("660478"),
                p = n("446685"),
                m = n("956089"),
                E = n("299039"),
                g = n("319839"),
                I = n("708402"),
                S = n("49111"),
                _ = n("724210"),
                N = n("133335"),
                T = n("782340"),
                A = n("174757");

            function L(e) {
                let {
                    guild: t,
                    selected: L
                } = e, v = (0, c.default)(t), x = (0, u.useIsDismissibleContentDismissed)(i.DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX), R = (0, s.useStateFromStoresArray)([f.default], () => Array.from(f.default.getNewChannelIds(t.id)).filter(e => f.default.shouldIndicateNewChannel(t.id, e))), M = (0, s.default)([C.default], () => C.default.hasUnread(t.id, N.ReadStateTypes.GUILD_ONBOARDING_QUESTION)), O = R.length > g.MAX_NEW_CHANNELS_TO_SHOW, y = (0, s.default)([d.default, C.default], () => {
                    let e = d.default.lastFetchedAt(t.id),
                        n = C.default.lastMessageId(t.id, N.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
                    if (null == n) return !1;
                    let l = E.default.extractTimestamp(n);
                    return null != e && e > l
                }), D = a.useCallback(() => {
                    (0, h.transitionTo)(S.Routes.CHANNEL(t.id, v ? _.StaticChannelRoute.CUSTOMIZE_COMMUNITY : _.StaticChannelRoute.CHANNEL_BROWSER))
                }, [t.id, v]), b = a.useCallback(e => {
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("357763").then(n.bind(n, "357763"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            guild: t
                        })
                    })
                }, [t]), j = null;
                return (!x || M || O) && !L && !y && (j = (0, l.jsx)(m.TextBadge, {
                    color: r.default.unsafe_rawColors.BRAND_260.css,
                    text: T.default.Messages.NEW,
                    className: A.newChannel
                })), (0, l.jsx)(I.default, {
                    renderIcon: e => (0, l.jsx)(p.default, {
                        className: e
                    }),
                    text: v ? T.default.Messages.CHANNELS_AND_ROLES : T.default.Messages.CHANNEL_BROWSER_TITLE,
                    selected: L,
                    onClick: D,
                    onContextMenu: b,
                    badge: j
                })
            }