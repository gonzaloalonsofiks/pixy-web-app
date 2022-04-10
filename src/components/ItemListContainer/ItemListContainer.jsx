import React from "react";
import ItemList from "./ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryID } = useParams();

  useEffect(() => {
    const db = getFirestore();

    if (categoryID) {
      const queryCollection = collection(db, "services");
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoryID)
      );
      getDocs(queryFilter)
        .then((response) =>
          setServices(
            response.docs.map((item) => ({ id: item.id, ...item.data() }))
          )
        )
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      const queryCollection = collection(db, "services");
      getDocs(queryCollection)
        .then((response) =>
          setServices(
            response.docs.map((item) => ({ id: item.id, ...item.data() }))
          )
        )
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [categoryID]);

  return (
    <main className="container-services">
      {loading ? <div>Cargando...</div> : <ItemList services={services} />}
    </main>
  );
}

export default ItemListContainer;
