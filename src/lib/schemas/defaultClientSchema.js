const { KlasaClient } = require("klasa");

KlasaClient.defaultClientSchema
    .add("changelog", "string", { default: ""})
		