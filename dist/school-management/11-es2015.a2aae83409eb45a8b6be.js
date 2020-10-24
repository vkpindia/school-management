(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2tqA":function(t,e,c){"use strict";c.r(e),c.d(e,"SalaryModule",(function(){return Dt}));var a=c("ofXK"),i=c("tyNb"),r=c("fXoL"),s=c("3Pt+"),n=c("FtGj"),o=c("JX91"),l=c("lJxs"),h=c("dNgK"),d=c("tk/3"),u=c("z6cu"),m=c("JIr8"),p=c("AytR");let f=(()=>{class t{constructor(t){this._http=t,this._apiUrl=p.a.apiBaseUrl,this.httpOptions={headers:new d.d({"Content-Type":"Application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),crossDomain:!0}}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Back-end returned code ${t.status}, body was: `+t.error),Object(u.a)("Something bad happened; please try again later.")}extractData(t){return t||{}}getSalryType(){return this._http.get(this._apiUrl+"setup/getsalarytypes").pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}getSalaryDetails(t){return this._http.get(this._apiUrl+"accounts/getsalarydetails?id="+t).pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}getAllTransaction(t){return this._http.get(this._apiUrl+"accounts/getsalarytransaction?teacherid="+t).pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}getAllSalaryDetails(t){return this._http.get(this._apiUrl+"accounts/getallsalarydetails?id="+t).pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}saveSalary(t){return this._http.post(this._apiUrl+"accounts/addsalary",t).pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}searchTeacher(){return this._http.get(this._apiUrl+"teacher/GetTeacherSearch").pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}updateSalary(t,e){return this._http.put(this._apiUrl+"accounts/updatesalary",e).pipe(Object(m.a)(this.handleError))}deleteSalary(t){return this._http.delete(`${this._apiUrl}accounts/deletesalary?id=${t}`).pipe(Object(m.a)(this.handleError))}}return t.\u0275fac=function(e){return new(e||t)(r.qc(d.b))},t.\u0275prov=r.Yb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var y=c("kmnG"),b=c("qFsG"),g=c("/1cH"),S=c("bTqV"),E=c("Wp6s"),w=c("FKr1"),I=c("d3UM"),D=c("iadO"),v=c("bSwM"),P=c("+0xr"),L=c("0EQZ"),x=c("Dh3D"),C=c("M9IT"),F=c("NFeN"),Y=c("1kSV");function A(t,e){1&t&&(r.ic(0,"div",26),r.dc(1,"img",27),r.ic(2,"p",28),r.Yc(3,"loading..."),r.hc(),r.hc())}function O(t,e){if(1&t){const t=r.jc();r.ic(0,"th",29),r.ic(1,"mat-checkbox",30),r.tc("change",(function(e){r.Oc(t);const c=r.xc();return e?c.masterToggle():null})),r.hc(),r.hc()}if(2&t){const t=r.xc();r.Pb(1),r.Ec("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function W(t,e){if(1&t){const t=r.jc();r.ic(0,"td",31),r.ic(1,"mat-checkbox",32),r.tc("click",(function(e){return r.Oc(t),e.stopPropagation()}))("change",(function(c){r.Oc(t);const a=e.$implicit,i=r.xc();return c?i.selection.toggle(a):null})),r.hc(),r.hc()}if(2&t){const t=e.$implicit,c=r.xc();r.Pb(1),r.Ec("checked",c.selection.isSelected(t))("aria-label",c.checkboxLabel(t))}}function N(t,e){1&t&&(r.ic(0,"th",33),r.Yc(1,"Name"),r.hc())}function _(t,e){if(1&t&&(r.ic(0,"span"),r.Yc(1),r.hc()),2&t){const t=r.xc().$implicit;r.Pb(1),r.Zc(t.name)}}function k(t,e){if(1&t&&(r.ic(0,"td",31),r.Wc(1,_,2,1,"span",34),r.hc()),2&t){const t=e.$implicit;r.xc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.name)("ngIfElse",c)}}function T(t,e){1&t&&(r.ic(0,"th",33),r.Yc(1,"Gross Salary"),r.hc())}function j(t,e){if(1&t&&(r.ic(0,"span"),r.Yc(1),r.yc(2,"currency"),r.hc()),2&t){const t=r.xc().$implicit;r.Pb(1),r.Zc(r.Ac(2,1,t.grosssalary,"INR"))}}function R(t,e){if(1&t&&(r.ic(0,"td",31),r.Wc(1,j,3,4,"span",34),r.hc()),2&t){const t=e.$implicit;r.xc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.grosssalary)("ngIfElse",c)}}function q(t,e){1&t&&(r.ic(0,"th",33),r.Yc(1,"Net Salary"),r.hc())}function $(t,e){if(1&t&&(r.ic(0,"span"),r.Yc(1),r.yc(2,"currency"),r.hc()),2&t){const t=r.xc().$implicit;r.Pb(1),r.Zc(r.Ac(2,1,t.netsalary,"INR"))}}function M(t,e){if(1&t&&(r.ic(0,"td",31),r.Wc(1,$,3,4,"span",34),r.hc()),2&t){const t=e.$implicit;r.xc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.netsalary)("ngIfElse",c)}}function U(t,e){1&t&&(r.ic(0,"th",33),r.Yc(1,"Pay Amount "),r.hc())}function Z(t,e){if(1&t&&(r.ic(0,"span",36),r.Yc(1),r.yc(2,"currency"),r.hc()),2&t){const t=r.xc().$implicit;r.Pb(1),r.ad(" ",r.Ac(2,1,t.payamount,"INR")," ")}}function G(t,e){if(1&t&&(r.ic(0,"td",31),r.Wc(1,Z,3,4,"span",35),r.hc()),2&t){const t=e.$implicit;r.xc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.payamount)("ngIfElse",c)}}function B(t,e){1&t&&(r.ic(0,"th",33),r.Yc(1,"PF Amount "),r.hc())}function z(t,e){if(1&t&&(r.ic(0,"span",36),r.Yc(1),r.yc(2,"currency"),r.hc()),2&t){const t=r.xc().$implicit;r.Pb(1),r.ad(" ",r.Ac(2,1,t.PFamount,"INR")," ")}}function V(t,e){if(1&t&&(r.ic(0,"td",31),r.Wc(1,z,3,4,"span",35),r.hc()),2&t){const t=e.$implicit;r.xc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.PFamount)("ngIfElse",c)}}function H(t,e){1&t&&(r.ic(0,"th",33),r.Yc(1,"Pay Date "),r.hc())}function J(t,e){if(1&t&&(r.ic(0,"span",36),r.Yc(1),r.yc(2,"date"),r.hc()),2&t){const t=r.xc().$implicit;r.Pb(1),r.ad(" ",r.Ac(2,1,t.paydate,"MM/dd/yyyy")," ")}}function X(t,e){if(1&t&&(r.ic(0,"td",31),r.Wc(1,J,3,4,"span",35),r.hc()),2&t){const t=e.$implicit;r.xc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.paydate)("ngIfElse",c)}}function K(t,e){1&t&&r.dc(0,"th",37)}function Q(t,e){if(1&t){const t=r.jc();r.ic(0,"td",31),r.ic(1,"div",38),r.ic(2,"div",39),r.dc(3,"span",40),r.ic(4,"div",41),r.ic(5,"button",42),r.tc("click",(function(){r.Oc(t);const c=e.$implicit;return r.xc().onEdit(c)})),r.dc(6,"span",43),r.Yc(7,"\xa0\xa0\xa0Edit"),r.hc(),r.ic(8,"button",42),r.tc("click",(function(){r.Oc(t);const c=e.$implicit;return r.xc().onDelete(c)})),r.dc(9,"span",44),r.Yc(10,"\xa0\xa0\xa0Delete"),r.hc(),r.hc(),r.hc(),r.hc(),r.hc()}}function tt(t,e){1&t&&r.dc(0,"tr",45)}function et(t,e){1&t&&r.dc(0,"tr",46)}function ct(t,e){1&t&&r.Yc(0,"---")}let at=(()=>{class t{constructor(t,e){this._ss=t,this._router=e,this.salaryList=[],this.onEditSalary=new r.r,this.onDeleteSalary=new r.r,this.displayedColumns=["select","name","grosssalary","netsalary","payamount","paydate","PFamount","actions"],this.filterData="",this.isLoading=!0,this.selection=new L.c(!0,[]),this.showForm=!1,this.isCreate=!1}ngOnChanges(t){console.log("salaryList",this.salaryList)}ngOnInit(){this.getFeeList()}getFeeList(){this.salaryList&&this.salaryList.length&&(this.recordLength=this.salaryList.length,console.log("this.salaryList",this.salaryList),this.feeList=new P.k(this.salaryList),this.feeList.sort=this.TSort,this.feeList.paginator=this.paginator),this.isLoading=!1}isAllSelected(){if(this.salaryList&&this.salaryList.length)return this.selection.selected.length===this.feeList.data.length}masterToggle(){this.salaryList&&this.salaryList.length&&(this.isAllSelected()?this.selection.clear():this.feeList.data.forEach(t=>this.selection.select(t)))}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"select":"deselect")+" all"}applyFilter(t){this.feeList.filter=t.target.value.trim().toLowerCase(),this.feeList.paginator&&this.feeList.paginator.firstPage()}onEdit(t){console.log("row",t),t&&this.onEditSalary.emit(t)}onDelete(t){console.log("row",t),confirm("Are sure you want to delete this salary record?")&&this._ss.deleteSalary(t.id).subscribe(t=>{this.onDeleteSalary.emit(!0)})}getTransactions(){this._router.navigate(["accounts/salary/transactions"],{queryParams:{techerID:this.teacherID}})}}return t.\u0275fac=function(e){return new(e||t)(r.cc(f),r.cc(i.g))},t.\u0275cmp=r.Wb({type:t,selectors:[["app-salary-list"]],viewQuery:function(t,e){var c;1&t&&(r.Sc(C.a,!0),r.Sc(x.a,!0)),2&t&&(r.Lc(c=r.uc())&&(e.paginator=c.first),r.Lc(c=r.uc())&&(e.TSort=c.first))},inputs:{salaryList:"salaryList",teacherID:"teacherID"},outputs:{onEditSalary:"onEditSalary",onDeleteSalary:"onDeleteSalary"},features:[r.Nb],decls:48,vars:5,consts:[[1,"list-container"],["class","no-record",4,"ngIf"],[1,"s-list"],[1,"list-head"],[2,"color","#003cff","cursor","pointer","font-size","14px",3,"click"],[1,"d-flex","align-items-center"],["appearance","outline",1,"col-12","p-0"],["matInput","","placeholder","Search...",3,"ngModel","keyup","ngModelChange"],["matSuffix",""],[1,"pt-4"],["mat-table","","matSort","",1,"col-12",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","grosssalary"],["matColumnDef","netsalary"],["matColumnDef","payamount"],["matColumnDef","PFamount"],["matColumnDef","paydate"],["matColumnDef","actions"],["mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["dash",""],[1,"no-record"],["src","assets/images/page-loader.gif","alt",""],[1,"m-0"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf","ngIfElse"],["class","p-0 m-0",4,"ngIf","ngIfElse"],[1,"p-0","m-0"],["mat-header-cell","",2,"width","50px"],[1,"col"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flaticon-more-button-of-three-dots"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem","",3,"click"],[1,"fa","fa-cogs",2,"color","#00c853"],[1,"fa","fa-trash",2,"color","#f00"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(r.ic(0,"div",0),r.Wc(1,A,4,0,"div",1),r.ic(2,"div",2),r.ic(3,"mat-card"),r.ic(4,"div",3),r.ic(5,"mat-card-title"),r.Yc(6,"Staff payment details"),r.dc(7,"br"),r.ic(8,"a",4),r.tc("click",(function(){return e.getTransactions()})),r.Yc(9,"Get all transactions"),r.hc(),r.hc(),r.ic(10,"div",5),r.ic(11,"div"),r.ic(12,"mat-form-field",6),r.ic(13,"mat-label"),r.Yc(14,"Filter"),r.hc(),r.ic(15,"input",7),r.tc("keyup",(function(t){return e.applyFilter(t)}))("ngModelChange",(function(t){return e.searchString=t})),r.hc(),r.ic(16,"mat-icon",8),r.Yc(17,"search"),r.hc(),r.hc(),r.hc(),r.hc(),r.hc(),r.ic(18,"mat-card-content",9),r.ic(19,"table",10),r.gc(20,11),r.Wc(21,O,2,3,"th",12),r.Wc(22,W,2,2,"td",13),r.fc(),r.gc(23,14),r.Wc(24,N,2,0,"th",15),r.Wc(25,k,2,2,"td",13),r.fc(),r.gc(26,16),r.Wc(27,T,2,0,"th",15),r.Wc(28,R,2,2,"td",13),r.fc(),r.gc(29,17),r.Wc(30,q,2,0,"th",15),r.Wc(31,M,2,2,"td",13),r.fc(),r.gc(32,18),r.Wc(33,U,2,0,"th",15),r.Wc(34,G,2,2,"td",13),r.fc(),r.gc(35,19),r.Wc(36,B,2,0,"th",15),r.Wc(37,V,2,2,"td",13),r.fc(),r.gc(38,20),r.Wc(39,H,2,0,"th",15),r.Wc(40,X,2,2,"td",13),r.fc(),r.gc(41,21),r.Wc(42,K,1,0,"th",22),r.Wc(43,Q,11,0,"td",13),r.fc(),r.Wc(44,tt,1,0,"tr",23),r.Wc(45,et,1,0,"tr",24),r.hc(),r.hc(),r.hc(),r.hc(),r.hc(),r.Wc(46,ct,1,0,"ng-template",null,25,r.Xc)),2&t&&(r.Pb(1),r.Ec("ngIf",e.isLoading),r.Pb(14),r.Ec("ngModel",e.searchString),r.Pb(4),r.Ec("dataSource",e.feeList),r.Pb(25),r.Ec("matHeaderRowDef",e.displayedColumns),r.Pb(1),r.Ec("matRowDefColumns",e.displayedColumns))},directives:[a.n,E.a,E.d,y.c,y.f,b.b,s.c,s.q,s.t,F.a,y.g,E.b,P.j,x.a,P.c,P.e,P.b,P.g,P.i,P.d,v.a,P.a,x.b,Y.a,Y.e,Y.c,Y.b,P.f,P.h],pipes:[a.d,a.f],styles:[""]}),t})();function it(t,e){if(1&t&&(r.ic(0,"mat-option",16),r.Yc(1),r.hc()),2&t){const t=e.$implicit;r.Ec("value",t),r.Pb(1),r.ad(" ",t.name," ")}}function rt(t,e){1&t&&(r.ic(0,"mat-error"),r.Yc(1," Name is "),r.ic(2,"strong"),r.Yc(3,"required"),r.hc(),r.hc())}function st(t,e){1&t&&(r.ic(0,"mat-error"),r.Yc(1," Gross salary is "),r.ic(2,"strong"),r.Yc(3,"required"),r.hc(),r.hc())}function nt(t,e){1&t&&(r.ic(0,"mat-error"),r.Yc(1," Net salary is "),r.ic(2,"strong"),r.Yc(3,"required"),r.hc(),r.hc())}function ot(t,e){1&t&&(r.ic(0,"mat-error"),r.Yc(1," Absent days is "),r.ic(2,"strong"),r.Yc(3,"required"),r.hc(),r.hc())}function lt(t,e){if(1&t&&(r.ic(0,"mat-option",16),r.Yc(1),r.hc()),2&t){const t=e.$implicit;r.Ec("value",t.salarytype),r.Pb(1),r.Zc(t.salarytype)}}function ht(t,e){1&t&&(r.ic(0,"mat-error"),r.Yc(1," Salary type is "),r.ic(2,"strong"),r.Yc(3,"required"),r.hc(),r.hc())}function dt(t,e){1&t&&(r.ic(0,"mat-error"),r.Yc(1," Pay date is "),r.ic(2,"strong"),r.Yc(3,"required"),r.hc(),r.hc())}function ut(t,e){if(1&t){const t=r.jc();r.ic(0,"button",39),r.tc("click",(function(e){return r.Oc(t),r.xc(2).onCancel(e)})),r.Yc(1,"Cancel"),r.hc()}}function mt(t,e){if(1&t){const t=r.jc();r.ic(0,"button",39),r.tc("click",(function(e){return r.Oc(t),r.xc(2).onFormReset(e)})),r.Yc(1,"Reset"),r.hc()}}function pt(t,e){if(1&t){const t=r.jc();r.ic(0,"form",17),r.tc("ngSubmit",(function(){return r.Oc(t),r.xc().onSubmit()})),r.ic(1,"div",3),r.ic(2,"div",4),r.ic(3,"mat-form-field",5),r.ic(4,"mat-label"),r.Yc(5,"Name"),r.hc(),r.dc(6,"input",18),r.Wc(7,rt,4,0,"mat-error",19),r.hc(),r.hc(),r.ic(8,"div",4),r.ic(9,"mat-form-field",5),r.ic(10,"mat-label"),r.Yc(11,"Gross Salary"),r.hc(),r.dc(12,"input",20),r.Wc(13,st,4,0,"mat-error",19),r.hc(),r.hc(),r.ic(14,"div",4),r.ic(15,"mat-form-field",5),r.ic(16,"mat-label"),r.Yc(17,"Net Salary"),r.hc(),r.dc(18,"input",21),r.Wc(19,nt,4,0,"mat-error",19),r.hc(),r.hc(),r.ic(20,"div",4),r.ic(21,"mat-form-field",5),r.ic(22,"mat-label"),r.Yc(23,"PF Number"),r.hc(),r.dc(24,"input",22),r.hc(),r.hc(),r.ic(25,"div",4),r.ic(26,"mat-form-field",5),r.ic(27,"mat-label"),r.Yc(28,"PF Percentage(%)"),r.hc(),r.dc(29,"input",23),r.hc(),r.hc(),r.ic(30,"div",4),r.ic(31,"mat-form-field",5),r.ic(32,"mat-label"),r.Yc(33,"ESI Number"),r.hc(),r.dc(34,"input",24),r.hc(),r.hc(),r.ic(35,"div",4),r.ic(36,"mat-form-field",5),r.ic(37,"mat-label"),r.Yc(38,"ESI Percentage(%)"),r.hc(),r.dc(39,"input",25),r.hc(),r.hc(),r.ic(40,"div",4),r.ic(41,"mat-form-field",5),r.ic(42,"mat-label"),r.Yc(43,"Absent Days"),r.hc(),r.ic(44,"input",26),r.tc("blur",(function(){return r.Oc(t),r.xc().calculateSalary()})),r.hc(),r.Wc(45,ot,4,0,"mat-error",19),r.hc(),r.hc(),r.ic(46,"div",4),r.ic(47,"mat-form-field",5),r.ic(48,"mat-label"),r.Yc(49,"Salary Type"),r.hc(),r.ic(50,"mat-select",27),r.Wc(51,lt,2,2,"mat-option",9),r.hc(),r.Wc(52,ht,4,0,"mat-error",19),r.hc(),r.hc(),r.ic(53,"div",4),r.ic(54,"mat-form-field",5),r.ic(55,"mat-label"),r.Yc(56,"Pay Date"),r.hc(),r.dc(57,"input",28),r.dc(58,"mat-datepicker-toggle",29),r.dc(59,"mat-datepicker",null,30),r.Wc(61,dt,4,0,"mat-error",19),r.hc(),r.hc(),r.ic(62,"div",4),r.ic(63,"mat-form-field",5),r.ic(64,"mat-label"),r.Yc(65,"Pay Amount"),r.hc(),r.ic(66,"input",31),r.tc("blur",(function(){return r.Oc(t),r.xc().calculatePending()})),r.hc(),r.hc(),r.hc(),r.ic(67,"div",4),r.ic(68,"mat-form-field",5),r.ic(69,"mat-label"),r.Yc(70,"Salary After Added"),r.hc(),r.dc(71,"input",32),r.hc(),r.hc(),r.ic(72,"div",4),r.ic(73,"mat-checkbox",33),r.Yc(74,"Status"),r.hc(),r.hc(),r.ic(75,"div",4),r.ic(76,"mat-form-field",5),r.ic(77,"mat-label"),r.Yc(78,"Pending Amount"),r.hc(),r.dc(79,"input",34),r.hc(),r.hc(),r.ic(80,"div",4),r.ic(81,"mat-form-field",5),r.ic(82,"mat-label"),r.Yc(83,"Description"),r.hc(),r.dc(84,"textarea",35),r.hc(),r.hc(),r.hc(),r.ic(85,"div",36),r.ic(86,"button",37),r.Yc(87),r.hc(),r.Wc(88,ut,2,0,"button",38),r.Wc(89,mt,2,0,"button",38),r.hc(),r.hc()}if(2&t){const t=r.Mc(60),e=r.xc();r.Ec("formGroup",e.salaryForm),r.Pb(7),r.Ec("ngIf",e.submitted&&e.f.name.hasError("required")),r.Pb(6),r.Ec("ngIf",e.submitted&&e.f.grosssalary.hasError("required")),r.Pb(6),r.Ec("ngIf",e.submitted&&e.f.netsalary.hasError("required")),r.Pb(26),r.Ec("ngIf",e.submitted&&e.f.absentdays.hasError("required")),r.Pb(6),r.Ec("ngForOf",e.salarytypesList),r.Pb(1),r.Ec("ngIf",e.submitted&&e.f.salarytype.hasError("required")),r.Pb(5),r.Ec("matDatepicker",t),r.Pb(1),r.Ec("for",t),r.Pb(3),r.Ec("ngIf",e.submitted&&e.f.paydate.hasError("required")),r.Pb(26),r.Zc(e.buttonLabel),r.Pb(1),r.Ec("ngIf",e.showButtons),r.Pb(1),r.Ec("ngIf",!e.showButtons)}}function ft(t,e){if(1&t){const t=r.jc();r.ic(0,"div",40),r.ic(1,"app-salary-list",41),r.tc("onEditSalary",(function(e){return r.Oc(t),r.xc().onEditRecord(e)}))("onDeleteSalary",(function(e){return r.Oc(t),r.xc().onDeleteSalary(e)})),r.hc(),r.hc()}if(2&t){const t=r.xc();r.Pb(1),r.Ec("salaryList",t.salaryList)("teacherID",t.teacherID)}}function yt(t,e){1&t&&r.Yc(0,"---")}let bt=(()=>{class t{constructor(t,e,c,a,i){this._ar=t,this._router=e,this._snackBar=c,this._fs=a,this._date=i,this.formCancel=new r.r,this.formSubmit=new r.r,this.loading=!1,this.submitted=!1,this.ShowList=!1,this.error="",this.cardTitle="Add/Update Salary",this.showButtons=!1,this.showForm=!0,this.buttonLabel="Submit",this.salaryList=[],this.teacherName=new s.g,this.teacherRecordList=[],this._phonePattern="^[0-9-+s()]*$",this._emailPattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",this.horizontalPosition="start",this.verticalPosition="bottom",this.visible=!0,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[n.g,n.c],this.salarytypesList=[]}ngOnInit(){this.salaryForm=new s.j({name:new s.g(null,s.x.required),grosssalary:new s.g(null,s.x.required),netsalary:new s.g(null,s.x.required),absentdays:new s.g(new Date,s.x.required),salarytype:new s.g(new Date,s.x.required),paydate:new s.g(new Date,s.x.required),payamount:new s.g(null),PF:new s.g(null),PFamount:new s.g(null),ESI:new s.g(null),ESIamount:new s.g(null),salaryafterded:new s.g(null),status:new s.g(null),pendingamount:new s.g(null),description:new s.g(null)}),this.getSalaryTypes(),this.getTeacherRecord()}get f(){return this.salaryForm.controls}getSalaryTypes(){this._fs.getSalryType().subscribe(t=>{t&&(this.salarytypesList=t)})}getSalaryDetails(){console.log("teacherID",this.teacherID),this._fs.getSalaryDetails(this.teacherID?this.teacherID:1).subscribe(t=>{t&&(this.salaryForm.patchValue(t[0]),this.salaryRecord=t[0])})}calculateSalary(){let t,e=this.f.netsalary.value/30,c=0;Number(this.f.absentdays.value)>0&&(t=Number(this.f.absentdays.value)-1),t>0&&(c=e*t),console.log("oneDaySalary",e),console.log("salaryDeduction",c),this.payAmount=Number((this.f.netsalary.value-c).toFixed(2)),console.log("payAmount",this.payAmount),this.salaryForm.patchValue({payamount:this.payAmount})}calculatePending(){let t=0;this.f.payamount.value<this.payAmount&&(t=this.payAmount-this.f.payamount.value),this.salaryForm.patchValue({pendingamount:t.toFixed(2)})}getAllSalaryList(){this._fs.getAllSalaryDetails(this.teacherID?this.teacherID:1).subscribe(t=>{t&&(this.salaryList=t,this.ShowList=!0)})}getOptionText(t){if(t)return t.name}getTeacherRecord(){this._fs.searchTeacher().subscribe(t=>{this.teacherRecordList=t,this.teacherFilteredList=this.teacherName.valueChanges.pipe(Object(o.a)(""),Object(l.a)(t=>this._filter(t)))})}_filter(t){const e=t;return this.teacherRecordList.filter(t=>t.name.toLowerCase().includes(e))}onOptionSelection(t){this.teacherID=t.option.value.id,this.teacherID&&this.getSalaryDetails()}onEditRecord(t){t&&(this.salaryRecord=t,this.salaryForm.patchValue(t),this.buttonLabel="Update")}onSubmit(){if(this.submitted=!0,this.salaryForm.value&&(this.salaryForm.value.paydate=this._date.transform(this.salaryForm.value.paydate,"MM/dd/yyyy")),this.salaryForm.invalid)return;let t={};Object.assign(t,this.salaryForm.value),this.loading=!0,console.log("salaryRecord",this.salaryRecord),t.teacherid=this.salaryRecord.teacherid,t.id=this.salaryRecord.id,this.salaryRecord&&this.salaryRecord.id?this._fs.updateSalary(this.salaryRecord.id,t).subscribe(t=>{this.showNotification("Updated Successfully!!"),this.salaryForm&&this.salaryForm.reset(),this.showForm=!1,setTimeout(()=>{this.showForm=!0},50),this.getAllSalaryList()},t=>{this.error=t,this.loading=!1,console.error(this.error)}):(console.log("payload",t),this._fs.saveSalary(t).subscribe(t=>{this.showNotification("Submitted Successfully!!"),this.salaryForm&&this.salaryForm.reset(),this.showForm=!1,setTimeout(()=>{this.showForm=!0},50),this.getAllSalaryList()},t=>{this.error=t,this.loading=!1,console.error(this.error)}))}showNotification(t){this._snackBar.open(t,"",{duration:2e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["success-snackbar"]})}onFormReset(t){t&&this.salaryForm&&this.salaryForm.reset()}onCancel(t){t&&this.formCancel.emit(!0)}onDeleteSalary(t){t&&this.getAllSalaryList()}}return t.\u0275fac=function(e){return new(e||t)(r.cc(i.a),r.cc(i.g),r.cc(h.a),r.cc(f),r.cc(a.f))},t.\u0275cmp=r.Wb({type:t,selectors:[["app-add-salary"]],inputs:{salaryDetails:"salaryDetails"},outputs:{formCancel:"formCancel",formSubmit:"formSubmit"},features:[r.Ob([a.f])],decls:27,vars:9,consts:[[1,"form-container"],[1,"page-title"],[1,"form-fields"],[1,"row"],[1,"col-12","col-sm-6","col-md-4"],["appearance","outline",1,"p-0"],["matInput","","placeholder","Select student","aria-label","Number",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"col-2","pt-1","mt-1","mb-3"],["mat-raised-button","","color","primary","type","button",3,"click"],[1,"pt-2"],[3,"formGroup","ngSubmit",4,"ngIf"],["class","",4,"ngIf"],["dash",""],[3,"value"],[3,"formGroup","ngSubmit"],["matInput","","placeholder","Enter Last Name","formControlName","name"],[4,"ngIf"],["matInput","","placeholder","Enter gross salary","formControlName","grosssalary"],["matInput","","placeholder","Enter net salary","formControlName","netsalary"],["type","number","matInput","","placeholder","Enter PF Number","formControlName","PF"],["type","number","matInput","","placeholder","Enter PF Percentage(%)","formControlName","PFamount"],["type","number","matInput","","placeholder","Enter ESI","formControlName","ESI"],["type","number","matInput","","placeholder","Enter ESI amount","formControlName","ESIamount"],["matInput","","placeholder","Enter absent days","formControlName","absentdays",3,"blur"],["placeholder","Select salarytype","formControlName","salarytype"],["matInput","","placeholder","Select date","formControlName","paydate",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["type","number","matInput","","placeholder","Enter amount","formControlName","payamount",3,"blur"],["type","number","matInput","","placeholder","Enter after added","formControlName","salaryafterded"],["formControlName","status"],["type","number","matInput","","placeholder","Enter amount","formControlName","pendingamount"],["matInput","","placeholder","Description","rows","3","formControlName","description"],[1,"example-button-row","pt-3","text-center"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","","class","ml-3 mat-secondary",3,"click",4,"ngIf"],["mat-raised-button","",1,"ml-3","mat-secondary",3,"click"],[1,""],[3,"salaryList","teacherID","onEditSalary","onDeleteSalary"]],template:function(t,e){if(1&t&&(r.ic(0,"div",0),r.ic(1,"div",1),r.ic(2,"h3"),r.Yc(3,"Salary"),r.hc(),r.hc(),r.ic(4,"div",2),r.ic(5,"div",3),r.ic(6,"div",4),r.ic(7,"mat-form-field",5),r.ic(8,"mat-label"),r.Yc(9,"Search Staff"),r.hc(),r.dc(10,"input",6),r.ic(11,"mat-autocomplete",7,8),r.tc("optionSelected",(function(t){return e.onOptionSelection(t)})),r.Wc(13,it,2,2,"mat-option",9),r.yc(14,"async"),r.hc(),r.hc(),r.hc(),r.ic(15,"div",10),r.ic(16,"button",11),r.tc("click",(function(){return e.getAllSalaryList()})),r.Yc(17,"Search"),r.hc(),r.hc(),r.hc(),r.ic(18,"mat-card"),r.ic(19,"mat-card-title"),r.Yc(20),r.hc(),r.ic(21,"mat-card-content",12),r.Wc(22,pt,90,13,"form",13),r.hc(),r.hc(),r.hc(),r.hc(),r.ic(23,"div",0),r.Wc(24,ft,2,2,"div",14),r.hc(),r.Wc(25,yt,1,0,"ng-template",null,15,r.Xc)),2&t){const t=r.Mc(12);r.Pb(10),r.Ec("formControl",e.teacherName)("matAutocomplete",t),r.Pb(1),r.Ec("displayWith",e.getOptionText),r.Pb(2),r.Ec("ngForOf",r.zc(14,7,e.teacherFilteredList)),r.Pb(7),r.Zc(e.cardTitle),r.Pb(2),r.Ec("ngIf",e.showForm),r.Pb(2),r.Ec("ngIf",e.ShowList)}},directives:[y.c,y.f,b.b,s.c,g.c,s.q,s.h,g.a,a.m,S.a,E.a,E.d,E.b,a.n,w.n,s.z,s.r,s.k,s.i,s.v,I.a,D.b,D.d,y.g,D.a,v.a,y.b,at],pipes:[a.b],styles:[""]}),t})();var gt=c("NUHZ");function St(t,e){if(1&t&&(r.gc(0),r.dc(1,"app-transactions",1),r.fc()),2&t){const t=r.xc();r.Pb(1),r.Ec("transactionsList",t.transactionList)("displayedColumns",t.displayedColumns)}}const Et=[{path:"",component:bt},{path:"transactions",component:(()=>{class t{constructor(t,e){this._ss=t,this._route=e,this.showTransaction=!1,this._route.queryParamMap.subscribe(t=>{this.teacherID=t.params.techerID})}ngOnInit(){this.displayedColumns=["salarytype","paidamount","paiddate","discription"],this._ss.getAllTransaction(this.teacherID).subscribe(t=>{t&&(this.transactionList=t,this.showTransaction=!0)})}}return t.\u0275fac=function(e){return new(e||t)(r.cc(f),r.cc(i.a))},t.\u0275cmp=r.Wb({type:t,selectors:[["app-salary-transactions"]],inputs:{displayedColumns:"displayedColumns",transactionList:"transactionList"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"transactionsList","displayedColumns"]],template:function(t,e){1&t&&r.Wc(0,St,2,2,"ng-container",0),2&t&&r.Ec("ngIf",e.showTransaction)},directives:[a.n,gt.a],styles:[""]}),t})()}];let wt=(()=>{class t{}return t.\u0275mod=r.ac({type:t}),t.\u0275inj=r.Zb({factory:function(e){return new(e||t)},imports:[[i.i.forChild(Et)],i.i]}),t})();var It=c("Jn5T");let Dt=(()=>{class t{}return t.\u0275mod=r.ac({type:t}),t.\u0275inj=r.Zb({factory:function(e){return new(e||t)},imports:[[a.c,wt,s.m,s.w,Y.d,It.a]]}),t})()}}]);