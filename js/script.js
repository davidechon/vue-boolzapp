// alert("Hello World!")
// Boolzapp - a (not very) innovative messaging platform

// Milestone 1
// ●	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// ●	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


//////////////////////////////////////////////////////////////////////////////////



const app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
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
                messages: [
                    {
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
                messages: [
                    {
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
                messages: [
                    {
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
                messages: [
                    {
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
                messages: [
                    {
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
                messages: [
                    {
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
                messages: [
                    {
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
                    },
                ],
                
            }
        ],
        activeContactIndex: 0,
        searchText: '',
        message: ''
    },
    methods: {
        viewChat(index) {
            this.activeContactIndex = index;
        },
        sendMessage() {
            const newMessage = {
                date: '12:00', 
                // date: dayjs().format('DD/MM/YYYY HH:mm:ss'), 
                message: this.message,
                status: 'send',
            };
            this.contacts[this.activeContactIndex].message.push[newMessage];
            this.message = '';
            const responseMessage = {
                data: daysjs().format(),
                message: 'Ok',
                status: 'received'
            }  
        }  /* /sendMessage */
    } /* /methods */
})


        // sendMessage() {
        //     const newMessage = {
        //         // if(this.message === '') return, 
        //         data: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        //         message: this.message,
        //         status: 'sent'
        //     };
        //     this.contacts[this.activeContactIndex].message.push[newMessage];
        //     this.message = '';
        //     const responseMessage = {
        //         data: dayjs().format(),
        //         message: 'Ok',
        //         status: 'received'
        //     };
        //     setTimeout(()=> {
        //         this.contacts[this.activeContactIndex].message.push[responseMessage];
        //     },2000)
        // },
        // filterContact() {
        //     this.contacts.forEach((contact) => {
        //         if (contact.name.toLowerCase().includes(this.searchText.toLowerCase())) {
        //             contact.visible = true;
        //         } else {
        //             contact.visible = false;
        //         }
        //     })
        // },
        // computed: {
        //     filterContact() {
        //         return this.contacts.filter((contact) => {
        //             if(contact.name.toLowerCase().includes(this.searchText.toLowerCase())) {
        //                 return true
        //             } else {
        //                 return false 
        //             }
                    
        //         })
        //     }
