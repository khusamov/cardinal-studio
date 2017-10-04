# Cardinal RAD Studio

Среда быстрой (RAD) разработки веб-приложений на основе 
Node.js, PostgreSQL и Sencha ExtJS.

Сборка: Предварительные действия
------------------------

Для сборки приложения, следует установить:

1. [Node.js версии 6.х.х][nodejs].
2. [Sencha Cmd 6.5.2 for Windows 64-bit][senchacmd].

Сборка: Установка Sencha Cmd
---------------------

Sencha Cmd следует устанавливать так, чтобы в пути не было русских букв 
(например пользователь Windows). 

Также в `C:\Program Files` нельзя ставить Sencha Cmd, так как потом возникают странные проблемы,
связанные с тем, что у папки `C:\Program Files` административные права доступа.

При установке путь установки `C:\Users\<username>\bin\Sencha\Cmd\6.5.2.15` 
следует поменять на `C:\SenchaCmd\6.5.2.15`. Это следует сделать в том случае, 
если у вас `<username>` содержит русские буквы.

После установки пропишите в `PATH` путь к Sencha Cmd: `C:\SenchaCmd`.

Сборка: Скачивание репозитория и фреймворка
-------------------------------------------

Скачайте [архив данного репозитория][cardinalstudio] и распакуйте его 
в любое место на вашем диске (но так, чтобы в пути не было русских букв).
Например `C:\repositories\cardinal-studio` (далее по тексту используется этот путь).

Скачайте [дистрибутив Sencha ExtJS 6.2.0][senchaextjs] и распакуйте его 
в директорию `client/ext`.

Сборка
-------

После этого из директории репозитория `C:\repositories\cardinal-studio`
выполните две команды (установить среду и запустить сборщик):

```
npm i
node node_modules/gulp/bin/gulp
```

> Внимание, эти и последущие команды запускаются из директории скачанного репозитория
`C:\repositories\cardinal-studio`.

После этого, в директории `dist` будет собрана готовая программа.

Запуск
------

Приложение можно сразу запустить командой:

```
node dist
```

После этого приложение можно посмотреть по адресу:

http://localhost:3000/

Чтобы остановить приложение, следует нажать `Ctrl+C` либо закрыть командную строку.


Копирование и запуск из другого места
-------------------------------------

Далее, если разработка вам не нужна, то содержимое каталога `dist` можно скопировать 
куда угодно и запускать с нового места.
Но при этом следует принять во внимание, что общий способ запуска выглядит следующим образом:

```
node <имя директории с программой>
```

Или если запускать из той же директории, где находится программа, то команда будет выглядеть следующим образом:

```
node .
```


Создание дистрибутива
---------------------

После сборки приложения в директории `dist` будет находится готовая к распространению программа.

Итого, в дистрибутив должно войти:

1. `Node.js` (например файл `https://nodejs.org/dist/v6.11.4/node-v6.11.4-x64.msi`).
2. Директория `dist`.

Инсталятор должен выполнить следующие действия:

1. Установить `Node.js`.
2. Скопировать содержимое директории `dist` в директорию `C:\Program Files\Cardinal Studio`.
3. Создать ярлык `Cardinal Studio` в меню Пуск со следующими атрибутами:  
   Объект `node C:\Program Files\Cardinal Studio`,  
   Рабочая папка `C:\Users\<username>\AppData\Local\Cardinal Studio`.  

> Рабочая папка должна быть полностью вычисляемой кроме названия программы,
например `<AppData>\Cardinal Studio`. Это должно быть сделано средствами сборщика инсталятора.

> Важно, установка рабочей папки подразумевает, что при запуске программу она будет текущей папкой.
Именно в текущей папке программа будет хранить свои настройки, которые привязаны к пользователю. 



[nodejs]: https://nodejs.org/
[senchacmd]: https://www.sencha.com/products/extjs/cmd-download/
[cardinalstudio]: https://github.com/khusamov/cardinal-studio/archive/master.zip
[senchaextjs]: https://github.com/khusamov/sencha-extjs/releases
