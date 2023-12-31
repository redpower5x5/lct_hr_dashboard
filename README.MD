# LCT HR dashboard

## О проекте

Добро пожаловать в репозиторий `lct-hr-dashboard`, разработанный командой MISIS_BORISKINAI для хакатона LCT. Этот проект представляет собой приложение для HR-аналитики на основе email писем сотрудников, реализованное с помощью технологий Docker, Python (backend) и React (frontend).

### Структура проекта

- `/back`: Папка с бэкендом на Python.
- `/front`: Папка с фронтендом на React.
- `/samples`: Примеры файлов, которые пользователи могут загружать в сервис.

## Технология обработки писем

Так как датасета не было, мы его сгенерировали при помощи нейросетей. Для этого мы использовали ChatGPT-4 + вручную правили и добавляли данные. В итоге, у нас получился датасет, состоящий из 1000+ переписокс 100 пользователями, которые мы использовали для обучения модели. Далее, мы написали обработчик датасета, который выдавал уже готовые метрики для каждого пользователя. Подробнее о том, какие метрики и как происходила обработка, вы можете узнать вв Тех. документации + доступен jupyter notebook с обработкой в корне проекта.

## Начало работы

### Предварительные требования

Для работы с проектом у вас должен быть установлен Docker.

### Настройка окружения

Перед запуском проекта необходимо создать файл `.env`, используя в качестве шаблона файл `.env.example`.

### Запуск с помощью Docker Compose

Для запуска приложения выполните следующие шаги:

1. Склонируйте репозиторий:
   ```
   git clone https://github.com/redpower5x5/lct_hr_dashboard.git
   ```
2. Перейдите в директорию проекта:
   ```
   cd lct_hr_dashboard
   ```
3. Запустите приложение с помощью Docker Compose:
   ```
   docker compose up
   ```

После выполнения этих шагов приложение должно быть доступно для использования.
