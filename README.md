# word_app

# 環境構築(git clone後)
```
docker-compose build
docker-compose run app rails db:create
docker-compose run app rails db:migrate
```

# サーバー起動
```
docker-compose up -d
docker-compose up -d
# これで localhost:3000 でNextサーバー、localhost:8000でRailsAPIサーバーにアクセスできる。
```

# サーバー停止
```
docker-compose stop
```

# bundle install
```
# サーバー起動状態で
docker-compose exec backend bundle install
```

# npm install
```
# サーバー起動状態で
docker-compose exec frontend npm install
```
