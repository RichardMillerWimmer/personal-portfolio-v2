type slugObj = {
    params: {
        tag: string;
    }
    props: {
        posts: any
    }
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

export function generateCategoriesData(categories: string[], allPosts): slugObj[] {
    let categoriesData = categories.map((tag) => {
        let filteredPosts = allPosts.filter(post => post.frontmatter.categories.includes(tag))
        return {
            params: {
                tag: `${generateSlug(tag)}` 
            },
            props: {
                posts: filteredPosts
            }
        }
    })
    return categoriesData
}

export function getDynamicSet(array, key) {
    let results: string[] = []
    for(const element of array) {
        if(element.hasOwnProperty(key) && !results.includes(element[key])) {
            if(Array.isArray(element[key])){
                results.push(...element[key])
            } else results.push(element[key])
        }
    }
    return results
}