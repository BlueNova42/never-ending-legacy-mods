//doesnt work
G.AddData({
   name: 'professions',
   author: 'BlueNova42',
   desc: 'WIP',
   engineVersion: 1,
   manifest: 'blueManifest.js',
   requires: ['Default dataset*'],
   func: function() {
      new G.Unit({
         name: 'doctor',
         desc: '@uses [herb]s to heal the [sick] and the [wounded]<>The [doctor] has carefully studied how herbs work to cure illness.',
         icon: [0, 5],
         cost: {},
         use: {
            'worker': 1
         },
         staff: {
            'metal tools': 1
         },
         upkeep: {
            'coin': 0.4
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
            chance: 4 / 5,
            every: 2
         }, {
            type: 'convert',
            from: {
               'wounded': 1,
               'herb': 2.5
            },
            into: {
               'adult': 1
            },
            chance: 1 / 2,
            every: 5
         }, ],
         req: {
            'healing': false
         },
         category: 'spiritual',
         priority: 50,
      });
   }
})
