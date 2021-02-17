export default {
    namespaced: true,
    actions: {
        add({commit}, {name}){
            commit('create', {name})
        },
        delete({commit}, id) {
            commit('delete', id)
        }
    },
    mutations: {
        create(store, {name}) {
            store.tabs.push({
                name,
                id: store._id
            })
            store._id += 1
        },
        delete(store, id) {
            store.tabs = store.tabs.filter(e => e.id !== id)
        }
    },
    state: {
        _id: 1,
        tabs: []
    },
    getters: {
        tabs({tabs}) {
            return tabs
        }
    }
}