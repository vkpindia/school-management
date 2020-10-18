function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var r=t[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{cFL4:function(e,t,c){"use strict";c.r(t),c.d(t,"OnlineExaminationModule",(function(){return he}));var r,i=c("ofXK"),a=c("tyNb"),n=c("3Pt+"),s=c("FtGj"),o=c("fXoL"),u=c("dNgK"),l=c("tk/3"),m=c("z6cu"),d=c("lJxs"),f=c("JIr8"),h=c("AytR"),p=((r=function(){function e(t){_classCallCheck(this,e),this._http=t,this._apiUrl=h.a.apiBaseUrl,this.httpOptions={headers:new l.d({"Content-Type":"Application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),crossDomain:!0}}return _createClass(e,[{key:"handleError",value:function(e){return e.error instanceof ErrorEvent?console.error("An error occurred:",e.error.message):console.error("Back-end returned code ".concat(e.status,", body was: ")+e.error),Object(m.a)("Something bad happened; please try again later.")}},{key:"extractData",value:function(e){return e||{}}},{key:"getExams",value:function(e,t){return this._http.get(this._apiUrl+"OnlineexamsController/Getexamsdropdown?classid=".concat(e,"&sectionid=").concat(t)).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"getExamsDropdownForStudent",value:function(e){return this._http.get(this._apiUrl+"OnlineexamsController/Getexamsdropdownforstudents?studentid="+e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"getExamsByStudentID",value:function(e,t){return this._http.get(this._apiUrl+"OnlineexamsController/GetexamsBystudentid?dateTime=".concat(e,"&studentid=").concat(t)).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"getQuestionByExamID",value:function(e){return this._http.get(this._apiUrl+"OnlineexamsController/Getquestonsbyexamid?examid="+e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"getClassSection",value:function(){return this._http.get(this._apiUrl+"setup/getclassesandsections").pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"getSections",value:function(e){return this._http.get("".concat(this._apiUrl,"setup/getsectionsforclass?id=").concat(e)).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"addExamResults",value:function(e){return this._http.post(this._apiUrl+"OnlineexamsController/AddExamResults",e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"addExamSetup",value:function(e){return this._http.post(this._apiUrl+"OnlineexamsController/AddOnlineExam",e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"addExamQustions",value:function(e){return this._http.post(this._apiUrl+"OnlineexamsController/AddQuestions",e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"getTotalResultsByStudentID",value:function(e,t){return this._http.get(this._apiUrl+"OnlineexamsController/GetTotalresultsbystudentid?examid=".concat(e,"&studentid=").concat(t)).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"updateExamResults",value:function(e){return this._http.put(this._apiUrl+"OnlineexamsController/UpdateExamResults",e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"updateExamSetup",value:function(e){return this._http.put(this._apiUrl+"OnlineexamsController/UpdateOnlineExam",e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"updateExamQuestions",value:function(e){return this._http.put(this._apiUrl+"OnlineexamsController/UpdateQuestions",e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"deleteResults",value:function(e){return this._http.delete(this._apiUrl+"attandance/DeleteResult?id="+e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"deleteQuestions",value:function(e){return this._http.delete(this._apiUrl+"attandance/DeleteQuestion?id="+e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"deleteExamSetup",value:function(e){return this._http.delete(this._apiUrl+"attandance/DeleteExam?id="+e).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}}]),e}()).\u0275fac=function(e){return new(e||r)(o.rc(l.b))},r.\u0275prov=o.Zb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),g=c("Wp6s"),b=c("wZkO"),j=c("NFeN"),x=c("kmnG"),E=c("d3UM"),v=c("qFsG"),w=c("iadO"),q=c("bTqV"),y=c("FKr1");function I(e,t){1&e&&(o.jc(0,"mat-icon",7),o.Wc(1,"wc"),o.ic(),o.Wc(2," Exam Setup "))}function k(e,t){if(1&e&&(o.jc(0,"mat-option",30),o.Wc(1),o.ic()),2&e){var c=t.$implicit;o.Ec("value",c.id),o.Pb(1),o.Xc(c.classname)}}function C(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Class is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function O(e,t){if(1&e&&(o.jc(0,"mat-option",30),o.Wc(1),o.ic()),2&e){var c=t.$implicit;o.Ec("value",c.id),o.Pb(1),o.Yc("",c.sectionname," ")}}function S(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Section is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function W(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Exam name is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function _(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Exam date is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function F(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Subject is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function U(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Teacher name is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function P(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Allotted time is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function D(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Total questions is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function A(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Total marks is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function N(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Comments is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function T(e,t){if(1&e){var c=o.kc();o.jc(0,"form",8),o.uc("ngSubmit",(function(){return o.Oc(c),o.yc().onSubmit("setup")})),o.jc(1,"div",9),o.jc(2,"div",10),o.jc(3,"mat-form-field",11),o.jc(4,"mat-label"),o.Wc(5,"Class"),o.ic(),o.jc(6,"mat-select",12),o.uc("selectionChange",(function(e){return o.Oc(c),o.yc().onClassChange(e)})),o.Uc(7,k,2,2,"mat-option",13),o.ic(),o.Uc(8,C,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(9,"div",10),o.jc(10,"mat-form-field",11),o.jc(11,"mat-label"),o.Wc(12,"Section"),o.ic(),o.jc(13,"mat-select",15),o.Uc(14,O,2,2,"mat-option",13),o.ic(),o.Uc(15,S,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(16,"div",10),o.jc(17,"mat-form-field",11),o.jc(18,"mat-label"),o.Wc(19,"Exam Name"),o.ic(),o.ec(20,"input",16),o.Uc(21,W,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(22,"div",10),o.jc(23,"mat-form-field",11),o.jc(24,"mat-label"),o.Wc(25,"Date of Exam"),o.ic(),o.ec(26,"input",17),o.ec(27,"mat-datepicker-toggle",18),o.ec(28,"mat-datepicker",null,19),o.Uc(30,_,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(31,"div",10),o.jc(32,"mat-form-field",11),o.jc(33,"mat-label"),o.Wc(34,"Subject"),o.ic(),o.ec(35,"input",20),o.Uc(36,F,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(37,"div",10),o.jc(38,"mat-form-field",11),o.jc(39,"mat-label"),o.Wc(40,"Teacher Name"),o.ic(),o.ec(41,"input",21),o.Uc(42,U,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(43,"div",10),o.jc(44,"mat-form-field",11),o.jc(45,"mat-label"),o.Wc(46,"Allotted Time"),o.ic(),o.ec(47,"input",22),o.Uc(48,P,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(49,"div",10),o.jc(50,"mat-form-field",11),o.jc(51,"mat-label"),o.Wc(52,"Total Questions"),o.ic(),o.ec(53,"input",23),o.Uc(54,D,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(55,"div",10),o.jc(56,"mat-form-field",11),o.jc(57,"mat-label"),o.Wc(58,"Total Marks"),o.ic(),o.ec(59,"input",24),o.Uc(60,A,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(61,"div",25),o.jc(62,"mat-form-field",11),o.jc(63,"mat-label"),o.Wc(64,"Comments"),o.ic(),o.ec(65,"textarea",26),o.Uc(66,N,4,0,"mat-error",14),o.ic(),o.ic(),o.ic(),o.jc(67,"div",27),o.jc(68,"button",28),o.Wc(69,"Next"),o.ic(),o.jc(70,"button",29),o.uc("click",(function(e){return o.Oc(c),o.yc().onFormReset(e,"setup")})),o.Wc(71,"Reset"),o.ic(),o.ic(),o.ic()}if(2&e){var r=o.Mc(29),i=o.yc();o.Ec("formGroup",i.createExamForm),o.Pb(7),o.Ec("ngForOf",i.classList),o.Pb(1),o.Ec("ngIf",i.submitted&&i.ef.classid.hasError("required")),o.Pb(6),o.Ec("ngForOf",i.sectionList),o.Pb(1),o.Ec("ngIf",i.submitted&&i.ef.sectionid.hasError("required")),o.Pb(6),o.Ec("ngIf",i.submitted&&i.ef.examname.hasError("required")),o.Pb(5),o.Ec("matDatepicker",r),o.Pb(1),o.Ec("for",r),o.Pb(3),o.Ec("ngIf",i.submitted&&i.ef.examdate.hasError("required")),o.Pb(6),o.Ec("ngIf",i.submitted&&i.ef.subjectame.hasError("required")),o.Pb(6),o.Ec("ngIf",i.submitted&&i.ef.teachername.hasError("required")),o.Pb(6),o.Ec("ngIf",i.submitted&&i.ef.timeallotted.hasError("required")),o.Pb(6),o.Ec("ngIf",i.submitted&&i.ef.totalquestions.hasError("required")),o.Pb(6),o.Ec("ngIf",i.submitted&&i.ef.totalmarks.hasError("required")),o.Pb(6),o.Ec("ngIf",i.submitted&&i.ef.teachersnotes.hasError("required"))}}function Q(e,t){1&e&&(o.jc(0,"mat-icon",31),o.Wc(1,"layers"),o.ic(),o.Wc(2," Create Questions "))}function L(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Question is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function R(e,t){if(1&e&&o.ec(0,"img",48),2&e){var c=o.yc(3);o.Ec("src",c.qImageSrc,o.Pc)}}function G(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," First answer is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function B(e,t){if(1&e&&o.ec(0,"img",48),2&e){var c=o.yc(3);o.Ec("src",c.qansImageSrc1,o.Pc)}}function M(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Second answer is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function z(e,t){if(1&e&&o.ec(0,"img",48),2&e){var c=o.yc(3);o.Ec("src",c.qansImageSrc1,o.Pc)}}function V(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Third answer is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function X(e,t){if(1&e&&o.ec(0,"img",48),2&e){var c=o.yc(3);o.Ec("src",c.qansImageSrc1,o.Pc)}}function Z(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Fourth answer is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function J(e,t){if(1&e&&o.ec(0,"img",48),2&e){var c=o.yc(3);o.Ec("src",c.qansImageSrc1,o.Pc)}}function K(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Right answer is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function $(e,t){1&e&&(o.jc(0,"mat-error"),o.Wc(1," Question Mark is "),o.jc(2,"strong"),o.Wc(3,"required"),o.ic(),o.ic())}function Y(e,t){if(1&e){var c=o.kc();o.jc(0,"div",34),o.jc(1,"div",35),o.jc(2,"div",36),o.jc(3,"mat-form-field",11),o.jc(4,"mat-label"),o.Wc(5,"Question"),o.ic(),o.ec(6,"textarea",37),o.Uc(7,L,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(8,"div",36),o.Uc(9,R,1,1,"img",38),o.jc(10,"div",39),o.jc(11,"label",40),o.Wc(12,"Upload Question"),o.ic(),o.jc(13,"input",41),o.uc("change",(function(e){o.Oc(c);var r=t.index;return o.yc(2).onFileChange(e,"questionImage",r)})),o.ic(),o.ic(),o.ic(),o.jc(14,"div",10),o.jc(15,"mat-form-field",11),o.jc(16,"mat-label"),o.Wc(17,"First Answer"),o.ic(),o.ec(18,"input",42),o.Uc(19,G,4,0,"mat-error",14),o.ic(),o.jc(20,"div",31),o.Uc(21,B,1,1,"img",38),o.jc(22,"div",39),o.jc(23,"label",40),o.Wc(24,"Upload Answer"),o.ic(),o.jc(25,"input",41),o.uc("change",(function(e){o.Oc(c);var r=t.index;return o.yc(2).onFileChange(e,"answerImage1",r)})),o.ic(),o.ic(),o.ic(),o.ic(),o.jc(26,"div",10),o.jc(27,"mat-form-field",11),o.jc(28,"mat-label"),o.Wc(29,"Second Answer"),o.ic(),o.ec(30,"input",43),o.Uc(31,M,4,0,"mat-error",14),o.ic(),o.jc(32,"div",31),o.Uc(33,z,1,1,"img",38),o.jc(34,"div",39),o.jc(35,"label",40),o.Wc(36,"Upload Answer"),o.ic(),o.jc(37,"input",41),o.uc("change",(function(e){o.Oc(c);var r=t.index;return o.yc(2).onFileChange(e,"answerImage2",r)})),o.ic(),o.ic(),o.ic(),o.ic(),o.jc(38,"div",10),o.jc(39,"mat-form-field",11),o.jc(40,"mat-label"),o.Wc(41,"Third Answer"),o.ic(),o.ec(42,"input",44),o.Uc(43,V,4,0,"mat-error",14),o.ic(),o.jc(44,"div",31),o.Uc(45,X,1,1,"img",38),o.jc(46,"div",39),o.jc(47,"label",40),o.Wc(48,"Upload Answer"),o.ic(),o.jc(49,"input",41),o.uc("change",(function(e){o.Oc(c);var r=t.index;return o.yc(2).onFileChange(e,"answerImage3",r)})),o.ic(),o.ic(),o.ic(),o.ic(),o.jc(50,"div",10),o.jc(51,"mat-form-field",11),o.jc(52,"mat-label"),o.Wc(53,"Fourth Answer"),o.ic(),o.ec(54,"input",45),o.Uc(55,Z,4,0,"mat-error",14),o.ic(),o.jc(56,"div",31),o.Uc(57,J,1,1,"img",38),o.jc(58,"div",39),o.jc(59,"label",40),o.Wc(60,"Upload Answer"),o.ic(),o.jc(61,"input",41),o.uc("change",(function(e){o.Oc(c);var r=t.index;return o.yc(2).onFileChange(e,"answerImage4",r)})),o.ic(),o.ic(),o.ic(),o.ic(),o.jc(62,"div",10),o.jc(63,"mat-form-field",11),o.jc(64,"mat-label"),o.Wc(65,"Right Answer"),o.ic(),o.ec(66,"input",46),o.Uc(67,K,4,0,"mat-error",14),o.ic(),o.ic(),o.jc(68,"div",10),o.jc(69,"mat-form-field",11),o.jc(70,"mat-label"),o.Wc(71,"Question Mark"),o.ic(),o.ec(72,"input",47),o.Uc(73,$,4,0,"mat-error",14),o.ic(),o.ic(),o.ic(),o.ic()}if(2&e){var r=t.$implicit,i=t.index,a=o.yc(2);o.Pb(1),o.Ec("formGroupName",i),o.Pb(6),o.Ec("ngIf",a.submitted&&r.get("question").hasError("required")),o.Pb(2),o.Ec("ngIf",a.qImageSrc),o.Pb(10),o.Ec("ngIf",a.submitted&&r.get("answer1").hasError("required")),o.Pb(2),o.Ec("ngIf",a.qansImageSrc1),o.Pb(10),o.Ec("ngIf",a.submitted&&r.get("answer2").hasError("required")),o.Pb(2),o.Ec("ngIf",a.qansImageSrc2),o.Pb(10),o.Ec("ngIf",a.submitted&&r.get("answer3").hasError("required")),o.Pb(2),o.Ec("ngIf",a.qansImageSrc3),o.Pb(10),o.Ec("ngIf",a.submitted&&r.get("answer4").hasError("required")),o.Pb(2),o.Ec("ngIf",a.qansImageSrc4),o.Pb(10),o.Ec("ngIf",a.submitted&&r.get("rightanswer").hasError("required")),o.Pb(6),o.Ec("ngIf",a.submitted&&r.get("marksforthis").hasError("required"))}}function H(e,t){if(1&e){var c=o.kc();o.jc(0,"form",8),o.uc("ngSubmit",(function(){return o.Oc(c),o.yc().onSubmit("questions")})),o.jc(1,"div",9),o.Uc(2,Y,74,13,"div",32),o.ic(),o.jc(3,"div",27),o.jc(4,"button",33),o.uc("click",(function(){return o.Oc(c),o.yc().addNextSubjectMark()})),o.Wc(5,"Add Question"),o.ic(),o.jc(6,"button",28),o.Wc(7,"Submit"),o.ic(),o.jc(8,"button",29),o.uc("click",(function(e){return o.Oc(c),o.yc().onFormReset(e,"questions")})),o.Wc(9,"Reset"),o.ic(),o.ic(),o.ic()}if(2&e){var r=o.yc();o.Ec("formGroup",r.questionForm),o.Pb(2),o.Ec("ngForOf",r.f.items.controls)}}var ee,te,ce=((te=function(){function e(t,c,r,i){_classCallCheck(this,e),this._ar=t,this._router=c,this._snackBar=r,this._cs=i,this.loading=!1,this.submitted=!1,this.error="",this.cardTitle="Create Assessment",this.showButtons=!1,this.isTabDisabled=!0,this.buttonLabel="Submit",this._phonePattern="^[0-9-+s()]*$",this._emailPattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",this.selectedIndex=0,this.classList=[],this.sectionList=[],this.showForm=!0,this.horizontalPosition="start",this.verticalPosition="bottom",this.visible=!0,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[s.g,s.c]}return _createClass(e,[{key:"ngOnInit",value:function(){this.createExamForm=new n.j({classid:new n.g(null,n.x.required),sectionid:new n.g("",n.x.required),examname:new n.g(null,n.x.required),examdate:new n.g("",n.x.required),subjectame:new n.g(null,n.x.required),teachername:new n.g(null,n.x.required),timeallotted:new n.g(null,n.x.required),totalquestions:new n.g(null,n.x.required),totalmarks:new n.g(null,n.x.required),teachersnotes:new n.g(null)}),this.questionForm=new n.j({items:new n.d([this.createFields()])}),this.getClassList()}},{key:"createFields",value:function(){return new n.j({question:new n.g(null,n.x.required),question_image:new n.g(null),answer1:new n.g(null,n.x.required),answer1_image:new n.g(null),answer2:new n.g(null,n.x.required),answer2_image:new n.g(null),answer3:new n.g(null,n.x.required),answer3_image:new n.g(null),answer4:new n.g(null,n.x.required),answer4_image:new n.g(null),rightanswer:new n.g(null,n.x.required),marksforthis:new n.g(null,n.x.required)})}},{key:"onFileChange",value:function(e,t,c){var r=this,i=new FileReader;e.target.files&&e.target.files.length&&(i.readAsDataURL(e.target.files[0]),i.onload=function(){"questionImage"===t?(r.qImageSrc=i.result,r.questionForm.get("items").at(c).get("question_image").patchValue(r.qImageSrc.substring(22))):"answerImage1"===t?(r.qansImageSrc1=i.result,r.questionForm.get("items").at(c).get("answer1_image").patchValue(r.qansImageSrc1.substring(22))):"answerImage2"===t?(r.qansImageSrc2=i.result,r.questionForm.get("items").at(c).get("answer2_image").patchValue(r.qansImageSrc2.substring(22))):"answerImage3"===t?(r.qansImageSrc3=i.result,r.questionForm.get("items").at(c).get("answer3_image").patchValue(r.qansImageSrc3.substring(22))):"answerImage4"===t&&(r.qansImageSrc4=i.result,r.questionForm.get("items").at(c).get("answer4_image").patchValue(r.qansImageSrc4.substring(22)))})}},{key:"addNextSubjectMark",value:function(){this.f.items.push(this.createFields()),this.controlIndex++}},{key:"getClassList",value:function(){var e=this;this._cs.getClassSection().subscribe((function(t){t&&(e.classList=t)}))}},{key:"onClassChange",value:function(e){var t=this;e&&this._cs.getSections(e.value).subscribe((function(e){e&&(t.sectionList=e)}))}},{key:"onSubmit",value:function(e){var t=this;if(console.log("onSubmit"),this.submitted=!0,console.log("this.createExamForm.value",this.createExamForm.value),console.log("this.parentForm.value",this.questionForm.value),!(this.createExamForm.invalid&&0===this.selectedIndex||this.questionForm.invalid&&1===this.selectedIndex)){var c,r={};this.loading=!0,"setup"===e&&(Object.assign(r,this.createExamForm.value),this.classList&&this.classList.length&&this.classList.map((function(e){r.classid===e.id&&(r.classname=e.classname)})),this.sectionList&&this.sectionList.length&&this.sectionList.map((function(e){r.sectionid===e.id&&(r.sectionname=e.sectionname)})),this._cs.addExamSetup(r).subscribe((function(e){c=e.examid,t.isTabDisabled=!1,t.showNotification("Submitted Successfully!!"),t.createExamForm.reset(),t.showForm=!1,t.submitted=!1,setTimeout((function(){t.showForm=!0}),100),t.selectedIndex=1}),(function(e){t.error=e,t.loading=!1,console.error(t.error)}))),"questions"===e&&(Object.assign(r,this.questionForm.value),r.items.map((function(e){return e.examid=c,e})),console.log("payload",r),this._cs.addExamQustions(r.items).subscribe((function(e){console.log("data",e),t.showNotification("Submitted Successfully!!"),t.questionForm.reset(),t.showForm=!1,t.submitted=!1,setTimeout((function(){t.showForm=!0}),100)}),(function(e){t.error=e,t.loading=!1,console.error(t.error)})))}}},{key:"showNotification",value:function(e){this._snackBar.open(e,"",{duration:2e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["success-snackbar"]})}},{key:"onFormReset",value:function(e,t){e&&"setup"===t&&this.createExamForm.reset(),e&&"questions"===t&&this.questionForm.reset()}},{key:"f",get:function(){return this.questionForm.controls}},{key:"ef",get:function(){return this.createExamForm.controls}}]),e}()).\u0275fac=function(e){return new(e||te)(o.dc(a.a),o.dc(a.g),o.dc(u.a),o.dc(p))},te.\u0275cmp=o.Xb({type:te,selectors:[["app-exam-setup"]],decls:16,vars:4,consts:[[1,"form-container"],[1,"page-title"],[1,"form-fields"],[1,"pt-2"],[3,"selectedIndex"],["mat-tab-label",""],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"example-tab-icon"],[3,"formGroup","ngSubmit"],[1,"row","col-12","m-0","p-0","pt-3"],[1,"col-12","col-sm-6","col-md-4"],["appearance","outline",1,"p-0"],["placeholder","Select Class","formControlName","classid",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["placeholder","Select Section","formControlName","sectionid"],["matInput","","formControlName","examname","placeholder","Enter Exam Name"],["matInput","","placeholder","Select Date","formControlName","examdate",3,"matDatepicker"],["matSuffix","",3,"for"],["picker2",""],["matInput","","placeholder","Enter Class Subject Name","formControlName","subjectame"],["matInput","","placeholder","Enter Techaer Name","formControlName","teachername"],["type","number","matInput","","placeholder","Enter Allotted Time","formControlName","timeallotted"],["type","number","matInput","","placeholder","Enter Total Questions","formControlName","totalquestions"],["type","number","matInput","","placeholder","Enter Total Questions","formControlName","totalmarks"],[1,"col-12","col-sm-6","col-md-6"],["matInput","","placeholder","Enter Comments","formControlName","teachersnotes","rows","2"],[1,"example-button-row","pt-3","pb-2","text-center"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","",1,"ml-3","mat-secondary",3,"click"],[3,"value"],[1,""],["class","questions-widget","formArrayName","items",4,"ngFor","ngForOf"],["mat-raised-button","","type","button",1,"mat-next","mt-2","mr-3",3,"click"],["formArrayName","items",1,"questions-widget"],[1,"row","m-0",3,"formGroupName"],[1,"col-12"],["matInput","","placeholder","Enter Question","formControlName","question","rows","2"],["style","width:200px;","class","mb-2",3,"src",4,"ngIf"],[1,"form-group"],["for","exampleFormControlFile1"],["type","file","id","exampleFormControlFile1","accept","image/*",1,"form-control-file",3,"change"],["matInput","","placeholder","Enter first answer","formControlName","answer1"],["type","number","matInput","","placeholder","Enter second answer","formControlName","answer2"],["matInput","","placeholder","Enter third answer","formControlName","answer3"],["matInput","","placeholder","Enter fourth answer","formControlName","answer4"],["matInput","","placeholder","Enter right answer","formControlName","rightanswer"],["type","number","matInput","","placeholder","Enter mark","formControlName","marksforthis"],[1,"mb-2",2,"width","200px",3,"src"]],template:function(e,t){1&e&&(o.jc(0,"div",0),o.jc(1,"div",1),o.jc(2,"h3"),o.Wc(3,"Assessment Setup"),o.ic(),o.ic(),o.jc(4,"div",2),o.jc(5,"mat-card"),o.jc(6,"mat-card-title"),o.Wc(7),o.ic(),o.jc(8,"mat-card-content",3),o.jc(9,"mat-tab-group",4),o.jc(10,"mat-tab"),o.Uc(11,I,3,0,"ng-template",5),o.Uc(12,T,72,15,"form",6),o.ic(),o.jc(13,"mat-tab"),o.Uc(14,Q,3,0,"ng-template",5),o.Uc(15,H,10,2,"form",6),o.ic(),o.ic(),o.ic(),o.ic(),o.ic(),o.ic()),2&e&&(o.Pb(7),o.Xc(t.cardTitle),o.Pb(2),o.Ec("selectedIndex",t.selectedIndex),o.Pb(3),o.Ec("ngIf",t.showForm),o.Pb(3),o.Ec("ngIf",t.showForm))},directives:[g.a,g.d,g.b,b.b,b.a,b.c,i.n,j.a,n.z,n.r,n.k,x.c,x.f,E.a,n.q,n.i,i.m,v.b,n.c,w.b,w.d,x.g,w.a,n.v,q.a,y.n,x.b,n.e,n.l],styles:[".questions-widget[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding-top:15px}.questions-widget[_ngcontent-%COMP%]:first-child{border-top:0 solid #ccc;padding-top:0}"]}),te),re=((ee=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||ee)},ee.\u0275cmp=o.Xb({type:ee,selectors:[["app-exam-result"]],decls:2,vars:0,template:function(e,t){1&e&&(o.jc(0,"p"),o.Wc(1,"exam-result works!"),o.ic())},styles:[""]}),ee),ie=c("pW6c");function ae(e,t){if(1&e){var c=o.kc();o.jc(0,"button",6),o.uc("click",(function(){return o.Oc(c),o.yc().startAssessment()})),o.Wc(1,"Start Assessment"),o.ic()}}function ne(e,t){if(1&e){var c=o.kc();o.jc(0,"button",6),o.uc("click",(function(){return o.Oc(c),o.yc().getQuestions()})),o.Wc(1,"Start Exam"),o.ic()}}var se,oe,ue,le=[{path:"",component:ce,data:{breadcrumb:"Setup"}},{path:"questions",component:(se=function(){function e(t,c,r){_classCallCheck(this,e),this.date=t,this.authenticationService=c,this.as=r}return _createClass(e,[{key:"ngOnInit",value:function(){this.isStartExam=!0}},{key:"startAssessment",value:function(){var e=this;this.authenticationService.currentUser.subscribe((function(t){e.as.getExamsByStudentID((new Date).toISOString(),t.id).subscribe((function(t){Array.isArray(t)&&t.length?(e.examID=t[0].id,e.isStartExam=!1):(e.isStartExam=!0,alert("Exams are not scheduled!"))}))}))}},{key:"getQuestions",value:function(){this.as.getQuestionByExamID(this.examID).subscribe((function(e){console.log("questions",e)}))}}]),e}(),se.\u0275fac=function(e){return new(e||se)(o.dc(i.f),o.dc(ie.a),o.dc(p))},se.\u0275cmp=o.Xb({type:se,selectors:[["app-assessment-questions"]],features:[o.Ob([i.f])],decls:10,vars:2,consts:[[1,"form-container"],[1,"page-title"],[1,"form-fields"],[1,"pt-2"],[1,"pb-2","text-center"],["mat-raised-button","","type","button","class","mat-next mt-2 mr-3",3,"click",4,"ngIf"],["mat-raised-button","","type","button",1,"mat-next","mt-2","mr-3",3,"click"]],template:function(e,t){1&e&&(o.jc(0,"div",0),o.jc(1,"div",1),o.jc(2,"h3"),o.Wc(3,"Assessment Questions"),o.ic(),o.ic(),o.jc(4,"div",2),o.jc(5,"mat-card"),o.jc(6,"mat-card-content",3),o.jc(7,"div",4),o.Uc(8,ae,2,0,"button",5),o.Uc(9,ne,2,0,"button",5),o.ic(),o.ic(),o.ic(),o.ic(),o.ic()),2&e&&(o.Pb(8),o.Ec("ngIf",t.isStartExam),o.Pb(1),o.Ec("ngIf",!t.isStartExam))},directives:[g.a,g.b,i.n,q.a],styles:[""]}),se),data:{breadcrumb:"Questions"}},{path:"result",component:re,data:{breadcrumb:"Result"}}],me=((oe=function e(){_classCallCheck(this,e)}).\u0275mod=o.bc({type:oe}),oe.\u0275inj=o.ac({factory:function(e){return new(e||oe)},imports:[[a.i.forChild(le)],a.i]}),oe),de=c("1kSV"),fe=c("jAig"),he=((ue=function e(){_classCallCheck(this,e)}).\u0275mod=o.bc({type:ue}),ue.\u0275inj=o.ac({factory:function(e){return new(e||ue)},imports:[[i.c,me,n.m,n.w,de.d,fe.a]]}),ue)}}]);