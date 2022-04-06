var app = new Vue({
    el: '#root',
    data: {
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        currentChatIndex: 0,

        newMessage: ''


    },
    methods: {
        currentChat: function (index) {
            this.currentChatIndex = index;
            console.log(this.currentChatIndex);
        },

        newMessageF: function () {
            const d = new Date();
            let c = d.getDate();
            let e = d.getMonth() + 1;
            let f = d.getFullYear();
            let g = d.getHours();
            let h = d.getMinutes();
            let i = d.getSeconds();

            if (c<10) {
                c = "0" + c;
            }
            if (e<10) {
                e = "0" + e;
            }
            if (g<10) {
                g = "0" + g;
            }
            if (h<10) {
                h = "0" + h;
            }
            if (i<10) {
                i = "0" + i;
            }
            let full = c + "/" + e + "/" + f + " " + g + ":" + h + ":" + i;
            

            this.contacts[this.currentChatIndex].messages.push({
                    date: full,
                    message: this.newMessage,
                    status: 'sent'
                },

            )
            this.newMessage = ''
            setTimeout(this.messageReplyF, 3000)
        },
        messageReplyF: function (){
            const d = new Date();
            let c = d.getDate();
            let e = d.getMonth() + 1;
            let f = d.getFullYear();
            let g = d.getHours();
            let h = d.getMinutes();
            let i = d.getSeconds();

            if (c<10) {
                c = "0" + c;
            }
            if (e<10) {
                e = "0" + e;
            }
            if (g<10) {
                g = "0" + g;
            }
            if (h<10) {
                h = "0" + h;
            }
            if (i<10) {
                i = "0" + i;
            }
            let full = c + "/" + e + "/" + f + " " + g + ":" + h + ":" + i;

            this.contacts[this.currentChatIndex].messages.push({
                date: full,
                message: 'Ok',
                status: 'received'
            },

        )
        },



    }
});