var bio = {
	"name": "Sandhya Shadangi",
	"role": "Web Developer",
	"contactInfo": {
		"mobile": "000-000-0000", 
		"email":"knitaswatch@gmail.com", 
		"github": "swatchophile", 
		"twitter":"@kachhua", 
		"blog":"swatchophile.wordpress.com",
		"location":"Sunnyvale"
		},
	"pictureURL": "image.jpg",
	"WelcomeMessage": "Hello world!",
	"skills": [
		"HTML5", "CSS3", "JavaScript"
		],
	"display":function(){
	//for (var info in bio) {
		
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		//for (contact in bio.contactInfo) {
			var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
			$(".flex-box").append(formattedMobile);
			var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
			$(".flex-box").append(formattedEmail);
			var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
			$(".flex-box").append(formattedGithub);
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
			$(".flex-box").append(formattedTwitter);
			var formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog);
			$(".flex-box").append(formattedBlog);
			var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
			$(".flex-box").append(formattedLocation);
			//}
		var formattedImage = HTMLbioPic.replace("%data%", bio.pictureURL);
		$("#header").append(formattedImage);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
		$("#header").append(formattedWelcome);
		$("#header").append(HTMLskillsStart);
		
		for (skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#header").append(formattedSkills);
			};
	}
};
bio.display();

var work = {
	"jobs":
	[
		{
		"employer":"Self-employed",
		"title":"Independent Knitwear Designer",
		"dates":"December 2013-present",
		"description":"ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd"
		},
		{
		"employer":"Module One India Ltd",
		"title":"Content Writer",
		"dates":"August 2008 - June 2010",
		"description":"ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd"
		},
		{
		"employer":"Indo-Global Social Service Society",
		"title":"Executive - Communications and Fundraising",
		"dates":"June 2010 - June 2011",
		"description":"ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd" 
		}
	],
	"display":function() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		};
	}
};
work.display();

var projects = {
	"projects":
	[
		{
		"dates":"October 2014",
		"title":"Mockup to Website",
		"description":"submitted ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd",
		"images":"aboutPic.jpg"
		},
		{
		"dates":"October 2014",
		"title":"Interactive Resume",
		"description":"In progress ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd",
		"images":"aboutPic.jpg"
		},
		{
		"dates":"November 2014",
		"title":"Classic Arcade Game",
		"description":"not started ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd",
		"images":"aboutPic.jpg"
		},
		{
		"dates":"November 2014",
		"title":"Website Optimization",
		"description":"not started ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd ads dggrgrg ghghgjy kukuug gjgytt dhttrd",
		"images":"aboutPic.jpg"
		}
	],
	"display":function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		 /*if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLformattedImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			};
		}; */
		};
	}
};
projects.display();

var education = {
	"schools": 
	[
		{
		"name":"University of Delhi",
		"dates":"2006-2008",
		"degree":"MA",
		"major":"History",
		"location": "New Delhi, India"
		},
		{
		"name":"Lady Shri Ram College",
		"dates":"2001-2004",
		"degree":"BA(Hons)",
		"major":"History",
		"location":"New Delhi, India"
		}
	],
	
	"onlineCourses":
	[
		{
		"title":"JavaScript Essential Training",
		"school":"lynda.com",
		"dates":"June 2014",
		"url":"abc.abc"
		},
		{
		"title":"Computer Science 101",
		"school":"coursera.com, through Stanford University",
		"dates":"2012",
		"url":"abc.abc"
		},
		{
		"title":"Introduction to JavaScript",
		"school":"ed2go, through DeAnza College",
		"dates":"2013",
		"url":"abc.abc"
		},
		{
		"title":"Front-End Developer Nanodegree",
		"school":"Udacity",
		"dates":"October 2014 - present",
		"url":"abc.abc"
		}
	],

	"display":function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedName);
			
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
			
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		};
		$(".education-entry:last").append(HTMLonlineClasses);
		
		for (course in education.onlineCourses) {
			
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			$(".education-entry:last").append(formattedTitle);
			
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedSchool);
			
			var formattedOnDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnDates);
			
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedURL);	
		};
	}

};
education.display();

$(document).click(function(loc) {
	var x = loc.pageX;     // Get the horizontal coordinate
	var y = loc.pageY;     // Get the vertical coordinate
	logClicks(x,y);
	});
	
function locationizer(work_obj) {
	var locationArray = [];
	for(job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
		}
		return locationArray;
	}

function inName() {
	var name1 = bio.name.trim().split(" ");
	name1[0] = name1[0].slice(0,1).toUpperCase() + name1[0].slice(1).toLowerCase();
	name1[1] = name1[1].toUpperCase();
	return name1[0] + " " + name1[1];
	};
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);	