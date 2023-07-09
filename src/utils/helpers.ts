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
    let categoriesData = categories.map((tag) => {
        return {
            name: tag,
            slug: `${generateSlug(tag)}` 
        }
    })
    return categoriesData
}

export function getCategorySet(array, key) {
    let results: string[] = []
    for(const element of array) {
        if(element.hasOwnProperty(key)) {
            if(Array.isArray(element[key])){
                results.push(...element[key])
            } else results.push(element[key])
        }
    }
    return results
}