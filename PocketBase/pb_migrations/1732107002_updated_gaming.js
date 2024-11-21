/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jzza1me4omfn1fr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "prcft0jm",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": 250,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jzza1me4omfn1fr")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
