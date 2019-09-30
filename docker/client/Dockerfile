#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

FROM node:latest

RUN npm install -g @vue/cli
#RUN npm install --save vega-embed

WORKDIR /home/node/app
COPY package.json /home/node/app
RUN npm install