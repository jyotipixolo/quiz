//DATA BASE VARIABLE
var db = openDatabase('GK', '1.0', 'GK DB', 2 * 1024 * 1024);
db.transaction(function (tx) {});
// CREATING TABLES
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS QUESTIONS(que_id Integer PRIMARY KEY,questions varchar,option_a varchar,option_b varchar,option_c varchar,option_d varchar,right_answer varchar)')
        //tx.executeSql('DROP TABLE QUESTIONS');
});
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS USERS(user_id Integer PRIMARY KEY,username varchar,gender varchar,emailid varchar,password varchar,secret_que varchar,answer varchar)')
        //tx.executeSql('DROP TABLE USERS');
});
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS SECRET_QUE(que_id Integer PRIMARY KEY,questions varchar)')
        //tx.executeSql('DROP TABLE SECRET_QUE');
});
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS RECORDS(user_id Integer,right_answers integer,wrong_answers integer,not_attempted integer,total_question integer)')
        //tx.executeSql('DROP TABLE RECORDS');
});

// INSERTING RECORDS IN SECRET_QUE TABLE
db.transaction(function (tx) {
    tx.executeSql('insert into SECRET_QUE values(1,"Which is your favourite movie")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into SECRET_QUE values(2,"Which is your favourite sports")');
});

db.transaction(function (tx) {
    tx.executeSql('insert into SECRET_QUE values(3,"Which is your favourite software")');
});

db.transaction(function (tx) {
    tx.executeSql('insert into SECRET_QUE values(4,"Where you want to go for holiday")');
});

