(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{DiG3:function(t,e,r){"use strict";r.r(e),r.d(e,"TransportModule",(function(){return Xt}));var c=r("ofXK"),i=r("jAig"),a=r("3Pt+"),n=r("1kSV"),o=r("tyNb"),s=r("M9IT"),l=r("Dh3D"),m=r("+0xr"),d=r("0EQZ"),u=r("fXoL"),p=r("tk/3"),f=r("z6cu"),h=r("lJxs"),b=r("JIr8"),g=r("AytR");let j=(()=>{class t{constructor(t){this._http=t,this._apiUrl=g.a.apiBaseUrl,this.httpOptions={headers:new p.d({"Content-Type":"Application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),crossDomain:!0}}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Back-end returned code ${t.status}, body was: `+t.error),Object(f.a)("Something bad happened; please try again later.")}extractData(t){return t||{}}getTransportList(){return this._http.get(this._apiUrl+"TransportController/GetTransport").pipe(Object(h.a)(this.extractData),Object(b.a)(this.handleError))}getTransportDetails(t){return this._http.get(`${this._apiUrl}TransportController/GetTransportsingerecord?id=${t}`).pipe(Object(h.a)(this.extractData),Object(b.a)(this.handleError))}saveTransport(t){return this._http.post(this._apiUrl+"TransportController/Addtransport",t).pipe(Object(h.a)(this.extractData),Object(b.a)(this.handleError))}updateTransport(t){return this._http.put(this._apiUrl+"TransportController/Updatetransport",t).pipe(Object(h.a)(this.extractData),Object(b.a)(this.handleError))}deleteTransport(t){return this._http.delete(`${this._apiUrl}TransportController/DeleteTransport?id=${t}`).pipe(Object(b.a)(this.handleError))}}return t.\u0275fac=function(e){return new(e||t)(u.rc(p.b))},t.\u0275prov=u.Zb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=r("Wp6s"),E=r("kmnG"),_=r("qFsG"),y=r("NFeN"),W=r("bSwM");function I(t,e){1&t&&(u.jc(0,"div",5),u.ec(1,"img",6),u.jc(2,"p",7),u.Wc(3,"loading..."),u.ic(),u.ic())}function D(t,e){if(1&t){const t=u.kc();u.jc(0,"th",31),u.jc(1,"mat-checkbox",32),u.uc("change",(function(e){u.Oc(t);const r=u.yc(2);return e?r.masterToggle():null})),u.ic(),u.ic()}if(2&t){const t=u.yc(2);u.Pb(1),u.Ec("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function q(t,e){if(1&t){const t=u.kc();u.jc(0,"td",33),u.jc(1,"mat-checkbox",34),u.uc("click",(function(e){return u.Oc(t),e.stopPropagation()}))("change",(function(r){u.Oc(t);const c=e.$implicit,i=u.yc(2);return r?i.selection.toggle(c):null})),u.ic(),u.ic()}if(2&t){const t=e.$implicit,r=u.yc(2);u.Pb(1),u.Ec("checked",r.selection.isSelected(t))("aria-label",r.checkboxLabel(t))}}function P(t,e){1&t&&(u.jc(0,"th",35),u.Wc(1," Route "),u.ic())}function w(t,e){if(1&t&&(u.jc(0,"span"),u.Wc(1),u.ic()),2&t){const t=u.yc().$implicit;u.Pb(1),u.Xc(t.routename)}}function k(t,e){if(1&t&&(u.jc(0,"td",33),u.Uc(1,w,2,1,"span",36),u.ic()),2&t){const t=e.$implicit;u.yc(2);const r=u.Mc(7);u.Pb(1),u.Ec("ngIf",t.routename)("ngIfElse",r)}}function C(t,e){1&t&&(u.jc(0,"th",35),u.Wc(1," Vehicle No. "),u.ic())}function U(t,e){if(1&t&&(u.jc(0,"span"),u.Wc(1),u.ic()),2&t){const t=u.yc().$implicit;u.Pb(1),u.Xc(t.vehiclenumber)}}function N(t,e){if(1&t&&(u.jc(0,"td",33),u.Uc(1,U,2,1,"span",36),u.ic()),2&t){const t=e.$implicit;u.yc(2);const r=u.Mc(7);u.Pb(1),u.Ec("ngIf",t.vehiclenumber)("ngIfElse",r)}}function F(t,e){1&t&&(u.jc(0,"th",35),u.Wc(1," Saeting Capacity "),u.ic())}function S(t,e){if(1&t&&(u.jc(0,"span"),u.Wc(1),u.ic()),2&t){const t=u.yc().$implicit;u.Pb(1),u.Xc(t.seatingcapacity)}}function x(t,e){if(1&t&&(u.jc(0,"td",33),u.Uc(1,S,2,1,"span",36),u.ic()),2&t){const t=e.$implicit;u.yc(2);const r=u.Mc(7);u.Pb(1),u.Ec("ngIf",t.seatingcapacity)("ngIfElse",r)}}function M(t,e){1&t&&(u.jc(0,"th",35),u.Wc(1," Driver "),u.ic())}function T(t,e){if(1&t&&(u.jc(0,"span"),u.Wc(1),u.zc(2,"titlecase"),u.ic()),2&t){const t=u.yc().$implicit;u.Pb(1),u.Xc(u.Ac(2,1,t.drivername))}}function L(t,e){if(1&t&&(u.jc(0,"td",33),u.Uc(1,T,3,3,"span",36),u.ic()),2&t){const t=e.$implicit;u.yc(2);const r=u.Mc(7);u.Pb(1),u.Ec("ngIf",t.drivername)("ngIfElse",r)}}function O(t,e){1&t&&(u.jc(0,"th",35),u.Wc(1," Driving license "),u.ic())}function A(t,e){if(1&t&&(u.jc(0,"span"),u.Wc(1),u.ic()),2&t){const t=u.yc().$implicit;u.Pb(1),u.Xc(t.driving_liciense_numebr)}}function $(t,e){if(1&t&&(u.jc(0,"td",33),u.Uc(1,A,2,1,"span",36),u.ic()),2&t){const t=e.$implicit;u.yc(2);const r=u.Mc(7);u.Pb(1),u.Ec("ngIf",t.driving_liciense_numebr)("ngIfElse",r)}}function R(t,e){1&t&&(u.jc(0,"th",35),u.Wc(1," Attender Name "),u.ic())}function X(t,e){if(1&t&&(u.jc(0,"span"),u.Wc(1),u.ic()),2&t){const t=u.yc().$implicit;u.Pb(1),u.Xc(t.attendername)}}function B(t,e){if(1&t&&(u.jc(0,"td",33),u.Uc(1,X,2,1,"span",36),u.ic()),2&t){const t=e.$implicit;u.yc(2);const r=u.Mc(7);u.Pb(1),u.Ec("ngIf",t.attendername)("ngIfElse",r)}}function z(t,e){1&t&&(u.jc(0,"th",35),u.Wc(1," Attender No. "),u.ic())}function V(t,e){if(1&t&&(u.jc(0,"span"),u.Wc(1),u.ic()),2&t){const t=u.yc().$implicit;u.Pb(1),u.Xc(t.attender_number)}}function G(t,e){if(1&t&&(u.jc(0,"td",33),u.Uc(1,V,2,1,"span",36),u.ic()),2&t){const t=e.$implicit;u.yc(2);const r=u.Mc(7);u.Pb(1),u.Ec("ngIf",t.attender_number)("ngIfElse",r)}}function H(t,e){1&t&&u.ec(0,"th",37)}function J(t,e){if(1&t){const t=u.kc();u.jc(0,"td",33),u.jc(1,"div",38),u.jc(2,"div",39),u.ec(3,"span",40),u.jc(4,"div",41),u.jc(5,"button",42),u.uc("click",(function(){u.Oc(t);const r=e.$implicit;return u.yc(2).onEdit(r)})),u.ec(6,"span",43),u.Wc(7,"\xa0\xa0\xa0Edit"),u.ic(),u.jc(8,"button",42),u.uc("click",(function(){u.Oc(t);const r=e.$implicit;return u.yc(2).onDelete(r.id)})),u.ec(9,"span",44),u.Wc(10,"\xa0\xa0\xa0Delete"),u.ic(),u.ic(),u.ic(),u.ic(),u.ic()}}function K(t,e){1&t&&u.ec(0,"tr",45)}function Q(t,e){1&t&&u.ec(0,"tr",46)}const Z=function(){return[5,10,25,100]};function Y(t,e){if(1&t){const t=u.kc();u.jc(0,"div",8),u.jc(1,"mat-card"),u.jc(2,"div",9),u.jc(3,"mat-card-title"),u.Wc(4,"All Transport Data"),u.ic(),u.jc(5,"div"),u.jc(6,"mat-form-field",10),u.jc(7,"mat-label"),u.Wc(8,"Filter"),u.ic(),u.jc(9,"input",11),u.uc("keyup",(function(e){return u.Oc(t),u.yc().applyFilter(e)})),u.ic(),u.jc(10,"mat-icon",12),u.Wc(11,"search"),u.ic(),u.ic(),u.ic(),u.ic(),u.jc(12,"mat-card-content",13),u.jc(13,"table",14),u.hc(14,15),u.Uc(15,D,2,3,"th",16),u.Uc(16,q,2,2,"td",17),u.gc(),u.hc(17,18),u.Uc(18,P,2,0,"th",19),u.Uc(19,k,2,2,"td",17),u.gc(),u.hc(20,20),u.Uc(21,C,2,0,"th",19),u.Uc(22,N,2,2,"td",17),u.gc(),u.hc(23,21),u.Uc(24,F,2,0,"th",19),u.Uc(25,x,2,2,"td",17),u.gc(),u.hc(26,22),u.Uc(27,M,2,0,"th",19),u.Uc(28,L,2,2,"td",17),u.gc(),u.hc(29,23),u.Uc(30,O,2,0,"th",19),u.Uc(31,$,2,2,"td",17),u.gc(),u.hc(32,24),u.Uc(33,R,2,0,"th",19),u.Uc(34,B,2,2,"td",17),u.gc(),u.hc(35,25),u.Uc(36,z,2,0,"th",19),u.Uc(37,G,2,2,"td",17),u.gc(),u.hc(38,26),u.Uc(39,H,1,0,"th",27),u.Uc(40,J,11,0,"td",17),u.gc(),u.Uc(41,K,1,0,"tr",28),u.Uc(42,Q,1,0,"tr",29),u.ic(),u.ec(43,"mat-paginator",30),u.ic(),u.ic(),u.ic()}if(2&t){const t=u.yc();u.Pb(13),u.Ec("dataSource",t.transportList),u.Pb(28),u.Ec("matHeaderRowDef",t.displayedColumns),u.Pb(1),u.Ec("matRowDefColumns",t.displayedColumns),u.Pb(1),u.Ec("length",t.recordLength)("pageSize",10)("pageSizeOptions",u.Hc(6,Z))}}function tt(t,e){1&t&&u.Wc(0,"---")}let et=(()=>{class t{constructor(t,e,r){this._ss=t,this._router=e,this._activatedRout=r,this.displayedColumns=["select","routename","vehiclenumber","seatingcapacity","drivername","driving_liciense_numebr","attendername","attender_number","actions"],this.filterData="",this.isLoading=!0,this.selection=new d.c(!0,[])}ngOnInit(){this.gettransportList()}gettransportList(){this._ss.getTransportList().subscribe(t=>{console.log("data",t),t&&(this.recordLength=t.length,this.transportList=new m.k(t),this.transportList.sort=this.TSort,this.transportList.paginator=this.paginator,this.isLoading=!1)})}isAllSelected(){return this.selection.selected.length===this.transportList.data.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.transportList.data.forEach(t=>this.selection.select(t))}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"select":"deselect")+" all"}applyFilter(t){this.transportList.filter=t.target.value.trim().toLowerCase(),this.transportList.paginator&&this.transportList.paginator.firstPage()}onEdit(t){t&&this._router.navigate(["edit",t.id],{relativeTo:this._activatedRout})}onDelete(t){t&&confirm("Are you sure? You want to delete this transport!!")&&this._ss.deleteTransport(t).subscribe(t=>{this.gettransportList()})}}return t.\u0275fac=function(e){return new(e||t)(u.dc(j),u.dc(o.g),u.dc(o.a))},t.\u0275cmp=u.Xb({type:t,selectors:[["app-transport-list"]],viewQuery:function(t,e){var r;1&t&&(u.Sc(s.a,!0),u.Sc(l.a,!0)),2&t&&(u.Lc(r=u.vc())&&(e.paginator=r.first),u.Lc(r=u.vc())&&(e.TSort=r.first))},decls:8,vars:2,consts:[[1,"list-container"],[1,"page-title"],["class","no-record",4,"ngIf"],["class","s-list",4,"ngIf"],["dash",""],[1,"no-record"],["src","assets/images/page-loader.gif","alt",""],[1,"m-0"],[1,"s-list"],[1,"list-head"],["appearance","outline",1,"col-12","p-0"],["matInput","","placeholder","Search...",3,"keyup"],["matSuffix",""],[1,"pt-4"],["mat-table","","matSort","",1,"col-12",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","routename"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","vehiclenumber"],["matColumnDef","seatingcapacity"],["matColumnDef","drivername"],["matColumnDef","driving_liciense_numebr"],["matColumnDef","attendername"],["matColumnDef","attender_number"],["matColumnDef","actions"],["mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf","ngIfElse"],["mat-header-cell","",2,"width","50px"],[1,"col"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flaticon-more-button-of-three-dots"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem","",3,"click"],[1,"fa","fa-cogs",2,"color","#00c853"],[1,"fa","fa-trash",2,"color","#f00"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(u.jc(0,"div",0),u.jc(1,"div",1),u.jc(2,"h3"),u.Wc(3,"Transportation"),u.ic(),u.ic(),u.Uc(4,I,4,0,"div",2),u.Uc(5,Y,44,7,"div",3),u.ic(),u.Uc(6,tt,1,0,"ng-template",null,4,u.Vc)),2&t&&(u.Pb(4),u.Ec("ngIf",e.isLoading),u.Pb(1),u.Ec("ngIf",!e.isLoading))},directives:[c.n,v.a,v.d,E.c,E.f,_.b,y.a,E.g,v.b,m.j,l.a,m.c,m.e,m.b,m.g,m.i,s.a,m.d,W.a,m.a,l.b,n.a,n.e,n.c,n.b,m.f,m.h],pipes:[c.v],styles:[""]}),t})();var rt=r("dNgK"),ct=r("iadO"),it=r("bTqV");function at(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Route name is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function nt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Serial Number is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function ot(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," RC Number is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function st(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Insurance Number is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function lt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Permit Number is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function mt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," FC Number is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function dt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Permit start date is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function ut(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Permit end date is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function pt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Insurance start Date is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function ft(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Insurance end Date is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function ht(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," FC start Date is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function bt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," FC end Date is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function gt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Model is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function jt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Comapny Name is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function vt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Seating capacity is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function Et(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," vehicle no is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function _t(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," vehicle no is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function yt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," DOB is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function Wt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Driving License is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function It(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Date of issue is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function Dt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Date of expire is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function qt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," License type is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function Pt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Place of issue is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function wt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Driver number is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function kt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Attender name is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function Ct(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Attender number is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function Ut(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Date of birth is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function Nt(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Incharge first name is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function Ft(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Incharge last name is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function St(t,e){1&t&&(u.jc(0,"mat-error"),u.Wc(1," Incharge number is "),u.jc(2,"strong"),u.Wc(3,"required"),u.ic(),u.ic())}function xt(t,e){if(1&t){const t=u.kc();u.jc(0,"button",55),u.uc("click",(function(e){return u.Oc(t),u.yc(2).onFormReset(e)})),u.Wc(1,"Reset"),u.ic()}}function Mt(t,e){if(1&t){const t=u.kc();u.jc(0,"form",6),u.uc("ngSubmit",(function(){return u.Oc(t),u.yc().onSubmit()})),u.jc(1,"div",7),u.jc(2,"div",8),u.jc(3,"mat-form-field",9),u.jc(4,"mat-label"),u.Wc(5,"Route Name"),u.ic(),u.ec(6,"input",10),u.Uc(7,at,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(8,"div",8),u.jc(9,"mat-form-field",9),u.jc(10,"mat-label"),u.Wc(11,"Serial Number"),u.ic(),u.ec(12,"input",12),u.Uc(13,nt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(14,"div",8),u.jc(15,"mat-form-field",9),u.jc(16,"mat-label"),u.Wc(17,"RC Number"),u.ic(),u.ec(18,"input",13),u.Uc(19,ot,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(20,"div",8),u.jc(21,"mat-form-field",9),u.jc(22,"mat-label"),u.Wc(23,"Insurance Number"),u.ic(),u.ec(24,"input",14),u.Uc(25,st,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(26,"div",8),u.jc(27,"mat-form-field",9),u.jc(28,"mat-label"),u.Wc(29,"Permit Number"),u.ic(),u.ec(30,"input",15),u.Uc(31,lt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(32,"div",8),u.jc(33,"mat-form-field",9),u.jc(34,"mat-label"),u.Wc(35,"FC Number"),u.ic(),u.ec(36,"input",16),u.Uc(37,mt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(38,"div",8),u.jc(39,"mat-form-field",9),u.jc(40,"mat-label"),u.Wc(41,"Permit Start Date"),u.ic(),u.ec(42,"input",17),u.ec(43,"mat-datepicker-toggle",18),u.ec(44,"mat-datepicker",null,19),u.Uc(46,dt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(47,"div",8),u.jc(48,"mat-form-field",9),u.jc(49,"mat-label"),u.Wc(50,"Permit End Date"),u.ic(),u.ec(51,"input",20),u.ec(52,"mat-datepicker-toggle",18),u.ec(53,"mat-datepicker",null,21),u.Uc(55,ut,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(56,"div",8),u.jc(57,"mat-form-field",9),u.jc(58,"mat-label"),u.Wc(59,"Insurance Start Date"),u.ic(),u.ec(60,"input",22),u.ec(61,"mat-datepicker-toggle",18),u.ec(62,"mat-datepicker",null,23),u.Uc(64,pt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(65,"div",8),u.jc(66,"mat-form-field",9),u.jc(67,"mat-label"),u.Wc(68,"Insurance End Date"),u.ic(),u.ec(69,"input",24),u.ec(70,"mat-datepicker-toggle",18),u.ec(71,"mat-datepicker",null,25),u.Uc(73,ft,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(74,"div",8),u.jc(75,"mat-form-field",9),u.jc(76,"mat-label"),u.Wc(77,"FC Start Date"),u.ic(),u.ec(78,"input",26),u.ec(79,"mat-datepicker-toggle",18),u.ec(80,"mat-datepicker",null,27),u.Uc(82,ht,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(83,"div",8),u.jc(84,"mat-form-field",9),u.jc(85,"mat-label"),u.Wc(86,"FC Start Date"),u.ic(),u.ec(87,"input",28),u.ec(88,"mat-datepicker-toggle",18),u.ec(89,"mat-datepicker",null,29),u.Uc(91,bt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(92,"div",8),u.jc(93,"mat-form-field",9),u.jc(94,"mat-label"),u.Wc(95,"Model"),u.ic(),u.ec(96,"input",30),u.Uc(97,gt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(98,"div",8),u.jc(99,"mat-form-field",9),u.jc(100,"mat-label"),u.Wc(101,"Company Name"),u.ic(),u.ec(102,"input",31),u.Uc(103,jt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(104,"div",8),u.jc(105,"mat-form-field",9),u.jc(106,"mat-label"),u.Wc(107,"Seating Capacity"),u.ic(),u.ec(108,"input",32),u.Uc(109,vt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(110,"div",8),u.jc(111,"mat-form-field",9),u.jc(112,"mat-label"),u.Wc(113,"Vehicle Number"),u.ic(),u.ec(114,"input",33),u.Uc(115,Et,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(116,"div",34),u.jc(117,"mat-card-title"),u.Wc(118,"Driver Details"),u.ic(),u.ic(),u.jc(119,"div",8),u.jc(120,"mat-form-field",9),u.jc(121,"mat-label"),u.Wc(122,"Driver Name"),u.ic(),u.ec(123,"input",35),u.Uc(124,_t,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(125,"div",8),u.jc(126,"mat-form-field",9),u.jc(127,"mat-label"),u.Wc(128,"Date of Birth"),u.ic(),u.ec(129,"input",36),u.ec(130,"mat-datepicker-toggle",18),u.ec(131,"mat-datepicker",null,37),u.Uc(133,yt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(134,"div",8),u.jc(135,"mat-form-field",9),u.jc(136,"mat-label"),u.Wc(137,"Driving License No"),u.ic(),u.ec(138,"input",38),u.Uc(139,Wt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(140,"div",8),u.jc(141,"mat-form-field",9),u.jc(142,"mat-label"),u.Wc(143,"Date of Issue"),u.ic(),u.ec(144,"input",39),u.ec(145,"mat-datepicker-toggle",18),u.ec(146,"mat-datepicker",null,40),u.Uc(148,It,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(149,"div",8),u.jc(150,"mat-form-field",9),u.jc(151,"mat-label"),u.Wc(152,"Date of Expire"),u.ic(),u.ec(153,"input",41),u.ec(154,"mat-datepicker-toggle",18),u.ec(155,"mat-datepicker",null,42),u.Uc(157,Dt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(158,"div",8),u.jc(159,"mat-form-field",9),u.jc(160,"mat-label"),u.Wc(161,"License Type"),u.ic(),u.ec(162,"input",43),u.Uc(163,qt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(164,"div",8),u.jc(165,"mat-form-field",9),u.jc(166,"mat-label"),u.Wc(167,"Place of Issue"),u.ic(),u.ec(168,"input",44),u.Uc(169,Pt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(170,"div",8),u.jc(171,"mat-form-field",9),u.jc(172,"mat-label"),u.Wc(173,"Driver Number"),u.ic(),u.ec(174,"input",45),u.Uc(175,wt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(176,"div",34),u.jc(177,"mat-card-title"),u.Wc(178,"Attender Details"),u.ic(),u.ic(),u.jc(179,"div",8),u.jc(180,"mat-form-field",9),u.jc(181,"mat-label"),u.Wc(182,"Attender Name"),u.ic(),u.ec(183,"input",46),u.Uc(184,kt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(185,"div",8),u.jc(186,"mat-form-field",9),u.jc(187,"mat-label"),u.Wc(188,"Attender Number"),u.ic(),u.ec(189,"input",47),u.Uc(190,Ct,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(191,"div",8),u.jc(192,"mat-form-field",9),u.jc(193,"mat-label"),u.Wc(194,"Date of Birth"),u.ic(),u.ec(195,"input",48),u.ec(196,"mat-datepicker-toggle",18),u.ec(197,"mat-datepicker",null,49),u.Uc(199,Ut,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(200,"div",34),u.jc(201,"mat-card-title"),u.Wc(202,"Incharge Details"),u.ic(),u.ic(),u.jc(203,"div",8),u.jc(204,"mat-form-field",9),u.jc(205,"mat-label"),u.Wc(206,"Incharge First Name"),u.ic(),u.ec(207,"input",50),u.Uc(208,Nt,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(209,"div",8),u.jc(210,"mat-form-field",9),u.jc(211,"mat-label"),u.Wc(212,"Incharge Last Name"),u.ic(),u.ec(213,"input",51),u.Uc(214,Ft,4,0,"mat-error",11),u.ic(),u.ic(),u.jc(215,"div",8),u.jc(216,"mat-form-field",9),u.jc(217,"mat-label"),u.Wc(218,"Incharge Number"),u.ic(),u.ec(219,"input",52),u.Uc(220,St,4,0,"mat-error",11),u.ic(),u.ic(),u.ic(),u.jc(221,"div",53),u.jc(222,"button",54),u.Wc(223),u.ic(),u.jc(224,"button",55),u.uc("click",(function(e){return u.Oc(t),u.yc().onCancel(e)})),u.Wc(225,"Cancel"),u.ic(),u.Uc(226,xt,2,0,"button",56),u.ic(),u.ic()}if(2&t){const t=u.Mc(45),e=u.Mc(54),r=u.Mc(63),c=u.Mc(72),i=u.Mc(81),a=u.Mc(90),n=u.Mc(132),o=u.Mc(147),s=u.Mc(156),l=u.Mc(198),m=u.yc();u.Ec("formGroup",m.transportationForm),u.Pb(7),u.Ec("ngIf",m.submitted&&m.f.routename.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.serial_number.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.rc_number.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.insurance_number.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.permit_number.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.fc_number.hasError("required")),u.Pb(5),u.Ec("matDatepicker",t),u.Pb(1),u.Ec("for",t),u.Pb(3),u.Ec("ngIf",m.submitted&&m.f.permit_startdate.hasError("required")),u.Pb(5),u.Ec("matDatepicker",e),u.Pb(1),u.Ec("for",e),u.Pb(3),u.Ec("ngIf",m.submitted&&m.f.permit_enddate.hasError("required")),u.Pb(5),u.Ec("matDatepicker",r),u.Pb(1),u.Ec("for",r),u.Pb(3),u.Ec("ngIf",m.submitted&&m.f.insurance_start.hasError("required")),u.Pb(5),u.Ec("matDatepicker",c),u.Pb(1),u.Ec("for",c),u.Pb(3),u.Ec("ngIf",m.submitted&&m.f.insurance_enddate.hasError("required")),u.Pb(5),u.Ec("matDatepicker",i),u.Pb(1),u.Ec("for",i),u.Pb(3),u.Ec("ngIf",m.submitted&&m.f.fc_start.hasError("required")),u.Pb(5),u.Ec("matDatepicker",a),u.Pb(1),u.Ec("for",a),u.Pb(3),u.Ec("ngIf",m.submitted&&m.f.fc_enddate.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.model.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.companyname.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.seatingcapacity.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.vehiclenumber.hasError("required")),u.Pb(9),u.Ec("ngIf",m.submitted&&m.f.drivername.hasError("required")),u.Pb(5),u.Ec("matDatepicker",n),u.Pb(1),u.Ec("for",n),u.Pb(3),u.Ec("ngIf",m.submitted&&m.f.dob.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.driving_liciense_numebr.hasError("required")),u.Pb(5),u.Ec("matDatepicker",o),u.Pb(1),u.Ec("for",o),u.Pb(3),u.Ec("ngIf",m.submitted&&m.f.dateofissue.hasError("required")),u.Pb(5),u.Ec("matDatepicker",s),u.Pb(1),u.Ec("for",s),u.Pb(3),u.Ec("ngIf",m.submitted&&m.f.dateofexpire.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.liciencetype.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.placeofissue.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.driver_number.hasError("required")),u.Pb(9),u.Ec("ngIf",m.submitted&&m.f.attendername.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.attender_number.hasError("required")),u.Pb(5),u.Ec("matDatepicker",l),u.Pb(1),u.Ec("for",l),u.Pb(3),u.Ec("ngIf",m.submitted&&m.f.attenderdob.hasError("required")),u.Pb(9),u.Ec("ngIf",m.submitted&&m.f.incharge_fname.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.incharge_lname.hasError("required")),u.Pb(6),u.Ec("ngIf",m.submitted&&m.f.incharge_number.hasError("required")),u.Pb(3),u.Xc(m.buttonLabel),u.Pb(3),u.Ec("ngIf",!m.showButtons)}}function Tt(t,e){1&t&&u.Wc(0,"---")}let Lt=(()=>{class t{constructor(t,e,r,c,i){this._ar=t,this._router=e,this._snackBar=r,this._ss=c,this._date=i,this.formCancel=new u.r,this.formSubmit=new u.r,this.loading=!1,this.submitted=!1,this.error="",this.cardTitle="Add New transports",this.showButtons=!1,this.showForm=!0,this.buttonLabel="Submit",this.horizontalPosition="start",this.verticalPosition="bottom",this.classList=[],this.sectionList=[]}ngOnInit(){this.transportationForm=new a.j({routename:new a.g(null,a.x.required),serial_number:new a.g(null,a.x.required),rc_number:new a.g(null,a.x.required),insurance_number:new a.g(null,a.x.required),permit_number:new a.g(null,a.x.required),fc_number:new a.g(null,a.x.required),permit_startdate:new a.g(null,a.x.required),permit_enddate:new a.g(null,a.x.required),insurance_start:new a.g(null,a.x.required),insurance_enddate:new a.g(null,a.x.required),fc_start:new a.g(null,a.x.required),fc_enddate:new a.g(null,a.x.required),model:new a.g(null,a.x.required),companyname:new a.g(null,a.x.required),seatingcapacity:new a.g(null,a.x.required),vehiclenumber:new a.g(null,a.x.required),drivername:new a.g(null,a.x.required),dob:new a.g(null,a.x.required),dateofissue:new a.g(null,a.x.required),dateofexpire:new a.g(null,a.x.required),driving_liciense_numebr:new a.g(null,a.x.required),driver_number:new a.g(null,a.x.required),placeofissue:new a.g(null,a.x.required),liciencetype:new a.g(null,a.x.required),attendername:new a.g(null,a.x.required),attender_number:new a.g(null,a.x.required),attenderdob:new a.g(null,a.x.required),incharge_fname:new a.g(null,a.x.required),incharge_lname:new a.g(null,a.x.required),incharge_number:new a.g(null,a.x.required)}),console.log("transportDetails",this.transportDetails),this.transportDetails&&this.transportDetails[0].id&&(this.cardTitle="Update transport Record",this.buttonLabel="Update",this.showButtons=!0),this.transportDetails&&this.setDataToForm()}get f(){return this.transportationForm.controls}setDataToForm(){this.transportDetails&&this.transportationForm.patchValue(this.transportDetails[0])}onSubmit(){if(console.log("onSubmit"),this.submitted=!0,console.log("this.transportationForm.value",this.transportationForm.value),this.transportationForm.value&&(this.transportationForm.value.permit_startdate=this._date.transform(this.transportationForm.value.permit_startdate,"MM/dd/yyyy"),this.transportationForm.value.permit_enddate=this._date.transform(this.transportationForm.value.permit_enddate,"MM/dd/yyyy"),this.transportationForm.value.insurance_start=this._date.transform(this.transportationForm.value.insurance_start,"MM/dd/yyyy"),this.transportationForm.value.insurance_enddate=this._date.transform(this.transportationForm.value.insurance_enddate,"MM/dd/yyyy"),this.transportationForm.value.fc_start=this._date.transform(this.transportationForm.value.fc_start,"MM/dd/yyyy"),this.transportationForm.value.fc_enddate=this._date.transform(this.transportationForm.value.fc_enddate,"MM/dd/yyyy"),this.transportationForm.value.dob=this._date.transform(this.transportationForm.value.dob,"MM/dd/yyyy"),this.transportationForm.value.dateofissue=this._date.transform(this.transportationForm.value.dateofissue,"MM/dd/yyyy"),this.transportationForm.value.dateofexpire=this._date.transform(this.transportationForm.value.dateofexpire,"MM/dd/yyyy"),this.transportationForm.value.attenderdob=this._date.transform(this.transportationForm.value.attenderdob,"MM/dd/yyyy")),this.transportationForm.invalid)return;let t={};Object.assign(t,this.transportationForm.value),delete t.file,this.loading=!0,this.transportDetails&&this.transportDetails[0].id?(t.id=this.transportDetails[0].id,console.log("transportDetails.id",this.transportDetails.id),this._ss.updateTransport(t).subscribe(t=>{this.formSubmit.emit(!0),this.showNotification("Updated Successfully!!"),this.transportationForm.reset(),this.showForm=!1,setTimeout(()=>{this.showForm=!0},50)},t=>{this.error=t,this.loading=!1,console.error(this.error)})):this._ss.saveTransport(t).subscribe(t=>{this.showNotification("Submitted Successfully!!"),this.transportationForm.reset(),this.showForm=!1,setTimeout(()=>{this.showForm=!0},50)},t=>{this.error=t,this.loading=!1,console.error(this.error)})}showNotification(t){this._snackBar.open(t,"",{duration:2e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["success-snackbar"]})}onFormReset(t){t&&this.transportationForm&&this.transportationForm.reset()}onCancel(t){t&&(this.formCancel.emit(!0),this._router.navigate(["transport"]))}}return t.\u0275fac=function(e){return new(e||t)(u.dc(o.a),u.dc(o.g),u.dc(rt.a),u.dc(j),u.dc(c.f))},t.\u0275cmp=u.Xb({type:t,selectors:[["app-create-transport"]],inputs:{transportDetails:"transportDetails"},outputs:{formCancel:"formCancel",formSubmit:"formSubmit"},features:[u.Ob([c.f])],decls:12,vars:1,consts:[[1,"form-container"],[1,"page-title"],[1,"form-fields"],[1,"pt-2"],[3,"formGroup","ngSubmit",4,"ngIf"],["dash",""],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-12","col-sm-6","col-md-4"],["appearance","outline",1,"p-0"],["matInput","","formControlName","routename","placeholder","Enter Route"],[4,"ngIf"],["matInput","","placeholder","Enter Serial No","formControlName","serial_number"],["matInput","","placeholder","Enter RC Number","formControlName","rc_number"],["matInput","","placeholder","Enter Insurance Number","formControlName","insurance_number"],["matInput","","placeholder","Enter Permit Number","formControlName","permit_number"],["matInput","","placeholder","Enter FC Number","formControlName","fc_number"],["matInput","","placeholder","Select date","formControlName","permit_startdate",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["matInput","","placeholder","Select date","formControlName","permit_enddate",3,"matDatepicker"],["picker2",""],["matInput","","placeholder","Select date","formControlName","insurance_start",3,"matDatepicker"],["picker12",""],["matInput","","placeholder","Select date","formControlName","insurance_enddate",3,"matDatepicker"],["picker13",""],["matInput","","placeholder","Select date","formControlName","fc_start",3,"matDatepicker"],["picker14",""],["matInput","","placeholder","Select date","formControlName","fc_enddate",3,"matDatepicker"],["picker15",""],["matInput","","placeholder","Enter model","formControlName","model"],["matInput","","placeholder","Enter companyname","formControlName","companyname"],["matInput","","placeholder","Enter Caste","formControlName","seatingcapacity"],["matInput","","placeholder","Enter vehicle no","formControlName","vehiclenumber"],[1,"col-12","pb-2","pt-3"],["matInput","","placeholder","Enter Adhaar","formControlName","drivername"],["matInput","","placeholder","Select date","formControlName","dob",3,"matDatepicker"],["picker16",""],["matInput","","placeholder","Enter License No","formControlName","driving_liciense_numebr"],["matInput","","placeholder","Select date","formControlName","dateofissue",3,"matDatepicker"],["picker6",""],["matInput","","placeholder","Select date","formControlName","dateofexpire",3,"matDatepicker"],["picker17",""],["matInput","","placeholder","Enter License type","formControlName","liciencetype"],["matInput","","placeholder","Enter palce of issue","formControlName","placeofissue"],["matInput","","placeholder","Enter Driver Number","formControlName","driver_number"],["matInput","","placeholder","Enter name","formControlName","attendername"],["matInput","","placeholder","Enter name","formControlName","attender_number"],["matInput","","placeholder","Select date","formControlName","attenderdob",3,"matDatepicker"],["picker18",""],["matInput","","placeholder","Enter first name","formControlName","incharge_fname"],["matInput","","placeholder","Enter last name","formControlName","incharge_lname"],["matInput","","placeholder","Enter name","formControlName","incharge_number"],[1,"example-button-row","pt-3","text-center"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","",1,"ml-3","mat-secondary",3,"click"],["mat-raised-button","","class","ml-3 mat-secondary",3,"click",4,"ngIf"]],template:function(t,e){1&t&&(u.jc(0,"div",0),u.jc(1,"div",1),u.jc(2,"h3"),u.Wc(3,"Transportation"),u.ic(),u.ic(),u.jc(4,"div",2),u.jc(5,"mat-card"),u.jc(6,"mat-card-title"),u.Wc(7,"Add Transport"),u.ic(),u.jc(8,"mat-card-content",3),u.Uc(9,Mt,227,53,"form",4),u.ic(),u.ic(),u.ic(),u.ic(),u.Uc(10,Tt,1,0,"ng-template",null,5,u.Vc)),2&t&&(u.Pb(9),u.Ec("ngIf",e.showForm))},directives:[v.a,v.d,v.b,c.n,a.z,a.r,a.k,E.c,E.f,_.b,a.c,a.q,a.i,ct.b,ct.d,E.g,ct.a,it.a,E.b],styles:[""]}),t})();function Ot(t,e){1&t&&(u.jc(0,"div",2),u.ec(1,"img",3),u.jc(2,"p",4),u.Wc(3,"loading..."),u.ic(),u.ic())}function At(t,e){if(1&t){const t=u.kc();u.jc(0,"div"),u.jc(1,"app-create-transport",5),u.uc("formSubmit",(function(e){return u.Oc(t),u.yc().onFormSubmit(e)}))("formCancel",(function(e){return u.Oc(t),u.yc().onFormCancel(e)})),u.ic(),u.ic()}if(2&t){const t=u.yc();u.Pb(1),u.Ec("transportDetails",t.transportDetails)}}const $t=[{path:"",component:et},{path:"add",component:Lt},{path:"edit/:id",component:(()=>{class t{constructor(t,e,r){this._route=t,this._activatedRout=e,this._ss=r,this.showForm=!1,this.isLoading=!0,this._activatedRout.paramMap.subscribe(t=>{console.log("params",t),this.paramID=t.params.id})}ngOnInit(){this.getTransportDetails()}getTransportDetails(){this._ss.getTransportDetails(this.paramID).subscribe(t=>{t&&(console.log("record",t),this.transportDetails=t,this.showForm=!0),this.isLoading=!1})}onFormSubmit(t){console.log("event",t),t&&this._route.navigate(["./"],{relativeTo:this._activatedRout.parent})}onFormCancel(t){console.log("event",t),t&&this._route.navigate(["./"],{relativeTo:this._activatedRout.parent})}}return t.\u0275fac=function(e){return new(e||t)(u.dc(o.g),u.dc(o.a),u.dc(j))},t.\u0275cmp=u.Xb({type:t,selectors:[["app-edit-transport"]],decls:2,vars:2,consts:[["class","no-record",4,"ngIf"],[4,"ngIf"],[1,"no-record"],["src","assets/images/page-loader.gif","alt",""],[1,"m-0"],[3,"transportDetails","formSubmit","formCancel"]],template:function(t,e){1&t&&(u.Uc(0,Ot,4,0,"div",0),u.Uc(1,At,2,1,"div",1)),2&t&&(u.Ec("ngIf",e.isLoading),u.Pb(1),u.Ec("ngIf",e.showForm))},directives:[c.n,Lt],styles:[""]}),t})()}];let Rt=(()=>{class t{}return t.\u0275mod=u.bc({type:t}),t.\u0275inj=u.ac({factory:function(e){return new(e||t)},imports:[[o.i.forChild($t)],o.i]}),t})(),Xt=(()=>{class t{}return t.\u0275mod=u.bc({type:t}),t.\u0275inj=u.ac({factory:function(e){return new(e||t)},imports:[[c.c,Rt,a.m,a.w,n.d,i.a]]}),t})()}}]);