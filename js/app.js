const {createApp} = Vue;

createApp({
    data(){
        
        return{
            lists:[
                {
                    text:'fare la spesa',
                    done: true
                },
                {
                    text:'portare furori il cane',
                    done: true
                },
                {
                    text:'andare in palestra',
                    done: false
                },
                {
                    text:'ordinare le pizze',
                    done: true
                },
                {
                    text:'guardare un film',
                    done: false
                }, 
            ]
        }
    },
    methods:{
        deleteList(list) {
            this.lists.splice(this.lists.indexOf(list), 1);
        
        },
    }
}).mount('#app');