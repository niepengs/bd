// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ./input/DrawEvents ./Keys ../../../core/Accessor ./DrawAction ../../../core/Evented ../../../core/HandleRegistry ../../../geometry/ScreenPoint".split(" "),function(t,u,m,h,d,e,g,n,p,q,r,l){return function(k){function c(){var a=null!==k&&k.apply(this,arguments)||this;a._cursorMoved=!1;a._cursorScreenPoint=null;a._dragEnabled=!0;a._history=[];a._pointerDownEvent=
null;a._redoHistory=[];a._viewHandles=new r;a.vertices=[];a.view=null;return a}m(c,k);c.prototype.initialize=function(){this._addViewHandles()};c.prototype.destroy=function(){this._removeViewHandles();this._viewHandles.destroy();this.emit("destroy")};c.prototype.canUndo=function(){return 0<this._history.length};c.prototype.canRedo=function(){return 0<this._redoHistory.length};c.prototype.complete=function(){this._drawCompleteHandler(null)};c.prototype.undo=function(){if(this.canUndo()){var a=this._history.pop();
a.undo();this._redoHistory.push(a)}};c.prototype.redo=function(){if(this.canRedo()){var a=this._redoHistory.pop();a.redo();this._history.push(a)}};c.prototype._addViewHandles=function(){var a=this;this._removeViewHandles();this._viewHandles.add([this.view.on("pointer-down",function(b){a._pointerDownEvent=b}),this.view.on("pointer-move",function(b){a._cursorMoved&&a.vertices.pop();a._cursorScreenPoint=new l({x:b.x,y:b.y});var c=a.view.toMap(a._cursorScreenPoint);a._dragEnabled&&a._pointerDownEvent?
(a._cursorMoved=!1,a._vertexAddHandler(b.native,c)):(a._cursorMoved=!0,a._cursorUpdateHandler(b.native,c))}),this.view.on("pointer-up",function(b){if(a._pointerDownEvent){a._cursorMoved&&(a.vertices.pop(),a._cursorMoved=!1);var c=new l({x:b.x,y:b.y});a._pointerDownEvent=null;a._vertexAddHandler(b.native,a.view.toMap(c))}}),this.view.on("drag",function(b){a._dragEnabled&&a._pointerDownEvent&&b.stopPropagation()}),this.view.on("double-click",function(b){b.stopPropagation();a._drawCompleteHandler(b.native)}),
this.view.on("key-down",function(b){b.key===g.KEYS.vertexAddKey&&!b.repeat&&a._cursorScreenPoint?(a._cursorMoved&&(a.vertices.pop(),a._cursorMoved=!1),a._vertexAddHandler(b.native,a.view.toMap(a._cursorScreenPoint))):b.key===g.KEYS.drawCompleteKey&&!b.repeat&&a._cursorScreenPoint&&1<a.vertices.length?(a._cursorMoved&&(a.vertices.pop(),a._cursorMoved=!1),a._vertexAddHandler(b.native,a.view.toMap(a._cursorScreenPoint)),a._drawCompleteHandler(b.native)):b.key!==g.KEYS.undoKey||b.repeat?b.key!==g.KEYS.redoKey||
b.repeat||a.redo():a.undo()})])};c.prototype._removeViewHandles=function(){this._viewHandles.removeAll()};c.prototype._addVertex=function(a,b){this.vertices.splice(b,0,a)};c.prototype._removeVertex=function(a){this.vertices.splice(a,1)};c.prototype._undoVertexAdd=function(a,b,c){this._removeVertex(c);this.emit("vertex-remove",new e.VertexRemoveEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexAdd=function(a,b,c){this._addVertex(b,c);this.emit("vertex-add",new e.VertexAddEvent(this.view,
a,c,this.vertices))};c.prototype._vertexAddHandler=function(a,b){var c=this,f=[b.x,b.y];this.vertices.push(f);var d=this.vertices.indexOf(f);this._history.push({vertex:f,vertexIndex:d,undo:function(){return c._undoVertexAdd(a,f,d)},redo:function(){return c._redoVertexAdd(a,f,d)}});this._redoHistory=[];b=new e.VertexAddEvent(this.view,a,d,this.vertices);this.emit("vertex-add",b);b.defaultPrevented&&(this._cursorMoved=!0,this._history.pop())};c.prototype._cursorUpdateHandler=function(a,b){b=[b.x,b.y];
this.vertices.push(b);b=this.vertices.indexOf(b);a=new e.CursorUpdateEvent(this.view,a,b,this.vertices);this.emit("cursor-update",a)};c.prototype._drawCompleteHandler=function(a){this._cursorMoved=!1;this._pointerDownEvent=null;2>this.vertices.length||(a=new e.DrawCompleteEvent(a,this.vertices),this.emit("draw-complete",a),a.defaultPrevented?this._cursorMoved=!0:this._removeViewHandles())};h([d.property()],c.prototype,"vertices",void 0);h([d.property()],c.prototype,"view",void 0);return c=h([d.subclass("esri.views.2d.draw.PolylineDrawAction")],
c)}(d.declared(p,n,q))});