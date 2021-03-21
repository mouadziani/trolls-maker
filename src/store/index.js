import { createStore } from 'vuex'

export const store = createStore({
    state: {
        canvas: null
    },
    getters: {
        canvas(state) {
            return state.canvas
        }
    },
    mutations: {
        initCanvas(state, canvasRef) {
            state.canvas = new fabric.Canvas(canvasRef, {
                backgroundColor: "#fff",
            })
        }
    },
})