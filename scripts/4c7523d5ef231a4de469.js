(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["24676"], {
        13406: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return E
                }
            });
            var t = n("920040");
            n("773670");
            var u = n("117064"),
                a = n("77078"),
                d = n("272030"),
                s = n("861370"),
                r = n("636734"),
                i = n("26051"),
                o = n("667358"),
                c = n("522778"),
                f = n("718381"),
                h = n("875834"),
                M = n("780657"),
                p = n("782340");

            function E(e) {
                var l;
                let n, E, _, {
                        channel: m,
                        message: x,
                        target: C,
                        attachment: S,
                        onSelect: g
                    } = e,
                    G = C;
                if (null != S) E = n = S.url;
                else
                    for (;
                        (0, u.isElement)(G);)(0, u.isElement)(G, HTMLImageElement) && null != G.src && (E = G.src), (0, u.isElement)(G, HTMLAnchorElement) && null != G.href && (n = G.href, _ = G.textContent), G = G.parentNode;
                let j = null === (l = document.getSelection()) || void 0 === l ? void 0 : l.toString(),
                    v = (0, r.default)(j),
                    A = (0, o.default)(j),
                    I = (0, M.default)(x, m),
                    b = (0, h.default)(x, m),
                    k = (0, c.default)(x, m),
                    L = (0, f.default)(x, m),
                    O = (0, i.default)(null != n ? n : E, _),
                    T = (0, s.default)({
                        id: x.id,
                        label: p.default.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(x.channel_id, "-").concat(x.id)
                    }),
                    H = (0, s.default)({
                        id: x.author.id,
                        label: p.default.Messages.COPY_ID_AUTHOR
                    });
                return (0, t.jsxs)(a.Menu, {
                    navId: "message",
                    onClose: d.closeContextMenu,
                    "aria-label": p.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: g,
                    children: [(0, t.jsx)(a.MenuGroup, {
                        children: v
                    }), (0, t.jsx)(a.MenuGroup, {
                        children: A
                    }), (0, t.jsxs)(a.MenuGroup, {
                        children: [I, b, k, L]
                    }), (0, t.jsx)(a.MenuGroup, {
                        children: O
                    }), (0, t.jsxs)(a.MenuGroup, {
                        children: [T, H]
                    })]
                })
            }
        }
    }
]);