# Dockerfile from: https://blog.codeexpertslearning.com.br/dockerizando-uma-aplica%C3%A7%C3%A3o-react-js-f6a22e93bc5d
FROM node:13-alpine
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install

# COPY ./src /app/src
# EXPOSE 3000
RUN npm install react-scripts@3.3.1 -g

# ENTRYPOINT [ "npm"]
CMD ["npm", "start"]

# Build with: docker build -t sample:dev .
# Run container with: docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev
# See app on: http://localhost:3001/
