/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g815ojqt37jj6je")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mhrtim29",
    "name": "done",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g815ojqt37jj6je")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mhrtim29",
    "name": "field",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
