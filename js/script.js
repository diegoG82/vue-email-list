// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const { createApp } = Vue;

createApp({
  data() {
    return {
      userEmail: [],
      listcomplete: false,
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          if (!this.userEmail.includes(resp.data.response)) {
            this.userEmail.push(resp.data.response);
            console.log(resp);
          }
        });
    }
  },
}).mount("#app");
