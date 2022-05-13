const app = new Vue(
    {
        el: "#root",
        data: {
            email: null
        },
        methods: {
            generateEmail() {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    this.email = resp.data.response;
                })
                
            }
        }
    }
)