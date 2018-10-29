// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/IdGen ../../lib/gl-matrix ../../lib/ComponentUtils ../../lib/Util ../../parts/Model ../../lib/screenSizePerspectiveUtils ../../../../webgl/Util ../../../support/aaBoundingBox".split(" "),function(fa,g,Z,p,K,G,aa,L,ba,E){function v(a,b,c,d,e,f){if(void 0===e||3!==f)for(e=0;e<f;++e)c[d+e]=a[b+e];else{var t=a[b],l=a[b+1];a=a[b+2];c[d]=e[0]*t+e[4]*l+e[8]*a+e[12];c[d+1]=e[1]*t+e[5]*l+e[9]*a+e[13];c[d+2]=e[2]*t+e[6]*l+e[10]*a+e[14]}return f}function M(a,b,c,d,e,f){for(var t=
a.length,l=0;l<t;++l){for(var q=c*a[l],H=0;H<c;++H)d[e+H]=b[q+H];e+=f}}function N(a,b,c,d,e,f){d=new Uint8Array(d.buffer);e*=4;f*=4;var t=a.length;if(4===c)for(c=0;c<t;++c){var l=4*a[c];d[e]=b[l];d[e+1]=b[l+1];d[e+2]=b[l+2];d[e+3]=b[l+3];e+=f}else if(3===c)for(c=0;c<t;++c)l=3*a[c],d[e]=b[l],d[e+1]=b[l+1],d[e+2]=b[l+2],d[e+3]=255,e+=f}function O(a,b,c,d,e){var f=P(b,c,Q);E.setMin(A,a.getBBMin());E.setMax(A,a.getBBMax());if(J(A,b,f,d)){var f=a.getPrimitiveIndices(),t=a.getIndices(),l=a.getPosition(),
q=f?f.length:t.length/3;if(1E4<q&&(a=a.getChildren(),void 0!==a)){for(f=0;8>f;++f)void 0!==a[f]&&O(a[f],b,c,d,e);return}R(b,c,0,q,t,l,f,e)}}function R(a,b,c,d,e,f,t,l){var q=f.data;f=f.size;var H=a[0],m=a[1];a=a[2];var n=b[0]-H,h=b[1]-m;for(b=b[2]-a;c<d;c++){var g=t?t[c]:c,k=f*e[3*g],w=f*e[3*g+1],y=f*e[3*g+2],r=q[k],u=q[k+1],x=q[k+2],k=q[w]-r,I=q[w+1]-u,w=q[w+2]-x,v=q[y]-r,A=q[y+1]-u,y=q[y+2]-x,z=h*y-A*b,F=b*v-y*n,E=n*A-v*h,B=k*z+I*F+w*E,r=H-r,C=m-u,D=a-x,u=C*w-I*D,x=D*k-w*r,G=r*I-k*C;if(B>S){z=r*
z+C*F+D*E;if(0>z||z>B)continue;F=n*u+h*x+b*G;if(0>F||z+F>B)continue}else if(B<-S){z=r*z+C*F+D*E;if(0<z||z<B)continue;F=n*u+h*x+b*G;if(0<F||z+F<B)continue}else continue;B=(v*u+A*x+y*G)/B;0<=B&&(z=ca,p.vec3d.set3(k,I,w,T),p.vec3d.set3(v,A,y,U),k=p.vec3d.normalize(p.vec3d.cross(T,U,z)),l(B,k,g))}}function P(a,b,c){return p.vec3d.set3(1/(b[0]-a[0]),1/(b[1]-a[1]),1/(b[2]-a[2]),c)}function J(a,b,c,d){var e=(a[0]-d-b[0])*c[0],f=(a[3]+d-b[0])*c[0],t=Math.min(e,f),e=Math.max(e,f),f=(a[1]-d-b[1])*c[1],l=(a[4]+
d-b[1])*c[1],t=Math.max(t,Math.min(f,l)),e=Math.min(e,Math.max(f,l));if(t>e)return!1;f=(a[2]-d-b[2])*c[2];a=(a[5]+d-b[2])*c[2];t=Math.max(t,Math.min(f,a));e=Math.min(e,Math.max(f,a));return t<=e}function C(a,b,c,d){if(void 0!==a)return c.aquire(a,b,d)}function D(a,b){void 0!==a&&b.release(a)}function V(a,b){b=b?V(b):{};for(var c in a){var d=a[c];d&&d.forEach&&(d=da(d));null==d&&c in b||(b[c]=d)}return b}function da(a){var b=[];a.forEach(function(a){return b.push(a)});return b}Object.defineProperty(g,
"__esModule",{value:!0});var W=p.mat4d.create(),A=E.create(),X=G.VertexAttrConstants;g.__Material_idGen=new Z;g.__GLMaterial_id=0;g.IDENTITY=p.mat4d.identity();g.fill=v;g.fillInterleaved=function(a,b,c,d,e,f,t,l){for(var q=ba.getStride(e)/4,g=0;g<e.length;g++){var m=e[g],n=t+m.offset/4,m=m.name,h=a.vertexAttr[m];if(null!=h&&(null==l||null!=l[m]))switch(m){case "uv0":M(a.faces.indices[m],h.data,h.size,f,n,q);break;case "region":for(var m=a.faces.indices[m],p=h.data,k=h.size,h=f,w=q,h=new Uint16Array(h.buffer),
n=2*n,w=2*w,y=m.length,r=0;r<y;++r){for(var u=k*m[r],x=0;x<k;++x)h[n+x]=p[u+x];n+=w}break;case "color":if(d&&d.color)if(m=a.faces.indices[m],p=h.data,k=d.color,r=h.size,h=f,w=q,h=new Uint8Array(h.buffer),n*=4,w*=4,y=m.length,4===r)for(r=0;r<y;++r)u=4*m[r],h[n]=p[u]*k[0],h[n+1]=p[u+1]*k[1],h[n+2]=p[u+2]*k[2],h[n+3]=p[u+3]*k[3],n+=w;else{if(3===r)for(x=255*k[3],r=0;r<y;++r)u=3*m[r],h[n]=p[u]*k[0],h[n+1]=p[u+1]*k[1],h[n+2]=p[u+2]*k[2],h[n+3]=x,n+=w}else N(a.faces.indices[m],h.data,h.size,f,n,q);break;
case "symbolColor":N(a.faces.indices[m],h.data,h.size,f,n,q);break;default:if(k=m===X.POSITION?b:m===X.NORMAL?c:void 0,void 0!==k&&3===h.size)for(m=a.faces.indices[m],p=h.data,h=f,w=q,y=m.length,r=0;r<y;++r){var v=3*m[r],u=p[v],x=p[v+1],v=p[v+2];h[n]=k[0]*u+k[4]*x+k[8]*v+k[12];h[n+1]=k[1]*u+k[5]*x+k[9]*v+k[13];h[n+2]=k[2]*u+k[6]*x+k[10]*v+k[14];n+=w}else M(a.faces.indices[m],h.data,h.size,f,n,q)}}};g.triangleVertexArrayToWireframeLines=function(a,b,c,d){for(c=Math.floor(c/3)-1;0<=c;c--){var e=b+3*
c*d,f=b+6*c*d+5*d;v(a,e,a,f,null,d);f-=d;v(a,e+d,a,f,null,d);f-=d;v(a,e+d,a,f,null,d);f-=d;v(a,e+2*d,a,f,null,d);f-=d;v(a,e+2*d,a,f,null,d);f-=d;v(a,e,a,f,null,d)}};g.intersectTriangleGeometry=function(a,b,c,d,e,f,t){G.assert("triangle"===a.data.primitiveType);b=b.componentVisibilities;d=d.tolerance;var l=a.getBoundingInfo(0);if(1<a.getComponentCount()){if(c=P(e,f,Q),E.setMin(A,l.getBBMin()),E.setMax(A,l.getBBMax()),J(A,e,c,d))for(var l=a.getComponentCount(),q=a.data.faces[0],g=q.indices[q.positionKey],
q=a.data.vertexAttributes[q.positionKey],m=a.data.componentOffsets,n=0;n<l;n++)if(K.getVisibility(b,n)){var h=a.getComponentAABB(n,A);J(h,e,c,d)&&R(e,f,m[n]/3,m[n+1]/3,g,q,void 0,t)}}else K.getVisibility(b,0)&&O(l,e,f,d,t)};var Q=p.vec3d.create(),S=Math.pow(2,-52),ca=p.vec3d.create(),T=p.vec3d.create(),U=p.vec3d.create();g.transformToWorld=function(a,b,c){return p.vec4d.set4(a[0]-b[0],a[1]-b[1],a[2]-b[2],1,c)};g.transformToView=function(a,b,c,d){p.mat4d.translate(c,b,W);c=W;return p.mat4d.multiplyVec4(c,
a,d)};g.transformToProjection=function(a,b,c,d){d[0]=a[0]+c[0];d[1]=a[1]+c[1];d[2]=a[2]+c[2];d[3]=a[3];return p.mat4d.multiplyVec4(b,d)};g.transformToNDC=function(a,b){return p.vec4d.scale(a,1/Math.abs(a[3]),b)};g.applyScreenSizePerspectiveScale=function(a,b,c,d,e){return L.scale(a,d,c,e)};g.verticalOffsetAtDistance=function(a,b,c,d,e){var f=c.screenLength||0;e&&(f=L.scale(f,d,b,e));return G.clamp(f*Math.tan(.5*a.fovY)/(.5*a.fullHeight)*b,c.minWorldLength||0,null!=c.maxWorldLength?c.maxWorldLength:
Infinity)};g.basicMaterialConstructor=function(a,b){var c=!0,d=0,e=g.__Material_idGen.gen(b);a.getId=function(){return e};var f;a.getParentStage=function(){return f};a.addParentStage=function(a){G.assert(void 0===f,"Material can only be added to a single Stage");f=a};a.removeParentStage=function(a){f=void 0};a.setVisible=function(b){c!==b&&(c=b,a.notifyDirty("matChanged"))};a.isVisible=function(){return c};a.notifyDirty=function(b){f&&f.notifyDirty(aa.ContentType.MATERIAL,a,b)};a.setRenderPriority=
function(a){d=a;this.notifyDirty("matChanged")};a.getRenderPriority=function(){return d}};g.aquireIfNotUndefined=C;g.releaseIfNotUndefined=D;var Y=p.mat4.create();g.bindView=function(a,b,c){p.mat4d.translate(b,a,Y);c.setUniform3fv("localOrigin",a);c.setUniformMatrix4fv("view",Y)};g.bindCamPos=function(a,b,c){c.setUniform3f("camPos",b[3]-a[0],b[7]-a[1],b[11]-a[2])};g.bindVerticalOffset=function(a,b,c){if(a){var d=b.fovY;b=b.viewport[3];var e=void 0;void 0===e&&(e=ea);e.screenLength=a.screenLength;
e.perDistance=Math.tan(.5*d)/(.5*b);e.minWorldLength=a.minWorldLength;e.maxWorldLength=a.maxWorldLength;a=e;c.setUniform4f("verticalOffset",a.screenLength,a.perDistance,a.minWorldLength,a.maxWorldLength)}};g.bindScreenSizePerspective=function(a,b,c){void 0===c&&(c="screenSizePerspectiveAlignment");if(a){var d=a.parameters;b.setUniform4f(c,d.divisor,d.offset,d.minPixelSize,a.paddingPixelsOverride)}};g.basicGLMaterialConstructor=function(a,b){var c=g.__GLMaterial_id++;a.getId=function(){return c};a.getMaterialId=
function(){return b.getId()};a.isVisible=function(){return b.isVisible()};a.getRenderPriority=function(){return b.getRenderPriority()}};g.singleTextureGLMaterialConstructor=function(a,b,c,d){var e=C(c.textureId,c.initTexture,b,d);a.updateTexture=function(a){c.textureId!==a&&(D(c.textureId,b),c.textureId=a,e=C(c.textureId,c.initTexture,b,d))};a.renderTexture=function(a){(a=b.getTexture(c.textureId))&&a.dirty&&a.redraw&&a.redraw()};a.bindTexture=function(a,b){void 0!==e&&(b.setUniform1i("tex",0),a.bindTexture(e.getGLTexture()))};
a.bindTextureSize=function(a,b){void 0!==e&&(a=e.getGLTexture(),b.setUniform2f("texSize",a.descriptor.width,a.descriptor.height))};a.dispose=function(){D(c.textureId,b)}};g.multiTextureGLMaterialConstructor=function(a,b,c,d){for(var e=d.length,f=Array(e),g=0;g<e;g++)f[g]=C(c[d[g][0]],c[d[g][1]],b);a.updateTextures=function(a){for(var g=0;g<e;g++){var l=c[d[g][0]],m=a[d[g][0]];l!==m&&(D(l,b),c[d[g][0]]=m,f[g]=C(m,c[d[g][1]],b))}};a.bindTextures=function(a,b){for(var c=0;c<e;c++)void 0!==f[c]&&(b.setUniform1i(d[c][2],
c),a.bindTexture(f[c].getGLTexture(),c));a.setActiveTexture(0)};a.bindOneTexture=function(a,b,c){b.setUniform1i(d[c][2],c);a.bindTexture(f[c].getGLTexture(),c);a.setActiveTexture(0)};a.disposeTextures=function(){for(var a=0;a<e;a++)D(c[d[a][0]],b)}};g.copyParameters=V;g.colorMixModes={multiply:1,ignore:2,replace:3,tint:4};var ea={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}});