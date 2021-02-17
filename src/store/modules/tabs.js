export default {
    namespaced: true,
    actions: {
        add({ commit }, { name }) {
            return commit("create", { name });
        },
        delete({ commit }, id) {
            commit("delete", id);
        }
    },
    mutations: {
        create(store, { name }) {
            const d = {
                name,
                id: store._id
            }
            store.tabs.push(d);
            store._id += 1;
            return d
        },
        delete(store, id) {
            store.tabs = store.tabs.filter(e => e.id !== id);
        }
    },
    state: {
        _id: 1,
        tabs: []
    },
    getters: {
        tabs({ tabs }) {
            return tabs;
        }
    }
};
