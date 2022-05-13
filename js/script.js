const app = new Vue(
    {
        el: "#root",
        data: {
            email: [],
            minValue: 1,
            maxValue: 10,
            itemsEmail: 10
        },
        methods: {
            generateEmail() {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail'
                params: {
                    min: this.minValue,
                    max: this.maxValue,
                    items: this.itemsEmail
                })
                .then((resp) => {
                    const randomEmails = resp.data.response;
                    this.email = randomEmails;
                })
                
            }
        }
    }
)