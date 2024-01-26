export enum SearchCollections {
  Foods = "foods",
  FoodsEs = "foods_es",
}

export interface SearchResult {
  id: string
  url: string
  title: string
  order?: number
  date: number
  categories: {
    id: number
    name: string
  }[]
  allergenFree: string[]
  warning: {
    title: string
    content: string
  }
  description: {
    title: string
    content: string
  }
  foodType?: string[]
}

export interface AlgoliaFoodHit {
  allergenFree: Array<string>
  content: Array<string>
  contentType: "pageFood"
  createdAt: number
  eaterExperience: string
  featureImage: {
    fields: {
      image: {
        fields: {
          file: {
            url: string
          }
        }
      }
    }
  }
  foodType: Array<string>
  id: string
  nutritionRating: number
  objectID: string
  poopFriendly: boolean
  prepTime: number
  slug: string
  title: string
}
