import{_ as xe,a as ze}from"./post-item.vue_vue_type_style_index_0_lang-a1238c69.js";import{_ as qe}from"./post-skeleton-2a11ca3a.js";import{d as le,H as l,b as ie,e as u,f as y,bf as C,j as T,k as e,w as s,q as E,Y as $,y as ne,A as N,x as O,F as ae,u as oe,c as Ue,E as Ae}from"./@vue-a481fc63.js";import{u as re}from"./vuex-44de225f.js";import{l as se}from"./lodash-e0b37ac3.js";import{g as Ee,a as Se,c as Re,b as Le,d as Pe,_ as Ve}from"./index-8899c4ec.js";import{p as Be}from"./content-f57f999a.js";import{V as L,P as F}from"./IEnum-a180d93e.js";import{I as Ne,V as Fe,A as Me,d as je,E as Oe}from"./@vicons-9939c40b.js";import{o as ue,v as De,j as He,e as Ge,w as Ke,x as Je,y as Ze,z as Qe,A as We,B as Xe,C as Ye,a as ce,D as et,E as tt,F as at,G as ot,l as nt,H as st,I as lt,k as it}from"./naive-ui-d8de3dda.js";import{_ as rt}from"./main-nav.vue_vue_type_style_index_0_lang-76b9e48b.js";import{b as ut,u as ct}from"./vue-router-e5a2430e.js";import{W as pt}from"./v3-infinite-loading-2c58ec2f.js";import{S as _t}from"./@opentiny-d73a2d67.js";import"./formatTime-4210fcd1.js";import"./moment-2ab8298d.js";import"./copy-to-clipboard-4ef7d3eb.js";import"./@babel-725317a4.js";import"./toggle-selection-93f4ad84.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-39372edb.js";import"./evtd-b614532e.js";import"./@css-render-7124a1a5.js";import"./vooks-6d99783e.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./paopao-video-player-2fe58954.js";import"./vue-1e3b54ec.js";import"./xss-a5544f63.js";import"./cssfilter-af71ba68.js";const dt=M=>{const x=new FileReader,c=v=>["application/zip","application/x-zip","application/octet-stream","application/x-zip-compressed"].includes(v),P=()=>{const v=new Uint8Array(x.result).subarray(0,4);let I="";for(let _=0;_<v.length;_++)I+=v[_].toString(16);switch(I){case"504b0304":case"504b0506":case"504b0708":return c("application/zip");case"504b030414":return c("application/x-zip-compressed");case"504b0508":return c("application/x-zip");case"504b5370":return c("application/octet-stream");default:return!1}};return new Promise((v,I)=>{x.onloadend=()=>{const _=M.type;v(_===""||_==="application/octet-stream"?P():c(_))},x.readAsArrayBuffer(M.slice(0,4))})},mt={key:0,class:"compose-wrap"},vt={class:"compose-line"},ft={class:"compose-user"},gt={class:"compose-line compose-options"},ht={class:"attachment"},yt={class:"submit-wrap"},wt={class:"attachment-list-wrap"},bt={key:0,class:"attachment-price-wrap"},kt=T("span",null," 附件价格￥",-1),Ct={key:0,class:"eye-wrap"},$t={key:1,class:"link-wrap"},Tt={key:1,class:"compose-wrap"},It=T("div",{class:"login-wrap"},[T("span",{class:"login-banner"}," 登录后，精彩更多")],-1),xt={key:0,class:"login-only-wrap"},zt={key:1,class:"login-wrap"},qt=le({__name:"compose",emits:["post-success"],setup(M,{emit:x}){const c=re(),P=l([]),v=l(!1),I=l(!1),_=l(!1),w=l(!1),d=l(""),b=l([]),V=l(),S=l(0),g=l("public/image"),z=l([]),q=l([]),B=l([]),R=l([]),i=l(L.FRIEND),p=l(L.FRIEND),U=[{value:L.PUBLIC,label:"公开"},{value:L.PRIVATE,label:"私密"},{value:L.FRIEND,label:"好友可见"}],h=+"400",A=l("true".toLowerCase()==="true"),D=l("true".toLowerCase()==="true"),H=l("true".toLowerCase()==="true"),G=l("false".toLowerCase()==="true"),K=l("true".toLowerCase()==="true"),J="/v1/attachment",j=l(),Z=()=>{_.value=!_.value,_.value&&w.value&&(w.value=!1)},Q=()=>{w.value=!w.value,w.value&&_.value&&(_.value=!1)},W=se.debounce(a=>{Ee({k:a}).then(t=>{let n=[];t.suggest.map(o=>{n.push({label:o,value:o})}),P.value=n,v.value=!1}).catch(t=>{v.value=!1})},200),X=se.debounce(a=>{Se({k:a}).then(t=>{let n=[];t.suggest.map(o=>{n.push({label:o,value:o})}),P.value=n,v.value=!1}).catch(t=>{v.value=!1})},200),k=(a,t)=>{v.value||(v.value=!0,t==="@"?W(a):X(a))},pe=a=>{a.length>h?d.value=a.substring(0,h):d.value=a},Y=a=>{g.value=a},_e=a=>{for(let r=0;r<a.length;r++){var t=a[r].name,n=t.split(".").slice(0,-1).join("."),o=t.split(".").pop();n.length>30&&(a[r].name=n.substring(0,18)+"..."+n.substring(n.length-9)+"."+o)}z.value=a},de=async a=>{var t,n,o,r,f;return g.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((t=a.file.file)==null?void 0:t.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):g.value==="image"&&((n=a.file.file)==null?void 0:n.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):g.value==="public/video"&&!["video/mp4","video/quicktime"].includes((o=a.file.file)==null?void 0:o.type)?(window.$message.warning("视频仅允许 mp4/mov 格式"),!1):g.value==="public/video"&&((r=a.file.file)==null?void 0:r.size)>104857600?(window.$message.warning("视频大小不能超过100MB"),!1):g.value==="attachment"&&!await dt(a.file.file)?(window.$message.warning("附件仅允许 zip 格式"),!1):g.value==="attachment"&&((f=a.file.file)==null?void 0:f.size)>104857600?(window.$message.warning("附件大小不能超过100MB"),!1):!0},me=({file:a,event:t})=>{var n;try{let o=JSON.parse((n=t.target)==null?void 0:n.response);o.code===0&&(g.value==="public/image"&&q.value.push({id:a.id,content:o.data.content}),g.value==="public/video"&&B.value.push({id:a.id,content:o.data.content}),g.value==="attachment"&&R.value.push({id:a.id,content:o.data.content}))}catch{window.$message.error("上传失败")}},ve=({file:a,event:t})=>{var n;try{let o=JSON.parse((n=t.target)==null?void 0:n.response);if(o.code!==0){let r=o.msg||"上传失败";o.details&&o.details.length>0&&o.details.map(f=>{r+=":"+f}),window.$message.error(r)}}catch{window.$message.error("上传失败")}},fe=({file:a})=>{let t=q.value.findIndex(n=>n.id===a.id);t>-1&&q.value.splice(t,1),t=B.value.findIndex(n=>n.id===a.id),t>-1&&B.value.splice(t,1),t=R.value.findIndex(n=>n.id===a.id),t>-1&&R.value.splice(t,1)},ge=()=>{if(d.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{tags:a,users:t}=Be(d.value);const n=[];let o=100;n.push({content:d.value,type:F.TEXT,sort:o}),q.value.map(r=>{o++,n.push({content:r.content,type:F.IMAGEURL,sort:o})}),B.value.map(r=>{o++,n.push({content:r.content,type:F.VIDEOURL,sort:o})}),R.value.map(r=>{o++,n.push({content:r.content,type:F.ATTACHMENT,sort:o})}),b.value.length>0&&b.value.map(r=>{o++,n.push({content:r,type:F.LINKURL,sort:o})}),I.value=!0,Re({contents:n,tags:Array.from(new Set(a)),users:Array.from(new Set(t)),attachment_price:+S.value*100,visibility:i.value}).then(r=>{var f;window.$message.success("发布成功"),I.value=!1,x("post-success",r),_.value=!1,w.value=!1,(f=V.value)==null||f.clear(),z.value=[],d.value="",b.value=[],q.value=[],B.value=[],R.value=[],i.value=p.value}).catch(r=>{I.value=!1})},ee=a=>{c.commit("triggerAuth",!0),c.commit("triggerAuthKey",a)};return ie(()=>{"friend".toLowerCase()==="friend"?p.value=L.FRIEND:"friend".toLowerCase()==="public"?p.value=L.PUBLIC:p.value=L.PRIVATE,i.value=p.value,j.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(a,t)=>{const n=ue,o=De,r=He,f=Ge,te=Ke,he=Je,ye=Ze,we=Qe,be=We,ke=Xe,Ce=Ye,$e=ce,Te=et,Ie=tt;return u(),y("div",null,[C(c).state.userInfo.id>0?(u(),y("div",mt,[T("div",vt,[T("div",ft,[e(n,{round:"",size:30,src:C(c).state.userInfo.avatar},null,8,["src"])]),e(o,{type:"textarea",size:"large",autosize:"",bordered:!1,loading:v.value,value:d.value,prefix:["@","#"],options:P.value,onSearch:k,"onUpdate:value":pe,placeholder:"说说您的新鲜事..."},null,8,["loading","value","options"])]),e(ke,{ref_key:"uploadRef",ref:V,abstract:"","list-type":"image",multiple:!0,max:9,action:J,headers:{Authorization:j.value},data:{type:g.value},"file-list":z.value,onBeforeUpload:de,onFinish:me,onError:ve,onRemove:fe,"onUpdate:fileList":_e},{default:s(()=>[T("div",gt,[T("div",ht,[e(te,{abstract:""},{default:s(({handleClick:m})=>[e(f,{disabled:z.value.length>0&&g.value==="public/video"||z.value.length===9,onClick:()=>{Y("public/image"),m()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[e(r,{size:"20",color:"var(--primary-color)"},{default:s(()=>[e(C(Ne))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),D.value?(u(),E(te,{key:0,abstract:""},{default:s(({handleClick:m})=>[e(f,{disabled:z.value.length>0&&g.value!=="public/video"||z.value.length===9,onClick:()=>{Y("public/video"),m()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[e(r,{size:"20",color:"var(--primary-color)"},{default:s(()=>[e(C(Fe))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):$("",!0),H.value?(u(),E(te,{key:1,abstract:""},{default:s(({handleClick:m})=>[e(f,{disabled:z.value.length>0&&g.value==="public/video"||z.value.length===9,onClick:()=>{Y("attachment"),m()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[e(r,{size:"20",color:"var(--primary-color)"},{default:s(()=>[e(C(Me))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):$("",!0),e(f,{quaternary:"",circle:"",type:"primary",onClick:ne(Z,["stop"])},{icon:s(()=>[e(r,{size:"20",color:"var(--primary-color)"},{default:s(()=>[e(C(je))]),_:1})]),_:1},8,["onClick"]),K.value?(u(),E(f,{key:2,quaternary:"",circle:"",type:"primary",onClick:ne(Q,["stop"])},{icon:s(()=>[e(r,{size:"20",color:"var(--primary-color)"},{default:s(()=>[e(C(Oe))]),_:1})]),_:1},8,["onClick"])):$("",!0)]),T("div",yt,[e(ye,{trigger:"hover",placement:"bottom"},{trigger:s(()=>[e(he,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:d.value.length/C(h)*100},null,8,["percentage"])]),default:s(()=>[N(" "+O(d.value.length)+" / "+O(C(h)),1)]),_:1}),e(f,{loading:I.value,onClick:ge,type:"primary",secondary:"",round:""},{default:s(()=>[N(" 发布 ")]),_:1},8,["loading"])])]),T("div",wt,[e(we),R.value.length>0?(u(),y("div",bt,[G.value?(u(),E(be,{key:0,value:S.value,"onUpdate:value":t[0]||(t[0]=m=>S.value=m),min:0,max:1e5,placeholder:"请输入附件价格，0为免费附件"},{prefix:s(()=>[kt]),_:1},8,["value"])):$("",!0)])):$("",!0)])]),_:1},8,["headers","data","file-list"]),w.value?(u(),y("div",Ct,[e(Te,{value:i.value,"onUpdate:value":t[1]||(t[1]=m=>i.value=m),name:"radiogroup"},{default:s(()=>[e($e,null,{default:s(()=>[(u(),y(ae,null,oe(U,m=>e(Ce,{key:m.value,value:m.value,label:m.label},null,8,["value","label"])),64))]),_:1})]),_:1},8,["value"])])):$("",!0),_.value?(u(),y("div",$t,[e(Ie,{value:b.value,"onUpdate:value":t[2]||(t[2]=m=>b.value=m),placeholder:"请输入以http(s)://开头的链接",min:0,max:3},{"create-button-default":s(()=>[N(" 创建链接 ")]),_:1},8,["value"])])):$("",!0)])):(u(),y("div",Tt,[It,A.value?$("",!0):(u(),y("div",xt,[e(f,{strong:"",secondary:"",round:"",type:"primary",onClick:t[3]||(t[3]=m=>ee("signin"))},{default:s(()=>[N(" 登录 ")]),_:1})])),A.value?(u(),y("div",zt,[e(f,{strong:"",secondary:"",round:"",type:"primary",onClick:t[4]||(t[4]=m=>ee("signin"))},{default:s(()=>[N(" 登录 ")]),_:1}),e(f,{strong:"",secondary:"",round:"",type:"info",onClick:t[5]||(t[5]=m=>ee("signup"))},{default:s(()=>[N(" 注册 ")]),_:1})])):$("",!0)]))])}}});const Ut={class:"slide-bar-item"},At={class:"slide-bar-item-title slide-bar-user-link"},Et={key:1,class:"skeleton-wrap"},St={key:0,class:"empty-wrap"},Rt={key:1},Lt={key:2},Pt={class:"load-more-wrap"},Vt={class:"load-more-spinner"},Bt=le({__name:"Home",setup(M){const x=re(),c=ut(),P=ct(),v=l(9),I=l([{title:"全部动态",avatar:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",show:!0},{title:"正在关注",avatar:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",show:!0}]),_=l(!1),w=l(!1),d=l([]),b=l(1),V=l(20),S=l(0),g=Ue(()=>{let i="泡泡广场";return c.query&&c.query.q&&(c.query.t&&c.query.t==="tag"?i="#"+decodeURIComponent(c.query.q):i="搜索: "+decodeURIComponent(c.query.q)),i}),z=()=>{x.state.userInfo.id===0&&(_.value=!0),Le({page:1,page_size:20}).then(i=>{var p=0;const U=i.list||[];for(;p<i.list.length;p++){let h=U[p];I.value.push({title:h.nickname,avatar:h.avatar,show:!1})}}).catch(i=>{console.log(i)})},q=()=>{_.value=!0,Pe({query:c.query.q?decodeURIComponent(c.query.q):null,type:c.query.t,page:b.value,page_size:V.value}).then(i=>{_.value=!1,i.list.length===0&&(w.value=!0),b.value>1?d.value=d.value.concat(i.list):(d.value=i.list,window.scrollTo(0,0)),S.value=Math.ceil(i.pager.total_rows/V.value)}).catch(i=>{_.value=!1,b.value>1&&b.value--})},B=i=>{if(b.value!=1){P.push({name:"post",query:{id:i.id}});return}let p=[],U=d.value.length;U==V.value&&U--;for(var h=0;h<U;h++){let A=d.value[h];if(!A.is_top)break;p.push(A)}for(p.push(i);h<U;h++)p.push(d.value[h]);d.value=p},R=()=>{b.value<S.value||S.value==0?(w.value=!1,b.value++,q()):w.value=!0};return ie(()=>{z(),q()}),Ae(()=>({path:c.path,query:c.query,refresh:x.state.refresh}),(i,p)=>{if(i.refresh!==p.refresh){w.value=!1,b.value=1,setTimeout(()=>{q()},0);return}p.path!=="/post"&&i.path==="/"&&(w.value=!1,b.value=1,setTimeout(()=>{q()},0))}),(i,p)=>{const U=rt,h=qt,A=ot,D=ue,H=nt,G=st,K=qe,J=lt,j=xe,Z=ze,Q=at,W=it,X=ce;return u(),y("div",null,[e(U,{title:g.value},null,8,["title"]),e(Q,{class:"main-content-wrap",bordered:""},{default:s(()=>[e(A,null,{default:s(()=>[e(h,{onPostSuccess:B})]),_:1}),C(x).state.desktopModelShow&&C(x).state.userInfo.id>0?(u(),E(A,{key:0},{default:s(()=>[e(C(_t),{modelValue:I.value,"onUpdate:modelValue":p[0]||(p[0]=k=>I.value=k),"wheel-blocks":8,"init-blocks":v.value,tag:"div","sub-tag":"div"},{default:s(k=>[T("div",Ut,[e(H,{value:"1",offset:[0,48],dot:"",show:k.slotData.show},{default:s(()=>[e(D,{round:"",size:48,src:k.slotData.avatar,class:"slide-bar-item-avatar"},null,8,["src"])]),_:2},1032,["show"]),T("div",At,[e(G,{"line-clamp":2},{default:s(()=>[N(O(k.slotData.title),1)]),_:2},1024)])])]),_:1},8,["modelValue","init-blocks"])]),_:1})):$("",!0),_.value&&d.value.length===0?(u(),y("div",Et,[e(K,{num:V.value},null,8,["num"])])):$("",!0),T("div",null,[d.value.length===0?(u(),y("div",St,[e(J,{size:"large",description:"暂无数据"})])):$("",!0),C(x).state.desktopModelShow?(u(),y("div",Rt,[(u(!0),y(ae,null,oe(d.value,k=>(u(),E(A,{key:k.id},{default:s(()=>[e(j,{post:k},null,8,["post"])]),_:2},1024))),128))])):(u(),y("div",Lt,[(u(!0),y(ae,null,oe(d.value,k=>(u(),E(A,{key:k.id},{default:s(()=>[e(Z,{post:k},null,8,["post"])]),_:2},1024))),128))]))])]),_:1}),S.value>0?(u(),E(X,{key:0,justify:"center"},{default:s(()=>[e(C(pt),{class:"load-more",slots:{complete:"没有更多泡泡了",error:"加载出错"},onInfinite:p[1]||(p[1]=k=>R())},{spinner:s(()=>[T("div",Pt,[w.value?$("",!0):(u(),E(W,{key:0,size:14})),T("span",Vt,O(w.value?"没有更多泡泡了":"加载更多"),1)])]),_:1})]),_:1})):$("",!0)])}}});const Ca=Ve(Bt,[["__scopeId","data-v-da0951d8"]]);export{Ca as default};
