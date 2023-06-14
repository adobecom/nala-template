module.exports = {
  FeatureName: 'Quote Block',
  features: [
    {
      tcid: '0',
      name: '@Quote ',
      path: '/drafts/nala/blocks/quote/quote',
      data: {
        quoteCopy: '3D is a crucial part of how we explore the brand in a digital workflow',
        figCaption: 'Benny Lee',
        cite: 'Global Manager of Experiential Design, Coca-Cola Company',
      },
      tags: '@smoke @regression @milo,',
    },

    {
      tcid: '1',
      name: '@Quote (contained)',
      path: '/drafts/nala/blocks/quote/quote-contained',
      data: {
        quoteCopy: '3D is a crucial part of how we explore the brand in a digital workflow',
        figCaption: 'Benny Lee',
        cite: 'Global Manager of Experiential Design, Coca-Cola Company',
      },
      tags: '@quote-contained @smoke @regression @milo,',
    },
  ],
};
