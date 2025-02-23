import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('product').title('Product'),
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['product','category',].includes(item.getId()!),
      ),
    ])
  