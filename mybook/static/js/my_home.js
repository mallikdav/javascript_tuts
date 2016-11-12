function xyz(){
    get_image()
    var profile_pic = document.getElementById("profile_pic");
    if(profile_pic.style.display == "block"){
        profile_pic.style.display = "none";
    }
    else{
        profile_pic.style.display = "block";
    }
}


function get_image(){
    $.ajax({
        url: 'http://myparag.com/our-darshan',
        type: 'GET',
//        data: 'ID=1&Name=John&Age=10', // or $('#myform').serializeArray()
        success: function(data) {
            for(var i=0; i< data['images'].length; i++){
                var node = document.createElement("img");
                node.src = "http://myparag.com/"+data['images'][i];
                node.setAttribute("id", "profile_pic");
//                var new_image_elem = '<img id="profile_pic" src="http://myparag.com/'+data['images'][i]+'">';
                var profile_block = document.getElementById("profile_block")
                profile_block.appendChild(node);
            }

         },
        failure: function() {alert()}
    });
}