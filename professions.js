//slightly works
G.AddData({
   name: 'Professions',
   author: 'BlueNova42',
   desc: 'Adds more units (WIP)',
   engineVersion: 1,
   manifest: 'blueManifest.js',
   requires: ['Default dataset*'],
   func: function() {
      G.unitCategories.push({
         id: 'specialized',
         name: 'Specialized'
      });
      new G.Res({
         name: 'compost',
         desc: '[compost] is decayed material used as a plant fertilizer.',
         icon: [3, 7],
         turnToByContext: {
            'eat': {
               'health': 0.01,
               'happiness': 0.03
            },
            'decay': {
               'spoiled food': 0.5
            }
         },
         category: 'food',
      });
      new G.Unit({
         name: 'farmer',
         desc: '@turns [spoiled food] and [muddy water] into [compost]@uses [compost] to grow more herbs. @handles other farm tasks',
         icon: [4, 10],
         cost: {},
         use: {
            'worker': 0
         },
         staff: {
            'metal tools': 0
         },
         upkeep: {
            'coin': 1
         },
         effects: [{
            type: 'convert',
            from: {
               'spoiled food': 3,
               'mudddy water': 1
            },
            into: {
               'compost': 1
            },
            chance: 1,
            every: 1
         }, ],
         /*req: {
            //'healing': true
         },*/
         category: 'debug',
         //category: 'specialized',
         priority: 50,
      });
      new G.Unit({
         name: 'doctor',
         desc: '@uses [herb]s to heal the [sick] and the [wounded]<>The [doctor] has carefully studied how herbs work to cure illness.',
         icon: [0, 5],
         cost: {},
         use: {
            'worker': 1
         },
         staff: {
            'metal tools': 2
         },
         upkeep: {
            'coin': 1
         },
         effects: [{
            type: 'convert',
            from: {
               'sick': 1,
               'herb': 2.5
            },
            into: {
               'adult': 1
            },
            //chance: 4 / 5,
            chance: 1,
            every: 1
         }, {
            type: 'convert',
            from: {
               'wounded': 1,
               'herb': 2.5
            },
            into: {
               'adult': 1
            },
            //chance: 1 / 2,
            chance: 1,
            every: 5
         }, ],
         req: {
            'healing': true
         },
         //category: 'debug',
         category: 'specialized',
         priority: 50,
      });
   }
})
