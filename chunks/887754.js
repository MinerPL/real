            "use strict";
            s.r(t), s.d(t, {
                GuildSettingsRolesNotice: function() {
                    return C
                },
                default: function() {
                    return O
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("627445"),
                i = s.n(l),
                r = s("446674"),
                o = s("851387"),
                d = s("45299"),
                u = s("525065"),
                c = s("449008"),
                E = s("592407"),
                _ = s("766419"),
                T = s("531493"),
                I = s("900938"),
                S = s("986654"),
                N = s("482763"),
                g = s("620296"),
                f = s("500053"),
                A = s("53948"),
                L = s("49111");

            function m(e) {
                E.default.selectRole(e)
            }
            let C = () => {
                let {
                    guild: e
                } = (0, r.useStateFromStoresObject)([I.default], () => I.default.getProps()), t = (0, r.useStateFromStores)([T.default], () => T.default.formState), s = (0, r.useStateFromStores)([T.default], () => T.default.errorMessage);
                return (0, a.jsx)(d.default, {
                    errorMessage: s,
                    onSave: () => {
                        if (null == e) return;
                        let {
                            id: t
                        } = e, s = T.default.editedRoleIds.map(e => T.default.getRole(e)).filter(c.isNotNullish), a = T.default.getSortDeltas(), n = null, l = null;
                        T.default.hasRoleConfigurationChanges && (l = T.default.editedRoleIdsForConfigurations, n = T.default.getEditedRoleConnectionConfigurationsMap()), (0, _.saveRoleSettings)(t, s, a, l, n)
                    },
                    submitting: t === L.FormStates.SUBMITTING,
                    onReset: _.init
                })
            };

            function O(e) {
                let {
                    refToScroller: t
                } = e, {
                    guild: s,
                    roles: l
                } = (0, r.useStateFromStoresObject)([T.default], () => ({
                    guild: T.default.guild,
                    roles: T.default.roles
                }), []);
                i(null != s, "Guild cannot be null here");
                let d = n.useMemo(() => l.find(e => e.id === s.id), [l, s]);
                i(null != d, "Guild must have an everyone role");
                let c = n.useMemo(() => l.filter(e => e.id !== s.id), [l, s]),
                    E = (0, r.useStateFromStores)([I.default], () => I.default.getSelectedRoleId()),
                    [_, L] = n.useState(c.length > 0);
                n.useEffect(() => {
                    L(_ || c.length > 0)
                }, [_, c.length]), n.useEffect(() => {
                    let e = u.default.getMemberCount(s.id);
                    null != e && e <= S.MAX_PREFETCH_MEMBER_COUNT && o.default.requestMembers(s.id, "", 0, !1)
                }, []);
                let [C, O] = n.useState(A.GuildSettingsRoleEditSections.DISPLAY);
                return (n.useEffect(() => {
                    null == E && O(A.GuildSettingsRoleEditSections.DISPLAY)
                }, [E]), null != E) ? (0, a.jsx)(N.default, {
                    editRoleId: E,
                    setEditRoleId: m,
                    selectedSection: C,
                    setSelectedSection: O
                }) : _ ? (0, a.jsx)(f.default, {
                    setEditRoleId: m,
                    guild: s,
                    everyoneRole: d,
                    otherRoles: c,
                    setSelectedSection: O,
                    refToScroller: t
                }) : (0, a.jsx)(g.default, {
                    guild: s,
                    everyoneRole: d,
                    setEditRoleId: m
                })
            }