function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var i=t[c];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{U0C9:function(e,t,c){"use strict";c.r(t),c.d(t,"StudentsModule",(function(){return st}));var i=c("ofXK"),n=c("tyNb"),r=c("M9IT"),a=c("Dh3D"),o=c("+0xr"),s=c("0EQZ"),l=c("fXoL"),u=c("EABB"),m=c("Wp6s"),d=c("kmnG"),f=c("qFsG"),b=c("NFeN"),p=c("bSwM"),g=c("1kSV");function h(e,t){1&e&&(l.jc(0,"div",5),l.ec(1,"img",6),l.jc(2,"p",7),l.Wc(3,"loading..."),l.ic(),l.ic())}function j(e,t){if(1&e){var c=l.kc();l.jc(0,"th",31),l.jc(1,"mat-checkbox",32),l.uc("change",(function(e){l.Oc(c);var t=l.yc(2);return e?t.masterToggle():null})),l.ic(),l.ic()}if(2&e){var i=l.yc(2);l.Pb(1),l.Ec("checked",i.selection.hasValue()&&i.isAllSelected())("indeterminate",i.selection.hasValue()&&!i.isAllSelected())("aria-label",i.checkboxLabel())}}function v(e,t){if(1&e){var c=l.kc();l.jc(0,"td",33),l.jc(1,"mat-checkbox",34),l.uc("click",(function(e){return l.Oc(c),e.stopPropagation()}))("change",(function(e){l.Oc(c);var i=t.$implicit,n=l.yc(2);return e?n.selection.toggle(i):null})),l.ic(),l.ic()}if(2&e){var i=t.$implicit,n=l.yc(2);l.Pb(1),l.Ec("checked",n.selection.isSelected(i))("aria-label",n.checkboxLabel(i))}}function E(e,t){1&e&&(l.jc(0,"th",35),l.Wc(1," Roll "),l.ic())}function y(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.ic()),2&e){var c=l.yc().$implicit;l.Pb(1),l.Xc(c.rollnumber)}}function W(e,t){if(1&e&&(l.jc(0,"td",33),l.Uc(1,y,2,1,"span",36),l.ic()),2&e){var c=t.$implicit;l.yc(2);var i=l.Mc(7);l.Pb(1),l.Ec("ngIf",c.rollnumber)("ngIfElse",i)}}function I(e,t){1&e&&(l.jc(0,"th",35),l.Wc(1," Enrollment "),l.ic())}function D(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.ic()),2&e){var c=l.yc().$implicit;l.Pb(1),l.Xc(c.enrolnumber)}}function w(e,t){if(1&e&&(l.jc(0,"td",33),l.Uc(1,D,2,1,"span",36),l.ic()),2&e){var c=t.$implicit;l.yc(2);var i=l.Mc(7);l.Pb(1),l.Ec("ngIf",c.enrolnumber)("ngIfElse",i)}}function P(e,t){1&e&&(l.jc(0,"th",35),l.Wc(1," Name "),l.ic())}function C(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.zc(2,"titlecase"),l.zc(3,"titlecase"),l.ic()),2&e){var c=l.yc().$implicit;l.Pb(1),l.Zc("",l.Ac(2,2,c.firstname)," ",l.Ac(3,4,c.lastname),"")}}function U(e,t){if(1&e&&(l.jc(0,"td",33),l.Uc(1,C,4,6,"span",36),l.ic()),2&e){var c=t.$implicit;l.yc(2);var i=l.Mc(7);l.Pb(1),l.Ec("ngIf",c.firstname)("ngIfElse",i)}}function k(e,t){1&e&&(l.jc(0,"th",35),l.Wc(1," Gender "),l.ic())}function S(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.zc(2,"titlecase"),l.ic()),2&e){var c=l.yc().$implicit;l.Pb(1),l.Xc(l.Ac(2,1,c.sex))}}function q(e,t){if(1&e&&(l.jc(0,"td",33),l.Uc(1,S,3,3,"span",36),l.ic()),2&e){var c=t.$implicit;l.yc(2);var i=l.Mc(7);l.Pb(1),l.Ec("ngIf",c.sex)("ngIfElse",i)}}function N(e,t){1&e&&(l.jc(0,"th",35),l.Wc(1," Section "),l.ic())}function F(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.ic()),2&e){var c=l.yc().$implicit;l.Pb(1),l.Xc(c.section)}}function x(e,t){if(1&e&&(l.jc(0,"td",33),l.Uc(1,F,2,1,"span",36),l.ic()),2&e){var c=t.$implicit;l.yc(2);var i=l.Mc(7);l.Pb(1),l.Ec("ngIf",c.section)("ngIfElse",i)}}function _(e,t){1&e&&(l.jc(0,"th",35),l.Wc(1," DOB "),l.ic())}function L(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.zc(2,"date"),l.ic()),2&e){var c=l.yc().$implicit;l.Pb(1),l.Xc(l.Bc(2,1,c.dob,"dd/MM/yyyy"))}}function M(e,t){if(1&e&&(l.jc(0,"td",33),l.Uc(1,L,3,4,"span",36),l.ic()),2&e){var c=t.$implicit;l.yc(2);var i=l.Mc(7);l.Pb(1),l.Ec("ngIf",c.dob)("ngIfElse",i)}}function A(e,t){1&e&&(l.jc(0,"th",35),l.Wc(1," Mobile"),l.ic())}function R(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.ic()),2&e){var c=l.yc().$implicit;l.Pb(1),l.Xc(c.mobilenumber)}}function O(e,t){if(1&e&&(l.jc(0,"td",33),l.Uc(1,R,2,1,"span",36),l.ic()),2&e){var c=t.$implicit;l.yc(2);var i=l.Mc(7);l.Pb(1),l.Ec("ngIf",c.mobilenumber)("ngIfElse",i)}}function B(e,t){1&e&&l.ec(0,"th",37)}function X(e,t){if(1&e){var c=l.kc();l.jc(0,"td",33),l.jc(1,"div",38),l.jc(2,"div",39),l.ec(3,"span",40),l.jc(4,"div",41),l.jc(5,"button",42),l.uc("click",(function(){l.Oc(c);var e=t.$implicit;return l.yc(2).onEdit(e)})),l.ec(6,"span",43),l.Wc(7,"\xa0\xa0\xa0Edit"),l.ic(),l.jc(8,"button",42),l.uc("click",(function(){l.Oc(c);var e=t.$implicit;return l.yc(2).onView(e)})),l.ec(9,"span",44),l.Wc(10,"\xa0\xa0\xa0View"),l.ic(),l.ic(),l.ic(),l.ic(),l.ic()}}function $(e,t){1&e&&l.ec(0,"tr",45)}function z(e,t){1&e&&l.ec(0,"tr",46)}var T=function(){return[5,10,25,100]};function V(e,t){if(1&e){var c=l.kc();l.jc(0,"div",8),l.jc(1,"mat-card"),l.jc(2,"div",9),l.jc(3,"mat-card-title"),l.Wc(4,"All Students Data"),l.ic(),l.jc(5,"div"),l.jc(6,"mat-form-field",10),l.jc(7,"mat-label"),l.Wc(8,"Filter"),l.ic(),l.jc(9,"input",11),l.uc("keyup",(function(e){return l.Oc(c),l.yc().applyFilter(e)})),l.ic(),l.jc(10,"mat-icon",12),l.Wc(11,"search"),l.ic(),l.ic(),l.ic(),l.ic(),l.jc(12,"mat-card-content",13),l.jc(13,"table",14),l.hc(14,15),l.Uc(15,j,2,3,"th",16),l.Uc(16,v,2,2,"td",17),l.gc(),l.hc(17,18),l.Uc(18,E,2,0,"th",19),l.Uc(19,W,2,2,"td",17),l.gc(),l.hc(20,20),l.Uc(21,I,2,0,"th",19),l.Uc(22,w,2,2,"td",17),l.gc(),l.hc(23,21),l.Uc(24,P,2,0,"th",19),l.Uc(25,U,2,2,"td",17),l.gc(),l.hc(26,22),l.Uc(27,k,2,0,"th",19),l.Uc(28,q,2,2,"td",17),l.gc(),l.hc(29,23),l.Uc(30,N,2,0,"th",19),l.Uc(31,x,2,2,"td",17),l.gc(),l.hc(32,24),l.Uc(33,_,2,0,"th",19),l.Uc(34,M,2,2,"td",17),l.gc(),l.hc(35,25),l.Uc(36,A,2,0,"th",19),l.Uc(37,O,2,2,"td",17),l.gc(),l.hc(38,26),l.Uc(39,B,1,0,"th",27),l.Uc(40,X,11,0,"td",17),l.gc(),l.Uc(41,$,1,0,"tr",28),l.Uc(42,z,1,0,"tr",29),l.ic(),l.ec(43,"mat-paginator",30),l.ic(),l.ic(),l.ic()}if(2&e){var i=l.yc();l.Pb(13),l.Ec("dataSource",i.studentList),l.Pb(28),l.Ec("matHeaderRowDef",i.displayedColumns),l.Pb(1),l.Ec("matRowDefColumns",i.displayedColumns),l.Pb(1),l.Ec("length",i.recordLength)("pageSize",10)("pageSizeOptions",l.Hc(6,T))}}function G(e,t){1&e&&l.Wc(0,"---")}var H,Z=((H=function(){function e(t,c,i){_classCallCheck(this,e),this._ss=t,this._router=c,this._activatedRout=i,this.displayedColumns=["select","rollnumber","enrolnumber","name","sex","section","dob","mobilenumber","actions"],this.filterData="",this.isLoading=!0,this.selection=new s.c(!0,[])}return _createClass(e,[{key:"ngOnInit",value:function(){this.getStudentList()}},{key:"getStudentList",value:function(){var e=this;this._ss.getAllStudents().subscribe((function(t){console.log("data",t),t&&(e.recordLength=t.length,e.studentList=new o.k(t),e.studentList.sort=e.TSort,e.studentList.paginator=e.paginator,e.isLoading=!1)}))}},{key:"isAllSelected",value:function(){return this.selection.selected.length===this.studentList.data.length}},{key:"masterToggle",value:function(){var e=this;this.isAllSelected()?this.selection.clear():this.studentList.data.forEach((function(t){return e.selection.select(t)}))}},{key:"checkboxLabel",value:function(e){return e?"".concat(this.selection.isSelected(e)?"deselect":"select"," row ").concat(e.position+1):(this.isAllSelected()?"select":"deselect")+" all"}},{key:"applyFilter",value:function(e){this.studentList.filter=e.target.value.trim().toLowerCase(),this.studentList.paginator&&this.studentList.paginator.firstPage()}},{key:"onEdit",value:function(e){e&&(console.log("row",e),this._router.navigate(["edit",e.id],{relativeTo:this._activatedRout}))}},{key:"onView",value:function(e){console.log("row",e),this._router.navigate(["students/details"],{queryParams:{id:e.id}})}}]),e}()).\u0275fac=function(e){return new(e||H)(l.dc(u.a),l.dc(n.g),l.dc(n.a))},H.\u0275cmp=l.Xb({type:H,selectors:[["app-students-list"]],viewQuery:function(e,t){var c;1&e&&(l.Sc(r.a,!0),l.Sc(a.a,!0)),2&e&&(l.Lc(c=l.vc())&&(t.paginator=c.first),l.Lc(c=l.vc())&&(t.TSort=c.first))},decls:8,vars:2,consts:[[1,"list-container"],[1,"page-title"],["class","no-record",4,"ngIf"],["class","s-list",4,"ngIf"],["dash",""],[1,"no-record"],["src","assets/images/page-loader.gif","alt",""],[1,"m-0"],[1,"s-list"],[1,"list-head"],["appearance","outline",1,"col-12","p-0"],["matInput","","placeholder","Search...",3,"keyup"],["matSuffix",""],[1,"pt-4"],["mat-table","","matSort","",1,"col-12",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","rollnumber"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","enrolnumber"],["matColumnDef","name"],["matColumnDef","sex"],["matColumnDef","section"],["matColumnDef","dob"],["matColumnDef","mobilenumber"],["matColumnDef","actions"],["mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf","ngIfElse"],["mat-header-cell","",2,"width","50px"],[1,"col"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flaticon-more-button-of-three-dots"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem","",3,"click"],[1,"fa","fa-cogs",2,"color","#00c853"],[1,"fa","fa-eye",2,"color","#ff8800"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(l.jc(0,"div",0),l.jc(1,"div",1),l.jc(2,"h3"),l.Wc(3,"Students"),l.ic(),l.ic(),l.Uc(4,h,4,0,"div",2),l.Uc(5,V,44,7,"div",3),l.ic(),l.Uc(6,G,1,0,"ng-template",null,4,l.Vc)),2&e&&(l.Pb(4),l.Ec("ngIf",t.isLoading),l.Pb(1),l.Ec("ngIf",!t.isLoading))},directives:[i.n,m.a,m.d,d.c,d.f,f.b,b.a,d.g,m.b,o.j,a.a,o.c,o.e,o.b,o.g,o.i,r.a,o.d,p.a,o.a,a.b,g.a,g.e,g.c,g.b,o.f,o.h],pipes:[i.v,i.f],styles:[""]}),H),K=c("3Pt+"),J=c("dNgK"),Q=c("d3UM"),Y=c("FKr1"),ee=c("iadO"),te=c("bTqV");function ce(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," First name is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function ie(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Last name is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function ne(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Gender is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function re(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Admin Number is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function ae(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Enrollment Number is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function oe(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Date of birth is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function se(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Admission Date is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function le(e,t){if(1&e&&(l.jc(0,"mat-option",57),l.Wc(1),l.ic()),2&e){var c=t.$implicit;l.Ec("value",c.id),l.Pb(1),l.Xc(c.classname)}}function ue(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Class name is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function me(e,t){if(1&e&&(l.jc(0,"mat-option",57),l.Wc(1),l.ic()),2&e){var c=t.$implicit;l.Ec("value",c.id),l.Pb(1),l.Xc(c.sectionname)}}function de(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Section is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function fe(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Roll number is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function be(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Fee is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function pe(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Caste is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function ge(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Religion is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function he(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Mothertongue is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function je(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Nationality is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function ve(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Blood group is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function Ee(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Mobile number is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function ye(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Mobile number must be minimum 10 characters "),l.ic())}function We(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," What's app number is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function Ie(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," What's app number must be minimum 10 characters "),l.ic())}function De(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Adhaar number must be minimum 12 characters "),l.ic())}function we(e,t){if(1&e&&l.ec(0,"img",58),2&e){var c=l.yc(2);l.Ec("src",c.imageSrc,l.Pc)}}function Pe(e,t){1&e&&(l.jc(0,"mat-error"),l.Wc(1," Religion is "),l.jc(2,"strong"),l.Wc(3,"required"),l.ic(),l.ic())}function Ce(e,t){if(1&e){var c=l.kc();l.jc(0,"button",59),l.uc("click",(function(e){return l.Oc(c),l.yc(2).onCancel(e)})),l.Wc(1,"Cancel"),l.ic()}}function Ue(e,t){if(1&e){var c=l.kc();l.jc(0,"button",59),l.uc("click",(function(e){return l.Oc(c),l.yc(2).onFormReset(e)})),l.Wc(1,"Reset"),l.ic()}}function ke(e,t){if(1&e){var c=l.kc();l.jc(0,"form",6),l.uc("ngSubmit",(function(){return l.Oc(c),l.yc().onSubmit()})),l.jc(1,"div",7),l.jc(2,"div",8),l.jc(3,"mat-form-field",9),l.jc(4,"mat-label"),l.Wc(5,"First Name"),l.ic(),l.ec(6,"input",10),l.Uc(7,ce,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(8,"div",8),l.jc(9,"mat-form-field",9),l.jc(10,"mat-label"),l.Wc(11,"Last Name"),l.ic(),l.ec(12,"input",12),l.Uc(13,ie,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(14,"div",8),l.jc(15,"mat-form-field",9),l.jc(16,"mat-label"),l.Wc(17,"Choose Gender"),l.ic(),l.jc(18,"mat-select",13),l.jc(19,"mat-option",14),l.Wc(20,"Male"),l.ic(),l.jc(21,"mat-option",15),l.Wc(22,"Female"),l.ic(),l.jc(23,"mat-option",16),l.Wc(24,"Others"),l.ic(),l.ic(),l.Uc(25,ne,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(26,"div",8),l.jc(27,"mat-form-field",9),l.jc(28,"mat-label"),l.Wc(29,"Admin Number"),l.ic(),l.ec(30,"input",17),l.Uc(31,re,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(32,"div",8),l.jc(33,"mat-form-field",9),l.jc(34,"mat-label"),l.Wc(35,"Enrollment Number"),l.ic(),l.ec(36,"input",18),l.Uc(37,ae,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(38,"div",8),l.jc(39,"mat-form-field",9),l.jc(40,"mat-label"),l.Wc(41,"Date of Birth "),l.ic(),l.ec(42,"input",19),l.ec(43,"mat-datepicker-toggle",20),l.ec(44,"mat-datepicker",null,21),l.Uc(46,oe,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(47,"div",8),l.jc(48,"mat-form-field",9),l.jc(49,"mat-label"),l.Wc(50,"Date of Admission "),l.ic(),l.ec(51,"input",22),l.ec(52,"mat-datepicker-toggle",20),l.ec(53,"mat-datepicker",null,23),l.Uc(55,se,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(56,"div",8),l.jc(57,"mat-form-field",9),l.jc(58,"mat-label"),l.Wc(59,"Class"),l.ic(),l.jc(60,"mat-select",24),l.uc("selectionChange",(function(e){return l.Oc(c),l.yc().onClassChange(e)})),l.Uc(61,le,2,2,"mat-option",25),l.ic(),l.Uc(62,ue,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(63,"div",8),l.jc(64,"mat-form-field",9),l.jc(65,"mat-label"),l.Wc(66,"Section"),l.ic(),l.jc(67,"mat-select",26),l.Uc(68,me,2,2,"mat-option",25),l.ic(),l.Uc(69,de,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(70,"div",8),l.jc(71,"mat-form-field",9),l.jc(72,"mat-label"),l.Wc(73,"Roll Number"),l.ic(),l.ec(74,"input",27),l.Uc(75,fe,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(76,"div",8),l.jc(77,"mat-form-field",9),l.jc(78,"mat-label"),l.Wc(79,"Fees"),l.ic(),l.ec(80,"input",28),l.Uc(81,be,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(82,"div",8),l.jc(83,"mat-form-field",9),l.jc(84,"mat-label"),l.Wc(85,"Caste"),l.ic(),l.ec(86,"input",29),l.Uc(87,pe,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(88,"div",8),l.jc(89,"mat-form-field",9),l.jc(90,"mat-label"),l.Wc(91,"Religion "),l.ic(),l.ec(92,"input",30),l.Uc(93,ge,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(94,"div",8),l.jc(95,"mat-form-field",9),l.jc(96,"mat-label"),l.Wc(97,"Mothertongue"),l.ic(),l.jc(98,"mat-select",31),l.jc(99,"mat-option",32),l.Wc(100,"Telugu"),l.ic(),l.jc(101,"mat-option",33),l.Wc(102,"Hindi"),l.ic(),l.jc(103,"mat-option",34),l.Wc(104,"English"),l.ic(),l.ic(),l.Uc(105,he,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(106,"div",8),l.jc(107,"mat-form-field",9),l.jc(108,"mat-label"),l.Wc(109,"Nationality"),l.ic(),l.ec(110,"input",35),l.Uc(111,je,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(112,"div",8),l.jc(113,"mat-form-field",9),l.jc(114,"mat-label"),l.Wc(115,"Blood Group"),l.ic(),l.ec(116,"input",36),l.Uc(117,ve,4,0,"mat-error",11),l.ic(),l.ic(),l.jc(118,"div",8),l.jc(119,"mat-form-field",9),l.jc(120,"mat-label"),l.Wc(121,"Mobile Number"),l.ic(),l.ec(122,"input",37),l.Uc(123,Ee,4,0,"mat-error",11),l.Uc(124,ye,2,0,"mat-error",11),l.ic(),l.ic(),l.jc(125,"div",8),l.jc(126,"mat-form-field",9),l.jc(127,"mat-label"),l.Wc(128,"What's App Number"),l.ic(),l.ec(129,"input",38),l.Uc(130,We,4,0,"mat-error",11),l.Uc(131,Ie,2,0,"mat-error",11),l.ic(),l.ic(),l.jc(132,"div",39),l.jc(133,"mat-card-title"),l.Wc(134,"Optional Details"),l.ic(),l.ic(),l.jc(135,"div",8),l.jc(136,"mat-form-field",9),l.jc(137,"mat-label"),l.Wc(138,"Adhaar Number"),l.ic(),l.ec(139,"input",40),l.Uc(140,De,2,0,"mat-error",11),l.ic(),l.ic(),l.jc(141,"div",8),l.jc(142,"mat-form-field",9),l.jc(143,"mat-label"),l.Wc(144,"Biometric ID"),l.ic(),l.ec(145,"input",41),l.ec(146,"mat-error"),l.ic(),l.ic(),l.jc(147,"div",8),l.jc(148,"mat-form-field",9),l.jc(149,"mat-label"),l.Wc(150,"Bus Route"),l.ic(),l.jc(151,"mat-select",42),l.jc(152,"mat-option",43),l.Wc(153,"XYZ"),l.ic(),l.ic(),l.ec(154,"mat-error"),l.ic(),l.ic(),l.jc(155,"div",8),l.jc(156,"mat-form-field",9),l.jc(157,"mat-label"),l.Wc(158,"Bus Number"),l.ic(),l.ec(159,"input",44),l.ec(160,"mat-error"),l.ic(),l.ic(),l.jc(161,"div",8),l.jc(162,"mat-form-field",9),l.jc(163,"mat-label"),l.Wc(164,"Hostel Block"),l.ic(),l.ec(165,"input",45),l.ec(166,"mat-error"),l.ic(),l.ic(),l.jc(167,"div",8),l.jc(168,"mat-form-field",9),l.jc(169,"mat-label"),l.Wc(170,"Hostel Room"),l.ic(),l.ec(171,"input",46),l.ec(172,"mat-error"),l.ic(),l.ic(),l.jc(173,"div",8),l.jc(174,"mat-form-field",9),l.jc(175,"mat-label"),l.Wc(176,"Previous Class"),l.ic(),l.ec(177,"input",47),l.ec(178,"mat-error"),l.ic(),l.ic(),l.jc(179,"div",8),l.jc(180,"mat-form-field",9),l.jc(181,"mat-label"),l.Wc(182,"Previous School"),l.ic(),l.ec(183,"input",48),l.ec(184,"mat-error"),l.ic(),l.ic(),l.jc(185,"div",8),l.jc(186,"mat-form-field",9),l.jc(187,"mat-label"),l.Wc(188,"Previous School Address"),l.ic(),l.ec(189,"input",49),l.ec(190,"mat-error"),l.ic(),l.ic(),l.jc(191,"div",8),l.Uc(192,we,1,1,"img",50),l.jc(193,"div",51),l.jc(194,"label",52),l.Wc(195,"Upload Picture"),l.ic(),l.jc(196,"input",53),l.uc("change",(function(e){return l.Oc(c),l.yc().onFileChange(e)})),l.ic(),l.Uc(197,Pe,4,0,"mat-error",11),l.ic(),l.ic(),l.ic(),l.jc(198,"div",54),l.jc(199,"button",55),l.Wc(200),l.ic(),l.Uc(201,Ce,2,0,"button",56),l.Uc(202,Ue,2,0,"button",56),l.ic(),l.ic()}if(2&e){var i=l.Mc(45),n=l.Mc(54),r=l.yc();l.Ec("formGroup",r.admissionForm),l.Pb(7),l.Ec("ngIf",r.submitted&&r.f.firstname.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.lastname.hasError("required")),l.Pb(12),l.Ec("ngIf",r.submitted&&r.f.sex.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.adminnumber.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.enrolnumber.hasError("required")),l.Pb(5),l.Ec("matDatepicker",i),l.Pb(1),l.Ec("for",i),l.Pb(3),l.Ec("ngIf",r.submitted&&r.f.dob.hasError("required")),l.Pb(5),l.Ec("matDatepicker",n),l.Pb(1),l.Ec("for",n),l.Pb(3),l.Ec("ngIf",r.submitted&&r.f.dateofadmission.hasError("required")),l.Pb(6),l.Ec("ngForOf",r.classList),l.Pb(1),l.Ec("ngIf",r.submitted&&r.f.Class.hasError("required")),l.Pb(6),l.Ec("ngForOf",r.sectionList),l.Pb(1),l.Ec("ngIf",r.submitted&&r.f.section.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.rollnumber.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.fee.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.cast.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.religion.hasError("required")),l.Pb(12),l.Ec("ngIf",r.submitted&&r.f.Mothertoung.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.nationality.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.bloodgroup.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.mobilenumber.hasError("required")),l.Pb(1),l.Ec("ngIf",r.submitted&&r.f.mobilenumber.hasError("minlength")&&r.f.mobilenumber.dirty&&!r.f.mobilenumber.hasError("required")),l.Pb(6),l.Ec("ngIf",r.submitted&&r.f.whatsappnumber.hasError("required")),l.Pb(1),l.Ec("ngIf",r.submitted&&r.f.whatsappnumber.hasError("minlength")&&r.f.whatsappnumber.dirty&&!r.f.whatsappnumber.hasError("required")),l.Pb(9),l.Ec("ngIf",r.submitted&&r.f.adharnumber.hasError("minlength")&&!r.f.adharnumber.hasError("required")),l.Pb(52),l.Ec("ngIf",r.imageSrc),l.Pb(5),l.Ec("ngIf",r.submitted&&r.f.file.hasError("required")),l.Pb(3),l.Xc(r.buttonLabel),l.Pb(1),l.Ec("ngIf",r.showButtons),l.Pb(1),l.Ec("ngIf",!r.showButtons)}}function Se(e,t){1&e&&l.Wc(0,"---")}var qe,Ne=((qe=function(){function e(t,c,i,n,r){_classCallCheck(this,e),this._ar=t,this._router=c,this._snackBar=i,this._ss=n,this._date=r,this.formCancel=new l.r,this.formSubmit=new l.r,this.loading=!1,this.submitted=!1,this.error="",this.cardTitle="Add New Students",this.showButtons=!1,this.showForm=!0,this.buttonLabel="Next",this.horizontalPosition="start",this.verticalPosition="bottom",this.classList=[],this.sectionList=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.admissionForm=new K.j({firstname:new K.g(null,K.x.required),lastname:new K.g(null,K.x.required),dob:new K.g(null,K.x.required),sex:new K.g(null,K.x.required),adminnumber:new K.g(null,K.x.required),enrolnumber:new K.g(null,K.x.required),dateofadmission:new K.g(null,K.x.required),Class:new K.g(null,K.x.required),rollnumber:new K.g(null,K.x.required),section:new K.g(null,K.x.required),fee:new K.g(null,K.x.required),cast:new K.g(null,K.x.required),religion:new K.g(null,K.x.required),Mothertoung:new K.g(null,K.x.required),nationality:new K.g(null,K.x.required),bloodgroup:new K.g(null,K.x.required),mobilenumber:new K.g(null,[K.x.required,K.x.minLength(10)]),whatsappnumber:new K.g(null,[K.x.required,K.x.minLength(10)]),adharnumber:new K.g(null,K.x.minLength(12)),biometricid:new K.g(null),busroute:new K.g(null),busnumber:new K.g(null),hostelblock:new K.g(null),hostelroom:new K.g(null),previousclass:new K.g(null),previousschoolname:new K.g(null),previousschooladdress:new K.g(null),file:new K.g(null,K.x.required),image:new K.g("",K.x.required)}),console.log("studentDetails",this.studentDetails),this.studentDetails&&this.studentDetails[0].id&&(this.cardTitle="Update Student Record",this.buttonLabel="Update",this.showButtons=!0),this.getClassSection(),this.setDataToForm()}},{key:"getClassSection",value:function(){var e=this;this._ss.getClassSection().subscribe((function(t){t&&(e.classList=t)}))}},{key:"onFileChange",value:function(e){var t=this,c=new FileReader;e.target.files&&e.target.files.length&&(c.readAsDataURL(e.target.files[0]),c.onload=function(){t.imageSrc=c.result,t.admissionForm.patchValue({image:c.result}),t.admissionForm.get("image").updateValueAndValidity()})}},{key:"onClassChange",value:function(e){var t=this;e&&this._ss.getSections(e.value).subscribe((function(e){e&&(t.sectionList=e)}))}},{key:"setDataToForm",value:function(){this.studentDetails&&this.admissionForm.patchValue(this.studentDetails[0])}},{key:"onSubmit",value:function(){var e=this;if(console.log("onSubmit"),this.submitted=!0,console.log("this.admissionForm.value",this.admissionForm.value),this.admissionForm.value&&(this.admissionForm.value.Class=parseInt(this.admissionForm.value.Class,10),this.admissionForm.value.dob=this._date.transform(this.admissionForm.value.dob,"MM/dd/yyyy"),this.admissionForm.value.dateofadmission=this._date.transform(this.admissionForm.value.dateofadmission,"MM/dd/yyyy")),!this.admissionForm.invalid){var t={};Object.assign(t,this.admissionForm.value),delete t.file,this.loading=!0,this.studentDetails&&this.studentDetails[0].id?(t.id=this.studentDetails[0].id,console.log("studentDetails.id",this.studentDetails.id),this._ss.updateStudent(this.studentDetails[0].id,t).subscribe((function(t){e.formSubmit.emit(!0),e.showNotification("Updated Successfully!!"),e.admissionForm.reset(),e.showForm=!1,e.imageSrc="",setTimeout((function(){e.showForm=!0}),50)}),(function(t){e.error=t,e.loading=!1,console.error(e.error)}))):this._ss.postStudent(t).subscribe((function(t){var c=t.id;e.showNotification("Submitted Successfully!!"),e._router.navigate(["/parents/add"],{queryParams:{id:c}}),e.admissionForm.reset(),e.imageSrc=""}),(function(t){e.error=t,e.loading=!1,console.error(e.error)}))}}},{key:"showNotification",value:function(e){this._snackBar.open(e,"",{duration:2e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["success-snackbar"]})}},{key:"onFormReset",value:function(e){e&&this.admissionForm&&this.admissionForm.reset()}},{key:"onCancel",value:function(e){e&&this.formCancel.emit(!0)}},{key:"f",get:function(){return this.admissionForm.controls}}]),e}()).\u0275fac=function(e){return new(e||qe)(l.dc(n.a),l.dc(n.g),l.dc(J.a),l.dc(u.a),l.dc(i.f))},qe.\u0275cmp=l.Xb({type:qe,selectors:[["app-student-admission"]],inputs:{studentDetails:"studentDetails"},outputs:{formCancel:"formCancel",formSubmit:"formSubmit"},features:[l.Ob([i.f])],decls:12,vars:2,consts:[[1,"form-container"],[1,"page-title"],[1,"form-fields"],[1,"pt-2"],[3,"formGroup","ngSubmit",4,"ngIf"],["dash",""],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-4"],["appearance","outline",1,"p-0"],["matInput","","formControlName","firstname","placeholder","Enter First Name"],[4,"ngIf"],["matInput","","placeholder","Enter Last Name","formControlName","lastname"],["placeholder","Select Gender","formControlName","sex"],["value","male"],["value","female"],["value","others"],["type","number","matInput","","placeholder","Enter Admin Number","formControlName","adminnumber"],["type","number","matInput","","placeholder","Enter Enrollment Number","formControlName","enrolnumber"],["matInput","","placeholder","Select DOB","formControlName","dob",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["matInput","","placeholder","Select dateofadmission","formControlName","dateofadmission",3,"matDatepicker"],["picker12",""],["placeholder","Select Class","formControlName","Class",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Select Section","formControlName","section"],["type","number","matInput","","placeholder","Enter Roll Number","formControlName","rollnumber"],["type","number","matInput","","placeholder","Enter Fees","formControlName","fee"],["matInput","","placeholder","Enter Caste","formControlName","cast"],["matInput","","placeholder","Enter Religion","formControlName","religion"],["placeholder","Select Mothertongue","formControlName","Mothertoung"],["value","telugu"],["value","hindi"],["value","english"],["matInput","","placeholder","Enter Nationality","formControlName","nationality"],["matInput","","placeholder","Enter Blood Group","formControlName","bloodgroup"],["matInput","","placeholder","Enter Mobile Number","formControlName","mobilenumber"],["matInput","","placeholder","Enter Whatsapp Number","formControlName","whatsappnumber"],[1,"col-12","pb-2","pt-3"],["type","number","matInput","","placeholder","Enter Adhaar","formControlName","adharnumber"],["matInput","","placeholder","Enter Biometric ID","formControlName","biometricid"],["placeholder","Select Route","formControlName","busroute"],["value","xyz"],["type","number","matInput","","placeholder","Enter Bus Number","formControlName","busnumber"],["matInput","","placeholder","Enter Hostel Block ","formControlName","hostelblock"],["matInput","","placeholder","Enter Hostel Room","formControlName","hostelroom"],["type","number","matInput","","placeholder","Enter Previous Class","formControlName","previousclass"],["matInput","","placeholder","Enter Previous School","formControlName","previousschoolname"],["matInput","","placeholder","Enter Previous School Add","formControlName","previousschooladdress"],["style","width:200px;","class","mb-2",3,"src",4,"ngIf"],[1,"form-group"],["for","exampleFormControlFile1"],["type","file","id","exampleFormControlFile1","formControlName","file",1,"form-control-file",3,"change"],[1,"example-button-row","pt-3","text-center"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","","class","ml-3 mat-secondary",3,"click",4,"ngIf"],[3,"value"],[1,"mb-2",2,"width","200px",3,"src"],["mat-raised-button","",1,"ml-3","mat-secondary",3,"click"]],template:function(e,t){1&e&&(l.jc(0,"div",0),l.jc(1,"div",1),l.jc(2,"h3"),l.Wc(3,"Students"),l.ic(),l.ic(),l.jc(4,"div",2),l.jc(5,"mat-card"),l.jc(6,"mat-card-title"),l.Wc(7),l.ic(),l.jc(8,"mat-card-content",3),l.Uc(9,ke,203,33,"form",4),l.ic(),l.ic(),l.ic(),l.ic(),l.Uc(10,Se,1,0,"ng-template",null,5,l.Vc)),2&e&&(l.Pb(7),l.Xc(t.cardTitle),l.Pb(2),l.Ec("ngIf",t.showForm))},directives:[m.a,m.d,m.b,i.n,K.z,K.r,K.k,d.c,d.f,f.b,K.c,K.q,K.i,Q.a,Y.n,K.v,ee.b,ee.d,d.g,ee.a,i.m,d.b,te.a],styles:[""]}),qe);function Fe(e,t){1&e&&(l.jc(0,"div",2),l.ec(1,"img",3),l.jc(2,"p",4),l.Wc(3,"loading..."),l.ic(),l.ic())}function xe(e,t){if(1&e){var c=l.kc();l.jc(0,"div"),l.jc(1,"app-student-admission",5),l.uc("formSubmit",(function(e){return l.Oc(c),l.yc().onFormSubmit(e)}))("formCancel",(function(e){return l.Oc(c),l.yc().onFormCancel(e)})),l.ic(),l.ic()}if(2&e){var i=l.yc();l.Pb(1),l.Ec("studentDetails",i.studentDetails)}}function _e(e,t){1&e&&(l.jc(0,"div",6),l.ec(1,"img",7),l.jc(2,"p",8),l.Wc(3,"loading..."),l.ic(),l.ic())}function Le(e,t){1&e&&l.ec(0,"img",28)}function Me(e,t){1&e&&l.ec(0,"img",28)}function Ae(e,t){1&e&&l.ec(0,"img",29)}function Re(e,t){if(1&e&&(l.jc(0,"h3",30),l.Wc(1),l.zc(2,"titlecase"),l.zc(3,"titlecase"),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Zc("",l.Ac(2,2,c.studentDetails.firstname)," ",l.Ac(3,4,c.studentDetails.lastname)," ")}}function Oe(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.zc(2,"titlecase"),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(l.Ac(2,1,c.studentDetails.sex))}}function Be(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.zc(2,"titlecase"),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(l.Ac(2,1,c.studentDetails.bloodgroup))}}function Xe(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(c.studentDetails.enrolnumber)}}function $e(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.zc(2,"date"),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(l.Bc(2,1,c.studentDetails.dob,"dd.MM.yyyy"))}}function ze(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.zc(2,"titlecase"),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(l.Ac(2,1,c.studentDetails.religion))}}function Te(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.zc(2,"date"),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(l.Bc(2,1,c.studentDetails.dateofadmission,"dd.MM.yyyy"))}}function Ve(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(c.studentDetails.Class)}}function Ge(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(c.studentDetails.section)}}function He(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(c.studentDetails.rollnumber)}}function Ze(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(c.studentDetails.adharnumber)}}function Ke(e,t){if(1&e&&(l.jc(0,"span"),l.Wc(1),l.ic()),2&e){var c=l.yc(2);l.Pb(1),l.Xc(c.studentDetails.mobilenumber)}}function Je(e,t){if(1&e&&(l.jc(0,"div",9),l.jc(1,"mat-card"),l.jc(2,"mat-card-title"),l.Wc(3,"About Me "),l.jc(4,"div",10),l.jc(5,"div",11),l.jc(6,"div",12),l.ec(7,"span",13),l.jc(8,"div",14),l.jc(9,"button",15),l.ec(10,"span",16),l.Wc(11,"\xa0\xa0\xa0Edit"),l.ic(),l.ic(),l.ic(),l.ic(),l.ic(),l.ic(),l.jc(12,"mat-card-content",17),l.jc(13,"div",18),l.jc(14,"div",19),l.Uc(15,Le,1,0,"img",20),l.Uc(16,Me,1,0,"img",20),l.Uc(17,Ae,1,0,"img",21),l.ic(),l.jc(18,"div",22),l.Uc(19,Re,4,6,"h3",23),l.jc(20,"div",24),l.jc(21,"table",25),l.jc(22,"tbody"),l.jc(23,"tr"),l.jc(24,"td"),l.Wc(25,"Gender"),l.ic(),l.jc(26,"td",26),l.Uc(27,Oe,3,3,"span",27),l.ic(),l.ic(),l.jc(28,"tr"),l.jc(29,"td"),l.Wc(30,"Blood Group"),l.ic(),l.jc(31,"td",26),l.Uc(32,Be,3,3,"span",27),l.ic(),l.ic(),l.jc(33,"tr"),l.jc(34,"td"),l.Wc(35,"Enrollment Number"),l.ic(),l.jc(36,"td",26),l.Uc(37,Xe,2,1,"span",27),l.ic(),l.ic(),l.jc(38,"tr"),l.jc(39,"td"),l.Wc(40,"Date Of Birth"),l.ic(),l.jc(41,"td",26),l.Uc(42,$e,3,4,"span",27),l.ic(),l.ic(),l.jc(43,"tr"),l.jc(44,"td"),l.Wc(45,"Religion"),l.ic(),l.jc(46,"td",26),l.Uc(47,ze,3,3,"span",27),l.ic(),l.ic(),l.jc(48,"tr"),l.jc(49,"td"),l.Wc(50,"Admission Date"),l.ic(),l.jc(51,"td",26),l.Uc(52,Te,3,4,"span",27),l.ic(),l.ic(),l.jc(53,"tr"),l.jc(54,"td"),l.Wc(55,"Class"),l.ic(),l.jc(56,"td",26),l.Uc(57,Ve,2,1,"span",27),l.ic(),l.ic(),l.jc(58,"tr"),l.jc(59,"td"),l.Wc(60,"Section"),l.ic(),l.jc(61,"td",26),l.Uc(62,Ge,2,1,"span",27),l.ic(),l.ic(),l.jc(63,"tr"),l.jc(64,"td"),l.Wc(65,"Roll"),l.ic(),l.jc(66,"td",26),l.Uc(67,He,2,1,"span",27),l.ic(),l.ic(),l.jc(68,"tr"),l.jc(69,"td"),l.Wc(70,"Aadhar No"),l.ic(),l.jc(71,"td",26),l.Uc(72,Ze,2,1,"span",27),l.ic(),l.ic(),l.jc(73,"tr"),l.jc(74,"td"),l.Wc(75,"Phone"),l.ic(),l.jc(76,"td",26),l.Uc(77,Ke,2,1,"span",27),l.ic(),l.ic(),l.ic(),l.ic(),l.ic(),l.ic(),l.ic(),l.ic(),l.ic(),l.ic()),2&e){var c=l.yc(),i=l.Mc(7);l.Pb(15),l.Ec("ngIf",c.studentDetails&&"female"==c.studentDetails.sex),l.Pb(1),l.Ec("ngIf",!c.studentDetails),l.Pb(1),l.Ec("ngIf",c.studentDetails&&"male"==c.studentDetails.sex),l.Pb(2),l.Ec("ngIf",c.studentDetails&&c.studentDetails.firstname)("ngIfElse",i),l.Pb(8),l.Ec("ngIf",c.studentDetails&&c.studentDetails.sex)("ngIfElse",i),l.Pb(5),l.Ec("ngIf",c.studentDetails&&c.studentDetails.bloodgroup)("ngIfElse",i),l.Pb(5),l.Ec("ngIf",c.studentDetails&&c.studentDetails.enrolnumber)("ngIfElse",i),l.Pb(5),l.Ec("ngIf",c.studentDetails&&c.studentDetails.dob)("ngIfElse",i),l.Pb(5),l.Ec("ngIf",c.studentDetails&&c.studentDetails.religion)("ngIfElse",i),l.Pb(5),l.Ec("ngIf",c.studentDetails&&c.studentDetails.dateofadmission)("ngIfElse",i),l.Pb(5),l.Ec("ngIf",c.studentDetails&&c.studentDetails.Class)("ngIfElse",i),l.Pb(5),l.Ec("ngIf",c.studentDetails&&c.studentDetails.section)("ngIfElse",i),l.Pb(5),l.Ec("ngIf",c.studentDetails&&c.studentDetails.rollnumber)("ngIfElse",i),l.Pb(5),l.Ec("ngIf",c.studentDetails&&c.studentDetails.adharnumber)("ngIfElse",i),l.Pb(5),l.Ec("ngIf",c.studentDetails&&c.studentDetails.mobilenumber)("ngIfElse",i)}}function Qe(e,t){1&e&&l.Wc(0,"---")}function Ye(e,t){1&e&&l.ec(0,"img",28)}function et(e,t){if(1&e&&l.Uc(0,Ye,1,0,"img",20),2&e){var c=l.yc();l.Ec("ngIf","female"==c.studentDetails.sex)}}var tt,ct,it,nt,rt=[{path:"",component:Z,data:{breadcrumb:"List"}},{path:"admission",component:Ne,data:{breadcrumb:"Admission"}},{path:"edit/:id",component:(ct=function(){function e(t,c,i){var n=this;_classCallCheck(this,e),this._route=t,this._activatedRout=c,this._ss=i,this.showForm=!1,this.isLoading=!0,this._activatedRout.paramMap.subscribe((function(e){console.log("params",e),n.paramID=e.params.id}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.getStudentDetails()}},{key:"getStudentDetails",value:function(){var e=this;this._ss.getStudentDetails(this.paramID).subscribe((function(t){t&&(console.log("record",t),e.studentDetails=t,e.showForm=!0,e.isLoading=!1)}))}},{key:"onFormSubmit",value:function(e){console.log("event",e),e&&this._route.navigate(["./"],{relativeTo:this._activatedRout.parent})}},{key:"onFormCancel",value:function(e){console.log("event",e),e&&this._route.navigate(["./"],{relativeTo:this._activatedRout.parent})}}]),e}(),ct.\u0275fac=function(e){return new(e||ct)(l.dc(n.g),l.dc(n.a),l.dc(u.a))},ct.\u0275cmp=l.Xb({type:ct,selectors:[["app-student-edit"]],decls:2,vars:2,consts:[["class","no-record",4,"ngIf"],[4,"ngIf"],[1,"no-record"],["src","assets/images/page-loader.gif","alt",""],[1,"m-0"],[3,"studentDetails","formSubmit","formCancel"]],template:function(e,t){1&e&&(l.Uc(0,Fe,4,0,"div",0),l.Uc(1,xe,2,1,"div",1)),2&e&&(l.Ec("ngIf",t.isLoading),l.Pb(1),l.Ec("ngIf",t.showForm))},directives:[i.n,Ne],styles:[""]}),ct),data:{breadcrumb:"Edit"}},{path:"details",component:(tt=function(){function e(t,c,i){var n=this;_classCallCheck(this,e),this._route=t,this._activatedRout=c,this._ss=i,this.showDetails=!1,this.isLoading=!0,this._activatedRout.queryParamMap.subscribe((function(e){console.log("params",e),n.paramID=e.params.id?e.params.id:1}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.getStudentDetails()}},{key:"getStudentDetails",value:function(){var e=this;this._ss.getStudentDetails(this.paramID).subscribe((function(t){t&&(console.log("Student Details",t),e.studentDetails=t[0],e.showDetails=!0,e.isLoading=!1)}))}}]),e}(),tt.\u0275fac=function(e){return new(e||tt)(l.dc(n.g),l.dc(n.a),l.dc(u.a))},tt.\u0275cmp=l.Xb({type:tt,selectors:[["app-student-details"]],decls:10,vars:2,consts:[[1,"form-container"],[1,"page-title"],["class","no-record",4,"ngIf"],["class","form-fields",4,"ngIf"],["dash",""],["imgS",""],[1,"no-record"],["src","assets/images/page-loader.gif","alt",""],[1,"m-0"],[1,"form-fields"],[1,"pull-right"],[1,"col"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flaticon-more-button-of-three-dots"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem",""],[1,"fa","fa-cogs",2,"color","#00c853"],[1,"pt-4"],[1,"row"],[1,"col-6","col-md-3"],["src","assets/images/student_female.jpg","alt","",4,"ngIf"],["src","assets/images/male_avatar.jpg","alt","",4,"ngIf"],[1,"col-12","col-md-9"],["class","profile-heading",4,"ngIf","ngIfElse"],[1,"info-table","table-responsive"],[1,"table","text-nowrap"],[1,"font-medium","text-dark-medium"],[4,"ngIf","ngIfElse"],["src","assets/images/student_female.jpg","alt",""],["src","assets/images/male_avatar.jpg","alt",""],[1,"profile-heading"]],template:function(e,t){1&e&&(l.jc(0,"div",0),l.jc(1,"div",1),l.jc(2,"h3"),l.Wc(3,"Students"),l.ic(),l.ic(),l.Uc(4,_e,4,0,"div",2),l.Uc(5,Je,78,27,"div",3),l.ic(),l.Uc(6,Qe,1,0,"ng-template",null,4,l.Vc),l.Uc(8,et,1,1,"ng-template",null,5,l.Vc)),2&e&&(l.Pb(4),l.Ec("ngIf",t.isLoading),l.Pb(1),l.Ec("ngIf",t.showDetails))},directives:[i.n,m.a,m.d,g.a,g.e,g.c,g.b,m.b],pipes:[i.v,i.f],styles:[""]}),tt),data:{breadcrumb:"Details"}}],at=((it=function e(){_classCallCheck(this,e)}).\u0275mod=l.bc({type:it}),it.\u0275inj=l.ac({factory:function(e){return new(e||it)},imports:[[n.i.forChild(rt)],n.i]}),it),ot=c("jAig"),st=((nt=function e(){_classCallCheck(this,e)}).\u0275mod=l.bc({type:nt}),nt.\u0275inj=l.ac({factory:function(e){return new(e||nt)},imports:[[i.c,at,K.m,K.w,g.d,ot.a]]}),nt)}}]);