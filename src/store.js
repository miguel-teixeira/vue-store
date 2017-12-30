export default {
    data: {},
    vue: {
        set(object, key, value) {
            object[key] = value;
        }
    },
    registerModel(key, model) {
        this.vue.set(this.data, key, model);
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