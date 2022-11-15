const app = Vue.createApp({
    data() {
        return {
            name: "Anna",
            age: 19,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Red_Queen_-_Alice_in_Wonderland_%282010_film%29.png"
        }
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        }
    }
}).mount('#assignment');
const app2 = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ""
        }
    },
    methods: {
        reduce(num){
            this.counter= this.counter - num;
        },
        setName(event){
            this.name = event.target.value;
        },
        submitForm(event){
           // event.preventDefault(); --> tę funkcję zastępuje .prevent modifier
            alert('Submitted')

        },
        resetInput(){
            this.name = ''
        }
    }

}).mount('#events')

const app3 = Vue.createApp({
    data() {
        return {
            name: "",
            confirmedName: ''
        }
    },
    methods: {
        showAlert() {
            alert("hello!");
        },
        registerUser(e){
            this.name = e.target.value
        },
        confirmName (){
            this.confirmedName = this.name
        }
    }
}).mount('#part3');

const app4 = Vue.createApp({
    data() {
        return {
            number: 0,
            result:""
        }
    },
    watch:{
        showResult() {
            const that = this;
            setTimeout(function (){
                that.number = 0
            }, 5000);
        }
    },
    computed: {
        showResult(){
            if (this.number < 37) {
                return "Not there yet";
            }
             if (this.number > 37) {
                 return "Too much!";
             }
            else {return this.number}
            }

        },

    methods: {
        add(num){
            this.number = this.number + num;
        }
    }
}).mount('#part4');