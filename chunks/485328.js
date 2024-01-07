            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007"), n("781738"), n("424973");
            var i = n("800648"),
                r = n.n(i),
                s = n("969230"),
                a = n.n(s),
                o = n("953260"),
                l = n("605250"),
                u = n("599110"),
                c = n("773336"),
                d = n("49111");
            let f = {},
                E = [],
                h = !1,
                p = a(new r(window)),
                _ = (0, c.isMac)() ? "cmd" : "ctrl",
                S = (0, c.isMac)() ? "opt" : "alt",
                m = (0, c.isMac)() ? "return" : "enter",
                T = [...o.JUMP_TO_GUILD.binds, "mod+shift+[", "mod+shift+]", "mod+[", "mod+]", "alt+[", "alt+]", "ctrl+shift+tab", "ctrl+tab", "mod+n", "mod+t", "mod+shift+t", "mod+plus", "mod+minus", "mod+0"].map(e => e.replace("mod", _)),
                g = () => [],
                I = [];
            if ((0, c.isDesktop)()) {
                let e = new r(document.documentElement);
                e.bind("backspace", e => e.preventDefault())
            }

            function C(e) {
                let t = [];
                for (let n of Object.values(e)) null != n && t.push(...n.binds);
                return t.map(e => e.replace("mod", _))
            }

            function v(e, t) {
                return (n, i) => (u.default.track(d.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
                    shortcut_name: e
                }), t(n, i))
            }

            function A(e) {
                for (let [t, n] of Object.entries(e)) {
                    if (null == n) continue;
                    let e = g();
                    !c.isPlatformEmbedded && (e = e.concat(T));
                    let i = n.binds.filter(t => (t = t.replace("mod", _), 0 > e.indexOf(t)));
                    if (0 === i.length) continue;
                    let r = n.comboKeysBindGlobal ? p.bindGlobal : p.bind;
                    if (null != n.action && r.call(p, i, v(t, n.action)), null != n.keyup && r.call(p, i, v(t, n.keyup), "keyup"), null != n.keydown) {
                        let e = i.indexOf("any-character"); - 1 !== e && (! function(e, t) {
                            let n = e => t(e, e.key);
                            document.addEventListener(e, n), I.push(() => document.removeEventListener(e, n))
                        }("keydown", n.keydown), i.splice(e, 1)), i.length > 0 && r.call(p, i, v(t, n.keydown), "keydown")
                    }
                    null != n.keypress && r.call(p, i, v(t, n.keypress), "keypress")
                }
            }
            var R = {
                combokeys: p,
                modKey: _,
                altKey: S,
                returnKey: m,
                setGetKeybindList(e) {
                    g = e
                },
                checkDupes(e) {
                    let t = new Set,
                        n = [],
                        i = C(e);
                    for (let e of i) t.has(e) && n.push(e), t.add(e);
                    n.length > 0 && new(0, l.default)("Keybinds").warn("Duplicate keyboard shortcuts defined:", n)
                },
                setLayout(e) {
                    f = e
                },
                enable() {
                    !h && (h = !0, this.checkDupes(f), A(f))
                },
                enableTemp(e) {
                    E.push(f), f = e, A(e), h = !0
                },
                disableTemp() {
                    let e = E.pop();
                    null != e && (f = e), this.disable(), this.enable()
                },
                disable() {
                    h && (h = !1, I.forEach(e => e()), I = [], p.reset())
                },
                validateKeybind(e) {
                    h && this.hasBind(e) && p.unbind(e)
                },
                hasBind(e) {
                    let t = C(f);
                    return e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim(), t.includes(e)
                }
            }