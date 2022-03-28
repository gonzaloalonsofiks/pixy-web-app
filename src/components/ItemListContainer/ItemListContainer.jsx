import React from "react";
import ServicesList from "./ServicesList/ServicesList";
import ItemList from "./ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore";

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
      {/* <ServicesList serviceCount={3} /> */}
      {loading ? <p>Cargando...</p> : <ItemList services={services} />}
    </main>
  );
}

export default ItemListContainer;
