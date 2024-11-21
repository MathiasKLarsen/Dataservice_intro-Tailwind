/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jzza1me4omfn1fr",
    "created": "2024-11-20 10:04:51.372Z",
    "updated": "2024-11-20 10:04:51.372Z",
    "name": "gaming",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ezzayxew",
        "name": "title",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "prcft0jm",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 10,
          "max": 150,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cyaydjw3",
        "name": "icon",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 50000,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jzza1me4omfn1fr");

  return dao.deleteCollection(collection);
})
