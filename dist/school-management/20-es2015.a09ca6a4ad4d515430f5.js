(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{ioxV:function(t,e,c){"use strict";c.r(e),c.d(e,"ParentsModule",(function(){return Xt}));var i=c("ofXK"),a=c("jAig"),r=c("tyNb"),n=c("+0xr"),o=c("0EQZ"),s=c("Dh3D"),l=c("M9IT"),m=c("fXoL"),u=c("tk/3"),d=c("z6cu"),h=c("lJxs"),p=c("JIr8"),f=c("AytR");let b=(()=>{class t{constructor(t){this._http=t,this._apiUrl=f.a.apiBaseUrl,this.httpOptions={headers:new u.d({"Content-Type":"Application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),crossDomain:!0}}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Back-end returned code ${t.status}, body was: `+t.error),Object(d.a)("Something bad happened; please try again later.")}extractData(t){return t||{}}getAllParent(){return console.log("_apiUrl",this._apiUrl),this._http.get(this._apiUrl+"parent").pipe(Object(h.a)(this.extractData),Object(p.a)(this.handleError))}getParentDetails(t){return this._http.get(`${this._apiUrl}parent/GetParent?id=${t}`).pipe(Object(h.a)(this.extractData),Object(p.a)(this.handleError))}postParent(t){return this._http.post(this._apiUrl+"parent/AddParent",t).pipe(Object(h.a)(this.extractData),Object(p.a)(this.handleError))}updateparent(t,e){return this._http.put(this._apiUrl+"parent/UpdateParent",e).pipe(Object(h.a)(this.extractData),Object(p.a)(this.handleError))}deleteParent(t){return this._http.delete(`${this._apiUrl}/${t}`).pipe(Object(p.a)(this.handleError))}}return t.\u0275fac=function(e){return new(e||t)(m.rc(u.b))},t.\u0275prov=m.Zb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=c("Wp6s"),j=c("kmnG"),_=c("qFsG"),E=c("NFeN"),I=c("bSwM"),D=c("1kSV");function P(t,e){1&t&&(m.jc(0,"div",5),m.ec(1,"img",6),m.jc(2,"p",7),m.Wc(3,"loading..."),m.ic(),m.ic())}function W(t,e){if(1&t){const t=m.kc();m.jc(0,"th",31),m.jc(1,"mat-checkbox",32),m.uc("change",(function(e){m.Oc(t);const c=m.yc(2);return e?c.masterToggle():null})),m.ic(),m.ic()}if(2&t){const t=m.yc(2);m.Pb(1),m.Ec("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function v(t,e){if(1&t){const t=m.kc();m.jc(0,"td",33),m.jc(1,"mat-checkbox",34),m.uc("click",(function(e){return m.Oc(t),e.stopPropagation()}))("change",(function(c){m.Oc(t);const i=e.$implicit,a=m.yc(2);return c?a.selection.toggle(i):null})),m.ic(),m.ic()}if(2&t){const t=e.$implicit,c=m.yc(2);m.Pb(1),m.Ec("checked",c.selection.isSelected(t))("aria-label",c.checkboxLabel(t))}}function w(t,e){1&t&&(m.jc(0,"th",35),m.Wc(1," ID "),m.ic())}function y(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.ic()),2&t){const t=m.yc().$implicit;m.Pb(1),m.Xc(t.id)}}function U(t,e){if(1&t&&(m.jc(0,"td",33),m.Uc(1,y,2,1,"span",36),m.ic()),2&t){const t=e.$implicit;m.yc(2);const c=m.Mc(7);m.Pb(1),m.Ec("ngIf",t.id)("ngIfElse",c)}}function C(t,e){1&t&&(m.jc(0,"th",35),m.Wc(1,"Name "),m.ic())}function q(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.ic()),2&t){const t=m.yc().$implicit;m.Pb(1),m.Zc("",t.father_guardian_firstname," ",t.father_guardian_lastname," ")}}function F(t,e){if(1&t&&(m.jc(0,"td",33),m.Uc(1,q,2,2,"span",36),m.ic()),2&t){const t=e.$implicit;m.yc(2);const c=m.Mc(7);m.Pb(1),m.Ec("ngIf",t.father_guardian_firstname)("ngIfElse",c)}}function k(t,e){1&t&&(m.jc(0,"th",35),m.Wc(1," Gender "),m.ic())}function N(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.zc(2,"titlecase"),m.ic()),2&t){const t=m.yc().$implicit;m.Pb(1),m.Xc(m.Ac(2,1,t.sex))}}function x(t,e){if(1&t&&(m.jc(0,"td",33),m.Uc(1,N,3,3,"span",36),m.ic()),2&t){const t=e.$implicit;m.yc(2);const c=m.Mc(7);m.Pb(1),m.Ec("ngIf",t.sex)("ngIfElse",c)}}function S(t,e){1&t&&(m.jc(0,"th",35),m.Wc(1," Occupation "),m.ic())}function M(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.ic()),2&t){const t=m.yc().$implicit;m.Pb(1),m.Xc(t.father_guardian_occupation)}}function A(t,e){if(1&t&&(m.jc(0,"td",33),m.Uc(1,M,2,1,"span",36),m.ic()),2&t){const t=e.$implicit;m.yc(2);const c=m.Mc(7);m.Pb(1),m.Ec("ngIf",t.father_guardian_occupation)("ngIfElse",c)}}function L(t,e){1&t&&(m.jc(0,"th",35),m.Wc(1," Address "),m.ic())}function O(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.ic()),2&t){const t=m.yc().$implicit;m.Pb(1),m.Xc(t.address)}}function $(t,e){if(1&t&&(m.jc(0,"td",33),m.Uc(1,O,2,1,"span",36),m.ic()),2&t){const t=e.$implicit;m.yc(2);const c=m.Mc(7);m.Pb(1),m.Ec("ngIf",t.address)("ngIfElse",c)}}function R(t,e){1&t&&(m.jc(0,"th",35),m.Wc(1,"Phone"),m.ic())}function X(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.ic()),2&t){const t=m.yc().$implicit;m.Pb(1),m.Xc(t.father_guardian_mobilenumber)}}function T(t,e){if(1&t&&(m.jc(0,"td",33),m.Uc(1,X,2,1,"span",36),m.ic()),2&t){const t=e.$implicit;m.yc(2);const c=m.Mc(7);m.Pb(1),m.Ec("ngIf",t.father_guardian_mobilenumber)("ngIfElse",c)}}function z(t,e){1&t&&(m.jc(0,"th",35),m.Wc(1,"Email"),m.ic())}function B(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.ic()),2&t){const t=m.yc().$implicit;m.Pb(1),m.Xc(t.email)}}function V(t,e){if(1&t&&(m.jc(0,"td",33),m.Uc(1,B,2,1,"span",36),m.ic()),2&t){const t=e.$implicit;m.yc(2);const c=m.Mc(7);m.Pb(1),m.Ec("ngIf",t.email)("ngIfElse",c)}}function G(t,e){1&t&&m.ec(0,"th",37)}function Z(t,e){if(1&t){const t=m.kc();m.jc(0,"td",33),m.jc(1,"div",38),m.jc(2,"div",39),m.ec(3,"span",40),m.jc(4,"div",41),m.jc(5,"button",42),m.uc("click",(function(){m.Oc(t);const c=e.$implicit;return m.yc(2).onEdit(c)})),m.ec(6,"span",43),m.Wc(7,"\xa0\xa0\xa0Edit"),m.ic(),m.jc(8,"button",42),m.uc("click",(function(){m.Oc(t);const c=e.$implicit;return m.yc(2).onView(c)})),m.ec(9,"span",44),m.Wc(10,"\xa0\xa0\xa0View"),m.ic(),m.ic(),m.ic(),m.ic(),m.ic()}}function H(t,e){1&t&&m.ec(0,"tr",45)}function Q(t,e){1&t&&m.ec(0,"tr",46)}const J=function(){return[5,10,25,100]};function K(t,e){if(1&t){const t=m.kc();m.jc(0,"div",8),m.jc(1,"mat-card"),m.jc(2,"div",9),m.jc(3,"mat-card-title"),m.Wc(4,"All Parents Data"),m.ic(),m.jc(5,"div"),m.jc(6,"mat-form-field",10),m.jc(7,"mat-label"),m.Wc(8,"Filter"),m.ic(),m.jc(9,"input",11),m.uc("keyup",(function(e){return m.Oc(t),m.yc().applyFilter(e)})),m.ic(),m.jc(10,"mat-icon",12),m.Wc(11,"search"),m.ic(),m.ic(),m.ic(),m.ic(),m.jc(12,"mat-card-content",13),m.jc(13,"table",14),m.hc(14,15),m.Uc(15,W,2,3,"th",16),m.Uc(16,v,2,2,"td",17),m.gc(),m.hc(17,18),m.Uc(18,w,2,0,"th",19),m.Uc(19,U,2,2,"td",17),m.gc(),m.hc(20,20),m.Uc(21,C,2,0,"th",19),m.Uc(22,F,2,2,"td",17),m.gc(),m.hc(23,21),m.Uc(24,k,2,0,"th",19),m.Uc(25,x,2,2,"td",17),m.gc(),m.hc(26,22),m.Uc(27,S,2,0,"th",19),m.Uc(28,A,2,2,"td",17),m.gc(),m.hc(29,23),m.Uc(30,L,2,0,"th",19),m.Uc(31,$,2,2,"td",17),m.gc(),m.hc(32,24),m.Uc(33,R,2,0,"th",19),m.Uc(34,T,2,2,"td",17),m.gc(),m.hc(35,25),m.Uc(36,z,2,0,"th",19),m.Uc(37,V,2,2,"td",17),m.gc(),m.hc(38,26),m.Uc(39,G,1,0,"th",27),m.Uc(40,Z,11,0,"td",17),m.gc(),m.Uc(41,H,1,0,"tr",28),m.Uc(42,Q,1,0,"tr",29),m.ic(),m.ec(43,"mat-paginator",30),m.ic(),m.ic(),m.ic()}if(2&t){const t=m.yc();m.Pb(13),m.Ec("dataSource",t.parentList),m.Pb(28),m.Ec("matHeaderRowDef",t.displayedColumns),m.Pb(1),m.Ec("matRowDefColumns",t.displayedColumns),m.Pb(1),m.Ec("length",t.recordLength)("pageSize",10)("pageSizeOptions",m.Hc(6,J))}}function Y(t,e){1&t&&m.Wc(0,"---")}let tt=(()=>{class t{constructor(t,e,c){this._ps=t,this._router=e,this._activatedRout=c,this.displayedColumns=["select","id","name","sex","occupation","address","mobilenumber","email","actions"],this.filterData="",this.isLoading=!0,this.selection=new o.c(!0,[])}ngOnInit(){this.getparentList()}getparentList(){this._ps.getAllParent().subscribe(t=>{console.log("parent data",t),t&&(this.recordLength=t.length,this.parentList=new n.k(t),this.parentList.sort=this.TSort,this.parentList.paginator=this.paginator,this.isLoading=!1)})}isAllSelected(){return this.selection.selected.length===this.parentList.data.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.parentList.data.forEach(t=>this.selection.select(t))}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"select":"deselect")+" all"}applyFilter(t){this.parentList.filter=t.target.value.trim().toLowerCase(),this.parentList.paginator&&this.parentList.paginator.firstPage()}onEdit(t){console.log("row",t),this._router.navigate(["edit",t.id],{relativeTo:this._activatedRout})}onView(t){console.log("row",t),this._router.navigate(["parents/detail"],{queryParams:{id:t.id}})}}return t.\u0275fac=function(e){return new(e||t)(m.dc(b),m.dc(r.g),m.dc(r.a))},t.\u0275cmp=m.Xb({type:t,selectors:[["app-parents-list"]],viewQuery:function(t,e){var c;1&t&&(m.Sc(l.a,!0),m.Sc(s.a,!0)),2&t&&(m.Lc(c=m.vc())&&(e.paginator=c.first),m.Lc(c=m.vc())&&(e.TSort=c.first))},decls:8,vars:2,consts:[[1,"list-container"],[1,"page-title"],["class","no-record",4,"ngIf"],["class","s-list",4,"ngIf"],["dash",""],[1,"no-record"],["src","assets/images/page-loader.gif","alt",""],[1,"m-0"],[1,"s-list"],[1,"list-head"],["appearance","outline",1,"col-12","p-0"],["matInput","","placeholder","Search...",3,"keyup"],["matSuffix",""],[1,"pt-4"],["mat-table","","matSort","",1,"col-12",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","sex"],["matColumnDef","occupation"],["matColumnDef","address"],["matColumnDef","mobilenumber"],["matColumnDef","email"],["matColumnDef","actions"],["mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf","ngIfElse"],["mat-header-cell","",2,"width","50px"],[1,"col"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flaticon-more-button-of-three-dots"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem","",3,"click"],[1,"fa","fa-cogs",2,"color","#00c853"],[1,"fa","fa-eye",2,"color","#ff8800"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(m.jc(0,"div",0),m.jc(1,"div",1),m.jc(2,"h3"),m.Wc(3,"Parents"),m.ic(),m.ic(),m.Uc(4,P,4,0,"div",2),m.Uc(5,K,44,7,"div",3),m.ic(),m.Uc(6,Y,1,0,"ng-template",null,4,m.Vc)),2&t&&(m.Pb(4),m.Ec("ngIf",e.isLoading),m.Pb(1),m.Ec("ngIf",!e.isLoading))},directives:[i.n,g.a,g.d,j.c,j.f,_.b,E.a,j.g,g.b,n.j,s.a,n.c,n.e,n.b,n.g,n.i,l.a,n.d,I.a,n.a,s.b,D.a,D.e,D.c,D.b,n.f,n.h],pipes:[i.v],styles:[""]}),t})();var et=c("3Pt+"),ct=c("dNgK"),it=c("bTqV");function at(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Father's name is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function rt(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Family name is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function nt(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Father adhaar number is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function ot(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Father's adhaar number must be minimum 12 characters "),m.ic())}function st(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Father's occupation is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function lt(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Father's qualification is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function mt(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Father's mobile number is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function ut(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Father's mobile Number must be minimum 10 characters "),m.ic())}function dt(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Email is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function ht(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Email should be in proper formate. "),m.ic())}function pt(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Mother's name is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function ft(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Mother's adhaar number is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function bt(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Mother's adhaar number must be minimum 12 characters "),m.ic())}function gt(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Mother's occupation is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function jt(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Mother's qualification is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function _t(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Mother's Mobile number is "),m.jc(2,"strong"),m.Wc(3,"required"),m.ic(),m.ic())}function Et(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," Mother's Mobile number must be minimum 10 characters "),m.ic())}function It(t,e){1&t&&(m.jc(0,"mat-error"),m.Wc(1," What's app number must be minimum 10 characters "),m.ic())}function Dt(t,e){if(1&t){const t=m.kc();m.jc(0,"button",36),m.uc("click",(function(e){return m.Oc(t),m.yc(2).onCancel(e)})),m.Wc(1,"Cancel"),m.ic()}}function Pt(t,e){if(1&t){const t=m.kc();m.jc(0,"button",36),m.uc("click",(function(e){return m.Oc(t),m.yc(2).onFormReset(e)})),m.Wc(1,"Reset"),m.ic()}}function Wt(t,e){if(1&t){const t=m.kc();m.jc(0,"form",6),m.uc("ngSubmit",(function(){return m.Oc(t),m.yc().onSubmit()})),m.jc(1,"div",7),m.jc(2,"div",8),m.jc(3,"mat-form-field",9),m.jc(4,"mat-label"),m.Wc(5,"Father's Name"),m.ic(),m.ec(6,"input",10),m.Uc(7,at,4,0,"mat-error",11),m.ic(),m.ic(),m.jc(8,"div",8),m.jc(9,"mat-form-field",9),m.jc(10,"mat-label"),m.Wc(11,"Family Name"),m.ic(),m.ec(12,"input",12),m.Uc(13,rt,4,0,"mat-error",11),m.ic(),m.ic(),m.jc(14,"div",8),m.jc(15,"mat-form-field",9),m.jc(16,"mat-label"),m.Wc(17,"Father's Adhaar Number"),m.ic(),m.ec(18,"input",13),m.Uc(19,nt,4,0,"mat-error",11),m.Uc(20,ot,2,0,"mat-error",11),m.ic(),m.ic(),m.jc(21,"div",8),m.jc(22,"mat-form-field",9),m.jc(23,"mat-label"),m.Wc(24,"Father's Occupation"),m.ic(),m.ec(25,"input",14),m.Uc(26,st,4,0,"mat-error",11),m.ic(),m.ic(),m.jc(27,"div",8),m.jc(28,"mat-form-field",9),m.jc(29,"mat-label"),m.Wc(30,"Father's Qualification"),m.ic(),m.ec(31,"input",15),m.Uc(32,lt,4,0,"mat-error",11),m.ic(),m.ic(),m.jc(33,"div",8),m.jc(34,"mat-form-field",9),m.jc(35,"mat-label"),m.Wc(36,"Father's Mobile Number"),m.ic(),m.ec(37,"input",16),m.Uc(38,mt,4,0,"mat-error",11),m.Uc(39,ut,2,0,"mat-error",11),m.ic(),m.ic(),m.jc(40,"div",8),m.jc(41,"mat-form-field",9),m.jc(42,"mat-label"),m.Wc(43,"Email"),m.ic(),m.ec(44,"input",17),m.Uc(45,dt,4,0,"mat-error",11),m.Uc(46,ht,2,0,"mat-error",11),m.ic(),m.ic(),m.jc(47,"div",8),m.jc(48,"mat-form-field",9),m.jc(49,"mat-label"),m.Wc(50,"Mother's Name"),m.ic(),m.ec(51,"input",18),m.Uc(52,pt,4,0,"mat-error",11),m.ic(),m.ic(),m.jc(53,"div",8),m.jc(54,"mat-form-field",9),m.jc(55,"mat-label"),m.Wc(56,"Mother's Adhaar Number"),m.ic(),m.ec(57,"input",19),m.Uc(58,ft,4,0,"mat-error",11),m.Uc(59,bt,2,0,"mat-error",11),m.ic(),m.ic(),m.jc(60,"div",8),m.jc(61,"mat-form-field",9),m.jc(62,"mat-label"),m.Wc(63,"Mother's Occupation"),m.ic(),m.ec(64,"input",20),m.Uc(65,gt,4,0,"mat-error",11),m.ic(),m.ic(),m.jc(66,"div",8),m.jc(67,"mat-form-field",9),m.jc(68,"mat-label"),m.Wc(69,"Mother's Qualification"),m.ic(),m.ec(70,"input",21),m.Uc(71,jt,4,0,"mat-error",11),m.ic(),m.ic(),m.jc(72,"div",8),m.jc(73,"mat-form-field",9),m.jc(74,"mat-label"),m.Wc(75,"Mother's Mobile"),m.ic(),m.ec(76,"input",22),m.Uc(77,_t,4,0,"mat-error",11),m.Uc(78,Et,2,0,"mat-error",11),m.ic(),m.ic(),m.jc(79,"div",23),m.jc(80,"mat-card-title"),m.Wc(81,"Optional Details"),m.ic(),m.ic(),m.jc(82,"div",8),m.jc(83,"mat-form-field",9),m.jc(84,"mat-label"),m.Wc(85,"Account Number"),m.ic(),m.ec(86,"input",24),m.ec(87,"mat-error"),m.ic(),m.ic(),m.jc(88,"div",8),m.jc(89,"mat-form-field",9),m.jc(90,"mat-label"),m.Wc(91,"IFSC"),m.ic(),m.ec(92,"input",25),m.ec(93,"mat-error"),m.ic(),m.ic(),m.jc(94,"div",8),m.jc(95,"mat-form-field",9),m.jc(96,"mat-label"),m.Wc(97,"Branch Name"),m.ic(),m.ec(98,"input",26),m.ec(99,"mat-error"),m.ic(),m.ic(),m.jc(100,"div",8),m.jc(101,"mat-form-field",9),m.jc(102,"mat-label"),m.Wc(103,"Ration Card"),m.ic(),m.ec(104,"input",27),m.ec(105,"mat-error"),m.ic(),m.ic(),m.jc(106,"div",8),m.jc(107,"mat-form-field",9),m.jc(108,"mat-label"),m.Wc(109,"Anual Income"),m.ic(),m.ec(110,"input",28),m.ec(111,"mat-error"),m.ic(),m.ic(),m.jc(112,"div",8),m.jc(113,"mat-form-field",9),m.jc(114,"mat-label"),m.Wc(115,"Mother Tongue"),m.ic(),m.ec(116,"input",29),m.ec(117,"mat-error"),m.ic(),m.ic(),m.jc(118,"div",8),m.jc(119,"mat-form-field",9),m.jc(120,"mat-label"),m.Wc(121,"Nationality"),m.ic(),m.ec(122,"input",30),m.ec(123,"mat-error"),m.ic(),m.ic(),m.jc(124,"div",8),m.jc(125,"mat-form-field",9),m.jc(126,"mat-label"),m.Wc(127," Blood Group"),m.ic(),m.ec(128,"input",31),m.ec(129,"mat-error"),m.ic(),m.ic(),m.jc(130,"div",8),m.jc(131,"mat-form-field",9),m.jc(132,"mat-label"),m.Wc(133,"What's App"),m.ic(),m.ec(134,"input",32),m.Uc(135,It,2,0,"mat-error",11),m.ic(),m.ic(),m.ic(),m.jc(136,"div",33),m.jc(137,"button",34),m.Wc(138),m.ic(),m.Uc(139,Dt,2,0,"button",35),m.Uc(140,Pt,2,0,"button",35),m.ic(),m.ic()}if(2&t){const t=m.yc();m.Ec("formGroup",t.parentForm),m.Pb(7),m.Ec("ngIf",t.submitted&&t.f.father_guardian_firstname.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.familyname.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.father_guardian_adharnumber.hasError("required")),m.Pb(1),m.Ec("ngIf",t.submitted&&t.f.father_guardian_adharnumber.hasError("minlength")&&!t.f.father_guardian_adharnumber.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.father_guardian_occupation.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.father_guardian_qualification.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.father_guardian_mobilenumber.hasError("required")),m.Pb(1),m.Ec("ngIf",t.submitted&&t.f.father_guardian_mobilenumber.hasError("minlength")&&t.f.father_guardian_mobilenumber.dirty&&!t.f.father_guardian_mobilenumber.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.email.hasError("required")),m.Pb(1),m.Ec("ngIf",t.submitted&&t.f.email.hasError("pattern")&&t.f.email.dirty&&!t.f.email.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.mother_firstname.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.mother_aadharnumber.hasError("required")),m.Pb(1),m.Ec("ngIf",t.submitted&&t.f.mother_aadharnumber.hasError("minlength")&&!t.f.mother_aadharnumber.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.mother_occupation.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.mother_qualification.hasError("required")),m.Pb(6),m.Ec("ngIf",t.submitted&&t.f.father_guardian_mobilenumber.hasError("required")),m.Pb(1),m.Ec("ngIf",t.submitted&&t.f.mother_phonenumber.hasError("minlength")&&!t.f.mother_phonenumber.hasError("required")),m.Pb(57),m.Ec("ngIf",t.submitted&&t.f.whatsappnumber.hasError("minlength")&&!t.f.whatsappnumber.hasError("required")),m.Pb(3),m.Xc(t.buttonLabel),m.Pb(1),m.Ec("ngIf",t.showButtons),m.Pb(1),m.Ec("ngIf",!t.showButtons)}}function vt(t,e){1&t&&m.Wc(0,"---")}let wt=(()=>{class t{constructor(t,e,c,i){this._ar=t,this._router=e,this._snackBar=c,this._ss=i,this.formCancel=new m.r,this.formSubmit=new m.r,this.loading=!1,this.submitted=!1,this.error="",this.cardTitle="Add New Parents",this.showButtons=!1,this.showForm=!0,this.buttonLabel="Submit",this._phonePattern="^[0-9-+s()]*$",this._emailPattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",this.horizontalPosition="start",this.verticalPosition="bottom",this._ar.queryParamMap.subscribe(t=>{console.log("params student ID",t),this.paramID=t.params.id})}ngOnInit(){this.parentForm=new et.j({father_guardian_firstname:new et.g(null,et.x.required),familyname:new et.g(null,et.x.required),father_guardian_adharnumber:new et.g(null,[et.x.required,et.x.minLength(12)]),father_guardian_qualification:new et.g(null,et.x.required),father_guardian_occupation:new et.g(null,et.x.required),father_guardian_mobilenumber:new et.g(null,[et.x.required,et.x.minLength(10)]),email:new et.g(null,[et.x.required,et.x.pattern(this._emailPattern)]),mother_firstname:new et.g(null,et.x.required),mother_aadharnumber:new et.g(null,[et.x.required,et.x.minLength(12)]),mother_qualification:new et.g(null,et.x.required),mother_occupation:new et.g(null,et.x.required),mother_phonenumber:new et.g(null,[et.x.required,et.x.minLength(10)]),bank_accountnumber:new et.g(null,et.x.minLength(12)),bank_ifsccode:new et.g(null),bank_addressbranch:new et.g(null),bank_accountname:new et.g(null),rationcardnumber:new et.g(null),annualIncome:new et.g(null),mothertoung:new et.g(null),nationality:new et.g(null),bloodgroup:new et.g(null),whatsappnumber:new et.g(null,et.x.minLength(10))}),console.log("Parent details",this.parentDetails),this.parentDetails&&this.parentDetails.id&&(this.cardTitle="Update Parent Record",this.buttonLabel="Update",this.showButtons=!0),this.setDataToForm()}get f(){return this.parentForm.controls}setDataToForm(){this.parentDetails&&this.parentForm.patchValue(this.parentDetails)}onSubmit(){if(console.log("onSubmit"),this.submitted=!0,console.log("this.parentForm.value",this.parentForm.value),this.parentForm.invalid)return;let t={};Object.assign(t,this.parentForm.value),this.loading=!0,this.parentDetails&&this.parentDetails.id?(t.id=this.parentDetails.id,t.studentid=this.parentDetails.studentid,console.log("studentDetails.id",this.parentDetails.id),this._ss.updateparent(this.parentDetails.id,t).subscribe(t=>{this.formSubmit.emit(!0),this.showNotification("Updated Successfully!!"),this.parentForm.reset(),this.showForm=!1,setTimeout(()=>{this.showForm=!0},50)},t=>{this.error=t,this.loading=!1,console.error(this.error)})):(t.studentid=parseInt(this.paramID),console.log("this.paramID",this.paramID),console.log("payload",t),this._ss.postParent(t).subscribe(t=>{console.log("data",t),this.showNotification("Submitted Successfully!!"),this.parentForm.reset(),this._router.navigate(["/fees"],{queryParams:{id:this.paramID}})},t=>{this.error=t,this.loading=!1,console.error(this.error)}))}showNotification(t){this._snackBar.open(t,"",{duration:2e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["success-snackbar"]})}onFormReset(t){t&&this.parentForm&&this.parentForm.reset()}onCancel(t){t&&this.formCancel.emit(!0)}}return t.\u0275fac=function(e){return new(e||t)(m.dc(r.a),m.dc(r.g),m.dc(ct.a),m.dc(b))},t.\u0275cmp=m.Xb({type:t,selectors:[["app-parent-add"]],inputs:{parentDetails:"parentDetails"},outputs:{formCancel:"formCancel",formSubmit:"formSubmit"},decls:12,vars:2,consts:[[1,"form-container"],[1,"page-title"],[1,"form-fields"],[1,"pt-2"],[3,"formGroup","ngSubmit",4,"ngIf"],["dash",""],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-4"],["appearance","outline",1,"p-0"],["matInput","","formControlName","father_guardian_firstname","placeholder","Enter Father's Name"],[4,"ngIf"],["matInput","","formControlName","familyname","placeholder","Enter Family Name"],["type","number","matInput","","placeholder","Enter Father's Adhaar","formControlName","father_guardian_adharnumber"],["matInput","","placeholder","Enter Guardian Occupation","formControlName","father_guardian_occupation"],["matInput","","placeholder","Enter Father's Qualification","formControlName","father_guardian_qualification"],["type","number","matInput","","placeholder","Enter Father's Mobile Number","formControlName","father_guardian_mobilenumber"],["type","email","matInput","","placeholder","Enter Email","formControlName","email"],["matInput","","formControlName","mother_firstname","placeholder","Enter Mother's Name"],["type","number","matInput","","placeholder","Enter Mother's Adhaar","formControlName","mother_aadharnumber"],["matInput","","placeholder","Enter Mother's Occupation","formControlName","mother_occupation"],["matInput","","placeholder","Enter Mother's Qualification","formControlName","mother_qualification"],["type","number","matInput","","placeholder","Enter Mother Mobile Number","formControlName","mother_phonenumber"],[1,"col-12","pb-2","pt-3"],["matInput","","type","number","placeholder","Enter A/C Number","formControlName","bank_accountnumber"],["matInput","","placeholder","Enter IFSC","formControlName","bank_ifsccode"],["matInput","","placeholder","Enter Branch Name","formControlName","bank_addressbranch"],["matInput","","placeholder","Enter Ration Card Number","formControlName","rationcardnumber"],["matInput","","placeholder","Enter Anual Income","formControlName","annualIncome"],["matInput","","placeholder","Enter Mother Tongue","formControlName","mothertoung"],["matInput","","placeholder","Enter Nationality","formControlName","nationality"],["matInput","","placeholder","Enter Blood Group","formControlName","bloodgroup"],["type","number","matInput","","placeholder","Enter What's App Number","formControlName","whatsappnumber"],[1,"example-button-row","pt-3","text-center"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","","class","ml-3 mat-secondary",3,"click",4,"ngIf"],["mat-raised-button","",1,"ml-3","mat-secondary",3,"click"]],template:function(t,e){1&t&&(m.jc(0,"div",0),m.jc(1,"div",1),m.jc(2,"h3"),m.Wc(3,"Parents"),m.ic(),m.ic(),m.jc(4,"div",2),m.jc(5,"mat-card"),m.jc(6,"mat-card-title"),m.Wc(7),m.ic(),m.jc(8,"mat-card-content",3),m.Uc(9,Wt,141,22,"form",4),m.ic(),m.ic(),m.ic(),m.ic(),m.Uc(10,vt,1,0,"ng-template",null,5,m.Vc)),2&t&&(m.Pb(7),m.Xc(e.cardTitle),m.Pb(2),m.Ec("ngIf",e.showForm))},directives:[g.a,g.d,g.b,i.n,et.z,et.r,et.k,j.c,j.f,_.b,et.c,et.q,et.i,et.v,j.b,it.a],styles:[""]}),t})();function yt(t,e){1&t&&(m.jc(0,"div",2),m.ec(1,"img",3),m.jc(2,"p",4),m.Wc(3,"loading..."),m.ic(),m.ic())}function Ut(t,e){if(1&t){const t=m.kc();m.jc(0,"div"),m.jc(1,"app-parent-add",5),m.uc("formSubmit",(function(e){return m.Oc(t),m.yc().onFormSubmit(e)}))("formCancel",(function(e){return m.Oc(t),m.yc().onFormCancel(e)})),m.ic(),m.ic()}if(2&t){const t=m.yc();m.Pb(1),m.Ec("parentDetails",t.parentDetails)}}function Ct(t,e){1&t&&(m.jc(0,"div",5),m.ec(1,"img",6),m.jc(2,"p",7),m.Wc(3,"loading..."),m.ic(),m.ic())}function qt(t,e){if(1&t&&(m.jc(0,"h3",26),m.Wc(1),m.zc(2,"titlecase"),m.zc(3,"titlecase"),m.ic()),2&t){const t=m.yc(2);m.Pb(1),m.Zc("",m.Ac(2,2,t.parentDetails.father_guardian_firstname)," ",m.Ac(3,4,t.parentDetails.father_guardian_lastname)," ")}}function Ft(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.zc(2,"titlecase"),m.ic()),2&t){const t=m.yc(2);m.Pb(1),m.Xc(m.Ac(2,1,t.parentDetails.sex))}}function kt(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.zc(2,"titlecase"),m.ic()),2&t){const t=m.yc(2);m.Pb(1),m.Xc(m.Ac(2,1,t.parentDetails.occupation))}}function Nt(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.ic()),2&t){const t=m.yc(2);m.Pb(1),m.Xc(t.parentDetails.id)}}function xt(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.zc(2,"titlecase"),m.ic()),2&t){const t=m.yc(2);m.Pb(1),m.Xc(m.Ac(2,1,t.parentDetails.address))}}function St(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.zc(2,"titlecase"),m.ic()),2&t){const t=m.yc(2);m.Pb(1),m.Xc(m.Ac(2,1,t.parentDetails.religion))}}function Mt(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.ic()),2&t){const t=m.yc(2);m.Pb(1),m.Xc(t.parentDetails.email)}}function At(t,e){if(1&t&&(m.jc(0,"span"),m.Wc(1),m.ic()),2&t){const t=m.yc(2);m.Pb(1),m.Xc(t.parentDetails.mobilenumber)}}function Lt(t,e){if(1&t&&(m.jc(0,"div",8),m.jc(1,"mat-card"),m.jc(2,"mat-card-title"),m.Wc(3,"About Me "),m.jc(4,"div",9),m.jc(5,"div",10),m.jc(6,"div",11),m.ec(7,"span",12),m.jc(8,"div",13),m.jc(9,"button",14),m.ec(10,"span",15),m.Wc(11,"\xa0\xa0\xa0Edit"),m.ic(),m.ic(),m.ic(),m.ic(),m.ic(),m.ic(),m.jc(12,"mat-card-content",16),m.jc(13,"div",17),m.jc(14,"div",18),m.ec(15,"img",19),m.ic(),m.jc(16,"div",20),m.Uc(17,qt,4,6,"h3",21),m.jc(18,"div",22),m.jc(19,"table",23),m.jc(20,"tbody"),m.jc(21,"tr"),m.jc(22,"td"),m.Wc(23,"Gender"),m.ic(),m.jc(24,"td",24),m.Uc(25,Ft,3,3,"span",25),m.ic(),m.ic(),m.jc(26,"tr"),m.jc(27,"td"),m.Wc(28,"Occupation"),m.ic(),m.jc(29,"td",24),m.Uc(30,kt,3,3,"span",25),m.ic(),m.ic(),m.jc(31,"tr"),m.jc(32,"td"),m.Wc(33,"ID"),m.ic(),m.jc(34,"td",24),m.Uc(35,Nt,2,1,"span",25),m.ic(),m.ic(),m.jc(36,"tr"),m.jc(37,"td"),m.Wc(38,"Address"),m.ic(),m.jc(39,"td",24),m.Uc(40,xt,3,3,"span",25),m.ic(),m.ic(),m.jc(41,"tr"),m.jc(42,"td"),m.Wc(43,"Religion"),m.ic(),m.jc(44,"td",24),m.Uc(45,St,3,3,"span",25),m.ic(),m.ic(),m.jc(46,"tr"),m.jc(47,"td"),m.Wc(48,"E-mail"),m.ic(),m.jc(49,"td",24),m.Uc(50,Mt,2,1,"span",25),m.ic(),m.ic(),m.jc(51,"tr"),m.jc(52,"td"),m.Wc(53,"Phone"),m.ic(),m.jc(54,"td",24),m.Uc(55,At,2,1,"span",25),m.ic(),m.ic(),m.ic(),m.ic(),m.ic(),m.ic(),m.ic(),m.ic(),m.ic(),m.ic()),2&t){const t=m.yc(),e=m.Mc(7);m.Pb(17),m.Ec("ngIf",t.parentDetails&&t.parentDetails.father_guardian_firstname)("ngIfElse",e),m.Pb(8),m.Ec("ngIf",t.parentDetails&&t.parentDetails.sex)("ngIfElse",e),m.Pb(5),m.Ec("ngIf",t.parentDetails&&t.parentDetails.occupation)("ngIfElse",e),m.Pb(5),m.Ec("ngIf",t.parentDetails&&t.parentDetails.id)("ngIfElse",e),m.Pb(5),m.Ec("ngIf",t.parentDetails&&t.parentDetails.address)("ngIfElse",e),m.Pb(5),m.Ec("ngIf",t.parentDetails&&t.parentDetails.religion)("ngIfElse",e),m.Pb(5),m.Ec("ngIf",t.parentDetails&&t.parentDetails.email)("ngIfElse",e),m.Pb(5),m.Ec("ngIf",t.parentDetails&&t.parentDetails.mobilenumber)("ngIfElse",e)}}function Ot(t,e){1&t&&m.Wc(0,"---")}const $t=[{path:"",component:tt,data:{breadcrumb:"List"}},{path:"add",component:wt,data:{breadcrumb:"Add"}},{path:"edit/:id",component:(()=>{class t{constructor(t,e,c){this._route=t,this._activatedRout=e,this._ps=c,this.showForm=!1,this.isLoading=!0,this._activatedRout.paramMap.subscribe(t=>{console.log("params",t),this.paramID=t.params.id})}ngOnInit(){this.getParentDetails()}getParentDetails(){this._ps.getParentDetails(this.paramID).subscribe(t=>{t&&(console.log("record",t),this.parentDetails=t[0],this.showForm=!0,this.isLoading=!1)})}onFormSubmit(t){console.log("event",t),t&&this._route.navigate(["./"],{relativeTo:this._activatedRout.parent})}onFormCancel(t){console.log("event",t),t&&this._route.navigate(["./"],{relativeTo:this._activatedRout.parent})}}return t.\u0275fac=function(e){return new(e||t)(m.dc(r.g),m.dc(r.a),m.dc(b))},t.\u0275cmp=m.Xb({type:t,selectors:[["app-parent-edit"]],decls:2,vars:2,consts:[["class","no-record",4,"ngIf"],[4,"ngIf"],[1,"no-record"],["src","assets/images/page-loader.gif","alt",""],[1,"m-0"],[3,"parentDetails","formSubmit","formCancel"]],template:function(t,e){1&t&&(m.Uc(0,yt,4,0,"div",0),m.Uc(1,Ut,2,1,"div",1)),2&t&&(m.Ec("ngIf",e.isLoading),m.Pb(1),m.Ec("ngIf",e.showForm))},directives:[i.n,wt],styles:[""]}),t})(),data:{breadcrumb:"Edit"}},{path:"detail",component:(()=>{class t{constructor(t,e,c){this._route=t,this._activatedRout=e,this._ps=c,this.showDetails=!1,this.isLoading=!0,this._activatedRout.queryParamMap.subscribe(t=>{console.log("params",t),this.paramID=t.params.id?t.params.id:1})}ngOnInit(){this.getParentDetails()}getParentDetails(){this._ps.getParentDetails(this.paramID).subscribe(t=>{t&&(console.log("Parent Details",t),this.parentDetails=t[0],this.showDetails=!0,this.isLoading=!1)})}}return t.\u0275fac=function(e){return new(e||t)(m.dc(r.g),m.dc(r.a),m.dc(b))},t.\u0275cmp=m.Xb({type:t,selectors:[["app-parent-details"]],decls:8,vars:2,consts:[[1,"form-container"],[1,"page-title"],["class","no-record",4,"ngIf"],["class","form-fields",4,"ngIf"],["dash",""],[1,"no-record"],["src","assets/images/page-loader.gif","alt",""],[1,"m-0"],[1,"form-fields"],[1,"pull-right"],[1,"col"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flaticon-more-button-of-three-dots"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem",""],[1,"fa","fa-cogs",2,"color","#00c853"],[1,"pt-4"],[1,"row"],[1,"col-4"],["src","assets/images/male_avatar.jpg","alt",""],[1,"col-8"],["class","profile-heading",4,"ngIf","ngIfElse"],[1,"info-table","table-responsive"],[1,"table","text-nowrap"],[1,"font-medium","text-dark-medium"],[4,"ngIf","ngIfElse"],[1,"profile-heading"]],template:function(t,e){1&t&&(m.jc(0,"div",0),m.jc(1,"div",1),m.jc(2,"h3"),m.Wc(3,"Parents"),m.ic(),m.ic(),m.Uc(4,Ct,4,0,"div",2),m.Uc(5,Lt,56,16,"div",3),m.ic(),m.Uc(6,Ot,1,0,"ng-template",null,4,m.Vc)),2&t&&(m.Pb(4),m.Ec("ngIf",e.isLoading),m.Pb(1),m.Ec("ngIf",e.showDetails))},directives:[i.n,g.a,g.d,D.a,D.e,D.c,D.b,g.b],pipes:[i.v],styles:[""]}),t})(),data:{breadcrumb:"Details"}}];let Rt=(()=>{class t{}return t.\u0275mod=m.bc({type:t}),t.\u0275inj=m.ac({factory:function(e){return new(e||t)},imports:[[r.i.forChild($t)],r.i]}),t})(),Xt=(()=>{class t{}return t.\u0275mod=m.bc({type:t}),t.\u0275inj=m.ac({factory:function(e){return new(e||t)},imports:[[i.c,Rt,et.m,et.w,D.d,a.a]]}),t})()}}]);