db.transaction(function (tx) {
    tx.executeSql('insert into SECRET_QUE values(5,"What is your favourite dish")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(1,"India’s first exclusive hospital for elephant will come up in which state? ","Tamil Nadu", "Karnataka", "Kerala" ," Andhra Pradesh", "Kerala" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(2," What was India’s rank in the medal tally at the 21st Asian Athletics Championship?","Fourth ", "Fifth ", "Third", "Second ", "Third")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(3,"Which of the following two states of India have bus connectivity with Bangladesh currently (June 2015)? ","Tripura and Manipur","West Bengal and Assam", "Tripura and West Bengal", "Odisha and West Bengal ","Tripura and West Bengal")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(4,"Which movie has won the top honors at 16th International India Film Academy awards?", "PK", "2 States", "Queen" ,"Mary Kom ","Queen")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(5,"Lipulekh is a Himalayan pass between India and which two countries?", "Nepal and Bhutan","Bhutan and China", "China and Nepal", "Pakistan and China"," China and Nepal ")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(6," As per World Bank, which country has highest investment commitment in 2014?", "India", "Peru", "Brazil", "Turkey","Brazil")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(7,"Dasaradhi Rangacharya, who passed away recently, was a famous writer of which language?", "Malayalam", "Kannada","Telugu", "Marathi", "Telugu" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(8,"Which space body has won the 2015 space pioneer award for science and engineering?", "NASA", "ISRO", "ESA", "RSA","ISRO" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(9,"Who is the chairman of the Council of Scientific and Industrial Research (CSIR)?", "President of India", "Vice-President of India ","Prime Minister", "Minister of Science & Technology","Prime Minister" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(10,"Which country is the “Country of honour” at China’s South Asia Expo June 2016?", "India", "Pakistan", "Taiwan", "Sri Lanka","India" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(11, "The ONE Campaign is a non profit organisation that fights extreme poverty particularly in which region?", "Asia", "South America", "Africa", "Europe","Africa" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(12,"Who has won the Baileys Women’s Prize for Fiction 2015?", "Ali Smith", "Rachel Cusk", "Anne Tyler","Sarah Waters","Ali Smith" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(13,"Which of the following has been named World’s most valuable football brand?", "Manchester United", "Bayern Munich", "Manchester City", "F C Barcelona","Manchester United" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(14,"Who has been named India’s special envoy for counter-terrorism and extremism?", "Ravicharan Reddy", "Syed Asif Ibrahim", "Mohamud Ashim Khan", "Bhakta Srivatsav","Syed Asif Ibrahim" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(15, "Which country providing technology to develop coastal road project in Maharashtra?", "Netherland", "Japan", "China", "Australia ","Netherland" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(16,"The 25th African Union Summit is scheduled to be held in which country?", "Nigeria", "Ghana", "South Africa", "Kenya ","South Africa" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(17,"From which country Delhi Metro has received its first driver less train?","Japan","Russia", "South Korea","China" ,"South Korea")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(18,"Who is the current Central Vigilance Commissioner (CVC) of India (June 2015)?", "K V Chowdary", "Vijay Sharma", "Sunil Chandra", "Gautham Karnik","K V Chowdary" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(19,"Which country has registered top source of foreign direct investment (FDI) into India in 2014-15?", "Singapore", "Mauritius", "Japan", "Netherland ","Mauritius" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(20,"Who has been appointed as India Under-19 and A teams cricket coach?", "Rahul Dravid", "Saurav Ganguly", "Sachin Tendulkar", "Robin Singh ","Rahul Dravid" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(21,	"The Delhi-Mumbai Economic corridor (DMIC) project covers how many states?", "Four", "Six", "Five", "Seven ","Six" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(22," Who has been conferred with the Asian Athletics Association President Award?", "Suresh Kalmadi", "Lalith Soori", "Ramachandran", "Sharad Pawar ","Suresh Kalmadi" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(23,"Which among the following is the theme of World Environment Day-2015?", "Give Earth a Chance", "Our Earth, Our Habitat, Our Home", "Seven Billion Dreams, One Planet, Consume with Care", "Forests: Nature at your Service ","Seven Billion Dreams, One Planet, Consume with Care")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(24,"Government of India has launched Modified Special Incentive Proposal Scheme (M-SIPS) for which of the following sectors?", "Textile sector", "Electronic sector", "Automobile sector", "Agriculture sector ","Electronic sector" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(25,"Which is the most common chemical used in cloud seeding?", "Potassium bromide", "Silver iodide", "Potassium chloride", "Magnesium iodide ","Silver iodide" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(26,"Panama disease is a destructive fungal disease of which crop?", "Wheat", "Banana", "Tomato", "Mango ","Banana" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(27,"The Jamdani style is the famous traditional sari of which country?", "Sri Lanka", "India", "Bangladesh", "Nepal", "Bangladesh")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(28,"As on June 2015, which is the leading state in the country in terms of solar installed capacity?", "Gujarat", "Rajasthan", "Tamil Nadu", "Madhya Pradesh ","Rajasthan" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(29,"In which state, India’s first eco-friendly police station was commissioned, recently?","Goa", "Kerala", "New Delhi","Assam ","New Delhi" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(30,"Which team has won the 2015 UEFA Champion League title?", "F C Barcelona", "Real Madrid", "Liverpool", "Juventus ","F C Barcelona" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(31,"There are the only four countries in the world which carry more than a billion tonnes of freight on their railway networks annually. Which of the following is not one of that?", "India", "China", "Japan", "Russia","Japan")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(32,"Madaraka Day is a national holiday in which among the following African countries?", "Tanzania", "Kenya", "South Africa", "Namibia ","Kenya")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(33,"As per latest FIFA ranking (June, 2015), which is the top ranked Asian team?", "Japan", "Iran", "South Korea", "China", "Iran")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(34,"At which SAARC Summit, agreement for the establishment of the South Asian University was signed?", "13th Summit", "14th Summit", "15th Summit", "16th Summit ","14th Summit" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(35,"Which state is the largest producer of e-waste in India?", "Maharashtra", "Karnataka", "Tamil Nadu", "Andhra Pradesh ","Maharashtra" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(36,"Which country has highest median age in the world?", "Japan", "Monaco", "Sweden", "Italy","Monaco" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(37,"Karcham Wangtoo power project is located in which state?", "Uttarkhand", "Himachal Pradesh", "Bihar", "Jharkhand ","Himachal Pradesh" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(38,"Which is the most populous city in North America?", "New York", "Mexico", "Toronto", "Chicago","Mexico" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(39,"Who has recently become the second Indian to be inducted in the International Cricket Council’s (ICC) Elite Panel of Umpires?", "S K Sharma ","Sundaram Ravi", "Satish Gupta", "Anil Chaudhary ","Sundaram Ravi" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(40,"Which one of the following is not a tributary of Godavari River?", "Wainganga", "Manjira", "Malaprabha", "Wardha ","Malaprabha" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(41,"Which country generates highest per capita e-waste?", "Singapore", "Norway", "Iceland", "Denmark", "Norway" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(42,"Which of the following is Indian navy’s biggest guided missile destroyer?", "INS Visakhapatnam", "INS Paradip", "INS Marmagoa", "INS Kolkata ","INS Visakhapatnam")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(43,"Who among the following has won the 2015 Bahrain Grand Prix?", "Lewis Hamilton", "Kimi Raikkonen", "Nico Rosberg", "Valtteri Bottas", "Lewis Hamilton" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(44,"Which is the highest e-waste generating country in Asia?" ,"India", "Japan", "China", "North Korea", "China" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(45," Karot hydroelectric project is located in which country?", "Pakistan", "Bhutan", "Bangladesh" ,"Nepal ","Pakistan" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(46,"E-Samiksha is an online project monitoring system launched by ____? ","Indian Railways", "NHAI", "RBI", "FIPB", "Indian Railways" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(47, "In which country a boycott Andaman and Nicobar Island campaign was launched?" ,"India ","Britain","Switzerland" ,"Russia ","Britain")');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(48,"The NTCA has recently declared which two national parks as tiger reserves?", "Kudremukh and Rajaji", "Ratapani and Sunabeda", "Guru Ghasidas and Rajaji", "Rajaji and Sunabeda ","Kudremukh and Rajaji" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(49,"India is implementing “Capacity Building for Industrial Pollution Management (CBIPM)” project with the support of __? ","Asian Development Bank" ,"Japan Central Bank" ,"World Bank" ,"Reserve Bank of India ","World Bank" )');
});
db.transaction(function (tx) {
    tx.executeSql('insert into QUESTIONS values(50,"The campaign Call to Action for TB free India aims to make country Tuberculosis free in how many years?" ,"Three", "Five", "Eight" ,"Ten ","Five")');
});




var mydatabase = angular.module('database', ['controllers']);