
const app = Vue.createApp({
	data () {
                return {
                	joueur1: "",
      				joueur2: "",
      				joueur3: "",
      				joueur4: "",
      				disButton: true,
      				random: ["", "", "", ""],
      				joueurrandom1: "",
      				joueurrandom2: "",
      				joueurrandom3: "",
      				joueurrandom4: "",
      			}
      		},
      		

    methods:{
      	disbutton: function() {
      		return (this.joueur1 == "" || this.joueur2 == "" || this.joueur3 == "" || this.joueur4 == "")
      	},
      	
      	shuffle: function(array) {
  			for (let i = array.length - 1; i > 0; i--) {
    			let j = Math.floor(Math.random() * (i + 1));
   			 	[array[i], array[j]] = [array[j], array[i]];
  				}
			},		
		
      	randomJoueur: function() {
      		liste = [0,1,2,3],

			this.shuffle(liste);
			
			console.log(liste);
			
			this.random[liste[0]] = this.joueur1;
			this.random[liste[1]] = this.joueur2;
			this.random[liste[2]] = this.joueur3;
			this.random[liste[3]] = this.joueur4;
			
			this.joueurrandom1 = this.random[0];
			this.joueurrandom2 = this.random[1];
			this.joueurrandom3 = this.random[2];
			this.joueurrandom4 = this.random[3];
      	},
		
      },
      

                
})

app.mount('#app ')