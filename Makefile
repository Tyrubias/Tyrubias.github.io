DEPS := ./node_modules
LOCAL_BIN := $(DEPS)/.bin
BUILD_DIR := ./docs
DOMAIN := vsong.me
SOURCE := $(shell find ./src -type f -name "*.tsx")

.PHONY: build check clean cleanall deps

build: $(BUILD_DIR)

$(BUILD_DIR): $(DEPS) $(SOURCE)
	$(LOCAL_BIN)/vite build
	touch $(BUILD_DIR)/.nojekyll
	echo $(DOMAIN)  >> $(BUILD_DIR)/CNAME

check: $(LOCAL_BIN) 
	$(LOCAL_BIN)/tsc --noEmit

deps: $(DEPS) 

$(DEPS):
	npm ci

clean:
	-rm -rf $(BUILD_DIR)

cleanall: clean
	-rm -rf $(DEPS) 
