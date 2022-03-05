interface IError {
  error: string;
  errorMessage: string;
  statusCode: number;
  success: boolean;
}

export const handleException = (error: any) => {
  console.log(error.response);

  if (error.response) {
    const data: IError = error.response.data;
    if (data.statusCode === 404) {
      alert('요청하려는 URL을 찾을 수 없습니다.');
    } else if (data.statusCode === 403) {
      alert('403')
    } else {
      alert(data.errorMessage);
    }
    // TODO: 추후 서버에서 에러코드 처리형식이 나올 시 따로 처리해야함
  } else {
    alert('오류가 발생했습니다.');
  }
};
