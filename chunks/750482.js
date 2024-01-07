            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                },
                MonetizationListingImageAspectStable: function() {
                    return u
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("617258"),
                l = s("769846"),
                i = s("801765"),
                r = s("955735");
            let o = (0, n.cssValueToNumber)(l.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function d(e) {
                let {
                    listing: t,
                    imageSize: s,
                    alt: n,
                    ...l
                } = e, r = (0, i.useListingThumbnailUrl)(t, s);
                return (0, a.jsx)("img", {
                    src: r,
                    alt: n,
                    ...l
                })
            }

            function u(e) {
                let {
                    listing: t,
                    aspectRatio: s = 16 / 9,
                    height: n,
                    ...l
                } = e, d = (n - 2 * o) * s, u = (0, i.useListingThumbnailUrl)(t, d), c = (0, i.useListingThumbnailUrl)(t, d, {
                    shouldAnimate: !1
                });
                return (0, a.jsx)(r.default, {
                    src: u,
                    backgroundSrc: c,
                    aspectRatio: s,
                    ...l
                })
            }