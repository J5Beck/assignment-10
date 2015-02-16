$(function(){

  var getData = function(keywords, callback) {
    var params = {
      api_key: "niqoyrl7dver15xzb6mp2c7e",
      includes: "Images,Shop"
    };

    if (!callback && typeof keywords === "function") {
      callback = keywords;
      keywords = null;
    }

    if (keywords && keywords.length) {
      params.keywords = keywords;
    }

    $.ajax("https://openapi.etsy.com/v2/listings/active.js", {
      data: params,
      dataType: "jsonp",
      success: callback
    });
  };




  $(".search-form").on("submit", function(event){

    console.log("submit happened");
    
    event.preventDefault();
    
    var keywords  = $(".search-field").val();
    
    getData(keywords, function(data){

      console.log("got data");
    
      var items = data.results;

      $(".items_container").empty();

      items.forEach(function(item){

        console.log("appending item");

        $(".items_container").append(myTemplate(item));

      });

    });
  });


  var myTemplate = _.template(
    "<div class='single_item_container'>" +  
      "<div class='item_box'>" +
        "<div class='imgUrl'>" +
          "<img src='<%= Images[0].url_570xN %>'>" +
        "</div>" +
        "<div class='name'>" +
          "<a href='<%= url %>'><%= title %></a>" +
        "</div>" + 
        "<div class='seller'>" +
          "<a href='<%= Shop.url %>'><%= Shop.shop_name %></a>" +
        "</div>" +
        "<div class='cost'>$<%= price %> <%= currency_code %></div>" +
      "</div>" +
    "</div>"  
  ); 


});   



// var myTemplate = _.template(
//       "<div class= 'product'>" +
//         "<div class= 'name'><%= name %></div>" +
//           "<div class= 'product-image'>" +
//             "<img src ='<%= imgUrl %>'> " +
//   "</div>" +
//   "<div class='add-to-cart'>" +
//       "<a href='<%= href %>'>Add to cart</a>" +
//       "</div>" +
//   "</div>"
// );





// $(function(){

//   var getData = function(keywords, callback) {
//     var params = {
//       api_key: "niqoyrl7dver15xzb6mp2c7e",
//       includes: "Images,Shop",

//     };

//     if (!callback && typeof keywords === "function") {
//       callback = keywords;
//       keywords = null;
//     }

//     if (keywords && keywords.length) {
//       params.keywords = keywords;
//     }

//     $.ajax("https://openapi.etsy.com/v2/listings/active.js", {
//       data: params,
//       dataType: "jsonp",
//       success: callback
//     });
//   };
  
  // items.forEach(function(item) {
  //   $(".products").append(myTemplate(item));
  // });

  // getData(function(data){
  //   var items = data.results;
  //   items.forEach(function(item) {
  //   $(".items_container").append(myTemplate(item));
  //   });
  // });




  // $(".search-form").on("submit", function(event) {
  //   event.preventDefault();
    
  //   var keywords = $(".search-field").val();
    
  // //   // alert(keywords);

  //   getData(function(data){
  //     var items = data.results;
  //     // console.log(items);
  //       $(".items_container").empty();
  //     items.forEach(function(item) {
  //       $(".items_container").append(myTemplate(item));
  //     });
  //   });
  // });
