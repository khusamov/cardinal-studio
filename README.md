# cardinal-studio

Cardinal RAD Studio это среда быстрой (RAD) разработки
веб-приложений на основе Node.js, PostgreSQL и Sencha ExtJS.


Сборка
------

Для сборки приложения, следует установить
1. Node.js версии 6.х.х с сайта `https://nodejs.org/`.
2. Sencha Cmd с сайта `https://www.sencha.com/products/extjs/cmd-download/`.

Далее следует скачать репозиторий к себе на диск и в его директории 
подать три команды (установить среду и запустить сборщик):

```
npm i
gulp
```

> Внимание, эти и последущие команды запускаются из директории скачанного репозитория.

После этого, в директории `dist` будет собрана готовая программа.

Запуск
------

Ее можно сразу запустить командой:


```
node dist
```

После этого приложение можно посмотреть по адресу:

http://localhost:3000/

Чтобы остановить приложение, следует нажать `Ctrl+C` либо закрыть командную строку.

Копирование приложения в другое место
-------------------------------------

Далее, если разработка вам не нужна, то содержимое каталога `dist` можно скопировать куда угодно и запускать с нового места.
Но при этом следует принять во внимание, что общий способ запуска выглядит следующим образом:

```
node <имя директории с программой>
```

Или если запускать из той же директории, где находится программа, то команда будет выглядеть следующим образом:

```
node .
```