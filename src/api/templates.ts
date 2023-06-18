import ky from 'ky';

export const basicRequest = ky.create({
  headers: {
    'Content-Type': 'application/json'
  },
  hooks: {
    beforeError: [
      async (err) => {
        const { response } = err;
        if (response) {
          const json = await response.json();
          err.message = `${response.status}: ${json.error}`;
        }
        return err;
      }
    ]
  }
});
