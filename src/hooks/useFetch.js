import { useReducer, useState, useEffect } from 'react';

const fetchReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      throw new Error('Not suppored action');
  }
};

export default function useFetch(initialUrl) {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(fetchReducer, {
    data: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const response = await fetch(url);
        if (response.status < 200 || response.status >= 300) {
          throw new Error('Error fetching data');
        }
        const payload = await response.json();

        dispatch({ type: 'FETCH_SUCCESS', payload });
      } catch(error) {
        dispatch({ type: 'FETCH_ERROR', error })
      }
    }

    fetchUsers();
  }, [url]);

  return [state, setUrl];
}