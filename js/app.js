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
    }
}).mount('#app');