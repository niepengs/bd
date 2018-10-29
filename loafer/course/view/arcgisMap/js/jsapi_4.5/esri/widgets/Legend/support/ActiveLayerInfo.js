// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/_base/lang dojo/io-query ../../../core/Accessor ../../../core/Collection ../../../core/HandleRegistry ../../../core/Logger ../../../core/promiseUtils ../../../core/watchUtils ../../../layers/FeatureLayer ../../../layers/WMSLayer ../../../layers/WMTSLayer ../../../layers/MapImageLayer ../../../layers/support/ExportImageParameters ../../../renderers/SimpleRenderer ../../../renderers/ClassBreaksRenderer ../../../renderers/UniqueValueRenderer ../../../renderers/PointCloudClassBreaksRenderer ../../../renderers/PointCloudRenderer ../../../renderers/PointCloudStretchRenderer ../../../renderers/PointCloudUniqueValueRenderer ../../../symbols/SimpleMarkerSymbol ../../../Color ../../../request ./colorRampUtils ./sizeRampUtils ../../../core/arrayUtils ../../../core/accessorSupport/decorators ../../../renderers/support/jsonUtils ../../../symbols/support/symbolPreview ../../../symbols/support/gfxUtils".split(" "),
function(Y,Z,E,n,p,F,G,H,I,J,q,w,K,L,M,N,O,t,u,z,A,P,B,C,Q,R,S,r,T,U,m,V,W,X){var v=J.getLogger("esri.widgets.Legend.support.ActiveLayerInfo"),x=new Q({size:6,outline:{color:[128,128,128,.5],width:.5}});return function(D){function d(a){a=D.call(this,a)||this;a._handles=new I;a._hasColorRamp=!1;a._hasOpacityRamp=!1;a._hasSizeRamp=!1;a._legendResponse={};a._webStyleSymbolCache=new Map;a.children=new H;a.layer=null;a.legendElements=[];a.parent=null;a.scale=null;a.title=null;return a}E(d,D);d.prototype.initialize=
function(){var a=this,b=function(){return a.notifyChange("ready")};this._handles.add([w.on(this,"children","change",function(c){var e=c.removed,f=a._handles;c.added.map(function(a){var c="activeLayerInfo-ready-watcher-"+a.layer.uid;f.add(w.init(a,"ready",b),c)});e.forEach(function(a){return f.remove(a.layer.uid)});b()})])};d.prototype.destroy=function(){this._handles.destroy();this._webStyleSymbolCache=this._legendResponse=this._handles=null};Object.defineProperty(d.prototype,"ready",{get:function(){return null===
this.layer?!0:0<this.children.length?this._isGroupActive():0<this.legendElements.length},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"version",{get:function(){return this._get("version")+1},enumerable:!0,configurable:!0});d.prototype.buildLegendElementsForFeatureCollections=function(a){var b=this;this.legendElements=[];a.forEach(function(a){if(a.isInstanceOf&&a.isInstanceOf(K))b._buildRendererLegendElements(a.renderer,a.title,"append");else if(a.featureSet&&a.featureSet.features.length){var c=
a.layerDefinition;(c=(c=c&&c.drawingInfo)&&V.fromJSON(c.renderer))?b._buildRendererLegendElements(c,a.name,"append"):v.warn("drawingInfo not available!")}})};d.prototype.buildLegendElementsForRenderer=function(){this._buildRendererLegendElements(this.layer.renderer,null,"replace")};d.prototype.buildLegendElementsForTools=function(){var a=this,b=this.layer;b.isInstanceOf(M)?this._constructLegendElementsForWMTSlayer():b.isInstanceOf(L)?this._constructLegendElementsForWMSSublayers():b.isInstanceOf(N)?
this._constructLegendElementsForSublayers():(this._handles.remove("imageryLayers-watcher"),this._getLegendLayers().then(function(c){a.legendElements=[];c.forEach(function(c){if("esri.layers.ImageryLayer"===a.layer.declaredClass){var e=b.watch("renderingRule, bandIds",function(){a._legendResponse["default"]=null;a.buildLegendElementsForTools()});a._handles.add(e,"imageryLayers-watcher")}(c=a._generateSymbolTableElementForLegendLayer(c))&&c.infos.length&&a.legendElements.push(c);a.notifyChange("ready")});
a.notifyChange("ready")}).otherwise(function(a){v.warn("Request to server for legend has failed!",a)}))};d.prototype._isGroupActive=function(){var a=this.children;return a.length?a.some(function(a){return a.ready}):!1};d.prototype._buildRendererLegendElements=function(a,b,c){var e=this;this._getRendererLegendElements(a,b).then(function(a){"append"===c?Array.prototype.push.apply(e.legendElements,a):e.legendElements=a;e.notifyChange("ready")}).otherwise(function(a){v.warn("error while building legend for layer!",
a)})};d.prototype._constructLegendElementsForWMTSlayer=function(){this.legendElements=[];this._handles.remove("wmts-activeLayer-watcher");var a=this.layer,b=a.activeLayer;this._handles.add(w.watch(this.layer,"activeLayer",this._constructLegendElementsForWMTSlayer.bind(this)),"wmts-activeLayer-watcher");if(b.styleId&&b.styles){var c=null;b.styles.some(function(a){if(b.styleId===a.id)return c=a.legendUrl,!0});c&&(this.legendElements=[{type:"symbol-table",title:b.title,infos:[{src:c,opacity:a.opacity}]}])}this.notifyChange("ready")};
d.prototype._constructLegendElementsForWMSSublayers=function(){this.legendElements=[];this._handles.remove("wms-sublayers-watcher");var a=this.layer,b=null;if(a.customParameters||a.customLayerParameters)b=p.clone(a.customParameters||{}),p.mixin(b,a.customLayerParameters||{});this._handles.add(w.watch(this.layer,"sublayers",this._constructLegendElementsForWMSSublayers.bind(this)),"wms-sublayers-watcher");this.legendElements=this._generateLegendElementsForWMSSublayers(a.sublayers,b);this.notifyChange("ready")};
d.prototype._generateLegendElementsForWMSSublayers=function(a,b){var c=this,e=[];this._handles.add(a.on("change",this._constructLegendElementsForWMSSublayers.bind(this)),"wms-sublayers-watcher");a.forEach(function(a){var f=a.watch("title, visible, legendEnabled",function(){return c._constructLegendElementsForWMSSublayers()});c._handles.add(f,"wms-sublayers-watcher");a.visible&&a.legendEnabled&&(a=c._generateSymbolTableElementForWMSSublayer(a,b))&&a.infos.length&&e.unshift(a)});return e};d.prototype._generateSymbolTableElementForWMSSublayer=
function(a,b){return!a.legendUrl&&a.sublayers?(b=this._generateLegendElementsForWMSSublayers(a.sublayers,b).filter(function(a){return a}),{type:"symbol-table",title:a.title,infos:b}):this._generateSymbolTableElementForLegendUrl(a,b)};d.prototype._generateSymbolTableElementForLegendUrl=function(a,b){var c=a.legendUrl;if(c){var e={type:"symbol-table",title:a.title||a.name||a.id&&a.id+"",infos:[]};b&&(c+="?"+F.objectToQuery(b));e.infos.push({src:c,opacity:a.layer&&a.layer.opacity});return e}};d.prototype._getLegendLayers=
function(a){var b=this,c=(a=a&&a.hasDynamicLayers?a.dynamicLayers:null)||"default",e=this._legendResponse&&this._legendResponse[c];return e?q.resolve(e):this._legendRequest(a).then(function(a){a=a.layers;return b._legendResponse[c]=a})};d.prototype._legendRequest=function(a){var b=this.layer;a={f:"json",dynamicLayers:a};"esri.layers.ImageryLayer"===b.declaredClass&&(b.renderingRule&&(a.renderingRule=JSON.stringify(b.renderingRule.toJSON())),b.bandIds&&(a.bandIds=b.bandIds.join()));var c=b.url.replace(/(\/)+$/,
"");if(10.01<=b.version){var e=c.indexOf("?"),c=-1<e?c.substring(0,e)+"/legend"+c.substring(e):c+"/legend";b.token&&(c+="?token\x3d"+b.token)}else b=c.toLowerCase().indexOf("/rest/"),b=c.substring(0,b)+c.substring(b+5,c.length),c="https://utility.arcgis.com/sharing/tools/legend?soapUrl\x3d"+encodeURI(b)+"\x26returnbytes\x3dtrue";return S(c,{query:a,callbackParamName:"callback"}).then(function(a){return a.data})};d.prototype._constructLegendElementsForSublayers=function(){var a=this;this.legendElements=
[];this._handles.remove("sublayers-watcher");var b=this.layer,c=new O({layer:b});this._getLegendLayers(c).then(function(c){var e={};c.forEach(function(a){e[a.layerId]=a});a._handles.add(w.watch(b,"sublayers",a._constructLegendElementsForSublayers.bind(a)),"sublayers-watcher");a.legendElements=a._generateLegendElementsForSublayers(b.sublayers,e,b.opacity);a.notifyChange("ready")}).otherwise(function(a){v.warn("Request to server for legend has failed!",a)}).then(function(){return c.destroy()});this.notifyChange("ready")};
d.prototype._generateLegendElementsForSublayers=function(a,b,c){var e=this,f=[];this._handles.add(a.on("change",this._constructLegendElementsForSublayers.bind(this)),"sublayers-watcher");a.forEach(function(a){var d=a.watch("renderer, opacity, title, visible",function(){return e._constructLegendElementsForSublayers()});e._handles.add(d,"sublayers-watcher");a.visible&&a.legendEnabled&&(d=a&&null!=a.opacity?a.opacity:null,(a=e._generateSymbolTableElementForSublayer(a,b,null!=d?d*c:c))&&a.infos.length&&
f.unshift(a))});return f};d.prototype._generateSymbolTableElementForSublayer=function(a,b,c){var e=b[a.id];return!e&&a.sublayers?(b=this._generateLegendElementsForSublayers(a.sublayers,b,c).filter(function(a){return a}),{type:"symbol-table",title:a.title,infos:b}):this._generateSymbolTableElementForLegendLayer(e,a,c)};d.prototype._generateSymbolTableElementForLegendLayer=function(a,b,c){var e=this;if(a){var f=b&&b.renderer,d=b&&b.title||a.layerName;f&&(f=b&&b.title||this._getRendererTitle(f,b))&&
(d&&(f.title=d),d=f);d={type:"symbol-table",title:d,infos:[]};a.legendType&&(d.legendType=a.legendType);a.legend&&this._isLegendLayerInScale(a,b)&&(b=b?this._sanitizeLegendForSublayer(a.legend.slice(),b):a.legend,d.infos=b.map(function(b){var f=b.url;if(b.imageData&&0<b.imageData.length)f="data:image/png;base64,"+b.imageData;else if(0!==f.indexOf("http")){var f=e.layer.url+"/"+a.layerId+"/images/"+f,d=e.layer.token;d&&(f+="?token\x3d"+d)}else return null;return{label:b.label,src:f,opacity:c,width:b.width,
height:b.height}}).filter(function(a){return!!a}));return d.infos.length?d:null}};d.prototype._isLegendLayerInScale=function(a,b){b=b||this.layer;var c=null,e=null,f=!0;!b.minScale&&0!==b.minScale||!b.maxScale&&0!==b.maxScale?(0===a.minScale&&b.tileInfo&&(c=b.tileInfo.lods[0].scale),0===a.maxScale&&b.tileInfo&&(e=b.tileInfo.lods[b.tileInfo.lods.length-1].scale)):(c=Math.min(b.minScale,a.minScale)||b.minScale||a.minScale,e=Math.max(b.maxScale,a.maxScale));if(0<c&&c<this.scale||e>this.scale)f=!1;return f};
d.prototype._sanitizeLegendForSublayer=function(a,b){if(10.1>this.layer.version||0===a.length)return a;b=b.renderer;var c=null,e=null;a.some(function(a){return a.values})&&a.some(function(a,b){a.values||(c=b,e=a,e.label||(e.label="others"));return null!=e});b?"unique-value"===b.type?e&&(a.splice(c,1),a.push(e)):"class-breaks"===b.type&&(e&&a.splice(c,1),a.reverse(),e&&a.push(e)):e&&(a.splice(c,1),a.push(e));return a};d.prototype._getRendererLegendElements=function(a,b){return a.isInstanceOf(t)||a.isInstanceOf(u)||
a.isInstanceOf(z)||a.isInstanceOf(A)||a.isInstanceOf(B)||a.isInstanceOf(C)?a.isInstanceOf(P)?this._constructPointCloudRendererLegendElements(a,b):this._constructRendererLegendElements(a,b):(v.warn("Renderer not supported!"),q.resolve([]))};d.prototype._constructPointCloudRendererLegendElements=function(a,b){var c=this,e=this.layer.opacity,f=[],d=null,h=null;if(a.isInstanceOf(A))d={type:"symbol-table",title:b||a.field,infos:[]},a.colorClassBreakInfos.forEach(function(a){d.infos.unshift({label:a.label||
a.minValue+" - "+a.maxValue,value:[a.minValue,a.maxValue],symbol:c._getAppliedCloneSymbol(x,a.color,e)})});else if(a.isInstanceOf(B)){var h=a.stops,g=null;if(h.length&&(1===h.length&&(g=h[0].color),!g)){var k=h[0].value,y=h[h.length-1].value;null!=k&&null!=y&&(g=r.getColorFromPointCloudStops(k+(y-k)/2,h))}d={type:"symbol-table",title:null,infos:[{label:null,value:null,symbol:this._getAppliedCloneSymbol(x,g||x.color,e)}]};h={type:"color-ramp",title:b||a.field,borderColor:X.getStroke(x).color,overlayColor:r.getRampOverlayColor(e),
infos:r.getRampStopsForPointCloud(a.stops)}}else a.isInstanceOf(C)&&(d={type:"symbol-table",title:b||a.field,infos:[]},a.colorUniqueValueInfos.forEach(function(a){d.infos.push({label:a.label||a.values.join(", "),value:a.values.join(", "),symbol:c._getAppliedCloneSymbol(x,a.color,e)})}));d&&d.infos.length&&f.push(d);h&&h.infos.length&&f.push(h);a=f.reduce(function(a,b){return a.concat(b.infos)},[]).filter(function(a){return!!a.symbol}).map(function(a){return c._getSymbolPreview(a)});return q.eachAlways(a).then(function(){return f})};
d.prototype._constructRendererLegendElements=function(a,b){var c=this;return this._loadRenderer(a).then(function(a){c._hasColorRamp=!1;c._hasOpacityRamp=!1;c._hasSizeRamp=!1;var e=c._getVisualVariableLegendElements(a)||[],d={type:"symbol-table",title:b||c._getRendererTitle(a),infos:[]},h=null;if(a.isInstanceOf(z)){var g=a.field;a.uniqueValueInfos.forEach(function(a){a.symbol&&d.infos.push({label:a.label||c._getDomainName(g,a.value)||a.value,value:a.value,symbol:a.symbol})})}else a.isInstanceOf(u)?
(h=c._isUnclassedRenderer(a),h&&c._hasSizeRamp||(a.classBreakInfos.forEach(function(a){a.symbol&&d.infos.unshift({label:a.label||(h?null:a.minValue+" - "+a.maxValue),value:[a.minValue,a.maxValue],symbol:a.symbol})}),h&&(d.title=null))):a.isInstanceOf(t)&&a.symbol&&!c._hasSizeRamp&&d.infos.push({label:a.label,symbol:a.symbol});var k=!1,y=a.defaultLabel,m=a.defaultSymbol;m&&!h&&(d.infos.push({label:y||"others",symbol:m}),k=!0);k||a.isInstanceOf(t)||h&&!c._hasColorRamp&&!c._hasSizeRamp&&!c._hasOpacityRamp||
e.push({type:"symbol-table",infos:[{label:a.defaultLabel,symbol:a.defaultSymbol}]});d.infos.length&&e.unshift(d);var n=c._getSymbolConfig(a.visualVariables),k=e.reduce(function(a,b){return a.concat(b.infos)},[]).filter(function(a){return!!a.symbol}).map(function(a){return c._getSymbolPreview(a,n)});a=null;return q.eachAlways(k).then(function(){return e})})};d.prototype._getSymbolConfig=function(a){var b=!1,c=!1;if(a)for(var e=0;e<a.length&&(!b||!c);e++){var d=a[e];"size"===d.type&&("height"===d.axis&&
(b=!0),"width-and-depth"===d.axis&&(c=!0))}return b&&c?"tall":null};d.prototype._getSymbolPreview=function(a,b){return W.renderPreviewHTML(a.symbol,{size:a.size,opacity:this.layer.opacity,symbolConfig:b}).then(function(b){a.preview=b;return a}).otherwise(function(){a.preview=null;return a})};d.prototype._loadRenderer=function(a){var b=this,c=[];a=a.clone();var e=this._getMedianColor(a),d=this.layer.opacity;if(a.isInstanceOf(u)||a.isInstanceOf(z)){var l=(a.classBreakInfos||a.uniqueValueInfos).map(function(a){return b._fetchSymbol(a.symbol,
e,d).then(function(b){a.symbol=b}).otherwise(function(){a.symbol=null})});Array.prototype.push.apply(c,l)}c.push(this._fetchSymbol(a.symbol||a.defaultSymbol,a.defaultSymbol?null:e,d).then(function(c){b._applySymbolToRenderer(a,c,a.isInstanceOf(t))}).otherwise(function(){b._applySymbolToRenderer(a,null,a.isInstanceOf(t))}));return q.eachAlways(c).then(function(){return a})};d.prototype._applySymbolToRenderer=function(a,b,c){c?a.symbol=b:a.defaultSymbol=b};d.prototype._getMedianColor=function(a){if(!a.visualVariables)return null;
var b=U.find(a.visualVariables,function(a){return"color"===a.type});if(!b)return null;var c=null,e=null;if(b.colors)c=b.minDataValue,e=b.maxDataValue;else if(b.stops){if(1===b.stops.length)return b.stops[0].color;c=b.stops[0].value;e=b.stops[b.stops.length-1].value}if(null!=c&&null!=e)return a.getColor(c+(e-c)/2,{colorInfo:b})};d.prototype._fetchSymbol=function(a,b,c){var e=this;if(!a)return q.reject();if("web-style"===a.type){var d=a.portal,d=a.name+"-"+a.styleName+"-"+a.styleUrl+"-"+(d&&d.url)+
"-"+(d&&d.user&&d.user.username),l=this._webStyleSymbolCache;l.has(d)||l.set(d,a.fetchSymbol());return l.get(d).then(function(a){return e._getAppliedCloneSymbol(a,b,c)}).otherwise(function(){v.warn("Fetching web-style failed!");return q.reject()})}return q.resolve(this._getAppliedCloneSymbol(a,b,c))};d.prototype._getAppliedCloneSymbol=function(a,b,c){if(!a)return a;a=a.clone();var e=-1<a.type.indexOf("3d");b=b&&b.toRgba();e?this._applyColorTo3dSymbol(a,b,c):(a.color&&(a.color=this._getOpacityAppliedColor(b||
a.color.toRgba(),c)),(b=a.outline)&&b.color&&(b.color=this._getOpacityAppliedColor(b.color.toRgba(),c)));return a};d.prototype._applyColorTo3dSymbol=function(a,b,c){var e=this;a.symbolLayers.forEach(function(a){a&&(b&&(a.material||(a.material={}),a.material.color=new R(b)),null!=c&&(a.material&&a.material.color&&(a.material.color=e._getOpacityAppliedColor(a.material.color.toRgba(),c)),a.outline&&a.outline.color&&(a.outline.color=e._getOpacityAppliedColor(a.outline.color.toRgba(),c))))})};d.prototype._getOpacityAppliedColor=
function(a,b){a[3]*=b;return a};d.prototype._getVisualVariableLegendElements=function(a){var b=this,c=a.visualVariables,e=[],d=[],l=[],h=this.layer.opacity;if(!c)return null;c.forEach(function(a){"color"===a.type?e.push(a):"size"===a.type?d.push(a):"opacity"===a.type&&l.push(a)});var c=e.concat(d,l),g,k;0===e.length&&a.isInstanceOf(u)&&a.classBreakInfos&&1===a.classBreakInfos.length&&(g=(g=a.classBreakInfos[0])&&g.symbol);0===e.length&&a.isInstanceOf(t)&&(g=a.symbol);g&&(-1<g.type.indexOf("3d")?(g=
g.symbolLayers.getItemAt(0),g.get("material.color")&&(k=g.material.color)):g.url||(k=g.color),k&&(k=k.toRgba()));return c.map(function(c){if(!c.legendOptions||!1!==c.legendOptions.showLegend){var e=b._getRampTitle(c,b.layer),d=r.getRampBorderColor(a),f=r.getRampOverlayColor(h),g=null;"color"===c.type?(g={type:"color-ramp",title:e,borderColor:d,overlayColor:f,infos:r.getRampStops(a,c)},b._hasColorRamp||(b._hasColorRamp=!(null==g.infos||!g.infos.length))):"size"===c.type?(g={type:"size-ramp",title:e,
infos:T.getRampStops(a,c,b._getMedianColor(a),b.scale)},b._hasSizeRamp||(b._hasSizeRamp=!(null==g.infos||!g.infos.length))):"opacity"===c.type&&(g={type:"opacity-ramp",title:e,borderColor:d,overlayColor:f,infos:r.getRampStops(a,c,k)},b._hasOpacityRamp||(b._hasOpacityRamp=!(null==g.infos||!g.infos.length)));return g.infos&&g}}).filter(function(a){return!!a})};d.prototype._getDomainName=function(a,b){if(!p.isFunction(a)){var c=this.layer;return(c=(a=c.getField&&c.getField(a))&&c.getFieldDomain?c.getFieldDomain(a.name):
null)&&c.codedValues?c.getName(b):null}return null};d.prototype._getRampTitle=function(a,b){var c=a.field,e=a.normalizationField,d=!1,l=!1,h=!1,g=null,c=p.isFunction(c)?null:c,e=p.isFunction(e)?null:e;if(void 0!==(a.legendOptions&&a.legendOptions.title))g=a.legendOptions.title;else if(a.valueExpressionTitle)g=a.valueExpressionTitle;else{if(b.renderer.authoringInfo&&b.renderer.authoringInfo.visualVariables)for(a=b.renderer.authoringInfo.visualVariables,g=0;g<a.length;g++){var k=a[g];if("colorInfo"===
k.type)if("ratio"===k.style){d=!0;break}else if("percent"===k.style){l=!0;break}else if("percentTotal"===k.style){h=!0;break}}g={field:c&&this._getFieldAlias(c,b),normField:e&&this._getFieldAlias(e,b),ratio:d,ratioPercent:l,ratioPercentTotal:h}}return g};d.prototype._getRendererTitle=function(a,b){if(a.legendOptions&&a.legendOptions.title)return a.legendOptions.title;if(a.valueExpressionTitle)return a.valueExpressionTitle;var c=this.layer,d=a.field,f=null,l=null;a instanceof u&&(f=a.normalizationField,
l="percent-of-total"===a.normalizationType);d=p.isFunction(d)?null:d;f=p.isFunction(f)?null:f;a=null;if(d||f)a={field:b?d:d&&this._getFieldAlias(d,c),normField:b?f:f&&this._getFieldAlias(f,c),normByPct:l};return a};d.prototype._getFieldAlias=function(a,b){var c=b.popupTemplate,c=c&&c.fieldInfos;b=p.isFunction(a)?null:b.getField&&b.getField(a);var d=null;c&&c.some(function(b){if(a===b.fieldName)return d=b,!0});var c=d||b,f=null;c&&(f=d&&d.label||b&&b.alias||c.name||c.fieldName);return f};d.prototype._isUnclassedRenderer=
function(a){var b=a.visualVariables,c=!1;a.isInstanceOf(u)&&a.classBreakInfos&&1===a.classBreakInfos.length&&b&&(c=a.field?b.some(function(b){return!(!b||a.field!==b.field||(a.normalizationField||b.normalizationField)&&a.normalizationField!==b.normalizationField)}):!!b.length);return c};n([m.property()],d.prototype,"children",void 0);n([m.property()],d.prototype,"layer",void 0);n([m.property()],d.prototype,"legendElements",void 0);n([m.property()],d.prototype,"parent",void 0);n([m.property({readOnly:!0})],
d.prototype,"ready",null);n([m.property()],d.prototype,"scale",void 0);n([m.property()],d.prototype,"title",void 0);n([m.property({dependsOn:["ready"],readOnly:!0,value:0})],d.prototype,"version",null);return d=n([m.subclass("esri.widgets.Legend.support.ActiveLayerInfo")],d)}(m.declared(G))});