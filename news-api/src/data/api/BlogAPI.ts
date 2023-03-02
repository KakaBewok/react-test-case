import { Blog } from '../../domain/Blog';

const baseUrl = 'https://newsapi.org/v2/everything?domains=wsj.com';
const APIKey = '&apiKey=2097ce8336e94ca1bd511fbaaa6571da';

const translateStatusToErrorMessage = (status: number) => {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission to view the blog(s).';
    default:
      return 'There was an error retrieving the blog(s). Please try again!';
  }
}
const checkStatus = (response: any) => {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}
const parseJSON = (response: Response) => {
  return response.json();
}
const convertToBlogModels = (data: any): Blog[] => {
  let blog: Blog[] = data.articles.map(convertToProjectModel);
  return blog;
}
const convertToProjectModel = (item: any): Blog => {
  return new Blog(item);
}

const blogAPI = {
  get(page = 1, limit = 20) {
    const pageSize = `&pageSize=${limit}&page=${page}`;
    let url = `${baseUrl}${pageSize}${APIKey}`;
    return fetch(url)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToBlogModels)
      .catch((error: TypeError) => {
        console.log('log client error ' + error);
        throw new Error(
          'There was an error retrieving the blogs. Please try again!'
        );
      });
  },

  getByTitle(title: any ) {
    let url = `${baseUrl}&q=${title}${APIKey}`;
    return fetch(`${url}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToProjectModel);
  },
};

export { blogAPI };