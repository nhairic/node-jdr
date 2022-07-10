EXEC_IT=docker exec -it --user node jdr_node
EXEC=docker exec -t --user node jdr_node

.DEFAULT_GOAL := help
.PHONY: bash start build down stop restart build install compile compile-force compile-dev lint lint-fix tests run

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

start: ## Start the project in a Docker container
	docker-compose up -d
	make install
little-start: ## Start the project in a Docker container
	docker-compose up -d

bash: ## Login to the Docker container
	$(EXEC_IT) bash || true

stop: ## Stop Docker container
	docker-compose down

restart: ## Restart Docker container
	make stop
	make start

build: ## Build the project
	docker-compose up -d --build

install: ## Install project dependecies
	$(EXEC) npm install --also=dev
	#$(EXEC) npm run postinstall
	make compile

compile: ## Compile project once
	$(EXEC) npm run compile

compile-force: ## Force recompilation
	$(EXEC) rm -rf dist
	$(EXEC) npm run compile

compile-dev: ## Compile project and watch for changes
	$(EXEC_IT) npm run compile-dev

lint: ## Lint code
	$(EXEC) npm run lint

lint-fix: ## Fix lint errors
	$(EXEC) npm run lint-fix

tests: ## Run tests and coverage
	$(EXEC) npm run test
	$(EXEC) npm run coverage

run: ## Run the project
	$(EXEC) node dev.js