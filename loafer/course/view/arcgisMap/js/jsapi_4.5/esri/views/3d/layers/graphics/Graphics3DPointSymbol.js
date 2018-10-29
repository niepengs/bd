// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","./Graphics3DSymbol","./Graphics3DCalloutSymbolLayerFactory"],function(k,l,f,g,h){return function(e){function c(a,b,d){a=e.call(this,a,b,d)||this;a.calloutSymbolLayer=null;a.symbol.hasVisibleCallout()&&(a.calloutSymbolLayer=h.make(a.symbol,b));return a}f(c,e);c.prototype.destroy=function(){e.prototype.destroy.call(this)};c.prototype.createGraphics3DGraphic=function(a,b,d){d=e.prototype.createGraphics3DGraphic.call(this,a,b,d);
this.calloutSymbolLayer&&(a=this.createCalloutGraphic(a,b))&&d.addAuxiliaryGraphic(a);return d};c.prototype.layerPropertyChanged=function(a,b){var d=this;return e.prototype.layerPropertyChanged.call(this,a,b)?this.calloutSymbolLayer?this.calloutSymbolLayer.layerPropertyChanged(a,b,function(a){var b=0;for(a=a._auxiliaryGraphics;b<a.length;b++){var c=a[b];if(c.graphics3DSymbolLayer===d.calloutSymbolLayer)return c}}):!0:!1};c.prototype.createCalloutGraphic=function(a,b){return this.calloutSymbolLayer.createGraphics3DGraphic(a,
{renderer:b.renderer,symbol:b.symbol,needsOffsetAdjustment:b.needsOffsetAdjustment,translation:[0,0,0],centerOffset:[0,0,0,0],screenOffset:[0,0],centerOffsetUnits:"world",elevationOffset:0,materialCollection:null})};return c}(g)});