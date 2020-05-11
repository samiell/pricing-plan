import { initialState } from './state'
const defaultState = initialState()

export const actions = {
    clearLoading({ commit }) {
        setTimeout(() => {
            commit('setLoading', defaultState.loading)
            commit('setAlert', defaultState.alert)
        }, 4000)
    }
}