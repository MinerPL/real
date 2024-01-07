            "use strict";
            r("70102");
            var n = r("569885"),
                i = r("935621"),
                o = r("920074"),
                a = r("50360");
            t.exports = function(t) {
                if (t._blockSelectEvents || t._latestEditorState !== t.props.editorState) {
                    if (t._blockSelectEvents) {
                        var e = t.props.editorState.getSelection();
                        n.logBlockedSelectionEvent({
                            anonymizedDom: "N/A",
                            extraParams: JSON.stringify({
                                stacktrace: Error().stack
                            }),
                            selectionState: JSON.stringify(e.toJS())
                        })
                    }
                    return
                }
                var r = t.props.editorState,
                    u = a(r, o(t)),
                    s = u.selectionState;
                s !== r.getSelection() && (r = u.needsRecovery ? i.forceSelection(r, s) : i.acceptSelection(r, s), t.update(r))
            }