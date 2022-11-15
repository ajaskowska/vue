const app = Vue.createApp({
    data() {
        return {
        inputClass: '',
        visibility: true,
            inputColor: ''

        }
    },
    methods: {
        toggleParagraph(){
            this.visibility =  !this.visibility
        }


    }
}).mount('#assignment');