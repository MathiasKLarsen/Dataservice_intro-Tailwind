/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jzza1me4omfn1fr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f1zsaqvi",
    "name": "url",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jzza1me4omfn1fr")

  // remove
  collection.schema.removeField("f1zsaqvi")

  return dao.saveCollection(collection)
})
