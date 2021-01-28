module.exports = {
  title: 'ATLAS_ORM_POOL_ACQUIRE',
  description: `
Tempo em milesegundos que o ORM deve aguardar uma resposta do banco de dados antes de dar **TimeOut**.
  `,
  example: [
    {
      lang: 'prompt',
      content: `
ATLAS_ORM_POOL_ACQUIRE=10000
      `,
    },
  ],
}