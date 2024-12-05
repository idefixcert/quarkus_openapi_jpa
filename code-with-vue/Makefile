generate_api:
	mkdir ../code-with-vue/src/client || true
	mv ../code-with-vue/src/client ../api/client
	docker run --rm -v ${PWD}/../api:/api openapitools/openapi-generator-cli:v7.7.0 generate --skip-validate-spec -i /api/openapi.yaml -g typescript-fetch -o /api/client --type-mappings=set=Array --additional-properties=supportsES6=true,npmVersion=8.19.3,typescriptThreePlus=true
	mv ../api/client ../code-with-vue/src/client
