var app = new Vue (
  {
    el: "#root",
    data:{
      mails: [],
    },
    methods: {
      generate: function () {
          for (var i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
              let mail = response.data.response;
              this.mails.push(mail);
            })
          }
      },
      remove: function () {
        this.mails = []
      }
    }
  }
)
