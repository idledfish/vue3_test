import{u as q}from"./talent-Bj6g9oCD.js";import{d as z,r as V,k as G,o as H,c as f,a as T,b as e,w as a,e as s,f as v,F as w,i as x,g as i,p as J,h as K,E as y,j as O,t as Q}from"./index-DTfIuaNW.js";import{_ as R}from"./_plugin-vue_export-helper-e-A0spZH.js";const W=g=>(J("data-v-7c03c16e"),g=g(),K(),g),X={class:"login-container"},Y={class:"talent-search-container"},Z=W(()=>T("h2",null,"人才管理",-1)),ee={slot:"footer",class:"dialog-footer"},le=z({__name:"TalentManage",setup(g){const u=V({name:"",idealPosition:null}),b=V(!1);let C=V(1);const B=G(()=>C.value),t=V({id:0,name:"",position:"",skills:[],contactInfo:"",experience:""}),c=q(),p=V([]);H(async()=>{try{await c.fetchTalents(),p.value=c.talentlist,C.value=p.value.length?Math.max(...p.value.map(n=>n.id))+1:1}catch(n){console.error("获取人才数据失败:",n)}});const F=()=>{t.value.skills.push("")},M=n=>{t.value.skills.splice(n,1)},I=["后端开发工程师","测试工程师","产品经理","UI设计师","前端开发工程师","数据分析师"],N=()=>{b.value=!0},E=()=>{try{p.value=c.getTalents.filter(n=>(!u.value.name||n.name.includes(u.value.name))&&(u.value.idealPosition===null||n.position===u.value.idealPosition))}catch{y.error("搜索失败，请重试")}},$=async()=>{try{t.value.id=B.value,await c.addTalent(t.value),y.success("增加人才成功"),b.value=!1,t.value={id:0,name:"",position:"",skills:[],contactInfo:"",experience:""},C.value++,p.value=c.getTalents}catch{y.error("增加人才失败，请重试")}},j=async n=>{try{await c.deleteTalent(n),y.success("删除人才成功"),p.value=c.getTalents}catch{y.error("删除人才失败，请重试")}};return(n,o)=>{const k=s("el-input"),d=s("el-form-item"),h=s("el-option"),U=s("el-select"),m=s("el-button"),S=s("el-form"),_=s("el-table-column"),A=s("el-tag"),D=s("el-table"),L=s("el-dialog");return v(),f("div",X,[T("div",Y,[Z,e(S,{model:u.value,class:"search-form","label-width":"100px"},{default:a(()=>[e(d,{label:"姓名"},{default:a(()=>[e(k,{modelValue:u.value.name,"onUpdate:modelValue":o[0]||(o[0]=l=>u.value.name=l),placeholder:"请输入人才姓名"},null,8,["modelValue"])]),_:1}),e(d,{label:"应聘岗位"},{default:a(()=>[e(U,{modelValue:u.value.idealPosition,"onUpdate:modelValue":o[1]||(o[1]=l=>u.value.idealPosition=l),placeholder:"选择应聘岗位",clearable:""},{default:a(()=>[(v(),f(w,null,x(I,l=>e(h,{key:l,label:l,value:l},null,8,["label","value"])),64)),e(h,{label:"全部",value:null})]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:a(()=>[e(m,{onClick:E,round:"",plain:""},{default:a(()=>[i("搜索")]),_:1}),e(m,{onClick:N,type:"success",round:"",plain:""},{default:a(()=>[i("增加人才")]),_:1})]),_:1})]),_:1},8,["model"]),e(D,{data:p.value,class:"talent-table",stripe:""},{default:a(()=>[e(_,{prop:"id",label:"编号",width:"80"}),e(_,{prop:"name",label:"姓名"}),e(_,{prop:"position",label:"应聘岗位"}),e(_,{label:"工作技能"},{default:a(l=>[T("div",null,[(v(!0),f(w,null,x(l.row.skills,r=>(v(),O(A,{key:r,type:"info",effect:"dark",class:"skill-tag"},{default:a(()=>[i(Q(r),1)]),_:2},1024))),128))])]),_:1}),e(_,{prop:"contactInfo",label:"联系方式"}),e(_,{prop:"experience",label:"工作经验"}),e(_,{label:"操作"},{default:a(l=>[e(m,{onClick:r=>j(l.row.id),type:"danger",round:"",plain:""},{default:a(()=>[i("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),e(L,{modelValue:b.value,"onUpdate:modelValue":o[7]||(o[7]=l=>b.value=l),title:"添加人才"},{default:a(()=>[e(S,{model:t.value,"label-width":"120px"},{default:a(()=>[e(d,{label:"姓名"},{default:a(()=>[e(k,{modelValue:t.value.name,"onUpdate:modelValue":o[2]||(o[2]=l=>t.value.name=l),placeholder:"请输入人才姓名"},null,8,["modelValue"])]),_:1}),e(d,{label:"应聘岗位"},{default:a(()=>[e(U,{modelValue:t.value.position,"onUpdate:modelValue":o[3]||(o[3]=l=>t.value.position=l),placeholder:"请选择应聘岗位",clearable:""},{default:a(()=>[(v(),f(w,null,x(I,l=>e(h,{key:l,label:l,value:l},null,8,["label","value"])),64)),e(h,{label:"全部",value:null})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"工作技能"},{default:a(()=>[(v(!0),f(w,null,x(t.value.skills,(l,r)=>(v(),f("div",{key:r,class:"skill-item"},[e(k,{modelValue:t.value.skills[r],"onUpdate:modelValue":P=>t.value.skills[r]=P,placeholder:"请输入技能",style:{width:"calc(100% - 100px)",display:"inline-block"}},null,8,["modelValue","onUpdate:modelValue"]),e(m,{onClick:P=>M(r),type:"danger",icon:"el-icon-delete",style:{"margin-left":"10px"}},{default:a(()=>[i("删除")]),_:2},1032,["onClick"])]))),128)),e(m,{onClick:F,type:"primary",style:{"margin-top":"0px"}},{default:a(()=>[i("添加技能")]),_:1})]),_:1}),e(d,{label:"联系方式"},{default:a(()=>[e(k,{modelValue:t.value.contactInfo,"onUpdate:modelValue":o[4]||(o[4]=l=>t.value.contactInfo=l),placeholder:"请填写联系方式"},null,8,["modelValue"])]),_:1}),e(d,{label:"工作经验"},{default:a(()=>[e(k,{modelValue:t.value.experience,"onUpdate:modelValue":o[5]||(o[5]=l=>t.value.experience=l),placeholder:"请填写工作经验"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),T("span",ee,[e(m,{onClick:o[6]||(o[6]=l=>b.value=!1)},{default:a(()=>[i("取消")]),_:1}),e(m,{type:"success",onClick:$,plain:""},{default:a(()=>[i("添加")]),_:1})])]),_:1},8,["modelValue"])])}}}),ne=R(le,[["__scopeId","data-v-7c03c16e"]]);export{ne as default};