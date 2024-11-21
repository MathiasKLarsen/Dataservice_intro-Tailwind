/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tf8nrvbklgds14")

  collection.options = {
    "query": "SELECT \n  gaming.id, \n  gaming.title,\n  gaming.description,\n  gaming.icon,\n  gaming.url,\n  categories_gaming.id AS categoryID,\n  categories_gaming.title AS categoryTitle,\n  categories_gaming.icon AS categoryIcon\nFROM\n  gaming LEFT JOIN categories_gaming\n  ON \n  gaming.gaming_category = categories_gaming.id"
  }

  // remove
  collection.schema.removeField("qjwt5fpf")

  // remove
  collection.schema.removeField("2oretxgr")

  // remove
  collection.schema.removeField("1xf6zhy1")

  // remove
  collection.schema.removeField("occjwz3r")

  // remove
  collection.schema.removeField("92m6zayd")

  // remove
  collection.schema.removeField("4ulquyyf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uxo42epr",
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
    "id": "7jmfrbl5",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": 500,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tumf2ejb",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qz4ny0w2",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izgipcja",
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
    "id": "pvhfpq6f",
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
    "id": "9zkf6kpq",
    "name": "categoryIcon",
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
    "query": "SELECT \n  gaming.id, \n  gaming.title,\n  gaming.description,\n  gaming.icon,\n  categories_gaming.id AS categoryID,\n  categories_gaming.title AS categoryTitle,\n  categories_gaming.icon AS categoryIcon\nFROM\n  gaming LEFT JOIN categories_gaming\n  ON \n  gaming.gaming_category = categories_gaming.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qjwt5fpf",
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
    "id": "2oretxgr",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": 500,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1xf6zhy1",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "occjwz3r",
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
    "id": "92m6zayd",
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
    "id": "4ulquyyf",
    "name": "categoryIcon",
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

  // remove
  collection.schema.removeField("uxo42epr")

  // remove
  collection.schema.removeField("7jmfrbl5")

  // remove
  collection.schema.removeField("tumf2ejb")

  // remove
  collection.schema.removeField("qz4ny0w2")

  // remove
  collection.schema.removeField("izgipcja")

  // remove
  collection.schema.removeField("pvhfpq6f")

  // remove
  collection.schema.removeField("9zkf6kpq")

  return dao.saveCollection(collection)
})
