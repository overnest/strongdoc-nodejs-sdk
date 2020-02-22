ifeq ($(strip $(shell git status --porcelain 2>/dev/null)),)
  GIT_TREE_STATE=clean
else
  GIT_TREE_STATE=dirty
endif

COMMIT ?= $(shell git rev-parse HEAD)
BRANCH ?= $(shell git rev-parse --abbrev-ref HEAD)

MKFILE_PATH ?= $(abspath $(lastword $(MAKEFILE_LIST)))
CUR_DIR ?= $(patsubst %/,%,$(dir $(MKFILE_PATH)))

.PHONY: pubpatch
pubpatch:
	@echo "==> Publishing patched version"
	@./node_modules/.bin/np --no-release-draft patch

.PHONY: pubminor
pubminor:
	@echo "==> Publishing minor version"
	@./node_modules/.bin/np --no-release-draft minor

.PHONY: pubmajor
pubmajor:
	@echo "==> Publishing major version"
	@./node_modules/.bin/np --no-release-draft major

.PHONY: clean
clean:
	@echo "==> Cleaning Repo"
	@rm -rf ./jsdoc

.PHONY: jsdoc
jsdoc:
	@echo "==> Generating JsDoc"
	@rm -rf ./jsdoc
	@./node_modules/.bin/jsdoc -d ./jsdoc ./client/strongDoc.js ./api/*
