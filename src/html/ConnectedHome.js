function clickButtonMesProjets(){
    $.ajax({
    url:"/?MesProjets=1",
    type:"GET",
    success: function(data){
        console.log(data);
        window.location = data;
    },
    error: function(request, msg, error){
        alert("error delete" + data);
    }
});

}