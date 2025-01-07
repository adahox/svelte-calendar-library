import { writable } from 'svelte/store';

interface ContextMenuState {
    position: {
        x: number;
        y: number;
    };
    show: boolean;
    selectedDay: number;
    setVisibility: (visibility: boolean, x: number, y: number) => void;
    defaultClose: () => void;
}

export const contextMenuStore = writable<ContextMenuState>({
    position: { x: 0, y: 0 },
    show: false,
    selectedDay: 0,
    setVisibility(visibility: boolean, x: number, y: number) {
        this.show = visibility;
        this.position = { x, y };
    },
    defaultClose() {
        this.show = false;
    }
});