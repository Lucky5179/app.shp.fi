import{a as f}from"./zap-1e909aff.js";import{hh as g,bO as l}from"./index-e33bfe5b.js";class k extends Error{constructor(e){super(e),this.name="QuoteChangedError"}}async function A(o,e,p){const{inputs:n,outputs:a,maxSlippage:i,zapRouter:d,providerId:c,insertBalance:r,quote:s}=o;if(n.length!==1||a.length!==1)throw new Error("Invalid swap request");const m=g(a),t=await e.fetchSwap(o.providerId,{fromAddress:d,slippage:i,quote:s},p);if(t.toAmount.lt(m.amount))throw console.error({quote:s,swap:t}),new k(`Expected swap output amount changed between quote and execution for ${c}`);const h={token:t.toToken,amount:t.toAmount},w={token:t.toToken,amount:t.toAmountMin},u=l(t.fromToken);return{inputs:n,outputs:[h],minOutputs:[w],returned:[],zaps:[{target:t.tx.toAddress,data:t.tx.data,value:t.tx.value,tokens:u&&!r?[]:[{token:f(t.fromToken),index:r&&!u?t.tx.inputPosition:-1}]}]}}export{k as Q,A as f};