var array = ["Peter", "Katarina", "Lenka", "Martina"]
   console.log(array);

   array.forEach(element => console.log(element));

//$('body').append(
 //'<h1>Hello World!</h1>');


array.forEach(element => {
     $('ul').append('<li>'+element+'</li>')
    });             

let additionalBlock = {
      title: "Added with javascript",
      text: "This block was added using JavaScript's jQuery library. How awesome!"
    };
  
  
    $(document).ready(function() {
      document.title = additionalBlock.title;
  });
  
    console.log(additionalBlock.title);
    $(".end").append("<p>" + additionalBlock.text + "</p>");

//block_to_insert = document.createElement('h2');
//block_to_insert.innerHTML = 'additional H2 element';

//container_block = document.getElementById ('demo');
//container_block.appendChild(block_to_insert);


//$("head")[0].append( newScriptNode );