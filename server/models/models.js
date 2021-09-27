const sequelize = require('../db');
const {DataTypes} = require('sequelize');


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
});

const Result = sequelize.define('result', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // user_id: {type: DataTypes.INTEGER, unique: true},
    test_name: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.STRING, allowNull: false},
    elapsed_time: {type: DataTypes.INTEGER, allowNull: false},
    mark: {type: DataTypes.INTEGER, allowNull: false},
});

const Test = sequelize.define('test', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Question = sequelize.define('question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // test_id: {type: DataTypes.INTEGER, unique: true},
    type: {type: DataTypes.STRING, allowNull: false},
    question: {type: DataTypes.STRING, unique: true, allowNull: false},
    testId: {type: DataTypes.INTEGER, allowNull: false},
});

const Answer = sequelize.define('answer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // question_id: {type: DataTypes.INTEGER, unique: true},
    answer: {type: DataTypes.STRING, allowNull: false},
});

const True_answer = sequelize.define('true_answer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // test_id: {type: DataTypes.INTEGER, unique: true},
    valid_answers: {type: DataTypes.STRING, allowNull: false},
});

const Valid_Answer = sequelize.define('valid_answer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // question_id: {type: DataTypes.INTEGER},
    true_answer: {type: DataTypes.STRING, allowNull: false},
});

// связующая промежуточная таблица
const QuestionToTest = sequelize.define('question_to_test', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});


User.hasMany(Result);
Result.belongsTo(User);

Test.hasMany(Question, {as: 'ques'});
Test.hasOne(True_answer);
Question.belongsToMany(Test, {through: QuestionToTest});
True_answer.belongsTo(Test);

Question.hasOne(Valid_Answer);
Valid_Answer.belongsTo(Question);

Question.hasMany(Answer, {as: 'ans'});
Answer.belongsTo(Question);


// экспортирую созданные модели по бд
module.exports = {
    User, Result, Test, Question, Answer, True_answer, QuestionToTest
};