            "use strict";
            n.r(t), n.d(t, {
                areTypesInSameSection: function() {
                    return r
                },
                getDropData: function() {
                    return c
                },
                getDnDUpdates: function() {
                    return f
                }
            }), n("222007"), n("843762"), n("424973");
            var l = n("320954"),
                a = n("233069"),
                s = n("746574"),
                i = n("49111");

            function r(e, t) {
                return null != e && null != t && (e === t || (0, a.isGuildSelectableChannelType)(e) && (0, a.isGuildSelectableChannelType)(t) || (0, a.isGuildVocalChannelType)(e) && (0, a.isGuildVocalChannelType)(t))
            }

            function o(e, t, n, l) {
                let a = -1;
                if (l.find((e, n) => {
                        let {
                            channel: l
                        } = e;
                        return l.id === t && (a = n, !0)
                    }), a < 0) return null;
                for (let t = a; t >= 0 && t < l.length; t += e) {
                    let e = l[t];
                    if (r(e.channel.type, n)) return e
                }
                return null
            }

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == e) return 0;
                let l = null;
                return t.filter(t => {
                    let {
                        channel: {
                            type: l
                        }
                    } = t;
                    return null != e && (n || r(e.type, l))
                }).find((t, n) => {
                    let {
                        channel: {
                            id: a
                        }
                    } = t;
                    return null != e && a === e.id && (l = n, !0)
                }), l
            }

            function d(e) {
                return {
                    referenceId: e.id,
                    parentId: e.parent_id
                }
            }

            function c(e, t, n, l, s) {
                if (null == e || null == n) return null;
                let {
                    GUILD_CATEGORY: c
                } = i.ChannelTypes;
                if (e.type === c) return l === t || l < t && e.type === n.type ? d(n) : l > t ? function(e, t, n) {
                    var l;
                    let {
                        GUILD_CATEGORY: a
                    } = i.ChannelTypes, s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) + 1], r = o(-1, t.id, e.type, n);
                    return null == r || r.channel.id === e.id ? null : null == s || s.channel.type === a ? {
                        referenceId: r.channel.id,
                        parentId: null
                    } : null
                }(e, n, s) : null;
                if (r(e.type, n.type)) return d(n);
                if (l < t) return n.type === c ? function(e, t, n) {
                    var l;
                    let s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) - 1],
                        i = o(1, t.id, e.type, n);
                    if (null == s) return {
                        referenceId: null,
                        parentId: null
                    };
                    if (null != i) {
                        if (r(s.channel.type, e.type) || e.isGuildVocal() && (0, a.isGuildSelectableChannelType)(s.channel.type)) return {
                            referenceId: i.channel.id,
                            parentId: s.channel.parent_id
                        };
                        if (s.channel.isCategory()) return {
                            referenceId: i.channel.id,
                            parentId: s.channel.id
                        }
                    }
                    return null
                }(e, n, s) : function(e, t, n) {
                    var l;
                    let s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) - 1],
                        i = o(1, t.id, e.type, n);
                    return null != s || e.isGuildVocal() ? (0, a.isGuildSelectableChannelType)(e.type) && null != i && ((0, a.isGuildSelectableChannelType)(s.channel.type) || s.channel.isCategory()) ? {
                        referenceId: i.channel.id,
                        parentId: t.parent_id
                    } : null : {
                        referenceId: null != i ? i.channel.id : null,
                        parentId: null
                    }
                }(e, n, s);
                return n.type === c ? function(e, t, n) {
                    var l;
                    let s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) + 1],
                        i = o(-1, t.id, e.type, n);
                    if (null != i) {
                        if (null == s) return {
                            referenceId: i.channel.id,
                            parentId: t.id
                        };
                        if (r(s.channel.type, e.type) || (0, a.isGuildSelectableChannelType)(e.type) && s.channel.isGuildVocal()) return {
                            referenceId: i.channel.id,
                            parentId: s.channel.parent_id
                        };
                        if (s.channel.isCategory()) return {
                            referenceId: i.channel.id,
                            parentId: t.id
                        }
                    }
                    return null
                }(e, n, s) : function(e, t, n) {
                    var l;
                    let a = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) + 1],
                        s = o(-1, t.id, e.type, n);
                    if (null == s) return null;
                    if (e.isGuildVocal()) {
                        if (null == a || a.channel.isCategory()) return {
                            referenceId: s.channel.id,
                            parentId: t.parent_id
                        };
                        if (a.channel.isGuildVocal()) return {
                            referenceId: s.channel.id,
                            parentId: a.channel.parent_id
                        }
                    }
                    return e.isCategory() && (null == a || a.channel.isCategory()) ? {
                        referenceId: s.channel.id,
                        parentId: null
                    } : null
                }(e, n, s)
            }

            function f(e, t, n, i) {
                let r, o, d = [],
                    c = [],
                    f = i._categories,
                    h = t => {
                        var n, l, a, i;
                        let u;
                        if (null == r || null == o || (n = e, l = r, a = o, i = t, null != l && null != a && null != i[l] && i[l].channel === n && null != i[a] ? 0 : 1)) u = [...t];
                        else u = s.default.moveItemFromTo(t, r, o);
                        return d = d.concat(s.default.calculatePositionDeltas({
                            oldOrdering: t,
                            newOrdering: u,
                            idGetter: e => {
                                let {
                                    channel: t
                                } = e;
                                return t.id
                            },
                            existingPositionGetter: e => {
                                let {
                                    channel: t
                                } = e;
                                return t.position
                            }
                        })), u
                    };
                if (e.isCategory()) {
                    let n = [...f].slice(1);
                    r = u(e, n), o = u(t, n), (c = h(n)).unshift(f[0])
                }
                if ((0, a.isGuildSelectableChannelType)(e.type) || e.isCategory()) {
                    let n = (0, l.default)(c.length > 0 ? c : f, i, e => {
                        let {
                            channel: {
                                type: t
                            }
                        } = e;
                        return (0, a.isGuildSelectableChannelType)(t)
                    });
                    r = u(e, n), o = u(t, n), h(n)
                }
                if (e.isGuildVocal() || e.isCategory()) {
                    let n = (0, l.default)(c.length > 0 ? c : f, i, e => {
                        let {
                            channel: t
                        } = e;
                        return t.isGuildVocal()
                    });
                    r = u(e, n), o = u(t, n), h(n)
                }
                if (e.parent_id !== n) {
                    let t = !1;
                    d.find(l => l.id === e.id && (l.parent_id = n, t = !0)), !t && d.push({
                        id: e.id,
                        parent_id: n
                    })
                }
                return d
            }