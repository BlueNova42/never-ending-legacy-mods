G.AddData({
   name: 'professions',
   desc: 'WIP',
   engineVersion: 1,
   manifest: 0,
   requires: ['Default dataset*'],
   func: function() {
      G.getDict('unitCategories').push({
         id: 'specialized',
         name: 'Specialized'
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
            chance: 1 / 2,
            every: 5
         }, ],
         req: {
            'healing': true
         },
         category: 'specialized',
         priority: 5,
      });
   }
})
