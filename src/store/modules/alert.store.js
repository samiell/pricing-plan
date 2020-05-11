import { state } from './alert/state';
import { getters } from './alert/getters';
import { mutations } from './alert/mutations';
import { actions } from './alert/actions';

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}