import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Post () {
  const [ t, i18n ] = useTranslation();

  return (
    <>
      <p>{t('page')}</p>
      <Link to='/'>{t('home')}</Link>
    </>
  )
}

export default Post;