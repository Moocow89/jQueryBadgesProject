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
            
           var $badges = $("#badges");
            
           var $course =  $("<div />", {
                "class": "course"
            }).appendTo($badges);
            
            $("<h3 />", {
                text: course.title,
            }).appendTo($course);
            
            $("<img />", {
                src: course.badge,
            }).appendTo($course);
            
            $("<a />", {
                href: course.url,
                target: "_blank",
                text: "See Course",
                "class": "btn btn-primary"
            }).appendTo($course);
            
        });
    }

});
