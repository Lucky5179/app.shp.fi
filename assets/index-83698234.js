import{m as W,r,dC as T,T as g,U as c,h as f,W as n,bm as ue,aO as me,a2 as F,S,Z as b,X as l,Y as Q,dD as y,dE as L,dF as k,dG as R,b0 as E,bX as I,aZ as v,dH as ge,aN as V,dI as he,dJ as G,dK as xe,dL as U,b1 as j,an as K,V as B,dM as fe,dN as be,dO as ye,dP as ke,dQ as ve,bE as Ce,dR as Be,dS as Se,af as we,cb as Z,ca as D,dT as Ie,aK as X,c3 as Y,dU as Ne,a8 as N,aH as Te,dV as Le,cc as $e,dW as qe,dX as Qe,bD as Re,dY as Pe,dZ as Ae,d_ as Fe,aI as We,d$ as Ee,dh as De,e0 as Me,aE as Oe,ad as O}from"./index-e33bfe5b.js";import{S as ze,A as He,T as z,a as P,C as _e,c as Ve,d as Ge,L as J}from"./Scrollable-445d8082.js";import{d as Ue}from"./debounce-dcd5b1e0.js";import"./utils-14773192.js";const je=W(r.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})),ee=W(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"})),te=W(r.createElement("path",{d:"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"})),Ke=e=>({pageContainer:{paddingTop:120,paddingBottom:120,[e.breakpoints.down("sm")]:{paddingTop:32,paddingBottom:32}},inner:{margin:"0 auto",width:"1036px",maxWidth:"100%",display:"grid",columnGap:"132px",rowGap:"32px",gridTemplateColumns:"minmax(0, 1fr)",gridTemplateRows:"auto",[e.breakpoints.up("md")]:{gridTemplateColumns:"minmax(0, 1fr) 440px"}},intro:{display:"flex",flexDirection:"column",gap:"24px",paddingTop:"32px"}}),Ze=e=>({introduction:{},title:{...e.typography.h1,fontSize:"45px",lineHeight:"56px",color:e.palette.primary.main,marginTop:0},text:{...e.typography["body-lg"],color:e.palette.text.primary},link:{textDecoration:"none",color:e.palette.primary.main,"&:hover":{textDecoration:"underline"}}}),Xe=T(Ze),Ye=r.memo(function({className:o}){const t=Xe(),{t:a}=g();return c("div",{className:f(t.introduction,o),children:[n("h1",{className:t.title,children:a("Bridge-Intro-Title")}),n("div",{className:t.text,children:n(ue,{i18nKey:"Bridge-Intro-Text",t:a,components:{MaxiLink:n(me,{to:"/vault/bifi-vault",className:t.link})}})})]})}),Je=()=>({container:{}}),et=e=>({container:{background:e.palette.background.default,borderRadius:"12px",width:"100%",height:o=>o.cardHeight,display:"flex",flexDirection:"column",border:`solid 1px ${e.palette.type==="dark"?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)"}`},titleBar:{...e.typography["body-lg-med"],color:e.palette.text.primary,background:e.palette.background.paper,padding:"24px",borderTopLeftRadius:"12px",borderTopRightRadius:"12px",display:"flex",columnGap:"12px",alignItems:"center"},backButton:{margin:0,padding:0,borderRadius:"50%",width:"24px",height:"24px",background:e.palette.primary.main,boxShadow:"none",cursor:"pointer",border:"none",color:e.palette.primary.contrastText,flexShrink:0,flexGrow:0,display:"flex",alignItems:"center",justifyContent:"center","& *":{fill:e.palette.primary.contrastText}},backIcon:{width:"12px",height:"9px"},adornment:{marginLeft:"auto"},tokenIcon:{flexShrink:0,flexGrow:0,marginRight:"8px"},content:{padding:"24px",height:"462px",display:"flex",flexDirection:"column",flexGrow:1},noPadding:{padding:0}}),tt=T(et),$=r.memo(function({stepType:o,title:t,titleAdornment:a,onBack:s,children:i,contentClass:d,noPadding:p=!1}){const u=tt({cardHeight:o==="bridge"?"600px":"648px"});return c("div",{className:u.container,children:[t?c("div",{className:u.titleBar,children:[s!==void 0?n("button",{onClick:s,className:u.backButton,children:n(ze,{className:u.backIcon})}):null,n("div",{children:t}),a?n("div",{className:u.adornment,children:a}):null]}):null,n("div",{className:f(u.content,d,{[u.noPadding]:p}),children:i})]})}),nt=()=>({container:{display:"flex",flexDirection:"column",flex:"1 0 auto",gap:"16px"},inputs:{display:"flex",flexDirection:"column",gap:"16px",flex:"1 0 auto"},footer:{marginTop:"auto"}}),ot=e=>({group:{},labels:{display:"flex",marginBottom:"4px"},label:{...e.typography["subline-sm"],fontWeight:700,color:e.palette.text.disabled,flex:"1 1 40%"},buttons:{display:"flex",padding:"0 8px",background:e.palette.background.paper,borderRadius:"8px",border:`solid 1px ${e.palette.type==="dark"?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)"}`},btn:{...e.typography["body-lg-med"],display:"flex",padding:"0",margin:"0",border:"none",boxShadow:"none",outline:"none",cursor:"pointer",color:e.palette.text.secondary,background:"none"},arrowButton:{width:"24px",flex:"0 0 24px",background:"none","&:hover $arrow":{transform:"rotateY(180deg)"}},arrow:{transition:"transform 0.2s ease-in-out",display:"flex",width:"24px","&::after":{content:'""',display:"block",borderLeft:`12px solid ${e.palette.primary.main}`,borderTop:"20px solid transparent",borderBottom:"20px solid transparent"}},arrowInner:{width:"12px",background:e.palette.primary.main,"&::before":{content:'""',display:"block",borderLeft:`12px solid ${e.palette.background.paper}`,borderTop:"20px solid transparent",borderBottom:"20px solid transparent"}},chain:{flex:"1 1 20%",padding:"8px 8px","&:hover":{color:e.palette.text.primary}},icon:{marginRight:"8px"},from:{borderRadius:"8px 0 0 8px"},to:{borderRadius:"0 8px 8px 0"}}),ne=r.memo(function({chainId:o,className:t}){const a=F(o);return a?n("img",{src:a,width:24,height:24,alt:o,className:t}):null}),M=S(ot),H=r.memo(function({chainId:o,step:t,className:a}){const s=M(),i=b(),d=l(m=>Q(m,o)),p=r.useCallback(()=>{i(y.setStep({step:t}))},[i,t]);return c("button",{className:f(s.btn,s.chain,a),onClick:p,children:[n(ne,{chainId:o,className:s.icon}),d.name]})}),at=r.memo(function(){const o=M(),t=b(),a=r.useCallback(()=>{t(y.reverseDirection())},[t]);return n("button",{className:f(o.btn,o.arrowButton),onClick:a,children:n("div",{className:o.arrow,children:n("div",{className:o.arrowInner})})})}),st=r.memo(function({className:o}){const{t}=g(),a=M(),{from:s,to:i}=l(L);return c("div",{className:f(a.group,o),children:[c("div",{className:a.labels,children:[n("div",{className:a.label,children:t("FROM")}),n("div",{className:a.label,children:t("TO")})]}),c("div",{className:a.buttons,children:[n(H,{className:a.from,chainId:s,step:k.SelectFromNetwork}),n(at,{}),n(H,{className:a.to,chainId:i,step:k.SelectToNetwork})]})]})}),rt=e=>({group:{},labels:{display:"flex",marginBottom:"4px"},label:{...e.typography["subline-sm"],fontWeight:700,color:e.palette.text.disabled,flex:"1 1 40%"},balance:{...e.typography["body-sm"],cursor:"pointer",color:e.palette.text.disabled,"& span":{paddingLeft:"4px",fontWeight:e.typography["body-sm-med"].fontWeight,color:e.palette.text.secondary}},input:{}}),it=S(rt),ct=r.memo(function({className:o}){const{t}=g(),a=b(),s=it(),{from:i,input:d}=l(L),p=l(x=>R(x,i)),m=l(x=>E(x,p.chainId,p.address)),u=r.useCallback(()=>{a(y.setInputAmount({amount:m.decimalPlaces(p.decimals,I.ROUND_FLOOR),max:!0,token:p}))},[a,p,m]),h=r.useCallback((x,C)=>{a(y.setInputAmount({amount:x.decimalPlaces(p.decimals,I.ROUND_FLOOR),max:C,token:p}))},[a,p]);return c("div",{className:f(s.group,o),children:[c("div",{className:s.labels,children:[n("div",{className:s.label,children:t("AMOUNT")}),c("div",{onClick:u,className:s.balance,children:[t("Transact-Available")," ",c("span",{children:[v(m,4)," ",p.symbol]})]})]}),n(He,{className:f(s.input),value:d.amount,maxValue:m,tokenDecimals:d.token.decimals,onChange:h})]})}),lt=r.memo(function(){const o=b(),{from:t,to:a,input:s}=l(L),i=l(h=>R(h,t)),d=l(h=>R(h,a)),p=l(h=>E(h,i.chainId,i.address)),m=s.amount,u=r.useMemo(()=>Ue(()=>o(ge()),250),[o]);return r.useEffect(()=>{u()},[u,i,d,m,p]),null}),dt="/assets/layer-zero-c93d6417.svg",pt="./assets/layer-zero-81699de9.svg",ut=Object.assign({"../images/bridge-providers/icons/layer-zero.svg":dt}),mt=Object.assign({"../images/bridge-providers/logos/layer-zero.svg":pt}),gt=V(ut),ht=V(mt);function oe(e){return gt(e)}function xt(e){return ht(e)}const ft=e=>({container:{display:"flex",flex:"1 1 auto",height:"100%",flexDirection:"column",borderRadius:"8px"},quotesHolder:{display:"flex",flex:"1 1 auto",height:"100%",flexDirection:"column",gap:"8px"},quotesTitle:{...e.typography["subline-sm"],fontWeight:700,color:e.palette.text.secondary},scrollableThumb:{background:e.palette.background.paper},scrollableTopShadow:{background:"linear-gradient(0deg, rgba(46,49,80, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"},scrollableBottomShadow:{background:"linear-gradient(180deg, rgba(46,49,80, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"},scrollableLeftShadow:{background:"linear-gradient(270deg, rgba(46,49,80, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"},scrollableRightShadow:{background:"linear-gradient(90deg, rgba(46,49,80, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"},quotes:{display:"grid",gridTemplateColumns:"minmax(0, 1fr)",gap:"8px",padding:"8px",borderRadius:"8px",background:e.palette.background.paper},quote:{...e.typography["body-sm"],color:e.palette.text.secondary,border:"none",background:e.palette.background.default,boxShadow:"none",outline:"none",display:"flex",alignItems:"center",margin:0,padding:"8px 12px",borderRadius:"8px",whiteSpace:"nowrap",gap:"8px","&:hover *":{color:e.palette.text.primary}},quoteButton:{cursor:"pointer","&:hover, &:focus-visible":{color:e.palette.text.primary}},quoteLimited:{pointerEvents:"none",filter:"grayscale(100)"},quoteProvider:{...e.typography["body-lg-med"],display:"flex",gap:"8px",alignItems:"center",flex:"0 0 114px",[e.breakpoints.down("sm")]:{flex:"0 0 24px"}},quoteProviderIcon:{display:"block"},quoteProviderTitle:{display:"block",[e.breakpoints.down("sm")]:{display:"none"}},quoteLimit:{display:"flex",alignItems:"center",gap:"4px",flex:"1 0 142px"},quoteLimitIcon:{width:"16px",height:"16px",fill:e.palette.text.secondary},quoteFee:{display:"flex",alignItems:"center",gap:"4px",flex:"0 0 142px"},quoteFeeIcon:{width:"16px",height:"16px",fill:e.palette.text.secondary},quoteTime:{display:"flex",alignItems:"center",gap:"4px",flex:"0 0 50px"},quoteTimeIcon:{width:"16px",height:"16px",fill:e.palette.text.secondary},quoteButtonSelected:{background:e.palette.primary.main,color:e.palette.primary.contrastText,cursor:"default",pointerEvents:"none"}}),w=S(ft),bt=r.memo(function({quoteId:o}){const{t}=g(),a=w(),s=l(u=>he(u,o)),i=s.config.id,d=l(u=>G(u,i)),p=r.useMemo(()=>oe(i),[i]),m=r.useMemo(()=>I.min(s.limits.from.current,s.limits.to.current),[s.limits.from,s.limits.to]);return c("div",{className:f({[a.quote]:!0,[a.quoteLimited]:!0}),children:[c("div",{className:a.quoteProvider,children:[n("img",{src:p,alt:i,width:24,height:24,className:a.quoteProviderIcon}),n("div",{className:a.quoteProviderTitle,children:d.title})]}),c("div",{className:a.quoteLimit,children:[n(je,{className:a.quoteLimitIcon}),n("div",{children:t("Bridge-Quote-RateLimited",{amount:v(m,4)})})]})]})}),yt=r.memo(function({quoteId:o,selected:t}){const a=b(),s=w(),i=l(h=>xe(h,o)),d=r.useCallback(()=>{a(t?y.unselectQuote():y.selectQuote({quoteId:o}))},[o,t,a]),p=r.useMemo(()=>U(i.timeEstimate),[i.timeEstimate]),m=l(h=>j(h,i.fee.token.chainId,i.fee.token.address)),u=r.useMemo(()=>K(i.fee.amount.multipliedBy(m)),[m,i.fee.amount]);return n("button",{onClick:d,className:f({[s.quote]:!0,[s.quoteButton]:!0,[s.quoteButtonSelected]:t}),children:n(ae,{providerId:i.config.id,fee:c(B,{children:["~",v(i.fee.amount,4)," ",i.fee.token.symbol," (",u,")"]}),time:c(B,{children:["~",p]})})})}),ae=r.memo(function({providerId:o,fee:t,time:a}){const s=w(),i=l(p=>G(p,o)),d=r.useMemo(()=>oe(o),[o]);return c(B,{children:[c("div",{className:s.quoteProvider,children:[n("img",{src:d,alt:o,width:24,height:24,className:s.quoteProviderIcon}),n("div",{className:s.quoteProviderTitle,children:i.title})]}),c("div",{className:s.quoteFee,children:[n(ee,{className:s.quoteFeeIcon}),c("div",{children:[" ",t," "]})]}),c("div",{className:s.quoteTime,children:[n(te,{className:s.quoteTimeIcon}),n("div",{children:a})]})]})}),kt=r.memo(function({providerId:o}){const t=w();return n("div",{className:t.quote,children:n(ae,{providerId:o,fee:n(z,{placeholder:"0.0000 ETH"}),time:n(z,{placeholder:"~30m"})})})}),vt=r.memo(function(){const o=w(),t=l(fe),a=l(be),s=l(ye);return n("div",{className:o.quotes,children:c(B,{children:[t.map(i=>n(yt,{quoteId:i,selected:s===i},i)),a.map(i=>n(bt,{quoteId:i},i))]})})}),Ct=r.memo(function(){const o=w(),{from:t,to:a}=l(L),s=l(i=>ke(i,t,a));return n("div",{className:o.quotes,children:s.map(i=>n(kt,{providerId:i},i))})});r.memo(function(){const{t:o}=g(),t=l(ve),a=r.useMemo(()=>I.max(...t.map(d=>I.min(d.limits.from.current,d.limits.to.current))),[t]),s=r.useMemo(()=>I.max(...t.map(d=>I.min(d.limits.from.max,d.limits.to.max))),[t]),i=r.useMemo(()=>{const d=t[0].input.amount;return s.minus(a).gt(Ce)&&s.gt(d)},[a,s,t]);return n(P,{children:o(i?"Bridge-Quotes-AllRateLimited-Wait":"Bridge-Quotes-AllRateLimited",{current:v(a,4),max:v(s,4)})})});const Bt=r.memo(function(){const{t:o}=g(),t=l(Be);return t?n(P,{children:o(t.canWait?"Bridge-Quotes-AllRateLimited-Wait":"Bridge-Quotes-AllRateLimited",{current:v(t.current,4),max:v(t.max,4)})}):n(P,{children:o("Bridge-Quotes-Error")})}),St=r.memo(function({status:o}){const t=w(),{t:a}=g();return c("div",{className:t.quotesHolder,children:[n("div",{className:t.quotesTitle,children:a("Bridge-Quotes-Title")}),o==="fulfilled"?n(vt,{}):n(Ct,{})]})}),wt=r.memo(function({className:o}){const t=w(),a=l(Se);return a==="idle"?null:n("div",{className:f(t.container,o),children:a==="rejected"?n(Bt,{}):n(St,{status:a})})}),It=S(nt);function Nt(){const{t:e}=g(),o=It(),t=b(),{from:a}=l(L),s=l(Z),i=l(D),d=s===a,p=l(A=>Q(A,a)),u=!l(Ie),h=r.useCallback(()=>{t(X())},[t]),x=r.useCallback(()=>{t(Y({chainId:a}))},[t,a]),C=r.useCallback(()=>{t(Ne())},[t]);return c("div",{className:o.container,children:[c("div",{className:o.inputs,children:[n(st,{}),n(ct,{}),n(lt,{}),n(wt,{})]}),n("div",{className:o.footer,children:i?d?n(N,{onClick:C,disabled:u,variant:"success",fullWidth:!0,borderless:!0,children:e("Bridge-Review")}):n(N,{onClick:x,variant:"success",fullWidth:!0,borderless:!0,children:e("Network-Change",{network:p.name})}):n(N,{onClick:h,variant:"success",fullWidth:!0,borderless:!0,children:e("Network-ConnectWallet")})})]})}const Tt=we.memo(Nt),Lt=()=>{const{t:e}=g();return n($,{stepType:"bridge",title:e("Bridge-PreviewStep-Title"),children:n(Tt,{})})},$t=r.memo(Lt),qt=e=>({steps:{flex:"1 0 auto",display:"flex",flexDirection:"column"},step:{padding:"24px",backgroundColor:e.palette.background.paper,position:"relative",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center","&:first-child":{borderRadius:"8px 8px 0 0"},"&:last-child":{borderRadius:"0 0 8px 8px"},"&::after":{content:'""',display:"block",position:"absolute",bottom:"-20px",left:"50%",transform:"translateX(-50%)",width:0,height:0,borderStyle:"solid",borderWidth:"20px 40px 0 40px",borderColor:`${e.palette.background.paper} transparent transparent transparent`,zIndex:1}},stepFrom:{},stepBridge:{paddingTop:"32px",backgroundColor:e.palette.background.default,"&::after":{borderColor:`${e.palette.background.default} transparent transparent transparent`}},stepTo:{paddingTop:"32px","&::after":{display:"none",content:"none"}},tokenAmount:{},via:{color:e.palette.text.secondary},network:{display:"flex",gap:"8px",alignItems:"center"},networkIcon:{display:"block"},networkName:{},provider:{marginTop:"8px",marginBottom:"8px"},providerDetails:{display:"flex",alignItems:"center",gap:"8px"},fee:{display:"flex",alignItems:"center",gap:"4px",color:e.palette.text.secondary},feeIcon:{width:"16px",height:"16px",fill:e.palette.text.light},time:{display:"flex",alignItems:"center",gap:"4px",color:e.palette.text.secondary},timeIcon:{width:"16px",height:"16px",fill:e.palette.text.light},buttonsContainer:{marginTop:"auto"}}),Qt=S(qt),Rt=r.memo(function(){return n(Te,{})}),Pt=r.memo(function(){const{t:o}=g();return n(P,{children:o("Bridge-Confirm-Error")})}),At=r.memo(function(){const{t:o}=g(),t=Qt(),a=b(),s=l(Le),i=l(q=>Q(q,s.input.token.chainId)),d=l(q=>Q(q,s.output.token.chainId)),p=l(Z),m=l(D),u=p===i.id,h=l($e),x=r.useMemo(()=>U(s.timeEstimate),[s.timeEstimate]),C=l(q=>j(q,s.fee.token.chainId,s.fee.token.address)),A=r.useMemo(()=>`${v(s.fee.amount,4)} ${s.fee.token.symbol}`,[s.fee]),ce=r.useMemo(()=>K(s.fee.amount.multipliedBy(C)),[C,s.fee.amount]),le=r.useCallback(()=>{a(qe({t:o}))},[a,o]),de=r.useCallback(()=>{a(X())},[a]),pe=r.useCallback(()=>{a(Y({chainId:i.id}))},[a,i]);return c(B,{children:[c("div",{className:t.steps,children:[c("div",{className:f(t.step,t.stepFrom),children:[n("div",{className:t.tokenAmount,children:o("Bridge-From-Send",{amount:v(s.input.amount,s.input.token.decimals),token:s.input.token.symbol})}),n("div",{className:t.via,children:o("Bridge-On")}),c("div",{className:t.network,children:[n("img",{className:t.networkIcon,width:20,height:20,alt:i.name,src:F(i.id)}),c("div",{className:t.networkName,children:[" ",i.name]})]})]}),c("div",{className:f(t.step,t.stepBridge),children:[n("div",{className:t.via,children:o("Bridge-Via")}),n("div",{className:t.provider,children:n("img",{src:xt(s.config.id),alt:s.config.title,height:24})}),c("div",{className:t.providerDetails,children:[c("div",{className:t.fee,children:[n(ee,{className:t.feeIcon}),c("div",{children:["~",A," (",ce,")"]})]}),c("div",{className:t.time,children:[n(te,{className:t.timeIcon}),c("div",{children:["~",x]})]})]})]}),c("div",{className:f(t.step,t.stepTo),children:[n("div",{className:t.tokenAmount,children:o("Bridge-To-Receive",{amount:v(s.input.amount,s.input.token.decimals),token:s.input.token.symbol})}),n("div",{className:t.via,children:o("Bridge-On")}),c("div",{className:t.network,children:[n("img",{className:t.networkIcon,width:20,height:20,alt:d.name,src:F(d.id)}),c("div",{className:t.networkName,children:[" ",d.name]})]})]})]}),n("div",{className:t.buttonsContainer,children:m?u?n(N,{onClick:le,disabled:h,variant:"success",fullWidth:!0,borderless:!0,children:o("Confirm")}):n(N,{onClick:pe,variant:"success",fullWidth:!0,borderless:!0,children:o("Network-Change",{network:i.name})}):n(N,{onClick:de,variant:"success",fullWidth:!0,borderless:!0,children:o("Network-ConnectWallet")})})]})}),Ft=r.memo(function(){const o=l(Qe);return o==="pending"?n(Rt,{}):o==="fulfilled"?n(At,{}):n(Pt,{})}),Wt=()=>{const{t:e}=g(),o=b(),t=r.useCallback(()=>{o(y.setStep({step:k.Preview}))},[o]);return n($,{stepType:"bridge",onBack:t,title:e("Bridge-ConfirmStep-Title"),children:n(Ft,{})})},Et=()=>({searchableList:{display:"grid",gridTemplateColumns:"auto",gridTemplateRows:"auto minmax(0,1fr)",flexDirection:"column",width:"calc(100% + 48px)",height:"calc(100% + 24px)",margin:"0 -24px -24px -24px",rowGap:"24px"},search:{padding:"0 24px"},list:{padding:"0 24px 24px 24px",minHeight:"100px",display:"flex",flexDirection:"column",rowGap:"16px",overflowY:"auto"}}),Dt=e=>({item:{...e.typography["body-lg-med"],display:"flex",alignItems:"center",width:"100%",color:e.palette.text.secondary,background:"transparent",border:"none",boxShadow:"none",padding:0,margin:0,cursor:"pointer",userSelect:"none",outline:"none","&:hover, &:focus-visible":{color:e.palette.text.primary,"& $arrow":{color:e.palette.text.primary}}},arrow:{color:e.palette.text.secondary,height:"24px"},marginWithEndAdornement:{marginRight:"8px"},endAdornement:{marginLeft:"auto",display:"flex"}}),se=r.memo(function({value:o}){return n(B,{children:o})}),Mt=T(Dt),Ot=r.memo(function({value:o,onSelect:t,ItemInnerComponent:a=se,EndAdornementComponent:s,className:i}){const d=Mt(),p=r.useCallback(()=>{t(o)},[o,t]);return c("button",{onClick:p,className:f(d.item,i),children:[n(a,{value:o}),c("div",{className:d.endAdornement,children:[s&&n(s,{value:o}),n(_e,{className:f(d.arrow)})]})]})}),zt=T(Et),re=r.memo(function({options:o,onSelect:t,ItemInnerComponent:a=se,EndComponent:s}){const i=zt(),{t:d}=g(),[p,m]=r.useState(""),u=r.useMemo(()=>{if(p.length===0)return o;const x=p.toLowerCase();return o.filter(C=>C.toLowerCase().includes(x))},[o,p]),h=r.useCallback(x=>{t(x)},[t]);return c("div",{className:i.searchableList,children:[n("div",{className:i.search,children:n(Ve,{value:p,onChange:m})}),n(Ge,{children:n("div",{className:i.list,children:u.length?u.map(x=>n(Ot,{value:x,onSelect:h,ItemInnerComponent:a,EndAdornementComponent:s},x)):n("div",{children:d("NoMatches")})})})]})}),Ht=()=>({container:{},listItemIcon:{marginRight:"8px"}}),_t=S(Ht),ie=r.memo(function({value:o}){const t=_t(),a=l(s=>Q(s,o));return c(B,{children:[n(ne,{chainId:o,className:t.listItemIcon}),a.name]})}),Vt=e=>({balance:{marginLeft:"auto",...e.typography["body-lg"],color:e.palette.text.disabled}}),Gt=S(Vt),Ut=r.memo(function({value:o}){const t=Gt(),a=l(p=>R(p,o)),s=l(D),i=l(p=>E(p,a.chainId,a.address));return s&&i.isGreaterThan(Re)?n("div",{className:t.balance,children:v(i,4)}):null}),jt=r.memo(function(){const o=b(),t=l(Pe),a=r.useCallback(s=>{o(y.setFromChain({chainId:s}))},[o]);return n(re,{options:t,onSelect:a,ItemInnerComponent:ie,EndComponent:Ut})}),Kt=r.memo(function(){const{t:o}=g(),t=b(),a=r.useCallback(()=>{t(y.setStep({step:k.Preview}))},[t]);return n($,{stepType:"bridge",onBack:a,title:o("Bridge-FromChainStep-Title"),children:n(jt,{})})}),Zt=r.memo(function(){const o=b(),{from:t}=l(L),a=l(i=>Ae(i,t)),s=r.useCallback(i=>{o(y.setToChain({chainId:i}))},[o]);return n(re,{options:a,onSelect:s,ItemInnerComponent:ie})}),Xt=r.memo(function(){const{t:o}=g(),t=b(),a=r.useCallback(()=>{t(y.setStep({step:k.Preview}))},[t]);return n($,{stepType:"bridge",onBack:a,title:o("Bridge-ToChainStep-Title"),children:n(Zt,{})})}),Yt=r.memo(function({stepType:o}){return n($,{stepType:o,title:null,children:n(J,{})})}),Jt=()=>n(Yt,{stepType:"bridge"}),en=r.memo(Jt),tn=e=>({steps:{flex:"1 0 auto",display:"flex",flexDirection:"column"},step:{padding:"24px",backgroundColor:"#2D3153",position:"relative",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center","&:first-child":{borderRadius:"8px 8px 0 0"},"&:last-child":{borderRadius:"0 0 8px 8px"},"&::after":{content:'""',display:"block",position:"absolute",bottom:"-20px",left:"50%",transform:"translateX(-50%)",width:0,height:0,borderStyle:"solid",borderWidth:"20px 40px 0 40px",borderColor:"#2D3153 transparent transparent transparent",zIndex:1}},stepFrom:{},stepBridge:{paddingTop:"32px",backgroundColor:"#313759","&::after":{borderColor:"#313759 transparent transparent transparent"}},stepTo:{paddingTop:"32px","&::after":{display:"none",content:"none"}},tokenAmount:{},via:{color:e.palette.text.dark},network:{display:"flex",gap:"8px",alignItems:"center"},networkIcon:{display:"block"},networkName:{},provider:{marginTop:"8px",marginBottom:"8px"},providerDetails:{display:"flex",alignItems:"center",gap:"8px"},fee:{display:"flex",alignItems:"center",gap:"4px"},feeIcon:{width:"16px",height:"16px",fill:e.palette.text.light},time:{display:"flex",alignItems:"center",gap:"4px"},timeIcon:{width:"16px",height:"16px",fill:e.palette.text.light},buttonsContainer:{marginTop:"auto"}}),nn=S(tn),on=r.memo(function(){const{t:o}=g(),t=nn(),a=b(),{step:s,status:i}=l(Fe),d=r.useCallback(()=>{a(y.restart())},[a]);return r.useEffect(()=>{(s==="unknown"||i==="error"||s==="bridge"&&i==="success")&&d()},[s,i,d]),c(B,{children:[n("div",{className:t.steps,children:n(J,{text:o([`Bridge-Transaction-Progress-${s}-${i}`,`Bridge-Transaction-Progress-${s}`])})}),n("div",{className:t.buttonsContainer,children:n(N,{onClick:d,variant:"success",fullWidth:!0,borderless:!0,children:o("Bridge-Transaction-StartOver")})})]})}),an=()=>{const{t:e}=g(),o=b(),t=r.useCallback(()=>{o(y.restart())},[o]);return n($,{stepType:"bridge",onBack:t,title:e("Bridge-TransactionStep-Title"),children:n(on,{})})},sn=T(Je),rn={[k.Loading]:en,[k.Preview]:$t,[k.Confirm]:Wt,[k.Transaction]:an,[k.SelectFromNetwork]:Kt,[k.SelectToNetwork]:Xt},cn=r.memo(function(){const o=sn(),t=b(),a=l(We),s=l(Ee),i=rn[s],d=l(De);return r.useEffect(()=>{d&&t(Me({walletAddress:a}))},[t,a,d]),n("div",{className:o.container,children:n(i,{})})}),ln=e=>({poweredBy:{},poweredByLabel:{...e.typography["subline-sm"],color:e.palette.text.secondary},poweredByLogos:{marginTop:"16px",display:"flex",flexWrap:"wrap",alignItems:"center",gap:"24px"}}),dn="./assets/layer-zero-81699de9.svg",pn=T(ln),_=r.memo(function({className:o}){const t=pn(),{t:a}=g();return c("div",{className:f(t.poweredBy,o),children:[n("div",{className:t.poweredByLabel,children:a("Bridge-Intro-PoweredBy")}),n("div",{className:t.poweredByLogos,children:n("img",{src:dn,alt:"LayerZero",height:"32"})})]})}),un=T(Ke),fn=r.memo(function(){const o=un();return n(Oe,{maxWidth:"lg",className:o.pageContainer,children:c("div",{className:o.inner,children:[c("div",{className:o.intro,children:[n(Ye,{}),n(O,{smDown:!0,children:n(_,{})})]}),n(cn,{}),n(O,{mdUp:!0,children:n(_,{})})]})})});export{fn as default};