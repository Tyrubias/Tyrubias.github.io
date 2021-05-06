LOCAL_BIN := ./node_modules/.bin
BUILD_DIR := ./docs
DOMAIN := vsong.me
SOURCE := $(shell find ./src -type f -name "*.tsx")

.PHONY: check clean cleanall

docs: node_modules $(SOURCE)
	$(LOCAL_BIN)/vite build
	touch $(BUILD_DIR)/.nojekyll
	echo $(DOMAIN)  >> $(BUILD_DIR)/CNAME

check: node_modules
	$(LOCAL_BIN)/tsc

node_modules:
	npm ci

clean:
	rm -rf $(BUILD_DIR)

cleanall: clean
	rm -rf ./node_modules