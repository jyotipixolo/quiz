var answersetforward = [];
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
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM `QUESTIONS`', [], function (tx, results) {
                for (var j = 0; j < results.rows.length; j++) {
                    $scope.questions.push(results.rows.item(j));
                };
                questionset = $scope.questions;
                console.log($scope.questions);
            }, null);
        });

        $scope.finishquiz = function () {
            answersetforward = $scope.answers;
            $location.path('app/result');

            console.log($scope.answers);
        }
    })

.controller('answersCtrl', function ($scope, $location) {})
    .controller('resultCtrl', function ($scope, $location) {
        //COUNTERS
        $scope.right = 0;
        $scope.wrong = 0;
        $scope.notattempted = 0;

        //QUESTION-ANSWER CORRECTION
        for (var i = 0; i < questionset.length; i++) {
            if (answersetforward[i]) {
                if (answersetforward[i] == questionset[i].right_answer) {
                    $scope.right += 1;
                } else {
                    $scope.wrong += 1;;
                };
            } else {
                $scope.notattempted += 1;
            }
        };
    
console.log($scope.right);
console.log($scope.wrong);
console.log( $scope.notattempted);



 })
    .controller('recordsCtrl', function ($scope, $location) {});