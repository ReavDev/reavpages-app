import { create } from 'zustand'
import { persist, PersistStorage } from 'zustand/middleware'

type StateProps = {
    isDark: boolean
    updateTheme: (state: boolean) => void
}
const storage: PersistStorage<StateProps> = {
    getItem: (name) => {
        const str = localStorage.getItem(name)
        if (!str) return null
        return JSON.parse(str)
    },
    setItem: (name, value) => {
        localStorage.setItem(name, JSON.stringify(value))
    },
    removeItem: (name) => localStorage.removeItem(name),
}

export const useThemeState = create<StateProps>()(
    persist(
        (set) => ({
            isDark: false,
            updateTheme: (state) => {
                set({ isDark: state })
            },
        }),
        { name: 'theme_state', storage }
    )
)