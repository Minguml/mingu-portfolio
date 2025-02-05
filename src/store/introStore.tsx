import { create } from "zustand";

// Create a store
type introStoreType = {
	loaded: boolean;
	setLoaded: () => void;
	clearLoaded: () => void;
};

export const introStore = create<introStoreType>((set) => ({
	loaded: false,
	setLoaded: () =>
		set((state) => ({ loaded: !state.loaded })),
	clearLoaded: () => set({ loaded: false }),
}));
