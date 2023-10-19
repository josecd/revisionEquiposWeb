import{a as Zt}from"./chunk-LFNT6YBG.js";import{a as Kt,b as Q,c as ae}from"./chunk-XFQ6HXOA.js";import{a as T}from"./chunk-52IOWIGI.js";import{A as Vt,B as qt,C as Ut,D as Yt,E as Ht,F as jt,G as X,H as Qt,I as Wt,J as Jt,U as Gt,a as ft,f as St,g as Rt,i as It,j as Dt,t as wt,u as Lt,v as Ot,w as At,x as Bt,y as Pt,z as Nt}from"./chunk-E43KQPK6.js";import{Ac as vt,B as lt,C as O,D as rt,E as $,F as A,Fa as g,Fc as xt,G as B,Ga as h,Jc as Ct,L as w,La as mt,M as L,Ma as ct,Mc as et,Oa as dt,Pc as gt,T as D,Tc as ht,Uc as Et,Vc as Y,Xa as N,Ya as V,Yc as bt,Z as a,bb as pt,bd as yt,cb as q,da as r,db as st,dd as Tt,ea as Z,eb as _t,fa as m,ga as n,gd as Mt,ha as i,ia as u,id as H,ja as S,jd as j,ka as R,kd as z,ld as Ft,ma as F,na as b,nd as $t,od as kt,pa as d,qc as ut,rd as zt,sa as y,ud as Xt,va as l,vb as U,wa as s,xa as v,xb as tt,ya as P}from"./chunk-OOZXQNER.js";import{a as oe}from"./chunk-UJ7MHGKA.js";import"./chunk-FK6H3RFT.js";import{f as at,g as ot}from"./chunk-SFCFV3AH.js";var ce=at(ae());var J=(()=>{let o=class{constructor(c){this._httpClient=c}getReportes(){return this._httpClient.get(T.API_URL+"/reportes")}getReporteID(c){return this._httpClient.get(T.API_URL+`/reportes/${c}`)}verPDF(c,_){let p;_=="Recorrido"?p=T.API_URL+"/reportes/pdf/view/"+c:_=="Baja"?p=T.API_URL+"/reportes/pdf/view/"+c+"/Baja":_=="Mantenimiento"&&(p=T.API_URL+"/reportes/pdf/view/"+c+"/Mantenimiento"),window.open(p,"_blank")}descargarPDF(c,_){let p=T.API_URL+`/reportes/${c}/pdfReporte/${_}`;window.open(p,"_blank")}hotelesLista(){return this._httpClient.get(T.API_URL+"/hoteles")}reportesFiltro(c){return this._httpClient.post(T.API_URL+"/reportes/filtermobile",c)}reportesFiltroexs(c){return this._httpClient.post(T.API_URL+"/reportes/filterExcel",c)}},t=o;return(()=>{o.\u0275fac=function(_){return new(_||o)(rt(_t))}})(),(()=>{o.\u0275prov=lt({token:o,factory:o.\u0275fac,providedIn:"root"})})(),t})();function de(t,o){if(t&1&&(n(0,"span",31),l(1),i()),t&2){let e=d();a(1),P(" (+",((e.toppings.value==null?null:e.toppings.value.length)||0)-1," ",(e.toppings.value==null?null:e.toppings.value.length)===2?"otro":"otros",") ")}}function pe(t,o){if(t&1&&(n(0,"mat-option",32),l(1),i()),t&2){let e=o.$implicit;m("value",e),a(1),s(e.nombre)}}function se(t,o){t&1&&(n(0,"th",34),l(1," Assigned "),i())}function _e(t,o){if(t&1&&(n(0,"td",35)(1,"div",36)(2,"div",37)(3,"h6",38),l(4),i(),n(5,"span",39),l(6),i()()()()),t&2){let e=o.$implicit;a(4),v(" ",e.uname," "),a(2),v(" ",e.position," ")}}function fe(t,o){t&1&&(n(0,"th",34),l(1," Name "),i())}function ue(t,o){if(t&1&&(n(0,"td",40),l(1),i()),t&2){let e=o.$implicit;a(1),v(" ",e.productName," ")}}function ve(t,o){t&1&&(n(0,"th",34),l(1," Priority "),i())}function xe(t,o){if(t&1&&(n(0,"span",42),l(1),g(2,"titlecase"),i()),t&2){let e=d().$implicit;a(1),v(" ",h(2,1,e.priority)," ")}}function Ce(t,o){if(t&1&&(n(0,"span",43),l(1),g(2,"titlecase"),i()),t&2){let e=d().$implicit;a(1),v(" ",h(2,1,e.priority)," ")}}function ge(t,o){if(t&1&&(n(0,"span",44),l(1),g(2,"titlecase"),i()),t&2){let e=d().$implicit;a(1),v(" ",h(2,1,e.priority)," ")}}function he(t,o){if(t&1&&(n(0,"span",45),l(1),g(2,"titlecase"),i()),t&2){let e=d().$implicit;a(1),v(" ",h(2,1,e.priority)," ")}}function Ee(t,o){if(t&1&&(n(0,"span",46),l(1),g(2,"titlecase"),i()),t&2){let e=d().$implicit;a(1),v(" ",h(2,1,e.priority)," ")}}function Se(t,o){if(t&1&&(n(0,"td",35),r(1,xe,3,3,"ng-template",41),r(2,Ce,3,3,"ng-template",41),r(3,ge,3,3,"ng-template",41),r(4,he,3,3,"ng-template",41),r(5,Ee,3,3,"ng-template",41),i()),t&2){let e=o.$implicit;a(1),m("ngIf",e.priority=="low"),a(1),m("ngIf",e.priority=="medium"),a(1),m("ngIf",e.priority=="high"),a(1),m("ngIf",e.priority=="critical"),a(1),m("ngIf",e.priority=="moderate")}}function Re(t,o){t&1&&(n(0,"th",34),l(1," Budget "),i())}function Ie(t,o){if(t&1&&(n(0,"td",40),l(1),i()),t&2){let e=o.$implicit;a(1),v(" $",e.budget,"k ")}}function De(t,o){t&1&&u(0,"tr",47)}function be(t,o){t&1&&u(0,"tr",48)}function ye(t,o){if(t&1&&(n(0,"div",15)(1,"mat-card",0)(2,"mat-card-content",1)(3,"mat-card-title"),l(4,"Recorridos"),i(),n(5,"div",16)(6,"table",33),S(7,24),r(8,se,2,0,"th",22),r(9,_e,7,2,"td",20),R(),S(10,25),r(11,fe,2,0,"th",22),r(12,ue,2,1,"td",23),R(),S(13,26),r(14,ve,2,0,"th",22),r(15,Se,6,5,"td",20),R(),S(16,27),r(17,Re,2,0,"th",22),r(18,Ie,2,1,"td",23),R(),r(19,De,1,0,"tr",29),r(20,be,1,0,"tr",30),i()()()()()),t&2){let e=d();a(6),m("dataSource",e.dataSource2),a(13),m("matHeaderRowDef",e.displayedColumns),a(1),m("matRowDefColumns",e.displayedColumns)}}function Te(t,o){if(t&1){let e=F();n(0,"th",49)(1,"mat-checkbox",50),b("change",function(_){w(e);let p=d();return L(_?p.toggleAllRows():null)}),i()()}if(t&2){let e=d();a(1),m("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function Me(t,o){if(t&1){let e=F();n(0,"td",35)(1,"mat-checkbox",51),b("click",function(_){return _.stopPropagation()})("change",function(_){let x=w(e).$implicit,E=d();return L(_?E.selection.toggle(x):null)}),i()()}if(t&2){let e=o.$implicit,c=d();a(1),m("checked",c.selection.isSelected(e))("aria-label",c.checkboxLabel(e))}}function we(t,o){t&1&&(n(0,"th",34),l(1," ID "),i())}function Le(t,o){if(t&1&&(n(0,"td",40),l(1),i()),t&2){let e=o.$implicit;a(1),v(" ",e.idReporte," ")}}function Fe(t,o){t&1&&(n(0,"th",34),l(1," Tipo "),i())}function $e(t,o){if(t&1&&(n(0,"td",40),l(1),i()),t&2){let e=o.$implicit;a(1),v(" ",e.tipoReporte," ")}}function ke(t,o){t&1&&(n(0,"th",34),l(1," Descripci\xF3n "),i())}function Oe(t,o){if(t&1&&(n(0,"td",40),l(1),i()),t&2){let e=o.$implicit;a(1),v(" ",e.descripcion," ")}}function Ae(t,o){t&1&&(n(0,"th",34),l(1," Hotel "),i())}function Be(t,o){if(t&1&&(n(0,"td",40),l(1),i()),t&2){let e=o.$implicit;a(1),v(" ",e.hoteles.nombre," ")}}function Pe(t,o){t&1&&(n(0,"th",34),l(1," Fecha "),i())}function Ne(t,o){if(t&1&&(n(0,"td",40),l(1),g(2,"date"),i()),t&2){let e=o.$implicit;a(1),v(" ",h(2,1,e.fechaRegistro)," ")}}function Ve(t,o){t&1&&(n(0,"th",49),l(1," Details "),i())}function qe(t,o){if(t&1){let e=F();n(0,"td",35)(1,"button",52),b("click",function(){let p=w(e).$implicit,x=d();return L(x.getRecord(p))}),l(2,"Ver"),i()()}}function Ue(t,o){t&1&&u(0,"tr",47)}function Ye(t,o){t&1&&u(0,"tr",48)}var it=ce;var te=(()=>{let o=class{constructor(){this.displayedColumns=["select","id","assigned","name","priority","budget","accion"],this.displayedColumnsReporte=["select","usuario","descripcion","hotel","fechaRegistro"],this.selection=new ft(!0,[]),this.dataSource2=new X([]),this.date=new et(it()),this.toppings=new et(""),this.toppingList=["Extra cheese","Mushroom","Onion","Pepperoni","Sausage","Tomato"],this.hoteles=[],this._reporte=$(J),this.router=$(U)}ngOnInit(){this.mes=it().month(),this.anio=it().year(),this.getReportes(),this.getHoteles()}setMonthAndYear(c,_){let p=this.date.value;p.month(c.month()),p.year(c.year()),this.date.setValue(p),this.mes=this.date.value?.month(),this.anio=this.date.value?.year(),_.close()}getReportes(){let c={mes:this.mes+1,anio:this.anio,hotel:""};this._reporte.reportesFiltro(c).subscribe({next:_=>{this.dataSource2=new X(_)},error:_=>{}})}getHoteles(){this._reporte.hotelesLista().subscribe({next:c=>{this.hoteles=c},error:c=>{}})}getRecord(c){this.router.navigate(["/reportes/detalle",c.idReporte])}exportexcel(){let c="ExcelSheet.xlsx",_=document.getElementById("table"),p=Q.table_to_sheet(_),x=Q.book_new();Q.book_append_sheet(x,p,"Sheet1"),Kt(x,c)}exportData(){var c=this.selection._selected,_=[["EQUIPO","MARCA","MODELO","N\xB0 SERIE","\xC1REA","CRITICIDAD","HOTEL","OBSERVACI\xD3N","RECOMENDACIONES","COMENTARIO DE GERENCIA","CR\xCDTICO BAJO","CR\xCDTICO ALTO"]];c.forEach(p=>ot(this,null,function*(){let x=0,E=0;for(var C=0;C<p.observaciones.length;++C){var f=[];x=p.observaciones[C].criticidad=="Bajo"?x+1:x,E=p.observaciones[C].criticidad=="Alto"?E+1:E,f.push(p.observaciones[C].equipo),f.push(p.observaciones[C].marca),f.push(p.observaciones[C].modelo),f.push(p.observaciones[C].numeroSerie),f.push(p.observaciones[C].area),f.push(p.observaciones[C].criticidad),f.push(p.hoteles.nombre),f.push(p.observaciones[C].observacion),f.push(p.observaciones[C].comentarios.map(I=>I.comentario+"/").toString()),f.push(""),_.push(f)}var f=[];f.push(""),f.push(""),f.push(""),f.push(""),f.push(""),f.push(""),f.push(),f.push(""),f.push(""),f.push(""),f.push(p.recomendaciones),f.push(x),f.push(E),_.push(f)})),this.exportToCsv("reporte.csv",_)}exportToCsv(c,_){for(var p=function(I){for(var K="",M=0;M<I.length;M++){var nt=I[M]===null||I[M]===void 0?"":I[M].toString();I[M]instanceof Date&&(nt=I[M].toLocaleString());var k=nt.replace(/"/g,'""');k.search(/("|,|\n)/g)>=0&&(k='"'+k+'"'),M>0&&(K+=","),K+=k}return K+`
`},x="",E=0;E<_.length;E++)x+=p(_[E]);var C=new Blob(["\uFEFF"+x],{type:"text/csv;charset=utf-8;"}),f=document.createElement("a");if(f.download!==void 0){var G=URL.createObjectURL(C);f.setAttribute("href",G),f.setAttribute("download",c),f.style.visibility="hidden",document.body.appendChild(f),f.click(),document.body.removeChild(f)}}isAllSelected(){let c=this.selection.selected.length,_=this.dataSource2.data.length;return c===_}toggleAllRows(){if(this.isAllSelected()){this.selection.clear();return}this.selection.select(...this.dataSource2.data)}checkboxLabel(c){return c?`${this.selection.isSelected(c)?"deselect":"select"} row ${c.position+1}`:`${this.isAllSelected()?"deselect":"select"} all`}applyFilter(c){let _=c.target.value;this.dataSource2.filter=_.trim().toLowerCase()}buscar(){this.selection.clear(),this.hotelesSeleccionados="";let c=this.toppings.value;this.hotelesSeleccionados=c?c.map(p=>p.idHotel):"";let _={mes:this.mes+1,anio:this.anio,hotel:this.hotelesSeleccionados.toString()||""};this._reporte.reportesFiltro(_).subscribe({next:p=>{this.dataSource2=new X(p)}})}},t=o;return(()=>{o.\u0275fac=function(_){return new(_||o)}})(),(()=>{o.\u0275cmp=A({type:o,selectors:[["app-lista-reportes"]],decls:59,vars:11,consts:[[1,"cardWithShadow"],[1,"p-24"],[1,"d-flex","w-100"],[1,"row"],[1,"col"],["matInput","",3,"matDatepicker","formControl"],["matIconSuffix","",3,"for"],["startView","multi-year","panelClass","example-month-picker",3,"monthSelected"],["dp",""],["multiple","",3,"formControl"],["class","example-additional-selection",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["mat-flat-button","","color","primary","matBadgePosition","before","matBadgeColor","accent",3,"click"],["mat-flat-button","","color","primary","matBadgePosition","before","matBadgeColor","accent",1,"m-l-auto",3,"click"],["class","col-lg-12",4,"ngIf"],[1,"col-lg-12"],[1,"table-responsive","m-t-16"],["id","table","mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","class","f-w-600 mat-subtitle-1 f-s-14",4,"matHeaderCellDef"],["mat-cell","","class","mat-body-1",4,"matCellDef"],["matColumnDef","assigned"],["matColumnDef","name"],["matColumnDef","priority"],["matColumnDef","budget"],["matColumnDef","accion"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"example-additional-selection"],[3,"value"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["mat-header-cell","",1,"f-w-600","mat-subtitle-1","f-s-14"],["mat-cell",""],[1,"d-flex","align-items-center"],[1,"m-l-16"],[1,"mat-subtitle-1","f-s-14","f-w-600"],[1,"mat-body-1","f-s-12"],["mat-cell","",1,"mat-body-1"],[3,"ngIf"],[1,"bg-light-accent","text-accent","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],["mat-header-row",""],["mat-row",""],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],[3,"checked","aria-label","click","change"],["mat-raised-button","","color","primary",3,"click"]],template:function(_,p){if(_&1){let x=F();u(0,"section"),n(1,"mat-card",0)(2,"mat-card-content",1)(3,"div",2)(4,"section")(5,"div",3)(6,"div",4)(7,"mat-form-field")(8,"mat-label"),l(9,"Mes y A\xF1o"),i(),u(10,"input",5)(11,"mat-datepicker-toggle",6),n(12,"mat-datepicker",7,8),b("monthSelected",function(C){w(x);let f=Z(13);return L(p.setMonthAndYear(C,f))}),i()()(),n(14,"div",4)(15,"mat-form-field")(16,"mat-label"),l(17,"Hoteles"),i(),n(18,"mat-select",9)(19,"mat-select-trigger"),l(20),r(21,de,2,2,"span",10),i(),r(22,pe,2,2,"mat-option",11),i()()()(),n(23,"div",4)(24,"button",12),b("click",function(){return p.buscar()}),l(25," Buscar "),i(),n(26,"button",13),b("click",function(){return p.exportData()}),l(27," Exportar excel "),i()()()()()(),r(28,ye,21,3,"div",14),n(29,"div",15)(30,"mat-card",0)(31,"mat-card-content",1)(32,"mat-card-title"),l(33,"Recorridos"),i(),n(34,"div",16)(35,"table",17),S(36,18),r(37,Te,2,3,"th",19),r(38,Me,2,2,"td",20),R(),S(39,21),r(40,we,2,0,"th",22),r(41,Le,2,1,"td",23),R(),S(42,24),r(43,Fe,2,0,"th",22),r(44,$e,2,1,"td",23),R(),S(45,25),r(46,ke,2,0,"th",22),r(47,Oe,2,1,"td",23),R(),S(48,26),r(49,Ae,2,0,"th",22),r(50,Be,2,1,"td",23),R(),S(51,27),r(52,Pe,2,0,"th",22),r(53,Ne,3,3,"td",23),R(),S(54,28),r(55,Ve,2,0,"th",19),r(56,qe,3,0,"td",20),R(),r(57,Ue,1,0,"tr",29),r(58,Ye,1,0,"tr",30),i()()()()()}if(_&2){let x=Z(13);a(10),m("matDatepicker",x)("formControl",p.date),a(1),m("for",x),a(7),m("formControl",p.toppings),a(2),v(" ",(p.toppings.value==null||p.toppings.value[0]==null?null:p.toppings.value[0].nombre)||""," "),a(1),m("ngIf",((p.toppings.value==null?null:p.toppings.value.length)||0)>1),a(1),m("ngForOf",p.hoteles),a(6),m("ngIf",!1),a(7),m("dataSource",p.dataSource2),a(22),m("matHeaderRowDef",p.displayedColumns),a(1),m("matRowDefColumns",p.displayedColumns)}},dependencies:[N,V,vt,zt,Qt,Wt,Jt,Mt,yt,Tt,Xt,Lt,wt,H,z,j,Y,At,Pt,Ut,Nt,Bt,Yt,Vt,qt,Ht,jt,xt,Ct,gt,pt,q]})})(),t})();var ee=at(oe());var He=["pdfTable"];function je(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2);a(1),s(e.informacionData.hoteles[0].nombre)}}function ze(t,o){if(t&1&&(n(0,"div",29),l(1),i()),t&2){let e=d().$implicit;a(1),s(e.criticidad)}}function Xe(t,o){if(t&1&&(n(0,"div",9),l(1),i()),t&2){let e=d().$implicit;a(1),s(e.criticidad)}}function Qe(t,o){if(t&1&&(n(0,"mat-list-item")(1,"span",24),l(2),i(),n(3,"span",30),l(4),i()()),t&2){let e=o.$implicit;a(2),s(e.comentario),a(2),s(e.dateString)}}function We(t,o){if(t&1&&(n(0,"div",31)(1,"mat-card",32)(2,"a"),u(3,"img",33),i(),n(4,"mat-list",22)(5,"mat-list-item")(6,"span",24),l(7),g(8,"date"),i()()()()()),t&2){let e=o.$implicit;a(3),y("src",e.url,D),a(4),s(h(8,2,e.fechaRegistro))}}function Je(t,o){if(t&1&&(n(0,"div",31)(1,"mat-card",32)(2,"a"),u(3,"img",33),i(),n(4,"mat-list",22)(5,"mat-list-item",10)(6,"span",24),l(7),i(),n(8,"span",30),l(9),i(),n(10,"span",30),l(11),g(12,"date"),i()()()()()),t&2){let e=o.$implicit;a(3),y("src",e.url,D),a(4),s(e.tipo),a(2),s(e.nombreFirma),a(2),s(h(12,4,e.fechaRegistro))}}function Ge(t,o){if(t&1&&(n(0,"div",19)(1,"mat-card",20)(2,"mat-card-header")(3,"mat-card-title"),l(4,"Firmas "),i()(),n(5,"mat-card-content",21)(6,"div",8),r(7,Je,13,6,"div",25),i()()()()),t&2){let e=d(4);a(7),m("ngForOf",e.informacionData.firmas)}}function Ke(t,o){if(t&1&&(n(0,"div",31)(1,"mat-card",32)(2,"a"),u(3,"img",33),i(),n(4,"mat-card-content",34),u(5,"button",35),n(6,"mat-card-title",36),l(7),i(),n(8,"div",37)(9,"div",38)(10,"h6",39),l(11),g(12,"date"),i(),u(13,"span",40),i()()()()()),t&2){let e=o.$implicit;a(3),y("src",e.url,D),a(4),s(e.title),a(4),s(h(12,3,e.fechaRegistro))}}function Ze(t,o){if(t&1&&(n(0,"div",8),r(1,Ke,14,5,"div",25),i()),t&2){let e=d().$implicit;a(1),m("ngForOf",e.imagenes)}}function ti(t,o){if(t&1&&(n(0,"section")(1,"mat-card",15)(2,"div",16)(3,"div",9),l(4,"ITEM"),i(),n(5,"div",9),l(6,"EQUIPO"),i(),n(7,"div",9),l(8,"MARCA"),i(),n(9,"div",9),l(10,"MODELO"),i(),n(11,"div",9),l(12,"N\xB0 DE SERIE"),i(),n(13,"div",9),l(14,"\xC1REA"),i(),n(15,"div",9),l(16,"Criticidad"),i()(),n(17,"div",16)(18,"div",9),l(19),i(),n(20,"div",9),l(21),i(),n(22,"div",9),l(23),i(),n(24,"div",9),l(25),i(),n(26,"div",9),l(27),i(),n(28,"div",9),l(29),i(),r(30,ze,2,1,"div",17),r(31,Xe,2,1,"div",18),i()(),n(32,"div",19)(33,"mat-card",20)(34,"mat-card-header")(35,"mat-card-title"),l(36,"Observaciones "),i()(),n(37,"mat-card-content",21)(38,"mat-list",22)(39,"mat-list-item",23),u(40,"span",24),n(41,"span",12),l(42),i()()()()()(),n(43,"div",19)(44,"mat-card",20)(45,"mat-card-header")(46,"mat-card-title"),l(47,"Recomendaciones "),i()(),n(48,"mat-card-content",21)(49,"mat-list",22),r(50,Qe,5,2,"mat-list-item",14),i()()()(),n(51,"div",19)(52,"mat-card",20)(53,"mat-card-header")(54,"mat-card-title"),l(55,"Evidencia Fotogr\xE1fica "),i()(),n(56,"mat-card-content",21)(57,"div",8),r(58,We,9,4,"div",25),i()()()(),n(59,"div",19)(60,"mat-card",20)(61,"mat-card-header")(62,"mat-card-title"),l(63,"Comentario "),i()(),n(64,"mat-card-content",21)(65,"mat-list",22)(66,"mat-list-item")(67,"span",24),l(68),i()()()()()(),r(69,Ge,8,1,"div",26),u(70,"hr",27),r(71,Ze,2,1,"div",28),i()),t&2){let e=o.$implicit,c=d(3);a(19),s(e.identificador),a(2),s(e.equipo),a(2),s(e.marca),a(2),s(e.modelo),a(2),s(e.numeroSerie),a(2),s(e.area),a(1),m("ngIf",e.criticidad=="Alto"),a(1),m("ngIf",e.criticidad=="Bajo"),a(11),v(" ",e.observacion," "),a(8),m("ngForOf",e.comentarios),a(8),m("ngForOf",e.imagenes),a(10),v(" ",c.informacionData.recomendaciones||"No tiene comentarios"," "),a(1),m("ngIf",!1),a(2),m("ngIf",!1)}}function ei(t,o){if(t&1&&(n(0,"section"),r(1,ti,72,14,"section",14),i()),t&2){let e=d(2);a(1),m("ngForOf",e.informacionData.observaciones)}}function ii(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.identificador)}}function ni(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"\xCDtem"),i(),r(5,ii,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function ai(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(3).$implicit;a(1),s(e==null?null:e.adquisicionEquipo)}}function oi(t,o){if(t&1&&(n(0,"div",9)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Adquisicion Equipo"),i(),r(5,ai,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(5);a(5),m("ngIf",e.informacionData)}}function li(t,o){if(t&1&&(n(0,"div",44),r(1,oi,6,1,"div",18),i()),t&2){let e=d().$implicit;a(1),m("ngIf",e==null?null:e.adquisicionEquipo)}}function ri(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.ubicacion)}}function mi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Ubicaci\xF3n"),i(),r(5,ri,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function ci(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.equipo)}}function di(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Equipo"),i(),r(5,ci,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function pi(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.oc)}}function si(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"OC"),i(),r(5,pi,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function _i(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.sapID)}}function fi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"SAP-ID"),i(),r(5,_i,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function ui(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.marca)}}function vi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Marca"),i(),r(5,ui,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function xi(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.modelo)}}function Ci(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Modelo"),i(),r(5,xi,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function gi(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.numeroSerie)}}function hi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"N\xFAmero Serie"),i(),r(5,gi,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function Ei(t,o){if(t&1&&(n(0,"mat-list-item")(1,"span",24),l(2),i(),n(3,"span",30),l(4),i()()),t&2){let e=o.$implicit;a(2),s(e.comentario),a(2),s(e.dateString)}}function Si(t,o){if(t&1&&(n(0,"mat-card-content",21)(1,"mat-list",22),r(2,Ei,5,2,"mat-list-item",14),i()()),t&2){let e=d().$implicit;a(2),m("ngForOf",e.comentarios)}}function Ri(t,o){t&1&&(n(0,"mat-list",22)(1,"mat-list-item",23),u(2,"span",24),n(3,"span",12),l(4," No tiene recomendaciones "),i()()())}function Ii(t,o){if(t&1&&(n(0,"div",31)(1,"mat-card",32)(2,"a"),u(3,"img",33),i(),n(4,"mat-list",22)(5,"mat-list-item")(6,"span",24),l(7),g(8,"date"),i()()()()()),t&2){let e=o.$implicit;a(3),y("src",e.url,D),a(4),s(h(8,2,e.fechaRegistro))}}function Di(t,o){if(t&1&&(n(0,"div",31)(1,"mat-card",32)(2,"a"),u(3,"img",33),i(),n(4,"mat-list",22)(5,"mat-list-item",10)(6,"span",24),l(7),i(),n(8,"span",30),l(9),i(),n(10,"span",30),l(11),g(12,"date"),i()()()()()),t&2){let e=o.$implicit;a(3),y("src",e.url,D),a(4),s(e.tipo),a(2),s(e.nombreFirma),a(2),s(h(12,4,e.fechaRegistro))}}function bi(t,o){if(t&1&&(n(0,"div",19)(1,"mat-card",20)(2,"mat-card-header")(3,"mat-card-title"),l(4,"Firmas "),i()(),n(5,"mat-card-content",21)(6,"div",8),r(7,Di,13,6,"div",25),i()()()()),t&2){let e=d(4);a(7),m("ngForOf",e.informacionData.firmas)}}function yi(t,o){if(t&1&&(n(0,"div",31)(1,"mat-card",32)(2,"a"),u(3,"img",33),i(),n(4,"mat-card-content",34),u(5,"button",35),n(6,"mat-card-title",36),l(7),i(),n(8,"div",37)(9,"div",38)(10,"h6",39),l(11),g(12,"date"),i(),u(13,"span",40),i()()()()()),t&2){let e=o.$implicit;a(3),y("src",e.url,D),a(4),s(e.title),a(4),s(h(12,3,e.fechaRegistro))}}function Ti(t,o){if(t&1&&(n(0,"div",8),r(1,yi,14,5,"div",25),i()),t&2){let e=d().$implicit;a(1),m("ngForOf",e.imagenes)}}function Mi(t,o){if(t&1&&(n(0,"section")(1,"div",8),r(2,ni,6,1,"div",41),r(3,li,2,1,"div",41),r(4,mi,6,1,"div",41),r(5,di,6,1,"div",41),r(6,si,6,1,"div",41),r(7,fi,6,1,"div",41),r(8,vi,6,1,"div",41),r(9,Ci,6,1,"div",41),r(10,hi,6,1,"div",41),i(),n(11,"div",19)(12,"mat-card",20)(13,"mat-card-header")(14,"mat-card-title"),l(15,"Diagn\xF3stico T\xE9cnico "),i()(),n(16,"mat-card-content",21)(17,"mat-list",22)(18,"mat-list-item",23),u(19,"span",24),n(20,"span",12),l(21),i()()()()()(),n(22,"div",19)(23,"mat-card",20)(24,"mat-card-header")(25,"mat-card-title"),l(26,"Motivo Da\xF1o "),i()(),n(27,"mat-card-content",21)(28,"mat-list",22)(29,"mat-list-item",23),u(30,"span",24),n(31,"span",12),l(32),i()()()()()(),n(33,"div",19)(34,"mat-card",20)(35,"mat-card-header")(36,"mat-card-title"),l(37,"Observaciones "),i()(),n(38,"mat-card-content",21)(39,"mat-list",22)(40,"mat-list-item",23),u(41,"span",24),n(42,"span",12),l(43),i()()()()()(),n(44,"div",19)(45,"mat-card",20)(46,"mat-card-header")(47,"mat-card-title"),l(48,"Recomendaciones "),i()(),r(49,Si,3,1,"mat-card-content",42),r(50,Ri,5,0,"mat-list",43),i()(),n(51,"div",19)(52,"mat-card",20)(53,"mat-card-header")(54,"mat-card-title"),l(55,"Evidencia Fotogr\xE1fica "),i()(),n(56,"mat-card-content",21)(57,"div",8),r(58,Ii,9,4,"div",25),i()()()(),n(59,"div",19)(60,"mat-card",20)(61,"mat-card-header")(62,"mat-card-title"),l(63,"Comentario "),i()(),n(64,"mat-card-content",21)(65,"mat-list",22)(66,"mat-list-item")(67,"span",24),l(68),i()()()()()(),r(69,bi,8,1,"div",26),u(70,"hr",27),r(71,Ti,2,1,"div",28),i()),t&2){let e=o.$implicit,c=d(3);a(2),m("ngIf",!1),a(1),m("ngIf",e==null?null:e.adquisicionEquipo),a(1),m("ngIf",e==null?null:e.ubicacion),a(1),m("ngIf",e==null?null:e.ubicacion),a(1),m("ngIf",e==null?null:e.oc),a(1),m("ngIf",e==null?null:e.sapID),a(1),m("ngIf",e==null?null:e.marca),a(1),m("ngIf",e==null?null:e.modelo),a(1),m("ngIf",e==null?null:e.numeroSerie),a(11),v(" ",e==null?null:e.diagnosticoTecnico," "),a(11),v(" ",e==null?null:e.motivoDanio," "),a(11),v(" ",e.observacion||"No tiene observacion"," "),a(6),m("ngIf",e.comentarios.length>0),a(1),m("ngIf",e.comentarios.length<=0),a(8),m("ngForOf",e.imagenes),a(10),v(" ",c.informacionData.recomendaciones||"No tiene comentarios"," "),a(1),m("ngIf",!1),a(2),m("ngIf",!1)}}function wi(t,o){if(t&1&&(n(0,"section"),r(1,Mi,72,18,"section",14),i()),t&2){let e=d(2);a(1),m("ngForOf",e.informacionData.observaciones)}}function Li(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.identificador)}}function Fi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"\xCDtem"),i(),r(5,Li,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function $i(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(3).$implicit;a(1),s(e==null?null:e.adquisicionEquipo)}}function ki(t,o){if(t&1&&(n(0,"div",9)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Adquisicion Equipo"),i(),r(5,$i,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(5);a(5),m("ngIf",e.informacionData)}}function Oi(t,o){if(t&1&&(n(0,"div",44),r(1,ki,6,1,"div",18),i()),t&2){let e=d().$implicit;a(1),m("ngIf",e==null?null:e.adquisicionEquipo)}}function Ai(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.ubicacion)}}function Bi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Ubicaci\xF3n"),i(),r(5,Ai,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function Pi(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.equipo)}}function Ni(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Equipo"),i(),r(5,Pi,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function Vi(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.oc)}}function qi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"OC"),i(),r(5,Vi,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function Ui(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.sapID)}}function Yi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"SAP-ID"),i(),r(5,Ui,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function Hi(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.marca)}}function ji(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Marca"),i(),r(5,Hi,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function zi(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.modelo)}}function Xi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Modelo"),i(),r(5,zi,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function Qi(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.numeroSerie)}}function Wi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"N\xFAmero Serie"),i(),r(5,Qi,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function Ji(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.tecEsp)}}function Gi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"T\xE9cnico especialista"),i(),r(5,Ji,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function Ki(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.fechaInicio)}}function Zi(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Inicia"),i(),r(5,Ki,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function tn(t,o){if(t&1&&(n(0,"mat-card-subtitle",12),l(1),i()),t&2){let e=d(2).$implicit;a(1),s(e==null?null:e.fechaFinaliza)}}function en(t,o){if(t&1&&(n(0,"div",44)(1,"mat-card",3)(2,"mat-card-content",10)(3,"mat-card-title"),l(4,"Finaliza"),i(),r(5,tn,2,1,"mat-card-subtitle",11),i()()()),t&2){let e=d(4);a(5),m("ngIf",e.informacionData)}}function nn(t,o){if(t&1&&(n(0,"div",19)(1,"mat-card",20)(2,"mat-card-header")(3,"mat-card-title"),l(4,"Fallas detectadas durante el servicio "),i()(),n(5,"mat-card-content",21)(6,"mat-list",22)(7,"mat-list-item",23),u(8,"span",24),n(9,"span",12),l(10),i()()()()()()),t&2){let e=d().$implicit;a(10),v(" ",e==null?null:e.fallaDetectadaDuraSer," ")}}function an(t,o){if(t&1&&(n(0,"div",19)(1,"mat-card",20)(2,"mat-card-header")(3,"mat-card-title"),l(4,"Comentario a la entrega del equipo "),i()(),n(5,"mat-card-content",21)(6,"mat-list",22)(7,"mat-list-item",23),u(8,"span",24),n(9,"span",12),l(10),i()()()()()()),t&2){let e=d().$implicit;a(10),v(" ",e==null?null:e.comentariosEntregaEquip," ")}}function on(t,o){if(t&1&&(n(0,"mat-list-item")(1,"span",24),l(2),i(),n(3,"span",30),l(4),i()()),t&2){let e=o.$implicit;a(2),s(e.comentario),a(2),s(e.dateString)}}function ln(t,o){if(t&1&&(n(0,"mat-card-content",21)(1,"mat-list",22),r(2,on,5,2,"mat-list-item",14),i()()),t&2){let e=d().$implicit;a(2),m("ngForOf",e.comentarios)}}function rn(t,o){t&1&&(n(0,"mat-list",22)(1,"mat-list-item",23),u(2,"span",24),n(3,"span",12),l(4," No tiene recomendaciones "),i()()())}function mn(t,o){if(t&1&&(n(0,"div",31)(1,"mat-card",32)(2,"a"),u(3,"img",33),i(),n(4,"mat-list",22)(5,"mat-list-item")(6,"span",24),l(7),g(8,"date"),i()()()()()),t&2){let e=o.$implicit;a(3),y("src",e.url,D),a(4),s(h(8,2,e.fechaRegistro))}}function cn(t,o){if(t&1&&(n(0,"div",31)(1,"mat-card",32)(2,"a"),u(3,"img",33),i(),n(4,"mat-list",22)(5,"mat-list-item",10)(6,"span",24),l(7),i(),n(8,"span",30),l(9),i(),n(10,"span",30),l(11),g(12,"date"),i()()()()()),t&2){let e=o.$implicit;a(3),y("src",e.url,D),a(4),s(e.tipo),a(2),s(e.nombreFirma),a(2),s(h(12,4,e.fechaRegistro))}}function dn(t,o){if(t&1&&(n(0,"div",19)(1,"mat-card",20)(2,"mat-card-header")(3,"mat-card-title"),l(4,"Firmas "),i()(),n(5,"mat-card-content",21)(6,"div",8),r(7,cn,13,6,"div",25),i()()()()),t&2){let e=d(4);a(7),m("ngForOf",e.informacionData.firmas)}}function pn(t,o){if(t&1&&(n(0,"div",31)(1,"mat-card",32)(2,"a"),u(3,"img",33),i(),n(4,"mat-card-content",34),u(5,"button",35),n(6,"mat-card-title",36),l(7),i(),n(8,"div",37)(9,"div",38)(10,"h6",39),l(11),g(12,"date"),i(),u(13,"span",40),i()()()()()),t&2){let e=o.$implicit;a(3),y("src",e.url,D),a(4),s(e.title),a(4),s(h(12,3,e.fechaRegistro))}}function sn(t,o){if(t&1&&(n(0,"div",8),r(1,pn,14,5,"div",25),i()),t&2){let e=d().$implicit;a(1),m("ngForOf",e.imagenes)}}function _n(t,o){if(t&1&&(n(0,"section")(1,"div",8),r(2,Fi,6,1,"div",41),r(3,Oi,2,1,"div",41),r(4,Bi,6,1,"div",41),r(5,Ni,6,1,"div",41),r(6,qi,6,1,"div",41),r(7,Yi,6,1,"div",41),r(8,ji,6,1,"div",41),r(9,Xi,6,1,"div",41),r(10,Wi,6,1,"div",41),r(11,Gi,6,1,"div",41),r(12,Zi,6,1,"div",41),r(13,en,6,1,"div",41),i(),n(14,"div",19)(15,"mat-card",20)(16,"mat-card-header")(17,"mat-card-title"),l(18,"Diagn\xF3stico T\xE9cnico "),i()(),n(19,"mat-card-content",21)(20,"mat-list",22)(21,"mat-list-item",23),u(22,"span",24),n(23,"span",12),l(24),i()()()()()(),r(25,nn,11,1,"div",26),r(26,an,11,1,"div",26),n(27,"div",19)(28,"mat-card",20)(29,"mat-card-header")(30,"mat-card-title"),l(31,"Observaciones "),i()(),n(32,"mat-card-content",21)(33,"mat-list",22)(34,"mat-list-item",23),u(35,"span",24),n(36,"span",12),l(37),i()()()()()(),n(38,"div",19)(39,"mat-card",20)(40,"mat-card-header")(41,"mat-card-title"),l(42,"Recomendaciones "),i()(),r(43,ln,3,1,"mat-card-content",42),r(44,rn,5,0,"mat-list",43),i()(),n(45,"div",19)(46,"mat-card",20)(47,"mat-card-header")(48,"mat-card-title"),l(49,"Evidencia Fotogr\xE1fica "),i()(),n(50,"mat-card-content",21)(51,"div",8),r(52,mn,9,4,"div",25),i()()()(),n(53,"div",19)(54,"mat-card",20)(55,"mat-card-header")(56,"mat-card-title"),l(57,"Comentario "),i()(),n(58,"mat-card-content",21)(59,"mat-list",22)(60,"mat-list-item")(61,"span",24),l(62),i()()()()()(),r(63,dn,8,1,"div",26),u(64,"hr",27),r(65,sn,2,1,"div",28),i()),t&2){let e=o.$implicit,c=d(3);a(2),m("ngIf",!1),a(1),m("ngIf",e==null?null:e.adquisicionEquipo),a(1),m("ngIf",e==null?null:e.ubicacion),a(1),m("ngIf",e==null?null:e.ubicacion),a(1),m("ngIf",e==null?null:e.oc),a(1),m("ngIf",e==null?null:e.sapID),a(1),m("ngIf",e==null?null:e.marca),a(1),m("ngIf",e==null?null:e.modelo),a(1),m("ngIf",e==null?null:e.numeroSerie),a(1),m("ngIf",e==null?null:e.tecEsp),a(1),m("ngIf",e==null?null:e.fechaInicio),a(1),m("ngIf",e==null?null:e.fechaFinaliza),a(11),v(" ",e==null?null:e.diagnosticoTecnico," "),a(1),m("ngIf",e==null?null:e.fallaDetectadaDuraSer),a(1),m("ngIf",e==null?null:e.comentariosEntregaEquip),a(11),v(" ",e.observacion||"No tiene observacion"," "),a(6),m("ngIf",e.comentarios.length>0),a(1),m("ngIf",e.comentarios.length<=0),a(8),m("ngForOf",e.imagenes),a(10),v(" ",c.informacionData.recomendaciones||"No tiene comentarios"," "),a(1),m("ngIf",!1),a(2),m("ngIf",!1)}}function fn(t,o){if(t&1&&(n(0,"section"),r(1,_n,66,22,"section",14),i()),t&2){let e=d(2);a(1),m("ngForOf",e.informacionData.observaciones)}}function un(t,o){if(t&1){let e=F();n(0,"div",1,2)(2,"mat-card",3)(3,"mat-card-content",4)(4,"div",5)(5,"mat-card-title"),l(6),i(),n(7,"div",6)(8,"button",7),b("click",function(){w(e);let _=d();return L(_.verPDF())}),l(9," Ver PDF "),i(),n(10,"button",7),b("click",function(){w(e);let _=d();return L(_.descargarPDF())}),l(11," Descargar PDF "),i()()()()(),n(12,"div",8)(13,"div",9)(14,"mat-card",3)(15,"mat-card-content",10)(16,"mat-card-title"),l(17,"Hotel"),i(),r(18,je,2,1,"mat-card-subtitle",11),i()()(),n(19,"div",9)(20,"mat-card",3)(21,"mat-card-content",10)(22,"mat-card-title"),l(23,"Fecha"),i(),n(24,"mat-card-subtitle",12),l(25),g(26,"date"),i()()()()(),r(27,ei,2,1,"section",13),r(28,wi,2,1,"section",13),r(29,fn,2,1,"section",13),i()}if(t&2){let e=d();a(6),P("",e.informacionData.idReporte," Reporte- ",e.informacionData.tipoReporte,""),a(12),m("ngIf",e.informacionData),a(7),s(h(26,7,e.informacionData.fechaRegistro)),a(2),m("ngIf",e.informacionData.tipoReporte=="Recorrido"||!e.informacionData.tipoReporte),a(1),m("ngIf",e.informacionData.tipoReporte=="Baja"),a(1),m("ngIf",e.informacionData.tipoReporte=="Mantenimiento Preventivo"||e.informacionData.tipoReporte=="Mantenimiento Correctivo")}}var ie=(()=>{let o=class{constructor(){this.displayedColumns=["assigned","name","priority","budget"],this.typesOfShoes=["Loafers","Sneakers"],this.folders=[{name:"Photos",updated:new Date("1/1/16")},{name:"Recipes",updated:new Date("1/17/16")},{name:"Work",updated:new Date("1/28/16")}],this.notes=[{name:"Vacation Itinerary",updated:new Date("2/20/16")},{name:"Kitchen Remodel",updated:new Date("1/18/16")}],this._reporte=$(J),this.router=$(U)}ngOnInit(){this.getReportes()}getReportes(){this._reporte.getReporteID(this.id).subscribe({next:c=>{this.informacionData=c[0],console.log(c)},error:c=>{}})}back(){this.router.navigate(["/reportesAlta/lista"])}pdf(){let c=new Zt("p","mm","a4"),_=document.getElementById("pdfTable");(0,ee.default)(_).then(p=>{var x=208,E=295,C=p.height*x/p.width,f=C;let G=p.toDataURL("image/png");var I=0;c.addImage(G,"PNG",0,I,x,C),c.save("MYPdf.pdf")})}descargarPDF(){let c="";this.informacionData.tipoReporte=="Recorrido"||!this.informacionData.tipoReporte?c="Recorrido":this.informacionData.tipoReporte=="Baja"?c="Baja":(this.informacionData.tipoReporte=="Mantenimiento Preventivo"||this.informacionData.tipoReporte=="Mantenimiento Correctivo")&&(c="Mantenimiento"),this._reporte.descargarPDF(this.id,c)}verPDF(){let c="";this.informacionData.tipoReporte=="Recorrido"||!this.informacionData.tipoReporte?c="Recorrido":this.informacionData.tipoReporte=="Baja"?c="Baja":(this.informacionData.tipoReporte=="Mantenimiento Preventivo"||this.informacionData.tipoReporte=="Mantenimiento Correctivo")&&(c="Mantenimiento"),this._reporte.verPDF(this.id,c)}},t=o;return(()=>{o.\u0275fac=function(_){return new(_||o)}})(),(()=>{o.\u0275cmp=A({type:o,selectors:[["app-detalle-reportes"]],viewQuery:function(_,p){if(_&1&&ct(He,5),_&2){let x;mt(x=dt())&&(p.el=x.first)}},inputs:{id:"id"},decls:1,vars:1,consts:[["id","pdfTable",4,"ngIf"],["id","pdfTable"],["pdfTable",""],[1,"cardWithShadow"],[1,"p-24"],[1,"d-flex","w-100"],[1,"m-l-auto"],["mat-flat-button","","color","primary","matBadgePosition","before","matBadgeColor","accent",3,"click"],[1,"row"],[1,"col"],[2,"text-align","center"],["class","mat-body-1",4,"ngIf"],[1,"mat-body-1"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"cardWithShadow","theme-card"],[1,"row",2,"text-align","center"],["class","col","style","color: red;",4,"ngIf"],["class","col",4,"ngIf"],[1,"col-lg-12"],[1,"b-1","shadow-none"],[1,"b-t-1"],[2,"max-width","100%"],["lines","3"],["matListItemTitle","",1,"f-s-16","f-w-600"],["class","col-sm-6 col-lg-3",4,"ngFor","ngForOf"],["class","col-lg-12",4,"ngIf"],[2,"border-color","black"],["class","row",4,"ngIf"],[1,"col",2,"color","red"],["matListItemLine","",1,"mat-body-1"],[1,"col-sm-6","col-lg-3"],[1,"cardWithShadow","productcard","overflow-hidden"],["alt","imgSrc","mat-card-image","",1,"w-100",3,"src"],[1,"p-b-24","p-t-12","position-relative"],["mat-mini-fab","","color","primary","matTooltip","Eliminar",1,"icon-30","cart-btn"],[1,"mat-headline-2","f-s-16","m-b-4"],[1,"d-flex","align-items-center","justify-content-between"],[1,"d-flex","align-items-center"],[1,"mat-body-2","f-w-600"],[1,"f-s-14","m-l-4","text-decoration-line-through"],["class","col-xl-6 col-md-3 col-sm-4",4,"ngIf"],["class","b-t-1",4,"ngIf"],["style","max-width: 100%",4,"ngIf"],[1,"col-xl-6","col-md-3","col-sm-4"]],template:function(_,p){_&1&&r(0,un,30,9,"div",0),_&2&&m("ngIf",p.informacionData)},dependencies:[N,V,H,z,$t,kt,Ft,j,It,Dt,Rt,St,Y,bt,Ot,q]})})(),t})();var xn=[{path:"",children:[{path:"lista",component:te},{path:"detalle/:id",component:ie}]}],ne=(()=>{let o=class{},t=o;return(()=>{o.\u0275fac=function(_){return new(_||o)}})(),(()=>{o.\u0275mod=B({type:o})})(),(()=>{o.\u0275inj=O({imports:[tt.forChild(xn),tt]})})(),t})();var ma=(()=>{let o=class{},t=o;return(()=>{o.\u0275fac=function(_){return new(_||o)}})(),(()=>{o.\u0275mod=B({type:o})})(),(()=>{o.\u0275inj=O({imports:[st,ne,Gt,ht,Et,ut]})})(),t})();export{ma as ReportesModule};
