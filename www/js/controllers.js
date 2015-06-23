var answersetforward = [];
//ALL VALUES OF TABLE ARE PRESENT
var questionset = [];

angular.module('controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});
    })
    .controller('homeCtrl', function ($scope, $ionicModal, $location) {
        $scope.logout = function () {
            $.jStorage.set("user", null);
            $location.path('app/login');
        };

    })
    .controller('loginCtrl', function ($scope, $timeout, $location) {
        $scope.logindata = {};
        loginsuccess = function (userinfo) {
            if ($scope.logindata.password == userinfo.password) {
                $.jStorage.set("user", userinfo);
                $location.path('app/questionare');
                $scope.$apply();
            } else {
                $scope.invalidpassword = "Invalid password !";
                console.log($scope.invalidpassword);
            };
        }

        $scope.dologin = function () {
            if ($scope.logindata.username) {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM `USERS` WHERE `username`="' + $scope.logindata.username + '"', [], function (tx, results) {
                        if (results.rows.length > 0) {
                            loginsuccess(results.rows.item(0));
                        } else {
                            $scope.usernotexist = "User does not exist";
                            console.log($scope.usernotexist);
                        };
                    }, null);
                });
            }
        };

    })
    .controller('forgotCtrl', function ($scope, $location) {})
    .controller('signupCtrl', function ($scope, $location) {
        $scope.user = {};
        $scope.secretquestions = [];
        //DROPDOWN OF SECRET QUE
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM `SECRET_QUE`', [], function (tx, results) {
                for (var q = 0; q < results.rows.length; q++) {
                    $scope.secretquestions.push(results.rows.item(q));
                };
                console.log($scope.secretquestions);
            }, null)
        });

        $scope.signin = function () {
            //VERIFICATION OF ALL FIELDS SHOULD BE FULLFIELD
            if (!$scope.user.name) {
                $scope.userexist = "This field is required";
                console.log($scope.userexist.length);
            }
            if (!$scope.user.gender) {
                $scope.genderempty = "This field is required";
            }
            if (!$scope.user.emailid) {
                $scope.emailidempty = "This field is required";
            }
            if (!$scope.user.password) {

                $scope.passwordempty = "This field is required";
            }
            if (!$scope.user.question) {
                $scope.questionempty = "This field is required";
            }
            if (!$scope.user.answer) {
                $scope.answerempty = "This field is required";
            } else {

                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM USERS WHERE `username`="' + $scope.user.name + '" ', [], function (tx, results) {
                        if (results.rows.length > 0) {
                            $scope.userexist = "User is already exists !"
                        } else {
                            $scope.genderempty = "";
                            $scope.emailidempty = "";
                            $scope.passwordempty = "";
                            $scope.questionempty = "";
                            $scope.answerempty = "";


                            var insert = 'INSERT INTO USERS(username ,gender ,emailid ,password ,secret_que ,answer ) VALUES("' + $scope.user.name + '","' + $scope.user.gender + '","' + $scope.user.emailid + '","' + $scope.user.password + '","' + $scope.user.question + '","' + $scope.user.answer + '")';
                            //FUNCTION FOR INSERTING DATA IN DB
                            signup(insert);
                        };

                    }, null)

                });
            }
        };
        var signup = function (insertdata) {
            db.transaction(function (tx) {
                //INSERT DATA INTO DATABASE
                tx.executeSql(insertdata, [], function (tx, results) {
                    $scope.userexist = "";
                    $location.path('app/login');
                }, null)
            });
        };


    })
    .controller('questionsCtrl', function ($scope, $location) {
        $scope.questions = [];
        $scope.answers = {};
        $scope.questionparts = [];
        $scope.nextbutton = true;
        var check = 1;
        var next = 5;
    var decrementnext ;
    var decrementprevious;
    var previous;
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM `QUESTIONS`', [], function (tx, results) {
                for (var j = 0; j < results.rows.length; j++) {
                    $scope.questions.push(results.rows.item(j));
                    if (j <= 4) {
                        $scope.questionparts.push(results.rows.item(j));
                    }

                };
                questionset = $scope.questions;
                console.log($scope.questions);
            }, null);
        });





        //FUNCTION FOR CALLING THE QUESTIONS IN SETS

        $scope.changequestionset = function (status) {
            $scope.previousbutton = true;
            $scope.questionparts = [];
            if (status == 'next') {
                decrementprevious=true;
                //cHANGING QUESTION CORRECTLY ON CLICK OF NEXT BUTTON
                if(!decrementnext){
                    
                    for (next = next; $scope.questionparts.length < 5; next++) {
                        $scope.questionparts.push($scope.questions[next]);
                    };
                }else{
            
                for (next = previous; $scope.questionparts.length < 5; next++) {
                        $scope.questionparts.push($scope.questions[next]);
                    };
                    decrementnext=false;
                };
                check += 1;

            } else if (status == 'previous') {
                console.log(check);
                if(check<3){
                $scope.previousbutton=false;
                };
               decrementnext=true;
                if(!decrementprevious)
                {
                     next = next - 5;
                for (previous = next; $scope.questionparts.length < 5; previous++) {
                    $scope.questionparts.push($scope.questions[previous]);

                };}else{
                 next = next - 10;
                     for (previous = next; $scope.questionparts.length < 5; previous++) {
                    $scope.questionparts.push($scope.questions[previous]);
decrementprevious=false;
                };
                
                };

                check -= 1;
            }
            console.log($scope.questionparts);
            if (check > 9) {
                console.log(check);
                $scope.nextbutton = false;
                $scope.submitbutton = true;
            } else if (check < 10) {
                $scope.nextbutton = true;
                $scope.submitbutton = false;
            };
        };

        $scope.finishquiz = function () {
            answersetforward = $scope.answers;
            $location.path('app/result');

            console.log($scope.answers);
        }
    })

