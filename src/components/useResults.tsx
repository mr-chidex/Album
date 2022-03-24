import { useState, useEffect } from "react";
import api from "../utils/api";
import { Photos } from "../utils/types";

export default () => {
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Photos[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/images", {
          params: {
            _start: 0,
            _limit: 30,
          },
        });
        setPhotos(data?.images);
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    })();
  }, []);

  return { errorMessage, photos, total: photos.length };
};
