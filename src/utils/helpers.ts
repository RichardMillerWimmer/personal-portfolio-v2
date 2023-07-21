type slugObj = {
    params: {
        slug: string;
    }
    props: {
        posts: any;
        tag: string;
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
                slug: `${generateSlug(tag)}` 
            },
            props: {
                posts: filteredPosts,
                tag: tag
            }
        }
    })
    return categoriesData
}

export function getDynamicSet(array, key) {
    let results: string[] = []
    for(const element of array) {
        if(Object.hasOwn(element, key) && !results.includes(element[key])) {
            if(Array.isArray(element[key])){
                results.push(...element[key])
            } else results.push(element[key])
        }
    }
    return results
}