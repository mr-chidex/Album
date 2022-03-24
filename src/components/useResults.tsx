import { useState, useEffect } from "react";

import api from "../utils/api";
import { Photos } from "../utils/types";

export default () => {
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await api.get("/images", {
          params: {
            _start: 0,
            _limit: 30,
          },
        });
        setPhotos(data?.images);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setErrorMessage(error.message);
      }
    })();
  }, []);

  return { errorMessage, photos, total: photos.length, loading };
};
