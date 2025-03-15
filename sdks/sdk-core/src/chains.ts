export enum ChainId {
  ZANJIR = 192837,
  ZANJIR_TESTNET = 192838,
}

export const SUPPORTED_CHAINS = [
  ChainId.ZANJIR,
  ChainId.ZANJIR_TESTNET
] as const
export type SupportedChainsType = (typeof SUPPORTED_CHAINS)[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVAX = 'AVAX',
  ROOTSTOCK = 'RBTC',
}
