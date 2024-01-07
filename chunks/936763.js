            "use strict";
            i.r(t), i.d(t, {
                getDefaultSearchState: function() {
                    return d
                },
                GuildMemberSafetySearch: function() {
                    return _
                }
            }), i("222007");
            var r = i("448105"),
                n = i.n(r),
                s = i("969176"),
                u = i.n(s),
                a = i("249654"),
                l = i("681937"),
                h = i("509"),
                o = i("770115");

            function d() {
                return {
                    query: "",
                    requireUnusualDmActivity: !1,
                    requireCommunicationDisabled: !1,
                    requireUnusualAccountActivity: !1,
                    requireUsernameQuarantined: !1,
                    selectedRoleIds: new Set,
                    selectedJoinDateOption: {
                        optionId: 0,
                        afterDate: null,
                        beforeDate: null
                    },
                    selectedAccountAgeOption: {
                        optionId: 0,
                        afterDate: null,
                        beforeDate: null
                    }
                }
            }
            let m = Object.freeze(d());

            function c(e, t) {
                return null != e && (!!(e.toLowerCase().includes(t.toLowerCase()) || n(e.toLowerCase(), t.toLowerCase())) || !1)
            }
            class _ {
                get requiresUsernameMatch() {
                    return this._searchState.query.trim().length > 0
                }
                reset() {
                    this._searchState = d(), this.hasDefaultQuery = !0
                }
                updateSearchState(e) {
                    return this._searchState = {
                        ...this._searchState,
                        ...e
                    }, this.hasDefaultQuery = u(this._searchState, m), !0
                }
                resetSearchState() {
                    return !this.hasDefaultQuery && (this._searchState = d(), this.hasDefaultQuery = !0, !0)
                }
                getSearchState() {
                    return this._searchState
                }
                isMemberIncludedInSearchResults(e) {
                    let {
                        query: t,
                        requireUnusualDmActivity: i,
                        requireCommunicationDisabled: r,
                        requireUnusualAccountActivity: n,
                        requireUsernameQuarantined: s,
                        selectedRoleIds: u,
                        selectedJoinDateOption: d,
                        selectedAccountAgeOption: m
                    } = this._searchState;
                    if (t.length > 0 && ! function(e, t) {
                            if ("" === t.trim()) return !1;
                            let [i, r] = (0, o.splitQuery)(t);
                            for (let t of r)
                                if (e.userId === t) return !0;
                            for (let t of i)
                                if (c(e.nick, t)) return !0;
                            if (null == e.user) return !1;
                            let {
                                globalName: n,
                                username: s
                            } = e.user;
                            for (let e of i)
                                if (c(s, e)) return !0;
                            for (let e of i)
                                if (c(n, e)) return !0;
                            return !1
                        }(e, t)) return !1;
                    if (u.size > 0) {
                        var _, M;
                        if (_ = e, !(0 !== (M = u).size && Array.from(M).every(e => _.roles.includes(e)))) return !1
                    }
                    if (null != d.afterDate && e.joinedAtTimestamp < d.afterDate || null != d.beforeDate && e.joinedAtTimestamp > d.beforeDate || null != m.afterDate && a.default.extractTimestamp(e.userId) < m.afterDate || null != m.beforeDate && a.default.extractTimestamp(e.userId) > m.beforeDate) return !1;
                    if (i || r || n || s) return !!(i && e.hasUnusualDmActivity || r && (0, h.isMemberCommunicationDisabled)(e) || n && e.hasUnusualAccountActivity || s && (0, l.hasAutomodQuarantinedProfile)(e)) || !1;
                    return !0
                }
                constructor(e) {
                    this.guildId = e, this._searchState = d(), this.hasDefaultQuery = !0
                }
            }