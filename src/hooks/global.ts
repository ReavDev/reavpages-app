
import { create } from 'zustand';

interface GlobalState {
    showBetaModal: boolean;
    setShowBetaModal: (show: boolean) => void;
}

const useGlobal = create<GlobalState>((set) => ({
    showBetaModal: false,
    setShowBetaModal: (show) => set({ showBetaModal: show }),
}));

export default useGlobal;
