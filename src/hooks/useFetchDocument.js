import {useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        const fetchDocuments = async () => {
            if (cancelled) return;
            setLoading(true);

            try {
                const docRef = doc(db, docCollection, id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setDocument(docSnap.data());
                } else {
                    setError('Documento não encontrado');
                }   
            } catch (error) {
                setError(error.message);
            }
            
            setLoading(false);
        };

        fetchDocuments();
    }, [docCollection, id, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []); 
    return { document, loading, error };
}