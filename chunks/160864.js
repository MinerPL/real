"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var r = n("37983"),
  s = n("884691"),
  i = n("414456"),
  a = n.n(i),
  l = n("77078"),
  o = n("716849"),
  c = n("552917"),
  u = n("109036"),
  d = n("336522"),
  p = n("782340"),
  h = n("831839"),
  f = n("4184");

function v() {
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      className: a(f.sparkleWhite, h.sparkleOne)
    }), (0, r.jsx)("div", {
      className: a(f.sparkleWhite, h.sparkleTwo)
    }), (0, r.jsx)("div", {
      className: a(f.lightWhite, h.lightOne)
    }), (0, r.jsx)("div", {
      className: a(f.lightWhite, h.lightTwo)
    }), (0, r.jsx)("div", {
      className: a(f.crossWhite, h.crossOne)
    }), (0, r.jsx)("div", {
      className: a(f.crossWhite, h.crossTwo)
    }), (0, r.jsx)("div", {
      className: a(f.popWhite, h.popOne)
    })]
  })
}
class g extends s.Component {
  componentDidMount() {
    let e = this.elementDOMRef.current;
    null != e && (e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1), e.addEventListener("dragover", this.handleDragOverZone, !1), e.addEventListener("dragleave", this.handleDragLeaveZone, !1), e.addEventListener("drop", this.handleDrop, !1))
  }
  componentWillUnmount() {
    let e = this.elementDOMRef.current;
    null != e && (e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1), e.removeEventListener("dragover", this.handleDragOverZone, !1), e.removeEventListener("dragleave", this.handleDragLeaveZone, !1), e.removeEventListener("drop", this.handleDrop, !1)), clearTimeout(this.dragOverTimeout)
  }
  render() {
    let {
      title: e,
      description: t,
      icons: n,
      style: s,
      className: i
    } = this.props;
    return (0, r.jsx)("div", {
      ref: this.elementDOMRef,
      className: a(i, h.uploadArea, {
        [h.droppable]: this.state.isDragging,
        [h.uploadModalIn]: this.state.isOverZone
      }),
      style: s,
      children: (0, r.jsxs)("div", {
        className: h.uploadDropModal,
        children: [this.state.isDragging && (0, r.jsx)(v, {}), (0, r.jsx)("div", {
          className: h.bgScale
        }), (0, r.jsxs)("div", {
          className: h.inner,
          children: [(0, r.jsx)(u.default, {
            icons: n
          }), (0, r.jsx)("div", {
            className: h.title,
            children: e
          }), (0, r.jsx)("div", {
            className: h.instructions,
            children: (0, r.jsx)("pre", {
              children: t
            })
          })]
        })]
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, this.state = {
      isDragging: !1,
      isOverZone: !1
    }, this.dragOverTimeout = null, this.elementDOMRef = s.createRef(), this.isAllDropFiles = e => {
      for (let n = 0; n < e.length; n++) try {
        var t;
        let r = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
        if (r && !r.isFile) return !1
      } catch (e) {
        continue
      }
      return !0
    }, this.preventUnwantedDrop = function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e.dataTransfer;
      if (null == r) return !0;
      let s = Array.isArray(r.types) && -1 !== r.types.indexOf("text/uri-list") && -1 === r.types.indexOf("application/json"),
        i = null != r.items && !t.isAllDropFiles(r.items);
      return !s && !i || (e.stopPropagation(), e.preventDefault(), r.effectAllowed = "none", r.dropEffect = "none", n && (t.setState({
        isDragging: !1
      }), (0, d.openUploadError)({
        title: p.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
        help: p.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
        icons: t.props.icons
      })), !1)
    }, this.handleDragOver = e => {
      var t, n, r;
      if (!this.preventUnwantedDrop(e)) return !1;
      let s = e.dataTransfer;
      if (null == s) return;
      s.dropEffect = "copy";
      let i = (0, l.hasModalOpen)(d.UPLOAD_ERROR_MODAL_KEY);
      if (i && (0, l.closeModal)(d.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging) {
        (0, o.maybeFetchPremiumLikelihood)(c.default);
        let e = null === (r = this.elementDOMRef.current) || void 0 === r ? void 0 : r.ownerDocument.defaultView,
          t = null != e && s.types instanceof e.DOMStringList && s.types.contains("application/x-moz-file");
        (t || -1 !== s.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
          isDragging: !0
        })
      }
      clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
        var e, t;
        this.setState({
          isDragging: !1
        }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
      }, 1e3)
    }, this.handleDragOverZone = () => {
      this.setState({
        isOverZone: !0
      })
    }, this.handleDragLeaveZone = () => {
      this.setState({
        isOverZone: !1
      })
    }, this.handleDragLeave = e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }, this.clearDragging = () => {
      var e, t;
      this.setState({
        isDragging: !1,
        isOverZone: !1
      }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
    }, this.handleDrop = e => {
      if (!this.preventUnwantedDrop(e, !0)) return !1;
      let t = e.dataTransfer;
      if (null == t) return !0;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
    }
  }
}
var m = g