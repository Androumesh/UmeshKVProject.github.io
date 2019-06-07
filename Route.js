
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
    //__dirname : It will resolve to your project folder.
  });

router.get('/about-us', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/about-us.html'));
});

router.get('/courses', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/courses.html'));
});

router.get('/Testing_&_Business_Analysis', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Testing_&_Business_Analysis.html'));
});

router.get('/soft-skills', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/soft-skills.html'));
});

router.get('/academic-programs', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Academic-Programs.html'));
});

router.get('/careers', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Careers.html'));
});


router.get('/Management', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Management.html'));
})


router.get('/Certified_Courses', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Certified_Courses.html'));
})

router.get('/internship', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/internship.html'));
});

router.get('/placement', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/placement.html'));
});

router.get('/contact-us', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/contact-us.html'));
});

router.get('/Java-training-in-noida', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Java-training-in-noida.html'));
});

router.get('/PHP_Training_Noida', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/PHP_Training_Noida.html'));
});

router.get('/java_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/java_detail.html'));
});

router.get('/Enroll', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Enroll.html'));
});

router.get('/subscribe', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/subscribe.html'));
});

router.get('/Instructor', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Instructor.html'));
});

router.get('/laravel-training-in-noida', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/laravel-training-in-noida.html'));
});

router.get('/Advanced-Java-Training-Noida', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Advanced-Java-Training-Noida.html'));
});

router.get('/automation_testing_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/automation_testing_detail.html'));
});

router.get('/business_analysis_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/business_analysis_detail.html'));
});

router.get('/Career_counselling', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Career_counselling.html'));
});

router.get('/career_planning_management_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/career_planning_management_detail.html'));
});

router.get('/Careers', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Careers.html'));
});

router.get('/Certified_Courses', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Certified_Courses.html'));
});

router.get('/Client_handling_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Client_handling_detail.html'));
});

router.get('/feedback', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/feedback.html'));
});

router.get('/Faculty', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Faculty.html'));
});

router.get('/codeigniter-training-in-noida', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/codeigniter-training-in-noida.html'));
});

router.get('/Communication_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Communication_detail.html'));
});

router.get('/Core-Java-Training-Program', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Core-Java-Training-Program.html'));
});

router.get('/Digital_MarketingTraining', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Digital_MarketingTraining.html'));
});

router.get('/E2E_profile_building', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/E2E_profile_building.html'));
});

router.get('/Email_etiquettes_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Email_etiquettes_detail.html'));
});

router.get('/php-basic-cms-training', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/php-basic-cms-training.html'));
});

router.get('/news', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/news.html'));
});

router.get('/personality_development_details', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/personality_development_details.html'));
});

router.get('/php_mysql_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/php_mysql_detail.html'));
});

router.get('/Presentation_skills_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Presentation_skills_detail.html'));
});

router.get('/ProgramProjectManagement', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/ProgramProjectManagement.html'));
});

router.get('/python', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/python.html'));
});

router.get('/soft_skill_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/soft_skill_detail.html'));
});

router.get('/software_testing_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/software_testing_detail.html'));
});

router.get('/web_development_detail', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/web_development_detail.html'));
});

router.get('/WebDesigning-training-in-noida', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/WebDesigning-training-in-noida.html'));
});

//add the router
app.use(express.static(__dirname + '/public'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/public/assets'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
