import S from '@sanity/desk-tool/structure-builder'

import {
    FiBookOpen,
    FiBox,
    FiBriefcase,
    FiFileText,
    FiHome,
    FiTag,
    FiUsers
} from 'react-icons/fi'

export default () => {
    return S.list()
      .title('Marketing Content')
      .items([
        S.listItem()
          .title('Blog')
          .child(
            S.list()
            .title('Blog Content')
            .items([
            
                // Blog Posts
                S.listItem()
                    .title('Blog Posts')
                    .child(
                        S.documentTypeList('post')
                        .title('Blog Posts')
                        .child((documentId) =>
                            S.document()
                            .id('post')
                            .schemaType('post')
                            .documentId(documentId)
                            )
                    )
                    .icon(FiFileText),
                // Blog Post Categories
                S.listItem()
                    .title('Post Categories')
                    .child(
                        S.documentTypeList('category')
                        .title('Post Categories')
                        .child((documentId) =>
                            S.document()
                            .id('category')
                            .schemaType('category')
                            .documentId(documentId)
                            )
                    )
                    .icon(FiTag),
                // Blog Authors
                S.listItem()
                    .title('Authors')
                    .child(
                        S.documentTypeList('author')
                        .title('Authors')
                        
                        .child((documentId) =>
                            S.document()
                            .id('author')
                            .schemaType('author')
                            .documentId(documentId)
                        )
                        
                    )
                    .icon(FiUsers),
            ])
          )
          .icon(FiBookOpen),

          // Case Studies
          S.listItem()
          .title('Case Studies')
          .child(
            S.list()
            .title('Case Study Content')
            .items([
            
                // Projects
                S.listItem()
                    .title('Projects')
                    .child(
                        S.documentTypeList('project')
                        .title('Projects')
                        .child((documentId) =>
                            S.document()
                            .id('project')
                            .schemaType('project')
                            .documentId(documentId)
                            )
                    )
                    .icon(FiBox),
                // Clients
                S.listItem()
                    .title('Clients')
                    .child(
                        S.documentTypeList('client')
                        .title('Clients')
                        .child((documentId) =>
                            S.document()
                            .id('client')
                            .schemaType('client')
                            .documentId(documentId)
                            )
                    )
                    .icon(FiUsers),
            ])
          )
          .icon(FiBriefcase),
      ])
}