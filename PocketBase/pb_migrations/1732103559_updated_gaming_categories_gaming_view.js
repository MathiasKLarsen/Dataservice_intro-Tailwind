/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tf8nrvbklgds14")

  collection.options = {
    "query": "SELECT \n  gaming.id, \n  gaming.title,\n  gaming.description,\n  gaming.icon,\n  categories_gaming.id AS categoryID,\n  categories_gaming.title AS categoryTitle,\n  categories_gaming.icon AS categoryIcon\nFROM\n  gaming LEFT JOIN categories_gaming\n  ON \n  gaming.gaming_category = categories_gaming.id"
  }

  // remove
  collection.schema.removeField("aqpiggwd")

  // remove
  collection.schema.removeField("v6rjycwg")

  // remove
  collection.schema.removeField("yipthbuy")

  // remove
  collection.schema.removeField("zh4wre0p")

  // remove
  collection.schema.removeField("fzv5p4mj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vimrkcak",
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
    "id": "sgaeqlda",
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
    "id": "uvv8khfw",
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
    "id": "belfgzfj",
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
    "id": "tajqgzez",
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
    "id": "1yhd9fie",
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
    "query": "SELECT \n  gaming.id, \n  gaming.title,\n  gaming.description,\n  categories_gaming.id AS categoryID,\n  categories_gaming.title AS categoryTitle,\n  categories_gaming.icon\nFROM\n  gaming LEFT JOIN categories_gaming\n  ON \n  gaming.gaming_category = categories_gaming.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqpiggwd",
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
    "id": "v6rjycwg",
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
    "id": "yipthbuy",
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
    "id": "zh4wre0p",
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
    "id": "fzv5p4mj",
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

  // remove
  collection.schema.removeField("vimrkcak")

  // remove
  collection.schema.removeField("sgaeqlda")

  // remove
  collection.schema.removeField("uvv8khfw")

  // remove
  collection.schema.removeField("belfgzfj")

  // remove
  collection.schema.removeField("tajqgzez")

  // remove
  collection.schema.removeField("1yhd9fie")

  return dao.saveCollection(collection)
})
