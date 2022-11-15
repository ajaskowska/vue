const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            goals: [],
            visibility: true
        }
    },
    computed:{
        buttonCaption(){
            return this.visibility ? 'Hide' : 'Show'
        }
    },
    methods: {
        addTask(){
            this.goals.push(this.inputTask);
            this.inputTask = ""
        },
        removeTask(index){
            this.goals.splice(index, 1)
        },
        toggleList(){
            this.visibility = !this.visibility
        }
    }
}).mount('#user-goals');