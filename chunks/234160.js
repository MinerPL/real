            "use strict";
            n.r(t), n.d(t, {
                createDragDropActions: function() {
                    return l
                }
            });
            var r = n("10098"),
                o = n("935452"),
                a = n("139184"),
                i = n("574119"),
                s = n("111526"),
                c = n("897345");

            function l(e) {
                return {
                    beginDrag: (0, r.createBeginDrag)(e),
                    publishDragSource: (0, o.createPublishDragSource)(e),
                    hover: (0, a.createHover)(e),
                    drop: (0, i.createDrop)(e),
                    endDrag: (0, s.createEndDrag)(e)
                }
            }
            n.es(c, t)