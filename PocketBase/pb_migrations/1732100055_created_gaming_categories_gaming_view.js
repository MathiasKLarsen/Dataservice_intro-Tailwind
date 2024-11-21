/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0tf8nrvbklgds14",
    "created": "2024-11-20 10:54:15.590Z",
    "updated": "2024-11-20 10:54:15.590Z",
    "name": "gaming_categories_gaming_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gihi1ehx",
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
        "id": "r1ezrqki",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT \n  gaming.id, \n  gaming.title,\n  gaming.description\n  \nFROM\n  gaming LEFT JOIN categories_gaming\n  ON \n  gaming.gaming_category = categories_gaming.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0tf8nrvbklgds14");

  return dao.deleteCollection(collection);
})
