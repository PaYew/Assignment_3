Vue.createApp({

    data() {

        return {
            message: null,
            repetitionNo: null,
            check: false
        }

    },
    computed: {
        repeatMessage(){
            var tempMessage = "";
            for (var i = 0; i < this.repetitionNo; i++) {
                tempMessage += this.message;
              }

              this.check = true;
              return tempMessage;
        }
    },

    methods: {
        IsPositive(){
            if(this.repetitionNo >=0 ){
                return true;
            }
            else 
                return false;
        }

    }

}).mount("#app")