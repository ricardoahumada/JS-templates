Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});


$.get('template.hbs', function (data) {
    var template=Handlebars.compile(data);
    $('body').append(template(data));
}, 'html');

var data = { 
    users: [ { 
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        },
        jobTitle: "Front End Technical Lead",
        twitter: "gazraa" 
    }, {
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        }, 
        jobTitle: "Photographer",
        twitter: "photobasics"
    }, {
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        }, 
        jobTitle: "LEGO Geek",
        twitter: "minifigures"
    } ]
}; 

