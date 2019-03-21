Vue.filter('searchFor', function (value, searchString) {

  var result = [];

  if(!searchString){
     return value;
  }

  searchString = searchString.trim().toLowerCase();

  result = value.filter(function(item){
  if(item.product.toLowerCase().indexOf(searchString) !== -1){
      return item;

  }
  })

  return result;
})
    

new Vue({
  el: 'body',
  data: {
      searchString: "",
      selectedCategory: "",

      products: [
      {
        "product": "Pangasinan State University",
        "location": "Lingayen",
        "category": "Graphics Card",
        "page": "https://www.google.com/",
        "image": "logo/psu.png"
      },
      {
         "product": "EVGA GeForce GTX 980Ti Superclocked ACX 2.0+",
         "price": "559.99",
         "category": "Graphics Card",
         "image":     "https://www.overclockers.co.uk/media/image/thumbnail/GX288EA_112617_105x105.jpg"
      },
      {
          "product": "Asus Radeon R9390X DS3 OC Strix",
          "price": "329.99",
          "category": "Graphics Card",
          "image": "https://www.overclockers.co.uk/media/image/thumbnail/GX373AS_117053_105x105.jpg"
      },
      {
          "product": "Sapphire Radeon R9390X Nitro",
          "price": "349.99",
          "category": "Graphics Card",
          "image": "https://www.overclockers.co.uk/media/image/thumbnail/GX376SP_121594_105x105.jpg"
      },
      {
          "product": "Intel Core i7-6700K 4.0GHz (Skylake)",
          "price": "289.99",
          "category": "Processor",
          "image": "https://www.overclockers.co.uk/media/image/thumbnail/CP581IN_114995_105x105.jpg"
      },
      {
          "product": "Intel Core i5-6600K 3.9GHz (Skylake)",
          "price": "197.99",
          "category": "Processor",
          "image": "https://www.overclockers.co.uk/media/image/thumbnail/CP579IN_114994_105x105.jpg"
      },
      {
          "product": "AMD Piledriver FX-8 9590 Black Edition 4.70GHz (5.00GHz Turbo)",
          "price": "161.99",
          "category": "Processor",
          "image": "https://www.overclockers.co.uk/media/image/thumbnail/CP336AM_60876_105x105.jpg"
      },
      {
          "product": "AMD Piledriver FX-8 8350 Black Edition 4.00GHz",
          "price": "139.99",
          "category": "Processor",
          "image": "https://www.overclockers.co.uk/media/image/thumbnail/CP336AM_60876_105x105.jpg"
      },
      {
          "product": "Asus Maximus VIII Hero Intel Z170 (Socket 1151) ATX Motherboard",
          "price": "176.99",
          "category": "Motherboard",
          "image": "https://www.overclockers.co.uk/media/image/thumbnail/MB651AS_114892_105x105.jpg"
      },
      {
          "product": "Asus Crosshair V Formula Z AMD 990FX (Socket AM3+) Motherboard",
          "price": "184.99",
          "category": "Motherboard",
          "image": "https://www.overclockers.co.uk/media/image/thumbnail/MB554AS_83151_105x105.jpg"
      }
      ]
   },

   methods: {
      selectCategory: function(category) {
         if(category == "Graphics Card"){
            var button = 'GPU'
            document.getElementById(button).className = "selected"
            document.getElementById('CPU').className = "categories"
            document.getElementById('Mobo').className = "categories"
         }
         else if(category == "Processor"){
            var button = 'CPU'
            document.getElementById(button).className = "selected"
            document.getElementById('GPU').className = "categories"
            document.getElementById('Mobo').className = "categories"
         }
         else{
            var button = 'Mobo'
            document.getElementById(button).className = "selected"
            document.getElementById('GPU').className = "categories"
            document.getElementById('CPU').className = "categories"
         }
         if(this.selectedCategory !== category){
            this.selectedCategory = category
         }
         else{
            this.selectedCategory = ""
            document.getElementById(button).className = "categories"
         }
      }
   }
});

