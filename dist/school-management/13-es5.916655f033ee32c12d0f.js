!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var c=0;c<e.length;c++){var i=e[c];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,c,i){return c&&e(t.prototype,c),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{eK3z:function(e,i,n){"use strict";n.r(i),n.d(i,"AttendanceModule",(function(){return vt}));var a=n("ofXK"),s=n("tyNb"),o=n("M9IT"),l=n("Dh3D"),r=n("+0xr"),d=n("0EQZ"),u=n("3Pt+"),h=n("fXoL"),m=n("zWHe"),f=n("dNgK"),g=n("Wp6s"),p=n("kmnG"),b=n("d3UM"),v=n("qFsG"),S=n("z17N"),w=n("NFeN"),L=n("FKr1"),y=n("bTqV"),k=n("bSwM");function D(t,e){if(1&t&&(h.ic(0,"mat-option",36),h.Yc(1),h.hc()),2&t){var c=e.$implicit;h.Ec("value",c.id),h.Pb(1),h.Zc(c.classname)}}function C(t,e){1&t&&(h.ic(0,"mat-error"),h.Yc(1," Class is "),h.ic(2,"strong"),h.Yc(3,"required"),h.hc(),h.hc())}function _(t,e){if(1&t&&(h.ic(0,"mat-option",36),h.Yc(1),h.hc()),2&t){var c=e.$implicit;h.Ec("value",c.id),h.Pb(1),h.Zc(c.sectionname)}}function I(t,e){1&t&&(h.ic(0,"mat-error"),h.Yc(1," Section is "),h.ic(2,"strong"),h.Yc(3,"required"),h.hc(),h.hc())}function E(t,e){1&t&&(h.ic(0,"mat-error"),h.Yc(1," Date-time is "),h.ic(2,"strong"),h.Yc(3,"required"),h.hc(),h.hc())}function P(t,e){1&t&&(h.ic(0,"mat-error"),h.Yc(1," Attendace_part is "),h.ic(2,"strong"),h.Yc(3,"required"),h.hc(),h.hc())}function x(t,e){if(1&t){var c=h.jc();h.ic(0,"th",37),h.ic(1,"mat-checkbox",38),h.tc("change",(function(t){h.Oc(c);var e=h.xc(2);return t?e.masterToggle():null})),h.hc(),h.hc()}if(2&t){var i=h.xc(2);h.Pb(1),h.Ec("checked",i.selection.hasValue()&&i.isAllSelected())("indeterminate",i.selection.hasValue()&&!i.isAllSelected())("aria-label",i.checkboxLabel())}}function Y(t,e){if(1&t){var c=h.jc();h.ic(0,"td",39),h.ic(1,"mat-checkbox",40),h.tc("click",(function(t){return h.Oc(c),t.stopPropagation()}))("change",(function(t){h.Oc(c);var i=e.$implicit,n=h.xc(2);return t&&n.selection.toggle(i),n.onSelectionToggle(i)})),h.hc(),h.hc()}if(2&t){var i=e.$implicit,n=h.xc(2);h.Pb(1),h.Ec("checked",n.selection.isSelected(i))("aria-label",n.checkboxLabel(i))("checked",!0)}}function F(t,e){1&t&&(h.ic(0,"th",41),h.Yc(1,"Student Name"),h.hc())}function W(t,e){if(1&t&&(h.ic(0,"span"),h.Yc(1),h.hc()),2&t){var c=h.xc().$implicit;h.Pb(1),h.Zc(c.name)}}function A(t,e){if(1&t&&(h.ic(0,"td",39),h.Wc(1,W,2,1,"span",42),h.hc()),2&t){var c=e.$implicit;h.xc(2);var i=h.Mc(11);h.Pb(1),h.Ec("ngIf",c.name)("ngIfElse",i)}}function O(t,e){1&t&&h.dc(0,"tr",43)}function T(t,e){1&t&&h.dc(0,"tr",44)}function R(t,e){if(1&t){var c=h.jc();h.ic(0,"button",45),h.tc("click",(function(t){return h.Oc(c),h.xc(2).onFormReset(t)})),h.Yc(1,"Reset"),h.hc()}}var N=function(){return[5,10,25,100]};function $(t,e){if(1&t){var c=h.jc();h.ic(0,"form",6),h.tc("ngSubmit",(function(){return h.Oc(c),h.xc().onSubmit()})),h.ic(1,"div",7),h.ic(2,"div",8),h.ic(3,"mat-form-field",9),h.ic(4,"mat-label"),h.Yc(5,"Class"),h.hc(),h.ic(6,"mat-select",10),h.tc("selectionChange",(function(t){return h.Oc(c),h.xc().onClassChange(t)})),h.Wc(7,D,2,2,"mat-option",11),h.hc(),h.Wc(8,C,4,0,"mat-error",12),h.hc(),h.hc(),h.ic(9,"div",8),h.ic(10,"mat-form-field",9),h.ic(11,"mat-label"),h.Yc(12,"Section"),h.hc(),h.ic(13,"mat-select",13),h.tc("selectionChange",(function(t){return h.Oc(c),h.xc().onSectionChange(t)})),h.Wc(14,_,2,2,"mat-option",11),h.hc(),h.Wc(15,I,4,0,"mat-error",12),h.hc(),h.hc(),h.ic(16,"div",8),h.ic(17,"mat-form-field",14),h.ic(18,"mat-label"),h.Yc(19,"Select Date"),h.hc(),h.dc(20,"input",15),h.ic(21,"mat-icon",16),h.Yc(22,"date_range"),h.hc(),h.dc(23,"owl-date-time",null,17),h.Wc(25,E,4,0,"mat-error",12),h.hc(),h.hc(),h.ic(26,"div",8),h.ic(27,"mat-form-field",9),h.ic(28,"mat-label"),h.Yc(29,"Select shift"),h.hc(),h.ic(30,"mat-select",18),h.ic(31,"mat-option",19),h.Yc(32,"First shift"),h.hc(),h.ic(33,"mat-option",20),h.Yc(34,"Second shift"),h.hc(),h.hc(),h.Wc(35,P,4,0,"mat-error",12),h.hc(),h.hc(),h.ic(36,"div",21),h.ic(37,"div",22),h.ic(38,"div",23),h.ic(39,"h3"),h.ic(40,"strong"),h.Yc(41,"Student List"),h.hc(),h.hc(),h.hc(),h.ic(42,"table",24),h.gc(43,25),h.Wc(44,x,2,3,"th",26),h.Wc(45,Y,2,3,"td",27),h.fc(),h.gc(46,28),h.Wc(47,F,2,0,"th",29),h.Wc(48,A,2,2,"td",27),h.fc(),h.Wc(49,O,1,0,"tr",30),h.Wc(50,T,1,0,"tr",31),h.hc(),h.dc(51,"mat-paginator",32),h.hc(),h.hc(),h.hc(),h.ic(52,"div",33),h.ic(53,"button",34),h.Yc(54,"Submit"),h.hc(),h.Wc(55,R,2,0,"button",35),h.hc(),h.hc()}if(2&t){var i=h.Mc(24),n=h.xc();h.Ec("formGroup",n.attendanceForm),h.Pb(7),h.Ec("ngForOf",n.classList),h.Pb(1),h.Ec("ngIf",n.submitted&&n.f.classid.hasError("required")),h.Pb(6),h.Ec("ngForOf",n.sectionList),h.Pb(1),h.Ec("ngIf",n.submitted&&n.f.sectionid.hasError("required")),h.Pb(5),h.Ec("owlDateTime",i)("owlDateTimeTrigger",i),h.Pb(1),h.Ec("owlDateTimeTrigger",i),h.Pb(4),h.Ec("ngIf",n.submitted&&n.f.date.hasError("required")),h.Pb(10),h.Ec("ngIf",n.submitted&&n.f.attendace_part.hasError("required")),h.Pb(7),h.Ec("dataSource",n.studentList),h.Pb(7),h.Ec("matHeaderRowDef",n.displayedColumns),h.Pb(1),h.Ec("matRowDefColumns",n.displayedColumns),h.Pb(1),h.Ec("length",n.recordLength)("pageSize",10)("pageSizeOptions",h.Hc(17,N)),h.Pb(4),h.Ec("ngIf",!n.showButtons)}}function j(t,e){}var q,M=((q=function(){function e(c,i,n,a,s){t(this,e),this._cs=c,this._router=i,this._activatedRout=n,this._date=a,this._snackBar=s,this.displayedColumns=["select","name"],this.filterData="",this.isLoading=!0,this.classList=[],this.sectionList=[],this.classID=new u.g,this.sectionID=new u.g,this.shift=new u.g,this.studentNameRecord=[],this.absentStudentsID=[],this.selection=new d.c(!0,this.studentList?this.studentList.data:[]),this.loading=!1,this.submitted=!1,this.isSelected=!0,this.isFormActive=!0,this.error="",this.cardTitle="Add New Students",this.showButtons=!1,this.buttonLabel="Submit",this.showForm=!0,this.disabled=!1,this.showSpinners=!0,this.showSeconds=!1,this.touchUi=!1,this.enableMeridian=!1,this.stepHour=1,this.stepMinute=1,this.stepSecond=1,this.color="primary"}return c(e,[{key:"ngOnInit",value:function(){this.attendanceForm=new u.j({classid:new u.g(null,u.x.required),sectionid:new u.g(null,u.x.required),attendace_part:new u.g(null,u.x.required),date:new u.g(new Date,u.x.required)}),this.isAllSelected(),this.getClassSection(),this.getStudentAttendanceList()}},{key:"getClassSection",value:function(){var t=this;this._cs.getClassSection().subscribe((function(e){e&&(t.classList=e)}))}},{key:"onClassChange",value:function(t){var e=this;t&&this._cs.getSections(t.value).subscribe((function(t){t&&(e.sectionList=t)}))}},{key:"getStudentList",value:function(){var t=this;this.attendanceForm.value.classid&&this.attendanceForm.value.sectionid&&this._cs.getStudentRecord(this.attendanceForm.value.classid,this.attendanceForm.value.sectionid).subscribe((function(e){e&&(t.recordLength=e.length,t.studentNameRecord=e,t.studentList=new r.k(e),t.selection=new d.c(!0,t.studentList.data),t.studentList.sort=t.TSort,t.studentList.paginator=t.paginator,t.isLoading=!1)}))}},{key:"getAttendanceList",value:function(){var t=this;this._cs.getStudentAttendance(this.classID.value,this.sectionID.value).subscribe((function(e){if(e){var c,i=[],n={};e&&e.length&&e[0].absent_student_names1?c=e[0].absent_student_id1.split(","):e&&e.length&&e[0].absent_student_names2&&(c=e[0].absent_student_id2.split(",")),c&&c.length&&(c.map((function(t,c){n.id=e[0].id,n.name=t,n.class=e[0].classname,n.section=e[0].sectionname,n.date=e[0].date,i.push(Object.assign({},n))})),console.log("absentStudentRecord",i))}t.isLoading=!1}))}},{key:"getStudentAttendanceList",value:function(){this._cs.getStudentAttendance(this.classID.value,this.sectionID.value).subscribe((function(t){}))}},{key:"onSectionChange",value:function(t){t&&this.getStudentList()}},{key:"showNotification",value:function(t){this._snackBar.open(t,"",{duration:2e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["success-snackbar"]})}},{key:"onFormReset",value:function(t){t&&this.attendanceForm&&this.attendanceForm.reset()}},{key:"isAllSelected",value:function(){if(this.studentList)return this.selection.selected.length===this.studentList.data.length}},{key:"onSelectionToggle",value:function(t){!1===this.selection.isSelected(t)&&this.absentStudentsID.push(t.id)}},{key:"masterToggle",value:function(){var t=this;this.isAllSelected()?this.selection.clear():this.studentList.data.forEach((function(e){return t.selection.select(e)}))}},{key:"checkboxLabel",value:function(t){return t?"".concat(this.selection.isSelected(t)?"deselect":"select"," row ").concat(t.position+1):(this.isAllSelected()?"select":"deselect")+" all"}},{key:"applyFilter",value:function(t){this.studentList.filter=t.target.value.trim().toLowerCase(),this.studentList.paginator&&this.studentList.paginator.firstPage()}},{key:"onSubmit",value:function(){var t=this;if(this.submitted=!0,!this.attendanceForm.invalid){this.attendanceForm.value&&(this.attendanceForm.value.date=this._date.transform(this.attendanceForm.value.date,"MM/dd/yyyy h:mm a"));var e={},c=[];Object.assign(e,this.attendanceForm.value),console.log("absentStudentsID",this.absentStudentsID),console.log(" this.studentNameRecord",this.studentNameRecord),this.absentStudentsID.map((function(e){t.studentNameRecord.map((function(t){t.id===e&&c.push(t.name)}))})),console.log("studentsName",c),"shift_1"===e.attendace_part?(e.part1=!0,e.part2=!1,e.absent_student_id1=this.absentStudentsID.toString(),e.absent_student_names1=c.toString(),e.absent_student_names2=null,e.absent_student_id2=null):"shift_2"===this.attendanceForm.value.attendace_part&&(e.part2=!0,e.part1=!1,e.absent_student_id2=this.absentStudentsID.toString(),e.absent_student_names2=c.toString(),e.absent_student_names1=null,e.absent_student_id1=null),delete e.attendace_part,this.classList&&this.classList.length&&this.classList.map((function(t){e.classid===t.id&&(e.classname=t.classname)})),this.sectionList&&this.sectionList.length&&this.sectionList.map((function(t){e.sectionid===t.id&&(e.sectionname=t.sectionname)})),this.loading=!0,this._cs.saveAttendance(e).subscribe((function(e){t.showNotification("Submitted Successfully!!"),t.attendanceForm.reset(),t.isFormActive=!1,setTimeout((function(){return t.isFormActive=!0}),0),t.getStudentList(),t.showForm=!1,t.studentList=new r.k([]),setTimeout((function(){t.showForm=!0}),50)}),(function(e){t.error=e,t.loading=!1,console.error(t.error)}))}}},{key:"f",get:function(){return this.attendanceForm.controls}}]),e}()).\u0275fac=function(t){return new(t||q)(h.cc(m.a),h.cc(s.g),h.cc(s.a),h.cc(a.f),h.cc(f.a))},q.\u0275cmp=h.Wb({type:q,selectors:[["app-attendance"]],viewQuery:function(t,e){var c;1&t&&(h.Sc(o.a,!0),h.Sc(l.a,!0)),2&t&&(h.Lc(c=h.uc())&&(e.paginator=c.first),h.Lc(c=h.uc())&&(e.TSort=c.first))},features:[h.Ob([a.f])],decls:12,vars:1,consts:[[1,"form-container"],[1,"page-title"],[1,"form-fields"],[1,"pt-2"],[3,"formGroup","ngSubmit",4,"ngIf"],["dash",""],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-12","col-sm-6","col-md-4"],["appearance","outline",1,"p-0"],["placeholder","Select Class","formControlName","classid",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["placeholder","Select Section","formControlName","sectionid",3,"selectionChange"],["appearance","outline",1,"col-12","p-0"],["matInput","","placeholder","Date Time","formControlName","date",3,"owlDateTime","owlDateTimeTrigger"],["matSuffix","",2,"cursor","pointer",3,"owlDateTimeTrigger"],["dt2",""],["placeholder","Select shift","formControlName","attendace_part"],["value","shift_1"],["value","shift_2"],[1,"list-container","col-12"],[1,"s-list","studentList","p-0"],[1,"list-head"],["mat-table","","matSort","",1,"col-12",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],[1,"example-button-row","pt-3","text-center"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","","class","ml-3 mat-secondary",3,"click",4,"ngIf"],[3,"value"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf","ngIfElse"],["mat-header-row",""],["mat-row",""],["mat-raised-button","",1,"ml-3","mat-secondary",3,"click"]],template:function(t,e){1&t&&(h.ic(0,"div",0),h.ic(1,"div",1),h.ic(2,"h3"),h.Yc(3,"Attendance"),h.hc(),h.hc(),h.ic(4,"div",2),h.ic(5,"mat-card"),h.ic(6,"mat-card-title"),h.Yc(7,"Student Attendance"),h.hc(),h.ic(8,"mat-card-content",3),h.Wc(9,$,56,18,"form",4),h.hc(),h.hc(),h.hc(),h.Wc(10,j,0,0,"ng-template",null,5,h.Xc),h.hc()),2&t&&(h.Pb(9),h.Ec("ngIf",e.isFormActive))},directives:[g.a,g.d,g.b,a.n,u.z,u.r,u.k,p.c,p.f,b.a,u.q,u.i,a.m,v.b,u.c,S.b,S.d,w.a,p.g,S.a,L.n,r.j,l.a,r.c,r.e,r.b,r.g,r.i,o.a,y.a,p.b,r.d,k.a,r.a,l.b,r.f,r.h],styles:[""]}),q),z=n("1kSV");function H(t,e){if(1&t&&(h.ic(0,"mat-option",31),h.Yc(1),h.hc()),2&t){var c=e.$implicit;h.Ec("value",c.id),h.Pb(1),h.Zc(c.classname)}}function Z(t,e){if(1&t&&(h.ic(0,"mat-option",31),h.Yc(1),h.hc()),2&t){var c=e.$implicit;h.Ec("value",c.id),h.Pb(1),h.Zc(c.sectionname)}}function B(t,e){if(1&t){var c=h.jc();h.ic(0,"th",32),h.ic(1,"mat-checkbox",33),h.tc("change",(function(t){h.Oc(c);var e=h.xc();return t?e.masterToggle():null})),h.hc(),h.hc()}if(2&t){var i=h.xc();h.Pb(1),h.Ec("checked",i.selection.hasValue()&&i.isAllSelected())("indeterminate",i.selection.hasValue()&&!i.isAllSelected())("aria-label",i.checkboxLabel())}}function V(t,e){if(1&t){var c=h.jc();h.ic(0,"td",34),h.ic(1,"mat-checkbox",35),h.tc("click",(function(t){return h.Oc(c),t.stopPropagation()}))("change",(function(t){h.Oc(c);var i=e.$implicit,n=h.xc();return t?n.selection.toggle(i):null})),h.hc(),h.hc()}if(2&t){var i=e.$implicit,n=h.xc();h.Pb(1),h.Ec("checked",n.selection.isSelected(i))("aria-label",n.checkboxLabel(i))}}function G(t,e){1&t&&(h.ic(0,"th",36),h.Yc(1,"Absent Students"),h.hc())}function K(t,e){if(1&t&&(h.ic(0,"span"),h.Yc(1),h.hc()),2&t){var c=h.xc().$implicit;h.Pb(1),h.Zc(c.name)}}function X(t,e){if(1&t&&(h.ic(0,"td",34),h.Wc(1,K,2,1,"span",37),h.hc()),2&t){var c=e.$implicit;h.xc();var i=h.Mc(56);h.Pb(1),h.Ec("ngIf",c.name)("ngIfElse",i)}}function Q(t,e){1&t&&(h.ic(0,"th",36),h.Yc(1,"Class Name"),h.hc())}function J(t,e){if(1&t&&(h.ic(0,"span"),h.Yc(1),h.hc()),2&t){var c=h.xc().$implicit;h.Pb(1),h.Zc(c.class)}}function U(t,e){if(1&t&&(h.ic(0,"td",34),h.Wc(1,J,2,1,"span",37),h.hc()),2&t){var c=e.$implicit;h.xc();var i=h.Mc(56);h.Pb(1),h.Ec("ngIf",c.class)("ngIfElse",i)}}function tt(t,e){1&t&&(h.ic(0,"th",36),h.Yc(1," Section Name "),h.hc())}function et(t,e){if(1&t&&(h.ic(0,"span"),h.Yc(1),h.hc()),2&t){var c=h.xc().$implicit;h.Pb(1),h.Zc(c.section)}}function ct(t,e){if(1&t&&(h.ic(0,"td",34),h.Wc(1,et,2,1,"span",37),h.hc()),2&t){var c=e.$implicit;h.xc();var i=h.Mc(56);h.Pb(1),h.Ec("ngIf",c.section)("ngIfElse",i)}}function it(t,e){1&t&&(h.ic(0,"th",36),h.Yc(1," Date "),h.hc())}function nt(t,e){if(1&t&&(h.ic(0,"span",39),h.Yc(1),h.yc(2,"date"),h.hc()),2&t){var c=h.xc().$implicit;h.Pb(1),h.ad(" ",h.Ac(2,1,c.date,"MM/dd/yyyy")," ")}}function at(t,e){if(1&t&&(h.ic(0,"td",34),h.Wc(1,nt,3,4,"span",38),h.hc()),2&t){var c=e.$implicit;h.xc();var i=h.Mc(56);h.Pb(1),h.Ec("ngIf",c.date)("ngIfElse",i)}}function st(t,e){1&t&&h.dc(0,"th",40)}function ot(t,e){if(1&t){var c=h.jc();h.ic(0,"td",34),h.ic(1,"div",41),h.ic(2,"div",42),h.dc(3,"span",43),h.ic(4,"div",44),h.ic(5,"button",45),h.tc("click",(function(){h.Oc(c);var t=e.$implicit;return h.xc().onDelete(t)})),h.dc(6,"span",46),h.Yc(7,"\xa0\xa0\xa0Delete"),h.hc(),h.hc(),h.hc(),h.hc(),h.hc()}}function lt(t,e){1&t&&h.dc(0,"tr",47)}function rt(t,e){1&t&&h.dc(0,"tr",48)}function dt(t,e){1&t&&h.Yc(0,"---")}var ut,ht,mt,ft=function(){return[5,10,25,100]},gt=[{path:"",component:M},{path:"list",component:(ut=function(){function e(c,i,n){t(this,e),this._cs=c,this._router=i,this._activatedRout=n,this.displayedColumns=["select","name","class","section","date","actions"],this.filterData="",this.isLoading=!0,this.selection=new d.c(!0,[]),this.classID=new u.g,this.sectionID=new u.g,this.classList=[],this.sectionList=[]}return c(e,[{key:"ngOnInit",value:function(){this.getClassSection()}},{key:"getAttendanceList",value:function(){var t=this;this._cs.getStudentAttendance(this.classID.value,this.sectionID.value).subscribe((function(e){if(e){var c,i=[],n={};e&&e.length&&e[0].absent_student_names1?c=e[0].absent_student_names1.split(","):e&&e.length&&e[0].absent_student_names2&&(c=e[0].absent_student_names2.split(",")),c&&c.length&&(c.map((function(t,c){n.id=e[0].id,n.name=t,n.class=e[0].classname,n.section=e[0].sectionname,n.date=e[0].date,i.push(Object.assign({},n))})),console.log("absentStudentRecord",i)),t.recordLength=i.length,t.attendanceList=new r.k(i),t.attendanceList.sort=t.TSort,t.attendanceList.paginator=t.paginator}t.isLoading=!1}))}},{key:"getClassSection",value:function(){var t=this;this._cs.getClassSection().subscribe((function(e){e&&(t.classList=e)}))}},{key:"onClassChange",value:function(t){var e=this;t&&this._cs.getSections(t.value).subscribe((function(t){t&&(e.sectionList=t)}))}},{key:"isAllSelected",value:function(){if(this.classID.value&&this.sectionID.value&&this.attendanceList)return this.selection.selected.length===this.attendanceList.data.length}},{key:"masterToggle",value:function(){var t=this;this.classID.value&&this.sectionID.value&&(this.isAllSelected()?this.selection.clear():this.attendanceList.data.forEach((function(e){return t.selection.select(e)})))}},{key:"checkboxLabel",value:function(t){return t?"".concat(this.selection.isSelected(t)?"deselect":"select"," row ").concat(t.position+1):(this.isAllSelected()?"select":"deselect")+" all"}},{key:"applyFilter",value:function(t){this.attendanceList.filter=t.target.value.trim().toLowerCase(),this.attendanceList.paginator&&this.attendanceList.paginator.firstPage()}},{key:"onDelete",value:function(t){var e=this;console.log("row",t),confirm("Are sure you want to delete this attendance record?")&&this._cs.deleteAttendance(t.id).subscribe((function(t){e.getAttendanceList()}))}},{key:"onEdit",value:function(t){this._router.navigate(["attendance"],{queryParams:{id:t.id}})}}]),e}(),ut.\u0275fac=function(t){return new(t||ut)(h.cc(m.a),h.cc(s.g),h.cc(s.a))},ut.\u0275cmp=h.Wb({type:ut,selectors:[["app-attendance-list"]],viewQuery:function(t,e){var c;1&t&&(h.Sc(o.a,!0),h.Sc(l.a,!0)),2&t&&(h.Lc(c=h.uc())&&(e.paginator=c.first),h.Lc(c=h.uc())&&(e.TSort=c.first))},decls:57,vars:11,consts:[[1,"list-container"],[1,"page-title"],[1,"s-list"],[1,"row"],[1,"col-5"],["appearance","outline",1,"p-0","w-100"],["placeholder","Select Class",3,"formControl","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Select Section",3,"formControl"],[1,"col-2","pt-1","mt-1"],["mat-raised-button","","color","primary","type","button",3,"click"],[1,"list-head"],["appearance","outline",1,"col-12","p-0"],["matInput","","placeholder","Search...",3,"keyup"],["matSuffix",""],[1,"pt-4"],["mat-table","","matSort","",1,"col-12",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","class"],["matColumnDef","section"],["matColumnDef","date"],["matColumnDef","actions"],["mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["dash",""],[3,"value"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf","ngIfElse"],["class","p-0 m-0",4,"ngIf","ngIfElse"],[1,"p-0","m-0"],["mat-header-cell","",2,"width","50px"],[1,"col"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flaticon-more-button-of-three-dots"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem","",3,"click"],[1,"fa","fa-trash",2,"color","#f00"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(h.ic(0,"div",0),h.ic(1,"div",1),h.ic(2,"h3"),h.Yc(3,"Attendance"),h.hc(),h.hc(),h.ic(4,"div",2),h.ic(5,"div",3),h.ic(6,"div",4),h.ic(7,"mat-form-field",5),h.ic(8,"mat-label"),h.Yc(9,"Class"),h.hc(),h.ic(10,"mat-select",6),h.tc("selectionChange",(function(t){return e.onClassChange(t)})),h.Wc(11,H,2,2,"mat-option",7),h.hc(),h.hc(),h.hc(),h.ic(12,"div",4),h.ic(13,"mat-form-field",5),h.ic(14,"mat-label"),h.Yc(15,"Section"),h.hc(),h.ic(16,"mat-select",8),h.Wc(17,Z,2,2,"mat-option",7),h.hc(),h.hc(),h.hc(),h.ic(18,"div",9),h.ic(19,"button",10),h.tc("click",(function(){return e.getAttendanceList()})),h.Yc(20,"Search"),h.hc(),h.hc(),h.hc(),h.ic(21,"mat-card"),h.ic(22,"div",11),h.ic(23,"mat-card-title"),h.Yc(24,"Student Attendance"),h.hc(),h.ic(25,"div"),h.ic(26,"mat-form-field",12),h.ic(27,"mat-label"),h.Yc(28,"Filter"),h.hc(),h.ic(29,"input",13),h.tc("keyup",(function(t){return e.applyFilter(t)})),h.hc(),h.ic(30,"mat-icon",14),h.Yc(31,"search"),h.hc(),h.hc(),h.hc(),h.hc(),h.ic(32,"mat-card-content",15),h.ic(33,"table",16),h.gc(34,17),h.Wc(35,B,2,3,"th",18),h.Wc(36,V,2,2,"td",19),h.fc(),h.gc(37,20),h.Wc(38,G,2,0,"th",21),h.Wc(39,X,2,2,"td",19),h.fc(),h.gc(40,22),h.Wc(41,Q,2,0,"th",21),h.Wc(42,U,2,2,"td",19),h.fc(),h.gc(43,23),h.Wc(44,tt,2,0,"th",21),h.Wc(45,ct,2,2,"td",19),h.fc(),h.gc(46,24),h.Wc(47,it,2,0,"th",21),h.Wc(48,at,2,2,"td",19),h.fc(),h.gc(49,25),h.Wc(50,st,1,0,"th",26),h.Wc(51,ot,8,0,"td",19),h.fc(),h.Wc(52,lt,1,0,"tr",27),h.Wc(53,rt,1,0,"tr",28),h.hc(),h.dc(54,"mat-paginator",29),h.hc(),h.hc(),h.hc(),h.hc(),h.Wc(55,dt,1,0,"ng-template",null,30,h.Xc)),2&t&&(h.Pb(10),h.Ec("formControl",e.classID),h.Pb(1),h.Ec("ngForOf",e.classList),h.Pb(5),h.Ec("formControl",e.sectionID),h.Pb(1),h.Ec("ngForOf",e.sectionList),h.Pb(16),h.Ec("dataSource",e.attendanceList),h.Pb(19),h.Ec("matHeaderRowDef",e.displayedColumns),h.Pb(1),h.Ec("matRowDefColumns",e.displayedColumns),h.Pb(1),h.Ec("length",e.recordLength)("pageSize",10)("pageSizeOptions",h.Hc(10,ft)))},directives:[p.c,p.f,b.a,u.q,u.h,a.m,y.a,g.a,g.d,v.b,w.a,p.g,g.b,r.j,l.a,r.c,r.e,r.b,r.g,r.i,o.a,L.n,r.d,k.a,r.a,l.b,a.n,z.a,z.e,z.c,z.b,r.f,r.h],pipes:[a.f],styles:[""]}),ut)}],pt=((ht=function e(){t(this,e)}).\u0275mod=h.ac({type:ht}),ht.\u0275inj=h.Zb({factory:function(t){return new(t||ht)},imports:[[s.i.forChild(gt)],s.i]}),ht),bt=n("jAig"),vt=((mt=function e(){t(this,e)}).\u0275mod=h.ac({type:mt}),mt.\u0275inj=h.Zb({factory:function(t){return new(t||mt)},imports:[[a.c,pt,u.m,u.w,z.d,bt.a]]}),mt)}}])}();