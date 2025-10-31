import React from 'react'
import { useAuthValue } from '../../context/AuthContext';
import styles from './Dashboard.module.css'
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid
  const { documents: posts } = useFetchDocuments("posts", null, uid);
  

  const deletePost = (id) => {
    console.log("delete", id);
  }

  return (
    <div className={styles.dashboard}>
        <h1>Dashboard</h1>
        <h2>Gerencie seus posts</h2>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/create-post" className="btn">
              Criar primeiro post
            </Link>
          </div>
        ) : (
          <div className={styles.post_header}>
            <span>Título</span>
            <span>Ações</span>
          </div>
        )}

        {posts && posts.map((post) => (
          <div key={post.id} className={styles.post_row}>
            <p>{post.title}</p>
            
            <div>
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button className="btn btn-outline btn-danger" onClick={() => deletePost(post.id)}>
                Excluir
              </button>
            </div>
          </div>
          )
        )}
    </div>
  )
}

export default Dashboard;