/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g815ojqt37jj6je")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eajjs8nk",
    "name": "category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p91nqmc89awnhr9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g815ojqt37jj6je")

  // remove
  collection.schema.removeField("eajjs8nk")

  return dao.saveCollection(collection)
})