.controller('answersCtrl', function ($scope, $location) {

        $scope.checkanswersquestions = [];
        $scope.checkanswersquestions = questionset;
    })
    .controller('resultCtrl', function ($scope, $location) {
        //COUNTERS
        $scope.right = 0;
        $scope.wrong = 0;
        $scope.notattempted = 0;
        console.log(answersetforward);
        //QUESTION-ANSWER CORRECTION
        for (var i = 0, k = 1; i < questionset.length; k++, i++) {
            if (answersetforward[k]) {
                if (answersetforward[k] == questionset[i].right_answer) {
                    console.log(answersetforward[k]);
                    console.log(questionset[i].right_answer);
                    $scope.right += 1;
                    console.log("right");
                } else {
                    console.log(answersetforward[k]);
                    console.log(questionset[i].right_answer);
                    $scope.wrong += 1;;
                };
            } else {
                $scope.notattempted += 1;
            }

        };

        $scope.rightpercent = 3.6 * Math.round(($scope.right * 100) / 50);
        //TAKING VALUES FROM JSTORAGE FOR RESULT PAGE
        $scope.userdata = $.jStorage.get("user");
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO RECORDS(user_id ,right_answers ,wrong_answers ,not_attempted ,total_question) VALUES(' + $scope.userdata.user_id + ',' + $scope.right + ',' + $scope.wrong + ',' + $scope.notattempted + ',' + questionset.length + ')', [], function (tx, results) {
                console.log("ADDED");
            }, null);
        });



    })
    .controller('recordsCtrl', function ($scope, $location) {
        $scope.userrecords = [];
        $scope.highestscore;
        db.transaction(function (tx) {
            tx.executeSql('SELECT `username`,`right_answers`  ,`not_attempted` ,`total_question` FROM `USERS`,`RECORDS` WHERE `USERS`.`user_id`=`RECORDS`.`user_id` AND `RECORDS`.user_id=' + $.jStorage.get("user").user_id, [], function (tx, results) {
                for (var i = 0; i < results.rows.length; i++) {
                    $scope.userrecords.push(results.rows.item(i));
                };
            }, null)
            tx.executeSql('SELECT `username`,MAX(`right_answers`) as right_answers FROM `USERS`,`RECORDS` WHERE `USERS`.`user_id`=`RECORDS`.`user_id` ', [], function (tx, results) {
                $scope.highestscore = results.rows.item(0);
                console.log($scope.highestscore);
            }, null)


        });









    });