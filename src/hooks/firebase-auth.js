import { toRefs, reactive } from "vue";
import { provider, auth } from "../plugins/firebase";

const state = reactive({
    user: null,
    initialized: false,
    error: null,
});

export default function () {
    const login = () => {
        return auth.signInWithPopup(provider)
            .then(
                (user) => {
                    state.user = user;
                    state.error = null;
                    return user;
                },
                (error) => {
                    state.error = error;
                    throw error;
                }
            );
    };

    const logout = () => {
        auth.signOut();
        state.user = null;
        return null;
    }

    const authCheck = () => {
        return new Promise((resolve) => {
            !state.initialized &&
                auth.onAuthStateChanged(async (user) => {
                    if (user) {
                        state.user = user;
                    } else {
                        state.user = null;
                    }
                    state.initialized = true;

                    resolve(true);
                });
        });
    };

    return {
        ...toRefs(state),
        login,
        logout,
        authCheck,
    };
}