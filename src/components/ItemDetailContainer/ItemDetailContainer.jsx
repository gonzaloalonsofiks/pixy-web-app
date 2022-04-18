import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="container">
      {loading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <ItemDetail singleService={singleService} />
      )}
    </div>
  );
};
