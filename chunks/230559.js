            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                r = n("597755"),
                s = n.n(r),
                a = n("458960"),
                u = n("904160");

            function o(e) {
                let t = e => e.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0px", "1px"]
                });
                return {
                    transform: [{
                        translateX: t(e.x)
                    }, {
                        translateY: t(e.y)
                    }]
                }
            }
            class d extends l.Component {
                componentDidMount() {
                    this._isMounted = !0;
                    let {
                        x: e,
                        y: t
                    } = this.state;
                    "Firefox" !== s.name && (a.default.animate(e, {
                        loop: !0,
                        toValueMin: -74,
                        toValueMax: 95,
                        overshootClamping: !0,
                        friction: 5,
                        tension: 1,
                        shouldLoop: this.shouldLoop
                    }), a.default.animate(t, {
                        loop: !0,
                        toValueMin: -59,
                        toValueMax: 75,
                        overshootClamping: !0,
                        friction: 5,
                        tension: 1,
                        shouldLoop: this.shouldLoop
                    }))
                }
                componentWillUnmount() {
                    this._isMounted = !1
                }
                render() {
                    return (0, i.jsxs)("div", {
                        className: u.searchIndexAnimation,
                        children: [(0, i.jsx)("div", {
                            className: u.searchIndexBackground
                        }), (0, i.jsxs)("svg", {
                            className: u.searchIndexForeground,
                            width: "320",
                            height: "280",
                            children: [(0, i.jsx)("defs", {
                                children: (0, i.jsx)("rect", {
                                    id: "search-index-foreground-mask-a",
                                    width: "80",
                                    height: "80",
                                    rx: "40"
                                })
                            }), (0, i.jsxs)("g", {
                                fill: "none",
                                fillRule: "evenodd",
                                children: [(0, i.jsxs)("g", {
                                    transform: "translate(120 80)",
                                    children: [(0, i.jsx)("mask", {
                                        id: "search-index-foreground-mask-b",
                                        fill: "#fff",
                                        children: (0, i.jsx)(a.default.use, {
                                            style: o(this.state),
                                            className: u.mask,
                                            xlinkHref: "#search-index-foreground-mask-a"
                                        })
                                    }), (0, i.jsxs)("g", {
                                        mask: "url(#search-index-foreground-mask-b)",
                                        children: [(0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFD773",
                                            d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-15.0267 170.8361c0 6.311-5.116 11.427-11.428 11.427-6.31 0-11.426-5.116-11.426-11.427s5.116-11.427 11.426-11.427c6.312 0 11.428 5.116 11.428 11.427z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFD773",
                                            d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-12.39 165.5622c-6.311 0-11.427-5.116-11.427-11.427s5.116-11.427 11.427-11.427 11.427 5.116 11.427 11.427c0 2.727-.955 5.231-2.55 7.196",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFD773",
                                            d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-23.8168 129.5232c6.311 0 11.427 5.116 11.427 11.427s-5.116 11.427-11.427 11.427c-6.312 0-11.427-5.116-11.427-11.427",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFD773",
                                            d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M110.2125-35.5789c.556 6.286-4.089 11.833-10.375 12.39-6.287.556-11.834-4.089-12.391-10.375-.555-6.286 4.089-11.834 10.376-12.39",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#C2FFF9",
                                            d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671zm-18.6982 25.5654l33.402-19.788",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-93.1889 132.2868l23.272 20.241-6.571-30.135",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#C2FFF9",
                                            d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M135.6949-69.0003l-.625 26.692 16.447-21.032m-27.3679 1.6701l31.645 11.319",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#E4E9F8",
                                            d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532"
                                        }), (0, i.jsx)("path", {
                                            fill: "#7687B2",
                                            d: "M45.3502-64.8382c-.602-2.453-3.078-3.954-5.532-3.353l-102.171 25.056c-2.454.601-3.954 3.078-3.353 5.531l3.489 14.228 111.056-27.234-3.489-14.228z"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532zM-62.2172-23.3763l111.057-27.234m-95.9164 3.7287l-8.367 21.844m30.0096-27.1517l-8.366 21.844m30.0096-27.1516l-8.366 21.844M17.8522-62.804L9.4862-40.96m30.0095-27.1516l-8.366 21.844",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FF7B78",
                                            d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z"
                                        }), (0, i.jsx)("path", {
                                            fill: "#E4E9F8",
                                            d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z"
                                        }), (0, i.jsx)("path", {
                                            fill: "#E4E9F8",
                                            d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#5871B7",
                                            d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123zM64.1588 1.2805h-43.147m21.5738-8.1114h-21.574m91.3894 0H49.816m33.9815-8.1118h-62.786",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055"
                                        }), (0, i.jsx)("path", {
                                            fill: "#E4E9F8",
                                            d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#5865f2",
                                            d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-26.3637 22.2653h48.67M6.0826 30.3767h68.309m-100.7553 0h22.799m53.1942 8.1118h14.942m-24.3346 0h4.534m-71.1346 0h54.093m-54.093 8.1113h63.186",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#98AFED",
                                            d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-60.6225 77.6657h99.433m-23.4398 8.1114h7.949m-19.6892 0h-64.253m0 8.1118h47.398m-47.398 8.1113h116.122",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#E4E9F8",
                                            d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574"
                                        }), (0, i.jsx)("path", {
                                            fill: "#7687B2",
                                            d: "M42.4547-33.7181v-14.743c0-2.527-2.048-4.574-4.574-4.574h-105.198c-2.527 0-4.575 2.047-4.575 4.574v14.743h114.347z"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574zM-71.892-33.8123H42.455m-94.0442-19.2231l-13.328 19.223m35.6121-19.223l-13.328 19.223m35.6132-19.223l-13.328 19.223m35.6122-19.223l-13.328 19.223m35.6121-19.223l-13.328 19.223",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FF7B78",
                                            d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, i.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-26.6293-25.6136v33.584l31.445-16.792"
                                        }), (0, i.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-26.6293-25.6136v33.584l31.445-16.792zM184.3375 8.3772v6.43m3.2149-3.2152h-6.43m-292.9079 79.082v6.43m3.2148-3.2151h-6.43M195.901-43.6692l-1.516 1.515m-6.0611 6.0621l-1.516 1.516m9.0931-.0004l-1.516-1.516m-6.0611-6.0616l-1.516-1.515M-88.642 168.9265l-1.516 1.516m-6.0621 6.0616l-1.516 1.515m9.0941.0001l-1.516-1.515m-6.0621-6.0621l-1.516-1.516M174.3463-8.8211c0 1.775-1.439 3.215-3.215 3.215-1.776 0-3.215-1.44-3.215-3.215s1.439-3.215 3.215-3.215c1.776 0 3.215 1.44 3.215 3.215z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    })]
                                }), (0, i.jsxs)(a.default.g, {
                                    className: u.magnifyingGlass,
                                    style: o(this.state),
                                    children: [(0, i.jsx)("path", {
                                        fill: "#C9D2F0",
                                        d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0"
                                    }), (0, i.jsx)("path", {
                                        stroke: "#1E2126",
                                        strokeWidth: "2",
                                        d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0z",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, i.jsx)("path", {
                                        fill: "#9F7373",
                                        d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0"
                                    }), (0, i.jsx)("path", {
                                        stroke: "#1E2126",
                                        strokeWidth: "2",
                                        d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0z",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, i.jsx)("path", {
                                        fill: "#F3F9FF",
                                        d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0m63.895-63.895c-19.667-19.667-51.554-19.667-71.221 0s-19.667 51.554 0 71.221 51.554 19.667 71.221 0 19.667-51.554 0-71.221"
                                    }), (0, i.jsx)("path", {
                                        stroke: "#1E2126",
                                        strokeWidth: "2",
                                        d: "M196.0069 155.9708c-19.667 19.667-51.554 19.667-71.221 0s-19.667-51.554 0-71.221 51.554-19.667 71.221 0 19.667 51.554 0 71.221z",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, i.jsx)("path", {
                                        stroke: "#1E2126",
                                        strokeWidth: "2",
                                        d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0z",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, i.jsx)("path", {
                                        d: "M84 66h130v130H84z"
                                    })]
                                })]
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        x: new a.default.Value(0),
                        y: new a.default.Value(0)
                    }, this._isMounted = !1, this.shouldLoop = () => this._isMounted
                }
            }
            var c = d