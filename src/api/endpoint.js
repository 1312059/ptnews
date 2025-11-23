const API_KEY = "15725b4d-5e3c-4c01-98e2-49e6e96bb87a";

export function getNewsCategoriesEndpoint(category, pageNumber= 1, pageSize = 20 ) {
    const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;



    return `
https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
    const queryParams = `?api-key=${API_KEY}&show-fields=all`;
    
    return `https://content.guardianapis.com/${newsId}${queryParams}`;
}