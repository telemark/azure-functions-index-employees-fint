# azure-functions-index-employees-fint

Azure functions for indexing employees from FINT then add to queue.

## local.settings.json

```json
{
  "isEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNTIONS_WORKER_RUNTIME": "node",
    "FINT_AUTH_URL": "",
    "FINT_CLIENT_ID": "",
    "FINT_CLIENT_SECRET": "",
    "FINT_AUTH_USERNAME": "",
    "FINT_AUTH_PASSWORD": ""
  }
}
```

# License

[MIT](LICENSE)
