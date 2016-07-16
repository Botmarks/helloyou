FROM mhart/alpine-node

RUN mkdir -p /usr/botmarks/helloyou
WORKDIR /usr/botmarks/helloyou

COPY . /usr/botmarks/helloyou
RUN npm install

EXPOSE 13300
CMD [ "node", "index.js" ]