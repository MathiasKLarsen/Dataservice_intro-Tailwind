/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jzza1me4omfn1fr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0tjx7pfg",
    "name": "gaming_category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3z92ywg2zrazi2e",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jzza1me4omfn1fr")

  // remove
  collection.schema.removeField("0tjx7pfg")

  return dao.saveCollection(collection)
})
