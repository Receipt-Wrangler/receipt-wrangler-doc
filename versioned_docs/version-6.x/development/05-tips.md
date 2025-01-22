# Tips
This section details some tips on common development tasks/setup.

## API

1\. Developers may switch easily between sqlite, postgresql, and mariadb environment variables by using the scripts in /receipt-wrangler/api/dev. Use
```bash
source /receipt-wrangler-api/dev/switch-to-sqlite.sh
```
to set the environment variables up to use sqlite.  
2\. If easyocr is not working, run 
```bash
source /app/receipt-wrangler-api/wranglervenv/bin/activate
```
to activate wranglervenv which includes easyocr.  
3\. To generate a client for desktop, please run the following command from the root of the API repository:
```bash
npx @openapitools/openapi-generator-cli generate -i swagger.yml -g typescript-angular -o /app/receipt-wrangler-desktop/src/open-api
```


