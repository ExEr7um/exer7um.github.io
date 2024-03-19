export default defineEventHandler(async (event) => {
  const { limit } = getQuery(event)

  // Если limit передан, но не является числом
  if (limit && !Number(limit))
    // Выводим ошибку
    throw createError({
      message: "Параметр limit не является числом",
      status: 400,
    })

  /** Список проектов */
  const personalProjects = await useDrizzle().query.personalProjects.findMany({
    columns: {
      createdAt: false, // Скрываем поле createdAt
    },
    limit: limit as number, // Ограничиваем количество результатов
    orderBy: desc(tables.personalProjects.createdAt), // Сортируем по дате создания — сначала новые
    with: {
      tags: {
        columns: {
          personalProjectId: false,
          tagId: false,
        },
        with: {
          tag: true,
        },
      },
    },
  })

  return personalProjects.map((project) => {
    return {
      ...project,
      tags: project.tags.map((tag) => tag.tag),
    }
  })
})
