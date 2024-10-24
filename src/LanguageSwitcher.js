import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button className='normalBtn' onClick={() => handleLanguageChange('en')}>English</button>
      <button className='normalBtn' onClick={() => handleLanguageChange('zh')}>中文</button>
    </div>
  );
}

export default LanguageSwitcher