export default {
    data: {},
    vue: {
        set(object, key, value) {
            object[key] = value;
        }
    },
    register(key, data) {
        if (!this.has(key)) {
            this.vue.set(this.data, key, data);
        }
    },
    has(key) {
        return key in this.data;
    },
    install(vue, options) {
        this.vue = vue;

        vue.prototype.$store = this.data;

        vue.mixin({
            data() {
                return {
                    store: this.$store
                }
            }
        });
    },
}