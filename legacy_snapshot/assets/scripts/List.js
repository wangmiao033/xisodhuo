var t = require;
var e = module;
var o = exports;
var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        }),
    a =
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                a = arguments.length,
                r = a < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
            else
                for (var s = t.length - 1; 0 <= s; s--)
                    (i = t[s]) && (r = (a < 3 ? i(r) : 3 < a ? i(e, o, r) : i(e, o)) || r);
            return 3 < a && r && Object.defineProperty(e, o, r), r;
        };
Object.defineProperty(o, "__esModule", {value: !0});
var r,
    s,
    f,
    c = (d = cc._decorator).ccclass,
    l = d.property,
    p = d.disallowMultiple,
    u = d.menu,
    e = d.executionOrder,
    d = d.requireComponent,
    m = t("ListItem");
((t = r = r || {})[(t.NODE = 1)] = "NODE"),
    (t[(t.PREFAB = 2)] = "PREFAB"),
    ((t = s = s || {})[(t.NORMAL = 1)] = "NORMAL"),
    (t[(t.ADHERING = 2)] = "ADHERING"),
    (t[(t.PAGE = 3)] = "PAGE"),
    ((t = f = f || {})[(t.NONE = 0)] = "NONE"),
    (t[(t.SINGLE = 1)] = "SINGLE"),
    (t[(t.MULT = 2)] = "MULT");
