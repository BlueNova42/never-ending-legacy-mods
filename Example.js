G.AddData({
   name: 'Example mod',
   author: 'Orteil',
   desc: 'A simple example mod that adds hot peppers and hot sauce.',
   engineVersion: 1,
   manifest: 'modManifest.js',
   requires: ['Default dataset*'],
   sheets: {
      'spicySheet': 'img/spicyModIconSheet.png'
   },
   func: function() {
      new G.Res({
         name: 'hot pepper',
         desc: '[hot pepper]s are loaded with capsaicin and, depending on who you ask, may produce a pleasant burn when eaten.',
         icon: [0, 0, 'spicySheet'],
         turnToByContext: {
            'eat': {
               'health': 0.01,
               'happiness': 0.03
            },
            'decay': {
               'spoiled food': 0.5
            }
         },
         partOf: 'food',
         category: 'food',
      });
      new G.Res({
         name: 'hot sauce',
         desc: 'Made from [herb]s and the [hot pepper,Spiciest peppers], this [hot sauce] stays fresh for a while and will leave anyone panting and asking for more.',
         icon: [1, 0, 'spicySheet'],
         turnToByContext: {
            'eat': {
               'health': 0.03,
               'happiness': 0.1
            },
            'decay': {
               'hot sauce': 0.95,
               'spoiled food': 0.05
            }
         },
         partOf: 'food',
         category: 'food',
      });
      G.getDict('grass').res['gather']['hot pepper'] = 3;
      G.getDict('artisan').modes['hot sauce'] = {
         name: 'Make hot sauce',
         desc: 'Turn 3 [hot pepper]s and 3 [herb]s into 1 [hot sauce].',
         req: {
            'hot sauce preparing': true
         },
         use: {
            'knapped tools': 1
         }
      };
      G.getDict('artisan').effects.push({
         type: 'convert',
         from: {
            'hot pepper': 3,
            'herb': 3
         },
         into: {
            'hot sauce': 1
         },
         every: 3,
         mode: 'hot sauce'
      });
      new G.Tech({
         name: 'hot sauce preparing',
         desc: '@[artisan]s can now produce [hot sauce] from [hot pepper]s and [herb]s//This special recipe allows a skilled craftsman to fully express the complex aromas present in hot peppers.',
         icon: [0, 1, 'spicySheet'],
         cost: {
            'insight': 10
         },
         req: {
            'cooking': true
         },
      });
      new G.Trait({
         name: 'hot sauce madness',
         desc: '@your people appreciate [hot sauce] twice as much and will be twice as happy from consuming it.',
         icon: [1, 1, 'spicySheet'],
         chance: 20,
         req: {
            'hot sauce preparing': true
         },
         effects: [{
            type: 'function',
            func: function() {
               G.getDict('hot sauce').turnToByContext['eat']['happiness'] = 0.2;
            }
         }, ],
      });
   }
});
