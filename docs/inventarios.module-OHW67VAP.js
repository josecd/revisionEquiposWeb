import{a as Kt,b as Xt,c as Zt,d as te}from"./chunk-XAMCFP6N.js";import{c as re}from"./chunk-XFQ6HXOA.js";import{a as x}from"./chunk-52IOWIGI.js";import{A as Vt,B as Ht,C as Bt,D as $t,E as Ut,F as qt,G as j,H as Wt,I as Yt,J as zt,U as Qt,a as ct,f as It,i as Ct,j as xt,t as yt,u as wt,v as kt,w as At,x as Pt,y as Ot,z as Nt}from"./chunk-X4YY7POZ.js";import{a as St,b as Mt,c as Gt}from"./chunk-3D2UPWFA.js";import{B as nt,Bc as ft,C as k,Ca as rt,D as at,E as b,F as A,Fa as T,G as P,Ga as y,Gc as ut,Kc as vt,L as w,M as L,Nc as tt,Qc as ht,T as Q,Uc as _t,Vc as gt,Wc as B,Xa as O,Ya as N,Z as r,Zc as bt,cb as V,cd as Et,da as s,db as lt,ea as G,eb as mt,ed as Dt,fa as d,ga as o,ha as n,hd as Tt,ia as _,ja as S,jd as $,ka as M,kd as U,ld as q,ma as R,md as Lt,na as E,oc as Z,od as Rt,pa as u,pc as st,pd as Ft,qc as dt,rc as pt,sa as K,sd as jt,va as l,vd as Jt,wa as v,wb as H,xa as C,ya as ot,yb as X}from"./chunk-T55SLVJJ.js";import{f as oe,g as z}from"./chunk-SFCFV3AH.js";var W=(()=>{let e=class{constructor(a){this._httpClient=a}getInventario(){return this._httpClient.get(x.API_URL+"/inventario")}getInventarioFiltro(a){return this._httpClient.post(x.API_URL+"/inventario/filter",a)}getInventarioID(a){return this._httpClient.get(x.API_URL+`/inventario/${a}`)}crearInventario(a){return this._httpClient.post(x.API_URL+"/inventario",a)}crearParte(a){return this._httpClient.post(x.API_URL+"/parte",a)}eliminarInventario(a){return this._httpClient.delete(x.API_URL+"/inventario/"+a)}agregarImg(a){return this._httpClient.post(x.API_URL+"/parte/imgParte",a)}},t=e;return(()=>{e.\u0275fac=function(c){return new(c||e)(at(mt))}})(),(()=>{e.\u0275prov=nt({token:e,factory:e.\u0275fac,providedIn:"root"})})(),t})();var se=oe(re());function de(t,e){if(t&1&&(o(0,"span",29),l(1),n()),t&2){let i=u();r(1),ot(" (+",((i.toppings.value==null?null:i.toppings.value.length)||0)-1," ",(i.toppings.value==null?null:i.toppings.value.length)===2?"otro":"otros",") ")}}function pe(t,e){if(t&1&&(o(0,"mat-option",30),l(1),n()),t&2){let i=e.$implicit;d("value",i),r(1),v(i.nombre)}}function fe(t,e){if(t&1){let i=R();o(0,"th",31)(1,"mat-checkbox",32),E("change",function(c){w(i);let m=u();return L(c?m.toggleAllRows():null)}),n()()}if(t&2){let i=u();r(1),d("checked",i.selection.hasValue()&&i.isAllSelected())("indeterminate",i.selection.hasValue()&&!i.isAllSelected())("aria-label",i.checkboxLabel())}}function ue(t,e){if(t&1){let i=R();o(0,"td",33)(1,"mat-checkbox",34),E("click",function(c){return c.stopPropagation()})("change",function(c){let p=w(i).$implicit,f=u();return L(c?f.selection.toggle(p):null)}),n()()}if(t&2){let i=e.$implicit,a=u();r(1),d("checked",a.selection.isSelected(i))("aria-label",a.checkboxLabel(i))}}function ve(t,e){t&1&&(o(0,"th",35),l(1," marca "),n())}function he(t,e){if(t&1&&(o(0,"td",36),l(1),n()),t&2){let i=e.$implicit;r(1),C(" ",i.marca," ")}}function _e(t,e){t&1&&(o(0,"th",35),l(1," equipo "),n())}function ge(t,e){if(t&1&&(o(0,"td",36),l(1),n()),t&2){let i=e.$implicit;r(1),C(" ",i.equipo," ")}}function Ie(t,e){t&1&&(o(0,"th",35),l(1," Hotel "),n())}function Ce(t,e){if(t&1&&(o(0,"td",36),l(1),n()),t&2){let i=e.$implicit;r(1),C(" ",i.hoteles.nombre," ")}}function xe(t,e){t&1&&(o(0,"th",35),l(1," Fecha "),n())}function be(t,e){if(t&1&&(o(0,"td",36),l(1),T(2,"date"),n()),t&2){let i=e.$implicit;r(1),C(" ",y(2,1,i.fechaRegistro)," ")}}function Se(t,e){t&1&&(o(0,"th",31),l(1," Acciones "),n())}function Me(t,e){if(t&1){let i=R();o(0,"td",33)(1,"button",37),E("click",function(){let m=w(i).$implicit,p=u();return L(p.getRecord(m))}),l(2,"Ver"),n()()}}function Ee(t,e){t&1&&_(0,"tr",38)}function De(t,e){t&1&&_(0,"tr",39)}var et=se,ee=(()=>{let e=class{constructor(){this.displayedColumns=["select","marca","equipo","locacion","fecha","accion"],this.dataSource=new j([]),this.selection=new ct(!0,[]),this.date=new tt(et()),this.toppings=new tt(""),this.hoteles=[],this._inventario=b(W),this._reporte=b(Kt),this.router=b(H)}ngOnInit(){this.mes=et().month(),this.anio=et().year(),this.getInventario(),this.getHoteles()}getRecord(a){this.router.navigate(["/inventario/detalle",a.idInventario])}getInventario(){let a={mes:this.mes+1,anio:this.anio,hotel:""};this._inventario.getInventarioFiltro(a).subscribe({next:c=>z(this,null,function*(){this.dataSource=new j(c)}),error(c){}})}isAllSelected(){let a=this.selection.selected.length,c=this.dataSource.data.length;return a===c}toggleAllRows(){if(this.isAllSelected()){this.selection.clear();return}this.selection.select(...this.dataSource.data)}checkboxLabel(a){return a?`${this.selection.isSelected(a)?"deselect":"select"} row ${a.position+1}`:`${this.isAllSelected()?"deselect":"select"} all`}getHoteles(){this._reporte.hotelesLista().subscribe({next:a=>{this.hoteles=a},error:a=>{}}).unsubscribe()}setMonthAndYear(a,c){let m=this.date.value;m.month(a.month()),m.year(a.year()),this.date.setValue(m),this.mes=this.date.value?.month(),this.anio=this.date.value?.year(),c.close()}buscar(){this.selection.clear(),this.hotelesSeleccionados="",console.log(this.toppings);let a=this.toppings.value;this.hotelesSeleccionados=a?a.map(m=>m.idHotel):"",console.log(this.hotelesSeleccionados);let c={mes:this.mes+1,anio:this.anio,hotel:this.hotelesSeleccionados.toString()||""};console.log(c),this._inventario.getInventarioFiltro(c).subscribe({next:m=>{console.log(m),this.dataSource=new j(m)}})}exportData(){var a=this.selection._selected,c=[["EQUIPO","MARCA","Hotel","DESCRIPCI\xD3N","N\xB0 PARTE","URL"]];a.forEach(m=>z(this,null,function*(){for(var p=0;p<m.partes.length;++p){var f=[];f.push(m.equipo),f.push(m.marca),f.push(m.hoteles.nombre),f.push(m.partes[p].descripcion),f.push(m.partes[p].noParte),f.push(m.partes[p].partesImagen?m.partes[p].partesImagen[0].url:""),c.push(f)}var h=[];h.push(""),h.push(""),h.push(""),h.push(""),h.push(""),h.push(""),c.push(h)})),this.exportToCsv("reporte.csv",c)}exportToCsv(a,c){for(var m=function(D){for(var Y="",I=0;I<D.length;I++){var it=D[I]===null||D[I]===void 0?"":D[I].toString();D[I]instanceof Date&&(it=D[I].toLocaleString());var F=it.replace(/"/g,'""');F.search(/("|,|\n)/g)>=0&&(F='"'+F+'"'),I>0&&(Y+=","),Y+=F}return Y+`
`},p="",f=0;f<c.length;f++)p+=m(c[f]);var h=new Blob(["\uFEFF"+p],{type:"text/csv;charset=utf-8;"}),g=document.createElement("a");if(g.download!==void 0){var ae=URL.createObjectURL(h);g.setAttribute("href",ae),g.setAttribute("download",a),g.style.visibility="hidden",document.body.appendChild(g),g.click(),document.body.removeChild(g)}}},t=e;return(()=>{e.\u0275fac=function(c){return new(c||e)}})(),(()=>{e.\u0275cmp=A({type:e,selectors:[["app-lista-inventario"]],features:[rt([{provide:st,useClass:Zt,deps:[Z,Xt]},{provide:Z,useValue:"es-ES"},{provide:dt,useValue:te}])],decls:54,vars:10,consts:[[1,"cardWithShadow"],[1,"p-24"],[1,"d-flex"],[1,"row"],[1,"col"],["matInput","",3,"matDatepicker","formControl"],["matIconSuffix","",3,"for"],["startView","multi-year","panelClass","example-month-picker",3,"monthSelected"],["dp",""],["multiple","",3,"formControl"],["class","example-additional-selection",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["mat-flat-button","","color","primary","matBadgePosition","before","matBadgeColor","accent",3,"click"],["mat-flat-button","","color","primary","matBadgePosition","before","matBadgeColor","accent",1,"m-l-auto",3,"click"],[1,"col-lg-12"],[1,"table-responsive","m-t-16"],["id","table","mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","marca"],["mat-header-cell","","class","f-w-600 mat-subtitle-1 f-s-14",4,"matHeaderCellDef"],["mat-cell","","class","mat-body-1",4,"matCellDef"],["matColumnDef","equipo"],["matColumnDef","locacion"],["matColumnDef","fecha"],["matColumnDef","accion"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"example-additional-selection"],[3,"value"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","",1,"f-w-600","mat-subtitle-1","f-s-14"],["mat-cell","",1,"mat-body-1"],["mat-raised-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(c,m){if(c&1){let p=R();o(0,"mat-card",0)(1,"mat-card-content",1)(2,"div",2)(3,"section")(4,"div",3)(5,"div",4)(6,"mat-form-field")(7,"mat-label"),l(8,"Mes y A\xF1o"),n(),_(9,"input",5)(10,"mat-datepicker-toggle",6),o(11,"mat-datepicker",7,8),E("monthSelected",function(h){w(p);let g=G(12);return L(m.setMonthAndYear(h,g))}),n()()(),o(13,"div",4)(14,"mat-form-field")(15,"mat-label"),l(16,"Hoteles"),n(),o(17,"mat-select",9)(18,"mat-select-trigger"),l(19),s(20,de,2,2,"span",10),n(),s(21,pe,2,2,"mat-option",11),n()()()(),o(22,"div",4)(23,"button",12),E("click",function(){return m.buscar()}),l(24," Buscar "),n(),o(25,"button",13),E("click",function(){return m.exportData()}),l(26," Exportar excel "),n()()()()()(),o(27,"div",14)(28,"mat-card",0)(29,"mat-card-content",1)(30,"mat-card-title"),l(31,"Inventario"),n(),o(32,"div",15)(33,"table",16),S(34,17),s(35,fe,2,3,"th",18),s(36,ue,2,2,"td",19),M(),S(37,20),s(38,ve,2,0,"th",21),s(39,he,2,1,"td",22),M(),S(40,23),s(41,_e,2,0,"th",21),s(42,ge,2,1,"td",22),M(),S(43,24),s(44,Ie,2,0,"th",21),s(45,Ce,2,1,"td",22),M(),S(46,25),s(47,xe,2,0,"th",21),s(48,be,3,3,"td",22),M(),S(49,26),s(50,Se,2,0,"th",18),s(51,Me,3,0,"td",19),M(),s(52,Ee,1,0,"tr",27),s(53,De,1,0,"tr",28),n()()()()()}if(c&2){let p=G(12);r(9),d("matDatepicker",p)("formControl",m.date),r(1),d("for",p),r(7),d("formControl",m.toppings),r(2),C(" ",(m.toppings.value==null||m.toppings.value[0]==null?null:m.toppings.value[0].nombre)||""," "),r(1),d("ngIf",((m.toppings.value==null?null:m.toppings.value.length)||0)>1),r(1),d("ngForOf",m.hoteles),r(12),d("dataSource",m.dataSource),r(19),d("matHeaderRowDef",m.displayedColumns),r(1),d("matRowDefColumns",m.displayedColumns)}},dependencies:[O,N,ft,jt,Wt,Yt,zt,Tt,Et,Dt,Jt,wt,yt,$,q,U,B,At,Ot,Bt,Nt,Pt,$t,Vt,Ht,Ut,qt,ut,vt,ht,V]})})(),t})();function Te(t,e){t&1&&(o(0,"div",15)(1,"button",16),l(2," Ver PDF "),n(),o(3,"button",16),l(4," Descargar PDF "),n()())}function ye(t,e){if(t&1&&(o(0,"mat-card-subtitle",12),l(1),n()),t&2){let i=u(3);r(1),v(i.InformacionInventario.marca)}}function we(t,e){if(t&1&&(o(0,"div",9)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Marca"),n(),s(5,ye,2,1,"mat-card-subtitle",11),n()()()),t&2){let i=u(2);r(5),d("ngIf",i.InformacionInventario)}}function Le(t,e){if(t&1&&(o(0,"div",9)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Equipo"),n(),o(5,"mat-card-subtitle",12),l(6),n()()()()),t&2){let i=u(2);r(6),v(i.InformacionInventario.equipo)}}function Re(t,e){if(t&1&&(o(0,"mat-card-subtitle",12),l(1),n()),t&2){let i=u(2);r(1),v(i.InformacionInventario.hoteles.nombre)}}function Fe(t,e){if(t&1&&(o(0,"div",25)(1,"mat-card",26)(2,"a"),_(3,"img",27),n(),o(4,"mat-list",19)(5,"mat-list-item")(6,"span",20),l(7),T(8,"date"),n()()()()()),t&2){let i=e.$implicit;r(3),K("src",i.url,Q),r(4),v(y(8,2,i.fechaRegistro))}}function ke(t,e){if(t&1&&(o(0,"div",25)(1,"mat-card",26)(2,"a"),_(3,"img",27),n(),o(4,"mat-card-content",28)(5,"button",29),_(6,"i-tabler",30),n(),o(7,"mat-card-title",31),l(8),n(),o(9,"div",32)(10,"div",33)(11,"h6",34),l(12),T(13,"date"),n(),_(14,"span",35),n()()()()()),t&2){let i=e.$implicit;r(3),K("src",i.url,Q),r(5),v(i.title),r(4),v(y(13,3,i.fechaRegistro))}}function Ae(t,e){if(t&1&&(o(0,"div",7),s(1,ke,15,5,"div",22),n()),t&2){let i=u().$implicit;r(1),d("ngForOf",i.partesImagen)}}function Pe(t,e){if(t&1&&(o(0,"section")(1,"div",7)(2,"div",9)(3,"mat-card",17)(4,"mat-card-header")(5,"mat-card-title"),l(6,"Descripci\xF3n "),n()(),o(7,"mat-card-content",18)(8,"mat-list",19)(9,"mat-list-item")(10,"span",20),l(11),n()()()()()(),o(12,"div",9)(13,"mat-card",17)(14,"mat-card-header")(15,"mat-card-title"),l(16,"N\xB0 Parte "),n()(),o(17,"mat-card-content",18)(18,"mat-list",19)(19,"mat-list-item")(20,"span",20),l(21),n()()()()()(),o(22,"div",9)(23,"mat-card",17)(24,"mat-card-header")(25,"mat-card-title"),l(26,"Cantidad "),n()(),o(27,"mat-card-content",18)(28,"mat-list",19)(29,"mat-list-item")(30,"span",20),l(31),n()()()()()()(),o(32,"div",21)(33,"mat-card",17)(34,"mat-card-header")(35,"mat-card-title"),l(36,"Evidencia Fotogr\xE1fica "),n()(),o(37,"mat-card-content",18)(38,"div",7),s(39,Fe,9,4,"div",22),n()()()(),_(40,"hr",23),s(41,Ae,2,1,"div",24),n()),t&2){let i=e.$implicit;r(11),v(i.descripcion),r(10),v(i.noParte),r(10),v(i.cantidad),r(8),d("ngForOf",i.partesImagen),r(2),d("ngIf",!1)}}function Oe(t,e){t&1&&(o(0,"section")(1,"div",9)(2,"mat-card",17)(3,"mat-card-header"),_(4,"mat-card-title"),n(),o(5,"mat-card-content",18)(6,"mat-list",36)(7,"mat-list-item")(8,"span",20),l(9," NO CUENTA CON PARTES DE INVENTARIO "),n()()()()()()())}function Ne(t,e){if(t&1&&(o(0,"div",1,2)(2,"mat-card",3)(3,"mat-card-content",4)(4,"div",5)(5,"mat-card-title"),l(6),n(),s(7,Te,5,0,"div",6),n()()(),o(8,"div",7),s(9,we,6,1,"div",8),s(10,Le,7,1,"div",8),o(11,"div",9)(12,"mat-card",3)(13,"mat-card-content",10)(14,"mat-card-title"),l(15,"Hotel"),n(),s(16,Re,2,1,"mat-card-subtitle",11),n()()(),o(17,"div",9)(18,"mat-card",3)(19,"mat-card-content",10)(20,"mat-card-title"),l(21,"Fecha"),n(),o(22,"mat-card-subtitle",12),l(23),T(24,"date"),n()()()()(),s(25,Pe,42,5,"section",13),s(26,Oe,10,0,"section",14),n()),t&2){let i=u();r(6),C("",i.InformacionInventario.idInventario," Inventario "),r(1),d("ngIf",!1),r(2),d("ngIf",i.InformacionInventario.marca),r(1),d("ngIf",i.InformacionInventario.equipo),r(6),d("ngIf",i.InformacionInventario),r(7),v(y(24,8,i.InformacionInventario.fechaRegistro)),r(2),d("ngForOf",i.InformacionInventario.partes),r(1),d("ngIf",i.InformacionInventario.partes.length<=0)}}var ie=(()=>{let e=class{constructor(){this._inventario=b(W),this.router=b(H)}ngOnInit(){this.getInventarioID()}getInventarioID(){this._inventario.getInventarioID(this.id).subscribe({next:a=>{this.InformacionInventario=a},error:a=>{}})}ngOnDestroy(){this.sub.unsubscribe()}back(){this.router.navigate(["/reportesAlta/lista"])}},t=e;return(()=>{e.\u0275fac=function(c){return new(c||e)}})(),(()=>{e.\u0275cmp=A({type:e,selectors:[["app-detalle-inventario"]],inputs:{id:"id"},decls:1,vars:1,consts:[["id","pdfTable",4,"ngIf"],["id","pdfTable"],["pdfTable",""],[1,"cardWithShadow"],[1,"p-24"],[1,"d-flex","w-100"],["class","m-l-auto",4,"ngIf"],[1,"row"],["class","col",4,"ngIf"],[1,"col"],[2,"text-align","center"],["class","mat-body-1",4,"ngIf"],[1,"mat-body-1"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"m-l-auto"],["mat-flat-button","","color","primary","matBadgePosition","before","matBadgeColor","accent"],[1,"b-1","shadow-none"],[1,"b-t-1"],[2,"max-width","100%"],["matListItemTitle","",1,"f-s-16","f-w-600"],[1,"col-lg-12"],["class","col-sm-6 col-lg-3",4,"ngFor","ngForOf"],[2,"border-color","black"],["class","row",4,"ngIf"],[1,"col-sm-6","col-lg-3"],[1,"cardWithShadow","productcard","overflow-hidden"],["alt","imgSrc","mat-card-image","",1,"w-100",3,"src"],[1,"p-b-24","p-t-12","position-relative"],["mat-mini-fab","","color","primary","matTooltip","Eliminar",1,"icon-30","cart-btn"],["name","trash",1,"icon-16"],[1,"mat-headline-2","f-s-16","m-b-4"],[1,"d-flex","align-items-center","justify-content-between"],[1,"d-flex","align-items-center"],[1,"mat-body-2","f-w-600"],[1,"f-s-14","m-l-4","text-decoration-line-through"],[2,"max-width","100%","text-align","center"]],template:function(c,m){c&1&&s(0,Ne,27,10,"div",0),c&2&&d("ngIf",m.InformacionInventario)},dependencies:[O,N,$,q,Rt,Ft,Lt,U,Ct,xt,It,B,bt,kt,St,V]})})(),t})();var He=[{path:"",children:[{path:"lista",component:ee},{path:"detalle/:id",component:ie}]}],ne=(()=>{let e=class{},t=e;return(()=>{e.\u0275fac=function(c){return new(c||e)}})(),(()=>{e.\u0275mod=P({type:e})})(),(()=>{e.\u0275inj=k({imports:[X.forChild(He),X]})})(),t})();var ki=(()=>{let e=class{},t=e;return(()=>{e.\u0275fac=function(c){return new(c||e)}})(),(()=>{e.\u0275mod=P({type:e})})(),(()=>{e.\u0275inj=k({imports:[lt,ne,Qt,_t,gt,Mt.pick(Gt),pt]})})(),t})();export{ki as InventariosModule};
