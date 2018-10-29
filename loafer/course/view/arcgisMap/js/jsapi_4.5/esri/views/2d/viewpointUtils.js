// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ./libs/gl-matrix/common ./libs/gl-matrix/mat2d ./libs/gl-matrix/vec2 ../../Viewpoint ../../core/promiseUtils ../../core/Error ../../geometry/SpatialReference ../../geometry/Geometry ../../geometry/Point ../../geometry/Extent ../../geometry/support/webMercatorUtils ../../geometry/support/scaleUtils ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils".split(" "),function(S,f,q,l,e,z,A,L,M,B,w,N,x,C,O,P){function D(a,b,c,d){return d&&c&&!d.equals(c)&&
x.canProject(d,c)&&d.isWebMercator?(d.isWebMercator?(c=b[1],89.99999<c?c=89.99999:-89.99999>c&&(c=-89.99999),c=Math.sin(q.toRadian(c)),a=e.set(a,6378137*q.toRadian(b[0]),3189068.5*Math.log((1+c)/(1-c)))):(c=q.toDegree(b[0]/6378137),a=e.set(a,c-360*Math.floor((c+180)/360),q.toDegree(.5*Math.PI-2*Math.atan(Math.exp(-1*b[1]/6378137))))),a):e.copy(a,b)}function u(a){return a.wkid?a:a.spatialReference||M.WGS84}function r(a,b){return b.type?e.set(a,b.x,b.y):e.copy(a,b)}function v(a,b){return Math.max(a.width/
b[0],a.height/b[1])*E(a.spatialReference)}function t(a,b,c){var d;if(!a)return null;if(Array.isArray(a)&&2===a.length&&"number"===typeof a[0]&&"number"===typeof a[1])return new w(a);if(a.reduce)return a.reduce(function(a,c){return t(c,b,a)},c);a instanceof B?d=a:a.geometry&&(d=a.geometry);if(!d)return null;a="point"===d.type?new N({xmin:d.x,ymin:d.y,xmax:d.x,ymax:d.y,spatialReference:d.spatialReference}):d.extent;if(!a)return null;d=x.canProject(a,b);if(!a.spatialReference.equals(b)&&d)a=x.project(a,
b);else if(!d)return null;return c=c?c.union(a):a.clone()}function F(a,b){if(!a)return new z({targetGeometry:new w,scale:0,rotation:0});var c=b.spatialReference,d=b.size,g=b.viewpoint,f=b.constraints,h=null;"esri.Viewpoint"===a.declaredClass?h=a:a.viewpoint?h=a.viewpoint:a.target&&"esri.Viewpoint"===a.target.declaredClass&&(h=a.target);var k=null;if(h&&h.targetGeometry)k=h.targetGeometry;else if(a instanceof B)k=a;else if(a||a&&(a.hasOwnProperty("center")||a.hasOwnProperty("extent")||a.hasOwnProperty("target")))k=
t(a.center,c)||t(a.extent,c)||t(a.target,c)||t(a,c);!k&&g&&g.targetGeometry?k=g.targetGeometry:!k&&b.extent&&(k=b.extent);var l=u(k);c||(c=u(b.spatialReference||b.extent||k));if(!P.canProject(k,c)&&l&&!l.equals(c))return null;var n=r(e.create(),k.center?k.center:k),c=new w(D(n,n,l,c),c),l=null,l=h&&h.targetGeometry&&"point"===h.targetGeometry.type?h.scale:a.hasOwnProperty("scale")&&a.scale?a.scale:a.hasOwnProperty("zoom")&&-1!==a.zoom&&f&&f.effectiveLODs?f.zoomToScale(a.zoom):Array.isArray(k)||"point"===
k.type||"extent"===k.type&&0===k.width&&0===k.height?b.extent?v(b.extent,d):g.scale:v(k.extent,d);b=0;h?b=h.rotation:a.hasOwnProperty("rotation")?b=a.rotation:g&&(b=g.rotation);a=new z({targetGeometry:c,scale:l,rotation:b});f&&(a=f.fit(a),f.rotationEnabled||(a.rotation=0));return a}function n(a,b){var c=a.targetGeometry,d=b.targetGeometry;c.x=d.x;c.y=d.y;c.spatialReference=d.spatialReference;a.scale=b.scale;a.rotation=b.rotation;return a}function G(a,b,c){return c?e.set(a,.5*(b[0]-c.right+c.left),
.5*(b[1]-c.bottom+c.top)):e.scale(a,b,.5)}function Q(a,b,c,d){f.getTransform(a,b,c,d);return l.invert(a,a)}function y(a,b,c){var d=q.toRadian(b.rotation)||0;b=Math.abs(Math.cos(d));d=Math.abs(Math.sin(d));return e.set(a,Math.round(c[1]*d+c[0]*b),Math.round(c[1]*b+c[0]*d))}function p(a){return a.scale*(1/(39.37*(C.getMetersPerUnitForSR(a.targetGeometry.spatialReference)||H)*96))}function E(a){return 39.37*(C.getMetersPerUnitForSR(a)||H)*96}function I(a){return a.isWrappable?(a=O.getInfo(a),a.valid[1]-
a.valid[0]):0}function J(a,b){return Math.round(I(a)/b)}Object.defineProperty(f,"__esModule",{value:!0});var H=6370997*Math.PI/180,R=180/Math.PI;f.extentToScale=v;f.create=F;f.copy=n;f.getAnchor=G;f.getExtent=function(){var a=e.create();return function(b,c,d){var e=c.targetGeometry;r(a,e);c=.5*p(c);b.xmin=a[0]-c*d[0];b.ymin=a[1]-c*d[1];b.xmax=a[0]+c*d[0];b.ymax=a[1]+c*d[1];b.spatialReference=e.spatialReference;return b}}();f.setExtent=function(a,b,c,d,e){f.centerAt(a,b,c.center);a.scale=v(c,d);e&&
e.constraints&&e.constraints.constrain(a);return a};f.getOuterExtent=function(){var a=e.create(),b=e.create();return function(c,d,e){r(a,d.targetGeometry);y(b,d,e);e=.5*p(d);c.set({xmin:a[0]-e*b[0],ymin:a[1]-e*b[1],xmax:a[0]+e*b[0],ymax:a[1]+e*b[1],spatialReference:d.targetGeometry.spatialReference});return c}}();f.getClippedExtent=function(){var a=e.create(),b=e.create();return function(c,d,e){var f=p(d),g=d.targetGeometry.spatialReference,k=J(g,f);r(a,d.targetGeometry);y(b,d,e);g.isWrappable&&b[0]>
k&&(b[0]=k);d=.5*f;c.set({xmin:a[0]-d*b[0],ymin:a[1]-d*b[1],xmax:a[0]+d*b[0],ymax:a[1]+d*b[1],spatialReference:g});return c}}();f.getOuterSize=y;f.getPaddingScreenTranslation=function(){var a=e.create();return function(b,c,d){return e.sub(b,e.scale(b,c,.5),G(a,c,d))}}();var K=function(){var a=l.create(),b=e.create();return function(c,d,g,m){var h=p(d);d=q.toRadian(d.rotation)||0;e.set(b,h,h);l.fromScaling(a,b);l.rotate(a,a,d);l.translate(a,a,f.getPaddingScreenTranslation(b,g,m));l.translate(a,a,[0,
m.top-m.bottom]);return e.set(c,a[4],a[5])}}();f.getResolution=p;f.getResolutionToScaleFactor=E;f.getMatrix=function(){var a=e.create(),b=e.create(),c=e.create();return function(d,f,m,h,k,n){e.negate(a,f);e.scale(b,m,.5*n);e.set(c,1/h*n,-1/h*n);l.identity(d);l.translate(d,d,b);k&&l.rotate(d,d,k);l.scale(d,d,c);l.translate(d,d,a);return d}}();f.getTransform=function(){var a=e.create();return function(b,c,d,e){var g=p(c),h=q.toRadian(c.rotation)||0;r(a,c.targetGeometry);return f.getMatrix(b,a,d,g,h,
e)}}();f.getTransformNoRotation=function(){var a=e.create();return function(b,c,d,e){var g=p(c);r(a,c.targetGeometry);return f.getMatrix(b,a,d,g,0,e)}}();f.getWorldWidth=I;f.getWorldScreenWidth=J;f.createAsync=function(a,b){if(a=F(a,b))return A.resolve(a);a=new L("viewpointUtils-createAsync:different-spatialReference","Target spatialReference cannot be projected and is different from out spatialReference");return A.reject(a)};f.angleBetween=function(){var a=e.create(),b=e.create(),c=e.create();return function(d,
f,m){e.subtract(a,d,f);e.normalize(a,a);e.subtract(b,d,m);e.normalize(b,b);e.cross(c,a,b);d=Math.acos(e.dot(a,b)/(e.length(a)*e.length(b)))*R;0>c[2]&&(d=-d);isNaN(d)&&(d=0);return d}}();f.addPadding=function(){var a=e.create();return function(b,c,d,e){var f=b.targetGeometry;n(b,c);K(a,c,d,e);f.x+=a[0];f.y+=a[1];return b}}();f.removePadding=function(){var a=e.create();return function(b,c,d,e){var f=b.targetGeometry;n(b,c);K(a,c,d,e);f.x-=a[0];f.y-=a[1];return b}}();f.centerAt=function(){var a=e.create();
return function(b,c,d){n(b,c);c=b.targetGeometry;var e=u(d),f=u(c);r(a,d);D(a,a,e,f);c.x=a[0];c.y=a[1];return b}}();f.pixelSizeAt=function(a,b,c){return p(b)};f.resize=function(){var a=e.create();return function(b,c,d,g,m){m||(m="center");e.sub(a,d,g);e.scale(a,a,.5);d=a[0];g=a[1];switch(m){case "center":e.set(a,0,0);break;case "left":e.set(a,-d,0);break;case "top":e.set(a,0,g);break;case "right":e.set(a,d,0);break;case "bottom":e.set(a,0,-g);break;case "top-left":e.set(a,-d,g);break;case "bottom-left":e.set(a,
-d,-g);break;case "top-right":e.set(a,d,g);break;case "bottom-right":e.set(a,d,-g)}f.translateBy(b,c,a);return b}}();f.rotateBy=function(a,b,c){n(a,b);a.rotation+=c;return a};f.rotateTo=function(a,b,c){n(a,b);a.rotation=c;return a};f.scaleBy=function(){var a=e.create();return function(b,c,d,g,m){n(b,c);0!==d&&(f.toMap(a,g,c,m),b.scale=c.scale*d,f.toScreen(a,a,b,m),f.translateBy(b,b,e.set(a,a[0]-g[0],g[1]-a[1])));return b}}();f.scaleTo=function(a,b,c){n(a,b);a.scale=c;return a};f.scaleAndRotateBy=
function(){var a=e.create();return function(b,c,d,g,m,h){n(b,c);0!==d&&(f.toMap(a,m,c,h),b.scale=c.scale*d,b.rotation+=g,f.toScreen(a,a,b,h),f.translateBy(b,b,e.set(a,a[0]-m[0],m[1]-a[1])));return b}}();f.padAndScaleAndRotateBy=function(){var a=e.create(),b=e.create();return function(c,d,g,m,h,k,l){f.getPaddingScreenTranslation(b,k,l);e.add(a,h,b);return m?f.scaleAndRotateBy(c,d,g,m,a,k):f.scaleBy(c,d,g,a,k)}}();f.toMap=function(){var a=l.create();return function(b,c,d,f){return e.transformMat2d(b,
c,Q(a,d,f,1))}}();f.toScreen=function(){var a=l.create();return function(b,c,d,g){return e.transformMat2d(b,c,f.getTransform(a,d,g,1))}}();f.translateBy=function(){var a=e.create(),b=l.create();return function(c,d,f){n(c,d);var g=p(d),h=c.targetGeometry;l.fromRotation(b,q.toRadian(d.rotation)||0);l.scale(b,b,e.fromValues(g,g));e.transformMat2d(a,f,b);h.x+=a[0];h.y+=a[1];return c}}()});