var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.AStarNode = void 0);
var n =
    (Object.defineProperty(i.prototype, "x", {get:function(){return this._x;},enumerable:!1,configurable:!0}),
    Object.defineProperty(i.prototype, "y", {get:function(){return this._y;},enumerable:!1,configurable:!0}), i);
function i(t, e) {(this._x=0),(this._y=0),(this.priority=0),(this._x=t),(this._y=e);}
o.AStarNode=n;
var l=((r.prototype.put=function(t,e){(t.priority=e),this.arr.push(t),this.arr.sort(function(t,e){return e.priority-t.priority;});}),
(r.prototype.get=function(){return this.arr.pop();}),
Object.defineProperty(r.prototype,"size",{get:function(){return this.arr.length;},enumerable:!1,configurable:!0}),r),
e=((a.prototype.init=function(t,e,o,n){var i=this;void 0===n&&(n=[]),(this.mSize=t),(this.mStart=e),(this.mEnd=o),n.forEach(function(t){i.setObstacles(t.x,t.y);}),(this.nodePool={}),(this.mStartNode=this.createNode(this.mStart.x,this.mStart.y)),(this.mEndNode=this.createNode(this.mEnd.x,this.mEnd.y));}),
(a.prototype.clean=function(){(this.mStartNode=null),(this.mEndNode=null);}),
(a.prototype.setObstacles=function(t,e){this.checkNode(t,e)&&(this.obstacles[t+"_"+e]=!0);}),
(a.prototype.clearObstacles=function(t,e){delete this.obstacles[t+"_"+e];}),
(a.prototype.clearAllObstacles=function(){this.obstacles={};}),
(a.prototype.checkObstacles=function(t,e){return this.obstacles[t+"_"+e];}),
(a.prototype.checkNode=function(t,e){return 0<=t&&0<=e&&t<=this.mSize.x&&e<=this.mSize.y;}),
(a.prototype.run=function(){var t=new Date().getTime(),e=this.mStartNode,o=this.mEndNode;for(this.frontier=new l(),this.frontier.put(e,0),this.cameForm.set(e,null),this.costSoFar.set(e,0);0<this.frontier.size;){var n=this.frontier.get();if(n===o)break;for(var i=0,r=this.getNeighbors(n);i<r.length;i++){var s,c=r[i],p=this.costSoFar.get(n)+this.getCost(n,c);(!this.costSoFar.has(c)||p<this.costSoFar.get(c))&&(this.costSoFar.set(c,p),(s=this.getCost(c,o)),this.frontier.put(c,p+s),this.cameForm.set(c,n));}}}),
(a.prototype.getPath=function(){var t=[],e=this.mEndNode;for(t.push(e);this.cameForm.has(e);)(e=this.cameForm.get(e))&&t.push(e);return t;}),
(a.prototype.getNeighbors=function(t){var e=[],o=this.getNode(t.x,t.y+1);return o&&e.push(o),(o=this.getNode(t.x,t.y-1))&&e.push(o),(o=this.getNode(t.x-1,t.y))&&e.push(o),(t=this.getNode(t.x+1,t.y))&&e.push(t),e;}),
(a.prototype.getCost=function(t,e){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y);}),
(a.prototype.next=function(){}),
(a.prototype.getNode=function(t,e){if(this.checkNode(t,e)&&!this.checkObstacles(t,e)){var o=this.getNodeKey(t,e);return this.nodePool[o]||this.createNode(t,e);}}),
(a.prototype.createNode=function(t,e){var o=this.getNodeKey(t,e);return(this.nodePool[o]=new n(t,e)),this.nodePool[o];}),
(a.prototype.getNodeKey=function(t,e){return t+"_"+e;}),a);
function a(){(this.mSize=null),(this.mStart=null),(this.mEnd=null),(this.mStartNode=null),(this.mEndNode=null),(this.obstacles={}),(this.nodePool={}),(this.frontier=null),(this.cameForm=new Map()),(this.costSoFar=new Map());}
function r(){this.arr=[];}
o.default=e;
