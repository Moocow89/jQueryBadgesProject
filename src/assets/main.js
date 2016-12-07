$(function() {
    

 $.ajax({
      url: 'https://www.codeschool.com/users/MooCow89.json',
      dataType: 'jsonp', 
      success: function(response){
             addCourses(response.courses.completed);
                
      }
    });
    
    function addCourses(courses){
        courses.forEach(function(course){
            var courseElement = $("<div>");
            var courseTitle = $("<h3>");
            var courseImg = $("<img>");
            var courseLink = $("<a>");
            courseLink.attr("href", course.url);
            courseLink.attr("target", "_blank");
            courseLink.addClass("btn btn-primary");
            courseLink.text("See Course");
            courseImg.attr("src", course.badge);
            courseTitle.text(course.title);
            courseElement.className("course");
            courseElement.append(courseTitle);
            courseElement.append(courseImg);
            courseElement.append(courseLink);
            $("#badges").append(courseElement);
        })
    }

});
