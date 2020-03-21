## launch debug
```
step 1:
$ npm run star:prod

step 2:
到/dist的資料夾下,  直接將要debug的 *.js檔案, 下中斷即可

step 3:
ctrl + shift + d (到偵錯畫面), 點選啟動即可。

```



## Build docker image

```
$ docker build -t "yourName/projectName" . 
```

## Run the container

```
$ docker run -d -p 8081:3001 --name  myapi yourName/project

```


The app will be available at http://localhost:8081
