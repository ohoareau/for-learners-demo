all: install

install: install-root install-app install-api

install-root:
	@yarn --silent install

install-app:
	@cd app && yarn --silent install

install-api:
	@cd api && yarn --silent install

start:
	@yarn concurrently -n "api,app" "make start-api" "make start-app"

start-api:
	@cd api && yarn start

start-app:
	@cd app && yarn start
