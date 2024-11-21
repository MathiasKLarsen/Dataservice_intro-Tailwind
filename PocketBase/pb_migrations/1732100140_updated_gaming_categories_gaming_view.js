/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tf8nrvbklgds14")

  collection.options = {
    "query": "SELECT \n  gaming.id, \n  gaming.title,\n  gaming.description,\n  categories_gaming.id AS categoryID,\n  categories_gaming.title AS categoryTitle,\n  categories_gaming.icon\nFROM\n  gaming LEFT JOIN categories_gaming\n  ON \n  gaming.gaming_category = categories_gaming.id"
  }

  // remove
  collection.schema.removeField("gihi1ehx")

  // remove
  collection.schema.removeField("r1ezrqki")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3naidcje",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "plt1tewa",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pb5itwnr",
    "name": "categoryID",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "huvw2vhp",
    "name": "categoryTitle",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 20,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f3dl6z3e",
    "name": "icon",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tf8nrvbklgds14")

  collection.options = {
    "query": "SELECT \n  gaming.id, \n  gaming.title,\n  gaming.description\n  \nFROM\n  gaming LEFT JOIN categories_gaming\n  ON \n  gaming.gaming_category = categories_gaming.id"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("3naidcje")

  // remove
  collection.schema.removeField("plt1tewa")

  // remove
  collection.schema.removeField("pb5itwnr")

  // remove
  collection.schema.removeField("huvw2vhp")

  // remove
  collection.schema.removeField("f3dl6z3e")

  return dao.saveCollection(collection)
})
