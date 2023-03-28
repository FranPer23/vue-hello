const { createApp } = Vue

createApp ({
    data () {
        return {
            message: "CIAO VUE",
            text:"questa è l'immagine dei pilastri della creazione",
            imgSrc: "http://www.nasa.gov/sites/default/files/thumbnails/image/stsci-01gfnn3pwjmy4rqxkz585bc4qh.png"
        }
    },
}).mount("#app")