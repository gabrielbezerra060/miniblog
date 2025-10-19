import {useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        const fetchDocuments = async () => {
            if (cancelled) return;
            setLoading(true);
            try {
                const collectionRef = collection(db, docCollection);    
                let q;

                if (search) {
                    q = query(  

                        collectionRef,
                        where("tagsArray", "array-contains", search),
                        orderBy("createdAt", "desc")
                    );
                } else if (uid) {
                    q = query(
                        collectionRef,
                        where("uid", "==", uid),
                        orderBy("createdAt", "desc")
                    );
                } else {
                    q = query(
                        collectionRef,
                        orderBy("createdAt", "desc")
                    );
                }
                const querySnapshot = await getDocs(q);
                let results = [];
                querySnapshot.forEach((doc) => {
                    results.push({ id: doc.id, ...doc.data() });
                });
                setDocuments(results);
            } catch (error) {
                console.log(error);
                setError(error.message);
            }   
            setLoading(false);
        };

        fetchDocuments();
    }, [docCollection, search, uid, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []); 
    return { documents, loading, error };
}