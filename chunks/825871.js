            "use strict";
            n.r(t), n.d(t, {
                EMPTY_RESULTS: function() {
                    return A
                },
                FakeFooter: function() {
                    return R
                },
                getLimit: function() {
                    return M
                },
                default: function() {
                    return b
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("271841"),
                r = n("551042"),
                o = n("798609"),
                s = n("507217"),
                a = n("589777"),
                u = n("988721"),
                d = n("240249"),
                c = n("972620"),
                f = n("166004"),
                p = n("383018"),
                m = n("524768"),
                h = n("389153"),
                E = n("396465"),
                S = n("355263"),
                g = n("957255"),
                C = n("501536"),
                T = n("655518"),
                v = n("200294"),
                y = n("851745"),
                x = n("406291"),
                I = n("317041"),
                N = n("782340"),
                _ = n("94885");
            let A = {
                results: {
                    entries: []
                }
            };

            function R() {
                return d.useSearchOpenState(), null
            }

            function O() {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("496896").then(n.bind(n, "496896"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                })
            }

            function M(e) {
                return d.isInIndexExperiment({
                    location: e
                }) ? y.MAX_COMMAND_AUTOCOMPLETE_RESULTS : y.MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY
            }
            let k = {
                sentinel: x.COMMAND_SENTINEL,
                stores: [p.default, f.default, u.default, g.default],
                matches: (e, t, n, l, i) => i.commands !== y.CommandMode.DISABLED && null == p.default.getActiveCommand(e.id) && (l || i.commands !== y.CommandMode.OLD_BUILT_INS),
                queryResults(e, t, n, l, i) {
                    if (0 === n.length && l.commands !== y.CommandMode.OLD_BUILT_INS) return A;
                    let r = M("CommandAutocompletes");
                    if (l.commands === y.CommandMode.OLD_BUILT_INS) {
                        let l = (0, a.getBuiltInCommands)(o.ApplicationCommandType.CHAT, !1, !1),
                            i = RegExp("^".concat(T.default.escape(n)), "i"),
                            s = (0, h.getMatchingGroupCommands)(l, i, {
                                channel: e,
                                guild: t
                            }, r),
                            u = a.BUILT_IN_SECTIONS[I.BuiltInSectionId.BUILT_IN];
                        return 0 === s.length ? A : {
                            results: {
                                entries: s.map(e => ({
                                    command: e,
                                    section: u
                                }))
                            }
                        }
                    }
                    let s = (0, S.getCommandQuery)(e, n),
                        {
                            commands: u,
                            sections: f
                        } = d.executeQuery(e, {
                            commandType: o.ApplicationCommandType.CHAT,
                            text: s.text
                        }, {
                            limit: r,
                            placeholderCount: y.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                            scoreMethod: c.ScoreMethod.COMMAND_OR_APPLICATION,
                            allowFetch: i
                        });
                    if (null == u) return A;
                    let p = u;
                    if (s.hasSpaceTerminator) {
                        let e = s.text.trim(),
                            t = e + " ";
                        p = p.filter(n => n.name === e || n.name.startsWith(t))
                    }
                    return 0 === p.length ? A : {
                        results: {
                            entries: p.slice(0, r).map(e => ({
                                command: e,
                                section: null == f ? void 0 : f.find(t => t.id === e.applicationId)
                            }))
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            entries: t
                        },
                        selectedIndex: n,
                        channel: r,
                        query: o,
                        options: s,
                        onHover: a,
                        onClick: u
                    } = e, c = (0, S.getCommandQuery)(r, o);
                    if (s.commands !== y.CommandMode.OLD_BUILT_INS && !d.isInIndexExperiment({
                            location: "CommandAutocompletes"
                        })) return (0, l.jsx)(E.default, {
                        channel: r,
                        query: c.text,
                        selectedIndex: n,
                        onHover: a,
                        onClick: u
                    });
                    let f = s.commands === y.CommandMode.OLD_BUILT_INS;
                    return (0, v.renderAutocompleteGroup)({
                        query: c.text,
                        selectedIndex: n,
                        autocompletes: t,
                        onHover: a,
                        onClick: u,
                        titleWithQuery: N.default.Messages.COMMANDS_MATCHING,
                        titleWithoutQuery: N.default.Messages.COMMANDS,
                        getQuery: e => "".concat(x.COMMAND_SENTINEL).concat(e),
                        Component: f ? C.default.Command : C.default.NewCommand,
                        getProps: e => {
                            let {
                                command: t,
                                section: n
                            } = e;
                            return {
                                key: t.id,
                                command: t,
                                channel: r,
                                guildId: r.guild_id,
                                showImage: !0,
                                section: n
                            }
                        },
                        key: "commands",
                        headerClassName: f ? _.legacyInputCommandHeader : null,
                        headerTrailingContent: f ? (0, l.jsx)(i.Button, {
                            type: "button",
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.BRAND,
                            size: i.Button.Sizes.MIN,
                            onClick: O,
                            children: N.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_MISSING_HELP_MESSAGE
                        }) : null,
                        footer: (0, l.jsx)(R, {})
                    })
                },
                onSelect(e) {
                    let {
                        results: {
                            entries: t
                        },
                        index: n,
                        queryText: l,
                        options: i,
                        channel: r,
                        location: o,
                        tabOrEnter: a
                    } = e, {
                        command: u,
                        section: d
                    } = t[n];
                    if (u.inputType === m.ApplicationCommandInputType.PLACEHOLDER) return null;
                    if (i.commands === y.CommandMode.OLD_BUILT_INS) i.insertText(function(e) {
                        return "".concat(x.COMMAND_SENTINEL).concat(e.name)
                    }(u));
                    else {
                        let e = o;
                        null == e && (e = a ? m.ApplicationCommandTriggerLocations.QUERY : m.ApplicationCommandTriggerLocations.DISCOVERY), s.setActiveCommand({
                            channelId: r.id,
                            command: u,
                            section: null != d ? d : null,
                            location: e,
                            queryLength: null == l ? void 0 : l.length
                        })
                    }
                    return {
                        type: y.AutocompleteSelectionTypes.COMMAND
                    }
                }
            };
            var b = k