function clickButtonCreateProject(){
    $.ajax({
        url:"/?CreateProject=1",
        type:"GET",
        success: function(data){
            window.location = data;
        },
        error: function(request, msg, error){
            console.log(error);
        }
    });
}
