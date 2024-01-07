            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, r = n("884691"),
                o = n("979897"),
                l = n("49671"),
                s = n("773336");
            i = class extends r.Component {
                getFileContents() {
                    let {
                        fileContents: e
                    } = this.props;
                    return "function" == typeof e && (e = e()), e
                }
                downloadNative(e, t) {
                    l.default.fileManager.saveWithDialog(e, t)
                }
                downloadHtml5(e, t) {
                    let n = new Blob([e], {
                        type: this.props.contentType
                    });
                    (0, o.saveAs)(n, t)
                }
                render() {
                    let {
                        children: e
                    } = this.props, t = r.Children.only(e);
                    return r.cloneElement(t, {
                        onClick: this.handleFileDownload
                    })
                }
                constructor(...e) {
                    super(...e), this.handleFileDownload = e => {
                        e.preventDefault();
                        let t = this.getFileContents(),
                            {
                                fileName: n,
                                onDownload: i
                            } = this.props;
                        s.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == i || i()
                    }
                }
            }