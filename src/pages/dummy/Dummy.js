import { useNavigate, useParams } from 'react-router-dom';
import styles from './Dummy.module.css';

const Dummy = () => {
  const params = useParams();
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate('/online-store/');
  };

  return (
    <div className={styles['container']}>
      <div className={styles['page']}>
        <h2>
          {params.name[0].toUpperCase() +
            params.name.slice(1, params.name.length)}{' '}
          page
        </h2>

        <div className={styles['articles']}>
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit repellat magni obcaecati fugiat laborum optio quasi.
            Ducimus adipisci fugiat eveniet a accusantium autem! Necessitatibus,
            eos. obcaecati fugiat laborum optio quasi. Ducimus adipisci fugiat
            eveniet a accusantium autem! Necessitatibus, eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit repellat magni obcaecati fugiat laborum optio quasi.
            Ducimus adipisci fugiat eveniet a accusantium autem! Necessitatibus,
            eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit repellat magni obcaecati fugiat laborum optio quasi.
            Ducimus adipisci fugiat eveniet a accusantium autem! Necessitatibus,
            eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit repellat magni obcaecati fugiat laborum optio quasi.
            Ducimus adipisci fugiat eveniet a accusantium autem! Necessitatibus,
            eos. sit amet consectetur adipisicing elit. Reprehenderit repellat
            magni obcaecati fugiat laborum optio quasi. Ducimus adipisci fugiat
            eveniet a accusantium autem! Necessitatibus, eos.
          </p>

          <button onClick={homeHandler}>Go home</button>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
