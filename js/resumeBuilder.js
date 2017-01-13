var bio = {
    "name": HTMLheaderName.replace("%data%", "Ashutosh Kumar"),
    "role": HTMLheaderRole.replace("%data%", "Web Developer"),
    "contacts": {
        "mobile": HTMLmobile.replace("%data%", "7869400047"),
        "email": HTMLemail.replace("%data%", "ashutosh.cosmos@gmail.com"),
        "github": HTMLgithub.replace("%data%", "ashutosh0547"),
        "twitter": HTMLtwitter.replace("%data%", "ashutosh_kumar"),
        "location": HTMLlocation.replace("%data%", "Jharkhand")
    },
    "welcomeMessage": HTMLwelcomeMsg.replace("%data%", "Welcome to the resume class!!"),
    "skills": ["Programmer", "Web developer", "3D modeller", "Poet"],
    "biopic": HTMLbioPic.replace("%data%", "images/ashutosh.jpg")
};

bio.display = function() {
    $("#header").prepend(bio.role);
    $("#header").prepend(bio.name);
    $("#topContacts").append(bio.contacts.mobile);
    $("#topContacts").append(bio.contacts.email);
    $("#topContacts").append(bio.contacts.github);
    $("#topContacts").append(bio.contacts.twitter);
    $("#topContacts").append(bio.contacts.location);
    $("#topContacts").append(bio.welcomeMessage);
    $("#topContacts").append(bio.biopic);

    if (bio.skills.length !== 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(item) {
            var formattedSkill = HTMLskills.replace("%data%", item);
            $("#skills").append(formattedSkill);
        });
    }

    $("#footerContacts").append(bio.contacts.mobile);
    $("#footerContacts").append(bio.contacts.email);
    $("#footerContacts").append(bio.contacts.github);
    $("#footerContacts").append(bio.contacts.twitter);
    $("#footerContacts").append(bio.contacts.location);
};

bio.display();

// converting the name to International format
// function inName(myname) {
// 	var names = myname.trim().split(" ");
// 	names[1].toUpperCase();
// 	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowercase();
// 	return names.join(" ");
// }
// $("#main").append(internationalizeButton);

var work = {
    "jobs": [{
        "employer": "Infosys.ltd",
        "title": "system engineer",
        "location": "Mysore",
        "dates": "January 2017",
        "description": "Employed as a senior system engineer at Infosys in January."
    }, {
        "employer": "TCE.ltd",
        "title": "senior engineer",
        "location": "Jamshedpur",
        "dates": "July 2016",
        "description": "Employed as a senior engineer at Infosys in July."
    }]
};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(item) {

        var formattedEmployer = HTMLworkEmployer.replace("%data%", item.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", item.title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry").append(formattedEmployerTitle);

        var formattedDate = HTMLworkDates.replace("%data%", item.dates);
        $(".work-entry:last").append(formattedDate);

        var formattedLocation = HTMLworkLocation.replace("%data%", item.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", item.description);
        $(".work-entry:last").append(formattedDescription);

    });

    // for (job in work.jobs)
    // {
    // 	$("#workExperience").append(HTMLworkStart);

    // 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    // 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    // 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
    // 	$(".work-entry").append(formattedEmployerTitle);

    // 	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    // 	$(".work-entry:last").append(formattedDate);

    // 	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    // 	$(".work-entry:last").append(formattedLocation);

    // 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    // 	$(".work-entry:last").append(formattedDescription);
    // }
};

work.display();

var education = {
    "schools": [{
        "name": "ISM Dhanbad",
        "location": "Dhanbad",
        "degree": "Masters",
        "majors": ["petroleum"],
        "dates": "2016",
        "url": "http://www.ismdhanbad.ac.in"
    }, {
        "name": "BNS DAV",
        "location": "Giridih",
        "degree": "HSC",
        "majors": ["Mathematics","Science"],
        "dates": "2011",
        "url": "http://bnsdav.org"
    }],
    "onlineCourses": [{
        "title": "Front End Web Development",
        "school": "udacity",
        "dates": "2016",
        "url": "http://udacity.com"
    }]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(item) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", item.name).replace("#", item.url);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", item.degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", item.dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", item.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        item.majors.forEach(function(maj) {
        	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", maj);
    	    $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(item) {

        var formattedCourseTitle = HTMLonlineTitle.replace("%data%", item.title);
        $(".education-entry:last").append(formattedCourseTitle);

        var formattedCourseSchool = HTMLonlineSchool.replace("%data%", item.school);
        $(".education-entry:last").append(formattedCourseSchool);

        var formattedCourseDates = HTMLonlineDates.replace("%data%", item.dates);
        $(".education-entry:last").append(formattedCourseDates);

        var formattedCourseURL = HTMLonlineURL.replace("%data%", item.url).replace("#", item.url);
        $(".education-entry:last").append(formattedCourseURL);

    });
};

education.display();

var projects = {
    "projects": [{
        "title": "Simulation Study of a Gas Reservoir",
        "dates": "2016",
        "description": "Study of a gas reservoir based on its reservoir properties and past production data.",
        "images": [
            "images/simulation.gif",
            "images/simulation2.jpg"
        ]
    }]
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(item) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", item.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", item.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", item.description);
        $(".project-entry:last").append(formattedDescription);

        if (item.images.length > 0) {
            item.images.forEach(function(item) {
                var formattedImage = HTMLprojectImage.replace("%data%", item);
                $(".project-entry:last").append(formattedImage);
            });
            // for(image in projects.projects[project].images) {
            // 	var formattedImage = HTMLprojectImage.replace("%data%", item.images[image]);
            // 	$(".project-entry:last").append(formattedImage);
            // }
        }
    });

    // for (project in projects.projects) {
    // 	$("#projects").append(HTMLprojectStart);

    // 	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    // 	$(".project-entry:last").append(formattedTitle);

    // 	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    // 	$(".project-entry:last").append(formattedDates);

    // 	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    // 	$(".project-entry:last").append(formattedDescription);

    // 	if(projects.projects[project].images.length > 0) {
    // 		for(image in projects.projects[project].images) {
    // 			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    // 			$(".project-entry:last").append(formattedImage);
    // 		}
    // 	}
    // }
};

projects.display();

$("#mapDiv").append(googleMap);