var h,
    e =
        (i(_, (h = cc.Component)),
        Object.defineProperty(_.prototype, "slideMode", {
            get: function () {
                return this._slideMode;
            },
            set: function (t) {
                this._slideMode = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(_.prototype, "virtual", {
            get: function () {
                return this._virtual;
            },
            set: function (t) {
                null != t && (this._virtual = t), 0 != this._numItems && this._onScrolling();
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(_.prototype, "updateRate", {
            get: function () {
                return this._updateRate;
            },
            set: function (t) {
                0 <= t && t <= 6 && (this._updateRate = t);
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(_.prototype, "selectedId", {
            get: function () {
                return this._selectedId;
            },
            set: function (t) {
                var e = this;
                switch (e.selectedMode) {
                    case f.SINGLE:
                        if (!e.repeatEventSingle && t == e._selectedId) return;
                        var o = e.getItemByListId(t),
                            n = void 0;
                        0 <= e._selectedId ? (e._lastSelectedId = e._selectedId) : (e._lastSelectedId = null),
                            (e._selectedId = t),
                            o && ((n = o.getComponent(m.default)).selected = !0),
                            0 <= e._lastSelectedId &&
                                e._lastSelectedId != e._selectedId &&
                                (i = e.getItemByListId(e._lastSelectedId)) &&
                                (i.getComponent(m.default).selected = !1),
                            e.selectedEvent &&
                                cc.Component.EventHandler.emitEvents(
                                    [e.selectedEvent],
                                    o,
                                    t % this._actualNumItems,
                                    null == e._lastSelectedId ? null : e._lastSelectedId % this._actualNumItems
                                );
                        break;
                    case f.MULT:
                        if (!(o = e.getItemByListId(t))) return;
                        (n = o.getComponent(m.default)),
                            0 <= e._selectedId && (e._lastSelectedId = e._selectedId),
                            (e._selectedId = t);
                        var i = !n.selected;
                        (n.selected = i),
                            (n = e.multSelected.indexOf(t)),
                            i && n < 0 ? e.multSelected.push(t) : !i && 0 <= n && e.multSelected.splice(n, 1),
                            e.selectedEvent &&
                                cc.Component.EventHandler.emitEvents(
                                    [e.selectedEvent],
                                    o,
                                    t % this._actualNumItems,
                                    null == e._lastSelectedId ? null : e._lastSelectedId % this._actualNumItems,
                                    i
                                );
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(_.prototype, "numItems", {
            get: function () {
                return this._actualNumItems;
            },
            set: function (t) {
                var e = this;
                if (e.checkInited(!1))
                    if (null == t || t < 0) cc.error("numItems set the wrong::", t);
                    else if (((e._actualNumItems = e._numItems = t), (e._forceUpdate = !0), e._virtual))
                        e._resizeContent(),
                            e.cyclic && (e._numItems = e._cyclicNum * e._numItems),
                            e._onScrolling(),
                            e.frameByFrameRenderNum || e.slideMode != s.PAGE || (e.curPageNum = e.nearestListId);
                    else if (
                        (e.cyclic && (e._resizeContent(), (e._numItems = e._cyclicNum * e._numItems)),
                        (t = e.content.getComponent(cc.Layout)) && (t.enabled = !0),
                        e._delRedundantItem(),
                        (e.firstListId = 0) < e.frameByFrameRenderNum)
                    ) {
                        for (
                            var o = e.frameByFrameRenderNum > e._numItems ? e._numItems : e.frameByFrameRenderNum,
                                n = 0;
                            n < o;
                            n++
                        )
                            e._createOrUpdateItem2(n);
                        e.frameByFrameRenderNum < e._numItems &&
                            ((e._updateCounter = e.frameByFrameRenderNum), (e._updateDone = !1));
                    } else {
                        for (n = 0; n < e._numItems; n++) e._createOrUpdateItem2(n);
                        e.displayItemNum = e._numItems;
                    }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(_.prototype, "scrollView", {
            get: function () {
                return this._scrollView;
            },
            enumerable: !1,
            configurable: !0
        }),
        (_.prototype.onLoad = function () {
            this._init();
        }),
        (_.prototype.onDestroy = function () {
            cc.isValid(this._itemTmp) && this._itemTmp.destroy(),
                cc.isValid(this.tmpNode) && this.tmpNode.destroy(),
                this._pool && this._pool.clear();
        }),
        (_.prototype.onEnable = function () {
            this._registerEvent(),
                this._init(),
                this._aniDelRuning &&
                    ((this._aniDelRuning = !1),
                    this._aniDelItem &&
                        (this._aniDelBeforePos &&
                            ((this._aniDelItem.position = this._aniDelBeforePos), delete this._aniDelBeforePos),
                        this._aniDelBeforeScale &&
                            ((this._aniDelItem.scale = this._aniDelBeforeScale), delete this._aniDelBeforeScale),
                        delete this._aniDelItem),
                    this._aniDelCB && (this._aniDelCB(), delete this._aniDelCB));
        }),
        (_.prototype.onDisable = function () {
            this._unregisterEvent();
        }),
        (_.prototype._registerEvent = function () {
            var t = this;
            t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0),
                t.node.on("touch-up", t._onTouchUp, t),
                t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0),
                t.node.on("scroll-began", t._onScrollBegan, t, !0),
                t.node.on("scroll-ended", t._onScrollEnded, t, !0),
                t.node.on("scrolling", t._onScrolling, t, !0),
                t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
        }),
        (_.prototype._unregisterEvent = function () {
            var t = this;
            t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0),
                t.node.off("touch-up", t._onTouchUp, t),
                t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0),
                t.node.off("scroll-began", t._onScrollBegan, t, !0),
                t.node.off("scroll-ended", t._onScrollEnded, t, !0),
                t.node.off("scrolling", t._onScrolling, t, !0),
                t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
        }),
        (_.prototype._init = function () {
            var t = this;
            if (!t._inited)
                if (
                    ((t._scrollView = t.node.getComponent(cc.ScrollView)),
                    (t.content = t._scrollView.content),
                    t.content)
                ) {
                    switch (
                        ((t._layout = t.content.getComponent(cc.Layout)),
                        (t._align = t._layout.type),
                        (t._resizeMode = t._layout.resizeMode),
                        (t._startAxis = t._layout.startAxis),
                        (t._topGap = t._layout.paddingTop),
                        (t._rightGap = t._layout.paddingRight),
                        (t._bottomGap = t._layout.paddingBottom),
                        (t._leftGap = t._layout.paddingLeft),
                        (t._columnGap = t._layout.spacingX),
                        (t._lineGap = t._layout.spacingY),
                        t._colLineNum,
                        (t._verticalDir = t._layout.verticalDirection),
                        (t._horizontalDir = t._layout.horizontalDirection),
                        t.setTemplateItem(cc.instantiate(t.templateType == r.PREFAB ? t.tmpPrefab : t.tmpNode)),
                        (t._slideMode != s.ADHERING && t._slideMode != s.PAGE) ||
                            ((t._scrollView.inertia = !1), (t._scrollView._onMouseWheel = function () {})),
                        t.virtual || (t.lackCenter = !1),
                        (t._lastDisplayData = []),
                        (t.displayData = []),
                        (t._pool = new cc.NodePool()),
                        (t._forceUpdate = !1),
                        (t._updateCounter = 0),
                        (t._updateDone = !0),
                        (t.curPageNum = 0),
                        t.cyclic &&
                            ((t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t)),
                            (t._scrollView._startBounceBackIfNeeded = function () {
                                return !1;
                            })),
                        t._align)
                    ) {
                        case cc.Layout.Type.HORIZONTAL:
                            switch (t._horizontalDir) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    t._alignCalcType = 1;
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    t._alignCalcType = 2;
                            }
                            break;
                        case cc.Layout.Type.VERTICAL:
                            switch (t._verticalDir) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    t._alignCalcType = 3;
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    t._alignCalcType = 4;
                            }
                            break;
                        case cc.Layout.Type.GRID:
                            switch (t._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    switch (t._verticalDir) {
                                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                            t._alignCalcType = 3;
                                            break;
                                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                            t._alignCalcType = 4;
                                    }
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    switch (t._horizontalDir) {
                                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                            t._alignCalcType = 1;
                                            break;
                                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                            t._alignCalcType = 2;
                                    }
                            }
                    }
                    t.content.removeAllChildren(), (t._inited = !0);
                } else cc.error(t.node.name + "'s cc.ScrollView unset content!");
        }),
        (_.prototype._processAutoScrolling = function (t) {
            this._scrollView._autoScrollAccumulatedTime += +t;
            var e = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
            this._scrollView._autoScrollAttenuate && (e = (o = e - 1) * o * o * o * o + 1);
            var t = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(e)),
                o = this._scrollView.getScrollEndedEventTiming(),
                o = Math.abs(e - 1) <= o;
            Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() &&
                !this._scrollView._isScrollEndedWithThresholdEventFired &&
                (this._scrollView._dispatchEvent("scroll-ended-with-threshold"),
                (this._scrollView._isScrollEndedWithThresholdEventFired = !0)),
                o && (this._scrollView._autoScrolling = !1),
                (t = t.sub(this._scrollView.getContentPosition())),
                this._scrollView._moveContent(this._scrollView._clampDelta(t), o),
                this._scrollView._dispatchEvent("scrolling"),
                this._scrollView._autoScrolling ||
                    ((this._scrollView._isBouncing = !1),
                    (this._scrollView._scrolling = !1),
                    this._scrollView._dispatchEvent("scroll-ended"));
        }),
        (_.prototype.setTemplateItem = function (t) {
            if (t) {
                var e,
                    o = this;
                switch (
                    ((o._itemTmp = t),
                    o._resizeMode == cc.Layout.ResizeMode.CHILDREN
                        ? (o._itemSize = o._layout.cellSize)
                        : (o._itemSize = cc.size(t.width, t.height)),
                    t.getComponent(m.default) || (o.selectedMode = f.NONE),
                    (e = t.getComponent(cc.Widget)) && e.enabled && (o._needUpdateWidget = !0),
                    o.selectedMode == f.MULT && (o.multSelected = []),
                    o._align)
                ) {
                    case cc.Layout.Type.HORIZONTAL:
                        (o._colLineNum = 1), (o._sizeType = !1);
                        break;
                    case cc.Layout.Type.VERTICAL:
                        (o._colLineNum = 1), (o._sizeType = !0);
                        break;
                    case cc.Layout.Type.GRID:
                        switch (o._startAxis) {
                            case cc.Layout.AxisDirection.HORIZONTAL:
                                var n = o.content.width - o._leftGap - o._rightGap;
                                (o._colLineNum = Math.floor((n + o._columnGap) / (o._itemSize.width + o._columnGap))),
                                    (o._sizeType = !0);
                                break;
                            case cc.Layout.AxisDirection.VERTICAL:
                                (n = o.content.height - o._topGap - o._bottomGap),
                                    (o._colLineNum = Math.floor((n + o._lineGap) / (o._itemSize.height + o._lineGap))),
                                    (o._sizeType = !1);
                        }
                }
            }
        }),
        (_.prototype.checkInited = function (t) {
            return (
                void 0 === t && (t = !0), !!this._inited || (t && cc.error("List initialization not completed!"), !1)
            );
        }),
        (_.prototype._resizeContent = function () {
            var t,
                e = this;
            switch (e._align) {
                case cc.Layout.Type.HORIZONTAL:
                    n = e._customSize
                        ? ((t = e._getFixedSize(null)),
                          e._leftGap +
                              t.val +
                              e._itemSize.width * (e._numItems - t.count) +
                              e._columnGap * (e._numItems - 1) +
                              e._rightGap)
                        : e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
                    break;
                case cc.Layout.Type.VERTICAL:
                    n = e._customSize
                        ? ((t = e._getFixedSize(null)),
                          e._topGap +
                              t.val +
                              e._itemSize.height * (e._numItems - t.count) +
                              e._lineGap * (e._numItems - 1) +
                              e._bottomGap)
                        : e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap;
                    break;
                case cc.Layout.Type.GRID:
                    switch ((e.lackCenter && (e.lackCenter = !1), e._startAxis)) {
                        case cc.Layout.AxisDirection.HORIZONTAL:
                            var o = Math.ceil(e._numItems / e._colLineNum),
                                n = e._topGap + e._itemSize.height * o + e._lineGap * (o - 1) + e._bottomGap;
                            break;
                        case cc.Layout.AxisDirection.VERTICAL:
                            (o = Math.ceil(e._numItems / e._colLineNum)),
                                (n = e._leftGap + e._itemSize.width * o + e._columnGap * (o - 1) + e._rightGap);
                    }
            }
            var i = e.content.getComponent(cc.Layout);
            i && (i.enabled = !1),
                (e._allItemSize = n),
                (e._allItemSizeNoEdge =
                    e._allItemSize - (e._sizeType ? e._topGap + e._bottomGap : e._leftGap + e._rightGap)),
                e.cyclic &&
                    ((a = e._sizeType ? e.node.height : e.node.width),
                    (e._cyclicPos1 = 0),
                    (a -= e._cyclicPos1),
                    (e._cyclicNum = Math.ceil(a / e._allItemSizeNoEdge) + 1),
                    (a = e._sizeType ? e._lineGap : e._columnGap),
                    (e._cyclicPos2 = e._cyclicPos1 + e._allItemSizeNoEdge + a),
                    (e._cyclicAllItemSize =
                        e._allItemSize + e._allItemSizeNoEdge * (e._cyclicNum - 1) + a * (e._cyclicNum - 1)),
                    (e._cycilcAllItemSizeNoEdge = e._allItemSizeNoEdge * e._cyclicNum),
                    (e._cycilcAllItemSizeNoEdge += a * (e._cyclicNum - 1))),
                (e._lack = !e.cyclic && e._allItemSize < (e._sizeType ? e.node.height : e.node.width));
            var a = (e._lack && e.lackCenter) || !e.lackSlide ? 0.1 : 0;
            (a = e._lack
                ? (e._sizeType ? e.node.height : e.node.width) - a
                : e.cyclic
                ? e._cyclicAllItemSize
                : e._allItemSize) < 0 && (a = 0),
                e._sizeType ? (e.content.height = a) : (e.content.width = a);
        }),
        (_.prototype._onScrolling = function (t) {
            if (
                (void 0 === t && (t = null),
                null == this.frameCount && (this.frameCount = this._updateRate),
                !this._forceUpdate && t && "scroll-ended" != t.type && 0 < this.frameCount)
            )
                this.frameCount--;
            else if (((this.frameCount = this._updateRate), !this._aniDelRuning)) {
                if (this.cyclic) {
                    var e = this.content.getPosition(),
                        e = this._sizeType ? e.y : e.x,
                        o = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap),
                        n = this._sizeType ? cc.v2(0, o) : cc.v2(o, 0);
                    switch (this._alignCalcType) {
                        case 1:
                            e > -this._cyclicPos1
                                ? ((this.content.x = -this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)))
                                : e < -this._cyclicPos2 &&
                                  ((this.content.x = -this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)));
                            break;
                        case 2:
                            e < this._cyclicPos1
                                ? ((this.content.x = this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)))
                                : e > this._cyclicPos2 &&
                                  ((this.content.x = this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)));
                            break;
                        case 3:
                            e < this._cyclicPos1
                                ? ((this.content.y = this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)))
                                : e > this._cyclicPos2 &&
                                  ((this.content.y = this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)));
                            break;
                        case 4:
                            e > -this._cyclicPos1
                                ? ((this.content.y = -this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)))
                                : e < -this._cyclicPos2 &&
                                  ((this.content.y = -this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)));
                    }
                }
                var i, a, r, s;
                if (
                    (this._calcViewPos(),
                    this._sizeType
                        ? ((i = this.viewTop), (r = this.viewBottom))
                        : ((a = this.viewRight), (s = this.viewLeft)),
                    this._virtual)
                ) {
                    this.displayData = [];
                    var c,
                        l = 0,
                        p = this._numItems - 1;
                    if (this._customSize)
                        for (var u = !1; l <= p && !u; l++)
                            switch (((c = this._calcItemPos(l)), this._align)) {
                                case cc.Layout.Type.HORIZONTAL:
                                    c.right >= s && c.left <= a
                                        ? this.displayData.push(c)
                                        : 0 != l && 0 < this.displayData.length && (u = !0);
                                    break;
                                case cc.Layout.Type.VERTICAL:
                                    c.bottom <= i && c.top >= r
                                        ? this.displayData.push(c)
                                        : 0 != l && 0 < this.displayData.length && (u = !0);
                                    break;
                                case cc.Layout.Type.GRID:
                                    switch (this._startAxis) {
                                        case cc.Layout.AxisDirection.HORIZONTAL:
                                            c.bottom <= i && c.top >= r
                                                ? this.displayData.push(c)
                                                : 0 != l && 0 < this.displayData.length && (u = !0);
                                            break;
                                        case cc.Layout.AxisDirection.VERTICAL:
                                            c.right >= s && c.left <= a
                                                ? this.displayData.push(c)
                                                : 0 != l && 0 < this.displayData.length && (u = !0);
                                    }
                            }
                    else {
                        var d = this._itemSize.width + this._columnGap,
                            h = this._itemSize.height + this._lineGap;
                        switch (this._alignCalcType) {
                            case 1:
                                (l = (s - this._leftGap) / d), (p = (a - this._leftGap) / d);
                                break;
                            case 2:
                                (l = (-a - this._rightGap) / d), (p = (-s - this._rightGap) / d);
                                break;
                            case 3:
                                (l = (-i - this._topGap) / h), (p = (-r - this._topGap) / h);
                                break;
                            case 4:
                                (l = (r - this._bottomGap) / h), (p = (i - this._bottomGap) / h);
                        }
                        for (
                            l = Math.floor(l) * this._colLineNum,
                                p = Math.ceil(p) * this._colLineNum,
                                l < 0 && (l = 0),
                                --p >= this._numItems && (p = this._numItems - 1);
                            l <= p;
                            l++
                        )
                            this.displayData.push(this._calcItemPos(l));
                    }
                    if ((this._delRedundantItem(), this.displayData.length <= 0 || !this._numItems))
                        this._lastDisplayData = [];
                    else {
                        if (
                            ((this.firstListId = this.displayData[0].id),
                            (this.displayItemNum = this.displayData.length),
                            (t = this._lastDisplayData.length),
                            (o = this.displayItemNum != t) &&
                                (0 < this.frameByFrameRenderNum &&
                                    this._lastDisplayData.sort(function (t, e) {
                                        return t - e;
                                    }),
                                (o =
                                    this.firstListId != this._lastDisplayData[0] ||
                                    this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[t - 1])),
                            this._forceUpdate || o)
                        )
                            if (0 < this.frameByFrameRenderNum)
                                0 < this._numItems
                                    ? (this._updateDone ? (this._updateCounter = 0) : (this._doneAfterUpdate = !0),
                                      (this._updateDone = !1))
                                    : ((this._updateCounter = 0), (this._updateDone = !0));
                            else {
                                this._lastDisplayData = [];
                                for (var _ = 0; _ < this.displayItemNum; _++)
                                    this._createOrUpdateItem(this.displayData[_]);
                                this._forceUpdate = !1;
                            }
                        this._calcNearestItem();
                    }
                }
            }
        }),
        (_.prototype._calcViewPos = function () {
            var t = this.content.getPosition();
            switch (this._alignCalcType) {
                case 1:
                    (this.elasticLeft = 0 < t.x ? t.x : 0),
                        (this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft),
                        (this.viewRight = this.viewLeft + this.node.width),
                        (this.elasticRight =
                            this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0),
                        (this.viewRight += this.elasticRight);
                    break;
                case 2:
                    (this.elasticRight = t.x < 0 ? -t.x : 0),
                        (this.viewRight = (0 < t.x ? -t.x : 0) + this.elasticRight),
                        (this.viewLeft = this.viewRight - this.node.width),
                        (this.elasticLeft =
                            this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0),
                        (this.viewLeft -= this.elasticLeft);
                    break;
                case 3:
                    (this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0),
                        (this.viewTop = (0 < t.y ? -t.y : 0) + this.elasticTop),
                        (this.viewBottom = this.viewTop - this.node.height),
                        (this.elasticBottom =
                            this.viewBottom < -this.content.height
                                ? Math.abs(this.viewBottom + this.content.height)
                                : 0),
                        (this.viewBottom += this.elasticBottom);
                    break;
                case 4:
                    (this.elasticBottom = 0 < t.y ? Math.abs(t.y) : 0),
                        (this.viewBottom = (t.y < 0 ? -t.y : 0) - this.elasticBottom),
                        (this.viewTop = this.viewBottom + this.node.height),
                        (this.elasticTop =
                            this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0),
                        (this.viewTop -= this.elasticTop);
            }
        }),
        (_.prototype._calcItemPos = function (t) {
            var e, o, n, i, a, r, s, c;
            switch (this._align) {
                case cc.Layout.Type.HORIZONTAL:
                    switch (this._horizontalDir) {
                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                            return (
                                (c = this._customSize
                                    ? ((r = this._getFixedSize(t)),
                                      (s =
                                          this._leftGap +
                                          (this._itemSize.width + this._columnGap) * (t - r.count) +
                                          (r.val + this._columnGap * r.count)),
                                      0 < (l = this._customSize[t]) ? l : this._itemSize.width)
                                    : ((s = this._leftGap + (this._itemSize.width + this._columnGap) * t),
                                      this._itemSize.width)),
                                this.lackCenter &&
                                    ((s -= this._leftGap), (s += this.content.width / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: t,
                                    left: s,
                                    right: (n = s + c),
                                    x: s + this._itemTmp.anchorX * c,
                                    y: this._itemTmp.y
                                }
                            );
                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                            return (
                                (c = this._customSize
                                    ? ((r = this._getFixedSize(t)),
                                      (n =
                                          -this._rightGap -
                                          (this._itemSize.width + this._columnGap) * (t - r.count) -
                                          (r.val + this._columnGap * r.count)),
                                      0 < (l = this._customSize[t]) ? l : this._itemSize.width)
                                    : ((n = -this._rightGap - (this._itemSize.width + this._columnGap) * t),
                                      this._itemSize.width)),
                                this.lackCenter &&
                                    ((n += this._rightGap),
                                    (n -= this.content.width / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: t,
                                    right: n,
                                    left: (s = n - c),
                                    x: s + this._itemTmp.anchorX * c,
                                    y: this._itemTmp.y
                                }
                            );
                    }
                    break;
                case cc.Layout.Type.VERTICAL:
                    switch (this._verticalDir) {
                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                            return (
                                (p = this._customSize
                                    ? ((r = this._getFixedSize(t)),
                                      (e =
                                          -this._topGap -
                                          (this._itemSize.height + this._lineGap) * (t - r.count) -
                                          (r.val + this._lineGap * r.count)),
                                      0 < (l = this._customSize[t]) ? l : this._itemSize.height)
                                    : ((e = -this._topGap - (this._itemSize.height + this._lineGap) * t),
                                      this._itemSize.height)),
                                this.lackCenter &&
                                    ((e += this._topGap), (e -= this.content.height / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: t,
                                    top: e,
                                    bottom: (o = e - p),
                                    x: this._itemTmp.x,
                                    y: o + this._itemTmp.anchorY * p
                                }
                            );
                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                            var l,
                                p = this._customSize
                                    ? ((r = this._getFixedSize(t)),
                                      (o =
                                          this._bottomGap +
                                          (this._itemSize.height + this._lineGap) * (t - r.count) +
                                          (r.val + this._lineGap * r.count)),
                                      0 < (l = this._customSize[t]) ? l : this._itemSize.height)
                                    : ((o = this._bottomGap + (this._itemSize.height + this._lineGap) * t),
                                      this._itemSize.height);
                            return (
                                this.lackCenter &&
                                    ((o -= this._bottomGap),
                                    (o += this.content.height / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: t,
                                    top: (e = o + p),
                                    bottom: o,
                                    x: this._itemTmp.x,
                                    y: o + this._itemTmp.anchorY * p
                                }
                            );
                    }
                case cc.Layout.Type.GRID:
                    var u = Math.floor(t / this._colLineNum);
                    switch (this._startAxis) {
                        case cc.Layout.AxisDirection.HORIZONTAL:
                            switch (this._verticalDir) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    a =
                                        (o =
                                            (e = -this._topGap - (this._itemSize.height + this._lineGap) * u) -
                                            this._itemSize.height) +
                                        this._itemTmp.anchorY * this._itemSize.height;
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    (e =
                                        (o = this._bottomGap + (this._itemSize.height + this._lineGap) * u) +
                                        this._itemSize.height),
                                        (a = o + this._itemTmp.anchorY * this._itemSize.height);
                            }
                            switch (
                                ((i =
                                    this._leftGap + (t % this._colLineNum) * (this._itemSize.width + this._columnGap)),
                                this._horizontalDir)
                            ) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    (i += this._itemTmp.anchorX * this._itemSize.width),
                                        (i -= this.content.anchorX * this.content.width);
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    (i += (1 - this._itemTmp.anchorX) * this._itemSize.width),
                                        (i -= (1 - this.content.anchorX) * this.content.width),
                                        (i *= -1);
                            }
                            return {id: t, top: e, bottom: o, x: i, y: a};
                        case cc.Layout.AxisDirection.VERTICAL:
                            switch (this._horizontalDir) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    (n =
                                        (s = this._leftGap + (this._itemSize.width + this._columnGap) * u) +
                                        this._itemSize.width),
                                        (i = s + this._itemTmp.anchorX * this._itemSize.width),
                                        (i -= this.content.anchorX * this.content.width);
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    (i =
                                        (s =
                                            (n = -this._rightGap - (this._itemSize.width + this._columnGap) * u) -
                                            this._itemSize.width) +
                                        this._itemTmp.anchorX * this._itemSize.width),
                                        (i += (1 - this.content.anchorX) * this.content.width);
                            }
                            switch (
                                ((a = -this._topGap - (t % this._colLineNum) * (this._itemSize.height + this._lineGap)),
                                this._verticalDir)
                            ) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    (a -= (1 - this._itemTmp.anchorY) * this._itemSize.height),
                                        (a += (1 - this.content.anchorY) * this.content.height);
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    (a -= this._itemTmp.anchorY * this._itemSize.height),
                                        (a += this.content.anchorY * this.content.height),
                                        (a *= -1);
                            }
                            return {id: t, left: s, right: n, x: i, y: a};
                    }
            }
        }),
        (_.prototype._calcExistItemPos = function (t) {
            var e = this.getItemByListId(t);
            return e
                ? ((t = {id: t, x: e.x, y: e.y}),
                  this._sizeType
                      ? ((t.top = e.y + e.height * (1 - e.anchorY)), (t.bottom = e.y - e.height * e.anchorY))
                      : ((t.left = e.x - e.width * e.anchorX), (t.right = e.x + e.width * (1 - e.anchorX))),
                  t)
                : null;
        }),
        (_.prototype.getItemPos = function (t) {
            return this._virtual || this.frameByFrameRenderNum ? this._calcItemPos(t) : this._calcExistItemPos(t);
        }),
        (_.prototype._getFixedSize = function (t) {
            if (!this._customSize) return null;
            null == t && (t = this._numItems);
            var e,
                o = 0,
                n = 0;
            for (e in this._customSize) parseInt(e) < t && ((o += this._customSize[e]), n++);
            return {val: o, count: n};
        }),
        (_.prototype._onScrollBegan = function () {
            this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
        }),
        (_.prototype._onScrollEnded = function () {
            var t,
                e = this;
            (e.curScrollIsTouch = !1),
                null != e.scrollToListId &&
                    ((t = e.getItemByListId(e.scrollToListId)),
                    (e.scrollToListId = null),
                    t && cc.tween(t).to(0.1, {scale: 1.06}).to(0.1, {scale: 1}).start()),
                e._onScrolling(),
                e._slideMode != s.ADHERING || e.adhering
                    ? e._slideMode == s.PAGE &&
                      (null != e._beganPos && e.curScrollIsTouch ? this._pageAdhere() : e.adhere())
                    : e.adhere();
        }),
        (_.prototype._onTouchStart = function (t, e) {
            if (
                !(
                    (this._scrollView.hasNestedViewGroup && this._scrollView.hasNestedViewGroup(t, e)) ||
                    ((this.curScrollIsTouch = !0), t.eventPhase === cc.Event.AT_TARGET && t.target === this.node)
                )
            ) {
                for (var o = t.target; null == o._listId && o.parent; ) o = o.parent;
                this._scrollItem = null != o._listId ? o : t.target;
            }
        }),
        (_.prototype._onTouchUp = function () {
            (this._scrollPos = null),
                this._slideMode == s.ADHERING
                    ? (this.adhering && (this._adheringBarrier = !0), this.adhere())
                    : this._slideMode == s.PAGE && (null != this._beganPos ? this._pageAdhere() : this.adhere()),
                (this._scrollItem = null);
        }),
        (_.prototype._onTouchCancelled = function (t, e) {
            var o = this;
            (o._scrollView.hasNestedViewGroup && o._scrollView.hasNestedViewGroup(t, e)) ||
                t.simulate ||
                ((o._scrollPos = null),
                o._slideMode == s.ADHERING
                    ? (o.adhering && (o._adheringBarrier = !0), o.adhere())
                    : o._slideMode == s.PAGE && (null != o._beganPos ? o._pageAdhere() : o.adhere()),
                (this._scrollItem = null));
        }),
        (_.prototype._onSizeChanged = function () {
            this.checkInited(!1) && this._onScrolling();
        }),
        (_.prototype._onItemAdaptive = function (t) {
            var e;
            ((!this._sizeType && t.width != this._itemSize.width) ||
                (this._sizeType && t.height != this._itemSize.height)) &&
                (this._customSize || (this._customSize = {}),
                (e = this._sizeType ? t.height : t.width),
                this._customSize[t._listId] != e &&
                    ((this._customSize[t._listId] = e),
                    this._resizeContent(),
                    this.updateAll(),
                    null != this._scrollToListId &&
                        ((this._scrollPos = null),
                        this.unschedule(this._scrollToSo),
                        this.scrollTo(
                            this._scrollToListId,
                            Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3)
                        ))));
        }),
        (_.prototype._pageAdhere = function () {
            var t = this;
            if (t.cyclic || !(0 < t.elasticTop || 0 < t.elasticRight || 0 < t.elasticBottom || 0 < t.elasticLeft)) {
                var e = t._sizeType ? t.viewTop : t.viewLeft,
                    o = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
                if (Math.abs(t._beganPos - e) > o)
                    switch (t._alignCalcType) {
                        case 1:
                        case 4:
                            t._beganPos > e ? t.prePage(0.5) : t.nextPage(0.5);
                            break;
                        case 2:
                        case 3:
                            t._beganPos < e ? t.prePage(0.5) : t.nextPage(0.5);
                    }
                else
                    t.elasticTop <= 0 &&
                        t.elasticRight <= 0 &&
                        t.elasticBottom <= 0 &&
                        t.elasticLeft <= 0 &&
                        t.adhere();
                t._beganPos = null;
            }
        }),
        (_.prototype.adhere = function () {
            var t,
                e = this;
            e.checkInited() &&
                !(0 < e.elasticTop || 0 < e.elasticRight || 0 < e.elasticBottom || 0 < e.elasticLeft) &&
                ((e.adhering = !0),
                e._calcNearestItem(),
                (t = (e._sizeType ? e._topGap : e._leftGap) / (e._sizeType ? e.node.height : e.node.width)),
                e.scrollTo(e.nearestListId, 0.7, t));
        }),
        (_.prototype.update = function () {
            if (!(this.frameByFrameRenderNum <= 0 || this._updateDone))
                if (this._virtual) {
                    for (
                        var t =
                                this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum
                                    ? this.displayItemNum
                                    : this._updateCounter + this.frameByFrameRenderNum,
                            e = this._updateCounter;
                        e < t;
                        e++
                    ) {
                        var o = this.displayData[e];
                        o && this._createOrUpdateItem(o);
                    }
                    this._updateCounter >= this.displayItemNum - 1
                        ? this._doneAfterUpdate
                            ? ((this._updateCounter = 0), (this._updateDone = !1), (this._doneAfterUpdate = !1))
                            : ((this._updateDone = !0),
                              this._delRedundantItem(),
                              (this._forceUpdate = !1),
                              this._calcNearestItem(),
                              this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId))
                        : (this._updateCounter += this.frameByFrameRenderNum);
                } else if (this._updateCounter < this._numItems) {
                    for (
                        t =
                            this._updateCounter + this.frameByFrameRenderNum > this._numItems
                                ? this._numItems
                                : this._updateCounter + this.frameByFrameRenderNum,
                            e = this._updateCounter;
                        e < t;
                        e++
                    )
                        this._createOrUpdateItem2(e);
                    this._updateCounter += this.frameByFrameRenderNum;
                } else
                    (this._updateDone = !0),
                        this._calcNearestItem(),
                        this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId);
        }),
        (_.prototype._createOrUpdateItem = function (t) {
            var e,
                o,
                n = this.getItemByListId(t.id);
            n
                ? this._forceUpdate &&
                  this.renderEvent &&
                  (n.setPosition(cc.v2(t.x, t.y)),
                  this._resetItemSize(n),
                  this.renderEvent &&
                      cc.Component.EventHandler.emitEvents([this.renderEvent], n, t.id % this._actualNumItems))
                : ((n = (e = 0 < this._pool.size()) ? this._pool.get() : cc.instantiate(this._itemTmp)),
                  (e && cc.isValid(n)) || ((n = cc.instantiate(this._itemTmp)), (e = !1)),
                  n._listId != t.id && ((n._listId = t.id), n.setContentSize(this._itemSize)),
                  n.setPosition(cc.v2(t.x, t.y)),
                  this._resetItemSize(n),
                  this.content.addChild(n),
                  e && this._needUpdateWidget && (o = n.getComponent(cc.Widget)) && o.updateAlignment(),
                  n.setSiblingIndex(this.content.childrenCount - 1),
                  (o = n.getComponent(m.default)),
                  (n.listItem = o) && ((o.listId = t.id), (o.list = this), o._registerEvent()),
                  this.renderEvent &&
                      cc.Component.EventHandler.emitEvents([this.renderEvent], n, t.id % this._actualNumItems)),
                this._resetItemSize(n),
                this._updateListItem(n.listItem),
                this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id);
        }),
        (_.prototype._createOrUpdateItem2 = function (t) {
            var e,
                o = this.content.children[t];
            o
                ? this._forceUpdate &&
                  this.renderEvent &&
                  ((o._listId = t),
                  e && (e.listId = t),
                  this.renderEvent &&
                      cc.Component.EventHandler.emitEvents([this.renderEvent], o, t % this._actualNumItems))
                : (((o = cc.instantiate(this._itemTmp))._listId = t),
                  this.content.addChild(o),
                  (e = o.getComponent(m.default)),
                  (o.listItem = e) && ((e.listId = t), (e.list = this), e._registerEvent()),
                  this.renderEvent &&
                      cc.Component.EventHandler.emitEvents([this.renderEvent], o, t % this._actualNumItems)),
                this._updateListItem(e),
                this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t);
        }),
        (_.prototype._updateListItem = function (t) {
            if (t && this.selectedMode > f.NONE) {
                var e = t.node;
                switch (this.selectedMode) {
                    case f.SINGLE:
                        t.selected = this.selectedId == e._listId;
                        break;
                    case f.MULT:
                        t.selected = 0 <= this.multSelected.indexOf(e._listId);
                }
            }
        }),
        (_.prototype._resetItemSize = function () {}),
        (_.prototype._updateItemPos = function (t) {
            var e = isNaN(t) ? t : this.getItemByListId(t),
                t = this.getItemPos(e._listId);
            e.setPosition(t.x, t.y);
        }),
        (_.prototype.setMultSelected = function (t, e) {
            if (this.checkInited()) {
                if ((Array.isArray(t) || (t = [t]), null == e)) this.multSelected = t;
                else {
                    var o = void 0,
                        n = void 0;
                    if (e)
                        for (var i = t.length - 1; 0 <= i; i--)
                            (o = t[i]), (n = this.multSelected.indexOf(o)) < 0 && this.multSelected.push(o);
                    else
                        for (i = t.length - 1; 0 <= i; i--)
                            (o = t[i]), 0 <= (n = this.multSelected.indexOf(o)) && this.multSelected.splice(n, 1);
                }
                (this._forceUpdate = !0), this._onScrolling();
            }
        }),
        (_.prototype.getMultSelected = function () {
            return this.multSelected;
        }),
        (_.prototype.hasMultSelected = function (t) {
            return this.multSelected && 0 <= this.multSelected.indexOf(t);
        }),
        (_.prototype.updateItem = function (t) {
            if (this.checkInited())
                for (var e = 0, o = (t = Array.isArray(t) ? t : [t]).length; e < o; e++) {
                    var n = t[e],
                        i = this.getItemByListId(n);
                    i && cc.Component.EventHandler.emitEvents([this.renderEvent], i, n % this._actualNumItems);
                }
        }),
        (_.prototype.updateAll = function () {
            this.checkInited() && (this.numItems = this.numItems);
        }),
        (_.prototype.getItemByListId = function (t) {
            if (this.content)
                for (var e = this.content.childrenCount - 1; 0 <= e; e--) {
                    var o = this.content.children[e];
                    if (o._listId == t) return o;
                }
        }),
        (_.prototype._getOutsideItem = function () {
            for (var e, t = [], o = this.content.childrenCount - 1; 0 <= o; o--)
                (e = this.content.children[o]),
                    this.displayData.find(function (t) {
                        return t.id == e._listId;
                    }) || t.push(e);
            return t;
        }),
        (_.prototype._delRedundantItem = function () {
            if (this._virtual)
                for (var t = this._getOutsideItem(), e = t.length - 1; 0 <= e; e--) {
                    var o = t[e];
                    if (!this._scrollItem || o._listId != this._scrollItem._listId) {
                        (o.isCached = !0), this._pool.put(o);
                        for (var n = this._lastDisplayData.length - 1; 0 <= n; n--)
                            if (this._lastDisplayData[n] == o._listId) {
                                this._lastDisplayData.splice(n, 1);
                                break;
                            }
                    }
                }
            else
                for (; this.content.childrenCount > this._numItems; )
                    this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
        }),
        (_.prototype._delSingleItem = function (t) {
            t.removeFromParent(), t.destroy && t.destroy();
        }),
        (_.prototype.aniDelItem = function (l, p, t) {
            var u = this;
            if (!u.checkInited() || u.cyclic || !u._virtual)
                return cc.error("This function is not allowed to be called!");
            if (!p)
                return cc.error(
                    "CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!"
                );
            if (u._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
            var e,
                d,
                h,
                _ = u.getItemByListId(l);
            _
                ? ((e = _.getComponent(m.default)),
                  (u._aniDelRuning = !0),
                  (u._aniDelCB = p),
                  (u._aniDelItem = _),
                  (u._aniDelBeforePos = _.position),
                  (u._aniDelBeforeScale = _.scale),
                  (d = u.displayData[u.displayData.length - 1].id),
                  (h = e.selected),
                  e.showAni(
                      t,
                      function () {
                          var t, e, o;
                          if (
                              (null != (t = d < u._numItems - 2 ? d + 1 : t)
                                  ? ((n = u._calcItemPos(t)),
                                    u.displayData.push(n),
                                    u._virtual ? u._createOrUpdateItem(n) : u._createOrUpdateItem2(t))
                                  : u._numItems--,
                              u.selectedMode == f.SINGLE)
                          )
                              h ? (u._selectedId = -1) : 0 <= u._selectedId - 1 && u._selectedId--;
                          else if (u.selectedMode == f.MULT && u.multSelected.length) {
                              var n = u.multSelected.indexOf(l);
                              0 <= n && u.multSelected.splice(n, 1);
                              for (var i = u.multSelected.length - 1; 0 <= i; i--)
                                  (a = u.multSelected[i]) >= l && u.multSelected[i]--;
                          }
                          if (u._customSize) {
                              u._customSize[l] && delete u._customSize[l];
                              var a,
                                  r = {};
                              for (a in u._customSize) {
                                  var s = u._customSize[a],
                                      c = parseInt(a);
                                  r[c - (l <= c ? 1 : 0)] = s;
                              }
                              u._customSize = r;
                          }
                          for (i = null != t ? t : d; l + 1 <= i; i--)
                              (_ = u.getItemByListId(i)) &&
                                  ((o = u._calcItemPos(i - 1)),
                                  (o = cc.tween(_).to(0.2333, {position: cc.v2(o.x, o.y)})),
                                  i <= l + 1 &&
                                      ((e = !0),
                                      o.call(function () {
                                          (u._aniDelRuning = !1), p(l), delete u._aniDelCB;
                                      })),
                                  o.start());
                          e || ((u._aniDelRuning = !1), p(l), (u._aniDelCB = null));
                      },
                      !0
                  ))
                : p(l);
        }),
        (_.prototype.scrollTo = function (e, t, o, n) {
            void 0 === t && (t = 0.5), void 0 === o && (o = null), void 0 === n && (n = !1);
            var i = this;
            if (i.checkInited(!1)) {
                null == t ? (t = 0.5) : t < 0 && (t = 0),
                    e < 0 ? (e = 0) : e >= i._numItems && (e = i._numItems - 1),
                    !i._virtual && i._layout && i._layout.enabled && i._layout.updateLayout();
                var a,
                    r,
                    s = i.getItemPos(e);
                if (!s) return !1;
                switch (i._alignCalcType) {
                    case 1:
                        (a = s.left), (a -= null != o ? i.node.width * o : i._leftGap), (s = cc.v2(a, 0));
                        break;
                    case 2:
                        (a = s.right - i.node.width),
                            (a += null != o ? i.node.width * o : i._rightGap),
                            (s = cc.v2(a + i.content.width, 0));
                        break;
                    case 3:
                        (r = s.top), (r += null != o ? i.node.height * o : i._topGap), (s = cc.v2(0, -r));
                        break;
                    case 4:
                        (r = s.bottom + i.node.height),
                            (r -= null != o ? i.node.height * o : i._bottomGap),
                            (s = cc.v2(0, -r + i.content.height));
                }
                var c = i.content.getPosition(),
                    c = Math.abs(i._sizeType ? c.y : c.x),
                    l = i._sizeType ? s.y : s.x;
                0.5 < Math.abs((null != i._scrollPos ? i._scrollPos : c) - l) &&
                    (i._scrollView.scrollToOffset(s, t),
                    (i._scrollToListId = e),
                    (i._scrollToEndTime = new Date().getTime() / 1e3 + t),
                    (i._scrollToSo = i.scheduleOnce(function () {
                        var t;
                        i._adheringBarrier || (i.adhering = i._adheringBarrier = !1),
                            (i._scrollPos = i._scrollToListId = i._scrollToEndTime = i._scrollToSo = null),
                            n &&
                                (t = i.getItemByListId(e)) &&
                                cc.tween(t).to(0.1, {scale: 1.05}).to(0.1, {scale: 1}).start();
                    }, t + 0.1)),
                    t <= 0 && i._onScrolling());
            }
        }),
        (_.prototype._calcNearestItem = function () {
            var t,
                e,
                o = this;
            (o.nearestListId = null), o._virtual && o._calcViewPos();
            for (
                var n = o.viewTop, i = o.viewRight, a = o.viewBottom, r = o.viewLeft, s = !1, c = 0;
                c < o.content.childrenCount && !s;
                c += o._colLineNum
            )
                if ((t = o._virtual ? o.displayData[c] : o._calcExistItemPos(c)))
                    switch (((e = o._sizeType ? (t.top + t.bottom) / 2 : (t.left + t.right) / 2), o._alignCalcType)) {
                        case 1:
                            t.right >= r &&
                                ((o.nearestListId = t.id), e < r && (o.nearestListId += o._colLineNum), (s = !0));
                            break;
                        case 2:
                            t.left <= i &&
                                ((o.nearestListId = t.id), i < e && (o.nearestListId += o._colLineNum), (s = !0));
                            break;
                        case 3:
                            t.bottom <= n &&
                                ((o.nearestListId = t.id), n < e && (o.nearestListId += o._colLineNum), (s = !0));
                            break;
                        case 4:
                            t.top >= a &&
                                ((o.nearestListId = t.id), e < a && (o.nearestListId += o._colLineNum), (s = !0));
                    }
            if (
                (t = o._virtual ? o.displayData[o.displayItemNum - 1] : o._calcExistItemPos(o._numItems - 1)) &&
                t.id == o._numItems - 1
            )
                switch (((e = o._sizeType ? (t.top + t.bottom) / 2 : (t.left + t.right) / 2), o._alignCalcType)) {
                    case 1:
                        e < i && (o.nearestListId = t.id);
                        break;
                    case 2:
                        r < e && (o.nearestListId = t.id);
                        break;
                    case 3:
                        a < e && (o.nearestListId = t.id);
                        break;
                    case 4:
                        e < n && (o.nearestListId = t.id);
                }
        }),
        (_.prototype.prePage = function (t) {
            void 0 === t && (t = 0.5), this.checkInited() && this.skipPage(this.curPageNum - 1, t);
        }),
        (_.prototype.nextPage = function (t) {
            void 0 === t && (t = 0.5), this.checkInited() && this.skipPage(this.curPageNum + 1, t);
        }),
        (_.prototype.skipPage = function (t, e) {
            if (this.checkInited())
                return this._slideMode != s.PAGE
                    ? cc.error("This function is not allowed to be called, Must SlideMode = PAGE!")
                    : void (
                          t < 0 ||
                          t >= this._numItems ||
                          (this.curPageNum != t &&
                              ((this.curPageNum = t),
                              this.pageChangeEvent && cc.Component.EventHandler.emitEvents([this.pageChangeEvent], t),
                              this.scrollTo(t, e)))
                      );
        }),
        (_.prototype.calcCustomSize = function (t) {
            var e = this;
            if (e.checkInited()) {
                if (!e._itemTmp) return cc.error("Unset template item!");
                if (!e.renderEvent) return cc.error("Unset Render-Event!");
                e._customSize = {};
                var o = cc.instantiate(e._itemTmp);
                e.content.addChild(o);
                for (var n = 0; n < t; n++)
                    cc.Component.EventHandler.emitEvents([e.renderEvent], o, n),
                        (o.height == e._itemSize.height && o.width == e._itemSize.width) ||
                            (e._customSize[n] = e._sizeType ? o.height : o.width);
                return (
                    Object.keys(e._customSize).length || (e._customSize = null),
                    o.removeFromParent(),
                    o.destroy && o.destroy(),
                    e._customSize
                );
            }
        }),
        a([l({type: cc.Enum(r)})], _.prototype, "templateType", void 0),
        a(
            [
                l({
                    type: cc.Node,
                    visible: function () {
                        return this.templateType == r.NODE;
                    }
                })
            ],
            _.prototype,
            "tmpNode",
            void 0
        ),
        a(
            [
                l({
                    type: cc.Prefab,
                    visible: function () {
                        return this.templateType == r.PREFAB;
                    }
                })
            ],
            _.prototype,
            "tmpPrefab",
            void 0
        ),
        a([l()], _.prototype, "_slideMode", void 0),
        a([l({type: cc.Enum(s)})], _.prototype, "slideMode", null),
        a(
            [
                l({
                    type: cc.Float,
                    range: [0, 1, 0.1],
                    slide: !0,
                    visible: function () {
                        return this._slideMode == s.PAGE;
                    }
                })
            ],
            _.prototype,
            "pageDistance",
            void 0
        ),
        a(
            [
                l({
                    type: cc.Component.EventHandler,
                    visible: function () {
                        return this._slideMode == s.PAGE;
                    }
                })
            ],
            _.prototype,
            "pageChangeEvent",
            void 0
        ),
        a([l()], _.prototype, "_virtual", void 0),
        a([l({type: cc.Boolean})], _.prototype, "virtual", null),
        a(
            [
                l({
                    visible: function () {
                        var t = this.slideMode == s.NORMAL;
                        return t || (this.cyclic = !1), t;
                    }
                })
            ],
            _.prototype,
            "cyclic",
            void 0
        ),
        a(
            [
                l({
                    visible: function () {
                        return this.virtual;
                    }
                })
            ],
            _.prototype,
            "lackCenter",
            void 0
        ),
        a(
            [
                l({
                    visible: function () {
                        var t = this.virtual && !this.lackCenter;
                        return t || (this.lackSlide = !1), t;
                    }
                })
            ],
            _.prototype,
            "lackSlide",
            void 0
        ),
        a([l({type: cc.Integer})], _.prototype, "_updateRate", void 0),
        a([l({type: cc.Integer, range: [0, 6, 1], slide: !0})], _.prototype, "updateRate", null),
        a([l({type: cc.Integer, range: [0, 12, 1], slide: !0})], _.prototype, "frameByFrameRenderNum", void 0),
        a([l({type: cc.Component.EventHandler})], _.prototype, "renderEvent", void 0),
        a([l({type: cc.Enum(f)})], _.prototype, "selectedMode", void 0),
        a(
            [
                l({
                    visible: function () {
                        return this.selectedMode == f.SINGLE;
                    }
                })
            ],
            _.prototype,
            "repeatEventSingle",
            void 0
        ),
        a(
            [
                l({
                    type: cc.Component.EventHandler,
                    visible: function () {
                        return this.selectedMode > f.NONE;
                    }
                })
            ],
            _.prototype,
            "selectedEvent",
            void 0
        ),
        a([l({serializable: !1})], _.prototype, "_numItems", void 0),
        a([c, p(), u("自定义组件/List"), d(cc.ScrollView), e(-5e3)], _));
function _() {
    var t = (null !== h && h.apply(this, arguments)) || this;
    return (
        (t.templateType = r.NODE),
        (t.tmpNode = null),
        (t.tmpPrefab = null),
        (t._slideMode = s.NORMAL),
        (t.pageDistance = 0.3),
        (t.pageChangeEvent = new cc.Component.EventHandler()),
        (t._virtual = !0),
        (t.cyclic = !1),
        (t.lackCenter = !1),
        (t.lackSlide = !1),
        (t._updateRate = 0),
        (t.frameByFrameRenderNum = 0),
        (t.renderEvent = new cc.Component.EventHandler()),
        (t.selectedMode = f.NONE),
        (t.repeatEventSingle = !1),
        (t.selectedEvent = new cc.Component.EventHandler()),
        (t._selectedId = -1),
        (t._forceUpdate = !1),
        (t._updateDone = !0),
        (t._numItems = 0),
        (t._inited = !1),
        (t._needUpdateWidget = !1),
        (t._aniDelRuning = !1),
        (t._doneAfterUpdate = !1),
        (t.adhering = !1),
        (t._adheringBarrier = !1),
        (t.curPageNum = 0),
        t
    );
}
o.default = e;
