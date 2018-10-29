// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Layer ./FeatureLayer ./support/Field ./support/fieldUtils ./support/LabelClass ../symbols/support/ElevationInfo ./support/labelingInfo ./mixins/SceneService ./support/commonProperties ../PopupTemplate ../request ../core/requireUtils ../core/promiseUtils ../core/urlUtils ../core/Error ../core/Logger ../core/accessorSupport/PropertyOrigin ../core/accessorSupport/utils ../renderers/support/jsonUtils ../renderers/support/styleUtils ../renderers/support/typeUtils ../portal/PortalItem ../tasks/support/Query dojo/_base/lang dojo/promise/all".split(" "),
function(w,Q,x,e,c,y,n,z,l,A,B,p,C,D,q,m,E,g,F,f,G,h,H,I,J,K,L,M,N,r){function t(c,b,a){c&&((c=I.read(c,b,a)||void 0)||k.error("Failed to create renderer",{rendererDefinition:c,layer:this,context:a}));return c}var O=["3DObject","Point"],k=G.getLogger("esri.layers.SceneLayer"),v={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},
P={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};return function(u){function b(a,d){a=u.call(this)||this;a.featureReduction=null;a.operationalLayerType="ArcGISSceneServiceLayer";a.type="scene";a.fields=[];a.definitionExpression=null;a.elevationInfo=null;a.labelsVisible=!1;a.labelingInfo=null;a.legendEnabled=!0;a.cachedDrawingInfo={color:!1};a.popupEnabled=!0;a.popupTemplate=null;a.objectIdField=null;a.objectIdFilter=null;a._fieldUsageInfo={};a.screenSizePerspectiveEnabled=
!0;return a}x(b,u);b.prototype.normalizeCtorArgs=function(a,d){return"string"===typeof a?N.mixin({},{url:a},d):a};b.prototype.getField=function(a){return l.getField(a,this.fields)};Object.defineProperty(b.prototype,"geometryType",{get:function(){return P[this.profile]||"mesh"},enumerable:!0,configurable:!0});b.prototype.readLabelsVisible=function(a,d){return d.showLabels};b.prototype.writeLabelsVisible=function(a,d){d.showLabels=!!a};Object.defineProperty(b.prototype,"renderer",{set:function(a){l.fixRendererFields(a,
this.fields);this._set("renderer",a)},enumerable:!0,configurable:!0});b.prototype.readCachedDrawingInfo=function(a,d){if(null==a||"object"!==typeof a)a={};null==a.color&&(a.color=!1);return a};b.prototype.readPopupEnabled=function(a,d){return null!=d.disablePopup?!d.disablePopup:void 0};b.prototype.writePopupEnabled=function(a,d){a||(d.disablePopup=!0)};b.prototype.readPopupTemplate=function(a,d){return d.popupInfo?q.fromJSON(d.popupInfo):void 0};b.prototype.writePopupTemplate=function(a,d){a&&(d.popupInfo=
a.toJSON())};b.prototype.readObjectIdField=function(a,d){!a&&d.fields&&d.fields.some(function(d){"esriFieldTypeOID"===d.type&&(a=d.name);return!!a});return a||void 0};b.prototype.readProfile=function(a,d){a=d.store.profile;if(null!=a&&v[a])return v[a];k.error("Unknown or missing profile",{profile:a,layer:this});return"mesh-pyramids"};b.prototype.readNormalReferenceFrame=function(a,d){return d.store.normalReferenceFrame};b.prototype.load=function(){var a=this,d=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return a._fetchService()}).then(function(){return r([a._verifyRootNodeAndUpdateExtent(),
a._setCompanionFeatureLayer()])}).then(function(){return a._applyCompanionOverrides()}).then(function(){return a._populateFieldUsageInfo()}).then(function(){return J.loadStyleRenderer(a,{origin:"service"})}).then(function(){return l.fixRendererFields(a.renderer,a.fields)});this.addResolvingPromise(d);return this};b.prototype.createLayerView=function(a){var d=this;return E.when(w,null==this.profile||"mesh-pyramids"===this.profile?"../views/3d/layers/SceneLayerView3D":"../views/3d/layers/SceneLayerGraphicsView3D").then(function(b){return new b({view:a,
layer:d})})};b.prototype.createQuery=function(){var a=new M;"mesh"!==this.geometryType&&(a.returnGeometry=!0,a.returnZ=!0);a.where=this.definitionExpression||"1\x3d1";a.sqlFormat="standard";return a};b.prototype.queryExtent=function(a){var d=this;return this._getCompanionLayerForQuery().then(function(b){return b.queryExtent(a||d.createQuery())})};b.prototype.queryFeatureCount=function(a){var d=this;return this._getCompanionLayerForQuery().then(function(b){return b.queryFeatureCount(a||d.createQuery())})};
b.prototype.queryFeatures=function(a){var d=this;return this._getCompanionLayerForQuery().then(function(b){return b.queryFeatures(a||d.createQuery())}).then(function(a){if(a&&a.features)for(var b=0,c=a.features;b<c.length;b++)c[b].layer=d;return a})};b.prototype.queryObjectIds=function(a){var d=this;return this._getCompanionLayerForQuery().then(function(b){return b.queryObjectIds(a||d.createQuery())})};b.prototype.getFieldUsageInfo=function(a){return this._fieldUsageInfo[a]||{supportsLabelingInfo:!1,
supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}};b.prototype._getCompanionLayerForQuery=function(){var a=this;if(!this.loaded)return this.load().then(function(){return a._getCompanionLayerForQuery()});var d=this.companionFeatureLayer;return null!=d?g.resolve(d):g.reject(new f("scenelayer:query-not-available","SceneLayer queries are not available without companion feature layer"))};b.prototype.hasCachedStatistics=function(a){return null!=this.statisticsInfo&&this.statisticsInfo.some(function(d){return d.name===
a})};b.prototype.queryCachedStatistics=function(a){if(!this.hasCachedStatistics(a))return g.reject(new f("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available"));for(var d=0,b=this.statisticsInfo;d<b.length;d++){var c=b[d];if(c.name===a)return a=F.join(this.parsedUrl.path,c.href),m(a,{query:{f:"json"},responseType:"json"}).then(function(a){return a.data})}};b.prototype.graphicChanged=function(a){this.emit("graphic-update",a)};b.prototype._validateLayer=function(a){if(a.layerType&&
-1===O.indexOf(a.layerType))throw new f("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:a.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new f("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(1<this.version.major)throw new f("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,
supportedVersions:"1.x"});a=this.normalReferenceFrame;var b=this.spatialReference,c=!1,e=!1;if(null==a)e=c=!0;else switch(b=b&&b.isGeographic,a){case "east-north-up":case "earth-centered":c=!0;e=b;break;case "vertex-reference-frame":c=!0;e=!b;break;default:c=!1}if(!c)throw new f("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!e)throw new f("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.");
};b.prototype._populateFieldUsageInfo=function(){this._fieldUsageInfo={};if(this.fields)for(var a=function(a){var d=!(!b.attributeStorageInfo||!b.attributeStorageInfo.some(function(b){return b.name===a.name})),c=!!(b.companionFeatureLayer&&b.companionFeatureLayer.fields&&b.companionFeatureLayer.fields.some(function(b){return b&&a.name===b.name}));b._fieldUsageInfo[a.name]={supportsLabelingInfo:d,supportsRenderer:d,supportsPopupTemplate:d||c,supportsLayerQuery:c}},b=this,c=0,e=this.fields;c<e.length;c++)a(e[c])};
b.prototype._applyCompanionOverrides=function(){if(this.companionFeatureLayer){if(this.companionFeatureLayer.fields)for(var a=0,b=this.companionFeatureLayer.fields;a<b.length;a++){var c=b[a];this.getField(c.name)||this.fields.push(c.clone())}a=["popupTemplate","popupEnabled"];b=H.getProperties(this);for(c=0;c<a.length;c++){var e=a[c];this._buddyIsMoreImportant(e)&&(b.setDefaultOrigin(this.companionFeatureLayer.originOf(e)),b.set(e,this.companionFeatureLayer[e]),b.setDefaultOrigin("user"))}}};b.prototype._setCompanionFeatureLayer=
function(){var a=this;return this._fetchCompanionFeatureLayer().then(function(b){a.companionFeatureLayer=b})};b.prototype._fetchCompanionFeatureLayer=function(){var a=this;return-1===["mesh-pyramids","points"].indexOf(this.profile)?g.resolve(null):(this.portalItem&&this.portalItem.isResolved()?this._fetchCompanionFeatureLayerFromRelatedItems(this.portalItem):this._fetchCompanionFeatureLayerFromUrl()).then(function(a){return a.load()}).otherwise(function(b){null==a.attributeStorageInfo?k.warn("Companion FeatureLayer could not be loaded and no binary attributes found. Popups will not work for this SceneLayer: "+
a.title):k.info("Companion FeatureLayer could not be loaded. Falling back to binary attributes for Popups on this SceneLayer: "+a.title);return null})};b.prototype._fetchCompanionFeatureLayerFromRelatedItems=function(a){var b=this;return a.fetchRelatedItems({relationshipType:"Service2Data",direction:"forward"}).then(function(a){return(a=a.filter(function(a){return"Feature Service"===a.type})[0])?b._fetchCompanionFeatureLayerFromPortalItem(new L({id:a.id,portal:a.portal})):g.reject()}).otherwise(function(){return b._fetchCompanionFeatureLayerFromUrl()})};
b.prototype._fetchCompanionFeatureLayerFromPortalItem=function(a){var b=this;return a.load().then(function(a){return b._findMatchingCompanionSublayerUrl(a.url)}).then(function(b){return g.resolve(new n({url:b,portalItem:a}))})};b.prototype._fetchCompanionFeatureLayerFromUrl=function(){return this._findMatchingCompanionSublayerUrl().then(function(a){return g.resolve(new n({url:a}))})};b.prototype._findMatchingCompanionSublayerUrl=function(a){var b=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);
if(!b)return g.reject();null==a&&(a=b[1]+"/FeatureServer");var c=a.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1");a={query:{f:"json"},responseType:"json"};var e=b[1]+"/SceneServer",f=parseInt(b[2],10),b=m(this._addUrlToken(e),a).otherwise(function(a){return{layers:null}});a=m(this._addUrlToken(c),a);return r([a,b]).then(function(a){var b=a[0];a=a[1];a=a.data&&a.data.layers;b=b.data&&b.data.layers;if(!Array.isArray(b))throw Error("expected layers array");if(Array.isArray(a))for(var d=0;d<Math.min(a.length,
b.length);d++){if(a[d].id===f)return c+"/"+b[d].id}else if(f<b.length)return c+"/"+b[f].id;throw Error("could not find matching companion sublayer");})};b.prototype._buddyIsMoreImportant=function(a){if(!this.companionFeatureLayer)return!1;var b=h.nameToId(this.originOf(a));a=h.nameToId(this.companionFeatureLayer.originOf(a));return null!=a&&a<=h.OriginId.SERVICE?null==b||b<h.OriginId.SERVICE:null!=a&&a<=h.OriginId.PORTAL_ITEM?null==b||b<h.OriginId.PORTAL_ITEM:!1};e([c.shared("esri.layers.SceneLayer")],
b.prototype,"declaredClass",void 0);e([c.property({json:{origins:{webScene:{read:{source:"layerDefinition.featureReduction"},write:{target:"layerDefinition.featureReduction"}}}}})],b.prototype,"featureReduction",void 0);e([c.property()],b.prototype,"companionFeatureLayer",void 0);e([c.property()],b.prototype,"operationalLayerType",void 0);e([c.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);e([c.property({type:[z]})],b.prototype,"fields",void 0);e([c.property({readOnly:!0})],b.prototype,
"attributeStorageInfo",void 0);e([c.property({readOnly:!0})],b.prototype,"statisticsInfo",void 0);e([c.property({json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],b.prototype,"definitionExpression",void 0);e([c.property({type:B,json:{origins:{service:{read:{source:"elevationInfo"}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}})],b.prototype,"elevationInfo",
void 0);e([c.property({type:String,dependsOn:["profile"]})],b.prototype,"geometryType",null);e([c.property({type:Boolean})],b.prototype,"labelsVisible",void 0);e([c.reader("labelsVisible",["showLabels"])],b.prototype,"readLabelsVisible",null);e([c.writer("labelsVisible")],b.prototype,"writeLabelsVisible",null);e([c.property({type:[A],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:p.reader},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",
reader:p.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],b.prototype,"labelingInfo",void 0);e([c.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],b.prototype,"legendEnabled",void 0);e([c.property({types:K.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:t}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:t},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],
b.prototype,"renderer",null);e([c.property({json:{read:!1}})],b.prototype,"cachedDrawingInfo",void 0);e([c.reader("service","cachedDrawingInfo")],b.prototype,"readCachedDrawingInfo",null);e([c.property({type:Boolean})],b.prototype,"popupEnabled",void 0);e([c.reader("popupEnabled",["disablePopup"])],b.prototype,"readPopupEnabled",null);e([c.writer("popupEnabled")],b.prototype,"writePopupEnabled",null);e([c.property({type:q})],b.prototype,"popupTemplate",void 0);e([c.reader("popupTemplate",["popupInfo"])],
b.prototype,"readPopupTemplate",null);e([c.writer("popupTemplate")],b.prototype,"writePopupTemplate",null);e([c.property({type:String,json:{read:!1}})],b.prototype,"objectIdField",void 0);e([c.reader("service","objectIdField",["objectIdField","fields"])],b.prototype,"readObjectIdField",null);e([c.property()],b.prototype,"objectIdFilter",void 0);e([c.property({type:String,json:{read:!1}})],b.prototype,"profile",void 0);e([c.reader("service","profile",["store.profile"])],b.prototype,"readProfile",null);
e([c.property({readOnly:!0,type:String,json:{read:!1}})],b.prototype,"normalReferenceFrame",void 0);e([c.reader("service","normalReferenceFrame",["store.normalReferenceFrame"])],b.prototype,"readNormalReferenceFrame",null);e([c.property(D.screenSizePerspectiveEnabled)],b.prototype,"screenSizePerspectiveEnabled",void 0);return b=e([c.subclass()],b)}(c.declared(y,C))});