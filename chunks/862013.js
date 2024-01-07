            "use strict";
            i.r(t), i.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return a
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return l
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return r
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return u
                },
                insertAccessibilityLabelElements: function() {
                    return o
                }
            });
            var n = i("476765"),
                s = i("782340");
            let a = (0, n.uid)(),
                l = (0, n.uid)(),
                r = (0, n.uid)(),
                u = (0, n.uid)();

            function o() {
                [{
                    id: a,
                    text: ","
                }, {
                    id: l,
                    text: ","
                }, {
                    id: r,
                    text: s.default.Messages.REACTIONS
                }, {
                    id: u,
                    text: s.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: i
                    } = e, n = document.getElementById(t);
                    null == n && ((n = document.createElement("div")).setAttribute("id", t), n.innerText = i, n.style.display = "none", document.body.appendChild(n))
                })
            }