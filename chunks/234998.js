            "use strict";
            n.r(t), n.d(t, {
                setMessageAttachmentDimensions: function() {
                    return l
                }
            });
            var i = n("651693"),
                r = n("170213");

            function l(e) {
                if ((0, i.isImageFile)(e.filename)) {
                    let t = new Image;
                    t.src = e.url, t.onload = () => {
                        let n = t.naturalWidth,
                            i = t.naturalHeight;
                        Promise.resolve({
                            width: n,
                            height: i
                        }).then(t => {
                            let {
                                width: n,
                                height: i
                            } = t;
                            e.width = n, e.height = i
                        }).catch(() => {
                            e.width = r.DEFAULT_MEDIA_MAX_WIDTH, e.height = r.DEFAULT_MEDIA_MAX_HEIGHT
                        })
                    }, t.onerror = () => {
                        e.width = r.DEFAULT_MEDIA_MAX_WIDTH, e.height = r.DEFAULT_MEDIA_MAX_HEIGHT
                    }
                } else if ((0, i.isVideoFile)(e.filename)) {
                    let t = document.createElement("video");
                    t.src = e.url, t.onloadedmetadata = () => {
                        let n = t.videoWidth,
                            i = t.videoHeight;
                        Promise.resolve({
                            width: n,
                            height: i
                        }).then(t => {
                            let {
                                width: n,
                                height: i
                            } = t;
                            e.width = n, e.height = i
                        }).catch(() => {
                            e.width = r.DEFAULT_MEDIA_MAX_WIDTH, e.height = r.DEFAULT_MEDIA_MAX_HEIGHT
                        })
                    }
                }
            }