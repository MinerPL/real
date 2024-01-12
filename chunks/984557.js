            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            }), s("222007");
            var a, n = s("884691"),
                l = s("979897"),
                i = s("49671"),
                r = s("773336");
            a = class extends n.Component {
                getFileContents() {
                    let {
                        fileContents: e
                    } = this.props;
                    return "function" == typeof e && (e = e()), e
                }
                downloadNative(e, t) {
                    i.default.fileManager.saveWithDialog(e, t)
                }
                downloadHtml5(e, t) {
                    let s = new Blob([e], {
                        type: this.props.contentType
                    });
                    (0, l.saveAs)(s, t)
                }
                render() {
                    let {
                        children: e
                    } = this.props, t = n.Children.only(e);
                    return n.cloneElement(t, {
                        onClick: this.handleFileDownload
                    })
                }
                constructor(...e) {
                    super(...e), this.handleFileDownload = e => {
                        e.preventDefault();
                        let t = this.getFileContents(),
                            {
                                fileName: s,
                                onDownload: a
                            } = this.props;
                        r.isPlatformEmbedded ? this.downloadNative(t, s) : this.downloadHtml5(t, s), null == a || a()
                    }
                }
            }