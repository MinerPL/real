            "use strict";
            a.r(t), a.d(t, {
                GRID_POST_CONTROLS_MARGIN: function() {
                    return r
                },
                GridLayout: function() {
                    return i
                },
                ForumListLayoutRenderOptions: function() {
                    return o
                },
                getFrameDimensions: function() {
                    return u
                },
                IMAGE_PADDING: function() {
                    return d
                },
                getGridPostHeight: function() {
                    return c
                }
            });
            var s = a("627445"),
                n = a.n(s);
            let l = 2 / 3,
                r = 12;
            class i {
                getWidth(e) {
                    return this.getRenderOptions(e).columnWidth
                }
                getRenderOptions(e) {
                    if (e <= this.minWidth) return {
                        columns: 1,
                        columnWidth: this.minWidth
                    };
                    let t = e / this.maxWidth,
                        a = e / this.minWidth,
                        s = Math.max(Math.floor(t + (a - t) / 2), 1),
                        n = this.gap * (s - 1);
                    return {
                        columns: s,
                        columnWidth: (e - n) / s
                    }
                }
                constructor({
                    minWidth: e,
                    maxWidth: t,
                    gap: a
                }) {
                    n(e < t, "minWidth needs to be smaller than maxWidth"), this.minWidth = e, this.maxWidth = t, this.gap = a
                }
            }
            let o = {
                    columns: 1,
                    columnWidth: 450
                },
                u = e => {
                    let t = e - 2;
                    return [t, Math.ceil(t * l)]
                },
                d = 12,
                c = e => 60 + u(e - 2 * d)[1] + 24 + 3 * r