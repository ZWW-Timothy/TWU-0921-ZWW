function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('GET', url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      successCallback(xhr.response);
    } else {
      errorCallback(xhr);
    }
  };
  xhr.onerror = () => {
    errorCallback(xhr);
  };
  xhr.send();
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
