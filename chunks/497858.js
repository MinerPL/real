            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var l = n("884691"),
                i = n("775560"),
                r = n("446674"),
                o = n("118200"),
                s = n("383018"),
                a = n("850391"),
                u = n("980215"),
                d = n("26989"),
                c = n("957255"),
                f = n("102985"),
                p = n("697218"),
                m = n("234246"),
                h = n("689299"),
                E = n("49111"),
                S = n("680894"),
                g = n("958706");

            function C(e, t, n) {
                var C, T, v, y, x, I, N;
                let {
                    channel: _,
                    type: A
                } = e, [R, O] = l.useState(() => (0, m.createInitialState)()), M = (0, i.useForceUpdate)(), k = (0, r.useStateFromStores)([d.default], () => {
                    if (null != e.guild) {
                        var t;
                        return null != d.default.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, S.CLYDE_AI_USER_ID)
                    }
                    return !1
                }), b = (0, u.useClydeEnabled)(e.guild, e.channel) && !k && !(0, u.canUseCustomClydeProfiles)(e.guild), P = (0, r.useStateFromStores)([d.default, p.default], () => {
                    var e, t;
                    let n = p.default.getCurrentUser();
                    return null !== (t = null != _.guild_id && null != n ? null === (e = d.default.getMember(_.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
                }), {
                    canMentionEveryone: L,
                    hidePersonalInformation: U
                } = (0, r.useStateFromStoresObject)([c.default, f.default], () => {
                    let e = _.isPrivate();
                    return {
                        canMentionEveryone: e || P || A === a.ChatInputTypes.RULES_INPUT || c.default.can(E.Permissions.MENTION_EVERYONE, _),
                        hidePersonalInformation: f.default.hidePersonalInformation
                    }
                }, [_, A, P]), {
                    activeCommand: j,
                    activeCommandOption: D
                } = (0, r.useStateFromStoresObject)([s.default], () => ({
                    activeCommand: s.default.getActiveCommand(_.id),
                    activeCommandOption: s.default.getActiveOption(_.id)
                })), w = (0, h.default)({
                    navId: "channel-autocomplete",
                    scrollerRef: n,
                    state: R,
                    onFocus: e => F.setSelectedIndex(e)
                }), B = null === (C = e.editorRef.current) || void 0 === C ? void 0 : C.getCurrentWord(), H = {
                    ...e,
                    navigator: w,
                    activeCommand: j,
                    activeCommandOption: D,
                    canMentionUsers: null !== (x = null === (T = A.users) || void 0 === T ? void 0 : T.allowMentioning) && void 0 !== x && x,
                    canMentionEveryone: L,
                    canMentionClyde: b,
                    hidePersonalInformation: U,
                    hideMentionDescription: A === a.ChatInputTypes.RULES_INPUT,
                    emojiIntention: A === a.ChatInputTypes.RULES_INPUT ? g.EmojiIntention.COMMUNITY_CONTENT : g.EmojiIntention.CHAT,
                    currentWord: null !== (I = null == B ? void 0 : B.word) && void 0 !== I ? I : "",
                    currentWordIsAtStart: (null == B ? void 0 : B.isAtStart) === !0,
                    optionText: null != D ? (0, o.getString)({
                        [D.name]: null !== (N = null === (v = e.editorRef.current) || void 0 === v ? void 0 : v.getCurrentCommandOptionValue()) && void 0 !== N ? N : []
                    }, D.name) : ""
                }, [F] = l.useState(() => new m.default(H));
                return l.useEffect(() => {
                    F.updateProps(H)
                }), l.useImperativeHandle(t, () => F, [F]), l.useEffect(() => {
                    let e = e => O(e);
                    return F.on("change", e), F.on("update", M), () => {
                        F.off("change", e), F.off("update", M)
                    }
                }, [M, F]), l.useEffect(() => {
                    var e;
                    let t = null === (e = R.query) || void 0 === e ? void 0 : e.typeInfo.stores;
                    if (null != t) {
                        let e = () => F.queryResults();
                        for (let n of t) n.addChangeListener(e);
                        return () => {
                            for (let n of t) n.removeChangeListener(e)
                        }
                    }
                }, [F, null === (y = R.query) || void 0 === y ? void 0 : y.typeInfo]), [R, F, w]
            }