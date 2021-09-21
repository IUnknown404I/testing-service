require('dotenv').config();
const express = require('express');
// связь с бд
const sequelize = require('./db');
// модели сущностей
const models = require('./models/models');
// корс для запросов с браузера
const cors = require('cors');
// импортирую внутренние роуты
const router = require('./routes/index');
// регистрирую созданный мидлвейер
// т.к. он регистрирует ошибки, то идёт в самом конце
const errorHandler = require('./middleware/ErrorHandlingMiddleware');


// считываю порт
const PORT = process.env.PORT || 5050;
// создаю объект приложения приложение
const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', router);

//привязываем мидлвейер с ошибками
app.use(errorHandler);

// запускаю сиквалайз для связки с постгрес и вешаю прослушку порта
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

    } catch (e) {
        console.log(e)
    }
};
start();