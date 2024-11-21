/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3z92ywg2zrazi2e",
    "created": "2024-11-20 10:31:40.081Z",
    "updated": "2024-11-20 10:31:40.081Z",
    "name": "categories_gaming",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uplpssb4",
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
        "id": "zzs7shma",
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
        "id": "xkhzxkhk",
        "name": "field",
        "type": "file",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("3z92ywg2zrazi2e");

  return dao.deleteCollection(collection);
})
