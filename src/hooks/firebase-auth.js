import { toRefs, reactive } from "vue";
import { auth } from "../plugins/firebase";

const state = reactive({
    user: null,
    initialized: false,
    error: null,
});

export default function () {
    const register = async (email, password) => {
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password);
            state.user = result.user;
            state.error = null;
            return state.user;
        } catch (error) {
            state.error = error;
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            state.user = result.user;
            state.error = null;
            return state.user;
        } catch (error) {
            state.error = error;
            throw error;
        }
    };

    const logout = async () => {
        await auth.signOut();
        state.user = null;
        return null;
    };

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
        register
    };
}