const menuDB = {
  doener: [
    {num:"1",name:"Döner vegetarisch",desc:"mit Salat, Gurken, Tomaten, Zwiebeln, Kraut, Käse",price:"6,00 €"},
    {num:"2",name:"Döner im Fladenbrot mit Salat",desc:"Zwiebeln, Tomaten, Gurken, Kraut und Soße",price:"6,50 €"},
    {num:"3",name:"Döner im Fladenbrot mit Käse",desc:"mit Salat, Zwiebeln, Tomaten, Gurken, Kraut, Käse und Soße",price:"7,50 €"},
    {num:"4",name:"Big Döner",desc:"mit EXTRA Fleisch",price:"8,00 €"},
    {num:"4a",name:"Dönerbox mit Salat",desc:"mit Soße und Salat",price:"7,00 €"},
    {num:"4b",name:"Dönerbox mit Pommes",desc:"mit Soße und Pommes",price:"8,00 €"},
    {num:"5",name:"Döner Teller",desc:"mit Salat und Soße",price:"9,50 €"},
    {num:"6",name:"Döner Teller",desc:"mit Salat, Pommes und Soße",price:"10,50 €"},
    {num:"7",name:"Döner Teller mit Käse",desc:"Salat, Pommes und Soße",price:"11,00 €"},
    {num:"8",name:"Döner überbacken",desc:"Gyros mit Käse überbacken, Fladenbrot",price:"10,50 €"},
    {num:"8A",name:"Hawaiidönerteller",desc:"Schinken, Ananas, Sahnesoße, überbacken",price:"11,50 €"},
    {num:"9",name:"Dönerteller mit Nudeln",desc:"Dönerfleisch, Nudeln und Salat",price:"11,00 €"},
    {num:"9B",name:"Chicken Nuggets 9 Stück",desc:"mit Pommes und Salat",price:"9,50 €"},
    {num:"10",name:"Dönerrolle",desc:"mit Dönerfleisch, Salat, Zwiebeln, Tomaten, Gurken, Kraut, Soße",price:"7,50 €"},
    {num:"11",name:"Dönerrolle mit Käse",desc:"mit Dönerfleisch, Käse, Salat, Zwiebeln, Tomaten, Gurken, Kraut, Soße",price:"8,50 €"},
    {num:"12",name:"Lahmacun (gerollte Pizza)",desc:"mit Salat, Zwiebeln, Tomaten, Gurken, Kraut, Soße",price:"6,50 €"},
    {num:"13",name:"Lahmacun mit Käse",desc:"mit Salat und Käse",price:"7,00 €"},
    {num:"14",name:"Lahmacun mit Döner",desc:"mit Salat und Dönerfleisch",price:"8,50 €"}
  ],
  salate: [
    {num:"15",name:"Gemischter Salat",desc:"Kopfsalat, Zwiebeln, Tomaten, Gurken",prices:{k:"5,50 €",g:"6,00 €"}},
    {num:"16",name:"Thunfischsalat",desc:"gemischter Salat mit Thunfisch",prices:{k:"6,50 €",g:"8,00 €"}},
    {num:"17",name:"Hirtensalat",desc:"gemischter Salat, Käse",prices:{k:"6,00 €",g:"7,50 €"}},
    {num:"18",name:"Romana-Salat",desc:"gemischter Salat, Käse, Knoblauch, Thunfisch, Meeresfrüchte",prices:{k:"7,50 €",g:"8,50 €"}},
    {num:"19",name:"Hawaii-Salat",desc:"gemischter Salat, Schinken, Käse, Ananas",prices:{k:"6,00 €",g:"8,00 €"}},
    {num:"20",name:"Italia-Salat",desc:"gemischter Salat, Käse, Schinken, Thunfisch, Ei",prices:{k:"7,00 €",g:"8,50 €"}},
    {num:"21",name:"MED-Salat",desc:"Kopfsalat, Tomaten, Gurken, Zwiebeln, Käse, Dönerfleisch, Soße",prices:{k:"7,50 €",g:"9,00 €"}},
    {num:"22",name:"Salat mit Mais",desc:"Kopfsalat, Tomaten, Gurken, Schinken, Käse, Mais",prices:{k:"6,50 €",g:"8,00 €"}},
    {num:"23",name:"Salat Boston",desc:"gemischter Salat mit gebratenen Pilzen, Brokkoli, Paprika, Mais, Käse und Soße",price:"9,50 €"},
    {num:"23A",name:"Salat Eigenrieden",desc:"gemischter Salat, Käse, Peperoni, Mozzarella",prices:{k:"6,50 €",g:"8,00 €"}}
  ],
  gemuese: [
    {num:"24",name:"Broccoli al Forno",desc:"Broccoli mit Sauce Hollandaise und Käse überbacken",prices:{no:"8,00 €",with:"10,00 €"}},
    {num:"25",name:"Spinat al Forno",desc:"Blattspinat, Tomaten-Sahnesoße, Knoblauch, Käse überbacken",prices:{no:"8,00 €",with:"10,00 €"}},
    {num:"26",name:"Funghi alla Gorgonzola",desc:"frische Champignons mit Gorgonzola überbacken",prices:{no:"8,00 €",with:"10,00 €"}},
    {num:"27",name:"Broccoli Küllstedt",desc:"Broccoli mit Pilzen, Artischocken, Tomatensoße, Sahne mit Käse überbacken",prices:{no:"8,00 €",with:"10,00 €"}}
  ],
  pizza: [
    {num:"28",name:"Pizza Margherita",desc:"Tomatensoße, Käse",prices:{s:"6,00 €",m:"7,00 €"}},
    {num:"29",name:"Pizza Salami",desc:"Tomatensoße, Käse, Salami",prices:{s:"6,50 €",m:"7,50 €"}},
    {num:"30",name:"Pizza Funghi",desc:"Tomatensoße, Käse, Pilze",prices:{s:"6,50 €",m:"7,50 €"}},
    {num:"31",name:"Pizza Schinken",desc:"Tomatensoße, Käse, Schinken",prices:{s:"6,50 €",m:"7,50 €"}},
    {num:"32",name:"Pizza Salami-Zwiebeln",desc:"Tomatensoße, Käse, Salami, Zwiebeln",prices:{s:"7,00 €",m:"8,00 €"}},
    {num:"33",name:"Pizza Schinken-Pilze",desc:"Tomatensoße, Käse, Schinken, Pilze",prices:{s:"7,00 €",m:"8,00 €"}},
    {num:"34",name:"Pizza Salami-Pilze",desc:"Tomatensoße, Käse, Salami, Pilze",prices:{s:"7,00 €",m:"8,00 €"}},
    {num:"35",name:"Pizza Büttstedt",desc:"Salami, Schinken, Pilze, Tomatensoße, Käse",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"35A",name:"Pizza Eigenrieden",desc:"Tomatensoße, Käse, Schinken, Broccoli, Mais",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"35B",name:"Pizza Faulungen",desc:"Tomatensoße, Käse, Thunfisch, Meeresfrüchte, Knoblauch",prices:{s:"8,00 €",m:"9,50 €"}},
    {num:"35C",name:"Pizza al Salmone",desc:"Tomatensoße, Käse, Lachs, Spinat, Knoblauch",prices:{s:"8,00 €",m:"9,50 €"}},
    {num:"36",name:"Pizza Bolognese",desc:"Fleischsoße",prices:{s:"6,50 €",m:"7,50 €"}},
    {num:"37",name:"Pizza Hawaii",desc:"Schinken, Ananas, Tomatensoße, Käse",prices:{s:"7,00 €",m:"8,00 €"}},
    {num:"38",name:"Pizza Toscana",desc:"Tomatensoße, Käse, Salami, Schinken, Pilze, Zwiebeln, Peperoniwurst",prices:{s:"8,00 €",m:"9,50 €"}},
    {num:"39",name:"Pizza Struth",desc:"Tomatensoße, Käse, Salami, Schinken, Pilze, Dönerfleisch, Zwiebeln, Peperoni",prices:{s:"9,00 €",m:"10,50 €"}},
    {num:"39A",name:"Pizza Effelder",desc:"Tomatensoße, Käse, Schinken, Spinat, Eier",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"39B",name:"Pizza Würzfleisch",desc:"Würzfleisch, Käse",prices:{s:"7,00 €",m:"8,50 €"}},
    {num:"39C",name:"Pizza Lengenfeld",desc:"Tomatensoße, Käse, Peperoniwurst, Eier",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"40",name:"Pizza-Spaghetti",desc:"Tomatensoße, Käse, Dönerfleisch, Spaghetti",prices:{s:"8,50 €",m:"10,00 €"}},
    {num:"41",name:"Pizza Mafia",desc:"Tomatensoße, Käse, Schinken, Zwiebeln, Knoblauch, scharfe Peperoni",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"42",name:"Calzone",desc:"Tomatensoße, Käse, Schinken, Salami, Paprika",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"43",name:"Calzone II",desc:"Tomatensoße, Käse, Dönerfleisch",prices:{s:"7,50 €",m:"9,00 €"}},
    {num:"44",name:"Pizza Siziliano",desc:"Tomatensoße, Käse, Salami, Schinken, Pilze, Eier",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"45",name:"Pizza Chef",desc:"Tomatensoße, Käse, Salami, Schinken, Pilze, Eier, Hackfleischsauce",prices:{s:"7,50 €",m:"9,00 €"}},
    {num:"46",name:"Pizza Thunfisch",desc:"Tomatensoße, Käse, Thunfisch, Zwiebeln",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"47",name:"Pizza Tonno",desc:"Tomatensoße, Käse, Thunfisch, Zwiebeln, Krabben",prices:{s:"8,00 €",m:"9,00 €"}},
    {num:"48",name:"Pizza MED",desc:"Tomatensoße, Käse, Salami, Schinken, Pilze, Paprika, Knoblauch, Eier",prices:{s:"8,00 €",m:"9,00 €"}},
    {num:"49",name:"Pizza Krabben",desc:"Tomatensoße, Käse, Zwiebeln, Krabben, Spezialsoße",prices:{s:"7,50 €",m:"9,00 €"}},
    {num:"50",name:"Pizza Al Capone",desc:"Tomatensoße, Käse, Artischocken, Schinken, Peperoniwurst (scharf)",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"51",name:"Pizza Döner",desc:"Tomatensoße, Käse, Zwiebeln, Dönerfleisch",prices:{s:"7,50 €",m:"9,00 €"}},
    {num:"52",name:"Pizza vegetarisch",desc:"Tomatensoße, Käse, Pilze, Artischocken, Broccoli, Zwiebeln",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"53",name:"Pizza Europa",desc:"Tomatensoße, Käse, Dönerfleisch, Paprika, Brokkoli, Zwiebeln (scharf)",prices:{s:"8,00 €",m:"9,50 €"}},
    {num:"54",name:"Pizza Diavolo",desc:"Tomatensoße, Käse, Zwiebeln, Paprika, Peperoni",prices:{s:"7,00 €",m:"8,00 €"}},
    {num:"55",name:"Pizza Mama Mia",desc:"Tomatensoße, Käse, Salami, Schinken, Thunfisch, Zwiebeln",prices:{s:"8,00 €",m:"9,50 €"}},
    {num:"56",name:"Kurdische Pizza",desc:"Tomatensoße, Hackfleisch, Zwiebeln, Dönerfleisch, Salat, Tomaten, Gurken, Spezialsoße",price:"10,00 €"},
    {num:"57",name:"Pizza Cipolla",desc:"Tomatensoße, Käse, Salami, Zwiebeln, Paprika",prices:{s:"7,00 €",m:"8,50 €"}},
    {num:"58",name:"Pizza Romana",desc:"Tomatensoße, Käse, Salami, Schinken, Peperoni",prices:{s:"7,00 €",m:"8,50 €"}},
    {num:"59",name:"Pizza Rustica",desc:"Tomatensoße, Käse, Salami, Schinken, Pilze, Paprika",prices:{s:"7,00 €",m:"8,50 €"}},
    {num:"60",name:"Pizza Spinaci",desc:"Tomatensoße, Käse, Spinat, Gorgonzola",prices:{s:"7,50 €",m:"8,50 €"}},
    {num:"61",name:"Pizza Zorn",desc:"Tomatensoße, Käse, Peperoniwurst, Thunfisch, Krabben, Knoblauch",prices:{s:"8,00 €",m:"10,00 €"}},
    {num:"62",name:"Quattro Formaggio",desc:"4 verschiedene Käsesorten",prices:{s:"9,00 €",m:"10,00 €"}},
    {num:"63",name:"Pizza Spaghetti 2",desc:"Tomatensoße, Käse, Schinken, Pilze, auf Pizza drauf Spaghetti mit Bolognese",prices:{s:"8,00 €",m:"9,00 €"}},
    {num:"64",name:"Quattro Stagioni",desc:"Tomatensoße, Käse, Schinken, Salami, Pilze, Artischocken",prices:{s:"7,50 €",m:"9,00 €"}},
    {num:"65",name:"Pizza Pikante",desc:"Tomatensoße, Käse, Salami, Pilze, Schinken, Artischocken, Paprika, Peperoni, Mais",prices:{s:"9,00 €",m:"10,00 €"}},
    {num:"66",name:"Pizza Caprese",desc:"Tomatensoße, Käse, Schinken, frische Tomaten, Mozzarella, frische Champignons",prices:{s:"8,00 €",m:"9,50 €"}}
  ],
  pasta: [
    {num:"67",name:"Spaghetti Napoli",desc:"mit Tomatensoße",price:"7,00 €"},{num:"68",name:"Spaghetti Bolognese",desc:"mit Fleischsoße",price:"7,50 €"},{num:"69",name:"Spaghetti Matriciani",desc:"mit Zwiebeln, Schinken, Tomatensoße, Sahne (scharf)",price:"8,00 €"},{num:"70",name:"Spaghetti Carbonara",desc:"Sahne, Parmesankäse, Schinken, Ei",price:"8,00 €"},{num:"71",name:"Spaghetti mit Dönerfleisch",desc:"Dönerfleisch, Parmesankäse und Sahnesoße",price:"8,50 €"},{num:"72",name:"Spaghetti al Diavolo",desc:"Schinken, Pilze, Tomatensauce, Sahnesauce, sehr scharf",price:"8,00 €"},{num:"73",name:"Spaghetti Marinara",desc:"Meeresfrüchte, Tomatensauce, Knoblauch",price:"8,50 €"},{num:"74",name:"Spaghetti alla Casa",desc:"Schinken, Pilze, Erbsen, Hackfleisch-Sahnesoße",price:"8,50 €"},{num:"75",name:"Spaghetti Spinaci",desc:"Spinat, Gorgonzola, Sahnesoße",price:"8,50 €"},{num:"76",name:"Rigatoni Napoli",desc:"mit Tomatensoße",price:"7,00 €"},{num:"77",name:"Rigatoni Bolognese",desc:"mit Fleischsoße",price:"7,50 €"},{num:"78",name:"Rigatoni al Brokkoli",desc:"Brokkoli, Parmesankäse, Sahnesoße",price:"8,00 €"},{num:"79",name:"Rigatoni alla Chef",desc:"Schinken, Pilze, Parmesankäse, Sahnesoße",price:"8,00 €"},{num:"83",name:"Nudeln al Salmone",desc:"Spinat, Lachs, Knoblauch-Sahnesauce",price:"10,00 €"},{num:"84",name:"Tortellini al Salmone",desc:"mit Lachs-Sahnesauce",price:"9,50 €"},{num:"85",name:"Tortellini Napoli",desc:"mit Tomatensoße",price:"7,50 €"},{num:"86",name:"Tortellini Bolognese",desc:"mit Fleischsoße",price:"8,00 €"},{num:"87",name:"Tortellini alla Panna",desc:"Schinken, Pilze, Sahnesoße",price:"8,50 €"},{num:"88",name:"Tortellini alla Casa",desc:"Schinken, Pilze, Erbsen, Hackfleischsauce",price:"8,50 €"},{num:"89",name:"Gnocchi alla Gorgonzola",desc:"Kartoffelklößchen in Gorgonzolasauce und Schinken",price:"8,00 €"},{num:"90",name:"Spaghetti mit Dönerfleisch überbacken",desc:"Tomaten-Sahnesoße, Käse überbacken",price:"9,50 €"},{num:"90a",name:"Nudeln mit Würzfleisch",desc:"Sahnesoße, Käse überbacken",price:"9,50 €"},{num:"91",name:"Spaghetti Broccoli",desc:"Broccoli, Tomaten-Sahnesoße, Käse überbacken",price:"9,00 €"},{num:"92",name:"Rigatoni mit Dönerfleisch",desc:"Tomaten-Sahnesoße, Käse überbacken",price:"9,50 €"},{num:"93",name:"Rigatoni Broccoli",desc:"Broccoli, Tomaten-Sahnesoße, Käse überbacken",price:"8,50 €"},{num:"94",name:"Rigatoni al Forno",desc:"Schinken, Erbsen, Hackfleischsauce, Käse überbacken",price:"8,50 €"},{num:"95",name:"Rigatoni Vegetaria",desc:"Verschiedene Gemüse, Tomatensoße, Käse überbacken",price:"8,50 €"},{num:"96",name:"Rigatoni Monalisa",desc:"Schinken, Spinat, Mozzarella, Sahnesoße, Käse überbacken",price:"8,50 €"},{num:"97",name:"Gnocchi alla Chef",desc:"Kartoffelklößchen, Spinat, Zucchini, Tomaten-Sahnesoße, Käse überbacken",price:"8,50 €"},{num:"97a",name:"Gnocchi Karavar",desc:"Dönerfleisch, Zucchini, Knoblauch, Tomaten-Sahnesoße, Käse überbacken",price:"9,00 €"},{num:"98",name:"Tortellini al Forno",desc:"Schinken, Erbsen, Hackfleischsauce, Käse überbacken",price:"9,00 €"},{num:"99",name:"Combinazione",desc:"drei verschiedene Nudelsorten, Hackfleischsauce, Käse überbacken",price:"9,00 €"},{num:"100",name:"Tortellini mit Dönerfleisch",desc:"Tomatensoße, Sahne, Käse",price:"10,00 €"}
  ],
  schnitzel: [
    {num:"101",name:"Schnitzel 'Wiener Art'",desc:"Pommes und Salat",price:"10,00 €"},{num:"102",name:"Jägerschnitzel",desc:"Pilzsauce, Pommes und Salat",price:"10,50 €"},{num:"103",name:"Rahmschnitzel",desc:"Rahmsauce, Pommes und Salat",price:"10,50 €"},{num:"104",name:"Zigeunerschnitzel",desc:"pikante Zigeunersauce, Pommes und Salat",price:"10,50 €"},{num:"105",name:"Schnitzel alla Chef",desc:"Schinken, Käse, Sahnesoße, Pommes, Salat",price:"11,50 €"},{num:"106",name:"Schnitzel Cabrese",desc:"frische Tomaten, Mozzarella, Käse überbacken, Pommes, Salat",price:"11,50 €"},{num:"107",name:"Hawaii-Schnitzel",desc:"Schinken, Ananas, Sahnesauce, Käse überbacken, Pommes, Salat",price:"11,50 €"},{num:"108",name:"Schnitzel Bolognese",desc:"Schinken, Käse, Hackfleischsauce, Pommes, Salat",price:"11,50 €"},{num:"109",name:"Schnitzel Würzfleisch",desc:"mit Käse überbacken, Pommes, Salat",price:"11,50 €"},{num:"110",name:"Schnitzel Gorgonzola",desc:"mit Gorgonzola und Sahnesoße, Pommes, Salat",price:"11,00 €"},{num:"113",name:"Schnitzel Dönerfleisch",desc:"Champignons, Paprika, Zwiebeln, Käse überbacken, Pizzabrot und Salat",price:"13,00 €"}
  ],
  indisch: [
    {num:"114",name:"Chicken Curry",desc:"Hähnchen mit Curry, Pommes und Salat",price:"13,00 €"},{num:"115",name:"Murg Palak",desc:"Hähnchenfleisch mit Spinat, Pommes und Salat",price:"13,00 €"},{num:"116",name:"Chicken Bhuna",desc:"Hähnchenfleisch mit Zwiebeln, Knoblauch, Ingwer, grünem Paprika, gebraten, Pommes und Salat",price:"14,00 €"},{num:"117",name:"Chicken Vindallo",desc:"Hähnchenfleisch mit sehr scharfer Vindallosoße, Pommes und Salat",price:"13,00 €"},{num:"118",name:"Gemüsepfanne vegetarisch",desc:"Zucchini, Pilze, Tomaten, Peperoni, Paprika, Erbsen, Knoblauch, Käse überbacken und Pizzabrot",price:"11,00 €"}
  ],
  getraenke: [
    {icon:"🥤",size:"Cola / Fanta / Sprite 0,33 l",price:"2,50 €"},{icon:"🧃",size:"Apfelschorle / Wasser 0,5 l",price:"3,00 €"},{icon:"🍶",size:"Cola / Fanta 1,25 l",price:"3,75 €"},{icon:"☕",size:"Tasse Tee",price:"1,00 €"}
  ]
};