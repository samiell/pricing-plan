export const initialState = () => {
    return {
        loading: false,
        alert: {
            icon: null,
            message: null,
            color: null
        }
    }
}
export const state = initialState()