import{u as E}from"./talent-Bj6g9oCD.js";import{d as F,r as k,o as N,c as g,a as x,b as e,w as l,e as n,f as m,F as T,i as w,g as f,p as U,h as M,E as v,j,t as A}from"./index-DTfIuaNW.js";import{_ as L}from"./_plugin-vue_export-helper-e-A0spZH.js";const $=d=>(U("data-v-385a5ff5"),d=d(),M(),d),q={class:"login-container"},z={class:"talent-search-container"},G=$(()=>x("h2",null,"人才搜索",-1)),H=F({__name:"TalentSearch",setup(d){const o=k({name:"",idealPosition:null}),u=E(),c=k([]);N(async()=>{try{await u.fetchTalents(),c.value=u.talentlist}catch(t){console.error("获取人才数据失败:",t)}});const I=["后端开发工程师","测试工程师","产品经理","UI设计师","前端开发工程师","数据分析师"],V=()=>{try{c.value=u.getTalents.filter(t=>(!o.value.name||t.name.includes(o.value.name))&&(o.value.idealPosition===null||t.position===o.value.idealPosition))}catch{v.error("搜索失败，请重试")}},B=()=>{try{c.value=[...c.value].sort((t,s)=>{var i,_;const b=parseInt(((i=t.experience)==null?void 0:i.replace(/\D/g,""))||"0",10);return parseInt(((_=s.experience)==null?void 0:_.replace(/\D/g,""))||"0",10)-b})}catch{v.error("推荐失败，请重试")}},C=async t=>{try{await u.deleteTalent(t),v.success("聘用人才成功"),c.value=u.getTalents}catch{v.error("聘用人才失败，请重试")}};return(t,s)=>{const b=n("el-input"),p=n("el-form-item"),i=n("el-option"),_=n("el-select"),h=n("el-button"),S=n("el-form"),r=n("el-table-column"),P=n("el-tag"),D=n("el-table");return m(),g("div",q,[x("div",z,[G,e(S,{model:o.value,class:"search-form","label-width":"100px"},{default:l(()=>[e(p,{label:"姓名"},{default:l(()=>[e(b,{modelValue:o.value.name,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value.name=a),placeholder:"请输入人才姓名"},null,8,["modelValue"])]),_:1}),e(p,{label:"应聘岗位"},{default:l(()=>[e(_,{modelValue:o.value.idealPosition,"onUpdate:modelValue":s[1]||(s[1]=a=>o.value.idealPosition=a),placeholder:"选择应聘岗位",clearable:""},{default:l(()=>[(m(),g(T,null,w(I,a=>e(i,{key:a,label:a,value:a},null,8,["label","value"])),64)),e(i,{label:"全部",value:null})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:l(()=>[e(h,{onClick:V,round:"",plain:""},{default:l(()=>[f("搜索")]),_:1}),e(h,{type:"success",onClick:B,round:"",plain:""},{default:l(()=>[f("人才推荐")]),_:1})]),_:1})]),_:1},8,["model"]),e(D,{data:c.value,class:"talent-table",stripe:""},{default:l(()=>[e(r,{prop:"id",label:"编号",width:"80"}),e(r,{prop:"name",label:"姓名"}),e(r,{prop:"position",label:"应聘岗位"}),e(r,{label:"工作技能"},{default:l(a=>[x("div",null,[(m(!0),g(T,null,w(a.row.skills,y=>(m(),j(P,{key:y,type:"info",effect:"dark",class:"skill-tag"},{default:l(()=>[f(A(y),1)]),_:2},1024))),128))])]),_:1}),e(r,{prop:"contactInfo",label:"联系方式"}),e(r,{prop:"experience",label:"工作经验"}),e(r,{label:"操作"},{default:l(a=>[e(h,{onClick:y=>C(a.row.id),type:"success"},{default:l(()=>[f("招聘")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])])}}}),Q=L(H,[["__scopeId","data-v-385a5ff5"]]);export{Q as default};
