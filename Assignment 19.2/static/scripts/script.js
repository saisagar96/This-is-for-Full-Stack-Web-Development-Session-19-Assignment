window.onload = function() {

    var url = '/static/data/data.json';
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(tasksJson) {
        render(tasksJson);
    })
    .catch(function(err) {
        console.log(err);
    });

    function render(obj) {
        document.getElementById("name").innerHTML = obj.name;
        document.getElementById("desc").innerHTML =  obj.description;
        document.getElementById("highlights").innerHTML = obj.highlights;
        document.getElementById("bullets").innerHTML =  obj.bullets;
        document.getElementById("contact").innerHTML = obj.contact;
        document.getElementById("details").innerHTML =  obj.details;
        document.getElementById("basicTitle").innerHTML = obj.basicTitle;
        document.getElementById("basicInfo").innerHTML =  obj.basicInfo;
        document.getElementById("EduTitle").innerHTML = obj.EduTitle;
        document.getElementById("EduInfo").innerHTML =  obj.EduInfo;
        document.getElementById("ProExpTitle").innerHTML = obj.ProExpTitle;
        document.getElementById("ProExpInfo").innerHTML =  obj.ProExpInfo;
    }
}