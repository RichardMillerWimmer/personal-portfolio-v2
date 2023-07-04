type slugObj = {
    name: string;
    slug: string;
}

export function generateSlug(category: string): string {
    return category
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function generateCategoriesData(categories: string[]): slugObj[] {
    let categoriesData = categories.map((elem) => {
        return {
            name: elem,
            slug: `${generateSlug(elem)}` 
        }
    })
    return categoriesData
}

export function getCategorySet(array, key) {
    let results: string[] = []
    for(const element of array) {
        if(element.hasOwnProperty(key) && Array.isArray(element[key])) {
            results.push(...element[key])
        }
    }
    return new Set(results)
}