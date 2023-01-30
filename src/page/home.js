import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Post () {
  const [ t, i18n ] = useTranslation();

  return (
    <>
      <h2>{t('hello')}</h2>
      <p>{t('link')}</p>
      <Link to='/post'>{t('message')}</Link>
    </>
  )
}

export default Post;