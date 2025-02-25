import { ee as r, df as o, ef as a, eg as c } from "./index-e33bfe5b.js";
const E = [
    "fantom-bifi-maxi",
    "scream-eth",
    "scream-wbtc",
    "scream-ftm",
    "scream-link",
    "scream-dai",
    "aave-wavax",
    "aavev3-op-wbtc",
    "aavev3-op-dai",
    "aavev3-op-eth",
    "curve-op-f-wsteth",
  ],
  p = [
    "bsc",
    "avax",
    "celo",
    "cronos",
    "fantom",
    "harmony",
    "moonriver",
    "polygon",
    "ethereum",
  ],
  u = [
    "bsc",
    "avax",
    "heco",
    "polygon",
    "fantom",
    "harmony",
    "arbitrum",
    "celo",
    "moonriver",
    "cronos",
    "fuse",
    "metis",
    "aurora",
    "moonbeam",
    "optimism",
    "ethereum",
  ];
class d {
  async fetchChainConfigs() {
    return Object.entries(r).map(([_, e]) => ({ id: _, ...e }));
  }
  async fetchFeaturedVaults() {
    return (await o(() => import("./featured-b25bb000.js"), [])).default;
  }
  async fetchPartnersConfig() {
    return { QiDao: E, Insurace: p, Nexus: u };
  }
  async fetchZapAmms() {
    return Object.fromEntries(
      await Promise.all(
        Object.keys(r).map(async (_) => [
          _,
          (
            await a(
              Object.assign({
                "../../../config/zap/amm/arbitrum.json": () =>
                  o(() => import("./arbitrum-91272d73.js"), []),
                "../../../config/zap/amm/aurora.json": () =>
                  o(() => import("./aurora-cadbbe0a.js"), []),
                "../../../config/zap/amm/avax.json": () =>
                  o(() => import("./avax-77124b5c.js"), []),
                "../../../config/zap/amm/base.json": () =>
                  o(() => import("./base-7c4cb2ff.js"), []),
                "../../../config/zap/amm/bsc.json": () =>
                  o(() => import("./bsc-550931ab.js"), []),
                "../../../config/zap/amm/canto.json": () =>
                  o(() => import("./canto-d8f69c56.js"), []),
                "../../../config/zap/amm/celo.json": () =>
                  o(() => import("./celo-4a92a1fe.js"), []),
                "../../../config/zap/amm/cronos.json": () =>
                  o(() => import("./cronos-810bee32.js"), []),
                "../../../config/zap/amm/emerald.json": () =>
                  o(() => import("./emerald-0cf38e8b.js"), []),
                "../../../config/zap/amm/ethereum.json": () =>
                  o(() => import("./ethereum-0a06b4c9.js"), []),
                "../../../config/zap/amm/fantom.json": () =>
                  o(() => import("./fantom-7f381fbc.js"), []),
                "../../../config/zap/amm/fuse.json": () =>
                  o(() => import("./fuse-6321d117.js"), []),
                "../../../config/zap/amm/gnosis.json": () =>
                  o(() => import("./gnosis-929aae2c.js"), []),
                "../../../config/zap/amm/harmony.json": () =>
                  o(() => import("./harmony-b020486c.js"), []),
                "../../../config/zap/amm/heco.json": () =>
                  o(() => import("./heco-4a92a1fe.js"), []),
                "../../../config/zap/amm/kava.json": () =>
                  o(() => import("./kava-e45d28d7.js"), []),
                "../../../config/zap/amm/metis.json": () =>
                  o(() => import("./metis-ee786e1a.js"), []),
                "../../../config/zap/amm/moonbeam.json": () =>
                  o(() => import("./moonbeam-05dff8f0.js"), []),
                "../../../config/zap/amm/moonriver.json": () =>
                  o(() => import("./moonriver-9f7f9a45.js"), []),
                "../../../config/zap/amm/optimism.json": () =>
                  o(() => import("./optimism-36fe806b.js"), []),
                "../../../config/zap/amm/polygon.json": () =>
                  o(() => import("./polygon-faffe07f.js"), []),
                "../../../config/zap/amm/zkevm.json": () =>
                  o(() => import("./zkevm-4a92a1fe.js"), []),
                "../../../config/zap/amm/zksync.json": () =>
                  o(() => import("./zksync-c7da88fd.js"), []),
              }),
              `../../../config/zap/amm/${_}.json`
            )
          ).default,
        ])
      )
    );
  }
  async fetchBeefyBridgeConfig() {
    return (
      await o(
        () => import("./beefy-bridge-5c75c1c2.js"),
        ["assets/beefy-bridge-5c75c1c2.js", "assets/index-e33bfe5b.js"]
      )
    ).beefyBridgeConfig;
  }
  async fetchZapSwapAggregators() {
    return (await o(() => import("./swap-aggregators-ac54fa52.js"), []))
      .default;
  }
  async fetchZapConfigs() {
    return (await o(() => import("./zaps-bb96e49e.js"), [])).default;
  }
  async fetchAllVaults() {
    return Object.fromEntries(
      await Promise.all(
        Object.keys(r).map(async (_) => [
          _,
          (
            await a(
              Object.assign({
                "../../../config/vault/arbitrum.json": () =>
                  o(() => import("./arbitrum-0416f6e4.js"), []),
                "../../../config/vault/base.json": () =>
                  o(() => import("./base-345398ad.js"), []),
                "../../../config/vault/ethereum.json": () =>
                  o(() => import("./ethereum-4a92a1fe.js"), []),
                "../../../config/vault/featured.json": () =>
                  o(() => import("./featured-b25bb000.js"), []),
              }),
              `../../../config/vault/${_}.json`
            )
          ).default,
        ])
      )
    );
  }
  async fetchAllBoosts() {
    const [_, e, ...n] = (
        await Promise.all([
          o(() => import("./partners-348419e2.js"), []),
          o(() => import("./campaigns-0f1044b8.js"), []),
          ...Object.keys(r).map(async (t) =>
            a(
              Object.assign({
                "../../../config/boost/arbitrum.json": () =>
                  o(() => import("./arbitrum-de7b70d8.js"), []),
                "../../../config/boost/base.json": () =>
                  o(() => import("./base-1afa5994.js"), []),
                "../../../config/boost/campaigns.json": () =>
                  o(() => import("./campaigns-0f1044b8.js"), []),
                "../../../config/boost/ethereum.json": () =>
                  o(() => import("./ethereum-ca805b75.js"), []),
                "../../../config/boost/partners.json": () =>
                  o(() => import("./partners-348419e2.js"), []),
              }),
              `../../../config/boost/${t}.json`
            )
          ),
        ])
      ).map((t) => t.default),
      m = Object.fromEntries(
        await Promise.all(Object.keys(r).map(async (t, i) => [t, n[i]]))
      );
    return {
      boostsByChainId: c(m, (t) =>
        t.map((i) => ({
          ...i,
          partners: (i.partners || []).filter((s) => !!_[s]),
          campaign: i.campaign && e[i.campaign] ? i.campaign : void 0,
        }))
      ),
      partnersById: _,
      campaignsById: e,
    };
  }
  async fetchAllMinters() {
    return Object.fromEntries(
      await Promise.all(
        Object.keys(r).map(async (_) => [
          _,
          (
            await a(
              Object.assign({
                "../../../config/minters/arbitrum.tsx": () =>
                  o(() => import("./arbitrum-fb6d7a5f.js"), []),
                "../../../config/minters/aurora.tsx": () =>
                  o(() => import("./aurora-fb6d7a5f.js"), []),
                "../../../config/minters/avax.tsx": () =>
                  o(() => import("./avax-4abe4681.js"), []),
                "../../../config/minters/base.tsx": () =>
                  o(() => import("./base-fb6d7a5f.js"), []),
                "../../../config/minters/bsc.tsx": () =>
                  o(() => import("./bsc-fb6d7a5f.js"), []),
                "../../../config/minters/canto.tsx": () =>
                  o(() => import("./canto-fb6d7a5f.js"), []),
                "../../../config/minters/celo.tsx": () =>
                  o(() => import("./celo-fb6d7a5f.js"), []),
                "../../../config/minters/cronos.tsx": () =>
                  o(() => import("./cronos-fb6d7a5f.js"), []),
                "../../../config/minters/emerald.tsx": () =>
                  o(() => import("./emerald-fb6d7a5f.js"), []),
                "../../../config/minters/ethereum.tsx": () =>
                  o(() => import("./ethereum-fb6d7a5f.js"), []),
                "../../../config/minters/fantom.tsx": () =>
                  o(() => import("./fantom-d771f315.js"), []),
                "../../../config/minters/fuse.tsx": () =>
                  o(() => import("./fuse-fb6d7a5f.js"), []),
                "../../../config/minters/gnosis.tsx": () =>
                  o(() => import("./gnosis-fb6d7a5f.js"), []),
                "../../../config/minters/harmony.tsx": () =>
                  o(() => import("./harmony-fb6d7a5f.js"), []),
                "../../../config/minters/heco.tsx": () =>
                  o(() => import("./heco-fb6d7a5f.js"), []),
                "../../../config/minters/kava.tsx": () =>
                  o(() => import("./kava-fb6d7a5f.js"), []),
                "../../../config/minters/metis.tsx": () =>
                  o(() => import("./metis-fb6d7a5f.js"), []),
                "../../../config/minters/moonbeam.tsx": () =>
                  o(() => import("./moonbeam-fb6d7a5f.js"), []),
                "../../../config/minters/moonriver.tsx": () =>
                  o(() => import("./moonriver-fb6d7a5f.js"), []),
                "../../../config/minters/optimism.tsx": () =>
                  o(() => import("./optimism-4ebef0ff.js"), []),
                "../../../config/minters/polygon.tsx": () =>
                  o(() => import("./polygon-a49225ca.js"), []),
                "../../../config/minters/zkevm.tsx": () =>
                  o(() => import("./zkevm-fb6d7a5f.js"), []),
                "../../../config/minters/zksync.tsx": () =>
                  o(() => import("./zksync-fb6d7a5f.js"), []),
              }),
              `../../../config/minters/${_}.tsx`
            )
          ).minters,
        ])
      )
    );
  }
  async fetchPlatforms() {
    return (await o(() => import("./platforms-a99f946a.js"), [])).default;
  }
  async fetchBridges() {
    return (await o(() => import("./bridges-a294dbee.js"), [])).default;
  }
}
export { d as ConfigAPI };
