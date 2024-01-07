            "use strict";
            n.r(t), n.d(t, {
                getFilters: function() {
                    return l
                },
                processImage: function() {
                    return u
                },
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("371642"),
                a = n("991207"),
                o = n("782340");

            function l() {
                return [{
                    name: o.default.Messages.IMAGES,
                    extensions: ["jpg", "jpeg", "png", "gif"]
                }]
            }

            function u(e, t, n) {
                ! function(e, t) {
                    if (null != e) {
                        let n = new FileReader;
                        n.onload = n => {
                            var i;
                            "string" == typeof(null === (i = n.target) || void 0 === i ? void 0 : i.result) && t(n.target.result, e)
                        }, n.readAsDataURL(e)
                    }
                }(e, i => {
                    if (e.type === a.FileTypes.MP4) return t(i, e);
                    let r = new Image;
                    r.src = i, r.onload = () => {
                        t(i, e)
                    }, r.onerror = () => {
                        n()
                    }
                })
            }
            class c extends r.PureComponent {
                componentDidMount() {
                    this._isMounted = !0
                }
                activateUploadDialogue() {
                    var e;
                    null === (e = this._ref.current) || void 0 === e || e.activateUploadDialogue()
                }
                render() {
                    let {
                        multiple: e,
                        disabled: t,
                        className: n,
                        tabIndex: r,
                        "aria-label": a,
                        filters: o
                    } = this.props;
                    return (0, i.jsx)(s.default, {
                        ref: this._ref,
                        onChange: this.handleFileChange,
                        filters: null != o ? o : l(),
                        multiple: e,
                        disabled: t,
                        className: n,
                        tabIndex: r,
                        "aria-label": a
                    })
                }
                constructor(...e) {
                    super(...e), this._ref = r.createRef(), this._isMounted = !1, this.handleFileChange = e => {
                        let {
                            onFileSizeError: t,
                            maxFileSizeBytes: n
                        } = this.props;
                        if (e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files)
                            for (let i = 0; i < e.currentTarget.files.length; i++) {
                                let r = e.currentTarget.files[i];
                                if (r.size > n) {
                                    null == t || t(n, r.size);
                                    continue
                                }
                                u(r, this.handleFileRead, this.handleFileError)
                            }
                    }, this.handleFileRead = (e, t) => {
                        let {
                            onChange: n
                        } = this.props;
                        this._isMounted && n(e, t)
                    }, this.handleFileError = async () => {
                        let {
                            openUploadError: e
                        } = await n.el("336522").then(n.bind(n, "336522"));
                        e({
                            title: o.default.Messages.PREMIUM_ALERT_ERROR_TITLE,
                            help: o.default.Messages.UNABLE_TO_PROCESS_IMAGE
                        })
                    }
                }
            }
            c.defaultProps = {
                multiple: !0,
                tabIndex: -1,
                maxFileSizeBytes: 1 / 0
            };
            var d = c