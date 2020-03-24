# todo
###0.CD todo
```bash
cd todo
```
###1. Copy env (update if needed). 
```bash
cp .env.example .env
```
###2. Install dependencies
```bash
npm install
```

###3. Run docker with db
```bash
cp docker-compose.example.yml docker-compose.yml

docker-compose up -d
```

###4. Run server
```bash
npm run start-dev
```


