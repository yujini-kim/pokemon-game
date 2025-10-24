import { create } from 'zustand'

interface CoinState {
  coin: number
  setCoin: (value: number) => void
  resetCoin: () => void
}

export const useCoinStore = create<CoinState>((set) => ({
  coin: 0,
  setCoin: (value) => set({ coin: value }),
  resetCoin: () => set({ coin: 0 }),
}))
