import styles from "./Point.module.css";

function Point({
  background_image_original,
  medium_cover_image,
  url,
  title_long,
  rating,
  runtime,
  genres,
  download_count,
}) {
  return (
    <div>
      <img className={styles.bg} src={background_image_original} />
      <div className={styles.show}>
        <img className={styles.img} src={medium_cover_image} />
        <div className={styles.textbox}>
          <h1 className={styles.title}>
            <a href={url} target="_blank">
              {title_long}
            </a>
          </h1>
          <ul>
            <li>레이팅 {rating}</li>
            <li>런타임 {runtime}</li>
            <li>다운로드 수 {download_count}</li>
            <li>
              Genres
              <ul>
                {genres.map((g) => (
                  <li>{g}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Point;
