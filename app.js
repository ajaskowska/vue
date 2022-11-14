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
}).mount('#assignment')