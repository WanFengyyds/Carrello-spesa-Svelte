FROM node:20 as builder
WORKDIR /home/sveltekit-app

COPY . .

RUN npm install

RUN npm run build


FROM node:20 as express_server
WORKDIR /home/app

COPY --from=builder /home/sveltekit-app/build /home/app/build

COPY --from=builder /home/sveltekit-app/server.js /home/app/server.js
COPY --from=builder /home/sveltekit-app/package.json /home/app/package.json
COPY --from=builder /home/sveltekit-app/data /home/app/data

RUN npm install express 

EXPOSE 5173

CMD [ "node","server.js" ]