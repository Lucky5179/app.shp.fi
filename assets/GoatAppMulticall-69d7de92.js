import { h2 as r, gI as l, h3 as u } from "./index-e33bfe5b.js";
var y = Math.ceil,
  o = Math.max;
function m(t, e, s) {
  (s ? r(t, e, s) : e === void 0) ? (e = 1) : (e = o(l(e), 0));
  var n = t == null ? 0 : t.length;
  if (!n || e < 1) return [];
  for (var a = 0, i = 0, p = Array(y(n / e)); a < n; )
    p[i++] = u(t, a, (a += e));
  return p;
}
const c = [
  {
    inputs: [
      { internalType: "address", name: "_native", type: "address" },
      { internalType: "address", name: "_rewardPool", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "address[]", name: "tokens", type: "address[]" },
      { internalType: "address[][]", name: "spenders", type: "address[][]" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "getAllowances",
    outputs: [
      {
        components: [
          { internalType: "uint256[]", name: "allowances", type: "uint256[]" },
        ],
        internalType: "struct AllowanceInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "tokens", type: "address[]" },
      { internalType: "address[][]", name: "spenders", type: "address[][]" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "getAllowancesFlat",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address[]", name: "boosts", type: "address[]" }],
    name: "getBoostInfo",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "totalSupply", type: "uint256" },
          { internalType: "uint256", name: "rewardRate", type: "uint256" },
          { internalType: "uint256", name: "periodFinish", type: "uint256" },
          { internalType: "bool", name: "isPreStake", type: "bool" },
        ],
        internalType: "struct BoostInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "boosts", type: "address[]" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "getBoostOrGovBalance",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "balance", type: "uint256" },
          { internalType: "uint256", name: "rewards", type: "uint256" },
        ],
        internalType: "struct BoostBalanceInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "govVaults", type: "address[]" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "getGovVaultBalance",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "balance", type: "uint256" },
          { internalType: "uint256", name: "rewards", type: "uint256" },
        ],
        internalType: "struct GovVaultBalanceInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "govVaults", type: "address[]" },
    ],
    name: "getGovVaultInfo",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "totalSupply", type: "uint256" },
        ],
        internalType: "struct GovVaultInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "multistrategies", type: "address[]" },
    ],
    name: "getMultistrategyInfo",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "totalAssets", type: "uint256" },
          {
            internalType: "uint256",
            name: "pricePerFullShare",
            type: "uint256",
          },
          { internalType: "bool", name: "paused", type: "bool" },
        ],
        internalType: "struct MultistrategyInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "tokens", type: "address[]" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "getTokenBalances",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address[]", name: "vaults", type: "address[]" }],
    name: "getVaultInfo",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "balance", type: "uint256" },
          {
            internalType: "uint256",
            name: "pricePerFullShare",
            type: "uint256",
          },
          { internalType: "address", name: "strategy", type: "address" },
          { internalType: "bool", name: "paused", type: "bool" },
        ],
        internalType: "struct VaultInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "native",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPool",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];
export { c as _, m as c };
