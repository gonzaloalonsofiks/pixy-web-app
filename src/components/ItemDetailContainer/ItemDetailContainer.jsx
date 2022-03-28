import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [singleService, setSingleService] = useState({});
  const [loading, setLoading] = useState(true);
  const { detailID } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDb = doc(db, "services", detailID);
    getDoc(queryDb)
      .then((response) =>
        setSingleService({ id: response.id, ...response.data() })
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail singleService={singleService} />
      )}
    </div>
  );
};
